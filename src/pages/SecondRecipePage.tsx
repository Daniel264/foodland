import ReausableImage from "../components/ReausableImage";
import '../components/Food'
import { Link } from "react-router-dom";
import { users } from "../components/Food";

const SecondRecipePage = () => {

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
            useGradient={false}
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
