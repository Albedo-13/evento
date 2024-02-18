type TProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<TProps>) {
  return <div className="max-w-7xl flex flex-col min-h-screen mx-auto bg-white/[2%]">{children}</div>;
}
