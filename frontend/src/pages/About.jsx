import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Al Tajeer was founded with a passion for innovation and a vision to
            transform online shopping. Our journey started with a simple idea:
            to create a platform where customers can conveniently explore,
            discover, and purchase a variety of products, all from the comfort
            of their homes.
          </p>

          <p>
            Since the beginning, we have been dedicated to bringing together a
            wide range of high-quality products to suit every need and
            preference. From fashion and beauty to electronics and home
            essentials, our collection is carefully sourced from reliable brands
            and suppliers, ensuring variety and trust for our customers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Al Tajeer, our mission is to empower customers with choice,
            convenience, and trust. We are committed to offering a smooth
            shopping experience that goes beyond expectations, from browsing and
            ordering to delivery and after-sales support.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Superior Quality: </b>
          <p className="text-gray-600">
            Our outfits are made using high-quality fabrics to ensure comfort
            and long-lasting durability.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Affordable Fashion: </b>
          <p className="text-gray-600">
            Get fashionable clothing at prices that suit your budget without
            compromising on quality.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer First: </b>
          <p className="text-gray-600">
            We are dedicated to providing excellent service and ensuring your
            satisfaction at every step.
          </p>
        </div>
      </div>

      <NewletterBox/>
    </div>
  );
};

export default About;
