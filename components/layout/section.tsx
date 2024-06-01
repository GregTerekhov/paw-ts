import SectionHeading from './section-heading';

export default function SectionTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='max-h-mobile md:max-h-tablet lg:max-h-desktop h-screen overflow-hidden rounded-[20px] bg-whiteBase p-5 lg:w-[680px] lg:p-[30px] dark:bg-whiteBase/5'>
      <SectionHeading />
      {children}
    </main>
  );
}
