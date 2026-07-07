import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Shaima Azimi",
    country: "United States",
    initial: "S",
    text: "I've had a great experience with the online Quran teacher for my children. The tutors are very effective and explain the lessons in a way that kids can easily understand.",
  },
  {
    id: 2,
    name: "Doraani Family",
    country: "Canada",
    initial: "D",
    text: "The best online Quran academy for kids! My children have learned so much in a short time. The teachers are patient, professional, and very caring.",
  },
  {
    id: 3,
    name: "Alia Jalil",
    country: "Australia",
    initial: "A",
    text: "It's a good academy with professional teachers. Although it's online, my son got really good benefit. He can now read Quran and also do Namaz. Alhamdulillah!",
  },
  {
    id: 4,
    name: "Fatima Zahra",
    country: "United Kingdom",
    initial: "F",
    text: "Highly professional teachers and a very organized system. We have seen significant improvement in our children's recitation. Truly recommended!",
  },
  {
    id: 5,
    name: "Zainab Khan",
    country: "Canada",
    initial: "Z",
    text: "Excellent communication and very flexible scheduling. My daughter feels very comfortable with her teacher. May Allah reward them for their efforts.",
  },
  {
    id: 6,
    name: "Hafsa Mahmood",
    country: "Denmark",
    initial: "H",
    text: "Truly professional and well-structured. Perfect for busy families who want quality Quranic education. Highly recommended for everyone!",
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#0E2E54] text-white py-24">
      <div className="container mx-auto px-4 lg:px-10">
      <div className="inner text-center">
        
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-[1px] w-8 bg-[#3b85c2]"></div>
          <span className="text-[#3b85c2] font-bold text-[12px] tracking-[0.15em] uppercase">Student Reviews</span>
          <div className="h-[1px] w-8 bg-[#3b85c2]"></div>
        </div>
        
        <h2 className="text-3xl md:text-[38px] lg:text-[42px] text-white font-bold leading-[1.2] mt-4 mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>
          Trusted by Families, <span className="text-[#6FB8EA] italic">Loved by Students</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {testimonials.map(t => (
            <div className="bg-[#173a61] p-8 rounded-[16px] border border-white/[0.04] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full" key={t.id}>
              <div className="flex gap-1 text-[#3b85c2] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-[#b4c8d9] mb-8 leading-[1.7] text-[14.5px] flex-grow">{t.text}</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-[42px] h-[42px] rounded-full bg-[#3b85c2] flex items-center justify-center font-bold text-[15px]">{t.initial}</div>
                <div>
                  <h5 className="font-bold text-white text-[14.5px]" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</h5>
                  <p className="text-[12.5px] text-[#7095b5]">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
