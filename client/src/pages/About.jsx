

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */ }
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="text-primary font-semibold">Othooy</span>, your trusted online store for premium travel accessories and lifestyle products.
          </p>
        </section>

        {/* Our Story Section */ }
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://via.placeholder.com/500x400"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for travel and convenience, Othooy strives to offer high-quality products that make your adventures seamless. From durable travel bags to stylish accessories, our collection is tailored to meet the needs of modern travelers.
              </p>
              <p className="text-gray-600 mt-4">
                We are committed to providing exceptional customer service and a shopping experience you’ll love. Thank you for making us a part of your journey!
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */ }
        <section className="mt-16 bg-primary/10 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600">
                Every item in our store is carefully selected to ensure quality, durability, and style.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we’re here to assist you every step of the way.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We aim to minimize our environmental footprint through conscious sourcing and packaging.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */ }
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Discover the perfect accessories for your next adventure and make your travels unforgettable.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
            Shop Now
          </button>
        </section>
      </div>
    </div>
  );
};


export default About;
