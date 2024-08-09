const NavigationHeader = () => {
    return (
      <div className="h-32 top-40 left-80 w-full flex flex-row items-center justify-between px-8">
        <h2 className="font-lobster font-normal text-2xl">Foodieland</h2>
        <ul className="flex flex-row space-x-8">
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>
    );
  };
  
  export default NavigationHeader;
  