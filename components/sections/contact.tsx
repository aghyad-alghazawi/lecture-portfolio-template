import { ContactForm } from "@/components/contact-form"
import styles from "@/styles/modules/contact.module.css"
import Image from "next/image"

const Contact = () => (
  <section id="contact">
    <div className={styles.block}>
      <div className={styles.info}>
        <Image src="/images/say-hi.svg" alt="Say Hi" fill priority />
        <h2>Contact</h2>
        <p>
          Let&apos;s get in touch!
          <br />
          You can reach out for collaborations, questions, or just to say hi.
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
)

export { Contact }
