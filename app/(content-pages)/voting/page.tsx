import { VotingPictures, VotingStatistics } from 'components';

export default function VotingPage() {
  return (
    <section>
      <div className='relative mb-11 h-[166px] w-full rounded-[20px] bg-whiteBase-darker md:mb-[53px] md:h-[376px] lg:mb-[52px] lg:h-[360px] dark:bg-whiteBase/5'>
        <VotingPictures />
      </div>
      <VotingStatistics />
    </section>
  );
}
