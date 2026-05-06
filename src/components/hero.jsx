import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '2,100+', label: 'Active Learners' },
    { icon: Award, value: '92%', label: 'Success Rate' },
    { icon: TrendingUp, value: '3x', label: 'Avg Salary Increase' }
  ];

  const benefits = [
    'No experience required',
    'Expert coaching from certified coaches',
    'Access to useful resources',
    'Job placement support'
  ];

  return (
    <section className='pt-15 sm:pt-15 md:pt-15 lg:pt-15 xl:pt-15'>
    <div className="relative min-h-screen bg-gradient-to-br from-[#13262F] via-[#0B1922] to-[#13262F] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDEsIDIwOSwgMjE3LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#2E8B57] rounded-full animate-pulse"></div>
              <span className="text-[#C9D1D9] text-sm font-medium">Join 2,100+ successful students</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Ready to land your</span>
              <br />
              <span className="bg-gradient-to-r from-[#EE7B30] via-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent animate-pulse">
                first remote job?
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#C9D1D9] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Join thousands of learners who have transformed their careers with our expert coaching and hands-on training.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0" />
                  <span className="text-[#F9F6F1] text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/programs" className="group relative bg-[#EE7B30] hover:bg-[#EE7B30]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,123,48,0.5)] hover:scale-105 flex items-center justify-center gap-2">
                <span>Join the community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/testimonies" className="group text-center border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-[#EE7B30]/10">
                Success Stories
              </Link>
            </div>

            {/* Trust Badge */}
            <p className="text-[#C9D1D9]/70 text-sm flex items-center gap-2">
              <span className="text-[#2E8B57]">✓</span>
              No experience needed. Start your remote career today!
            </p>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Floating Card */}
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 border border-[#C9D1D9]/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#EE7B30] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Success Metrics</h3>
                      <p className="text-[#C9D1D9]/70 text-sm">Real results from real students</p>
                    </div>
                  </div>

                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-[#13262F]/50 rounded-xl border border-[#C9D1D9]/10 hover:border-[#EE7B30]/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <stat.icon className="w-8 h-8 text-[#EE7B30]" />
                        <span className="text-[#C9D1D9] text-sm">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 -right-6 bg-[#2E8B57] text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                <p className="font-bold text-sm">100% Online</p>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white px-6 py-3 rounded-full shadow-lg" style={{ animation: 'float 4s ease-in-out infinite' }}>
                <p className="font-bold text-sm">Start Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </div>
    </section>
  );
}