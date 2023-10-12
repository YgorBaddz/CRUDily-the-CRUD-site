import styles from "./Home.module.css";
import cradily from "../../public/cradily.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.side}>
          <img src={cradily} className={styles.cradily} alt="" />
        </div>
        <div className={styles.side}>
          <h1 className={styles.title}>Hi, i'm Eegor Badmayev</h1>
          <p className={styles.desc}>
            and this is my CRUD website built using Redux. Here you can{" "}
            <span>C</span>reate, <span>R</span>ead, <span>U</span>pdate and{" "}
            <span>D</span>elete users in the dashboard table.{" "}
            <span className={styles.blur}>
              If you like Cradily, then you're cool.
            </span>
          </p>
          <Link to={"/user"} className={styles.button}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
