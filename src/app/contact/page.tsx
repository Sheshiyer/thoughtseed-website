import { ContactForm } from "../../components/contact/contact-form";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full py-12 md:py-24 relative">
      <WavyBackground className="absolute top-0 left-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-300">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
