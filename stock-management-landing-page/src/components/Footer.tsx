const socialLinks = [
  { icon: "/images/google.png", tooltip: "" },
  { icon: "/images/whatsapp.png", tooltip: "" },
  { icon: "/images/instagram.png", tooltip: "" },
];

export function Footer() {
  return (
    <footer className="footer" id="contactanos">
      <div className="social-links" aria-label="Redes sociales">
        {socialLinks.map(({ icon, tooltip }, index) => (
          <span className="social-icon" data-tooltip={tooltip} key={index}><img src={icon} alt="" /></span>
        ))}
      </div>
      <div className="footer-contact"><strong>CONTÁCTANOS</strong><img src="/images/fischerLogo.png" alt="fischer" /></div>
    </footer>
  );
}
