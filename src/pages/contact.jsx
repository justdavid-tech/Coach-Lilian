import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Sparkles, Clock, Users, Briefcase, DollarSign, HelpCircle, FileText } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: '',
    program: '',
    message: '',
    preferredContact: 'email'
  });

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const purposes = [
    { value: '', label: 'Select your inquiry type', disabled: true },
    { value: 'program-inquiry', label: 'Program Inquiry', icon: Briefcase },
    { value: 'enrollment', label: 'Enrollment Support', icon: FileText },
    { value: 'general-question', label: 'General Question', icon: HelpCircle },
    { value: 'partnership', label: 'Partnership Opportunity', icon: Users },
    { value: 'feedback', label: 'Feedback & Suggestions', icon: MessageCircle },
    { value: 'other', label: 'Other', icon: HelpCircle }
  ];

  const programs = [
    { value: '', label: 'Select a program (if applicable)', disabled: true },
    { value: 'whatsapp-community', label: 'WhatsApp Community (Free)', icon: MessageCircle },
    { value: 'remote-job-training', label: 'Remote Job Training', icon: Briefcase },
    { value: 'financial-freedom', label: 'Financial Freedom with Lilian', icon: DollarSign },
    { value: 'not-sure', label: 'Not Sure Yet / Need Guidance', icon: HelpCircle }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.purpose) {
      newErrors.purpose = 'Please select an inquiry type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE, TEMPLATE, AND PUBLIC KEY
      // You can get these from your EmailJS dashboard: https://dashboard.emailjs.com/admin
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitted(true);
          setLoading(false);
          
          setTimeout(() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              purpose: '',
              program: '',
              message: '',
              preferredContact: 'email'
            });
          }, 3000);
        }, (error) => {
          console.log('Failed to send email:', error.text);
          setLoading(false);
          // Optional: Show an error message to the user
          alert("Failed to send message. Please try again or check your configuration keys.");
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@classsee.com',
      link: 'mailto:hello@classsee.com',
      color: '#EE7B30'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 801 234 5678',
      link: 'tel:+2348012345678',
      color: '#EE7B30'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Join Our Community',
      link: 'https://chat.whatsapp.com/your-group-link',
      color: '#EE7B30'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Abuja, FCT, Nigeria',
      link: null,
      color: '#EE7B30'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond within 24 hours on business days.'
    },
    {
      question: 'Can I schedule a consultation?',
      answer: 'Yes! Mention it in your message and we\'ll arrange a call.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible installment options for all paid programs.'
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-[#13262F] via-[#0B1922] to-[#13262F]">
      {/* Hero Section */}
      <div data-aos="fade-up" className="relative pt-32 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#EE7B30]" />
              <span className="text-[#C9D1D9] text-sm font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <p className="text-[#C9D1D9] text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Have questions about our programs? Need help getting started? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link || '#'}
                target={info.link && info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`group bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-300 hover:scale-105 text-center ${!info.link && 'pointer-events-none'}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-[${info.color}]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <info.icon className={`w-7 h-7`} style={{ color: info.color }} />
                </div>
                <h3 className="text-white font-bold mb-2">{info.title}</h3>
                <p className="text-[#C9D1D9] text-sm">{info.content}</p>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#C9D1D9]/20">
                <h2 className="text-3xl sm:text-4xl md:text-3xl md:text-center whitespace-nowrap font-bold text-white mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2E8B57] to-[#2E8B57]/70 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                    <p className="text-[#C9D1D9] text-lg">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Full Name <span className="text-[#EE7B30]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full bg-[#13262F]/50 border ${errors.fullName ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all duration-300`}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Email Address <span className="text-[#EE7B30]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={`w-full bg-[#13262F]/50 border ${errors.email ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all duration-300`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Phone Number <span className="text-[#EE7B30]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 801 234 5678"
                          className={`w-full bg-[#13262F]/50 border ${errors.phone ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all duration-300`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Purpose & Program */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Inquiry Type <span className="text-[#EE7B30]">*</span>
                        </label>
                        <select
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleChange}
                          className={`w-full bg-[#13262F]/50 border ${errors.purpose ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EE7B30] transition-all duration-300`}
                        >
                          {purposes.map((purpose) => (
                            <option key={purpose.value} value={purpose.value} disabled={purpose.disabled}>
                              {purpose.label}
                            </option>
                          ))}
                        </select>
                        {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Program Interest
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full bg-[#13262F]/50 border border-[#C9D1D9]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EE7B30] transition-all duration-300"
                        >
                          {programs.map((program) => (
                            <option key={program.value} value={program.value} disabled={program.disabled}>
                              {program.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {contactMethods.map((method) => (
                          <button
                            key={method.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, preferredContact: method.value }))}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                              formData.preferredContact === method.value
                                ? 'bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white border-[#EE7B30]'
                                : 'bg-[#13262F]/50 text-[#C9D1D9] border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50'
                            }`}
                          >
                            <method.icon className="w-5 h-5" />
                            <span className="font-medium">{method.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Your Message <span className="text-[#EE7B30]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about your inquiry, questions, or how we can help you..."
                        className={`w-full bg-[#13262F]/50 border ${errors.message ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all duration-300 resize-none`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,123,48,0.5)] hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Response Time */}
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20">
                <Clock className="w-10 h-10 text-[#EE7B30] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
                <p className="text-[#C9D1D9] mb-4">
                  We typically respond within 24 hours on business days.
                </p>
                <div className="bg-[#13262F]/50 rounded-xl p-3 border border-[#C9D1D9]/10">
                  <p className="text-[#F9F6F1] text-sm">
                    <strong className="text-[#2E8B57]">Business Hours:</strong><br />
                    Mon - Fri: 9:00 AM - 6:00 PM WAT
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20">
                <h3 className="text-xl font-bold text-white mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#13262F]/50 rounded-xl p-4 border border-[#C9D1D9]/10">
                      <p className="text-white font-semibold text-sm mb-2">{faq.question}</p>
                      <p className="text-[#C9D1D9] text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community CTA */}
              <div className="bg-gradient-to-br from-[#2E8B57]/20 to-[#2E8B57]/10 backdrop-blur-xl rounded-3xl p-6 border border-[#2E8B57]/30">
                <MessageCircle className="w-10 h-10 text-[#2E8B57] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Join Our Community</h3>
                <p className="text-[#C9D1D9] mb-4 text-sm">
                  Get instant answers from 5,000+ members in our WhatsApp community!
                </p>
                <a
                  href="https://chat.whatsapp.com/your-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#2E8B57] to-[#2E8B57]/80 text-white font-semibold py-3 px-4 rounded-full text-center transition-all duration-300 hover:scale-105"
                >
                  Join Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}