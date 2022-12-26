<template>
    <div class="navbar navbar-expand-lg bg-light navbar-light">
        <!-- <div class="container"> -->
        <!-- Brand and toggle get grouped for better mobile display -->
        <a class="navbar-brand logo_h" href="/">
         <h3>SEMA NA KIONGOZI WAKO</h3>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav ml-auto">
                <a href="#home" class="nav-item nav-link active">Home</a>
                <a href="#about" class="nav-item nav-link">About</a>
                <a href="#experience" class="nav-item nav-link">Our History</a>
                <a href="#price" class="nav-item nav-link">Features</a>
                <a href="#team" class="nav-item nav-link">Team</a>               
                <a href="#contact" class="nav-item nav-link">Contact</a>
                <router-link to="/login"><a  class="nav-item nav-link"> Login </a></router-link>

            </div>
        </div>
    </div>
    
    
    <div class="hero" id="home">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-12 col-md-6">
                    <div class="hero-content">
                        <div class="hero-text">
                            <p>We Are</p>
                            <h2>Sema na Kiongozi Wako</h2>
                            <div class="typed-text">Citizen can talk to their leaders in a simplified way</div>
                        </div>
                        <div class="hero-btn">
                            <a class="btn" href="about">Ask Us</a>
                            <a class="btn" href="contact">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 d-none d-md-block">
                    <div class="hero-image">
                        <img src="/views/assets/img/people.jpg" alt="Hero Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About Start -->
    <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-img">
                        <img src="/views/assets/img/usingPhones.png" alt="Image">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-content">
                        <div class="section-header text-left">
                            <h2> Who Are We</h2>
                        </div>
                        <div class="about-text">
                            
                                <p><em>SKW</em><span> </span>is a piece of software that enables Tanzanian citizens, particularly young people, to offer feedback, compliments, and suggestions to their local authorities.</p>
