'use client';

import { GridList } from 'components';
import { gridItems } from 'helpers';

export default function BreedsPage() {
  return (
    <section className='max-h-breedsSm overflow-auto md:max-h-breedsMd'>
      <GridList listItems={gridItems} />
    </section>
  );
}
