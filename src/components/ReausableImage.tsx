import timer from "../images/timer.svg";
import Like from "./Like";

interface Props {
  image: string;
  alt: string;
  text: string;
  useGradient?: boolean;
  width?: boolean;
  height?: boolean;
  fontSize?: boolean;
}

const ReausableImage = ({
  image,
  alt,
  text,
  useGradient = true,
  width = true,
  fontSize = true,
  height = true,
}: Props) => {
  return (
    <div
      className={`${width ? "h-96" : "h-72"} ${
        height ? "mx-5" : ""
      } rounded-2xl flex flex-col items-center relative text-center ${
        useGradient ? "bg-gradient-to-b from-white to-[#E7FAFE]" : ""
      }`}
    >
      <div className="absolute top-3 right-7 rounded-full bg-white w-10 h-10 flex justify-center items-center">
        <Like
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <img className="rounded-2xl h-64" src={image} alt={alt} loading="lazy" />
      <h3
        className={`${
          fontSize ? "text-2xl" : "text-xl"
        } font-semibold font-inter`}
      >
        {text}
      </h3>
      <div>
        <img src={timer} alt="" />
      </div>
    </div>
  );
};

export default ReausableImage;
