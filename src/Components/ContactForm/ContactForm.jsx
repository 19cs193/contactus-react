import Button from "../Button/Button";
import styles from "../ContactForm/contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("bikash");
  const [email, setEmail] = useState("sample@gmail.com");
  const [text, setText] = useState("Lets keep learning");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={24} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL-FORM"
          icon={<HiMail fontSize={24} />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name} // Use state value for input value
              onChange={(e) => setName(e.target.value)} // Update state on change
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              value={email} // Use state value for input value
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              name="Text"
              rows="8"
              value={text} // Use state value for textarea value
              onChange={(e) => setText(e.target.value)} // Update state on change
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img
          src="/images/service.svg"
          alt="Contact_image"
          style={{ width: "608px", height: "615px" }}
        />
      </div>
    </section>
  );
};

export default ContactForm;
