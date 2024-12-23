import { Link } from "react-router-dom";


const Service = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */ }
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            At <span className="text-primary font-semibold">Othooy</span>, we pride ourselves on delivering top-notch services to make your shopping experience seamless and enjoyable.
          </p>
        </section>

        {/* Services Section */ }
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */ }
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={ 2 }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5l7.125 7.125m0 0L12 19.5m7.125-7.125H4.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Receive your orders quickly with our reliable and speedy delivery service.
              </p>
            </div>

            {/* Service 2 */ }
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={ 2 }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.5l-3-3m0 0l3-3m-3 3h14.25M21 4.5H7.5M21 19.5H7.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Easy Returns
              </h3>
              <p className="text-gray-600">
                Shop with confidence knowing that hassle-free returns are always available.
              </p>
            </div>

            {/* Service 3 */ }
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={ 2 }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.5h18m0 0l-3 3m3-3l-3-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Get assistance anytime with our dedicated customer support team.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */ }
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Experience Excellence with Our Services
          </h2>
          <p className="text-gray-600 mb-6">
            From fast delivery to round-the-clock support, we’re here to serve you better.
          </p>
          <Link to={ '/products' }>
            <button className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
              Explore Products
            </button>
          </Link>
        </section>


      </div>
    </div>
  );
};


export default Service;
