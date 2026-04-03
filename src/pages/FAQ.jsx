"use client"

import { useState } from "react"
import "../styles/FAQ.css"
import { Link } from "react-router-dom"
import FaqHero from "../components/FaqHero.js";
import ContactForm from "../components/ContactForm.js";


const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const faqs = [
    {
      question: "What services does iMasters provide?",
      answer:
        "iMasters specialises in Apple-focused IT services, including device management, security hardening, deployment, and consultancy. We design, implement, and support scalable Mac environments using industry-leading tools, with a strong focus on performance, security, and user experience.",
    },
    {
      question: "Do you support both macOS and iOS devices?",
      answer:
        "Yes. We support the full Apple ecosystem including macOS, iOS, and iPadOS. Whether your team uses MacBooks, iPhones, or iPads, we ensure they are securely managed, properly configured, and aligned with your business needs.",
    },
    {
      question: "Which MDM tools do you work with?",
      answer:
        "We primarily work with Jamf (including Jamf Pro and Jamf Now), but we also support Microsoft Intune and other MDM solutions where required. Our approach is tool-agnostic, but always focused on what works best for your environment.",
    },
    {
      question: "Do you work with startups, SMEs, or enterprise organisations?",
      answer:
        "We work with organisations of all sizes, from growing startups to established enterprises. Our services are tailored to your scale, whether you need a simple setup or a fully managed, enterprise-grade Apple environment.",
    },
    {
      question: "Do you offer ongoing support or only project-based work?",
      answer:
        "We offer both. Clients can engage us for one-off projects such as deployments or audits, or opt for ongoing support and management. Our flexible model allows you to scale support based on your needs.",
    },
    {
      question: "How do you ensure security and compliance for managed devices?",
      answer:
        "We implement best-practice security frameworks, including device hardening, patch management, endpoint protection, and access controls. Our approach is backed by recognised cybersecurity knowledge and certifications, ensuring your environment aligns with modern security standards and compliance requirement.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "In most cases, we can begin within a few days. After an initial discussion to understand your requirements, we define a clear plan and start onboarding without unnecessary delays.",
    },
  ]

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-container container">
          <div className="hero-content">
              <h1 className="main-heading">Frequently Asked Questions</h1>
              <p className="main-body">Find answers to common questions about our services, support, and how we can help your business thrive with Apple technology.</p>
          </div>
          <FaqHero />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openItems[index] ? "faq-item-open" : ""}`}>
                  <button className="faq-question" onClick={() => toggleItem(index)}>
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openItems[index] ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-sidebar">
              <div className="faq-contact-card">
                <h3>Still have questions? Get in touch</h3>
                <Link to="/FAQ" className="btn btn-primary">Book a Consultation or Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
       <ContactForm/>
    </div>
   
  )
}

export default FAQ