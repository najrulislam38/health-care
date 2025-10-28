import { HeroBadge } from "./HeroBadge";
import { HeroStats } from "./HeroStats";
import svgPaths from "./../../.././../assets/svg/svg";
import { FloatingCard } from "./FloatingCard";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { HeroProps } from "@/types/hero.types";

export function Hero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  stats,
  image,
  floatingCards,
}: HeroProps) {
  return (
    <div className=" w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #1447E6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Content/Components */}
      <div className="w-full px-4 py-12 lg:py-20 relative">
        <Container>
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
                {/* Badge */}
                {badge && <HeroBadge text={badge.text} icon={badge.icon} />}

                {/* Title */}
                <div className="space-y-2 font-bold">
                  {typeof title === "string" ? (
                    <h1 className="text-gray-900  text-2xl md:text-4xl lg:text-[51px] leading-tight">
                      {title}
                    </h1>
                  ) : (
                    title
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-[15.3px] font-['Inter'] max-w-[584px]">
                  {description}
                </p>

                {/* Buttons */}
                {(primaryButton || secondaryButton) && (
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    {primaryButton && (
                      <button
                        onClick={primaryButton.onClick}
                        className="bg-blue-600 text-white px-8 py-4 rounded-[8px] text-[15.3px] font-medium font-['Inter'] hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 min-w-[240px] cursor-pointer"
                      >
                        {primaryButton.icon || (
                          <div className="size-8px">
                            <svg
                              className="block size-6"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <g>
                                <path
                                  d={svgPaths.p24bc3d00}
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                                <path
                                  d={svgPaths.p3e238c80}
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </g>
                            </svg>
                          </div>
                        )}
                        {primaryButton.text}
                      </button>
                    )}
                    {secondaryButton && (
                      <button
                        onClick={secondaryButton.onClick}
                        className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-[8px] text-[15.3px] font-medium font-['Inter'] hover:bg-blue-50  cursor-pointer hover:text-primary/80 hover:border-primary/80 transition duration-300"
                      >
                        {secondaryButton.text}
                      </button>
                    )}
                  </div>
                )}

                {/* Stats */}
                {stats && stats.length > 0 && <HeroStats stats={stats} />}
              </div>

              {/* Right Image with Floating Cards */}
              <div className="relative w-full max-w-[700px] mx-auto lg:mx-0">
                {image && (
                  <div className="relative h-[438px] rounded-16px overflow-hidden shadow-[0px_12px_30px_-12px_#1447E6]">
                    <Image
                      src={image}
                      alt="Hero"
                      className="w-full h-full object-cover"
                      width={1000}
                      height={1000}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity" />
                  </div>
                )}

                {/* Floating Cards */}
                {floatingCards &&
                  floatingCards.map((card, index) => (
                    <div
                      key={index}
                      className={`absolute ${card.position} animate-in fade-in slide-in-from-bottom-4 duration-700`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <FloatingCard
                        icon={card.icon}
                        title={card.title}
                        subtitle={card.subtitle}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
