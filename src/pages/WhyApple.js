import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/whyapple.css';
import WhyAppleHero from '../components/WhyAppleHero';

const WhyApple = () => {
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
    },
    {
      title: 'Apple Training & Onboarding',
      description: 'We run hands-on training for teams adopting Apple for the first time or switching from Windows. Sessions cover everyday workflows, productivity apps, and Apple-specific features so your staff are confident from day one.'
    },
    {
      title: 'Mac Evaluation & Readiness Assessment',
      description: 'Not sure if your business is ready for Mac? We carry out a structured evaluation of your current environment — covering hardware, software compatibility, infrastructure, and costs — and deliver a clear report with recommendations.'
    },
    {
      title: 'Network & Infrastructure',
      description: 'Set up and manage secure, reliable networks built for Apple environments — including Wi-Fi, VLANs, firewalls, and hybrid Windows integration.'
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
    'Cyber Security Support',
    'Supporting business growth'
  ];

  const certifications = [
    {
      title: 'Apple Certified Support Professional',
      description: 'ACSP — macOS support, troubleshooting, and administration',
      image: '/images/Expertise0.png'
    },
    {
      title: 'Jamf Certified Associate',
      description: 'Jamf 100 — Foundations of Jamf Pro and Apple platform management',
      image: '/images/Expertise1.png'
    },
    {
      title: 'Jamf Certified Admin',
      description: 'Jamf 200 — Enterprise-focused macOS and iOS management with Jamf Pro',
      image: '/images/Expertise2.png'
    },
    {
      title: 'Jamf Certified Expert',
      description: 'Jamf 300 — Advanced macOS and iOS management capabilities',
      image: '/images/Expertise3.png'
    },
    {
      title: 'Jamf Certified Admin — Jamf Protect',
      description: 'Jamf 370 — Endpoint and network security for Mac and mobile devices',
      image: '/images/Expertise4.png'
    }
  ];

  const successStories = [
    {
      category: 'Consultancy · Ground-up build',
      title: 'Building a Complete Apple Environment for a Growing Consultancy',
      description: 'A behaviour consultancy came to us with no existing IT infrastructure. They needed everything set up on Apple from scratch. We deployed Macs for the entire team through Jamf, configured secure email, cloud storage, and business applications, and put ongoing managed support in place. The result: the founder stepped away from IT entirely and focused on growing the practice, confident that the technology side was handled.',
      tags: ['Mac Deployment', 'Jamf MDM', 'Cloud Setup', 'Ongoing Support']
    },
    {
      category: 'Defence · Enterprise scale',
      title: 'Mac Infrastructure for a Global Defence Client',
      description: 'We partnered with a technology agency to deliver Mac infrastructure support for one of their global defence clients. This was a different kind of challenge — enterprise-grade device management across multiple locations, strict security policies, and compliance requirements that left no room for error. We implemented and managed the MDM environment, enforced security baselines, and ensured every Apple device met the client\'s regulatory standards.',
      tags: ['Enterprise MDM', 'Security Hardening', 'Compliance', 'Multi-site Rollout']
    },
    {
      category: 'Retail · Long-term partnership',
      title: 'Apple IT Partner Across Two Businesses',
      description: 'What started as a support relationship with one business turned into a long-term partnership spanning two companies. When the same team launched a clothing brand, they brought us on from day one. We set up their Mac and iPad environment from scratch - device deployment, point-of-sale integration, and day-to-day management — so the new business was operational immediately without any IT delays.',
      tags: ['Mac & iPad Deployment', 'POS Integration', 'Device Management', 'Repeat Client']
    }
  ];

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
              <p className='main-body'>We partner with businesses to design, deploy, and manage secure, scalable Apple environments. Combining deep Apple and Jamf expertise with a practical, hands-on approach, we focus on delivering solutions that are reliable, maintainable, and aligned with how your business actually operates-not generic best practice.

                From initial setup and zero-touch deployment to ongoing management, security hardening, and user support, we ensure your Apple estate runs smoothly at every stage. Our work is guided by a strong security-first mindset, clear communication, and an understanding of both technical and business priorities.

                The result is an environment that not only works as expected but supports productivity, reduces friction for users, and gives your organisation confidence that devices are managed properly and securely over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Expertise Section */}
      <section className="wa-certifications">
        <div className="container">
          <h1 className="wa-section-title">Certifications & Expertise</h1>
          <p className="main-body wa-cert-subtitle">
            Our team holds verified Apple and Jamf certifications across deployment, management, and endpoint security.
          </p>
          <div className="wa-certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="wa-certification-card">
                <img src={cert.image} alt={cert.title} className="wa-cert-image" />
                <h3>{cert.title}</h3>
                <p className="main-body">{cert.description}</p>
              </div>
            ))}
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

      {/* Client Success Stories Section */}
      <section className="wa-success-stories">
        <div className="container">
          <h1 className="wa-section-title">Client Success Stories</h1>
          <p className="main-body wa-success-subtitle">
            A closer look at how we've helped businesses build and run their Apple environments.
          </p>
          <div className="wa-success-intro">
            <p className="main-body">
              iMasters has supported businesses at every stage — from first-time Apple adopters building their IT from the ground up, to established organisations scaling Mac infrastructure across multiple sites. Here are three examples of that work in practice.
            </p>
          </div>
          <div className="wa-success-stories-list">
            {successStories.map((story, index) => (
              <div key={index} className="wa-success-story-card">
                <div className="wa-story-category">{story.category}</div>
                <h3 className="wa-story-title">{story.title}</h3>
                <p className="main-body wa-story-description">{story.description}</p>
                <div className="wa-story-tags">
                  {story.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="wa-story-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-sidebar">
              <div className="faq-contact-card">
                <h3>Need help with your Apple environment? Speak to iMasters to improve how your business deploys, manages, and secures Apple devices.</h3>
                <Link to="/FAQ" className="btn btn-primary">
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
