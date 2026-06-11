import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>LearnFree</h2>
        <p>Free educational content for students, beginners, and future developers.</p>
      </div>
      <div className="footerLinks">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="copyright">Copyright 2026 LearnFree. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
