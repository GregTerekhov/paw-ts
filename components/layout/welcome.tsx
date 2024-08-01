import Logo from '../logo';
import Navigation from '../navigation';
import ThemeSwitcher from '../theme-switcher';

export default function WelcomeScreen() {
  return (
    <>
      <div className='mb-20 flex justify-between'>
        <Logo />
        <ThemeSwitcher />
      </div>
      <span className='mb-[100px] inline-block text-xl font-medium leading-[58px]'>
        Hi!&#128075;
      </span>
      <p className='mb-5 text-medium font-medium'>Lets start using The Cat API</p>
      <Navigation />
    </>
  );
}
