export const introdata = {
  title: "Hi, I’m Rajnish Kumar 👋",
  animated: {
    first: "Professional <strong>.NET Developer</strong> 💻",
    second: "Building <em>Robust Web Applications</em> 🌐",
    third:
      "Creating <span style='color:#00bcd4;'>Seamless User Experiences</span> 🎨",
  },
  description: (
    <p style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#e0e0e0" }}>
      <p>
        I’m a <strong>.NET developer</strong> with 1 year of experience. I build
        <span className="highlight-blue">
          {" "}
          fast, reliable, and user-friendly web applications
        </span>
        . I enjoy turning ideas into practical solutions that make a
        <span className="highlight-pink"> real impact</span>.
      </p>
    </p>
  ),
  images: [
    `${process.env.PUBLIC_URL}/Rajnish_pic.png`,
    `${process.env.PUBLIC_URL}/raj_pic.png`,
  ],
};
