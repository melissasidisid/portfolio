import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div
        class="mx-auto p-2 text-white "
        style={{
          width: "300px",
          fontWeight: "bold",
          fontFamily: "monospace",
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        Contact Me
      </div>
      <div className="container-sm">
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className=" text-center"
        >
          <div class="row justify-content-md-center ">
            <label for="exampleFormControlInput1" class="form-label text-light">
              Email address
            </label>
            <input
              type="text"
              name="name"
              required
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              className=" text-center border-rounded"
              style={{ marginBottom: "20px", width: "90%" }}
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label text-light"
            >
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ marginBottom: "20px" }}
            ></textarea>
            <button
              type="submit"
              class="btn btn-secondary"
              style={{ marginBottom: "20px" }}
            >
              Secondary
            </button>
          </div>
        </form>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <a href="https://www.linkedin.com/in/milyssa-sidisaid-46170a232/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ width: "100px", color: "white" }}
                />
              </a>
            </div>
            <div class="col">
              <a href="mailto:moimelly451@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ width: "100px", color: "white" }}
                />
              </a>
            </div>
            <div class="col">
              <a href="tel:+213775620523" className="bg='white'">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ width: "100px", color: "white" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
