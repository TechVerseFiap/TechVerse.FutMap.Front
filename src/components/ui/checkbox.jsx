import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { SaveIcon, UnsaveIcon } from "../icons/Icons"
import { cn } from "@/lib/utils"

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      className={cn("relative peer w-6 h-6", className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="flex items-center justify-center absolute inset-0 z-10"
        style={{ display: "flex" }}
      >
      <SaveIcon className="w-6 h-6" />
      </CheckboxPrimitive.Indicator>

      <span className="absolute inset-0 flex items-center justify-center peer-data-[state=checked]:hidden z-0">
        <UnsaveIcon className="w-6 h-6 text-muted-foreground" />
      </span>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
