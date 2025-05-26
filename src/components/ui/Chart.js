import React, { createContext, forwardRef, useContext, useId, useMemo } from 'react';
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from 'recharts';

const ChartContext = createContext(null);

export function useChart() {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

export const ChartContainer = forwardRef(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          data-chart={chartId}
          ref={ref}
          className={`flex aspect-video justify-center text-xs ${className}`}
          {...props}
        >
          <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  }
);

export const ChartTooltip = RechartsTooltip;

export const ChartTooltipContent = forwardRef(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) return null;

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={labelClassName}>{labelFormatter(value, payload)}</div>;
      }

      return value ? <div className={labelClassName}>{value}</div> : null;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) return null;

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={`grid min-w-[8rem] items-start gap-1.5 rounded border bg-white px-2.5 py-1.5 text-xs shadow ${className}`}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div key={item.dataKey} className="flex items-center gap-2">
                {!hideIndicator && (
                  <div
                    style={{
                      width: indicator === "dot" ? "10px" : "6px",
                      height: "10px",
                      backgroundColor: indicatorColor,
                      borderRadius: indicator === "dot" ? "50%" : "0",
                    }}
                  />
                )}
                <div className="flex-1">
                  {nestLabel ? tooltipLabel : null}
                  <span>{itemConfig?.label || item.name}</span>
                </div>
                {item.value !== undefined && (
                  <span className="font-mono">{item.value.toLocaleString()}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export const ChartLegend = RechartsLegend;

export const ChartLegendContent = forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();

    if (!payload?.length) return null;

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center gap-4 ${verticalAlign === "top" ? "pb-3" : "pt-3"} ${className}`}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div key={item.value} className="flex items-center gap-1.5">
              {!hideIcon && (
                <div
                  className="h-2 w-2 rounded"
                  style={{ backgroundColor: item.color }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);

// Helper
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) return undefined;

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" ? payload.payload : undefined;

  let configLabelKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }

  return config[configLabelKey] || config[key];
}
