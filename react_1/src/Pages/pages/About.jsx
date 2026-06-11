import "./About.css";

const courses = [
  {
    title: "Web Development",
    text: "Learn HTML, CSS, JavaScript, responsive layouts, and real website building from basics.",
  },
  {
    title: "React Development",
    text: "Understand components, props, state, routing, and how to build modern React projects.",
  },
  {
    title: "UI/UX Basics",
    text: "Learn clean layouts, color, spacing, typography, and user-friendly design thinking.",
  },
  {
    title: "Career Skills",
    text: "Improve your portfolio, project presentation, interview confidence, and learning roadmap.",
  },
];

const features = [
  "100% free learning resources",
  "Beginner-friendly explanations",
  "Practical projects and examples",
  "Content for students and self-learners",
];

function About() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="heroText">
          <p className="tagline">Free education for everyone</p>
          <h1>Learn Web Development and Digital Skills for Free</h1>
          <p>
            LearnFree provides simple, practical, and high-quality educational
            content for students and beginners who want to start their journey in
            web development, React, UI design, and technology.
          </p>
          <div className="heroButtons">
            <a href="#courses" className="primaryBtn">
              Explore Courses
            </a>
            <a href="#about" className="secondaryBtn">
              Learn More
            </a>
          </div>
        </div>

        <div className="heroCard">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Students learning together"
          />
          <div className="coursePreview">
            <span>Featured Path</span>
            <h3>Frontend Developer Roadmap</h3>
            <p>HTML, CSS, JavaScript, React, Git, and portfolio projects.</p>
          </div>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="sectionTitle">
          <p>What you can learn</p>
          <h2>Free courses for modern digital skills</h2>
        </div>
        <div className="courseGrid">
          {courses.map((course) => (
            <article className="courseCard" key={course.title}>
              <div className="cardIcon">{course.title.charAt(0)}</div>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <a href="#contact">Start learning</a>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection section" id="about">
        <div>
          <p className="tagline">About LearnFree</p>
          <h2>Making quality education accessible to every learner</h2>
        </div>
        <div className="aboutText">
          <p>
            Our goal is to help people learn useful technology skills without
            worrying about fees. We focus on clear explanations, practical
            examples, and project-based learning so beginners can build real
            confidence.
          </p>
          <p>
            Whether you are a student, a job seeker, or someone exploring coding
            for the first time, LearnFree gives you a simple path to start and
            grow.
          </p>
        </div>
      </section>

      <section className="section" id="features">
        <div className="sectionTitle">
          <p>Why choose us</p>
          <h2>Simple, professional, and beginner friendly</h2>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <div className="featureItem" key={feature}>
              <span>✓</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="sectionTitle">
          <p>Contact</p>
          <h2>Have a topic request?</h2>
        </div>
        <form className="contactForm" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Topic you want to learn" />
          <textarea rows="5" placeholder="Write your message" />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default About;
