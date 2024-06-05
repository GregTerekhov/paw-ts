import { GridList } from 'components';
import { gridItems } from 'helpers';

export default function LikesPage() {
  return (
    <section>
      <GridList listItems={gridItems} />
    </section>
  );
}
