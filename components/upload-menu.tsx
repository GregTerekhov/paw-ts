import { IconName, IconSizes } from 'types';

import { SvgIcon } from 'ui';

export default function UploadMenu() {
  return (
    <>
      <p className='mb-5 text-center text-medium font-medium md:text-lg'>
        Upload a .jpg or .png Cat Image
      </p>
      <p className='mb-5 text-center text-medium leading-[30px] text-secondaryText'>
        Any uploads must comply with the <span className='text-accentBase'>upload guidelines</span>{' '}
        or face deletion.
      </p>
      <form
        method='post'
        className='relative mb-5 flex h-[168px] w-full items-center justify-center md:h-[370px]'
      >
        {/* <form method="post" enctype="multipart/form-data"></form> */}
        <label
          htmlFor='upload'
          className='flex h-full w-full items-center justify-center'
        >
          <span className='absolute z-20 w-[200px] text-medium text-darkBase md:w-[370px] dark:text-secondaryText'>
            <span className='font-medium text-darkBase dark:text-whiteBase'>Drag here</span> your
            file or{' '}
            <span className='font-medium text-darkBase dark:text-whiteBase'>Click here</span> to
            upload
          </span>
          <input
            type='file'
            id='upload'
            name='upload'
            accept='image/png, image/jpg, image/webp, image/bmp, image/gif, image/tiff'
            className='absolute h-full w-full cursor-pointer rounded-[20px] border-2 border-dashed border-accentBase-light bg-whiteBase text-transparent file:hidden dark:border-accentBase/20 dark:bg-whiteBase/5'
          />
          <SvgIcon
            id={IconName.NoImage}
            size={{ width: IconSizes['7XL'], height: IconSizes['7XL'] }}
            className='absolute z-10 fill-whiteBase-darker dark:fill-whiteBase/5'
          />
          <span className='relative top-56 text-secondaryText'>No file selected</span>
        </label>
      </form>
    </>
  );
}
