import React, { useState } from 'react';
import { MessageCircle, Briefcase, DollarSign, CheckCircle, X, Clock, Users, Target, TrendingUp, Award, Sparkles, ArrowRight, Calendar, Book, Video, Headphones, FileText, Star } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 'telegram',
      icon: MessageCircle,
      title: 'Telegram Community',
      tagline: 'Your Gateway to Remote Work Success',
      price: 'FREE',
      priceDetail: 'No cost, just join!',
      description: 'Join our vibrant community of 2,100+ learners. Get daily job opportunities, network with peers, access exclusive resources, and participate in expert Q&A sessions.',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      features: [
        'Network with 2,100+ members',
        'Daily job opportunities',
        'Free resources & templates',
        'Expert Q&A sessions'
      ],
      whatYouGet: [
        'Instant job alerts',
        'Community networking',
        'Free guides',
        'Event notifications'
      ],
      idealFor: [
        'Beginners exploring remote work',
        'Job seekers',
        'Networking enthusiasts'
      ],
      cta: 'Join Community',
      link: 'https://t.me/your-group-link',
      testimonials: [
        { name: 'Sarah M.', text: 'Found my first remote job through this community!', rating: 5 },
        { name: 'David O.', text: 'The support here is incredible. Everyone helps each other.', rating: 5 }
      ]
    },
    {
      id: 'general',
      icon: Briefcase,
      title: 'General Training',
      tagline: 'Master In-Demand Skills in 2 Days',
      price: '₦30,000',
      priceDetail: 'One-time payment',
      description: 'Master in-demand remote skills with our comprehensive 2-day program. Get live coaching, build your portfolio, and land your dream remote job with placement support.',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      popular: true,
      features: [
        'Telemarketing, cold calling, sales training',
        'Free resources & templates',
        'Job support group',
        'Portfolio building',
        'Live coaching sessions'
      ],
      whatYouGet: [
        'Live expert coaching',
        'Sales & Marketing skills',
        'Job placement support',
        'Resource pack'
      ],
      idealFor: [
        'Beginners wanting quick skills',
        'Sales enthusiasts',
        'Anyone needing job support'
      ],
      cta: 'Start Training',
      link: '/register/remote-job-training',
      testimonials: []
    },
    {
      id: 'mentorship',
      icon: Users,
      title: 'Personal Mentorship',
      tagline: 'Personalized Guidance for Success',
      price: '₦250,000',
      priceDetail: 'Objective: ₦50,000',
      description: 'Get personalized guidance and support to achieve your goals. Our expert mentors provide tailored advice, feedback, and resources to help you succeed.',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      popular: false,
      features: [
        'Direct Access to coach',
        'Exclusive job placement support',
        'Tailored advice and feedback',
        'Personalized resources'
      ],
      whatYouGet: [
        '1-on-1 Mentorship',
        'Job placement priority',
        'Customized career plan',
        'Direct coach access'
      ],
      idealFor: [
        'Those wanting dedicated support',
        'Career changers',
        'Professionals seeking growth'
      ],
      cta: 'Start Training',
      link: '/register/remote-job-training',
      testimonials: [
        { name: 'Amara K.', text: 'Landed a $65k remote job with personal mentorship!', rating: 5 }
      ]
    },
    {
      id: 'financial',
      icon: DollarSign,
      title: 'Financial Freedom with Lilian',
      tagline: 'Build Wealth & Passive Income',
      price: '₦160,000',
      priceDetail: 'Lifetime access',
      description: 'Master the art of Forex trading and financial independence. Get expert signals, technical analysis training, and proven strategies to build consistent profits.',
      color: '#EE7B30',
      gradient: 'from-[#EE7B30] to-[#EE7B30]/70',
      popular: false,
      features: [
        'Copy and paste trading',
        'Daily signal from expert',
        'Access to detailed course',
        'Passive income stream'
      ],
      whatYouGet: [
        'Daily trading signals',
        'Forex mastery course',
        'Risk management strategies',
        'Passive income blueprint'
      ],
      idealFor: [
        'Traders and investors',
        'Wealth builders',
        'Anyone seeking passive income'
      ],
      cta: 'Start Journey',
      link: '/register/financial-freedom',
      testimonials: [
        { name: 'Victoria A.', text: 'Doubled my investments with these signals!', rating: 5 }
      ]
    }
  ];

  const ProgramModal = ({ program, onClose }) => (
    <div 
      data-aos="fade-up"
      data-aos-duration="500"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div 
        data-aos="zoom-in"
        data-aos-duration="600"
        className="relative bg-gradient-to-b from-[#13262F] to-[#0B1922] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#C9D1D9]/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          data-aos="fade-right"
          data-aos-duration="500"
          className="sticky top-4 right-4 float-right w-10 h-10 bg-[#F9F6F1]/10 hover:bg-[#EE7B30] rounded-full flex items-center justify-center transition-all duration-300 z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div 
              data-aos="zoom-in"
              data-aos-duration="600"
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4`}
            >
              <program.icon className="w-8 h-8 text-white" />
            </div>
            <h3 
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="600"
              className="text-3xl font-bold text-white mb-2"
            >
              {program.title}
            </h3>
            <p 
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="600"
              className="text-[#C9D1D9] text-lg mb-4"
            >
              {program.tagline}
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              className="flex items-baseline gap-2"
            >
              <span className="text-4xl font-bold text-[#EE7B30]">{program.price}</span>
              <span className="text-[#C9D1D9] text-sm">{program.priceDetail}</span>
            </div>
          </div>

          {/* Full Features */}
          <div className="mb-8">
            <h4 
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="600"
              className="text-xl font-bold text-white mb-4"
            >
              Everything Included:
            </h4>
            <div className="grid gap-3">
              {program.features.map((feature, idx) => (
                <div 
                  key={idx}
                  data-aos="fade-left"
                  data-aos-delay={300 + (idx * 50)}
                  data-aos-duration="500"
                  className="flex items-start gap-3 p-3 bg-[#F9F6F1]/5 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F9F6F1]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          {program.testimonials && program.testimonials.length > 0 && (
            <div className="mb-8">
              <h4 
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="600"
                className="text-xl font-bold text-white mb-4"
              >
                What Students Say:
              </h4>
              <div className="grid gap-4">
                {program.testimonials.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={450 + (idx * 50)}
                    data-aos-duration="500"
                    className="p-4 bg-[#F9F6F1]/5 rounded-xl border border-[#C9D1D9]/10"
                  >
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#EE7B30] text-[#EE7B30]" />
                      ))}
                    </div>
                    <p className="text-[#F9F6F1] italic mb-2">"{testimonial.text}"</p>
                    <p className="text-[#C9D1D9] text-sm font-semibold">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            data-aos="flip-up"
            data-aos-delay="550"
            data-aos-duration="600"
            onClick={() => window.open(program.link, program.id === 'whatsapp' ? '_blank' : '_self')}
            className={`w-full group bg-gradient-to-r ${program.gradient} text-white font-bold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,123,48,0.5)] flex items-center justify-center gap-2`}
          >
            <span>{program.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-[#13262F] via-[#0B1922] to-[#13262F]">
      {/* Hero Section */}
      <div className="relative pt-32 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center mb-16"
          >
            <div 
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="600"
              className="inline-flex items-center gap-2 bg-[#EE7B30]/10 border border-[#EE7B30]/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#EE7B30]" />
              <span className="text-[#C9D1D9] text-sm font-medium">Choose Your Path</span>
            </div>
            
            <h1 
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="800"
              className="text-4xl lg:text-7xl font-bold text-white mb-6"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              className="text-[#C9D1D9] text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            >
              Whether you're just starting out or ready to build wealth, we have a program designed to transform your life
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                data-aos="fade-up"
                data-aos-delay={index * 100 + 300}
                data-aos-duration="800"
                data-aos-offset="100"
                className="relative group cursor-pointer"
                onClick={() => setSelectedProgram(program)}
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div 
                    data-aos="fade-down"
                    data-aos-delay={index * 100 + 350}
                    data-aos-duration="600"
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="h-full bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-8 border border-[#C9D1D9]/20 group-hover:border-[#EE7B30] group-hover:shadow-[0_0_50px_rgba(238,123,48,0.4)] transition-all duration-500 group-hover:scale-105">
                  {/* Icon */}
                  <div 
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + 400}
                    data-aos-duration="600"
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Price */}
                  <h3 
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 450}
                    data-aos-duration="600"
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {program.title}
                  </h3>
                  <p 
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 500}
                    data-aos-duration="600"
                    className="text-[#C9D1D9] text-sm mb-4"
                  >
                    {program.tagline}
                  </p>
                  
                  <div 
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 550}
                    data-aos-duration="600"
                    className="flex items-baseline gap-2 mb-6"
                  >
                    <span className="text-3xl font-bold text-[#EE7B30]">{program.price}</span>
                    {program.price !== 'FREE' && (
                      <span className="text-[#C9D1D9] text-xs">one-time</span>
                    )}
                  </div>

                  {/* Description */}
                  <p 
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 600}
                    data-aos-duration="600"
                    className="text-[#C9D1D9] mb-6 leading-relaxed line-clamp-3"
                  >
                    {program.description}
                  </p>

                  {/* Quick Features */}
                  <div className="space-y-2 mb-6">
                    {program.whatYouGet.slice(0, 4).map((item, idx) => (
                      <div 
                        key={idx}
                        data-aos="fade-left"
                        data-aos-delay={index * 100 + 650 + (idx * 50)}
                        data-aos-duration="500"
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#2E8B57] flex-shrink-0" />
                        <span className="text-[#F9F6F1] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button 
                    data-aos="flip-up"
                    data-aos-delay={index * 100 + 800}
                    data-aos-duration="600"
                    className="w-full group/btn bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Section */}
          <div 
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="800"
            data-aos-offset="50"
            className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#F9F6F1]/5 backdrop-blur-xl rounded-3xl p-10 border border-[#C9D1D9]/20"
          >
            <h2 
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-duration="600"
              className="text-3xl font-bold text-white text-center mb-8"
            >
              Not Sure Which Program Is Right for You?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div 
                data-aos="zoom-in"
                data-aos-delay="1100"
                data-aos-duration="600"
                className="text-center p-6 bg-[#13262F]/50 rounded-2xl hover:bg-[#EE7B30]/10 transition-all duration-300 hover:scale-105"
              >
                <Users className="w-12 h-12 text-[#2E8B57] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">New to Remote Work?</h4>
                <p className="text-[#C9D1D9] text-sm mb-4">Start with our free WhatsApp Community</p>
              </div>
              <div 
                data-aos="zoom-in"
                data-aos-delay="1150"
                data-aos-duration="600"
                className="text-center p-6 bg-[#13262F]/50 rounded-2xl hover:bg-[#EE7B30]/10 transition-all duration-300 hover:scale-105"
              >
                <Briefcase className="w-12 h-12 text-[#EE7B30] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Want a Remote Career?</h4>
                <p className="text-[#C9D1D9] text-sm mb-4">Remote Job Training is perfect for you</p>
              </div>
              <div 
                data-aos="zoom-in"
                data-aos-delay="1200"
                data-aos-duration="600"
                className="text-center p-6 bg-[#13262F]/50 rounded-2xl hover:bg-[#EE7B30]/10 transition-all duration-300 hover:scale-105"
              >
                <DollarSign className="w-12 h-12 text-[#C9D1D9] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Ready to Build Wealth?</h4>
                <p className="text-[#C9D1D9] text-sm mb-4">Financial Freedom is your next step</p>
              </div>
            </div>
            <div className="text-center">
              <button 
                data-aos="flip-up"
                data-aos-delay="1300"
                data-aos-duration="600"
                className="group border-2 border-[#C9D1D9]/30 hover:border-[#EE7B30] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#EE7B30]/10"
              >
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
      )}
    </div>
    <Footer />
    </>
  );
}