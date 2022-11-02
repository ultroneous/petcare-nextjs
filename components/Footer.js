import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <Container fluid className={styles.contFluid}>
        <Row>
          <Col xl={6} xs={12} md={12} className={styles.FooterFirst}>
            <h2>Subscribe to our newsletter</h2>
            <input
              type="text"
              placeholder="Email address"
              className={styles.Input}
            />
            <Image src={"/Images/Submit.svg"} />
          </Col>
          <Col xl={2} xs={12} md={4} className={styles.Footermob}>
            <div className={styles.Footerleft}>
              <h3>About</h3>

              <ul style={{ padding: "0" }}>
                <li className={styles.FooterLink}>About us</li>
                <li className={styles.FooterLink}>Careers</li>
                <li className={styles.FooterLink}>In Press</li>
              </ul>
            </div>
          </Col>
          <Col xl={2} xs={12} md={4} className={styles.Footermob}>
            <div className={styles.Footerleft}>
              <h3>Support</h3>
              <ul style={{ padding: "0" }}>
                <li className={styles.FooterLink}>Contact us</li>
                <li className={styles.FooterLink}>Online Chat</li>
                <li className={styles.FooterLink}>Whatsapp</li>
                <li className={styles.FooterLink}>Telegram</li>
              </ul>
            </div>
          </Col>
          <Col xl={2} xs={12} md={4} className={styles.Footermob}>
            <div className={styles.Footerleft}>
              <h3>FAQ</h3>
              <ul style={{ padding: "0" }}>
                <li className={styles.FooterLink}>Account</li>
                <li className={styles.FooterLink}>Payments</li>
                <li className={styles.FooterLink}>Returns</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className={styles.FooterSecond}>
          <Col xl={4} xs={12} md={12}>
            <h4 className={styles.Brandtextfooter}>Petcare.</h4>
          </Col>
          <Col xl={4} className={styles.Socialcol}>
            <div className={styles.SocialMedia}>
              <Image
                src={"/Images/facebook.svg"}
                className={styles.Socialimg}
              />

              <Image src={"/Images/youtube.svg"} className={styles.Socialimg} />

              <Image
                src={"/Images/dribbble.svg"}
                className={styles.Socialimg}
              />

              <Image src={"/Images/figma.svg"} className={styles.Socialimg} />

              <Image
                src={"/Images/whatsapp.svg"}
                className={styles.Socialimg}
              />
            </div>
          </Col>
          <Col xl={4} xs={12} md={12} className={styles.Socialcol}>
            <span>© 2021, All Rights Reserved</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
