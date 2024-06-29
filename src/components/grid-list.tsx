import { Border } from "@/components/border";
import { cn } from "@/lib/utils";

export function GridList({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </ul>
  );
}

export function GridListItem({
  title,
  children,
  className,
}: {
  title: string;
  children: any;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "text-muted-foreground leading-7 before:bg-white after:bg-white/10",
        className
      )}
    >
      <Border position="left" className="pl-8">
        <strong className={cn("font-semibold", "text-white")}>{title}.</strong>{" "}
        {children}
      </Border>
    </li>
  );
}
