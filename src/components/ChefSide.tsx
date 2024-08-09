
import Chef from "../images/Chef.svg";

const ChefSide = () => {
  return (
    <div className="flex flex-row p-20">
      <div className="w-1/2">
        <h1 className="text-5xl font-semibold py-10">
          Everyone can be a chef in their own kitchen
        </h1>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          voluptatem vel! Quis excepturi
        </p>
        <p>
          {" "}
          similique ipsa non incidunt exercitationem, deleniti aliquid ad
          tempora dolore, architecto autem?
        </p>
        <button className="btn bg-black text-white mt-16">Learn more</button>
      </div>
      <div>
        <img className="" src={Chef} alt="" />
      </div>
    </div>
  );
};

export default ChefSide;
