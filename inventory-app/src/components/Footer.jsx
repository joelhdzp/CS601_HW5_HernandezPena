/* Footer component shows copyright and navigation links
 * Edits footer's description
 * Edits footer's navigation objects
 */
function Footer () {
  return (
    <div>
      <div className="footer-title">
        <p><strong>© 2025 Fresh Eats 🍎 All Rights Reserved 🔑</strong></p>
      </div>
      <div className="bottom-nav">
        <a href="#about" className="nav-text">About Us</a>
        <a href="#contact" className="nav-text">Contact</a>
        <a href="#policy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
