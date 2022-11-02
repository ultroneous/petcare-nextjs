import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { clientFeedback } from "utils/listOfdata";
import Heading from "./sectionHeading";
import styles from "@/styles/components/clientFeedback.module.css";
import { useState } from "react";

const ClientFeedback = () => {
  const [currentIndex, SetcurrentIndex] = useState(0);
  const [activeIndex, SetactiveIndex] = useState(0);
  const Next = () => {
    if (currentIndex >= clientFeedback.length - 1) {
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
    <section className={styles.FeedbackSection}>
      <Container fluid className={styles.contFluid}>
        <Row>
          <Col xl={6} className={styles.Feedbackimg}>
            <img src={"/Images/videogirl.svg"} className={styles.Feedbackimg} />
          </Col>

          <Col xl={6}>
            <Heading text="Clients Feedback for us" />
            <p className={styles.FeedbackDeatails}>
              {clientFeedback[currentIndex].feedback}
            </p>
            <Row>
              <Col xl={6} xs={6} style={{ textAlign: "end" }}>
                <Button onClick={() => Prev()}>
                  <div>
                    <Image src={"/Images/prev.svg"} />
                  </div>
                </Button>
              </Col>
              <Col xl={6} xs={6} style={{ textAlign: " initial" }}>
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

export default ClientFeedback;
