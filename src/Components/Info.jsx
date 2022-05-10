const MealInfo = ({ info, text }) => {
  return (
    <h6 className='font-bold'>
      {text}:{' '}
      <span className='font-medium'>
        {typeof info === 'object' ? info?.join(', ') : info}
      </span>
    </h6>
  );
};

export default MealInfo;
