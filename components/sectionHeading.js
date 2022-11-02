import styles from "@/styles/components/sectionHeading.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
const Heading = (props) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className={styles.introText} data-aos="fade" data-aos-duration="1500">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Heading;
