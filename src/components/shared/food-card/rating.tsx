import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type RatingProps = {
  rating: number;
  reviewCount: number;
};

export function Rating({ rating, reviewCount }: RatingProps) {
  const ratingObject = {
    fullStar: Math.floor(rating),
    halfStar: Math.ceil(rating) > Math.floor(rating),
    emptyStar: 5 - Math.ceil(rating),
  };
  return (
    <div className='flex items-center'>
      {[...Array(ratingObject.fullStar)].map(() => (
        <span className='text-orange-600'>
          <FaStar />
        </span>
      ))}
      {ratingObject.halfStar && (
        <span className='text-orange-600'>
          <FaStarHalfAlt />
        </span>
      )}
      {[...Array(ratingObject.emptyStar)].map(() => (
        <span className='text-orange-600'>
          <FaRegStar />
        </span>
      ))}
      <span className='ml-3 font-semibold text-orange-600'>
        ({reviewCount})
      </span>
    </div>
  );
}
