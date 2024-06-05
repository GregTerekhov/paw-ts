'use client';

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className='inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-accentBase-light shadow-sm transition-colors dark:bg-accentBase/20'
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className='pointer-events-none block h-4 w-4 rounded-full bg-accentBase shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0' />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
