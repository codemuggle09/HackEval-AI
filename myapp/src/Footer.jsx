import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 HackEval-AI. All rights reserved.</p>
        <p>Designed by HackThree</p>
      </div>
    </footer>
  );
};

export default Footer;
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-6 mt-10 shadow-lg">
//       <div className="container mx-auto flex flex-col items-center text-center">
//         {/* Logo & Branding */}
//         <h2 className="text-2xl font-bold tracking-wide mb-2">
//           🚀 HackEval-AI
//         </h2>
//         <p className="text-gray-200 mb-4">
//           Empowering AI-driven hackathons & project evaluation
//         </p>

//         {/* Social Media Links */}
//         <div className="flex space-x-6 mb-4">
//           {[
//             { icon: faFacebookF, link: "https://facebook.com" },
//             { icon: faTwitter, link: "https://twitter.com" },
//             { icon: faLinkedinIn, link: "https://linkedin.com" },
//             { icon: faGithub, link: "https://github.com" },
//           ].map(({ icon, link }, index) => (
//             <a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-lg bg-white/20 p-3 rounded-full transition duration-300 transform hover:bg-white hover:text-indigo-600 hover:scale-110"
//             >
//               <FontAwesomeIcon icon={icon} />
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <p className="text-gray-300 text-sm">
//           &copy; {new Date().getFullYear()} HackEval-AI. All rights reserved.
//         </p>
//         <p className="text-gray-400 text-sm">Designed with ❤️ by HackThree</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
