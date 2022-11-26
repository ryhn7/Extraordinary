class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `    <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-info">
                                <img src="../../assets/img/logo_footer.png" height="60px" alt="logo-footer" height="60"
                                    width="242">
                                <p>TEDx is an independently organized TED event which helps communities enjoy a TED
                                    like experience,
                                    through live speakers and videos of TED talks. Extensively conducted by leading
                                    universities and
                                    organizations, TEDx events have seen incredible growth across the globe.</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="/index.html">Home</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../about/about.html">About</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="https://ticket.tedxundip.org" target="_blank">Order Ticket
                                Now</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="/public/faq/faq.html">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Contacts</h4>
                        <p>
                            Diponegoro University,
                            Kota Semarang, Jawa Tengah 50275
                            <br>
                            Indonesia<br>
                        <div>
                            <div class="row">
                                <div class="col-2">
                                    <strong>Phone:</strong>
                                </div>
                                <div class="col">
                                    <p><a href="tel:+6282157961859">Najla : +6282157961859</a></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                </div>
                                <div class="col">
                                    <p><a href="tel:+6281325496643">Rico : +6281325496643</a></p>
                                </div>
                            </div>
                        </div>
                        <strong>Email:</strong> <a
                            href="mailto:tedxundip3.0@gmail.com@gmail.com?subject=[[Your Subject]]&body=Email Using Body"
                            target="_blank">&nbsp;&nbsp;&nbsp;tedxundip3.0@gmail.com</a><br>
                        </p>
                    </div>
                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Check Our Social Medias</h4>
                            <p>Get the latest information updates from our official account!</p>
                            <div class="social-links mt-3">
                                <a href="https://www.twitter.com/tedxundip/" target="_blank" class="twitter"><i
                                        class="bx bxl-twitter"></i></a>
                                <a href="https://www.instagram.com/tedxundip/" target="_blank" class="instagram"><i
                                        class="bx bxl-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/tedxundip/" target="_blank" class="linkedin"><i
                                        class="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    &copy;2022 All Rights Reserved. <strong><span style="color: #E62B1E">TEDx</span></strong> event is
                    operated under license from <strong><span style="color: #E62B1E">TED</span></strong>
                </div>
                <div class="credits">
                    Designed by <a href="#"> Website Development TEDxUNDIP</a>
                </div>
            </div>
        </footer>`
    }
}

customElements.define('custom-footer', Footer);