<p>To help leaders gauge their efficacy in addressing issues of community development and problem-solving, a software platform has been made available. The solution focuses on raising democratic participation and knowledge among all members of society.</p>
<p><em>SKW</em><span> </span>provides extra routes for decision-makers including Regional Commissioners, Members of Parliament, and District Commissioners to receive issues directly from residents rather of having to go through other platforms or tools like social media. The platform will be used by the leaders to determine what to prioritize for their constituents in light of the actions that will take precedence for them.</p>
<p>As a<span> </span><em>SKW</em><span> </span>user, you will be able to send contributions to the leader in your area of residence for free and anonymously since we want leaders to concentrate on evaluating their performance when doing their duty to the citizens.</p>
    
                        
                        </div>
                       
                </div>
            </div>
        </div>
        </div>

    </div>
    <!-- About End -->
    
    <!-- Experience Start -->
    <div class="experience" id="experience">
        <div class="container">
            <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>SKW HISTORY</p>
                <h3>How did we get here and where are we going?</h3>
            </header>
            <div class="timeline">
                <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                    <div class="timeline-text">
                        <div class="timeline-date">Feb 2021 - March 2021</div>
                        <h2>RapidPro Hackathon at Y4C Hub</h2>
                        <h4>Origin of the Idea and the Solution</h4>
                        <p>
                            After conceiving and building a prototype in response to the challenge set out by UNICEF, Team was named the third winner of the RapidPro Hackathon. The answer was the initial ideation of SKW.                        </p>
                    </div>
                </div>
                <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                    <div class="timeline-text">
                        <div class="timeline-date"> March - May 2021</div>
                        <h2>Software Development</h2>
                        <h4>From Prototype to Software Product</h4>
                        <p>
                            The team was given the chance to demonstrate their capacity to create software that will meet society's needs, and when given the chance, they created an MVP that was best to be released to benefit the local community.
                        </p>
                    </div>
                </div>
                <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                    <div class="timeline-text">
                        <div class="timeline-date"> Jun 2021 - Jul 2022</div>
                        <h2>Demo and Initial released</h2>
                        <h4>The Software was presented to the society</h4>
                        <p>
                            Instead of the Y4C hub, SKW was on the demo stage to be tasted and demonstrated to other interested stakeholders. For the team, it was an amazing occasion.                        </p>
                    </div>
                </div>
                <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                    <div class="timeline-text">
                        <div class="timeline-date"> February 2022 - Current</div>
                        <h2>Software Product Enhancement</h2>
                        <h4>Work on the feedbacks for better product</h4>
                        <p>
                            The SKW team is working hard to make sure that the product is friendly to all users, including citizens and leaders. We hope SKW will serve as a platform that connects citizens and their leaders and promotes greater community development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <!-- Banner Start -->
    <div class="banner wow zoomIn" data-wow-delay="0.1s">
        <!-- <div class="container"> -->
        <div class="section-header text-center">
            <p>Free SMS and Anonymously</p>
        </div>
        <div class="container banner-text">
            <p>
                Bring your phone. To interact with the conversation flow and liberate yourself as a citizen chat to take part in the growth of your society, send SMS with the word "SKW" to the U-Report number 15070. Your leader will receive content in a simplified fashion to enable him/her know where to focus while serving the community.            </p>
            <a class="btn">Try Now</a>
        </div>
    </div>
    <!-- Banner End -->
    
    
    <!-- Price Start -->
    <div class="price" id="price">
        <!-- <div class="container"> -->
        <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>Platform Features</p>
            <h2>Features Descriptions</h2>
        </div>
        <div class="row">
            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="price-item">
                    <div class="price-header">
                        <div class="price-title">
                            <h2>SKW WEBSITE</h2>
                        </div>
                        <div class="price-prices">
                            <h2>Included features</h2>
                        </div>
                    </div>
                    <div class="price-body">
                        <div class="price-description">
                            <ul>
                                <li>Interactive Web content</li>
                                <li>Responsive Web Design</li>
                                <li>Web Design Business</li>
                                <li>Web Standards</li>
                                <li>Simulating Web text</li>
                            </ul>
                        </div>
                    </div>
                    <div class="price-footer">
                        <div class="price-action">
                            <a class="btn" href="">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                <div class="price-item featured-item">
                    <div class="price-header">
                        <div class="price-title">
                            <h2>U-Report SMS</h2>
                        </div>
                        <div class="price-prices">
                            <h2>Component Available</h2>
                        </div>
                    </div>
                    <div class="price-body">
                        <div class="price-description">
                            <ul>
                                <li>ChatBot</li>
                                <li>Layout and Composition</li>
                                <li>Designing logo techniques</li>
                                <li>Photoshop </li>
                                <li>Design graphic tips and Tricks</li>
                            </ul>
                        </div>
                    </div>
    <!--                <div class="price-footer">-->
    <!--                    <div class="price-action">-->
    <!--                        <a class="btn" href="">O</a>-->
    <!--                    </div>-->
    <!--                </div>-->
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="price-item">
                    <div class="price-header">
                        <div class="price-title">
                            <h2>Leaders Dashboard</h2>
                        </div>
                        <div class="price-prices">
                            <h2>Printed Products</h2>
                        </div>
                    </div>
                    <div class="price-body">
                        <div class="price-description">
                            <ul>
                                <li>Banners and fliers</li>
                                <li>Calender and Posters</li>
                                <li>Business and ID Cards</li>
                                <li>Reflectors and Product label</li>
                                <li>Promotion Materials</li>
                            </ul>
                        </div>
                    </div>
                    <div class="price-footer">
                        <div class="price-action">
                            <a class="btn" href="">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Price End -->
    
    <!-- Team Start -->
    <div class="team" id="team">
        <div class="container">
            <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>Our Team</p>
                <h2>Executive Team Members</h2>
            </div>
            <div class="row">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="/views/assets/img/deog.jpg" alt="Image">
                        </div>
                        <div class="team-text">
                            <h2>Deogratias Gemini Mushi</h2>
                            <h4>Co-Founder and Chief of Operations</h4>
                            <p>
                                Pursuing his vision of building software systems in Tanzania. Deo is graduate of University of Dar es Salaam with BSc in Computer Science.
                            </p>
                            <div class="team-social">
                                <a class="btn" href="https://twitter.com/tranceTeo"><i class="fab fa-twitter"></i></a>
                                <a class="btn" href="https://facebook.com/deogemini"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn" href="https://linkedin.com/deogemini"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn" href="https://github.com/deogemini"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="/views/assets/img/laurent.jpg" alt="Image">
                        </div>
                        <div class="team-text">
                            <h2>Laurent Deus</h2>
                            <h4>Co-founder and CTO</h4>
                            <p>
                          Laurent has mission in building tools and softwares that will simplify our life and make a world better place. Laurent is graduate of University of Dar es Salaam with a Bsc Telecommunications Engineering. 
                            </p>
                            <div class="team-social">
                                <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- </div> -->
            </div>
        </div>
    
        <div class="contact" id="contact"></div>
        <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container-fluid">
                <div class="container">
                    <div class="footer-info">
                        <h2>Contact Us</h2>
    
                        <section class="section_gap">
                            <div class="container">
                                <h2>OUR LOCATION</h2>
                                <div class="d-none d-sm-block mb- pb-6">
                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.985895841979!2d39.23745771539621!3d-6.771570095105288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d884902ad3f%3A0x13bfd47b6fadcdba!2sY4C%20Innovation%20Hub!5e0!3m2!1sen!2stz!4v1671698217157!5m2!1sen!2stz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                                </div>
                                </div>
    
                            </div>
                        </section>
                    </div>
    
                    <div class="footer-social">Follow us
                        <a href="https://twitter.com/skw"><i class="fab fa-twitter"></i></a>
                        <a href="https://facebook.com/skw"><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/skw/"><i class="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com/skw"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <p>&copy; <a href="#">2022</a>, All Right Reserved  <a href="http://45.56.115.113/">Y4C Hub Udsm</a></p>
            </div>
        </div>
    </div>
    <!-- Contact End-->
    
    
    
    
    <!-- Back to top button -->
    <a href="#" class="btn back-to-top"><i class="fa fa-chevron-up"></i></a>
    
    
    <!-- Pre Loader -->
    <div id="loader" class="show">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    methods: {
        load(){
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        }
    },
    created(){
        this.load();
    }
}
</script>



