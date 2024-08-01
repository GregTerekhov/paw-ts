import { SectionTemplate } from 'template';

export default function SearchPage() {
  const getBreedName = () => {
    return (
      <p className='mb-5 text-secondaryText'>
        Search results for:{' '}
        <span className='font-medium capitalize text-darkBase md:text-medium dark:text-whiteBase'>
          name
        </span>
      </p>
    );
  };

  const foundName = getBreedName();
  return (
    <SectionTemplate
      sectionStyle='max-h-breedsDetailsSm md:max-h-breedsDetailsLg'
      additionalNode={foundName}
    >
      <p className='sr-only'>SearchPage</p>
    </SectionTemplate>
  );
}
