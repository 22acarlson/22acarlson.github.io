document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".custom-navbar");

  if (navbar) {
    navbar.innerHTML = `
      <ul class="logo"><a href="index.html"><h2>Aidan Carlson</h2></a></ul>
      <ul class="nav-links">
          <li><a href="Research.html">Research</a></li>
          <li><a href="../components/CV.pdf">CV</a></li>
          <li><a href="Teaching.html">Teaching</a></li>
          <li><a href="Projects.html">Projects</a></li>
      </ul>`;
  }
});