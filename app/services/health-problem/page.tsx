import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";

const contentData = [
{
  header: "Health and Astrology",
  paragraph1:
    "Astrology reveals hidden health issues through your birth chart. Psychic Krishna Sai, a renowned Health Problem Specialist, explains that planets and their positions can indicate potential health challenges. According to Psychic Krishna Sai, the 6th, 8th, and 12th houses are particularly relevant — the 6th relates to diseases and immunity, the 8th to longevity and serious conditions, and the 12th to mental health and recovery. Planets like the Sun, Moon, Mars, and Saturn are linked to body parts, and their alignments can signal possible health problems.",
  imageSrc:
    "https://www.indastro.com/img/upload/16697213741533895343Medical-Astrolog.jpg",
  paragraph2:
    "Each planet governs specific body parts. For example, the Sun governs the heart, the Moon influences mental health, and Mars rules blood and muscles. The insights of a Health Problem Specialist help in identifying imbalances early and guiding preventive remedies.",
  paragraph3:
    "Predictive astrology helps in early diagnosis and prevention. Consulting a Health Problem Specialist like Psychic Krishna Sai ensures that individuals receive both astrological guidance and practical advice for maintaining wellness.",
}
,
  {
    header: "Planetary Causes",
    paragraph1:
      "Malefic <b>Mars</b> causes accidents, <b>Saturn</b> delays healing, while <b>Rahu</b> can cause addiction. Planetary aspects in your chart reveal potential vulnerabilities to illness.",
    imageSrc: "/images/service/helath/second1.jpg",
    paragraph2:
      "The 6th, 8th, and 12th houses reflect chronic health concerns. Sun links to vitality, Moon to emotions, and malefics like Saturn often point to prolonged issues.",
    paragraph3:
      "Dasha periods reveal the timing and severity of illness. Negative aspects often highlight weak areas in the body.",
  },
  {
    header: "Healing Remedies",
    paragraph1:
      "Astrological <b>remedies</b> like mantras, yantras, and poojas restore health and reduce suffering. If you face long-term health problems without cure, these remedies offer balance.",
    imageSrc:
      "https://astroashram.com//uploads/blog/32120ecb2732b343989e75fa78dd79aa.jpg",
    paragraph2:
      "Rudraksha, fasting, and gemstone therapy align body and mind energies. The Moon governs psychological well-being while the Sun maintains vitality.",
    paragraph3:
      "Spiritual healing complements medical treatment for quicker recovery. The 12th house indicates hospitalization, while other houses show recovery paths.",
  },
  {
    header: "Strengthen Your Health",
    paragraph1:
      "We provide personalized <b>health astrology</b> guidance based on your kundali. Planetary positions indicate potential issues and remedies for wellness.",
    imageSrc: "/images/service/helath/second2.jpg",
    paragraph2:
      "Find favorable times for surgeries, recovery, or boosting immunity. Health astrology aligns cosmic energies with physical well-being.",
    paragraph3:
      "Keep your energy strong and chakras balanced for lifelong vitality. Cosmic events profoundly influence mind and body.",
  },
];

const title = "Health Problem Solutions";
const bannerImage = "/images/services/health-problem-banner.jpg"; // Ensure correct path

const HealthProblem: React.FC = () => {
  return (
    <div className="bg-white">
      <SectionService
        contentData={contentData}
        title={title}
        bannerImage={bannerImage}
      />
      <div className="mt-2">
        <Faq />
      </div>
    </div>
  );
};

export default HealthProblem;
