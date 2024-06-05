'use client';

import { GridList } from 'components';
import { gridItems } from 'helpers';

export default function GalleryPage() {
  return (
    <>
      <section className='max-h-gallerySm overflow-x-auto md:max-h-galleryMd'>
        <GridList listItems={gridItems} />
      </section>
    </>
  );
}
