export default function FavouritesStatistics() {
  return (
    <ul className='space-y-2.5'>
      <li className='rounded-[10px] bg-whiteBase-darker p-[15px] dark:bg-whiteBase/5'>
        <div className='flex justify-between max-md:mb-2.5'>
          <div className='flex items-center md:gap-x-5'>
            <p className='w-[61px] rounded-[5px] bg-whiteBase py-[3px] text-center leading-6 dark:bg-darkBase'>
              TIME
            </p>
            <p className='hidden leading-6 text-secondaryText md:block'>
              Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span>{' '}
              was added to ...
            </p>
          </div>
        </div>
        <p className='hidden leading-6 text-secondaryText max-md:block'>
          Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
          added to ...
        </p>
      </li>
      <li className='rounded-[10px] bg-whiteBase-darker p-[15px] dark:bg-whiteBase/5'>
        <div className='flex justify-between max-md:mb-2.5'>
          <div className='flex items-center md:gap-x-5'>
            <p className='w-[61px] rounded-[5px] bg-whiteBase py-[3px] text-center leading-6 dark:bg-darkBase'>
              TIME
            </p>
            <p className='hidden leading-6 text-secondaryText md:block'>
              Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span>{' '}
              was ... to Favourites
            </p>
          </div>
        </div>
        <p className='hidden leading-6 text-secondaryText max-md:block'>
          Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
          ... to Favourites
        </p>
      </li>
      <li className='rounded-[10px] bg-whiteBase-darker p-[15px] dark:bg-whiteBase/5'>
        <div className='flex justify-between max-md:mb-2.5'>
          <div className='flex items-center md:gap-x-5'>
            <p className='w-[61px] rounded-[5px] bg-whiteBase py-[3px] text-center leading-6 dark:bg-darkBase'>
              TIME
            </p>
            <p className='hidden leading-6 text-secondaryText md:block'>
              Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span>{' '}
              was ... to Favourites
            </p>
          </div>
        </div>
        <p className='hidden leading-6 text-secondaryText max-md:block'>
          Image ID: <span className='font-medium text-darkBase dark:text-whiteBase'>ID</span> was
          ... to Favourites
        </p>
      </li>
    </ul>
  );
}
