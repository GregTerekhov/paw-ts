import { Container, WelcomeScreen, WelcomeScreenImage } from 'components';

export default function Home() {
  return (
    <main className='max-md:min-h-screen max-md:p-5'>
      <Container>
        <div className='hidden max-lg:block md:pl-[147px] md:pt-[30px]'>
          <WelcomeScreen />
        </div>
      </Container>
      <div className='my-[30px] mr-[30px] hidden h-screen max-h-modalUpload w-[680px] rounded-[20px] bg-accentBase-light lg:block dark:bg-whiteBase/5'></div>
      <WelcomeScreenImage />
    </main>
  );
}
