import { Helmet } from "react-helmet-async";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { img } from "../data/siteConfig";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Yumloop</title>
      </Helmet>
      <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-coffee-950">
        <img src={img("1495474472287-4d71bcdd2085")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-coffee-950/70" />
        <Container className="relative text-center flex flex-col items-center gap-5">
          <span className="font-display text-7xl md:text-9xl font-bold text-cream-50">404</span>
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-cream-50">
            This loop led nowhere.
          </h1>
          <p className="text-cream-300 max-w-md">
            The page you're looking for doesn't exist. Let's get you back to something delicious.
          </p>
          <Button to="/" size="lg">
            Back to Home
          </Button>
        </Container>
      </section>
    </>
  );
}
