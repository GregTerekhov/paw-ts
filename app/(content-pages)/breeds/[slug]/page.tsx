export default function DetailsPage({ params }: { params: { slug: string } }) {
  return (
    <section>
      <h1>{`Details: ${params.slug}`}</h1>
      <div className='bg-whiteBase-darker mb-[50px] h-[166px] w-full rounded-[20px] md:h-[376px] lg:h-[370px] dark:bg-whiteBase/5'></div>
      <div className='relative rounded-[20px] border-2 border-solid border-accentBase-light px-5 pb-3.5 pt-5 md:px-10 md:pb-10 md:pt-[26px] dark:border-accentBase/20'>
        <h1 className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-[20px] bg-whiteBase px-5 py-4 text-center text-medium font-medium md:px-10 md:py-[5px] md:text-lg'>
          Name
        </h1>
        <h2 className='relative z-10 mb-5 text-center font-medium text-secondaryText md:text-medium'>
          Category
        </h2>
        <ul className='w-full max-md:space-y-2.5 md:grid md:grid-cols-2 md:grid-rows-1'>
          <li>
            <h3 className='font-medium md:text-medium'>Temperament:</h3>
            <p className='text-secondaryText'>Description</p>
          </li>
          <li className='space-y-2.5'>
            <div>
              <h3 className='font-medium md:text-medium'>Origin:</h3>
              <p className='text-secondaryText'>Description about</p>
            </div>
            <div>
              <h3 className='font-medium md:text-medium'>Weight:</h3>
              <p className='text-secondaryText'>Description</p>
            </div>
            <div>
              <h3 className='font-medium md:text-medium'>Life span:</h3>
              <p className='text-secondaryText'>Description</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
