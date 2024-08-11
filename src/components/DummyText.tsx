import React from "react";
import checked from "../images/Checked.svg";
import unchecked from "../images/Unchecked.svg";

interface Props {
  id: number;
  isChecked: boolean;
  toggleChecked: () => void;
}

const DummyText = ({ id, isChecked, toggleChecked }: Props) => {
  return (
    <div className="flex items-center">
      <div>
        <h2 className="font-semibold text-3xl pb-4 flex">
          {" "}
          <img
            className="cursor-pointer mr-4"
            src={isChecked ? checked : unchecked}
            alt={isChecked ? "Checked" : "Unchecked"}
            onClick={toggleChecked}
          />
          {id}. Lorem ipsum dolor sit amet.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui cum,
          maiores, corrupti animi quod dolores illo ipsa, officiis iste
          molestiae enim! Neque deleniti consequuntur vitae unde! Itaque fuga
          cupiditate rerum assumenda ea dignissimos nostrum dolorum quod tempora
          obcaecati unde quo voluptatum alias id officiis nemo officia,
          consequuntur iure? Reprehenderit quam atque expedita voluptatibus et
          pariatur ullam excepturi veniam ea. lorem30
        </p>
      </div>
    </div>
  );
};

export default DummyText;
