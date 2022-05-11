const MealInfo = ({ info, text }) => {
  return (
    <h6 className='font-bold'>
      {text}: <span className='font-medium'>{info}</span>
    </h6>
  );
};

export default MealInfo;
