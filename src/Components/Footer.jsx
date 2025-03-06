import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-10">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">Sazid Khan Recipe Finder</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All Rights Reserved. Crafted with ❤️ for food lovers.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;