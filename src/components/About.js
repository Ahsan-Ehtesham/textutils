import React from "react";

const About = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#24292e",
    backgroundColor: props.mode === "dark" ? "#24292e" : "white",
  };
  return (
    <>
      <div style={myStyle}>
        <h1 className="my-3 display-5">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque viverra mauris in aliquam sem. Urna id volutpat
                lacus laoreet non curabitur gravida. Volutpat diam ut venenatis
                tellus in metus vulputate. Egestas tellus rutrum tellus
                pellentesque. Ornare suspendisse sed nisi lacus. Suspendisse
                ultrices gravida dictum fusce ut. Id diam vel quam elementum
                pulvinar etiam.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque viverra mauris in aliquam sem. Urna id volutpat
                lacus laoreet non curabitur gravida. Volutpat diam ut venenatis
                tellus in metus vulputate. Egestas tellus rutrum tellus
                pellentesque. Ornare suspendisse sed nisi lacus. Suspendisse
                ultrices gravida dictum fusce ut. Id diam vel quam elementum
                pulvinar etiam.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque viverra mauris in aliquam sem. Urna id volutpat
                lacus laoreet non curabitur gravida. Volutpat diam ut venenatis
                tellus in metus vulputate. Egestas tellus rutrum tellus
                pellentesque. Ornare suspendisse sed nisi lacus. Suspendisse
                ultrices gravida dictum fusce ut. Id diam vel quam elementum
                pulvinar etiam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
