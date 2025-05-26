import React, { forwardRef } from "react";

// A simple cn utility for combining class names (if you don't have one)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Simplified alertVariants (basic version without cva)
// You can install `class-variance-authority` if you want, but here's a fallback:

function alertVariants({ variant = "default" } = {}) {
  const base = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground";

  const variants = {
    default: "bg-white text-black",
    destructive: "border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600",
  };

  return cn(base, variants[variant] || variants.default);
}

// Alert component
const Alert = forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

// AlertTitle component
const AlertTitle = forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

// AlertDescription component
const AlertDescription = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