<style>
   /*******************************/
/********* General CSS *********/
/*******************************/
body {
    color: #797979;
    background: #ffffff;
    font-family: 'Montserrat', sans-serif;
}

h1,
h2, 
h3, 
h4,
h5, 
h6 {
    color: #414141;
}

a {
    color: #313131;
    transition: .3s;
}

a:hover,
a:active,
a:focus {
    color: #B9B632;
    outline: none;
    text-decoration: none;
}

.btn:focus,
.form-control:focus {
    box-shadow: none;
}

.container-fluid {
    max-width: 1366px;
}

.btn {
    padding: 12px 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ffffff;
    background: #B9B632;
    border: 2px solid transparent;
    border-radius: 0;
    box-shadow: inset 0 0 0 50px #B9B632;
    transition: ease-out 0.3s;
    -webkit-transition: ease-out 0.3s;
    -moz-transition: ease-out 0.3s;
}

.btn:hover {
    color: #B9B632;
    background: transparent;
    box-shadow: inset 0 0 0 0 #B9B632;
    border-color: #B9B632;
}

#loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity .3s ease-out, visibility 0s linear .3s;
    -o-transition: opacity .3s ease-out, visibility 0s linear .3s;
    transition: opacity .3s ease-out, visibility 0s linear .3s;
    z-index: 999;
}

#loader.show {
    -webkit-transition: opacity .6s ease-out, visibility 0s linear 0s;
    -o-transition: opacity .6s ease-out, visibility 0s linear 0s;
    transition: opacity .6s ease-out, visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
}

#loader .loader {
    position: relative;
    width: 45px;
    height: 45px;
    border: 5px solid #dddddd;
    border-top: 5px solid #B9B632;
    border-radius: 50%;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.back-to-top {
    position: fixed;
    display: none;
    width: 44px;
    height: 44px;
    padding: 8px 0;
    text-align: center;
    line-height: 1;
    font-size: 22px;
    right: 15px;
    bottom: 15px;
    z-index: 9;
}

.back-to-top i {
    color: #ffffff;
}

.back-to-top:hover i {
    color: #414141;
}


/**********************************/
/*********** Nav Bar CSS **********/
/**********************************/
.navbar {
    position: relative;
    transition: .5s;
    z-index: 999;
}

.navbar.nav-sticky {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
}
/* 
.navbar .navbar-brand {
    margin: 0;
    font-size: 45px;
    line-height: 0px;
    font-weight: 700;
    letter-spacing: 2px;
    transition: .5s;
    
} */

.navbar .navbar-brand img {
    max-width: 80%;
    max-height: 80px;
    margin-left: 10px;
}

.navbar .dropdown-menu {
    margin-top: 0;
    border: 0;
    border-radius: 0;
    background: #f8f9fa;
}

