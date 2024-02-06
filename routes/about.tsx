import SetTitle from "../islands/SetTitle.tsx"

function About() {
  return (
    <SetTitle title="About: Michael Shalewski | Dairyland">
      <div class="about-root">
        <div class="social-legend">
          <a href="https://github.com/jagernet-ops" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/michael-shalewski" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://mastodon.social/@jagernet_ops" target="_blank">
            <i class="fa-brands fa-mastodon"></i>
          </a>
          <a href="mailto:mshalewski@outlook.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div class="about-body">
          <img id="headshot" src="images/headshot.jpg" alt="Picture of Michael Shalewski" />
          <h1>
            "a dairyland dev"
          </h1>
          <h2 id="about">
            [about]
          </h2>
          <p>
            Hello, my name is Michael Shalewski. I am a Milwaukee native and avid programmer. I currently attend Ronald Reagan High School and have been accepted to <a href="https://www.msoe.edu/" target="_blank"><abbr style={{fontStyle: "italic"}} title="Milwaukee School of Engineering">MSOE</abbr></a> for the fall of 2024. I currently am a intern at Northwestern Mutual working in Client Communications. I am a Senior Programmer for FRC team 1675 and will be attending both the <a href="https://www.firstinspires.org/team-event-search/event?id=68618" target="_blank">Seven Rivers</a> and <a href="https://www.firstinspires.org/team-event-search/event?id=68480" target="_blank">Wisconsin regional</a> competitions.
          </p> 
          <h2 id="skills">
            [skills & interests]
          </h2>
          <img src="images/interests.svg" alt="interests" />
          <p>
            This website was built using the <a href="https://fresh.deno.dev/" target="_blank">FRESH framework</a> a full stack framework which utilizes the islands architecture and Deno to minimize bundle sizes and improve client side performance. Additional details related to mobile application development, exploring backend development with Spring and C#, and web-dev projects can be found at my github.
          </p>
          <h2 id="projects">
            [projects and commits]
          </h2>
          <p>
             In my free time I enjoy learning about new technologies and working on personal projects. You can check out my <a href={location?.origin+"/blog"}>blog</a> or github for further info regarding my more recent projects. I'm almost always developing something new so it should update fairly frequently.  
          </p>
          <a href="https://github.com/jagernet-ops" target="_blank">
            <figure>
              <img src="http://ghchart.rshah.org/000000/jagernet-ops" alt="jagernet-ops commit history" />
              <figcaption>Recent Commit History</figcaption>
            </figure>
          </a>
       </div>
      </div> 
    </SetTitle>
  );
}

export default About;
