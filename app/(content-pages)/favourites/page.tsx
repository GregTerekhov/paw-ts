import { SectionTemplate } from 'template';
import { FavouritesStats } from 'components';

export default function FavouritePage() {
  return (
    <SectionTemplate sectionStyle='max-h-breedsDetailsSm md:max-h-breedsDetailsLg'>
      <FavouritesStats />
    </SectionTemplate>
  );
}