@media (min-width: 992px) {
    .navbar {
        position: absolute;
        width: 100%;
        padding: 30px 60px;
        background: transparent !important;
        border-bottom: 1px dashed rgba(256, 256, 256, .2);
        z-index: 9;
    }
    
    .navbar.nav-sticky {
        padding: 10px 60px;
        background: #ffffff !important;
    }
    
    .navbar .navbar-brand {
        color: #ffffff;
    }
    
    .navbar.nav-sticky .navbar-brand {
        color: #B9B632;
    }

    .navbar-light .navbar-nav .nav-link,
    .navbar-light .navbar-nav .nav-link:focus {
        padding: 10px 10px 8px 10px;
        color: #ffffff;
        font-size: 15px;
        font-weight: 500;
    }
    
    .navbar-light.nav-sticky .navbar-nav .nav-link,
    .navbar-light.nav-sticky .navbar-nav .nav-link:focus {
        color: #414141;
    }

    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link.active {
        color: #111111;
    }
    
    .navbar-light.nav-sticky .navbar-nav .nav-link:hover,
    .navbar-light.nav-sticky .navbar-nav .nav-link.active {
        color: #B9B632;
    }
}

@media (max-width: 991.98px) {   
    .navbar {
        padding: 15px;
        background: #ffffff !important;
    }
    
    .navbar .navbar-brand {
        color: #B9B632;
    }
    
    .navbar .navbar-nav {
        margin-top: 15px;
    }
    
    .navbar a.nav-link {
        padding: 5px;
    }
    
    .navbar .dropdown-menu {
        box-shadow: none;
    }
}


/*******************************/
/********** Hero CSS ***********/
/*******************************/
.hero {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 45px;
    padding: 120px 0 0 0;
    overflow: hidden;
    /* background: linear-gradient(#B9B632, #B9B632), url(../img/hero-bg.jpg); */
    background: linear-gradient(#b9b73209, #b9b73209), url(/views/assets/img/hero-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.hero .container-fluid {
    padding: 10px;
}

.hero .hero-image {
    position: relative;
    text-align: right;
    padding-right: 75px;
}

.hero .hero-image img {
    max-width: 110%;
    max-height: 80%;
}

.hero .hero-content {
    position: relative;
    padding-left: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.hero .hero-text p {
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 55px;
}

.hero .hero-text h1 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.hero .hero-text h2 {
    display: inline-block;
    margin: 0;
    height: 35px;
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
}

.hero .hero-text .typed-text {
    display: none;
}

.hero .hero-text .typed-cursor {
    font-size: 35px;
    font-weight: 300;
    color: #ffffff;
}

.hero .hero-btn .btn {
    margin-top: 35px;
    color: #B9B632;
    background: #ffffff;
    box-shadow: inset 0 0 0 50px #ffffff;
}

.hero .hero-btn .btn:hover {
    color: #ffffff;
    background: transparent;
    box-shadow: inset 0 0 0 0 #ffffff;
    border-color: #ffffff;
}

.hero .hero-btn .btn:first-child {
    margin-right: 10px;
}

@media (max-width: 991.98px) {
    .hero {
        padding-top: 60px;
    }
    
    .hero .hero-content {
        padding: 0 15px;
    }
    
    .hero .hero-text p {
        font-size: 20px;
    }
    
    .hero .hero-text h1 {
        font-size: 45px;
    }
    
    .hero .hero-text h2 {
        font-size: 25px;
        height: 25px;
    }
    
    .hero .hero-btn .btn {
        padding: 12px 30px;
        letter-spacing: 1px;
    }
}

@media (max-width: 767.98px) {
    .hero {
        padding-top: 60px;
        padding-bottom: 60px;
    }
    
    .hero,
    .hero .hero-text,
    .hero .hero-btn {
        width: 100%;
        text-align: center;
    }
    
    .hero .hero-text p {
        font-size: 18px;
    }
    
    .hero .hero-text h1 {
        font-size: 35px;
    }
    
    .hero .hero-text h2 {
        font-size: 22px;
        height: 22px;
    }
    
    .hero .hero-btn .btn {
        padding: 10px 15px;
        letter-spacing: 1px;
    }
}

@media (max-width: 575.98px) {
    .hero .hero-text p {
        font-size: 16px;
    }
    
    .hero .hero-text h1 {
        font-size: 30px;
    }
    
    .hero .hero-text h2 {
        font-size: 18px;
        height: 18px;
    }
    
    .hero .hero-btn .btn {
        padding: 8px 10px;
        letter-spacing: 0;
    }
}


/*******************************/
/******* Section Header ********/
/*******************************/
.section-header {
    position: relative;
    margin-bottom: 45px;
}

.section-header p {
    display: inline-block;
    margin: 0 30px;
    margin-bottom: 10px;
    padding-left: 15px;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: #ffffff;
}

.section-header p::before {
    position: absolute;
    content: "";
    height: 3px;
    top: 11px;
    right: 0;
    left: -30px;
    background: #B9B632;
    z-index: -1;
}

.section-header p::after {
    position: absolute;
    content: "";
    width: 3px;
    height: 3px;
    top: 11px;
    left: 3px;
    background: #B9B632;
    z-index: 1;
}

.section-header h2 {
    margin: 0;
    position: relative;
    font-size: 45px;
    font-weight: 700;
}

@media (max-width: 767.98px) {
    .section-header h2 {
        font-size: 30px;
    }
}


/*******************************/
/********** About CSS **********/
/*******************************/
.about {
    position: relative;
    width: 100%;
    margin: -45px 0 45px 0;
}

.about .col-lg-6 {
    padding: 0;
}

.about .section-header {
    margin-bottom: 30px;
}

.about .about-img {
    position: relative;
    height: 100%;
}

.about .about-img img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about .about-content {
    padding: 0 60px;
}

.about .about-text p {
    margin-top: 5px;
    font-size: 16px;
}

.about .skills {
    margin-bottom: 30px;
}

.about .skill-name {
    margin-top: 1px;
}

.about .skill-name p {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
}

.about .skill-name p:last-child {
    float: right;
}

.about .progress {
    height: 10px;
    border-radius: 10px;
    background: #dddddd;
}

.about .progress .progress-bar {
    width: 0px;
    background: #B9B632;
    border-radius: 10px;
    transition: 2s;
}

.about .about-text a.btn {
    margin-top: 15px;
}

@media (max-width: 991.98px) {
    .about .about-content {
        padding: 45px 15px 0 15px;
    }
}


/*******************************/
/******* Experience CSS ********/
/*******************************/
.experience {
    position: relative;
    padding: 45px 0 15px 0;
}

.experience .timeline {
    position: relative;
    width: 100%;
}

.experience .timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: #B9B632;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}

.experience .timeline .timeline-item {
    position: relative;
    background: inherit;
    width: 50%;
    margin-bottom: 30px;
}

.experience .timeline .timeline-item.left {
    left: 0;
    padding-right: 30px;
}

.experience .timeline .timeline-item.right {
    left: 50%;
    padding-left: 30px;
}

.experience .timeline .timeline-item::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 48px;
    right: -8px;
    background: #ffffff;
    border: 2px solid #B9B632;
    border-radius: 16px;
    z-index: 1;
}

.experience .timeline .timeline-item.right::after {
    left: -8px;
}

.experience .timeline .timeline-item::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 46px;
  right: 10px;
  z-index: 1;
  border: 10px solid;
  border-color: transparent transparent transparent #dddddd;
}

