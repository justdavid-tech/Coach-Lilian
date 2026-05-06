import React, { useState, useEffect } from 'react';
import { Award, Users, Target, Heart, Sparkles, TrendingUp, Globe, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import CEOStorySection from '../components/ceostory';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Counter animation
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrentValue(Math.floor((1200 / steps) * step));
      
      if (step >= steps) {
        clearInterval(timer);
        setCurrentValue(1200);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Impact-Driven',
      description: 'We genuinely care about your success and are committed to your growth',
      color: '#EE7B30'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Every decision we make is aimed at helping you achieve tangible outcomes',
      color: '#EE7B30'
    },
    {
      icon: Users,
      title: 'Community-First',
      description: 'Building a supportive network where everyone lifts each other up',
      color: '#EE7B30'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'We stay ahead of industry trends to bring you the latest strategies',
      color: '#EE7B30'
    }
  ];



  return (
    <>
    <Navbar />
    <div className="relative min-h-screen bg-gradient-to-b from-[#13262F] via-[#0B1922] to-[#13262F] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#C9D1D9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDEsIDIwOSwgMjE3LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 lg:mt-0">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-[#EE7B30]" />
              <span className="text-[#C9D1D9] text-sm font-medium">Our Story & Mission</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Empowering</span>
              <br />
              <span className="bg-gradient-to-r from-[#EE7B30] via-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Global Remote Careers
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#C9D1D9] text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
              Since 2019, we've been on a mission to transform lives by making remote work accessible to everyone, regardless of background or experience. We believe that location should never limit opportunity.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                { value: `${currentValue.toLocaleString()}+`, label: 'Lives Transformed' },
                { value: '6+', label: 'Years of Impact' },
                { value: '92%', label: 'Success Rate' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-2xl p-6 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-[#EE7B30] mb-2">{stat.value}</div>
                  <div className="text-[#C9D1D9] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-10 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(238,123,48,0.3)]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#EE7B30] to-[#EE7B30]/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-[#C9D1D9] text-lg leading-relaxed">
              To provide access to remote work opportunities by providing world-class training, mentorship, and support. We're committed to breaking down barriers and creating pathways to financial freedom for everyone, everywhere.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-10 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(238,123,48,0.3)]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#EE7B30] to-[#EE7B30]/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-[#C9D1D9] text-lg leading-relaxed">
              A world where geography doesn't determine destiny. We envision a future where millions of people have the skills, confidence, and opportunities to thrive in the global remote workforce and achieve true work-life balance.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Our Core{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-[#C9D1D9] text-lg max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-500 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[${value.color}] to-[${value.color}]/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-[#C9D1D9] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-12 border border-[#C9D1D9]/20">
            <Award className="w-16 h-16 text-[#EE7B30] mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Be Part of Our Story?
            </h3>
            <p className="text-[#C9D1D9] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who've already transformed their lives. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to = "/join-class" className="group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,123,48,0.6)] hover:scale-105 flex items-center justify-center gap-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to = "/about" className="group border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#EE7B30]/10">
                Join Class
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CEOStorySection />
    <Footer/>
    </>
  );
}