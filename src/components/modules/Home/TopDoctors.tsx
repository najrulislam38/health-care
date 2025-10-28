import { DoctorCard } from "@/components/shared/DoctorCard";
import Container from "@/components/shared/Container";

const doctors = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    location: "New York, NY",
    reviews: 234,
    available: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    experience: "12 years",
    location: "Los Angeles, CA",
    reviews: 189,
    available: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 5,
    experience: "18 years",
    location: "Chicago, IL",
    reviews: 312,
    available: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    name: "Dr. James Williams",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    experience: "20 years",
    location: "Houston, TX",
    reviews: 267,
    available: true,
  },
];

export default function TopDoctors() {
  return (
    <section className="py-20 px-4">
      <Container>
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
              Connect with Top Doctors Online
            </h2>
            <p className="text-gray-600">
              Board-certified specialists available for video consultations
            </p>
          </div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                image={doctor.image}
                name={doctor.name}
                specialty={doctor.specialty}
                rating={doctor.rating}
                experience={doctor.experience}
                location={doctor.location}
                reviews={doctor.reviews}
                available={doctor.available}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
