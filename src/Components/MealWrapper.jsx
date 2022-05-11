const MealWrapper = ({ children }) => {
  return (
    <div className='flex justify-center items-center flex-col md:flex-row'>
      {children}
    </div>
  );
};

export default MealWrapper;
