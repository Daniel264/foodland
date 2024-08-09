
import timer from "../images/timer.svg";

interface Props {
  image: string;
  alt: string;
  text: string;
  useGradient?: boolean;
  width?: boolean;
  fontSize?: boolean;
}

const ReausableImage = ({ image, alt, text, useGradient = true, width = true, fontSize = true }: Props) => {
  return (
    <div className={`${width ? "h-96" : "h-72"} rounded-2xl flex flex-col items-center text-center ${useGradient ? "bg-gradient-to-b from-white to-[#E7FAFE]" : ""}`}>
      <img className="rounded-2xl h-64" src={image} alt={alt} />
      <p className={`${fontSize? "text-2xl": "text-xl"} font-semibold font-inter`}>{text}</p>
      <div>
        <img src={timer} alt="" />
      </div>
    </div>
  );
};

export default ReausableImage;
