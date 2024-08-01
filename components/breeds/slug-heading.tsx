export default function SlugHeading() {
  return (
    <>
      <h1 className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-[20px] bg-whiteBase px-5 py-4 text-center text-medium font-medium md:px-10 md:py-[5px] md:text-lg dark:bg-darkBase-foreground'>
        Name
      </h1>
      <h2 className='relative z-10 mb-5 text-center font-medium text-secondaryText md:text-medium'>
        Category
      </h2>
    </>
  );
}
