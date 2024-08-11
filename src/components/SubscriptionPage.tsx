import Salad from '../images/salad.svg'
import veges from '../images/vegetables.png'

const SubscriptionPage = () => {
  return (
    <div className="p-10 mt-16 font-inter overflow-hidden relative">
      <div className="bg-[#E7FAFE] py-20 rounded-3xl text-center overflow-hidden relative">
        <img className='absolute -right-8 bottom-0' src={Salad} alt="" />
        <img className='absolute -left-10' src={veges} alt="" />
        <h1 className="font-semibold text-5xl p-7">
          Deliciousness to your inbox
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem
          cum dolor est voluptas ipsa ducimus magnam
        </p>
        <div className="relative p-10">
          <input
            type="text"
            className="w-1/2 py-7 rounded-3xl px-20 outline-none"
            
            placeholder="Your email address..."
          />
          <button className="btn absolute bg-black addon-button  text-white px-10 rounded-3xl h-16 right-96 top-12 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
