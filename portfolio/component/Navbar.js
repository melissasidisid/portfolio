import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Contact from "./Contact";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "40em",
        display: "grid", // add this line
        gridTemplateColumns: "1fr 5fr", // add this line
        gridTemplateRows: "auto", // add this line
      }}
    >
      <div
        class="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
        style={{ gridColumn: "1 / span 1", gridRow: "1 / span 1" }} // add this line
      >
        <button
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Home
          <div style={{ margin: "auto" }}></div>
        </button>
        <button
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Contact
        </button>
        <button
          class="nav-link"
          id="v-pills-active-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-active"
          type="button"
          role="tab"
          aria-controls="v-pills-active"
          aria-selected="false"
          active
        >
          Github repositories
        </button>
        <button
          class="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Experience
        </button>
        <button
          class="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          diplomat
        </button>
      </div>
      <div
        class="tab-content"
        id="v-pills-tabContent d-flex justify-content-center"
        style={{ gridColumn: "2 / span 1", gridRow: "1 / span 1" }} // add this line
      >
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          tabindex="0"
        >
          <div class="d-flex justify-content-center">...</div>
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
          tabindex="0"
        >
          <Contact />
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-disabled"
          role="tabpanel"
          aria-labelledby="v-pills-disabled-tab"
          tabindex="0"
        ></div>
        <div
          class="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default Navbar;
