import './contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <div className="con-left">
        <div className="contact-name">Contact here</div>
        <img src="/images/arrow.png" className="arrow-down" />
        <div className="sen-sub">
          Have a project idea?
          <br />
          Just say me Hi.
        </div>
      </div>
      <div className="con-right">
        <div className="row">
            <span className="label pink">Name</span>
            <span className="value">Sruthi M</span>
          </div>

          <div className="row">
            <span className="label yellow">Your email</span>
            <span className="value">sruthi@gmail.com</span>
          </div>

          <div className="row">
            <span className="label blue">About Project</span>
            <span className="value">I want to discuss you about......</span>
          </div>

          <button className="send-btn">Send Here</button>
        </div>


      </div>
    
  );
};

export default Contact;
