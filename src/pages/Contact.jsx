import "../styles/page-styles/contact.css";

function Contact() {
  return (
    <div>
      <section>
        <form className="form">
          <div className="form-box">
            <h2 className="form-title">Contact</h2>
            <input className="input-box" type="text" placeholder="name" />
            <div>
              <input
                className="input-box"
                type="email"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <div>
              <textarea
                className="text-area"
                name=""
                id=""
                placeholder="Message
              "
              />
            </div>
            <button className="form-btn">Send</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
