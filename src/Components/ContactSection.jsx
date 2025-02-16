import React from "react";

function ContactSection() {
  return (
    <>
      <div className="mt-3  py-3" data-aos="fade-up">
        <div className="text-[#02a95c] text-center m-auto  sm:w-[50%]  w-full pt-5">
          <h1 className=" text-3xl font-bold uppercase ">Get In Touch</h1>
          <div class="divider div-transparent div-dot"></div>

          <p className="text-sm p-5 text-black">
            Our main source of income comes from the subscriptions our clients
            opt for. Since it is a SaaS-based product and in the B2B model, we
            offer quarterly, half-yearly, and annual subscription plans.
          </p>
        </div>

        <div className="flex justify-center items-center mt-3 py-3">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block sm:w-full w-[90%] m-auto  text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block sm:w-full w-[90%] m-auto text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none "
                  id="grid-last-name"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="appearance-none block sm:w-full w-[90%] m-auto  text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className=" no-resize appearance-none block sm:w-full w-[90%] m-auto  text-gray-700  rounded py-3 px-4 mb-3 leading-tight  h-36 resize-none focus:outline-none "
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center  justify-center border-1 border-red-600">
              <button className="button">
                <span className="button-content"> Contact Us &#8594;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
