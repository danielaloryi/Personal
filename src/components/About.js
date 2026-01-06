import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am the <b>Founder and CEO</b> of
        <a href="https://www.parallelafrica.com/"> Parallel</a>, where I lead the development
        of Africa's software infrastructure across various industries. I was previously at
        <a href="https://www.pwc.com/"> PwC</a> and{" "}
        <a href="https://www.deloitte.com/"> Deloitte as an AI/ML Consultant and Data Scientist respectively</a> I am a certified <b>Project Management Professional (PMP), 
          AWS Certified Machine Learning Engineer - Specialty and Microsoft Certified Azure AI Engineer.</b>
      </p>
    );
    const two = (
      <p>
        Outside of work, I’m nerdy about history, love literary fiction,
        and solve way too many math problems when I'm bored. Oh, I play Tennis too, well I'm learning.
      </p>
    );

    const tech_stack = [
      "Python",
      "Typescript",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C#",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Daniel Aloryi" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
