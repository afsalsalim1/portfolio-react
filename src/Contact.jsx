import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-title">
        <p>GET IN TOUCH</p>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-container">

        <div className="contact-text">

          <h2>Let's Connect</h2>

          <p>
            I'm open to opportunities where I can learn,
            contribute and grow as a developer.
          </p>

          <div className="contact-details">

            <p>
              <strong>Email:</strong>
              afsalsalim2004@gmail.com
            </p>

            <p>
              <strong>LinkedIn:</strong>
              www.linkedin.com/in/afsal-salim-r
            </p>

            <p>
              <strong>GitHub:</strong>
              github.com/afsalsalim1
            </p>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;