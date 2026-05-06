import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior experience to join the class?",
    answer: "No experience is needed. Our program is designed for beginners and professionals looking to switch to remote work."
  },
  {
    question: "Is the job guaranteed after completing the course?",
    answer: "While we provide expert guidance and job application strategies, securing a job depends on your effort and interviews."
  },
  {
    question: "How long is the training program?",
    answer: "Our main remote job coaching program runs for 2 days, with recorded materials for flexibility."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, the price you get covers all materials, coaching, and access to our community."
  },
  {
    question: "Do I get support after the course ends?",
    answer: "Yes! Students have access to our private telegram group and alumni network for ongoing support."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#0B1922] via-[#13262F] to-[#0B1922] py-10 sm:py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-aos-offset="50"
              className="border border-neutral-gray rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,123,48,0.2)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-[#13262F] text-white flex justify-between items-center font-semibold hover:bg-[#EE7B30]/20 transition-all duration-300 group"
              >
                <span 
                  data-aos="fade-right"
                  data-aos-delay={index * 100 + 50}
                  data-aos-duration="600"
                  className="group-hover:text-[#EE7B30] transition-colors duration-300"
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 100}
                  data-aos-duration="500"
                  className={`transform transition-all duration-300 ${openIndex === index ? 'rotate-180 text-[#EE7B30]' : 'text-[#C9D1D9] group-hover:text-[#EE7B30]'}`}
                />
              </button>
              
              {openIndex === index && (
                <div 
                  data-aos="fade-down"
                  data-aos-duration="500"
                  className="px-6 py-4 bg-[#0B1922]/50 text-[#C9D1D9] text-base md:text-lg border-t border-[#EE7B30]/20"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}