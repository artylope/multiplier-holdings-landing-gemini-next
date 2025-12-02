import Hero from "@/app/components/careers/CareersHero";
import WorkStyle from "@/app/components/careers/WorkStyle";
import OpenPositions from "@/app/components/careers/OpenPositions";
import TeamPhotos from "@/app/components/careers/TeamPhotos";
import EmployeeVoices from "@/app/components/careers/EmployeeVoices";

export default function Careers() {
  return (
    <div>
      <Hero />
      <WorkStyle />
      <OpenPositions />
      <TeamPhotos />
      <EmployeeVoices />
    </div>
  );
}
