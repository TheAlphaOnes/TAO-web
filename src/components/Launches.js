import React from "react";
import Expander from "./Expander";
import "./Launches.css";

export default function Launches() {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container px-3 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-15 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 title-gradent">
              Our Work
            </h1>
            <p className="lg:w-1/2 text-xl w-full leading-relaxed ">
              Discover some of our best launches!!
            </p>
          </div>
          <section className="text-gray-600 body-font">
            {/* every element start  */}

            <div className="aspect-video container px-5 py-24 mx-auto flex flex-wrap">
              <div className="lg:w-1/2   w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img
                  alt="feature"
                  className="object-cover  object-center  w-full"
                  src="https://dummyimage.com/640x380"
                />
              </div>
              <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <h1 className="text-red mynamepr text-2xl mb-2 title-font font-medium mb-3">
                  Name1
                </h1>

                <div className="flex flex-col mb-5 lg:items-start items-center">
                  <div className="flex-grow">
                    <Expander
                      title="How does the product work?"
                      disc="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                    />
                    <Expander
                      title="How does the product work?"
                      disc="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                    />
                    <Expander
                      title="How does the product work?"
                      disc="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* every element end  */}
          </section>
        </div>
      </section>
    </div>
  );
}
