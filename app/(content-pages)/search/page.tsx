import { GridList } from 'components';
import { gridItems } from 'helpers';

export default function SearchPage() {
  return (
    <section>
      <p className='mb-5 text-secondaryText'>
        Search results for:{' '}
        <span className='font-medium capitalize text-darkBase md:text-medium dark:text-whiteBase'>
          name
        </span>
      </p>
      <GridList listItems={gridItems} />
    </section>
  );
}
