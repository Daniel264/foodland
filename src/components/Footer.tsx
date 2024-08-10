import facebook from "../images/001-facebook.svg";
import twitter from "../images/003-twitter.svg";
import instagram from "../images/004-instagram.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full divide-y-[1px]">
        <div className="h-32 top-40 left-80 w-full flex flex-row items-center justify-between px-8">
          <div>
            <h2 className="font-lobster font-normal text-2xl">Foodieland</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <ul className="flex flex-row space-x-8 font-semibold">
              <li>Recipes</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center flex flex-row justify-between items-center h-28">
          <div className="flex-1">
            <p>@2020 Flowbase. Powered by <span className="text-red-500">Webflow</span></p>
          </div>
          <div className="flex flex-row w-24 justify-between">
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="facebook logo" />
            <img src={instagram} alt="facebook logo" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
