import axios from 'axios';
import { useState } from 'react';
import MealWrapper from './Components/MealWrapper';
import MealDetails from './Components/Meal/Details';
import MealRecipe from './Components/Meal/MealRecipe';
import MealVideo from './Components/Meal/MealVideo';

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
          meal ? 'my-8' : 'h-screen'
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
        <>
          <MealWrapper>
            <MealDetails meal={meal} ingredients={ingredients} />
            <MealRecipe meal={meal} />
          </MealWrapper>
          <MealVideo meal={meal} />
        </>
      )}
    </>
  );
}

export default App;
