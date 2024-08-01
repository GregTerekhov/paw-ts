import { getBreedDescription } from 'data';

export default function BreedDescriptionList() {
  const breedDescription = getBreedDescription();

  return (
    <ul className='w-full max-md:space-y-2.5 md:grid md:grid-cols-2 md:grid-rows-1'>
      {Array.isArray(breedDescription) &&
        breedDescription.map(({ title, description }) => (
          <li key={title}>
            <h3 className='font-medium md:text-medium'>{title}</h3>
            <p className='text-secondaryText'>{description}</p>
          </li>
        ))}
    </ul>
  );
}
