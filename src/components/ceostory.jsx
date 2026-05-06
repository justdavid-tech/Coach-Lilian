import React, { useState } from 'react';
import { Heart, Lightbulb, Target, Users, Award, BookOpen, TrendingUp, Quote, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom"

export default function CEOStorySection() {
  const [activeTab, setActiveTab] = useState('story');

  // const achievements = [
  //   { icon: Users, text: 'Trained 1,200+ students across different countries' },
  //   { icon: Award, text: 'Certified Career Coach & Remote Work Consultant' },
  //   { icon: BookOpen, text: 'Published author and international speaker' },
  //   { icon: TrendingUp, text: '92% student success rate in job placement' }
  // ];
1
  const whyStarted = [
    {
      icon: Heart,
      title: 'Personal Struggle',
      description: 'After years in a 9-to-5 that left me exhausted and unfulfilled, I knew there had to be a better way. I experienced firsthand the frustration of feeling trapped by location and limited opportunities.'
    },
    {
      icon: Lightbulb,
      title: 'The Discovery',
      description: 'When I discovered remote work, everything changed. I gained freedom, flexibility, and the ability to earn in dollars while living my best life. It was transformative, and I knew others needed this too.'
    },
    {
      icon: Target,
      title: 'The Mission',
      description: 'I started work-from-home with lilian because I believe everyone deserves the opportunity to break free from geographical limitations. No one should have to choose between their dreams and their circumstances.'
    }
  ];

  const philosophy = [
    'Skills can be taught, but mindset is everything',
    'Your background doesn\'t determine your future',
    'Community support accelerates individual success',
    'Practical experience beats theoretical knowledge',
    'Financial freedom starts with taking the first step'
  ];

  return (
    <div className="relative pt-12 pb-12 lg:pt-16 lg:pb-32 bg-gradient-to-b from-[#13262F] to-[#0B1922] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl sm:max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#EE7B30]" />
            <span className="text-[#C9D1D9] text-sm font-medium">Meet the Founder</span>
          </div>
          
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
              Lilian Dosunmu
            </span>
          </h2>
          
          <p className="text-[#C9D1D9] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            CEO & Founder of WorkFromHome with Lilian
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-start">
          {/* Left: Image & Quick Stats */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#C9D1D9]/20 group-hover:border-[#EE7B30]/50 transition-all duration-500">
                {/* Profile Image Placeholder */}
                <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#EE7B30]/20 to-[#2E8B57]/20 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl lg:text-9xl">👩‍💼</div>
                  {/* Replace with actual image: <img src="/path-to-image.jpg" alt="Lilian" className="w-full h-full object-cover" /> */}
                </div>

                {/* Quote */}
                <div className="relative bg-[#13262F]/50 rounded-2xl p-6 border border-[#C9D1D9]/10">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-[#EE7B30] opacity-30" />
                  <p className="text-[#F9F6F1] italic text-lg leading-relaxed pl-8">
                    "I didn't just want to change my own life, I wanted to create a movement that empowers thousands to rewrite their stories and achieve true freedom."
                  </p>
                  <p className="text-[#EE7B30] font-bold mt-4 text-right">— Lilian</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            {/* <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#C9D1D9]/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-[#EE7B30]" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#13262F]/50 rounded-xl border border-[#C9D1D9]/10 hover:border-[#EE7B30]/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EE7B30] to-[#EE7B30]/70 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[#F9F6F1] leading-relaxed pt-1">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right: Story Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 md:gap-4 pb-2">
              {[
                { id: 'story', label: 'My Story' },
                { id: 'why', label: 'Why I Started' },
                { id: 'philosophy', label: 'My Philosophy' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white shadow-lg'
                      : 'bg-[#F9F6F1]/5 text-[#C9D1D9] border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* My Story Tab */}
            {activeTab === 'story' && (
              <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#C9D1D9]/20 space-y-6 animate-fadeIn">
                <h3 className="text-2xl lg:text-3xl font-bold text-white break-words">My Journey to Remote Work Freedom</h3>
                
                <div className="space-y-4 text-[#C9D1D9] leading-relaxed">
                  <p>
                    My name is Lilian Dosunmu, and like many of you, I once felt trapped in the traditional 9-to-5 grind. I remember the exhaustion, the long commutes, and the feeling that there had to be more to life than this endless cycle.
                  </p>
                  
                  <p>
                    In 2016, I was working a corporate job that paid the bills but left me feeling empty. I had dreams of traveling, spending time with family, and building something meaningful but it all seemed impossible. That's when I discovered the world of remote work.
                  </p>
                  
                  <p>
                    What started as curiosity turned into obsession. I spent countless nights learning skills, building my portfolio, and applying to remote positions. The journey wasn't easy, I faced rejection after rejection. But when I finally landed my first remote role in 2018, everything changed.
                  </p>
                  
                  <p>
                    Suddenly, I had the freedom to work from anywhere, earn in dollars, and design my life on my terms. I doubled my income, and most importantly, I found fulfillment. But I couldn't shake the feeling that this opportunity should be accessible to everyone.
                  </p>
                  
                  <p className="text-[#EE7B30] font-semibold">
                    That's why in 2019, I founded WorkFromHome with Lilian to help others break free from geographical limitations and achieve the same freedom I found.
                  </p>
                </div>
              </div>
            )}

            {/* Why I Started Tab */}
            {activeTab === 'why' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#C9D1D9]/20">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 break-words">Why I Started coach lilian's community</h3>
                  <p className="text-[#C9D1D9] leading-relaxed mb-8">
                    My motivation came from three powerful realizations that changed everything:
                  </p>
                </div>

                {whyStarted.map((reason, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#C9D1D9]/20 hover:border-[#EE7B30]/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EE7B30] to-[#EE7B30]/70 flex items-center justify-center flex-shrink-0">
                        <reason.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
                        <p className="text-[#C9D1D9] leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#2E8B57]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#2E8B57]/30">
                  <p className="text-[#F9F6F1] text-lg leading-relaxed">
                    <strong className="text-[#2E8B57]">The Result:</strong> Today,  has helped over 1,200 individuals from different countries transform their lives through remote work. Every success story fuels my passion to reach even more people who deserve this opportunity.
                  </p>
                </div>
              </div>
            )}

            {/* My Philosophy Tab */}
            {activeTab === 'philosophy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#C9D1D9]/20">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 break-words">My Teaching Philosophy</h3>
                  <p className="text-[#C9D1D9] leading-relaxed mb-8">
                    Over the years, I've developed core principles that guide how I teach and mentor. These beliefs shape every program at coach lilian's community:
                  </p>

                  <div className="space-y-4">
                    {philosophy.map((principle, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-[#13262F]/50 rounded-xl border border-[#C9D1D9]/10 hover:border-[#EE7B30]/50 transition-all duration-300"
                      >
                        <CheckCircle className="w-6 h-6 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                        <p className="text-[#F9F6F1] text-lg leading-relaxed">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#EE7B30]/10 to-[#EE7B30]/5 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-[#EE7B30]/30">
                  <h4 className="text-xl font-bold text-white mb-4">My Promise to You</h4>
                  <p className="text-[#F9F6F1] leading-relaxed">
                    When you join Coach Lilian's community, you're not just getting a course, you're getting a mentor who genuinely cares about your success. I review student progress personally, celebrate every win, and am committed to helping you break through every barrier. Your success is my success.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border border-[#C9D1D9]/20 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 break-words">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-[#C9D1D9] text-lg mb-8">
              Let me guide you on the same journey that changed my life. Together, we'll unlock your potential and build the freedom you deserve.
            </p>
            <Link to = "/join-class" className="group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-bold px-6 sm:px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,123,48,0.6)] hover:scale-105 flex items-center justify-center gap-2 mx-auto w-fit">
              <span>Get Started</span>
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}