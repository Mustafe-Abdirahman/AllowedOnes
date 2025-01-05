import logo from "../assets/all.jfif";

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 min-h-screen bg-[radial-gradient(ellipse_at_center,_#E3F2FD,_#FFFFFF)]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-16 sm:mt-20">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mt-10 sm:mt-20">
        <img
          src={logo}
          alt="HTML design on laptop screen"
          className="w-64 sm:w-80 h-auto rounded-lg shadow-lg mb-6 lg:mb-0"
        />
        <div className="max-w-2xl text-left px-4 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Kaabe Tech: Your Partner in Digital Success
          </h2>
          <p className="text-base sm:text-lg mb-4">
            We are committed to creating exceptional digital solutions that help
            businesses and organizations achieve their goals. Based in
            Minnesota, we are a trusted web design agency known for delivering
            innovative, results-driven websites, graphic design, video editing,
            and digital marketing services that elevate brands and drive growth.
            With years of expertise and a commitment to quality, we take pride
            in delivering solutions tailored to meet each client’s unique needs.
          </p>
          <p className="text-base sm:text-lg mb-4">
            Our team of skilled designers, developers, and marketing experts
            focuses on building websites and creating digital content that are
            visually appealing, highly functional, and designed to capture
            attention. We also offer professional graphic design, compelling
            video editing, and strategic digital marketing services to help you
            engage your audience and grow your business. We work closely with
            you to understand your vision, goals, and challenges, ensuring that
            every project is designed to deliver measurable success.
          </p>
          <p className="text-base sm:text-lg">
            At Kaabe Tech, we’re not just creating websites; we’re building
            comprehensive digital solutions that empower businesses to thrive in
            the online world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
