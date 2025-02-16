import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Quik?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Why Quik exist?",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "What are our services includes ?",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How many days takes for delivery?",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Do we do custom deliveries?",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="py-3 text-center capitalize content-bg my-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#3ab17a] py-3">FAQ</h1>
          <div class="divider div-transparent div-dot"></div>
        </div>

        <h1 className="text-4xl font-bold text-black uppercase py-5">
          Got any questions
        </h1>
        <p className="text-lg font-medium text-black  py-3">
          if you have any questions let us now
        </p>
      </div>
      <div
        className="accordion text-black sm:w-[70%] w-full px-3  mx-auto capitalize"
        data-aos="fade-up"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="accordion-item border w-full my-6 p-7 rounded-xl capitalize"
          >
            <button
              className="accordion-header w-full duration-1000"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <div className="font-bold text-xl capitalize">{item.title}</div>
                <div>{activeIndex === index ? "✖" : "+"}</div>
              </div>
            </button>
            {activeIndex === index && (
              <div className="accordion-content ">
                <p className=" ">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
