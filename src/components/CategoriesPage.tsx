
import BreakFast from '../images/image 21.svg'
import Vegan from '../images/image 22.svg'
import Meat from '../images/Group 879.svg'
import Lunch from '../images/image 25.svg'
import chocolate from '../images/image 24.svg'




const CategoriesPage = () => {
  return (
    <div className='p-32'>
      <div className="flex justify-between">
          <h1 className="font-semibold text-5xl">Categories</h1>
          <button
            className="btn btn-color hover:cursor-pointer btn-color;
          "
          >
            View all Categories
          </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col px-10 justify-center "><img src={BreakFast} alt="" /></div>
        <div className="flex flex-col px-10 justify-center "><img src={Vegan} alt="" /></div>
        <div className="flex flex-col px-10 justify-center "><img src={Meat} alt="" /></div>
        <div className="flex flex-col px-10 justify-center "><img src={Lunch} alt="" /></div>
        <div className="flex flex-col px-10 justify-center "><img src={chocolate} alt="" /></div>
      </div>
    </div>
  );
};

export default CategoriesPage;
