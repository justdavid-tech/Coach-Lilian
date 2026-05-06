import React, { useState } from 'react';
import { Check, X, Sparkles, Users, Clock, Award, TrendingUp, ArrowRight, CheckCircle, AlertCircle, Calendar, BookOpen, Video, Briefcase, DollarSign, MessageCircle, Shield, Zap, Gift } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function JoinClassPage() {
  const [selectedProgram, setSelectedProgram] = useState('training');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    experience: '',
    goals: '',
    paymentPlan: 'full',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const programs = [
    {
      id: 'general',
      icon: Briefcase,
      name: 'General Training',
      tagline: 'Master Skills in 2 Days',
      price: '₦30,000',
      duration: '2 Days',
      nextIntake: 'Rolling Admission',
      popular: true,
      features: [
        'Live expert coaching',
        'Sales & Marketing skills',
        'Job placement support',
        'Resource pack'
      ],
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      id: 'mentorship',
      icon: Users,
      name: 'Personal Mentorship',
      tagline: 'Personalized Guidance',
      price: '₦250,000',
      duration: '12 weeks',
      nextIntake: 'January 15, 2025',
      popular: false,
      features: [
        'Direct Access to coach',
        'Exclusive job placement support',
        '3-5 portfolio projects',
        'Resume & LinkedIn optimization',
        'Certificate of completion'
      ],
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      id: 'financial',
      icon: DollarSign,
      name: 'Financial Freedom with Lilian',
      tagline: 'Build Wealth & Passive Income',
      price: '₦160,000',
      duration: 'Lifetime Access',
      nextIntake: 'Rolling Admission',
      features: [
        'Copy and paste trading',
        'Daily signal from expert',
        'Access to detailed course',
        'Passive income stream'
      ],
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/60'
    }
  ];

  const getPrice = (planId) => {
    const program = programs.find(p => p.id === selectedProgram) || programs[0];
    const basePrice = parseInt(program.price.replace(/[^0-9]/g, ''));
    
    if (planId === 'full') {
      const discounted = basePrice * 0.95;
      return '₦' + discounted.toLocaleString();
    } else {
      const monthly = Math.ceil(basePrice / 3);
      return '₦' + monthly.toLocaleString() + '/month';
    }
  };

  const paymentPlans = [
    {
      id: 'full',
      name: 'Full Payment',
      discount: '5% Off',
      price: getPrice('full'),
      description: 'Pay once and save',
      icon: Zap
    },
    {
      id: 'installment',
      name: 'Installment Plan',
      discount: 'Flexible',
      price: getPrice('installment'),
      description: '3 monthly payments',
      icon: Calendar
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '7-Day Money-Back Guarantee',
      description: 'Not satisfied? Get a full refund within 7 days'
    },
    {
      icon: Users,
      title: 'Join 5,000+ Students',
      description: 'Be part of our thriving community'
    },
    {
      icon: Award,
      title: '92% Success Rate',
      description: 'Our students consistently land remote jobs'
    },
    {
      icon: Gift,
      title: 'Exclusive Bonuses',
      description: 'Free resources, templates, and tools worth ₦50k'
    }
  ];

  const faqs = [
    {
      question: 'When does the next class start?',
      answer: 'Remote Job Training starts January 15, 2025. Financial Freedom has rolling admission.'
    },
    {
      question: 'Can I switch programs after enrollment?',
      answer: 'Yes! Contact us within the first week to switch programs.'
    },
    {
      question: 'What if I miss a live session?',
      answer: 'All sessions are recorded and available for lifetime access.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee with no questions asked.'
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
    }
    
    if (step === 2) {
      if (!formData.experience) newErrors.experience = 'Please select your experience level';
      if (!formData.goals.trim()) newErrors.goals = 'Please tell us about your goals';
    }
    
    if (step === 3) {
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      console.log('Enrollment submitted:', { ...formData, program: selectedProgram });
      setSubmitted(true);
    }
  };

  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-[#13262F] via-[#0B1922] to-[#13262F]">
      {/* Hero Section */}
      <div className="relative py-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#EE7B30]" />
              <span className="text-[#C9D1D9] text-sm font-medium">Limited Spots Available</span>
            </div>
            
            <h1 className="text-3xl lg:text-7xl font-bold text-white mb-6">
              Join{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Coach lilian's community 
              </span>
            </h1>
            
            <p className="text-[#C9D1D9] text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Transform your career and achieve financial freedom. Start your journey today!
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 mb-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Enrollment Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-12 border border-[#C9D1D9]/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2E8B57] to-[#2E8B57]/70 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Welcome to coach lilian's community!</h2>
                <p className="text-[#C9D1D9] text-lg mb-6">
                  Your enrollment has been received. Check your email for next steps and payment instructions.
                </p>
                <div className="bg-[#13262F]/50 rounded-2xl p-6 mb-6">
                  <h3 className="text-white font-bold mb-3">What Happens Next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                      <p className="text-[#C9D1D9] text-sm">Check your email for payment details</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                      <p className="text-[#C9D1D9] text-sm">Complete payment to secure your spot</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                      <p className="text-[#C9D1D9] text-sm">Join the WhatsApp community</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                      <p className="text-[#C9D1D9] text-sm">Receive your welcome pack and start date</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      country: '',
                      experience: '',
                      goals: '',
                      paymentPlan: 'full',
                      agreeTerms: false
                    });
                  }}
                  className="bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
                >
                  Enroll Another Student
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#C9D1D9]/20">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-10">
                  {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          currentStep >= step
                            ? 'bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white scale-110'
                            : 'bg-[#13262F]/50 text-[#C9D1D9]'
                        }`}>
                          {currentStep > step ? <Check className="w-6 h-6" /> : step}
                        </div>
                        <span className={`text-xs mt-2 ${currentStep >= step ? 'text-[#EE7B30]' : 'text-[#C9D1D9]'}`}>
                          {step === 1 ? 'Details' : step === 2 ? 'Background' : 'Payment'}
                        </span>
                      </div>
                      {step < 3 && (
                        <div className={`flex-1 h-1 mx-4 rounded transition-all duration-300 ${
                          currentStep > step ? 'bg-[#EE7B30]' : 'bg-[#13262F]/50'
                        }`}></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">Personal Information</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          First Name <span className="text-[#EE7B30]">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className={`w-full bg-[#13262F]/50 border ${errors.firstName ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Last Name <span className="text-[#EE7B30]">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className={`w-full bg-[#13262F]/50 border ${errors.lastName ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email Address <span className="text-[#EE7B30]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        className={`w-full bg-[#13262F]/50 border ${errors.email ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          className={`w-full bg-[#13262F]/50 border ${errors.phone ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Country <span className="text-[#EE7B30]">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Nigeria"
                          className={`w-full bg-[#13262F]/50 border ${errors.country ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all`}
                        />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                      </div>
                    </div>

                    <button
                      onClick={handleNext}
                      className="w-full group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold py-4 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}

                {/* Step 2: Background Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">Tell Us About Yourself</h2>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Experience Level <span className="text-[#EE7B30]">*</span>
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`w-full bg-[#13262F]/50 border ${errors.experience ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EE7B30] transition-all`}
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Complete Beginner - No experience</option>
                        <option value="some">Some Experience - Tried a few things</option>
                        <option value="intermediate">Intermediate - Have some skills</option>
                        <option value="advanced">Advanced - Looking to level up</option>
                      </select>
                      {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        What are your goals? <span className="text-[#EE7B30]">*</span>
                      </label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us what you hope to achieve with this program..."
                        className={`w-full bg-[#13262F]/50 border ${errors.goals ? 'border-red-500' : 'border-[#C9D1D9]/20'} rounded-xl px-4 py-3 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all resize-none`}
                      ></textarea>
                      {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={handleBack}
                        className="flex-1 border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold py-4 rounded-full transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleNext}
                        className="flex-1 group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold py-4 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment & Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">Payment Plan</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {paymentPlans.map((plan) => (
                        <button
                          key={plan.id}
                          onClick={() => setFormData(prev => ({ ...prev, paymentPlan: plan.id }))}
                          className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                            formData.paymentPlan === plan.id
                              ? 'border-[#EE7B30] bg-[#EE7B30]/10 scale-105'
                              : 'border-[#C9D1D9]/20 bg-[#13262F]/50 hover:border-[#EE7B30]/50'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <plan.icon className="w-8 h-8 text-[#EE7B30]" />
                            {plan.discount && (
                              <span className="bg-[#2E8B57] text-white text-xs font-bold px-2 py-1 rounded-full">
                                {plan.discount}
                              </span>
                            )}
                          </div>
                          <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
                          <p className="text-[#EE7B30] font-bold text-2xl mb-2">{plan.price}</p>
                          <p className="text-[#C9D1D9] text-sm">{plan.description}</p>
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#13262F]/50 rounded-2xl p-6 border border-[#C9D1D9]/10">
                      <h3 className="text-white font-bold mb-4">Order Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-[#C9D1D9]">Program:</span>
                          <span className="text-white font-semibold">{selectedProgramData?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#C9D1D9]">Payment Plan:</span>
                          <span className="text-white font-semibold">
                            {formData.paymentPlan === 'full' ? 'Full Payment' : 'Installment'}
                          </span>
                        </div>
                        <div className="border-t border-[#C9D1D9]/10 pt-3 flex justify-between">
                          <span className="text-white font-bold">Total:</span>
                          <span className="text-[#EE7B30] font-bold text-xl">
                            {paymentPlans.find(p => p.id === formData.paymentPlan)?.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, agreeTerms: !prev.agreeTerms }))}
                        className="flex items-start gap-3 w-full text-left"
                      >
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                          formData.agreeTerms
                            ? 'bg-[#EE7B30] border-[#EE7B30]'
                            : errors.agreeTerms
                            ? 'border-red-500'
                            : 'border-[#C9D1D9]/20'
                        }`}>
                          {formData.agreeTerms && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-[#C9D1D9] text-sm">
                          I agree to the{' '}
                          <a href="/terms" className="text-[#EE7B30] hover:underline">terms and conditions</a>
                          {' '}and{' '}
                          <a href="/privacy" className="text-[#EE7B30] hover:underline">privacy policy</a>
                        </span>
                      </button>
                      {errors.agreeTerms && <p className="text-red-500 text-sm mt-1 ml-9">{errors.agreeTerms}</p>}
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={handleBack}
                        className="flex-1 border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold py-4 rounded-full transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex-1 group bg-gradient-to-r from-[#2E8B57] to-[#2E8B57]/80 text-white font-bold py-4 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Complete Enrollment</span>
                        <CheckCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Program Selection & Info */}
          <div className="space-y-8">
            {/* Program Selection */}
            <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20">
              <h3 className="text-xl font-bold text-white mb-4">Select Program</h3>
              <div className="space-y-4">
                {programs.map((program) => (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program.id)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                      selectedProgram === program.id
                        ? 'border-[#EE7B30] bg-[#EE7B30]/10'
                        : 'border-[#C9D1D9]/20 bg-[#13262F]/50 hover:border-[#EE7B30]/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0`}>
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h4 className="text-white font-bold">{program.name}</h4>
                          {program.popular && (
                            <span className="bg-[#EE7B30] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[#C9D1D9] text-sm">{program.tagline}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Program Details */}
            {selectedProgramData && (
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20">
                <h3 className="text-xl font-bold text-white mb-4">Program Overview</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-[#13262F]/50 rounded-xl border border-[#C9D1D9]/10">
                    <span className="text-[#C9D1D9] text-sm flex items-center gap-2">
                       <DollarSign className="w-4 h-4 text-[#EE7B30]" /> Price
                    </span>
                    <span className="text-white font-bold">{selectedProgramData.price}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#13262F]/50 rounded-xl border border-[#C9D1D9]/10">
                    <span className="text-[#C9D1D9] text-sm flex items-center gap-2">
                       <Clock className="w-4 h-4 text-[#EE7B30]" /> Duration
                    </span>
                    <span className="text-white font-bold">{selectedProgramData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#13262F]/50 rounded-xl border border-[#C9D1D9]/10">
                    <span className="text-[#C9D1D9] text-sm flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-[#EE7B30]" /> Next Intake
                    </span>
                    <span className="text-white font-bold">{selectedProgramData.nextIntake}</span>
                  </div>
                </div>

                <h4 className="text-white font-bold mb-3 border-t border-[#C9D1D9]/10 pt-4">What's Included:</h4>
                <ul className="space-y-3">
                  {selectedProgramData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0" />
                      <span className="text-[#C9D1D9] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            <div className="bg-gradient-to-br from-[#2E8B57]/20 to-[#2E8B57]/10 backdrop-blur-xl rounded-3xl p-6 border border-[#2E8B57]/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2E8B57]" /> Why Choose Us?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <benefit.icon className="w-5 h-5 text-[#EE7B30] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{benefit.title}</h4>
                      <p className="text-[#C9D1D9] text-xs leading-relaxed opacity-80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}