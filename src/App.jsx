function App() {
  return (
    <div className='flex justify-center items-center flex-col h-screen space-y-3'>
      <h1 className='text-3xl md:text-4xl'>Feeling Hungry?</h1>
      <p className='text-xl md:text-2xl'>Get a random meal by clicking below</p>
      <button className='uppercase bg-blue-500 text-white text-xs px-7 py-3 rounded-md font-bold'>
        Get Meal 🍔
      </button>
    </div>
  );
}

export default App;
