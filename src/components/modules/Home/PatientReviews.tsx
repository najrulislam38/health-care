import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/shared/ReviewCard";
import Container from "@/components/shared/Container";

const allReviews = [
  {
    id: 1,
    rating: 5,
    review:
      "The AI doctor matching system is incredible! I found the perfect specialist for my condition in minutes. The whole experience was seamless and professional.",
    name: "Jennifer Martinez",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
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
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
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
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    date: "March 8, 2024",
    verified: false,
    category: "all",
  },
];

export default function PatientReviews() {
  return (
    <div className="w-full py-20 px-4">
      <Container>
        <div className="w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4 ">
              What Our Patients Say
            </h1>
            <p className="text-gray-600 max-w-[672px] mx-auto">
              Real experiences from real patients who found their perfect
              healthcare match
            </p>
          </div>

          {/* Reviews Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

          {/* Button */}
          <div className="flex justify-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-[8px] h-12 cursor-pointer">
              Read More Reviews
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
