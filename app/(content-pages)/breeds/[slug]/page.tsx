import { SectionTemplate } from 'template';
import { BreedDescriptionList, SlugHeading } from 'components';

export default function DetailsPage({ params }: { params: { slug: string } }) {
  return (
    <SectionTemplate
      sectionStyle='max-h-breedsDetailsSm md:max-h-breedsDetailsLg'
      noList
    >
      <span>{`Details: ${params.slug}`}</span>
      <div className='mb-[50px] h-[166px] w-full rounded-[20px] bg-whiteBase-darker md:h-[376px] lg:h-[370px] dark:bg-whiteBase/5'></div>
      <div className='relative rounded-[20px] border-2 border-solid border-accentBase-light px-5 pb-3.5 pt-5 md:px-10 md:pb-10 md:pt-[26px] dark:border-accentBase/20'>
        <SlugHeading />
        <BreedDescriptionList />
      </div>
    </SectionTemplate>
  );
}
