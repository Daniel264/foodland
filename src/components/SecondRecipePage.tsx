import ReausableImage from "./ReausableImage";
import FirstImg from "../images/First-img.svg";
import SecondImg from "../images/Sec-img.svg";
import ThirdImg from "../images/Trd-img.svg";
import FourthImg from "../images/Fourth-img.svg";
import FifthImg from "../images/Fifth-img.svg";
import SixthImg from "../images/Sixth-img.svg";
import SeventhImg from "../images/Seventh-img.svg";
import EightImg from "../images/Eight-img.svg";

const SecondRecipePage = () => {
  return (
    <>
      <div className="flex flex-row p-10">
        <h1 className="font-semibold text-4xl w-1/2">
          Try this delicious recipe to make your day
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque fugiat
          temporibus accusantium, odit ullam aut nesciunt? Sequi, vel corporis?
        </p>
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <ReausableImage
            image={FirstImg}
            alt={""}
            text={"Mixed Tropical Fruit Salad with Superfood Boosts"}
            useGradient={false}
          />
          <ReausableImage
            image={SecondImg}
            alt={""}
            text={"Big and Juicy Wagyu Beef Cheeseburger"}
            useGradient={false}
          />
          <ReausableImage
            image={ThirdImg}
            alt={""}
            text={"Health Japanese Fried Rice with Asparagus"}
            useGradient={false}
          />
          <ReausableImage
            image={FourthImg}
            alt={""}
            text={"Cauliflower Walnut Vegetarian Taco Meat"}
            useGradient={false}
          />
          <ReausableImage
            image={FifthImg}
            alt={""}
            text={"Rainbow Chicken Salad with Almond Honey Mustard Dressing"}
            useGradient={false}
          />
          <ReausableImage
            image={SixthImg}
            alt={""}
            text={"Barbeque Spicy Sandwitches with Chips"}
            useGradient={false}
          />
          <ReausableImage
            image={SeventhImg}
            alt={""}
            text={"Firecracker Vegan Lettuce Wraps"}
            useGradient={false}
          />
          <ReausableImage
            image={EightImg}
            alt={""}
            text={"Chicken Ramen Soup with Mushroom"}
            useGradient={false}
          />
        </div>
      </div>
    </>
  );
};

export default SecondRecipePage;
