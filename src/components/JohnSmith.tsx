import JohnSmith from "../images/Ellipse 2.svg";

const John = () => {
  return (
    <div className="flex">
      <img className="" src={JohnSmith} alt="" />
      <div className="px-2">
        <h4>John Smith</h4>
        <p>15 March 2022</p>
      </div>
    </div>
  );
};

export default John;
