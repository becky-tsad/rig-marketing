import Container from "@/components/ui/Container";

const stats = [
  { value: "50+", label: "Businesses Grown Since 2018" },
  { value: "3x", label: "Average Client Growth in Year One" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "200+", label: "Campaigns Launched" },
];

export default function SocialProofBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <Container className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-navy-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
