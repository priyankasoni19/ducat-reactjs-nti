// Separator.js

import React, { forwardRef } from 'react';
import { cn } from '../lib/utils'; // Adjust this import if needed

const Separator = forwardRef(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={decorative ? 'presentation' : 'separator'}
        aria-orientation={orientation}
        className={cn(
          'shrink-0 bg-border',
          orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export { Separator };