.experience .timeline .timeline-item.right::before {
  left: 10px;
  border-color: transparent #dddddd transparent transparent;
}

.experience .timeline .timeline-date {
    position: absolute;
    width: 100%;
    top: 44px;
    font-size: 16px;
    font-weight: 600;
    color: #B9B632;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
}

.experience .timeline .timeline-item.left .timeline-date {
    text-align: left;
    left: calc(100% + 55px);
}

.experience .timeline .timeline-item.right .timeline-date {
    text-align: right;
    right: calc(100% + 55px);
}

.experience .timeline .timeline-text {
    padding: 30px;
    background: #ffffff;
    position: relative;
    border-right: 5px solid #dddddd;
    box-shadow: 0 0 60px rgba(0, 0, 0, .08);
}

.experience .timeline .timeline-item.right .timeline-text {
    border-right: none;
    border-left: 5px solid #dddddd;
}

.experience .timeline .timeline-text h2 {
    margin: 0 0 5px 0;
    font-size: 22px;
    font-weight: 600;
}

.experience .timeline .timeline-text h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
}

.experience .timeline .timeline-text p {
    margin: 0;
    font-size: 16px;
}

@media (max-width: 767.98px) {
    .experience .timeline::after {
        left: 8px;
    }

    .experience .timeline .timeline-item {
        width: 100%;
        padding-left: 38px;
    }
    
    .experience .timeline .timeline-item.left {
        padding-right: 0;
    }
    
    .experience .timeline .timeline-item.right {
        left: 0%;
        padding-left: 38px;
    }

    .experience .timeline .timeline-item.left::after, 
    .experience .timeline .timeline-item.right::after {
        left: 0;
    }
    
    .experience .timeline .timeline-item.left::before,
    .experience .timeline .timeline-item.right::before {
        left: 18px;
        border-color: transparent #dddddd transparent transparent;
    }
    
    .experience .timeline .timeline-item.left .timeline-date,
    .experience .timeline .timeline-item.right .timeline-date {
        position: relative;
        top: 0;
        right: auto;
        left: 0;
        text-align: left;
        margin-bottom: 10px;
    }
    
    .experience .timeline .timeline-item.left .timeline-text,
    .experience .timeline .timeline-item.right .timeline-text {
        border-right: none;
        border-left: 5px solid #dddddd;
    }
}


