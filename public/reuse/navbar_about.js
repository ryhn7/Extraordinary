class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `    <header id="header" class="fixed-top d-flex align-items-cente">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-evenly">
                <a href="../../index.html" class="logo me-auto me-lg-0"><img src="../../assets/img/logo.png"
                        alt="logo-header" class="img-fluid" height="39.9" width="161.6"></a>
                <nav id="navbar" class="navbar order-last order-lg-0">
                    <ul id="navigation">
                        <li><a class="nav-link" href="../../index.html">Home</a></li>
                        <li class="dropdown"><a class="active" href="#"><span>About</span> <i
                                    class="bi bi-chevron-down text-danger fw-bold"></i></a>
                            <ul>
                                <li><a href="/public/about/about.html">TEDxUNDIP Journey</a></li>
                                <li><a href="/public/about/grand-theme.html">Grand Theme</a></li>
                                <li><a href="/public/about/meet-the-team.html">Meet the Team</a></li>
                                <li><a href="/public/about/sponsorship.html">Sponsorships</a></li>
                            </ul>
                        </li>
                        <li><a class="nav-link" href="https://ticket.tedxundip.org" target="_blank">Buy Ticket</a></li>
                        <li><a class="nav-link" href="#">FAQ</a></li>
                        <li class="btn-lef" style="margin-left: 150px;">
                            <a href="https://www.twitter.com/tedxundip/" target="_blank" class="scm-header"><i
                                    class="bx bxl-twitter fs-6"></i></a>
                        </li>
                        <li class="btn-lef">
                            <a href="https://www.linkedin.com/company/tedxundip/" target="_blank" class="scm-header"><i
                                    class="bx bxl-linkedin fs-6"></i></a>
                        </li>
                        <li class="btn-lef">
                            <a href="https://www.instagram.com/tedxundip/" target="_blank" class="scm-header"><i
                                    class="bx bxl-instagram fs-6"></i></a>
                        </li>
                    </ul> <i class="bi bi-list mobile-nav-toggle"></i>
                </nav><!-- .navbar -->
            </div>
        </header>`
    }
}

customElements.define('nav-bar', Navbar);

// const activePage = window.location.pathname;
// console.log(activePage);
// const list = document.getElementsByClassName('x');
// const menuItems = document.querySelectorAll('.tanda');

// menuItems.forEach((item) => {
//     if (item.querySelector('a').getAttribute('href') === activePage) {
//         list[0].classList.add('active');
//         console.log(item.querySelector('a').getAttribute('href'))
        
//     }
// });