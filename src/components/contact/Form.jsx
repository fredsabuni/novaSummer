// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Form = () => {
//   const [formStatus, setFormStatus] = useState(null);

//   const [formData, setFormData] = useState({
//     firstname: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus("submitting"); 

//     try {
//       const response = await axios.post(
//         "https://api.hsforms.com/submissions/v3/integration/submit/45057484/16846e77-1200-4f8f-b609-39ac11127a30",
//         {
//           fields: [
//             { name: "firstname", value: formData.firstname },
//             { name: "email", value: formData.email },
//             { name: "phone", value: formData.phone },
//             { name: "subject", value: formData.subject },
//             { name: "message", value: formData.message },
//           ],
//           context: {
//             pageUri: window.location.href,
//             pageName: document.title,
//           },
//         }
//       );

//       console.log("Form submitted successfully:", response.data); 
//       setFormData({
//         firstname: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       }); // Clear the form after successful submission
//     } catch (error) {
//       console.error("Error submitting form:", error); 
//     }
//   };

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//js.hsforms.net/forms/embed/v2.js";
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.hbspt) {
//         window.hbspt.forms.create({
//           portalId: "45057484",
//           formId: "16846e77-1200-4f8f-b609-39ac11127a30",
//           region: "na1",
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   },);

//   return (
//     <form onSubmit={handleSubmit} className="contact_form"> 
//       <div className="row">
//         <div className="col-md-6">
//           <div className="form-group">
//             <input
//               id="firstname"
//               name="firstname"
//               className="form-control"
//               required
//               type="text"
//               placeholder="Name"
//               value={formData.firstname}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="form-group">
//             <input
//               id="email"
//               name="email"
//               className="form-control required email"
//               required
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="form-group">
//             <input
//               id="phone"
//               name="phone"
//               className="form-control required phone"
//               required
//               type="tel"  
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="form-group">
//             <input
//               id="subject"
//               name="subject"
//               className="form-control required"
//               required
//               type="text"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="col-sm-12">
//           <div className="form-group">
//             <textarea
//               id="message"
//               name="message"
//               className="form-control required"
//               rows="8"
//               required
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="form-group mb0">
//             <button type="submit" className="btn btn-lg btn-thm">
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Form;



import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await axios.post(
        "https://api.hsforms.com/submissions/v3/integration/submit/45057484/16846e77-1200-4f8f-b609-39ac11127a30",
        {
          fields: [
            { name: "firstname", value: formData.firstname },
            { name: "email", value: formData.email },
            { name: "phone", value: formData.phone },
            { name: "subject", value: formData.subject },
            { name: "message", value: formData.message },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setFormStatus("success");
      setFormData({
        firstname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "45057484",
          formId: "16846e77-1200-4f8f-b609-39ac11127a30",
          region: "na1",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  },);

  return (
    <form onSubmit={handleSubmit} className="contact_form">
      <div className="row">
      <div className="col-md-6">
          <div className="form-group">
            <input
              id="firstname"
              name="firstname"
              className="form-control"
              required
              type="text"
              placeholder="Name"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="email"
              name="email"
              className="form-control required email"
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="phone"
              name="phone"
              className="form-control required phone"
              required
              type="tel"  
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="subject"
              name="subject"
              className="form-control required"
              required
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              className="form-control required"
              rows="8"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div> 
          </div>
      </div>

      {formStatus === "submitting" && <p>Sending your message...</p>}
      {formStatus === "success" && (
        <p className="success-message">
          Thank you! Your message has been sent.
        </p>
      )}
      {formStatus === "error" && (
        <p className="error-message">
          Oops! Something went wrong. Please try again.
        </p>
      )}

      <div className="form-group mb0">
        <button type="submit" className="btn btn-lg btn-thm">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;