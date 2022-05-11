const MealRecipe = ({ meal }) => {
  return (
    <div className='mx-9 md:w-[40%] self-start'>
      <h4 className='text-3xl py-7'>{meal?.strMeal}</h4>
      <p className='text-sm leading-7 md:leading-6 md:text-base'>
        {meal?.strInstructions}
      </p>
    </div>
  );
};

export default MealRecipe;
