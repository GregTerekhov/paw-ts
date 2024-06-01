import { HeaderRoutes, MenuControls, SearchForm } from '..';

export default function Header() {
  return (
    <header className='mb-2.5 pt-5 md:pt-[30px] lg:w-[680px]'>
      <div className='flex justify-between max-md:mb-2.5 md:gap-x-2.5'>
        <MenuControls />
        <div className='hidden md:relative md:block md:w-full'>
          <SearchForm />
        </div>
        <HeaderRoutes />
      </div>
      <div className='hidden max-md:relative max-md:block max-md:w-full'>
        <SearchForm />
      </div>
    </header>
  );
}
