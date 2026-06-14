import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-900">
      <Container className="text-center">
        <p className="font-serif text-7xl font-bold text-gold-400">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-white">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-navy-100">
          The page you are looking for may have been moved or no longer exists.
          Let us help you find your way back.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
