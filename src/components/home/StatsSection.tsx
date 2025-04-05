
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Stat = {
  value: number;
  label: string;
  suffix: string;
  duration: number;
};

const stats: Stat[] = [
  {
    value: 250,
    label: "Clients Served",
    suffix: "+",
    duration: 2000
  },
  {
    value: 15,
    label: "Industry Experience",
    suffix: "M+",
    duration: 2500
  },
  {
    value: 500,
    label: "Campaigns Managed",
    suffix: "+",
    duration: 2200
  },
  {
    value: 300,
    label: "ROI Increase",
    suffix: "%",
    duration: 1800
  }
];

const CountUp = ({ stat, isVisible }: { stat: Stat; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = stat.value;
      const duration = stat.duration;
      const increment = end / (duration / 16);
      
      if (countRef.current) clearInterval(countRef.current);
      
      countRef.current = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(countRef.current as NodeJS.Timeout);
        }
      }, 16);
    }
    
    return () => {
      if (countRef.current) clearInterval(countRef.current);
    };
  }, [isVisible, stat]);

  return (
    <span>
      {count}
      {stat.suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden bg-dark-blue-gradient">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "48px 48px"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-advizall-darkGray/30 backdrop-blur-sm border border-advizall-vividBlue-light/20 rounded-lg shadow-md hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-advizall-white mb-2">
                <CountUp stat={stat} isVisible={inView} />
              </h3>
              <p className="text-advizall-silver-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
