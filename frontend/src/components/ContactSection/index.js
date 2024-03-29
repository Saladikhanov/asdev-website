import ContactForm from "./ContactForm";
import {
  ContactSection,
  Github,
  Linkedin,
  Phone,
  ContactWrapper,
  Link,
  Header,
  City,
  SocialWrapper,
  SocialLink,
  ContactFormWrapper,
} from "./ContactElements";
import {AiFillGithub} from "react-icons/ai";
// import { NavLink } from 'react-router-dom'
function Contact() {
  return (
    <ContactSection>
      <ContactWrapper>
        {/* <Divider date="04/04" section="CONTACT" name="DARIA ZAFIRA" /> */}
        <Header>Let’s create something today!</Header>
        <City>Tel Aviv, Israel</City>
        <Link href="tel: +972 (50) 911 38 89">Phone: +972 (50) 911 38 89</Link>
        <br />
        <Link href="mailto: saladikhanov@gmail.com">
          Email: Saladikhanov@gmail.com
        </Link>
        <SocialWrapper className="social_link_wrapper">
          <SocialLink href="https://www.linkedin.com/in/saladikhanov">
            <Linkedin />
          </SocialLink>
          <SocialLink href="https://github.com/Saladikhanov/">
            <Github />
          </SocialLink>
          <SocialLink href="tel: +972 (50) 911 38 89">
            <Phone />
          </SocialLink>
        </SocialWrapper>
      </ContactWrapper>
      <ContactFormWrapper className="contact_form_wrapper">
        <ContactForm />
      </ContactFormWrapper>
    </ContactSection>
  );
}
export default Contact;
