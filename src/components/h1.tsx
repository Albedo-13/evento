import React from "react";

type TProps = { children: React.ReactNode };

export default function H1({ children }: TProps) {
  return <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">{children}</h1>;
}
