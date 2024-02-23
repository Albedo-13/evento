import { cn } from "@/lib/utils";

type TProps = { children: React.ReactNode; className?: string };
const check = true;
export default function H1({ children, className }: TProps) {
  return <h1 className={cn("text-3xl font-bold tracking-tight lg:text-6xl", className)}>{children}</h1>;
}
