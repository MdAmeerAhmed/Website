import React from "react";

const Newsletter = () => {
  return (
    <section id="sp-section-36" className="container-fluid py-4 pb-30 "   style={{ 
      backgroundImage: "linear-gradient(to right, rgb(67, 4, 177), rgb(126, 132, 243))" 
    }} >
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10">
          <h3 className="text-Right mb-3 text-white">
            Newsletter Subscription
          </h3>

          <form method="post" id="userform" className="form-responsive">
            <div className="d-flex gap-3 justify-content-between">
              {/* Name Input */}
              <input type="text" id="name" name="form[name]" className="form-control h-40 w-40 w-md-50 p-3" required placeholder="Your Name"/>
              {/* Email Input */}
              <input type="email" id="email" name="form[email]" className="form-control w-60 w-md-50 p-3 " required placeholder="Your Email Address"/>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-50 w-md-25 fw-bold">
                Subscribe Newletter
              </button>
            </div>

            {/* Hidden Fields */}
            {/* <input type="hidden" name="form[formId]" value="5" />
            <input
              type="hidden"
              name="8740285165204251838e62b343581-92"
              value="1"
            /> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
