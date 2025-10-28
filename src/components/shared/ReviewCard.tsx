import svgPaths from "./../../assets/svg/svg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ReviewCardProps {
  rating: number;
  review: string;
  name: string;
  role: string;
  avatar: string;
  date?: string;
  verified?: boolean;
}

export function ReviewCard({
  rating,
  review,
  name,
  role,
  avatar,
  date,
  verified,
}: ReviewCardProps) {
  return (
    <Card className="bg-white rounded-[12px] border-gray-100 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-[33px] relative">
        {/* Quote Icon */}
        <div className="absolute right-[33px] top-[25px] size-10">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 40 40"
          >
            <g>
              <path
                d={svgPaths.reviewSvg1}
                stroke="#DBEAFE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.reviewSvg1}
                stroke="#DBEAFE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>

        {/* Star Rating with Tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex gap-1 mb-4 cursor-help">
                {[...Array(rating)].map((_, index) => (
                  <div key={index} className="size-5">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <path
                          d={svgPaths.reviewSvg2}
                          stroke="#FACC15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </div>
                ))}
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 text-white px-10 py-5 rounded-md">
              <p>{rating} out of 5 stars</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Review Text */}
        <p className="text-gray-700 mb-6 min-h-[104px]">{review}</p>

        {/* User Info with Hover Card */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-center gap-4 cursor-pointer">
              <Avatar className="size-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-gray-900">{name}</p>
                  {verified && (
                    <Badge
                      variant="default"
                      className="bg-blue-600 text-white px-2 py-0.5 h-5"
                    >
                      Verified
                    </Badge>
                  )}
                </div>
                <Badge
                  variant="secondary"
                  className="mt-1 bg-transparent border-0 p-0 text-gray-600"
                >
                  {role}
                </Badge>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar className="size-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm">{name}</h4>
                <p className="text-sm text-gray-600">{role}</p>
                {date && (
                  <p className="text-xs text-gray-500">Reviewed on {date}</p>
                )}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
}
