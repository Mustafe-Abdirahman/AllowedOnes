import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { SlLayers, SlRocket, SlScreenDesktop } from "react-icons/sl";

const features = [
  {
    name: "Digital Marketing",
    description:
      "leverages digital channels to promote products or services, offering global reach, cost-efficiency, and measurable engagement.",
    icon: SlLayers,
  },
  {
    name: "Graphic Design And Video Editing ",
    description:
      "where creativity meets strategy, turning ideas into eye-catching visuals that captivate and communicate",
    icon: SlRocket,
  },
  {
    name: "Branding",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Web Development",
    description:
      "Web development solves business challenges by creating innovative, impactful, and growth-driven online solutions.",
    icon: SlScreenDesktop,
  },
];

const Duties = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            <span className="bg-blue-800 text-white py-2 px-2 rounded-lg ml-3">
              What
            </span>
            We Offer
          </h2>

          <p className="text-2xl font-bold tracking-tight text-gray-700 sm:text-6xl">
            Pick services that push your business forward.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            we don't just meet expectations, we exceed them. Each of our
            packages includes the following top-tier offering
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(function (feature) {
              return (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Duties;
