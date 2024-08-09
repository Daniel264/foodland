import FirstPost from "../images/Post.svg";
import SecondPost from "../images/Post (1).svg";
import ThirdPost from "../images/Post (2).svg";
import FourthPost from "../images/Post (3).svg";
import InstagramWhite from '..//images/instagram white.svg'

const SocialMedia = () => {
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="font-inter text-4xl font-semibold">
          Check out @foodieland on Instagram
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ad quo nihil necessitatius ab? Veniam.
        </p>
      </div>
      <div className="flex flex-row justify-between p-10">
        <img src={FirstPost} alt="" />
        <img src={SecondPost} alt="" />
        <img src={ThirdPost} alt="" />
        <img src={FourthPost} alt="" />
      </div>
      <div className="flex h-fit justify-center">
          <button className="btn bg-black text-white">
            Visit our Instagram
            <img src={InstagramWhite} />
          </button>
      </div>
    </>
  );
};

export default SocialMedia;
