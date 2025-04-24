import styles from "@/styles/modules/contact.module.css"

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form className={styles["contact-form"]}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />

      <button type="submit">Send</button>
    </form>
  </section>
)

export { Contact }
