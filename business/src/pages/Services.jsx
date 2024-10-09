import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Services() {
 
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for:", query);

        // Normalize the query to lowercase for easier matching
        const normalizedQuery = query.toLowerCase();

        // Navigate based on the query
        if (normalizedQuery === 'about') {
            navigate('/about');
        } else if (normalizedQuery === 'home') {
            navigate('/');
        } else if (normalizedQuery === 'contact') {
            navigate('/contact');
        } else {
            alert("No matching page found for your query!");
        }
    };
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
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
                        <div className={isMobile ? "collapse navbar-collapse":" navbar-collapse"}  id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/services">Services</a>
                                    
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
    {/* <!-- //header --> */}

    {/* <!-- inner banner --> */}
    <section class="inner-banner py-5">
        <div class="w3l-breadcrumb py-lg-5">
            <div class="container pt-5 pb-sm-4">
                <h4 class="inner-text-title font-weight-bold pt-sm-5 pt-4">Services</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><a href="/">Home</a></li>
                    <li class="active"><i class="fas fa-angle-right mx-2"></i>Services</li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- //inner banner --> */}
    {/* <!-- home page service grids --> */}
    <section class="home-services py-5" id="services">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth: "700px"}}>
                <h5 class="small-title mb-2">Best Services</h5>
                <h3 class="title-style">More than 30+ years we provide business consulting</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="box-wrap">
                        <div class="icon">
                            <i class="fas fa-donate"></i>
                        </div>
                        <h4 class="number">01</h4>
                        <h4><a href="#url">Financial planing</a></h4>
                        <p>Financial planning involves creating a comprehensive 
                            strategy to manage an individual's 
                            or organization's financial resources.</p>
                            <Link to="/Financial" class="read">Read more</Link>
                        {/* <a href="/Financial" class="read">Read more</a> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div class="box-wrap">
                        <div class="icon">
                            <i class="fas fa-marker"></i>
                        </div>
                        <h4 class="number">02</h4>
                        <h4><a href="#url">Training services</a></h4>
                        <p>Training services focus on developing skills and knowledge within 
                        an organization or individual . This can include:</p>
                        <Link to="/Training" class="read">Read more</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div class="box-wrap">
                        <div class="icon">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h4 class="number">03</h4>
                        <h4><a href="#url">Marketing services</a></h4>
                        <p>Marketing services help businesses promote their products or 
                        services and build brand awareness. Key areas includes:</p>
                        <Link to="/Marketing" class="read">Read more</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="box-wrap">
                        <div class="icon">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <h4 class="number">04</h4>
                        <h4><a href="#url">Taxation services</a></h4>
                        <p>Taxation services assist individuals and businesses in navigating tax regulations 
                        and optimizing their tax situations . This includes:</p>
                        <Link to="/Taxation" class="read">Read more</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="box-wrap">
                        <div class="icon">
                            <i class="fas fa-ruler-combined"></i>
                        </div>
                        <h4 class="number">05</h4>
                        <h4><a href="#url">Start Ups</a></h4>
                        <p>A startup is a newly established business, often 
                            focused on innovative products or services, typically in the technology
                             sector, but can span various industries.</p>
                             <Link to="/StarUp" class="read">Read more</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="box-wrap">
                        <div class="icon">
                            <i class="fas fa-edit"></i>
                        </div>
                        <h4 class="number">06</h4>
                        <h4><a href="#url">Business Planning</a></h4>
                        <p> Business planning involves creating a detailed plan that outlines business goals, 
                            strategies, financial projections, and operational plans.</p>
                            <Link to="/BusPlan" class="read">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //home page service grids --> */}
    {/* <!-- content block --> */}
    <section class="w3l-content1 py-5">
        <div class="container py-md-5 py-sm-4 py-2">
            <div class="row py-4">
                <div class="col-lg-7">
                    <h3 class="title-style text-white"><span>We manage your business</span></h3>
                    <p class="mt-4 text-light">We manage your business by delivering tailored
                        solutions that streamline operations and drive growth. Our expert team
                        implements effective strategies, allowing you to focus on your core 
                        activities while we handle the complexities, 
                        ensuring your business thrives in a competitive landscape.</p>
                    <a href="contact" class="btn btn-style mt-md-5 mt-4">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
    {/* // <!-- //content block --> */}

    {/* <!-- 3grids with bg-image section --> */}
    <div class="w3l-homeblock3 py-5">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth: "700px"}}>
                <h5 class="small-title mb-2">What we do?</h5>
                <h3 class="title-style">We take care of the Future!</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="top-pic1">
                        <div class="card-body blog-details">
                            <span class="meta-value">Investment</span>
                            <a href="#blog" class="blog-desc">Strength solutions
                            </a>
                            <a href="vidioDeg" style={{ color: 'white'}} className="read" >watch a video</a>
                            {/* <a href="/" class="btn btn-style-primary btn-style text-white mt-4">Read
                                More<i class="fas fa-arrow-right ms-1"></i></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div class="top-pic2">
                        <div class="card-body blog-details">
                            <span class="meta-value">Strategy</span>
                            <a href="#blog" class="blog-desc">Business analytics
                            </a>
                            <a href="BusAnalytic" style={{ color: 'white'}} className="read">watch a video</a>
                            {/* <a href="#blog" class="btn btn-style-primary btn-style text-white mt-4">Read
                                More<i class="fas fa-arrow-right ms-1"></i></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div class="top-pic3">
                        <div class="card-body blog-details">
                            <span class="meta-value"> Tax Consulting </span>
                            <a href="#blog" class="blog-desc">Stock investments
                            </a>
                            <a href="StockInves" style={{ color: 'white'}} className="read">watch a video</a>
                            {/* <a href="#blog" class="btn btn-style-primary btn-style text-white mt-4">Read
                                More<i class="fas fa-arrow-right ms-1"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- //3grids with bg-image section --> */}


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

export default Services