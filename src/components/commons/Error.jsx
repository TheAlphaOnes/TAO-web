import errorImg from "../../assets/img/Error.png";
import Gradient_404 from "../../assets/img/404-gradient.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="w-full pt-16 xs:pt-11 flex items-center flex-col bg-[#0a0e16] text-center">
      <div>
        <h1 className="text-3xl font-quicksand mb-4">
          <span className="font-medium-600">Page</span> not found{" "}
        </h1>
        <p className="font-quicksand font-normal-400 xs:w-[300px] xs:text-lg sm:w-[400px] sm:text-xl md:w-[600px]">
          Whoops! Looks like you've hit a 404 error, buddy! That page is playing
          hide-and-seek or got lost somewhere. Double-check the URL, or head
          back to the{" "}
          <Link to="/home" className="text-[#DE001B]">
            home sweet home page.
          </Link>{" "}
          Happy browsing!
        </p>
      </div>
      <div className="mt-16">
        <img src={errorImg} alt="Impaired Robot" />
      </div>
      <div>
        <h1
          style={{
            backgroundImage: `url(${Gradient_404})`,
            backgroundSize: "cover",
          }}
          className="text-center xs:text-[200px] md:text-[300px] font-quicksand font-extra-900 bg-clip-text text-transparent "
        >
          404
        </h1>
      </div>
    </div>
  );
}

export default Error;
