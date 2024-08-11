
import ReausableImage from "../components/ReausableImage";
import {users} from '../components/Food'

const OtherRecipes = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 p-10">
            {users.slice(0, 4).map((user) => (
            
                <div className="p-3">
                    <ReausableImage useGradient={false}
                      image={user.image}
                      alt={user.text}
                      text={user.text}
                    />
                </div>
            ))}
    </div>
  );
};

export default OtherRecipes;
