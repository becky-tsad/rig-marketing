import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center bg-white">
      <Container className="text-center">
        <h1 className="text-8xl font-extrabold text-navy-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
