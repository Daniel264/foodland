import FirstImg from "../images/Sec-img.svg";
// import SecImg from "../images/Eight-img.svg";
// import ThirdImg from "../images/Fifth-img.svg";

const IngredientsPage = () => {
  return (
    <div className="flex">
      <div className="w-7/12">
        <h1 className="font-semibold text-4xl">Ingredients</h1>
        <h2 className="font-semibold text-3xl"></h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2 className="font-semibold text-3xl">For the sauce</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <div className="flex">
          <h1 className="font-semibold text-4xl">Other Recipe</h1>
          <img className="rounded-3xl w-44" src={FirstImg} alt="" />
          <div className="pt-10 pl-5">
            <h2 className="font-semibold">Chicken Meatball with Creamy Chees...</h2>
            <p>By Andreas Paula</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsPage;
