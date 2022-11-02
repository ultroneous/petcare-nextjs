import Heading from "@/components/sectionHeading";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/carePetsection.module.css";
import { useState } from "react";
import { carePagedetail } from "utils/listOfdata";
const Caredetails = () => {
  const [currentIndex, SetcurrentIndex] = useState(0);
  const [activeIndex, SetactiveIndex] = useState(0);

  const Next = () => {
    if (currentIndex >= carePagedetail.length - 1) {
    } else {
      SetcurrentIndex(currentIndex + 1);
      SetactiveIndex(currentIndex + 1);
    }
  };
  const Prev = () => {
    if (currentIndex <= 0) {
    } else {
      SetcurrentIndex(currentIndex - 1);
      SetactiveIndex(currentIndex - 1);
    }
  };
  return (
    <section className={styles.carePet}>
      <Container fluid className={styles.contFluid}>
        <Row className={styles.careAll}>
          <Col xl={6} className={styles.carImg}>
            <Image
              src={"/Images/videogirl.svg"}
              alt="videogirl"
              className={styles.careVideo}
              img-fluid
            />
            <Image
              onClick={() => alert("Currently Video Is Not Avilable")}
              src={"/Images/videobutton.svg"}
              alt="videobutton"
              className={styles.videoButton}
              img-fluid
            />
          </Col>
          <Col xl={6}>
            <Heading text="How we take care of your Pets" />
            <span>{carePagedetail[currentIndex].subtitle}</span>
            <p>{carePagedetail[currentIndex].details}</p>
            <Row className={styles.pageRow}>
              <Col
                xl={2}
                className="pageButton"
                style={{
                  width: "15%",
                }}
              >
                <Button onClick={() => Prev()}>
                  <div>
                    <Image src={"/Images/prev.svg"} />
                  </div>
                </Button>
              </Col>
              <Col xl={8} className={styles.Pagenum}>
                <div className={styles.Pagenatation}>
                  {carePagedetail.map((v, i) => (
                    <button
                      key={i}
                      className={styles.careButton}
                      onClick={() => SetcurrentIndex(i)}
                      style={currentIndex === i ? { color: "#e39ba6" } : null}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </Col>
              <Col xl={2} className={styles.Nextbutton}>
                <Button onClick={() => Next()}>
                  <div>
                    <Image src={"/Images/next.svg"} />
                  </div>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Caredetails;
