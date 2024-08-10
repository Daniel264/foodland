import DummyImage from '../images/DirectionImage.svg'
import DummyText from "../components/DummyText";


const Directions = () => {
  return (
    <>
      <div className="w-8/12 p-14">
        <h1 className="font-semibold text-4xl">Directions</h1>
        <DummyText />
        <img className='w-full' src={DummyImage} alt="" />
        <DummyText/>
        <DummyText/>

      </div>
    </>
  );
};

export default Directions;
