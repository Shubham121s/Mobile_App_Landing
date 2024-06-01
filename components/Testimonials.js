import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-8">
      <p className="text-xl font-medium text-center py-2">Testimonials</p>
      <p className="text-center font-bold text-4xl">
        What Our Users <br /> Say About Us?
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <img src="/assets/testimonial.png" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-3xl font-semibold">
            The Best Financial Accounting <br /> App Ever!
          </p>
          <p className="text-base text-gray-600">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, <br />
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor <br />
            Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
          <p className="text">Rownok Mahbub</p>
          <img className="h-10" src="/assets/person.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
