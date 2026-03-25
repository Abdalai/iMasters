import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/whyapple.css';
import WhyAppleHero from '../components/WhyAppleHero';

const WhyApple = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const services = [
    {
      title: 'Apple Device Management',
      description: 'Manage Macs, iPhones, and iPads with secure configuration, policies, and automation.'
    },
    {
      title: 'Jamf Consultancy',
      description: 'Design, optimise, and support your Jamf environment for performance, compliance, and scale.'
    },
    {
      title: 'Zero-Touch Deployment',
      description: 'Deploy devices with automated enrolment so employees can start working immediately.'
    },
    {
      title: 'Security & Compliance',
      description: 'Protect devices with patching, hardening, and modern security controls.'
    },
    {
      title: 'Mac IT Support',
      description: 'Provide expert support for Apple environments, from troubleshooting to ongoing operations.'
    },
    {
      title: 'Apple Strategy & Advisory',
      description: 'Plan and scale your Apple environment with clear, practical guidance.'
    }
  ];

  const whyPoints = [
    'Apple-first expertise',
    'Strong Jamf experience',
    'Security-focused approach',
    'Experience managing large Mac estates',
    'Flexible support (project or ongoing)',
    'Clear, business-focused delivery'
  ];

  const trustPoints = [
    'Apple ecosystem specialists',
    'Jamf experience and implementation',
    'Cyber Security background',
    'Experience supporting business environments'
  ];

  const faqPreview = [
    {
      question: 'What services does iMasters provide?',
      answer: 'Apple device management, Jamf consultancy, security, deployment, and support.'
    },
    {
      question: 'Do you support macOS and iOS?',
      answer: 'Yes, we support macOS, iOS, and iPadOS environments.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, both project-based and ongoing support options are available.'
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="whyapple-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-container container">
          <div className="hero-content">
            <div className="wa-hero-text">
              <h1 className="main-heading">Apple Solutions for Business</h1>
              <p className="main-body">
                Deploy, manage, and secure your Apple devices with expert support. iMasters helps businesses run Macs, iPhones, and iPads at scale using modern tools like Jamf.
              </p>
            </div>
          </div>
            <WhyAppleHero />
        </div>
      </section>

      {/* Services Section */}
      <section className="wa-services">
        <div className="container">
          <h2 className="wa-section-title">What We Do</h2>
          <div className="wa-services-grid">
            {services.map((service, index) => (
              <div key={index} className="wa-service-card ">
                <h2>{service.title}</h2>
                <p className='main-body'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why iMasters Section */}
      <section className="wa-why">
        <div className="container">
          <h2 className="wa-section-title">Why iMasters</h2>
          <div className="wa-why-content">
            <div className="wa-why-points">
              <ul className="wa-points-list">
                {whyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="wa-why-text">
              <p className='main-body'>We help businesses simplify Apple device management with a practical, no-nonsense approach focused on reliability, security, and user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Certifications Section */}
      <section className="wa-trust">
        <div className="container">
          <h2 className="wa-section-title">Trusted Expertise</h2>
          <div className="wa-trust-grid">
            {trustPoints.map((point, index) => (
              <div key={index} className="wa-trust-item">
                <div className="wa-trust-icon">✓</div>
                <p className='main-body'>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section">
  <div className="container">
    <div className="faq-content">

      <div className="faq-list">
        {faqPreview.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${expandedFaq === index ? "faq-item-open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {expandedFaq === index ? "−" : "+"}
              </span>
            </button>

            {expandedFaq === index && (
              <div className="faq-answer">
                <p className="main-body">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-sidebar">
        <div className="faq-contact-card">
          <h3>Need help with your Apple environment?             Speak to iMasters to improve how your business deploys, manages, and secures Apple devices.</h3>
          <Link to="/about" className="btn btn-primary">
            Book a Consultation or Contact Us
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

      
    </div>
  );
};

export default WhyApple;
