export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='px-5 max-lg:container max-lg:mx-auto md:max-lg:px-[30px]'>{children}</div>;
}
