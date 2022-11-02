import { Container, Row, Col, Image } from "react-bootstrap";
import { companyDetails } from "utils/listOfdata";
import styles from "@/styles/components/companyDetails.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CompanyDetails = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section className={styles.Companydata}>
      <Container fluid className={styles.contFluid}>
        <Row>
          {companyDetails.map(
            (
              value,
              index //company data maping
            ) => (
              <Col
                data-aos="fade-up"
                data-aos-duration="1500"
                key={index}
                xl={3}
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className={styles.Background}
                  style={index % 2 === 0 ? null : { marginTop: "5rem" }}
                >
                  <div className={styles.Details}>
                    <Image src={value.image} fluid />
                    <h3>{value.title}</h3>
                    <p>{value.describe}</p>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CompanyDetails;
