import React, { useState, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import Innova from "../../assets/Images/Innova.jpeg";
import Dzire from "../../assets/Images/swift-dzire.jpeg";
import Ertiga from "../../assets/Images/ertiga.jpeg";
import Tampo from "../../assets/Images/TampoTraveller.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImCross } from "react-icons/im";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        className="text-4xl text-[#272727] rounded-lg"
        onClick={toggleSidebar}
      >
        <TbMenuDeep />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-200 shadow-lg transform transition-all duration-500 ease-in-out z-[9999] ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } w-[80%] md:w-1/2`}
      >
        <div className="p-4">
          {/* Close Button */}
          <div className="flex items-end w-full justify-end">
            <button
              className="mb-4 p-2 text-gray-700 hover:text-gray-900"
              onClick={toggleSidebar}
            >
              <ImCross className="size-4 sm:size-5" />
            </button>
          </div>
          <div className="flex justify-center flex-col">
            <div>
              <h3 className="text-black text-xl font-bold">
                {" "}
                Range Of Cars We Provide
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 sm:gap-6">
              <img
                src={Innova}
                alt="Innova"
                className="w-full h-[100px] mix-blend-multiply sm:h-40 object-cover rounded-md"
              />
              <img
                src={Dzire}
                alt="Dzire"
                className="w-full h-[120px] mix-blend-multiply sm:h-40 object-cover rounded-md"
              />
              <img
                src={Ertiga}
                alt="Ertiga"
                className="w-full h-[100px] mix-blend-multiply sm:h-40 object-cover rounded-md"
              />

              <img
                src={Tampo}
                alt="Tampo"
                className="w-full h-[100px] mix-blend-multiply sm:h-40 object-cover rounded-md"
              />
            </div>

            <div>
              <h3 className="text-black font-bold text-xl mt-8">Contact Us</h3>

              <div className="text-sm sm:text-lg mt-2 flex flex-col gap-1">
                <p className="text-lg">Feel free to reach us out.</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    <a href="mailto:Omsaitravels101174@gmail.com">
                      Omsaitravels101174@gmail.com
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <a href="tel:+919250163008">+91 9250163008</a>
                  </p>
                </div>
                <p className="mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Om Sai Travels
                  Office, Paharganj, India
                </p>
                <a
                  className="p-2 bg-red-400 w-28 text-white rounded-3xl"
                  href="tel:+919250163008"
                >
                  Call Us Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay (Blurred) */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transition-all duration-500 ease-in-out ${
            isOpen
              ? "bg-opacity-50 backdrop-blur-sm"
              : "bg-opacity-0 backdrop-blur-0"
          } z-[9998]`}
          onClick={toggleSidebar} // Optional: close sidebar when clicking outside
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
