import { Button, Image } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
// import carePetsection from "@/components/carePetsection";
import Caredetails from "@/components/carePetsection";
import YourFurryinSafehand from "@/components/yourFurryinSafehand";
import CompanyDetails from "@/components/companyDetails";
import ClientFeedback from "@/components/clientFeedback";
import NavBar from "@/components/navBar";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const carePetsection = lazy(() => import("@/components/carePetsection"));
export default function Home() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Suspense fallback={<div style={{ color: "black" }}>Loading....</div>}>
      <>
        <NavBar />
        <section className={styles.introDuction}>
          <Container fluid className={styles.contFluid}>
            <Row className={styles.parentRow}>
              <Col xl={6}>
                <div
                  className={styles.introText}
                  data-aos="fade"
                  data-aos-duration="1500"
                >
                  <h2>
                    Your <span>Pet</span> is part of our family
                  </h2>
                  <p>
                    Want to train your pet? Or Looking for someone who takes
                    care of your pet? Well we are here.
                  </p>
                </div>
                <Row>
                  <Col xl={6} xs={6} className={styles.bookButton}>
                    <Button className={styles.book}>Book A Schedule</Button>
                  </Col>
                  <Col xl={6} xs={6} className={styles.priceButton}>
                    <Button className={styles.pricePack}>Price Pack</Button>
                  </Col>
                  <section className={styles.doItsection}>
                    <Image src={"/Images/arrow.svg"} alt="arrow" />

                    <button id={styles.doItnow}> Do it Now...!!</button>
                    <div className={styles.ldsSpinner}>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </section>
                </Row>
              </Col>

              <Col xl={6}>
                <div className={styles.card}>
                  <Row className="align-items-center">
                    <Col xl={6} className={styles.cardCol}>
                      <Image src={"/Images/video.svg"} alt="video" />
                    </Col>
                    <Col xl={6} className={styles.cardCol1}>
                      <h3>Moniter your pet</h3>
                      <p>We have a watch 24*7</p>
                    </Col>
                  </Row>
                </div>
                <div className={styles.card1}>
                  <Row className="align-items-center">
                    <Col xl={6} className={styles.cardCol}>
                      <Image src={"/Images/safty.svg"} alt="safty" />
                    </Col>
                    <Col xl={6} className={styles.cardCol1}>
                      <h3>Safety First </h3>
                      <p>We care them like babies</p>
                    </Col>
                  </Row>
                </div>
                <Image
                  src={"/Images/Main.png"}
                  alt="Main Img"
                  style={{ width: "100%", height: "auto" }}
                />

                <div className={styles.card2}>
                  <Row className="align-items-center">
                    <Col xl={6} className={styles.cardCol}>
                      <Image src={"/Images/house.svg"} alt="house" />
                    </Col>
                    <Col xl={6} className={styles.cardCol1}>
                      <h3>Spacious play yards</h3>
                      <p>We play on a field</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.servicesFluffy}>
          <h2 data-aos="fade" data-aos-duration="1500">
            Services for fluffy companion
          </h2>
          <p>
            Have a look at our vast range of services we provide for your pets.
          </p>
          <Container fluid className={styles.contFluid}>
            <Row className={styles.servicesRow}>
              <Col xl={2} xs={6} className={styles.servicesImg}>
                <Image src={"/Images/SF2.svg"} className={styles.sfImg} />

                <span>Food Diet</span>
              </Col>
              <Col xl={2} xs={6} className={styles.servicesImg}>
                <Image src={"/Images/SF1.svg"} className={styles.sfImg} />

                <span>Litter and Litter Boxes</span>
              </Col>
              <Col xl={2} xs={6} className={styles.servicesImg}>
                <Image src={"/Images/SF3.svg"} className={styles.sfImg} />

                <span>Health and Wellbeing</span>
              </Col>
              <Col xl={2} xs={6} className={styles.servicesImg}>
                <Image src={"/Images/SF4.svg"} className={styles.sfImg} />

                <span>Grooimg and Care</span>
              </Col>
              <Col xl={2} xs={6} className={styles.servicesImg}>
                <Image src={"/Images/SF5.svg"} className={styles.sfImg} />

                <span>Beds and Furniture</span>
              </Col>
            </Row>
          </Container>
        </section>

        <Caredetails />

        <YourFurryinSafehand />
        <CompanyDetails />
        <ClientFeedback />
        <Footer />
      </>
    </Suspense>
  );
}
