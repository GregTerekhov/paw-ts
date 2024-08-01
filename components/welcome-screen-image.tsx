import Image from 'next/image';

export default function WelcomeScreenImage() {
  return (
    <div className='absolute -right-[60px] top-0 z-10 hidden h-screen w-[895px] lg:block'>
      <Image
        src='/girl-and-pet.png'
        alt='Girl and cat'
        objectFit='contain'
        priority
        fill
      />
    </div>
  );
}
