import facebook from '../images/001-facebook.svg'
import twitter from '../images/003-twitter.svg'
import instagram from '../images/004-instagram.png'


const NavigationHeader = () => {
    return (
      <div className="h-32 top-40 left-80 w-full flex flex-row items-center justify-between px-8">
        <h2 className="font-lobster font-normal text-2xl">Foodieland</h2>
        <ul className="flex flex-row space-x-8 font-semibold text-lg">
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <div className='flex flex-row w-24 justify-between'>
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="facebook logo" />
            <img src={instagram} alt="facebook logo" />
        </div>
      </div>
    );
  };
  
  export default NavigationHeader;
  