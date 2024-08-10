interface Props {
  image: string;
  text: string;
}

const ReusableIngredients = ({ image, text }: Props) => {
  return (
    <>
      <div className="flex">
        <h1 className="font-semibold text-4xl">Other Recipe</h1>
        <img className="rounded-3xl w-44" src={image} alt="" />
        <div className="pt-10 pl-5">
          <h2 className="font-semibold">{text}</h2>
          <p>By Andreas Paula</p>
        </div>
      </div>
    </>
  );
};

export default ReusableIngredients;
