import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-900">
      {/* Hero Section */}
      <section className="text-white py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-400">HackEval-AI</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Empowering innovation through AI-powered hackathon assistance and
            project evaluation.
          </p>
          <Link
            to="/login"
            className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition duration-300 shadow-xl transform hover:scale-105"
          >
            🚀 Login to Start
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fade-in">
            ✨ Features of <span className="text-indigo-600">HackEval-AI</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature Cards */}
            {[
              {
                title: "🤖 AI-Powered Assistance",
                description:
                  "Get personalized guidance for your hackathon journey using our AI-powered tools and resources.",
              },
              {
                title: "🏆 Project Evaluation",
                description:
                  "Automatically evaluate your project with the help of our intelligent evaluation system.",
              },
              {
                title: "⚡ Real-Time Feedback",
                description:
                  "Receive immediate feedback on your project submissions to make improvements on the go.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            📅 AI Hackathon Calendar
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Don't miss out on upcoming hackathons, AI competitions, and
            webinars.
          </p>
          <a
            href="/submit-project"
            className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition duration-300 shadow-xl transform hover:scale-105"
          >
            🔥 Check Upcoming Events
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
