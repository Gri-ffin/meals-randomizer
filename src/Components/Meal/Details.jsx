import MealInfo from './Info';
import MealIngredients from './Ingredients';

const MealDetails = ({ meal, ingredients }) => {
  return (
    <div className='space-y-2'>
      <img
        className='w-96 h-96 md:mt-10'
        src={meal?.strMealThumb}
        alt='Meal Image'
      />
      <MealInfo info={meal?.strCategory} text='Category' />
      <MealInfo info={meal?.strArea} text='Area' />
      <MealInfo info={meal?.strTags} text='Tags' />
      <MealIngredients ingredients={ingredients} />
    </div>
  );
};

export default MealDetails;
