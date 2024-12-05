import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="footer_logo" className="mb-5 w-32 " />
          <p className="w-full md:w-2/3 text-gray-600x">
            Dress to Impress offers a stylish collection of shirts, t-shirts,
            jeans, and more, perfect for every occasion to elevate your
            wardrobe.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7071277722</li>
            <li>abuazmi143@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Made with ❤️ by Moteeullah Azmi
        </p>
        <p className="py-5 text-sm text-center">
          Copyright © 2024-2025 AL TAJEER - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
