const MealVideo = ({ meal }) => {
  return (
    <div className='m-auto w-[70%] h-[70%] text-center mb-10 space-y-2'>
      <h4 className='text-2xl self-start'>Video Recipe</h4>
      <div className='relative pb-[56.25%] pt-6 h-0'>
        <iframe
          src={`https://www.youtube.com/embed/${meal?.strYoutube.slice(-11)}`}
          width='420'
          height='315'
          className='absolute top-0 left-0 w-full h-full'
        ></iframe>
      </div>
    </div>
  );
};

export default MealVideo;
