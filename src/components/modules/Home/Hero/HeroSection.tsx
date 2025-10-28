import { ReactNode } from "react";
import { HeroBadge } from "./HeroBadge";
import { HeroStats } from "./HeroStats";
import svgPaths from "./../../.././../assets/svg/svg";
import { FloatingCard } from "./FloatingCard";
import Image from "next/image";
import Container from "@/components/shared/Container";

export interface HeroProps {
  badge?: {
    text: string;
    icon?: ReactNode;
  };
  title: string | ReactNode;
  description: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
    icon?: ReactNode;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  stats?: Array<{ value: string; label: string }>;
  image?: string;
  floatingCards?: Array<{
    icon: ReactNode;
    title: string;
    subtitle: string;
    position: string;
  }>;
}

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
    <div className="w-full px-4 py-12 lg:py-20">
      <Container>
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
              {/* Badge */}
              {badge && <HeroBadge text={badge.text} icon={badge.icon} />}

              {/* Title */}
              <div className="space-y-2 font-bold text-4xl lg:text-[51px] leading-tight">
                {typeof title === "string" ? (
                  <h1 className="text-gray-900 font-['Inter']">{title}</h1>
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
                      className="bg-blue-600 text-white px-8 py-4 rounded-8px text-[15.3px] font-medium font-['Inter'] hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 min-w-240px"
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
                      className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-8px text-[15.3px] font-medium font-['Inter'] hover:bg-blue-50 transition-colors"
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
                <div className="relative h-[438px] rounded-16px overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                  <Image
                    src={image}
                    alt="Hero"
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity" />
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
  );
}
