import React from 'react';

const events = [
  {
    day: "1",
    month: "SHAWWAL",
    title: "Eid al-Fitr",
    desc: "Marks the end of Ramadan, the holy month of fasting, with gratitude and celebration.",
    action: "Learn More"
  },
  {
    day: "10",
    month: "DHUL HIJJA",
    title: "Eid al-Adha",
    desc: "Commemorates the willingness of Prophet Ibrahim (AS) to sacrifice all in obedience to Allah.",
    action: "Explore Details"
  },
  {
    day: "12",
    month: "RABI AL-AWWAL",
    title: "Mawlid al-Nabi",
    desc: "An occasion to reflect on the life, teachings, and exemplary character of Prophet Muhammad (ﷺ).",
    action: "Find Out More"
  },
  {
    day: "27",
    month: "RAJAB",
    title: "Lailat al-Miraj",
    desc: "Marks the miraculous night journey of Prophet Muhammad (ﷺ) to Jerusalem and his ascension.",
    action: "Get Involved"
  }
];

const Events = () => {
  return (
    <section className="py-24 bg-[#F4FAFF] text-center">
      <div className="container mx-auto px-4 lg:px-10">
      <div className="inner">
        
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-[1px] w-8 bg-[#7fb8e1]"></div>
          <span className="text-[#1668A3] font-bold text-[12px] tracking-[0.15em] uppercase">Islamic Events</span>
          <div className="h-[1px] w-8 bg-[#7fb8e1]"></div>
        </div>
        
        <h2 className="font-serif text-[32px] md:text-[38px] lg:text-[42px] text-[#102e52] font-bold leading-[1.2] mt-4 mb-6">
          Moments Become <span className="text-[#1668A3] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Memories</span>
        </h2>
        <p className="text-[#6a859c] max-w-2xl mx-auto mb-16 text-[15.5px]">
          Celebrate and learn about the most sacred occasions in the Islamic calendar with your community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {events.map((event, index) => (
            <div className="flex flex-col rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden group" key={index}>
              
              <div className="bg-gradient-to-r from-[#1668A3] to-[#2F8FD1] text-white p-5 flex items-baseline gap-2">
                <span className="font-serif text-[32px] font-bold leading-none">{event.day}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">{event.month}</span>
              </div>
              
              <div className="bg-white p-7 flex flex-col flex-grow border-x border-b border-slate-100/50 rounded-b-[16px]">
                <h4 className="text-[15.5px] font-bold text-[#102e52] mb-3">{event.title}</h4>
                <p className="text-[13px] text-[#6a859c] mb-6 leading-relaxed flex-grow">{event.desc}</p>
                <a href="#" className="inline-block text-[#1668A3] font-bold text-[12.5px] group-hover:text-[#3b82f6] transition-colors">{event.action} ➔</a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Events;
