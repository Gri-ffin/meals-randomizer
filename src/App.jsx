import axios from 'axios';
import { useState } from 'react';
import MealInfo from './Components/Info';
import MealIngredients from './Components/Ingredients';

function App() {
  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  console.log(ingredients);

  function createIngredients(meal) {
    const mealIngredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        mealIngredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        // Stop if no more ingredients
        break;
      }
      setIngredients(mealIngredients);
    }
  }
  async function fetchRandomMeal() {
    const { data } = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    setMeal(data.meals[0]);
    createIngredients(data.meals[0]);
  }

  return (
    <>
      <div
        className={`flex justify-center items-center flex-col ${
          meal ? 'my-8' : ''
        } space-y-3`}
      >
        <h1 className='text-3xl md:text-4xl'>Feeling Hungry?</h1>
        <p className='text-xl md:text-2xl'>
          Get a random meal by clicking below
        </p>
        <button
          className='uppercase bg-blue-500 text-white text-xs px-7 py-3 rounded-md font-bold'
          onClick={fetchRandomMeal}
        >
          Get Meal 🍔
        </button>
      </div>
      {meal && (
        <div className='flex justify-center items-center flex-col md:flex-row'>
          <div className='space-y-2'>
            <img
              className='w-96 h-96 md:mt-10'
              src={meal.strMealThumb}
              alt='Meal Image'
            />
            <MealInfo info={meal.strCategory} text='Category' />
            <MealInfo info={meal.strArea} text='Area' />
            <MealInfo info={meal.strTags} text='Tags' />
            <MealIngredients ingredients={ingredients} />
          </div>
          <div className='mx-9 md:w-[40%] self-start'>
            <h4 className='text-3xl py-7'>{meal.strMeal}</h4>
            <p className='text-sm leading-7 md:leading-6 md:text-base'>
              {meal.strInstructions}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
