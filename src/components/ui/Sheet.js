// Sheet.js

import React, { useState, forwardRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils'; // Adjust this import if needed

const Sheet = ({ children }) => {
  const [open, setOpen] = useState(false);
  return React.cloneElement(children, { open, setOpen });
};

const SheetTrigger = ({ setOpen, children }) => {
  return React.cloneElement(children, {
    onClick: () => setOpen(true),
  });
};

const SheetContent = forwardRef(
  ({ side = 'right', className, children, open, setOpen, ...props }, ref) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
        <div
          ref={ref}
          className={cn(
            'bg-white w-3/4 max-w-sm p-6 shadow-lg',
            side === 'left' && 'ml-auto',
            side === 'right' && 'mr-auto',
            className
          )}
          {...props}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          {children}
        </div>
      </div>
    );
  }
);

const SheetHeader = ({ className, children }) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}>
    {children}
  </div>
);

const SheetFooter = ({ className, children }) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}>
    {children}
  </div>
);

const SheetTitle = ({ className, children }) => (
  <h2 className={cn('text-lg font-semibold', className)}>{children}</h2>
);

const SheetDescription = ({ className, children }) => (
  <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
);

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
