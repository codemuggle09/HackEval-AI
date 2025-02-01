const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-4 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to HackEval-AI
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Empowering innovation through AI-powered hackathon assistance and
            project evaluation.
          </p>
          <a
            href="/submit-project"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-500 transition duration-300"
          >
            Login to Start
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-300 text-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            Features of HackEval-AI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                AI-Powered Assistance
              </h3>
              <p className="text-gray-600">
                Get personalized guidance for your hackathon journey using our
                AI-powered tools and resources.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Project Evaluation
              </h3>
              <p className="text-gray-600">
                Automatically evaluate your project with the help of our
                intelligent evaluation system.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Real-Time Feedback
              </h3>
              <p className="text-gray-600">
                Receive immediate feedback on your project submissions to make
                improvements on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">AI Hackathon Calender</h2>
          <p className="text-lg mb-6 text-gray-300">
            Don't miss out on upcoming hackathons, AI competitions and webinars.
          </p>
          <a
            href="/submit-project"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-500 transition duration-300"
          >
            Check Upcoming Events
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
