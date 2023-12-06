import styles from "./InitialLoader.module.css";
import buringFlame from "../../assets/img/burning-flame.gif";

function InitialLoader() {
  return (
    <div className="fixed top-0 z-50">
      <div className={styles.bgImage}>
        <img
          src={buringFlame}
          alt="burningFlame"
          className="w-full h-full"
        />
      </div>
      <h1
        className="absolute top-2/4 left-2/4 text-4xl font-gilroy font-medium-600"
        style={{
          transform: "translate(-50%,-50%)",
        }}
      >
        Loading...
      </h1>
    </div>
  );
}

export default InitialLoader;
