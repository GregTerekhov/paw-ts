import SectionHeading from './section-heading';

export default function SectionTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='h-screen max-h-mobile overflow-hidden rounded-[20px] bg-whiteBase p-5 md:max-h-tablet lg:max-h-desktop lg:w-[680px] lg:p-[20px] dark:bg-whiteBase/5'>
      <SectionHeading />
      {children}
    </main>
  );
}
