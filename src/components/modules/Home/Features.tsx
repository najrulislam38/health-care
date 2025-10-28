import Container from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Clock, UserCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Video,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "HD Video Consultations",
    description:
      "Crystal clear video calls with secure, HIPAA-compliant platform",
  },
  {
    id: 2,
    icon: Clock,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Instant Connection",
    description: "Connect with doctors in minutes, available 24/7",
  },
  {
    id: 3,
    icon: UserCheck,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Certified Professionals",
    description: "All doctors are board-certified and verified",
  },
];

export default function Features() {
  return (
    <section className="w-ful py-16 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-8">
                    <div
                      className={`${feature.iconBgColor} rounded-lg size-12 flex items-center justify-center mb-8`}
                    >
                      <Icon
                        className={`size-6 ${feature.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-gray-900 text-xl font-bold  mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
