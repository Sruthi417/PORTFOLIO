import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience">
      {/* LEFT */}
      <div className="left">
        <span className="head2">Work Experience</span>
        <img src="/images/arrow.png" className="arrow-rights" />
        <span className="sub-head2">
          Have been designing since my past 4 years
        </span>
      </div>

      {/* RIGHT */}
      <div className="rectangle">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <div className="line-5"></div>
        <div className="line-6"></div>
        <div className="line-7"></div>
        <div className="line-8"></div>

        <div className="exp-item">
          <img src="icons/one.png" />
          <div className="exp-text">
            <h4>
              Project Management Intern at <b>µLearn</b>
            </h4>
            <p>Coordinated projects, managed tasks, and supported team execution.</p>
            <span>6, January 2025</span>
          </div>
        </div>

        <div className="exp-item">
          <img src="/icons/two.png" />
          <div className="exp-text">
            <h4>
              Operations Lead at  <b>IEDC Devagiri</b>
            </h4>
            <p>Managed operations, organized events, and ensured smooth workflows.</p>
            <span>20, July 2025</span>
          </div>
        </div>

        <div className="exp-item">
          <img src="/icons/three.png" />
          <div className="exp-text">
            <h4>
              Content Creator at  <b>µLearn Devagiri</b>
            </h4>
            <p>Created content to support community engagement and learning initiatives.</p>
            <span>23, September 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
