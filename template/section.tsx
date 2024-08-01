import { ReactNode } from 'react';

import { gridItems } from 'helpers';
import { GridList, SectionHeading } from 'components';

export default function SectionTemplate({
  children,
  sectionStyle,
  additionalNode,
  noList = false,
}: Readonly<{
  children: React.ReactNode;
  sectionStyle: string;
  additionalNode?: ReactNode;
  noList?: boolean;
}>) {
  return (
    <main className='h-screen max-h-mobile overflow-hidden rounded-[20px] bg-whiteBase p-5 md:max-h-tablet lg:max-h-desktop lg:w-[680px] lg:p-[20px] dark:bg-whiteBase/5'>
      <section className={`${sectionStyle} h-full overflow-auto`}>
        <SectionHeading />
        {additionalNode ?? null}
        {noList ? null : <GridList listItems={gridItems} />}
        {children}
      </section>
    </main>
  );
}
