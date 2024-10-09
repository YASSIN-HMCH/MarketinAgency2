import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

   

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for:", query);

        // Normalize the query to lowercase for easier matching
        const normalizedQuery = query.toLowerCase();

        // Navigate based on the query
        if (normalizedQuery === 'about') {
            navigate('/about');
        } else if (normalizedQuery === 'services') {
            navigate('/services');
        } else if (normalizedQuery === 'contact') {
            navigate('/contact');
        } else {
            alert("No matching page found for your query!");
        }
    };
    

    return (
        <div>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            <i className="fab fa-wikipedia-w"></i>ork-up
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" onClick={toggleMenu}></span>
                            
                        </button>
                        <div className={isMobile ? "collapse navbar-collapse": "navbar-collapse"} id="navbarScroll" >
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                            <form onSubmit={handleSubmit} className="d-flex search-header ms-lg-2">
                                <input 
                                    className="form-control" 
                                    type="search" 
                                    placeholder="Searching for page ..." 
                                    aria-label="Search"
                                    required 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)} 
                                />
                                <button className="btn btn-style" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                                
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
             {/* banner section  */}
            <div className="slider">
                <div className="slide current">
                <div className="bg-layer">
                <div className="content">
                    <h6>Start Your Company With Us</h6>
                    <h3>Plan Business to Active Goal!</h3>
                    <a href="about" className="btn btn-style mt-4">Learn More</a>
                </div>
                </div>
                </div>
            </div>
        {/* <div className="buttons">
        <button id="prev"><i className="fas fa-arrow-left"></i></button>
        
        <button id="next"><i className="fas fa-arrow-right"></i></button>
        </div> */}
         {/* home page service grids  */}
    <section className="home-services py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "700px" }}>
                <h5 className="small-title mb-2">Valued Services</h5>
                <h3 className="title-style">More than 30+ years we provide business consulting</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-donate"></i>
                        </div>
                        <h4 className="number">01</h4>
                        <h4><a href="#url">Financial planing</a></h4>
                        <p>Financial planning involves creating a comprehensive 
                            strategy to manage an individual's 
                            or organization's financial resources.</p>
                        <a href="services" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-marker"></i>
                        </div>
                        <h4 className="number">02</h4>
                        <h4><a href="#url">Training services</a></h4>
                        <p>Training services focus on developing skills and knowledge within 
                            an organization or individual . This can include:</p>
                        <a href="services" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <h4 className="number">03</h4>
                        <h4><a href="#url">Marketing services</a></h4>
                        <p>Marketing services help businesses promote their products or 
                            services and build brand awareness. Key areas includes:</p>
                        <a href="services" className="read">Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-calculator"></i>
                        </div>
                        <h4 className="number">04</h4>
                        <h4><a href="#url">Taxation services</a></h4>
                        <p>Taxation services assist individuals and businesses in navigating tax regulations 
                            and optimizing their tax situations . This includes:</p>
                        <a href="services" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* why choose section  */}
    <section className="w3l-servicesblock py-5" id="whychoose">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h5 className="small-title mb-2">Why choose us</h5>
                    <h3 className="title-style">We Provided Some Of The Good Quality To You</h3>
                    <p className="mt-3">We are committed to delivering high-quality
                         products that meet your needs and exceed your expectations.
                          Our focus on quality ensures durability, reliability, and
                           satisfaction in every item we provide. Trust us to enhance your experience
                         with top-notch selections tailored just for you.</p>
                    <div className="row two-grids mt-5 pt-lg-4">
                        <div className="col-sm-6 grids_info d-flex">
                            <i className="fas fa-hand-holding-usd"></i>
                            <div className="detail ms-3">
                                <h4>Finance Consultant</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                            <i className="far fa-chart-bar"></i>
                            <div className="detail ms-3">
                                <h4>Business Consultant</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 text-end mt-lg-0 mt-5 position-relative">
                    <img src="assets/images/img1.jpg" alt="" className="img-fluid radius-image" />
                    <div className="imginfo__box">
                        <h6 className="imginfo__title">36+</h6>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*  features section  */}
    <section className="w3l-grids-block py-5" id="features">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "600px" }}>
                <h5 className="small-title mb-2">Our Features</h5>
                <h3 className="title-style">We Make Your Agency Full Bright</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="bottom-block">
                        <a href="#features" className="d-block">
                            <i className="fas fa-business-time"></i>
                            <h3 className="mt-3 mb-2"> Market Research</h3>
                            <p className="">Gain insights into your target audience and industry trends with our 
                                comprehensive market research services. We help you understand consumer behavior,
                                 preferences, and competitive landscapes .</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
                    <div className="bottom-block">
                        <a href="#features" className="d-block">
                            <i className="fab fa-accusoft"></i>
                            <h3 className="mt-3 mb-2">Startup Business</h3>
                            <p className="">Launching a startup can be challenging ,
                                 but our expert consultancy guides you through every step. 
                                 From ideation to execution, we provide the support and strategies needed to
                                 turn your vision into a successful venture.</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
                    <div className="bottom-block">
                        <a href="#features" className="d-block">
                            <i className="fas fa-chart-line"></i>
                            <h3 className="mt-3 mb-2">Business Growth</h3>
                            <p className="">Unlock your business's potential with tailored 
                                growth strategies. We analyze your current operations and market
                                 position to develop actionable plans that drive expansion, 
                                increase revenue, and enhance overall performance</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
                    <div className="bottom-block">
                        <a href="#features" className="d-block">
                            <i className="fas fa-chart-pie"></i>
                            <h3 className="mt-3 mb-2">Consultancy</h3>
                            <p className="">Our consultancy services offer personalized
                                 guidance to help you navigate complex business challenges. 
                                 We leverage industry expertise to provide strategic advice that
                                 aligns with your goals and drives sustainable .</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
                    <div className="bottom-block">
                        <a href="#features" className="d-block">
                            <i className="fas fa-piggy-bank"></i>
                            <h3 className="mt-3 mb-2"> Financial Advices</h3>
                            <p className="">Take control of your finances with our expert 
                                financial advice. We provide insights on budgeting, investments,
                                 and cash flow management to help you make 
                                informed decisions that secure your financial future.</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
                    <div className="bottom-block">
                        <a href="#features" className="d-block">
                            <i className="fas fa-copy"></i>
                            <h3 className="mt-3 mb-2">Tax Strategy</h3>
                            <p className="">Optimize your tax obligations with our strategic
                                 tax planning services. We develop tailored strategies that minimize 
                                 your tax liabilities while ensuring compliance,
                                 allowing you to maximize your financial resources.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*  3grids with bg-image section  */}
    <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "700px" }}>
                <h5 className="small-title mb-2">What we do?</h5>
                <h3 className="title-style">We take care of the Future!</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="top-pic1">
                        <div className="card-body blog-details">
                            <span className="meta-value">Investment</span>
                            <a href="#blog" className="blog-desc">Strength solutions
                            </a>
                            <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                                More<i className="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="top-pic2">
                        <div className="card-body blog-details">
                            <span className="meta-value">Strategy</span>
                            <a href="#blog" className="blog-desc">Business analytics
                            </a>
                            <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                                More<i className="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="top-pic3">
                        <div className="card-body blog-details">
                            <span className="meta-value"> Tax Consulting </span>
                            <a href="#blog" className="blog-desc">Stock investments
                            </a>
                            <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">Read
                                More<i className="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- progress section --> */}
    <section className="w3l-progress py-5" id="progress">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
                <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5">
                    <img src="assets/images/img2.jpg" alt="" className="img-fluid radius-image" />
                </div>
                <div className="col-lg-6 about-2-secs-left ps-xl-5">
                    <h5 className="small-title mb-2">Why Choose us</h5>
                    <h3 className="title-style mb-sm-3 mb-2">A right choice that makes the difference to others</h3>
                    <p>Consectetur adipiscing elit. Aliquam sit amet
                        efficitur tortor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunte mollit.</p>
                    <div className="w3l-progressblock mt-md-5 mt-4">
                        <div className="progress-info info1">
                            <h6 className="progress-tittle">Business Planning <span className="">90%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar"style={{width: "90%"}}
                                    aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="progress-info info2">
                            <h6 className="progress-tittle">Creativity <span className="">85%</span>
                            </h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "85%"}}
                                    aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="progress-info info3">
                            <h6 className="progress-tittle">Financial Advices <span className="">80%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}}
                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="progress-info info3 mb-0">
                            <h6 className="progress-tittle">Business Security <span className="">90%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "90%"}}
                                    aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //progress section --> */}
    {/* <!-- testimonials section --> */}
    <section className="w3l-index4 py-5" id="testimonials">
        <div className="container py-md-5 py-4">
            <div className="content-slider text-center py-4">
                <div className="clients-slider">
                    <div className="mask">
                        <ul>
                            <li className="anim1">
                                <img src="assets/images/testi1.jpg" className="img-fluid rounded-circle"
                                    alt=" " />
                                <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse
                                        cillum dolore eu. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.
                                    </q> </blockquote>
                                <div className="source">- Mario Spe</div>
                            </li>

                            <li className="anim2">
                                <img src="assets/images/testi2.jpg" className="img-fluid rounded-circle"
                                    alt="" />
                                <blockquote className="quote"><q>Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                        illo
                                        inventore.
                                    </q> </blockquote>
                                <div className="source">- Petey Cru</div>
                            </li>
                            <li className="anim3">
                                <img src="assets/images/testi3.jpg" className="img-fluid rounded-circle "
                                    alt="" />
                                <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam,
                                        quis nostrud exercitation.
                                    </q> </blockquote>
                                <div className="source">- Anna Sth</div>
                            </li>
                            <li className="anim4">
                                <img src="assets/images/testi1.jpg" className="img-fluid rounded-circle"
                                    alt="" />
                                <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse
                                        cillum dolore eu. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.
                                    </q> </blockquote>
                                <div className="source">- Gail For</div>
                            </li>
                            <li className="anim5">
                                <img src="assets/images/testi2.jpg" classNameName="img-fluid rounded-circle"
                                    alt="" />
                                <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam,
                                        quis nostrud exercitation.
                                    </q> </blockquote>
                                <div className="source">- Boye Fra</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //testimonials section --> */}

    {/* <!-- blog section --> */}
    <div className="w3l-blog-block-5 py-5" id="blog">
        <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth: "700px"}}>
                <h5 className="small-title mb-2">News Feed</h5>
                <h3 className="title-style">Latest Blog Posts</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="blog-card-single">
                        <div className="grids5-info">
                            <a href="#blog"><img src="assets/images/blog1.jpg" alt="" /></a>
                            <div className="blog-info">
                            
                                <h4><a href="#blog">How To Scale a Dropshipping Business</a></h4>
                                <a href="vidioDeg" className="read">watch a video</a>
                                <p>Scale your dropshipping business by optimizing your website, 
                                    enhancing marketing efforts, expanding product range, automating processes,
                                     building strong supplier relationships, 
                                    and analyzing data for continuous improvement.</p>
                                    
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <a className="d-flex align-items-center" href="#blog" title="23k followers">
                                        <img className="img-fluid" src="assets/images/testi2.jpg" alt="admin"
                                            style={{maxWidth: "40px"}}/> <span className="small ms-2">Eetey Cruis</span>
                                    </a>
                                    <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Nov 06, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="blog-card-single">
                        <div className="grids5-info">
                            <a href="#blog"><img src="assets/images/blog3.jpg" alt="" /></a>
                            <div className="blog-info">
                                <h4><a href="#blog">Customer Onboarding Strategy</a></h4>
                                <a href="BusAnalytic" className="read">watch a video</a>
                                <p>Implement a customer onboarding strategy that includes welcome 
                                    communication, guided setup, personalized support, engagement check-ins,
                                     a resource library, and feedback gathering 
                                    to enhance customer satisfaction and retention.</p>
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <a className="d-flex align-items-center" href="#blog" title="23k followers">
                                        <img className="img-fluid" src="assets/images/testi1.jpg" alt="admin"
                                            style={{maxWidth: "40px"}} /> <span className="small ms-2">Molive Joe</span>
                                    </a>
                                    <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Nov 10, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="blog-card-single">
                        <div className="grids5-info">
                            <a href="#blog"><img src="assets/images/blog2.jpg" alt="" /></a>
                            <div className="blog-info">
                                <h4><a href="#blog">How to plan a website redesign strategy</a></h4>
                                <a href="StockInves" className="read">watch a video</a>
                                <p>Plan a website redesign strategy by defining clear goals, 
                                    conducting user research, analyzing current performance,
                                     creating a wireframe and design mockups, ensuring mobile responsiveness, optimizing for SEO, and developing a
                                     launch timeline .</p>
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <a className="d-flex align-items-center" href="#blog" title="23k followers">
                                        <img className="img-fluid" src="assets/images/testi3.jpg" alt="admin"
                                            style={{maxWidth: "40px"}} /> <span className="small ms-2">Turne Leo
                                        </span>
                                    </a>
                                    <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Nov 12, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- //blog section --> */}

    {/* <!-- footer --> */}
    <footer class="w3l-footer py-5">
        <div class="container pt-4">
            <div class="row">
                <div class="col-lg-4 sub-one-left">
                    <h6>About </h6>
                    <p>This initiative focuses on enhancing well-being by providing individuals
                         with essential resources and support. Through personalized guidance and
                          access to crucial tools, it empowers people to overcome challenges and 
                          achieve their goals. By fostering a sense of community and inclusivity,
                         it ensures that everyone has the opportunity to grow and thrive</p>
                    <ul class="social mt-4 pt-lg-1">
                        <li><a href="#facebook"><span class="fab fa-facebook-f"></span></a></li>
                        <li><a href="#twitter"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="#linkedin"><span class="fab fa-linkedin-in"></span></a></li>
                        <li><a href="#google-plus"><span class="fab fa-google-plus-g"></span></a></li>
                        <li><a href="#instagram"><span class="fab fa-instagram"></span></a></li>
                    </ul>
                </div>
                <div class="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
                    <h6>Recent Posts</h6>
                    <div class="footer-post">
                        <ul>
                            <li><a href="#post">Rachidi Khalid</a></li>
                            <li class="mx-2"><a href="#post">- Nov. 24 - </a></li>
                            <li><a href="#post">5 comments</a></li>
                        </ul>
                        <p class="post-footer"><a href="#post">Delivering New Customer Experiences with Workup.</a></p>
                    </div>
                    <div class="footer-post mt-4">
                        <ul>
                            <li><a href="#post">Amal EssaLami</a></li>
                            <li class="mx-2"><a href="#post">- fev. 23 - </a></li>
                            <li><a href="#post">3 comments</a></li>
                        </ul>
                        <p class="post-footer"><a href="#post">Discussing the current trends in the share market.</a>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
                    <h6>Contact </h6>
                    <div class="column2">
                        <div class="href1"><span class="fas fa-envelope-open"></span><a
                                href="mailto:info@example.com">info@example.com</a>
                        </div>
                        <div class="href2 my-3"><span class="fas fa-phone-alt"></span><a
                                href="tel:+44-123-456-78">+44-123-456-78</a>
                        </div>
                        <div>
                            <p class="contact-para mb-3"><span class="fas fa-map-marker-alt"></span>Morocco .
                                 Laayoune , 70000</p>
                        </div>
                        <div>
                            <p class="contact-para"><span class="fas fa-clock"></span>Office Hours: 9:30H- 19:00H</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-footer text-center mt-5 pt-sm-4 pt-2">
                <p>&copy; 2024 Workup. All rights reserved | Design by <a href="https://portperso.vercel.app/projects.html">Hammouche Yassin</a>
                </p>
            </div>
        </div>
    </footer>
    {/* <!-- //footer --> */}

    
    
    
    
    








        </div>
    )
}

export default Home