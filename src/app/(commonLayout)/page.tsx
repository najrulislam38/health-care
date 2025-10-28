"use client";
import { Hero } from "@/components/modules/Home/Hero/HeroSection";
import svgPaths from "./../../assets/svg/svg";
import heroImage from "./../../assets/images/heroImage.jpg";
import Specialties from "@/components/modules/Home/Specialities";
import Features from "@/components/modules/Home/Features";
import TopDoctors from "@/components/modules/Home/TopDoctors";
import PatientReviews from "@/components/modules/Home/PatientReviews";

export default function Home() {
  return (
    <>
      <Hero
        badge={{
          text: "Telemedicine Platform",
        }}
        title={
          <h1 className="text-gray-900 text-[51px] leading-[60px] font-['Inter']">
            Consult Top Doctors via{" "}
            <span className="text-blue-600">Video Call</span> Anytime
          </h1>
        }
        description="Connect with certified doctors through secure video consultations from the comfort of your home. Our AI-powered system matches you with the right specialist for your needs in seconds."
        primaryButton={{
          text: "Start Video Consultation",
          onClick: () => alert("Starting consultation..."),
        }}
        secondaryButton={{
          text: "Learn More",
          onClick: () => alert("Learn more..."),
        }}
        stats={[
          { value: "24/7", label: "Available" },
          { value: "5K+", label: "Doctors Online" },
          { value: "50K+", label: "Consultations" },
        ]}
        image={heroImage.src}
        floatingCards={[
          {
            icon: (
              <div className="bg-green-500 rounded-full p-3 size-48px flex items-center justify-center shrink-0">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <g>
                    <path
                      d={svgPaths.p1c4d0dc0}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d={svgPaths.p4207a00}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            ),
            title: "Live Consultation",
            subtitle: "Dr. Sarah Johnson",
            position: "bottom-8 left-6",
          },
          {
            icon: (
              <div className="bg-blue-100 rounded-8px size-48px p-3 flex items-center justify-center shrink-0">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <g>
                    <path
                      d={svgPaths.p296ad200}
                      stroke="#2563EB"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 3V7"
                      stroke="#2563EB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M22 5H18"
                      stroke="#2563EB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 17V19"
                      stroke="#2563EB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M5 18H3"
                      stroke="#2563EB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            ),
            title: "AI Matching",
            subtitle: "Finding best doctor...",
            position: "bottom-[-20px] left-[-24px]",
          },
          {
            icon: (
              <div className="bg-green-100 rounded-8px p-3 size-48px flex items-center justify-center shrink-0">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <g>
                    <path
                      d="M16 11L18 13L22 9"
                      stroke="#16A34A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d={svgPaths.p1d820380}
                      stroke="#16A34A"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d={svgPaths.p161d4800}
                      stroke="#16A34A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            ),
            title: "Verified Doctor",
            subtitle: "Ready to connect",
            position: "top-[-24px] right-[-24px]",
          },
        ]}
      />
      <main>
        <Features />
        <Specialties />
        <TopDoctors />
        <PatientReviews />
      </main>
    </>
  );
}
