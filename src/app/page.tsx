import ContactSection from "./components/HomeSection/ContactSection/ContactSection";
import HeroSection from "./components/HomeSection/HeroSection/HeroSection";
import HowItWorksSection from "./components/HomeSection/HowItWork/HowItWork";
import LiveRequestsStats from "./components/HomeSection/LiveRequestStats/LiveRequestStats";
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
        <TopDonorsSection />
      </section>
      <section>
        <LiveRequestsStats />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <ContactSection />
      </section>
    </div>
  );
}
