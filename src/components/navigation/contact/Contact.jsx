import { Link } from "react-router-dom";

// all images url
import instagram from "../../../assets/img/insta-foot.svg";
import github from "../../../assets/img/github-foot.svg";
import twitter from "../../../assets/img/twt.svg";
import discord from "../../../assets/img/cord-foot.svg";

function Contact() {
  return (
    <section className="text-white body-font relative bg-[#0a0e16]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-3xl font-quicksand font-medium-600 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent title-font mb-4 title-gradent">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-quicksand">
            Have a Project in Mind? , Lets Talk!!
          </p>
        </div>
        <div className="flex flex-wrap  xs:justify-start sm:justify-center">
          <div className="xs:w-full md:w-[50%] lg:w-[30%] px-6 py-6 border-l-2 border-red-600 border-opacity-60">
            <h2 className="text-lg sm:text-xl title-gradent font-bold-800 font-quicksand title-font mb-2 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent">
              Social Media's
            </h2>
            <p className="leading-relaxed text-base mb-4">
              <span className="text-indigo-500 inline-flex items-center">
                <Link
                  to="https://www.instagram.com/TheAlphaOnes/"
                  target="_blank"
                >
                  <img alt="" className="m-2" src={instagram} />
                </Link>
                <Link to="https://github.com/TheAlphaOnes/" target="_blank">
                  <img alt="" className="m-2" src={github} />
                </Link>
                <Link to="https://twitter.com/TheAlphaOnesDev" target="_blank">
                  <img alt="" className="m-2" src={twitter} />
                </Link>
                <Link
                  to="https://discord.com/invite/nbrFDHmsK3"
                  target="_blank"
                >
                  <img alt="" className="m-2" src={discord} />
                </Link>
              </span>
            </p>
          </div>

          <div className="xs:w-full md:w-[50%] lg:w-[30%] px-6 py-6 border-l-2 border-red-600 border-opacity-60">
            <h2 className="text-lg sm:text-xl title-gradent font-bold-800 font-quicksand title-font mb-2 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent">
              Visit Us
            </h2>
            <p className="leading-relaxed text-base mb-4">
              <span className="text-white  items-center">
                <Link
                  to="https://thenorm.netlify.app"
                  target="_blank"
                  className="hover:text-red-600"
                >
                  <span className="text-red hover:text-white font-bold-800 font-quicksand">
                    Founder
                  </span>{" "}
                  - Vishnu aka Norm
                </Link>
                <br />
                <Link
                  to="https://mrpixel.netlify.app"
                  target="_blank"
                  className="hover:text-red-600"
                >
                  <span className="text-red hover:text-white  font-bold-800 font-quicksand">
                    Co.Founder
                  </span>{" "}
                  - Akshat aka Mr.Pixel
                </Link>
                <br />
                
              </span>
            </p>
          </div>

          <div className="xs:w-full md:w-[50%] lg:w-[30%] px-6 py-6 border-l-2 border-red-600 border-opacity-60">
            <h2 className="text-lg sm:text-xl title-gradent font-bold-800 font-quicksand title-font mb-2 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent">
              E-Mail's Dudes
            </h2>
            <p className="leading-relaxed text-base mb-4">
              <span className="text-white  items-center">
                <a
                  href="mailto:thealphaones.dev@gmail.com"
                  target="_blank"
                  className="hover:text-red-500"
                  rel="noreferrer"
                >
                  thealphaones.dev@gmail.com
                </a>
                <br />
                <Link
                  to="mailto:thenormvg@gmail.com"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  thenormvg@gmail.com
                </Link>
                <br />
                <Link
                  to="mailto:thebitpixel.alpha@gmail.com"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  thebitpixel.alpha@gmail.com
                </Link>
                <br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
