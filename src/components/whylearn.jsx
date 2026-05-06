import React, { useState, useEffect } from 'react';
import { Award, Users, TrendingUp, Sparkles, CheckCircle, Star, BookOpen, Target, Heart, Zap, Trophy, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyLearnSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const [counters, setCounters] = useState({
    students: 0,
    successRate: 0,
    experience: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(1200 * progress),
        successRate: Math.floor(92 * progress),
        experience: Math.floor(6 * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({ students: 1200, successRate: 92, experience: 6 });
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.students.toLocaleString() + '+',
      label: 'Students Trained',
      color: '#EE7B30'
    },
    {
      icon: TrendingUp,
      value: counters.successRate + '%',
      label: 'Success Rate',
      color: '#EE7B30'
    },
    {
      icon: Award,
      value: counters.experience + '+',
      label: 'Years Experience',
      color: '#EE7B30'
    }
  ];

  const highlights = [
    {
      id: 'experience',
      icon: Award,
      title: 'Proven Experience',
      description: 'Over 6 years of industry experience in remote work, digital marketing, and career coaching. I\'ve worked with various companies and individuals helping them transition to successful remote careers.',
      features: [
        'Certified Career Coach with recognition',
        'Former Remote Work Consultant',
        'Speaker at various conference',
        'Published author on remote work strategies'
      ],
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      id: 'stories',
      icon: Star,
      title: 'Success Stories',
      description: 'Our students have achieved remarkable transformations, landing roles at top companies, doubling their income, and achieving work-life balance they never thought possible.',
      features: [
        'Average salary increase of 3x after training',
        '92% job placement rate within 3 months',
        'Students now working as sale respresentatives, customer care, telemarketers, virtual assistants, and more ',
        'Over 500 documented success stories'
      ],
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    },
    {
      id: 'methods',
      icon: Sparkles,
      title: 'Unique Teaching Methods',
      description: 'My proprietary framework combines practical skills, mindset coaching. Unlike traditional courses, you learn by doing, not just watching.',
      features: [
        'Learn-by-Building methodology with real clients',
        'Exclusive job board with unadvertised positions',
        'Lifetime access to community and resources'
      ],
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70'
    }
  ];

  
  return (
    <div className="relative py-0 lg:py-12 bg-gradient-to-b from-[#0B1922] to-[#13262F] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - With AOS */}
        <div 
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-center mb-16 space-y-6"
        >
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="600"
            className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4"
          >
            <Heart className="w-4 h-4 text-[#EE7B30]" />
            <span className="text-[#C9D1D9] text-sm font-medium">Why Choose coach lilian's community</span>
          </div>
          
          <h2 
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Why Learn{' '}
            <span className="bg-gradient-to-r from-[#EE7B30] via-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
              From Me?
            </span>
          </h2>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-[#C9D1D9] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            With over a decade of experience and thousands of success stories, I've developed a proven system that gets results
          </p>
        </div>

        {/* Stats Counter - Individual AOS for each stat */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
              data-aos-duration="800"
              data-aos-offset="100"
              className="group relative bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(238,123,48,0.3)]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div 
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 350}
                  data-aos-duration="600"
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[${stat.color}] to-[${stat.color}]/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div 
                  data-aos="counter"
                  data-aos-duration="1000"
                  className="text-5xl font-bold text-white group-hover:text-[#EE7B30] transition-colors duration-300"
                >
                  {stat.value}
                </div>
                <div className="text-[#C9D1D9] font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation - With AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {highlights.map((highlight, index) => (
            <button
              key={highlight.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 550}
              data-aos-duration="500"
              onClick={() => setActiveTab(highlight.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === highlight.id
                  ? 'bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white shadow-[0_0_30px_rgba(238,123,48,0.4)] scale-105'
                  : 'bg-[#F9F6F1]/5 text-[#C9D1D9] border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 hover:bg-[#EE7B30]/10'
              }`}
            >
              <highlight.icon className="w-5 h-5" />
              <span>{highlight.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content - With AOS */}
        <div className="relative min-h-[500px]">
          {highlights.map((highlight, idx) => (
            <div
              key={highlight.id}
              data-aos={activeTab === highlight.id ? "fade-up" : ""}
              data-aos-duration="600"
              className={`transition-all duration-500 ${
                activeTab === highlight.id
                  ? 'opacity-100 translate-y-0 relative'
                  : 'opacity-0 absolute pointer-events-none translate-y-10'
              }`}
            >
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-[#C9D1D9]/20 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Icon & Description */}
                  <div className="space-y-6">
                    <div 
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <highlight.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      className="text-3xl lg:text-4xl font-bold text-white"
                    >
                      {highlight.title}
                    </h3>
                    
                    <p 
                      data-aos="fade-right"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      className="text-[#C9D1D9] text-lg leading-relaxed"
                    >
                      {highlight.description}
                    </p>
                  </div>

                  {/* Right: Features */}
                  <div className="space-y-4">
                    {highlight.features.map((feature, idx2) => (
                      <div
                        key={idx2}
                        data-aos="fade-left"
                        data-aos-delay={idx2 * 100 + 300}
                        data-aos-duration="600"
                        className="flex items-start gap-4 p-4 bg-[#13262F]/50 rounded-2xl border border-[#C9D1D9]/10 hover:border-[#EE7B30]/50 transition-all duration-300 hover:scale-105"
                      >
                        <div 
                          data-aos="zoom-in"
                          data-aos-delay={idx2 * 100 + 350}
                          data-aos-duration="500"
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-[#F9F6F1] leading-relaxed pt-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - With AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="800"
          data-aos-offset="50"
          className="mt-16 text-center"
        >
          <Link 
            to="/join-class" 
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="600"
            className="group relative bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,123,48,0.6)] hover:scale-105 inline-flex items-center gap-3"
          >
            <span>Join 1,200+ Successful Students</span>
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Link>
          <p 
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="600"
            className="text-[#C9D1D9] mt-4"
          >
            Start your transformation today. No experience needed.
          </p>
        </div>
      </div>
    </div>
  );
}