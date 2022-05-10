const MealIngredients = ({ ingredients }) => {
  return (
    <>
      <h5 className='text-2xl font-light'>Ingredients: </h5>
      <ul className='space-y-1'>
        {ingredients?.map((ingredient, i) => (
          <li className='list-disc space-x-4' key={i}>
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealIngredients;
