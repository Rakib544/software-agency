import { cn } from "@/lib/utils";

interface BorderProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "left";
  as?: any;
}

export function Border({
  className,
  position = "top",
  as: Component = "div",
  ...props
}: BorderProps) {
  return (
    <Component
      className={cn(
        className,
        "relative before:absolute after:absolute",

        "before:bg-white after:bg-white/10",
        position === "top" &&
          "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px",
        position === "left" &&
          "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
      )}
      {...props}
    />
  );
}
