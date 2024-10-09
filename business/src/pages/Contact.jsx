import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css"

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // const handleSubmite = (event) => {
    //     event.preventDefault(); // Prevent default form submission

    //     // Here you can add any additional logic if needed (like sending data)

    //     // Set submitted state to true
    //     setSubmitted(true);
    // };
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for:", query);

        const normalizedQuery = query.toLowerCase();

        // Navigate based on the query
        if (normalizedQuery === 'about') {
            navigate('/about');
        } else if (normalizedQuery === 'services') {
            navigate('/services');
        } else if (normalizedQuery === 'home') {
            navigate('/');
        } else {
            alert("No matching page found for your query!");
        }
    };
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };
     // Handle form data changes
     const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmitt = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        try {
            const response = await fetch('http://localhost:5000/api/contact', { // This URL should match your server
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the form data
            });
    
            if (response.ok) {
                setSubmitted(true); // Set submitted state to true if successful
                setFormData({ name: '', email: '', message: '' }); // Reset form data
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
  return (
    <div>
       {/* <!-- header --> */}
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
                        <div className={isMobile ? "collapse navbar-collapse":" navbar-collapse"} id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/contact">Contact</a>
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
                <h4 class="inner-text-title font-weight-bold pt-sm-5 pt-4">Contact Us</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><a href="/">Home</a></li>
                    <li class="active"><i class="fas fa-angle-right mx-2"></i>Contact Us</li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- //inner banner --> */}

    {/* <!-- contact --> */}
    <section class="w3l-contact-info-main py-5" id="contact">
        <div class="container pt-lg-5 pt-md-4 pt-2">
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth: "700px"}}>
                <h5 class="small-title mb-1">Get In Touch</h5>
                <h3 class="title-style">Contact Us</h3>
            </div>
            <div class="row">
                <div class="col-md-6 left-cont-contact pe-md-4">
                    <div class="contact-address p-4">
                        <div class="contact-icon d-flex align-items-center">
                            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                            <div class="ms-3">
                                <h5 class="contact-text">Visit Us:</h5>
                                <p> Laayoune .Morocco</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-address p-4 mt-4">
                        <div class="contact-icon d-flex align-items-center">
                            <i class="fas fa-phone-alt" aria-hidden="true"></i>
                            <div class="ms-3">
                                <h5 class="contact-text">Call Us:</h5>
                                <a href="tel:+12 23456790">+12 23456790</a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-address p-4 mt-4">
                        <div class="contact-icon d-flex align-items-center">
                            <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
                            <div class="ms-3">
                                <h5 class="contact-text">Mail Us:</h5>
                                <a href="mailto:info@example.com"> info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 right-cont-contact ps-md-4 mt-md-0 mt-5">
                {submitted ? (
                <div className="message-box">
                    <h2>Thank you for your visit and your message ! if you need anything just Contact Us</h2>
                </div>
                ) : (
                    <form method="post" class="w3layouts-contact-fm" onSubmit={handleSubmitt}>
                        <div class="form-group mb-3">
                            <input class="form-control" type="text" name="name" id="w3lName" placeholder="Your Name"
                                required="" 
                                value={formData.name}
                                onChange={handleChange} />
                        </div>
                        <div class="form-group mb-3">
                            <input class="form-control" type="email" name="email" id="w3lSender"
                                placeholder="Your Email" required="" value={formData.email}
                                onChange={handleChange} />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" id="w3lMessage" placeholder="Write Message"
                                required="" value={formData.message}
                                onChange={handleChange}></textarea>
                        </div>
                        <div class="form-group-2 mt-3 text-end">
                            <button type="submit" class="btn btn-style">Submit Form</button>
                        </div>
                    </form>
                     )}
                </div>
            </div>
        </div>
    </section>

    <div class="map-contact pt-5">
    <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10256.083429840359!2d-13.206976343084563!3d27.153706741485657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3772c616b079c9%3A0x9bea0d2b555fce5f!2sLaayoune!5e0!3m2!1sen!2s!4v1727862510281!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
    {/* <!-- //contact --> */}

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

export default Contact