import { Link } from "react-router-dom";
import styles from "./MemberCard.module.css";
import { useState } from "react";
import placeholder from "../../../assets/img/placeholder.jpg";

function MemberCard({ details }) {
  const [rotation, setRotation] = useState(false);
  return (
    <div
      className="w-[500px] p-[2px] rounded-[10px]
     bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% card_xs:w-full card_xs:max-w-[300px] card_sm:max-w-[730px]  card_md:min-w-[350px] card_md:max-w-[350px] card_lg:max-w-[510px]"
    >
      <div className="bg-[#0A0D17] flex items-center card_xs:gap-4 w-full h-full rounded-[10px] py-9 px-6 card_xs:px-2 card_xs:py-7">
        <div>
          <img
            onMouseOver={() => setRotation((rot) => !rot)}
            onMouseOut={() => setRotation((rot) => !rot)}
            className={`${
              rotation && styles.rotate
            } rounded-full card_xs:w-[92px] card_xs:h-[92px] card_xs:min-w-[92px] card_xs:min-h-[92px] card_sm:w-[160px] card_sm:h-[160px] card_sm:min-w-[160px] card_sm:min-h-[160px]
            card_md:w-[110px] card_md:h-[110px] card_md:min-w-[110px] card_md:min-h-[110px] card_lg:w-[160px] card_lg:h-[160px] card_lg:min-w-[160px] card_lg:min-h-[160px]`}
            src={details?.img || placeholder }
            alt={details.name}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-quicksand font-bold-800 text-base card_xs:text-sm card_sm:text-3xl card_md:text-lg card_lg:text-2xl">
              {details.name}
            </h1>

            <Link
              to={details.contact.url}
              target="_blank"
              className={`text-[#E71D46] font-quicksand text-sm font-medium-600 card_xs:text-xs card_sm:text-xl card_md:text-xs card_lg:text-base`}
            >
              @{details.contact.type}
            </Link>
          </div>
          <p
            className={`max-w-[270px] card_xs:max-w-[360px] card_xs:w-full card_sm:max-w-[720px] font-quicksand font-normal-400 mt-3 card_xs:mt-1 card_xs:text-xs card_sm:text-xl card_md:text-xs card_lg:text-base`}
          >
            {details.disc}
          </p>
          <div className="flex gap-5 card_xs:gap-3 text-sm font-quicksand font-medium-600 text-[#DE001B] card_xs:text-xs card_sm:text-xl card_md:text-xs card_lg:text-base">
            {details.tags.map((el) => (
              <span key={el} className="w-fit">
                {el.length > 8 ? el.slice(0, 7) : el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
