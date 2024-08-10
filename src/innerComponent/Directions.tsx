import DummyImage from '../images/DirectionImage.svg'
import DummyText from "../components/DummyText";


const Directions = () => {
  return (
    <>
      <div className="w-8/12 p-14">
        <h1 className="font-semibold text-4xl pb-3">Directions</h1>
        <DummyText />
        <img className='w-full py-10' src={DummyImage} alt="" />
        <hr className='border-gray-200 pb-10'/>
        <DummyText/>
        <hr className='my-10' />  
        <DummyText/>
        <hr className='my-10' />  


      </div>
    </>
  );
};

export default Directions;
