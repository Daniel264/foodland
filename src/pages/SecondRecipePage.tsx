import ReausableImage from "../components/ReausableImage";
import FirstImg from "../images/First-img.svg";
import SecondImg from "../images/Sec-img.svg";
import ThirdImg from "../images/Trd-img.svg";
import FourthImg from "../images/Fourth-img.svg";
import FifthImg from "../images/Fifth-img.svg";
import SixthImg from "../images/Sixth-img.svg";
import SeventhImg from "../images/Seventh-img.svg";
import EightImg from "../images/Eight-img.svg";
import { Link } from "react-router-dom";

const SecondRecipePage = () => {
  const users = [
    {
      id: 1,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: FirstImg,
    },
    {
      id: 2,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: SecondImg,
    },
    {
      id: 3,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: ThirdImg,
    },
    {
      id: 4,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: FourthImg,
    },
    {
      id: 5,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: FifthImg,
    },
    {
      id: 6,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: SixthImg,
    },
    {
      id: 7,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: SeventhImg,
    },
    {
      id: 8,
      text: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: EightImg,
    },
  ];
  return (
    <>
      <div className="flex flex-row p-20">
        <div className="w-1/2">
          <h1 className="font-semibold text-5xl">
            Try this delicious recipe <br /> to make your day
          </h1>
        </div>
        <p className="w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque fugiat
          temporibus accusantium, odit ullam aut nesciunt? Sequi, vel corporis?
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 px-12">
        {users.map((user) => (
          <Link
            to={`/users/${user.id}`}
            state={{ image: user.image, text: user.text }} // Correct way to pass state
            key={user.id}
          >
            <ReausableImage
              image={user.image}
              alt={user.text}
              text={user.text}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SecondRecipePage;
