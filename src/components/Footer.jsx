import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-white transition-all duration-300 bg-gray-300 py-10 z-0 px-8 sm:px-14 md:px-20 xl:px-40">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating beautiful and functional websites.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Web Design</li>
              <li className="mb-2">Graphic Design</li>
              <li className="mb-2">Video Editing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
              <li className="mb-2">Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} simsona724@gmail.com. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