/*******************************/
/********* Service CSS *********/
/*******************************/
.service {
    position: relative;
    width: 100%;
    padding: 45px 0 15px 0;
}

.service .service-item {
    position: relative;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 0 0 transparent;
    transition: ease-out 0.5s;
}

.service .service-item:hover {
    box-shadow: inset 800px 0 0 0 #B9B632;
}

.service .service-icon {
    position: relative;
    width: 150px;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #B9B632;
    background: #ffffff;
}

.service .service-icon i {
    position: relative;
    font-size: 60px;
    color: #B9B632;
    transition: .3s;
}

.service .service-item:hover i {
    font-size: 75px;
}

.service .service-text {
    position: relative;
    width: calc(100% - 120px);
    padding: 0 30px;
}

.service .service-text h3 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    transition: 1s;
}

.service .service-text p {
    margin: 0;
    font-size: 16px;
    transition: 1s;
}

.service .service-item:hover .service-text h3,
.service .service-item:hover .service-text p {
    color: #ffffff;
}

@media (max-width: 575.98px) {
    .service .service-text h3 {
        font-size: 16px;
        margin-bottom: 5px;
    }
    
    .service .service-text p {
        font-size: 14px;
    }
}


/*******************************/
/******** Portfolio CSS ********/
/*******************************/
.portfolio {
    position: relative;
    padding: 45px 0 15px 0;
}

.portfolio #portfolio-filter {
    padding: 0;
    margin: -15px 0 25px 0;
    list-style: none;
    font-size: 0;
    text-align: center;
}

.portfolio #portfolio-filter li {
    cursor: pointer;
    display: inline-block;
    margin: 5px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    background: #B9B632;
    border: 2px solid transparent;
    border-radius: 0;
    box-shadow: inset 0 0 0 50px #B9B632;
    transition: ease-out 0.3s;
    -webkit-transition: ease-out 0.3s;
    -moz-transition: ease-out 0.3s;
}

.portfolio #portfolio-filter li:hover,
.portfolio #portfolio-filter li.filter-active {
    color: #B9B632;
    background: transparent;
    box-shadow: inset 0 0 0 0 #B9B632;
    border-color: #B9B632;
}

.portfolio .portfolio-item {
    position: relative;
}

.portfolio .portfolio-wrap {
    position: relative;
    width: 100%;
}

.portfolio .portfolio-img {
    position: relative;
    overflow: hidden;
}

.portfolio .portfolio-img img {
    position: relative;
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    transform: scale(1.1);
    transition: .5s;
}

.portfolio .portfolio-item:hover img {
    margin-left: 15px;
}

.portfolio .portfolio-text {
    position: relative;
    height: 60px;
    width: calc(100% - 30px);
    margin: -30px 15px 30px 15px;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 0 15px rgba(0, 0, 0, .12);
}

.portfolio .portfolio-text h3 {
    width: calc(100% - 70px);
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0 15px;
    white-space: nowrap;
    overflow: hidden;
}

.portfolio .portfolio-text a.btn {
    width: 50px;
    height: 50px;
    padding: 0 0 2px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    font-weight: 100;
}

.portfolio .portfolio-item:hover a.btn {
    color: #B9B632;
    background: transparent;
    box-shadow: inset 0 0 0 0 #B9B632;
    border-color: #B9B632;
}


/*******************************/
/********* Banner CSS **********/
/*******************************/
.banner {
    position: relative;
    width: 100%;
    margin: 45px 0;
    padding: 90px 0;
    background: #B9B632;
}

.banner .container {
    max-width: 750px;
    text-align: center;
}

.banner .section-header {
    margin-bottom: 20px;
}

.banner .section-header p {
    color: #414141;
    background: transparent;
}

.banner .section-header p::after {
    display: none;
}

