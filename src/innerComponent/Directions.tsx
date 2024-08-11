import { useState } from 'react';
import DummyImage from '../images/DirectionImage.svg';
import DummyText from '../components/DummyText';

const Directions = () => {
  // Initial state: all items are unchecked
  const [checkedItems, setCheckedItems] = useState({
    1: false,
    2: false,
    3: false,
  });

  // Function to toggle checked state
  const toggleChecked = (id: number) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  return (
    <div className="w-8/12 p-14">
      <h1 className="font-semibold text-4xl pb-3">Directions</h1>
      <DummyText
        id={1}
        isChecked={checkedItems[1]}
        toggleChecked={() => toggleChecked(1)}
      />
      <img className="w-full py-10" src={DummyImage} alt="" />
      <hr className="border-gray-200 pb-10" />
      <DummyText
        id={2}
        isChecked={checkedItems[2]}
        toggleChecked={() => toggleChecked(2)}
      />
      <hr className="my-10" />
      <DummyText
        id={3}
        isChecked={checkedItems[3]}
        toggleChecked={() => toggleChecked(3)}
      />
      <hr className="my-10" />
    </div>
  );
};

export default Directions;
