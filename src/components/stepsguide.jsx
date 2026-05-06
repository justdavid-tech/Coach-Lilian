import React, { useState, useEffect } from 'react';
import { Users, BookOpen, GraduationCap, Briefcase, ArrowRight, CheckCircle, Sparkles, Clock, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StepsGuideSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      number: 1,
      icon: Users,
      title: 'Join the Community',
      description: 'Start by joining our vibrant Telegram community of 5,000+ learners. Get instant access to job opportunities, free resources, and connect with like-minded individuals.',
      details: [
        'Instant access to job postings',
        'Network with successful alumni',
        'Free templates and resources',
        'Daily motivation and tips'
      ],
      duration: '3 minutes',
      cta: 'Join Now',
      href: '/community',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      number: 2,
      icon: BookOpen,
      title: 'Register for Training',
      description: 'Choose your path and enroll in our comprehensive training program. Fill out a simple form, schedule your onboarding call, and get your personalized learning roadmap.',
      details: [
        'Choose your specialization',
        'Get personalized curriculum',
        'Access course materials instantly'
      ],
      duration: '15 minutes',
      cta: 'Register',
      href: '/training',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      number: 3,
      icon: GraduationCap,
      title: 'Start Learning',
      description: 'Dive into hands-on training sessions and personalized coaching. Build your portfolio while learning at your own pace.',
      details: [
        'Coaching sessions',
        'Get direct access to coach',
        'Lifetime community access'
      ],
      duration: '2-5 days',
      cta: 'View Curriculum',
      href: '/programs',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      number: 4,
      icon: Briefcase,
      title: 'Land Your Remote Job',
      description: 'Apply your new skills with our job placement support. Get resume reviews, interview prep, and access to our exclusive job board with unadvertised positions.',
      details: [
        'Resume and portfolio review',
        'Access to exclusive job board'
      ],
      duration: '15-25 days',
      cta: 'Success Stories',
      href: '/testimonies',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    }
  ];

  return (
    <div className="relative py-10 lg:py-12 bg-gradient-to-b from-[#13262F] to-[#0B1922] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - With AOS */}
        <div 
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-center mb-20 space-y-6"
        >
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="600"
            className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4"
          >
            <Rocket className="w-4 h-4 text-[#EE7B30]" />
            <span className="text-[#C9D1D9] text-sm font-medium">Your Journey Starts Here</span>
          </div>
          
          <h2 
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Get Started in{' '}
            <span className="bg-gradient-to-r from-[#EE7B30] via-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-[#C9D1D9] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Your path to landing your first remote job is straightforward. Follow these steps and join thousands who've transformed their careers.
          </p>
        </div>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="absolute top-20 left-0 right-0 h-1 bg-[#C9D1D9]/10"
            >
              <div 
                className="h-full bg-gradient-to-r from-[#2E8B57] via-[#EE7B30] to-[#C9D1D9] transition-all duration-1000"
                style={{ width: `${(activeStep / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 400}
                  data-aos-duration="800"
                  data-aos-offset="100"
                  className="relative transition-all duration-500"
                  onMouseEnter={() => setActiveStep(step.number)}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-8">
                    <div 
                      data-aos="zoom-in"
                      data-aos-delay={index * 150 + 450}
                      data-aos-duration="600"
                      className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg transition-all duration-300 ${
                        activeStep === step.number ? 'scale-110 shadow-[0_0_40px_rgba(238,123,48,0.5)]' : 'scale-100'
                      }`}
                    >
                      <step.icon className="w-16 h-16 text-white" />
                      
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[#13262F] font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div 
                    data-aos="fade-up"
                    data-aos-delay={index * 150 + 500}
                    data-aos-duration="800"
                    className={`bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border transition-all duration-300 ${
                      activeStep === step.number
                        ? 'border-[#EE7B30] shadow-[0_0_30px_rgba(238,123,48,0.3)] scale-105'
                        : 'border-[#C9D1D9]/20'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#C9D1D9] text-sm mb-4 leading-relaxed">{step.description}</p>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-3 py-1 mb-4">
                      <Clock className="w-3 h-3 text-[#EE7B30]" />
                      <span className="text-[#EE7B30] text-xs font-medium">{step.duration}</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      {step.details.slice(0, 2).map((detail, idx) => (
                        <div 
                          key={idx}
                          data-aos="fade-right"
                          data-aos-delay={index * 150 + 550 + (idx * 50)}
                          data-aos-duration="500"
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                          <span className="text-[#F9F6F1] text-xs">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a 
                      href={step.href} 
                      data-aos="flip-up"
                      data-aos-delay={index * 150 + 650}
                      data-aos-duration="600"
                      className={`w-full group flex items-center justify-center gap-2 bg-gradient-to-r ${step.gradient} text-white font-semibold py-3 px-4 rounded-full text-sm transition-all duration-300 hover:shadow-lg`}
                    >
                      <span>{step.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Stack */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 150 + 400}
              data-aos-duration="800"
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#EE7B30] to-[#2E8B57] opacity-30"></div>
              )}

              <div className="flex gap-6">
                {/* Step Icon */}
                <div 
                  data-aos="zoom-in"
                  data-aos-delay={index * 150 + 450}
                  data-aos-duration="600"
                  className="relative flex-shrink-0"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[#13262F] font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div 
                  data-aos="fade-left"
                  data-aos-delay={index * 150 + 500}
                  data-aos-duration="800"
                  className="flex-1 bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 border border-[#C9D1D9]/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#C9D1D9] mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-3 py-1 mb-4">
                    <Clock className="w-4 h-4 text-[#EE7B30]" />
                    <span className="text-[#EE7B30] text-sm font-medium">{step.duration}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {step.details.map((detail, idx) => (
                      <div 
                        key={idx}
                        data-aos="fade-right"
                        data-aos-delay={index * 150 + 550 + (idx * 50)}
                        data-aos-duration="500"
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                        <span className="text-[#F9F6F1] text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={step.href} 
                    data-aos="flip-up"
                    data-aos-delay={index * 150 + 700}
                    data-aos-duration="600"
                    className={`w-full group flex items-center justify-center gap-2 bg-gradient-to-r ${step.gradient} text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg`}
                  >
                    <span>{step.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - With AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
          data-aos-offset="50"
          className="mt-20 text-center"
        >
          <div 
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="800"
            className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-[#C9D1D9]/20"
          >
            <Sparkles 
              data-aos="rotate-in"
              data-aos-delay="1000"
              data-aos-duration="800"
              className="w-12 h-12 text-[#EE7B30] mx-auto mb-6"
            />
            <h3 
              data-aos="fade-up"
              data-aos-delay="1100"
              data-aos-duration="600"
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Ready to Start Your Journey?
            </h3>
            <p 
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="600"
              className="text-[#C9D1D9] text-lg mb-8 max-w-2xl mx-auto"
            >
              Join 5,000+ students who've already taken the first step. Your remote career is just 4 steps away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                data-aos="zoom-in"
                data-aos-delay="1300"
                data-aos-duration="600"
                className="group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,123,48,0.6)] hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Join Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/programs" 
                data-aos="zoom-in"
                data-aos-delay="1400"
                data-aos-duration="600"
                className="group border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#EE7B30]/10 flex items-center justify-center gap-2"
              >
                <span>View All Programs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}