.banner .section-header h2 {
    color: #ffffff;
}

.banner .section-header h2 span {
    color: #414141;
    font-size: 50px;
}

.banner .banner-text p {
    font-size: 18px;
    color: #ffffff;
}


.banner .banner-text .btn {
    margin-top: 15px;
    color: #B9B632;
    background: #ffffff;
    box-shadow: inset 0 0 0 0px #ffffff;
}

.banner .banner-text .btn:hover {
    color: #ffffff;
    background: transparent;
    box-shadow: inset 0 0 0 0 #ffffff;
    border-color: #ffffff;
}


/*******************************/
/********* Pricing CSS *********/
/*******************************/
.price {
    position: relative;
    width: 100%;
    padding: 45px 0 15px 0;
}

.price .row {
    padding: 0 15px;
}

.price .col-md-4 {
    padding: 0;
}

.price .price-item {
    position: relative;
    margin-bottom: 30px;
    background: #ffffff;
}

.price .featured-item {
    box-shadow: 0 0 30px rgba(0, 0, 0, .2);
    z-index: 1;
}

.price .price-header,
.price .price-body,
.price .price-footer {
    position: relative;
    text-align: center;
}

.price .price-header {
    padding: 45px 0 30px 0;
    color: #414141;
}

.price .price-item.featured-item .price-header {
    color: #B9B632;
}

.price .price-title h2 {
    font-size: 25px;
    font-weight: 400;
    text-transform: uppercase;
}

.price .price-prices h2 {
    font-size: 45px;
    font-weight: 700;
    margin-left: 10px;
}

.price .price-prices h2 small {
    position: absolute;
    font-size: 18px;
    font-weight: 400;
    margin-top: 9px;
    margin-left: -12px;
}

.price .price-prices h2 span {
    margin-left: 1px;
    font-size: 18px;
    font-weight: 400;
}

.price .price-item.featured-item h2 {
    color: #B9B632;
}

.price .price-body {
    padding: 0 0 20px 0;
}

.price .price-description ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.price .price-description ul li {
    padding: 0 0 20px 0;
}

.price .price-item .price-action {
    padding-bottom: 45px;
}

.price .price-item .price-action .btn {
    color: #ffffff;
    background: #414141;
    box-shadow: inset 0 0 0 50px #414141;
}

.price .price-item .price-action .btn:hover {
    color: #414141;
    background: transparent;
    box-shadow: inset 0 0 0 0 #414141;
    border-color: #414141;
}

.price .price-item.featured-item .price-action .btn {
    color: #ffffff;
    background: #B9B632;
    box-shadow: inset 0 0 0 50px #B9B632;
}

.price .price-item.featured-item .price-action .btn:hover {
    color: #B9B632;
    background: transparent;
    box-shadow: inset 0 0 0 0 #B9B632;
    border-color: #B9B632;
}


/*******************************/
/*********** Team CSS **********/
/*******************************/
.team {
    position: relative;
    width: 100%;
    padding: 45px 0 15px 0;
}

.team .team-item {
    position: relative;
    background: #ffffff;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: inset 0 0 0 0 transparent;
    transition: ease-out 0.5s;
}

.team .team-img {
    position: relative;
    width: 50%;
    overflow: hidden;
}

.team .team-img img {
    position: relative;
    width: 100%;
    transition: .5s;
}

.team .team-text {
    position: relative;
    width: 50%;
    padding: 0 30px;
}

.team .team-text h2 {
    color: #B9B632;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    transition: 1s;
}

.team .team-text h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 15px;
    transition: 1s;
}

.team .team-text p {
    margin-bottom: 20px;
    transition: 1s;
}

