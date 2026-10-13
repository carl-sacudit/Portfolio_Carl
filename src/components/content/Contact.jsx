
import "./Contact.css";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "carlbryan123099@gmail.com",
    href: "mailto:carlbryan123099@gmail.com",
  },
  {
    label: "Phone",
    value: "+639369010809",
    href: "tel:+639369010809",
  },
  {
    label: "Location",
    value: "La Carlota City, Negros Occidental",
  },
];

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/Isouuul" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/carl-bryan-sacudit-9b1597404",
  },
  { name: "Facebook", href: "https://www.facebook.com/hesoyam123099" },
  { name: "Instagram", href: "https://www.instagram.com/_hue_forya/" },
];

export default function Contact() {
  return (
    <div className="contact-layout">
      <section className="contact-panel" aria-labelledby="contact-title">
        <header className="contact-header">
          <h2 id="contact-title" className="contact-title">
            Get in touch
          </h2>
          <span className="contact-rule" aria-hidden="true" />
        </header>

        <div className="contact-coming-soon" role="status">
          <span className="contact-coming-soon-icon" aria-hidden="true">
            ✉
          </span>

          <h3>Contact Form Coming Soon</h3>

          <p>
            I'm currently updating my contact form and email delivery
            integration. In the meantime, feel free to reach me directly
            through email or connect with me on social media.
          </p>

          <a
            className="contact-send"
            href="mailto:carlbryan123099@gmail.com"
          >
            Email Me
          </a>

          <span className="contact-coming-soon-note">
            Nodemailer integration in progress
          </span>
        </div>
      </section>

      <aside
        className="contact-panel contact-side"
        aria-labelledby="contact-info-title"
      >
        <h2 id="contact-info-title" className="contact-side-title">
          Contact details
        </h2>

        <ul className="contact-info">
          {CONTACT_INFO.map((item) => (
            <li key={item.label} className="contact-info-item">
              <span className="contact-info-label">{item.label}</span>

              {item.href ? (
                <a className="contact-info-value" href={item.href}>
                  {item.value}
                </a>
              ) : (
                <span className="contact-info-value">{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        <h3 className="contact-social-title">Find me online</h3>

        <div className="contact-socials">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              className="contact-social"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}
