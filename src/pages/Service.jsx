import logo from "../assets/mn.png";

const Service = () => {
  return (
    <div className="bg-lightblue py-8">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-sm font-semibold text-blue-900">WHO WE ARE</h2>
            <p className="mt-8 text-lg font-medium text-gray-600 sm:text-xl">
              We are a digital agency dedicated to creating and marketing
              websites, apps, and designs that help brands stand out. Based in
              Somaliland, we focus on delivering tailored solutions that drive
              results. Our foundation is built on strong relationships and a
              commitment to excellence.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={logo}
              alt="Digital Agency Overview"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