.team .team-social {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.team .team-social a.btn {
    width: 35px;
    height: 35px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: normal;
    margin-right: 5px;
}

.team .team-item:hover {
    box-shadow: inset 800px 0 0 0 #B9B632;
}

.team .team-item:hover .team-img img {
    transform: scale(1.2);
}

.team .team-item:hover .team-text h2,
.team .team-item:hover .team-text h4,
.team .team-item:hover .team-text p {
    color: #ffffff;
}

.team .team-item:hover .team-social a.btn {
    background: #ffffff;
}

.team .team-item:hover .team-social a.btn:hover {
    border-color: #ffffff;
}

@media(max-width: 575.98px) {
    .team .team-text {
        padding: 0 15px;
    }
    
    .team .team-text h2 {
        font-size: 16px;
        margin-bottom: 0;
    }

    .team .team-text h4 {
        margin-bottom: 5px;
    }

    .team .team-text p {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 10px;
    }
}





/*******************************/
/********* Contact CSS *********/
/*******************************/
.contact {
    position: relative;
    width: 100%;
    margin: 45px 0;
    background: #B9B632;
}

.contact .container-fluid {
    /* background: url(../img/contact.jpg) left center no-repeat; */
    background-size: cover;
}

/* .contact .contact-form {
    position: relative;
    padding: 90px 0 90px 45px;
    background: #B9B632;
} */

.contact .contact-form input {
    color: #ffffff;
    padding: 15px 0;
    background: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(256, 256, 256, .5);
}

.contact .contact-form textarea {
    color: #ffffff;
    height: 50px;
    padding: 15px 0;
    background: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(256, 256, 256, .5);
}

.contact .contact-form .form-control::placeholder {
    color: #ffffff;
    opacity: 1;
}

.contact .contact-form .form-control:-ms-input-placeholder,
.contact .contact-form .form-control::-ms-input-placeholder {
    color: #ffffff;
}

.contact .contact-form .btn {
    margin-top: 35px;
    color: #B9B632;
    background: #ffffff;
    box-shadow: inset 0 0 0 50px #ffffff;
}

.contact .contact-form .btn:hover {
    color: #ffffff;
    background: transparent;
    box-shadow: inset 0 0 0 0 #ffffff;
    border-color: #ffffff;
}

.contact .help-block ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 14px;
    font-style: italic;
    color: #ffffff;
}

@media (max-width: 767.98px) {
    .contact .container-fluid {
        background: none;
    }
    
    .contact .contact-form {
        padding: 90px 0;
    }
}




/*******************************/
/********* Footer CSS **********/
/*******************************/
.footer {
    position: relative;
    margin-top: 45px;
    background: #B9B632;
    /* background: #414141; */

}


 .footer-info {
    position: relative;
    width: 100%;
    text-align: center;
    padding-top: 30px;
}

.footer .footer-info h2 {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
}

.footer .footer-info h3 {
    margin-bottom: 25px;
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
}

.footer .footer-menu {
    width: 100%;
    display: flex;
    justify-content: center;
}

.footer .footer-menu p {
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
    line-height: 20px;
    padding: 0 15px;
    border-right: 1px solid #ffffff;
}

.footer .footer-menu p:last-child {
    border: none;
}

 .footer-social {
    position: center;
    margin-top: 0px;
    color: #ffffff;
    padding-top: 30px;
   
    
}

.footer-social a {
    display: inline-block;
    margin-left: 10px;
   
    
}
/* it colors the icons*/
 .footer-social a i {
    margin-right: 15px;
    font-size: 20px;
    color: #ffffff;
    transition: .3s;
}

/*it color the iconns after the hovering*/

.footer .footer-social a:hover i {
    color: #257db8;
}

.footer .copyright {
    position: relative;
    text-align: center;
    margin-top: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
}

.footer .copyright::before {
    position: absolute;
    content: "";
    width: 50%;
    height: 1px;
    top: 0;
    left: 25%;
    background: rgba(256, 256, 256, .2);
}

.footer .copyright p {
    margin: 0;
    color: #ffffff;
}

.footer .copyright .col-md-6:last-child p {
    text-align: right;
}

.footer .copyright p a {
    color: #ffffff;
    font-weight: 600;
}

.footer .copyright p a:hover {
    color: #414141;
}

@media (max-width: 400px) {
     .footer-info h2 {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 600;
    }

    .footer .footer-info h3 {
        margin-bottom: 20px;
        font-size: 16px;
    }

    .footer .footer-menu p {
        font-size: 16px;
        line-height: 16px;
        padding: 0 5px;
    }
}


.media {
    color: #ffffff;  
}
.media a {
    color: #ffffff;  
}


.section_gap {
    padding: 15px 0px;
  }
  
  @media (max-width: 991px) {
   
    .section_gap {
      padding: 100px 0px;
    }
  }
  
 
  .section_gap_top {
    padding-top: 150px;
  }
  
  @media (max-width: 991px) {
   
    .section_gap_top {
      padding-top: 100px;
    }
  }
  
 
  .section_gap_bottom {
    padding-bottom: 150px;
  }
  
  @media (max-width: 991px) {
   
    .section_gap_bottom {
      padding-bottom: 100px;
    }
  }


 .contact-title{
padding-top: 30px;
margin-right : 950px;
 }

</style>