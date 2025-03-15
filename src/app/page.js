import ContactHome from "@/components/UI/Contact-Home/ContactHome";
import FinalHero from "@/components/UI/Hero/FinalHero";
import { IoChatbox } from "react-icons/io5";
import OurClient from "@/components/UI/OurClient/OurClient";
import OurService from "@/components/UI/OurService/OurService";
import Performance from "@/components/UI/Performance/Performance";
import TeamMember from "@/components/UI/TeamMember/TeamMember";
import Testimonials from "@/components/UI/Testimonials/Testimonials";
import WhyChooseUs from "@/components/UI/WhyChooseUs/WhyChooseUs";
import WhyTrustUs from "@/components/UI/WhyTrustUs/WhyTrustUs";

export default function Home() {
  
  return (
    <div className="relative">
      <FinalHero></FinalHero>
      <OurService></OurService>
      <WhyChooseUs></WhyChooseUs>
      <WhyTrustUs />
      <Performance></Performance>
      <OurClient></OurClient>
      <ContactHome></ContactHome>
      {/* <Testimonials></Testimonials> */}
      <TeamMember />
    </div>
  );
}


