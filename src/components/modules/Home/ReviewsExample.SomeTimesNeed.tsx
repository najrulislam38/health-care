import { useState } from "react";
import { ReviewCard } from "./components/ReviewCard";
import { ReviewsCarousel } from "./components/ReviewsCarousel";
import { ReviewsSkeleton } from "./components/ReviewsSkeleton";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Separator } from "./components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { ScrollArea } from "./components/ui/scroll-area";
import { Progress } from "./components/ui/progress";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";
import imgImage from "figma:asset/79d1ef262e7923019a44780c3064a109e9138066.png";
import imgImage1 from "figma:asset/fde415d3b9fcf76175fc5b3994652adaacba32d2.png";
import imgImage2 from "figma:asset/41dbd95539264b46661146ee082ace5434ee6572.png";

const allReviews = [
  {
    id: 1,
    rating: 5,
    review:
      "The AI doctor matching system is incredible! I found the perfect specialist for my condition in minutes. The whole experience was seamless and professional.",
    name: "Jennifer Martinez",
    role: "Patient",
    avatar: imgImage,
    date: "March 15, 2024",
    verified: true,
    category: "all",
  },
  {
    id: 2,
    rating: 5,
    review:
      "I was skeptical at first, but Health-Care exceeded my expectations. The AI matched me with a doctor who truly understood my needs. Highly recommend!",
    name: "Robert Thompson",
    role: "Patient",
    avatar: imgImage1,
    date: "March 10, 2024",
    verified: true,
    category: "all",
  },
  {
    id: 3,
    rating: 5,
    review:
      "Finding a good pediatrician for my kids was always stressful. This platform made it so easy! The AI suggestions were spot-on and saved me so much time.",
    name: "Lisa Anderson",
    role: "Patient",
    avatar: imgImage2,
    date: "March 8, 2024",
    verified: false,
    category: "all",
  },
  {
    id: 4,
    rating: 5,
    review:
      "The platform connected me with a cardiologist who was exactly what I needed. The booking process was smooth and the follow-up care recommendations were excellent.",
    name: "Michael Chen",
    role: "Patient",
    avatar: imgImage,
    date: "March 5, 2024",
    verified: true,
    category: "specialists",
  },
  {
    id: 5,
    rating: 4,
    review:
      "Great service overall. The AI matching was accurate and saved me a lot of research time. Would definitely use again for finding healthcare providers.",
    name: "Sarah Williams",
    role: "Patient",
    avatar: imgImage1,
    date: "March 1, 2024",
    verified: true,
    category: "general",
  },
  {
    id: 6,
    rating: 5,
    review:
      "Outstanding experience! The virtual consultation feature is a game-changer. I got expert medical advice without leaving my home.",
    name: "David Brown",
    role: "Patient",
    avatar: imgImage2,
    date: "February 28, 2024",
    verified: false,
    category: "telemedicine",
  },
];

export default function PatientReviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("recent");
  const [showCarousel, setShowCarousel] = useState(false);

  const ratingDistribution = [
    { stars: 5, percentage: 85, count: 124 },
    { stars: 4, percentage: 10, count: 15 },
    { stars: 3, percentage: 3, count: 4 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 1, count: 1 },
  ];

  return (
    <div className="w-full min-h-screen bg-white py-[48px] px-[16px] md:px-[32px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-[48px]">
          <h1 className="text-gray-900 mb-[16px]">What Our Patients Say</h1>
          <p className="text-gray-600 max-w-[672px] mx-auto">
            Real experiences from real patients who found their perfect
            healthcare match
          </p>
        </div>

        <Separator className="mb-[32px]" />

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] mb-[32px]">
          <div className="flex items-center gap-[16px]">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Statistics</Button>
              </DialogTrigger>
              <DialogContent className="max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Review Statistics</DialogTitle>
                  <DialogDescription>
                    Overall rating distribution from our patients
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[300px] w-full pr-4">
                  <div className="space-y-4">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{item.stars} Stars</span>
                          <span className="text-sm text-gray-500">
                            {item.count} reviews
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-[12px]">
            <Switch
              id="carousel-mode"
              checked={showCarousel}
              onCheckedChange={setShowCarousel}
            />
            <Label htmlFor="carousel-mode" className="cursor-pointer">
              Carousel View
            </Label>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="all" className="mb-[48px]">
          <TabsList className="grid w-full md:w-auto grid-cols-4 mb-[32px]">
            <TabsTrigger value="all">All Reviews</TabsTrigger>
            <TabsTrigger value="specialists">Specialists</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="telemedicine">Telemedicine</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {isLoading ? (
              <ReviewsSkeleton />
            ) : showCarousel ? (
              <ReviewsCarousel reviews={allReviews.slice(0, 3)} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px]">
                {allReviews.slice(0, 3).map((review) => (
                  <ReviewCard
                    key={review.id}
                    rating={review.rating}
                    review={review.review}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    date={review.date}
                    verified={review.verified}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="specialists" className="mt-0">
            {isLoading ? (
              <ReviewsSkeleton />
            ) : showCarousel ? (
              <ReviewsCarousel
                reviews={allReviews.filter((r) => r.category === "specialists")}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px]">
                {allReviews
                  .filter((review) => review.category === "specialists")
                  .map((review) => (
                    <ReviewCard
                      key={review.id}
                      rating={review.rating}
                      review={review.review}
                      name={review.name}
                      role={review.role}
                      avatar={review.avatar}
                      date={review.date}
                      verified={review.verified}
                    />
                  ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="general" className="mt-0">
            {isLoading ? (
              <ReviewsSkeleton />
            ) : showCarousel ? (
              <ReviewsCarousel
                reviews={allReviews.filter((r) => r.category === "general")}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px]">
                {allReviews
                  .filter((review) => review.category === "general")
                  .map((review) => (
                    <ReviewCard
                      key={review.id}
                      rating={review.rating}
                      review={review.review}
                      name={review.name}
                      role={review.role}
                      avatar={review.avatar}
                      date={review.date}
                      verified={review.verified}
                    />
                  ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="telemedicine" className="mt-0">
            {isLoading ? (
              <ReviewsSkeleton />
            ) : showCarousel ? (
              <ReviewsCarousel
                reviews={allReviews.filter(
                  (r) => r.category === "telemedicine"
                )}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px]">
                {allReviews
                  .filter((review) => review.category === "telemedicine")
                  .map((review) => (
                    <ReviewCard
                      key={review.id}
                      rating={review.rating}
                      review={review.review}
                      name={review.name}
                      role={review.role}
                      avatar={review.avatar}
                      date={review.date}
                      verified={review.verified}
                    />
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <Separator className="mb-[32px]" />

        {/* Button */}
        <div className="flex justify-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-[32px] py-[12px] rounded-[8px] h-[48px]"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000);
            }}
          >
            Read More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
