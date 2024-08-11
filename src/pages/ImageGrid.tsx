// import CheeseBurger from "../images/CheeseBurger.svg";
// import Food1 from "../images/image 26 (1).svg";
// import Food2 from "../images/image 26 (2).svg";
// import Food3 from "../images/image 26 (3).svg";
// import Food4 from "../images/image 26 (4).svg";
// import Food7 from "../images/image 27 (1).svg";
// import Food8 from "../images/image 27 (2).svg";
// import Food6 from "../images/image 27.svg";
// import Ads from "../images/Ads.svg";
import { Link } from "react-router-dom";
import { users } from "../components/Food2";
import ReausableImage from "../components/ReausableImage";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-10 pl-28 h-fit mx-auto w-full font-inter">
      {/* <ReausableImage
        image={CheeseBurger}
        alt="An image of a Wagyu beef"
        text={"Big and juicy Wagyu Beef Cheeseburger"}
      />

      <ReausableImage
        image={Food1}
        alt="An image of salmon and ginger sauce"
        text={"Fresh Lime Roasted Salmon with Ginger Sauce"}
      />
      <ReausableImage
        image={Food2}
        alt="An image of strawberry pancake"
        text="Strawberry Oatmeal Pancake with Honey Syrup"
      />
      <ReausableImage
        image={Food3}
        alt={"Fresh and Healthy Mixed Mayonnaise Salad"}
        text={"Fresh and Healthy Mixed Mayonnaise Salad"}
      />
      <ReausableImage
        image={Food4}
        alt={"Chicken Meatballs with Cream Cheese"}
        text={"Chicken Meatballs with Cream Cheese"}
      />
      <div className=" h-96 flex items-center justify-center">
        <img className="h-96 flex" src={Ads} alt="" />
      </div>
      <ReausableImage
        image={Food6}
        alt={"Fruity Pancake with Orange & Blueberry"}
        text={"Fruity Pancake with Orange & Blueberry"}
      />
      <ReausableImage
        image={Food7}
        alt={"The Best Easy One Pot Chicken and Rice"}
        text={"The Best Easy One Pot Chicken and Rice"}
      />
      <ReausableImage
        image={Food8}
        alt={""}
        text={"The Creamiest Creamy Chicken and Bacon Pasta"}
      /> */}
      {users.map((user) => (
        <Link to={`/users/${user.id}`}
        state={{image: user.image, text: user.text}}
        key={user.id}>
          <ReausableImage image={user.image} alt={user.text} text={user.text}/>
        </Link>

      ))}

    </div>
  );
};

export default ImageGrid;
