import Image from 'next/image';

import { Container, WelcomeScreen } from 'components';

export default function Home() {
  return (
    <main className='max-md:min-h-screen max-md:p-5'>
      <Container>
        <div className='hidden max-lg:block md:pl-[147px] md:pt-[30px]'>
          <WelcomeScreen />
        </div>
      </Container>
      <div className='hidden overflow-hidden lg:block'>
        <Image
          src='/girl-and-pet.png'
          alt='Girl and cat'
          objectFit='contain'
          priority
          width={895}
          height={1024}
        />
      </div>
    </main>
  );
}
