import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "@/styles/Signup.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post("http://192.168.1.28:8001/api/signup", data)
      .then((r) => {
        if (r.data.status === "success") {
          router.push("/");
        } else {
          alert("failed");
        }
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        }
      });

  return (
    <section className={styles.SignupSection}>
      <Container fluid className={styles.contFluid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.SignupForm}>
            <Row>
              <Col xl={6}>
                <Image
                  src={"/Images/Main.png"}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col xl={6}>
                <div className={styles.CardBody}>
                  <h3 className={styles.Signuph3}>Sign up</h3>
                  <div className={styles.FormOutline}>
                    <Row>
                      <Col xl={6}>
                        <label className="form-label">First Name</label>
                        <input
                          {...register("firstName")}
                          type="text"
                          id="form"
                          className="form-control form-control-lg"
                        />
                      </Col>
                      <Col xl={6}>
                        <label className="form-label">Last Name</label>
                        <input
                          {...register("lastName")}
                          type="text"
                          id="form"
                          className="form-control form-control-lg"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.FormOutline}>
                    <label className="form-label">Email</label>
                    <input
                      {...register("email")}
                      type="text"
                      id="form"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className={styles.FormOutline}>
                    <label className="form-label">Password</label>

                    <input
                      {...register("password")}
                      type="text"
                      id="form"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className={styles.FormOutline}>
                    <label className="form-label">Confirm Password</label>

                    <input
                      {...register("conformPassword")}
                      type="text"
                      id="form"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className={styles.FormOutline}>
                    <label className="form-label">Phone Number</label>
                    <input
                      {...register("phoneNumber")}
                      type="text"
                      id="form"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className={styles.FormOutline}>
                    <label className="form-label">Address</label>

                    <input
                      {...register("address")}
                      type="text"
                      id="form"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className={styles.SubmitButton}>
                    <button type="submit" className={styles.Submit}>
                      signup
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Signup;
// " form-control-lg"
