const pageHeader = document.querySelector(".page-top");
pageHeader.innerHTML = `<div class="logo-div">
<a href="index.html" class="logo">
    CS
</a>
</div>
<!-- page top right: nav bar (home, about, projects, contact, crafts for laughs) -->
<div class="nav-div">
<nav class="header-nav-bar">
    <div class="nav home">
        <a href="index.html" class="home button-link">
            <button class="nav-button home">
                Home
            </button>
        </a>
    </div>
    <div class="nav about">
        <a href="About.html" class="about button-link">
            <button class="nav-button about">
                About
            </button>
        </a>
    </div>
    <div class="nav projects">
        <a href="Projects.html" class="projects button-link">
            <button class="nav-button projects">
                Projects
            </button>
        </a>
    </div>
    <div class="nav contact">
        <a href="Contact.html" class="contact button-link">
            <button class="nav-button contact">
                Contact
            </button>
        </a>
    </div>
    
</nav>
</div>`;
// <div class="nav rec">
    //     <a href="reCREATION.html" class="rec button-link">
    //         <button class="nav-button rec">
    //             reCREATIONal
    //         </button>
    //     </a>
    // </div>