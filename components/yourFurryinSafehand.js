import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./sectionHeading";
import styles from "@/styles/components/yourFurryinSafehand.module.css";
import ReadMorebutton from "./readMorebutton";
import { FaLongArrowAltRight } from "react-icons/fa";

const YourFurryinSafehand = () => {
  return (
    <section className={styles.FurrySafe}>
      <Container fluid className={styles.contFluid}>
        <Row>
          <Col xl={6}>
            <Heading text="Your Furry Friend is in Safe Hands" />
            <p>
              Have a look at our facilities and amenities that have been set up
              keeping in mind all the necessary things required for pets. The
              facility is been developed under the guidance of pet experts all
              over the nation. We have facilities like a dedicated veterinary
              home, playground for activities, toys for all pets & also training
              tracks, and experts whom you can bring to train your pet. Also,...
            </p>
            <div className="Readmore">
              <ReadMorebutton
                text="Read more"
                style={{
                  background: "none",
                  color: "#D47C88",
                  border: "none",
                  paddingLeft: "3rem",
                }}
              />
              <FaLongArrowAltRight style={{ color: "#D47C88" }} />
            </div>
          </Col>
          <Col xl={6} className={styles.safeHand}>
            <Image
              src={"/Images/Safehand.svg"}
              className={styles.safeHand}
              img-fluid
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YourFurryinSafehand;
