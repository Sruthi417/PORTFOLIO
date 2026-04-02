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
              Design intern at <b>Google</b>
            </h4>
            <p>Worked on design system at Material 3 designs</p>
            <span>20, April 2021</span>
          </div>
        </div>

        <div className="exp-item">
          <img src="/icons/two.png" />
          <div className="exp-text">
            <h4>
              Sr. UI/UX Designer at <b>Microsoft</b>
            </h4>
            <p>Worked on design system at Material 3 designs</p>
            <span>20, April 2022</span>
          </div>
        </div>

        <div className="exp-item">
          <img src="/icons/three.png" />
          <div className="exp-text">
            <h4>
              Software Engineer at <b>SASS Startup</b>
            </h4>
            <p>Worked on design system at Material 3 designs</p>
            <span>20, April 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
