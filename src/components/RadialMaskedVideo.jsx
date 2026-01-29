import { useEffect, useState } from "react";
import video from "../assets/video.mp4";
import "./RadialMaskedVideo.css";

export default function RadialMaskedVideo() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Layer */}
      <div className="radial-masked-bg demo" />
      
      {/* Video Layer with Mask */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={video}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          zIndex: 1,
          WebkitMaskImage: `radial-gradient(
            ellipse 430px 325px at ${pos.x}% ${pos.y}%,
            rgba(217,217,217,0) 0%,
            rgba(191,191,191,0.3) 36%,
            rgba(166,166,166,0.2) 58%,
            rgba(115,115,115,0) 100%
          )`,
          maskImage: `radial-gradient(
            ellipse 430px 325px at ${pos.x}% ${pos.y}%,
            rgba(217,217,217,0) 0%,
            rgba(191,191,191,0.3) 36%,
            rgba(166,166,166,0.2) 58%,
            rgba(115,115,115,0) 100%
          )`,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#6b63f1]">AI-Powered Customer</span>
            <br />
            <span className="text-white">Engagement for Enterprises</span>
          </h1>
          
          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl opacity-90">
            Helping large organizations unify CRM, CXM, and AI to deliver personalized, compliant, and high-performing customer experience.
          </p>
          
          {/* CTA Button */}
          <button className="bg-[#6b63f1] hover:bg-[#5a52d8] text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors flex items-center gap-2">
            Get in Touch
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
