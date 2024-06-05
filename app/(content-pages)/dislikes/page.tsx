import { GridList } from 'components';
import { gridItems } from 'helpers';

export default function DislikePage() {
  return (
    <section>
      <GridList listItems={gridItems} />
    </section>
  );
}
