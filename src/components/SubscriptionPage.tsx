const SubscriptionPage = () => {
  return (
    <div className="p-10 mt-16">
      <div className="bg-[#E7FAFE] py-20 rounded-3xl text-center">
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
            className="w-1/2 py-7 rounded-3xl px-20"
            placeholder="your email address"
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
