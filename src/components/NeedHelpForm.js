import React from "react";

const NeedHelpForm = () => {
  return (
    <>
      <div className="form-card">
        <div className="form-card-title">Need Help?</div>
        <p className="card-sub-title">
          Just let us know. We will be happy to assist you.
        </p>
        <form>
          <input type="text" className="input" placeholder="Full Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="text" className="input" placeholder="Phone Number" />
          <input
            type="textarea"
            className="input"
            placeholder="Describe your treatment requirement"
          />
          <button className="submit-btn">Send Enquiry</button>
        </form>
      </div>
    </>
  );
};

export default NeedHelpForm;
