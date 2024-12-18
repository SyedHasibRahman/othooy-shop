import { TiShoppingCart } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { CiDiscount1 } from "react-icons/ci";

const skillsData = [
  {
    name: "Authentic Product",
    icon: <TiShoppingCart className="text-4xl text-primary" />,
    link: "#",
    description:
      "Authentic product refers to a genuine, original item that is not a counterfeit, replica, or imitation. It is an item that is produced by the original manufacturer",
    aosDelay: "0",
  },
  {
    name: "Fastest Delivary",
    icon: <CiDeliveryTruck className="text-4xl text-primary" />,
    link: "#",
    description:
      "Same-Day Delivery Services: Many online retailers, including Amazon, Walmart, and Target, offer same-day delivery for certain products in select areas. ",
    aosDelay: "300",
  },
  {
    name: "Discount",
    icon: <CiDiscount1 className="text-4xl text-primary" />,
    link: "#",
    description:
      "Many online retailers, including Amazon, Walmart, and Target, offer same-day delivery for certain products in select areas. This is often the fastest option for getting items quickly",
    aosDelay: "500",
  },
  {
    name: "Return Policy",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "The return policy of an e-commerce business outlines the conditions under which customers can return purchased items for a refund, exchange.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-white dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
