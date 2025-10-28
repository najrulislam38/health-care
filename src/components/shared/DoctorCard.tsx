import { Star, Briefcase, MapPin, Video } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  location: string;
  reviews: number;
  available: boolean;
}

export function DoctorCard({
  image,
  name,
  specialty,
  rating,
  experience,
  location,
  reviews,
  available,
}: DoctorCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-[12px] border-gray-200 w-full max-w-[300px]">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative h-[256px] w-full">
          <Image
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
            width={500}
            height={400}
          />

          {/* Rating Badge */}
          <Badge
            variant="secondary"
            className="absolute top-4 right-4 bg-white h-[28px] rounded-full px-3 gap-1 flex items-center"
          >
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-slate-900 font-medium">{rating}</span>
          </Badge>

          {/* Available Badge */}
          {available && (
            <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-500 h-[24px] rounded-full px-3 gap-2 flex items-center">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white">Available Now</span>
            </Badge>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6">
          {/* Name */}
          <h3 className="text-gray-900 text-lg font-bold mb-2">{name}</h3>

          {/* Specialty */}
          <p className="text-blue-600 font-medium mb-4">{specialty}</p>

          {/* Experience and Location */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4 stroke-gray-600" />
              <span>{experience} experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 stroke-gray-600" />
              <span>{location}</span>
            </div>
          </div>

          {/* Footer with Reviews and Button */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-gray-600">{reviews} reviews</span>
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-600 hover:bg-transparent gap-2 px-0 h-auto cursor-pointer"
            >
              <Video className="w-4 h-4" />
              Video Call
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
