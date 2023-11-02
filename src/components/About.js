import React from "react";
import "./About.css";

export default function Home() {
  function handleMouseOver(e) {
    const cardBody = e.target.closest(".card-body");
    const wrapper = e.target.closest(".card-wrapper");
    wrapper.style.background =
      "linear-gradient(227.38deg,#e71d36,#f46036,#e71d36,#e71d36,#f46036)";
    cardBody.style.transform = "translate(15px, 15px)";
  }
  function handleMouseOut(e) {
    const cardBody = e.target.closest(".card-body");
    const wrapper = e.target.closest(".card-wrapper");

    wrapper.style.background = "none";
    cardBody.style.transform = "none";
  }
  return (
    <>
      <div>
        <section id="about">
          <section className="text-white body-font">
            <div className="container flex flex-wrap px-5 py-24 pb-0 mx-auto items-center">
              <div className="md:w-12/12 md:pr-12 md:py-5  md:border-b-0  md:mb-0 pb-10  ">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font pb-4  text-white"
                  id="about-title"
                >
                  About Us
                </h1>
                <p className="leading-relaxed" id="about-title-dic ">
                  TheAlphaOnes: Uniting self-learners and tech enthusiasts, we
                  are a passionate community dedicated to driving innovation,
                  fostering collaboration, and making a meaningful impact
                  through technology.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div id="intro-box-con" className="con-about">
              <div className="card-wrapper">
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="card-body flex flex-col rounded-lg  p-4 pt-6 mybox mybox1"
                  id="intro-box-1"
                >
                  <div className="mb-12">
                    <h1 className="title-about-num">
                      Welcome to TheAlphaOnes!
                    </h1>
                    <p className="about-title-dit text-center mt-4">
                      Hello! We are TheAlphaOnes, a dynamic group of students
                      with a passion for all things tech-related. From software
                      development to AI/ML, UI/UX design, and hardware tech,
                      we're constantly exploring the latest innovations and
                      pushing the boundaries of what's possible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-wrapper">
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="card-body flex flex-col rounded-lg  p-4 pt-6 mybox mybox2"
                  id="intro-box-2"
                >
                  <div className="mb-12">
                    <h1 className="title-about-num">
                      Building a Community to Change the World
                    </h1>
                    <p className="about-title-dit text-center mt-4">
                      {" "}
                      We welcome self-learners to join us, as we believe that
                      shared knowledge and expertise can unlock incredible
                      potential. Our team is led by three self-taught developers
                      who share a vision of creating a supportive community that
                      fosters growth, creativity, and collaboration.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="card-body flex flex-col rounded-lg  p-4 pt-6 mybox mybox3"
                  id="intro-box-3"
                >
                  <div className="mb-12">
                    <h1 className="title-about-num">
                      Innovation, self-taught and collaboration
                    </h1>
                    <p className="about-title-dit text-center mt-4">
                      Our goal is to bring together <br /> like-minded
                      individuals worldwide, pooling our skills and resources to
                      develop impactful, innovative solutions. Harnessing
                      technology's transformative potential, Driven to make a
                      lasting impact. Join us on our journey to become leading
                      tech giants..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
