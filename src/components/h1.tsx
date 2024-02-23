import { twMerge } from "tailwind-merge";

type TProps = { children: React.ReactNode; className?: string };

export default function H1({ children, className }: TProps) {
  return <h1 className={twMerge("text-3xl font-bold tracking-tight lg:text-6xl", className)}>{children}</h1>;
}
