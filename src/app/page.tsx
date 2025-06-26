import CallToActionSection from "./components/HomeSection/CallToAction/CallToAction";
import ContactSection from "./components/HomeSection/ContactSection/ContactSection";
import EventsSection from "./components/HomeSection/Event/Event";
import FAQSection from "./components/HomeSection/FAQ/FAQ";
import HeroSection from "./components/HomeSection/HeroSection/HeroSection";
import HowItWorksSection from "./components/HomeSection/HowItWork/HowItWork";
import LiveRequestsStats from "./components/HomeSection/LiveRequestStats/LiveRequestStats";
import NewsletterSection from "./components/HomeSection/NewsLetter/NewsLetter";
import Testimonials from "./components/HomeSection/Testimonials/Testimonials";
import TopDonorsSection from "./components/HomeSection/TopDonor/TopDonor";
import WhyDonateSection from "./components/HomeSection/WhyDonateSection/WhyDonate";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section>
        <WhyDonateSection />
      </section>
      <section>
        <HowItWorksSection />
      </section>
      <section>
        <LiveRequestsStats />
      </section>
      <section>
        <TopDonorsSection />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <EventsSection />
      </section>
      <section>
        <CallToActionSection />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <NewsletterSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </div>
  );
}
