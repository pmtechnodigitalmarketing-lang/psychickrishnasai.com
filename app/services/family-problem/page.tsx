import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";

const contentData = [
{
  header: "Root of Conflicts",
  paragraph1:
    "Family issues such as misunderstandings, disrespect, or emotional disconnection often disturb peace at home. Psychic Krishna Sai, a renowned Family Problem Specialist, explains that astrology can reveal hidden causes of disputes by analyzing planetary positions. According to Psychic Krishna Sai, Vedic astrology specifically studies the 2nd, 4th, and 7th houses in a birth chart—when afflicted by Saturn, Rahu, Ketu, or Mars, they can trigger quarrels and misunderstandings.",
  imageSrc:
    "https://www.bengalijyotishcenter.com/wp-content/uploads/2025/05/2148548614.jpg",
  paragraph2:
    "Ego clashes, generational gaps, and financial stress are common triggers. When conflicts arise—between parents and children, husband and wife, in-laws, or siblings—they affect the entire family’s emotional well-being. The guidance of a Family Problem Specialist helps to uncover these hidden issues and provide remedies to restore balance.",
  paragraph3:
    "Astrology provides clarity on these underlying causes and offers practical solutions. Consulting an experienced Family Problem Specialist like Psychic Krishna Sai ensures harmony is rebuilt through spiritual remedies and compassionate guidance.",
}
,
  {
    header: "Astrological Causes",
    paragraph1:
      "Planetary placements such as Moon, Mars, Rahu, and Saturn strongly influence family dynamics. Negative aspects on the 4th house—the house of family—often bring emotional stress. Psychic Krishna Sai, an experienced Family Problem Specialist, explains that Pitra Dosh or ancestral imbalances can also cause recurring issues such as health problems, financial instability, and family disharmony.",
    imageSrc:
      "https://www.astrotaare.com/uploads/blogs/1699002784WhatsApp%20Image%202023-11-03%20at%2014.41.35.jpeg",
    paragraph2:
      "Weak family houses or specific doshas in the horoscope can lead to emotional breakdowns and constant misunderstandings. Astrology helps reveal these hidden patterns and provides targeted remedies.",
    paragraph3:
      "Even planetary cycles like Sade Sati can intensify family stress. Understanding these astrological timings with the help of a Family Problem Specialist like Psychic Krishna Sai ensures better preparedness and harmony.",
  },
  {
    header: "Spiritual Solutions",
    paragraph1:
      "Psychic Krishna Sai recommends spiritual remedies such as Graha Shanti, Navagraha poojas, and chanting family harmony mantras. As a trusted Family Problem Specialist, he analyzes horoscopes to suggest mantras, gemstones, and rituals that resolve family conflicts and bring peace at home.",
    imageSrc:
      "https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/132507395_4-Best-Astrological-Remedies-for-Family-Issues.jpg",
    paragraph2:
      "Joint horoscope analysis of family members often reveals the deeper causes of conflicts. Remedies aligned with these insights help reduce emotional strain and encourage unity.",
    paragraph3:
      "By applying these divine remedies, families can restore balance, promote forgiveness, and open the door to love and mutual respect.",
  },
  {
    header: "Peaceful Living",
    paragraph1:
      "Daily prayers, wearing harmony-generating gemstones, and regular pujas can ensure long-term peace. Psychic Krishna Sai, a renowned Family Problem Specialist, highlights the importance of balancing the 4th house, known as the 'House of Happiness,' to restore emotional security and family bonding.",
    imageSrc:
      "https://astrotalk.com/astrology-blog/wp-content/uploads/2020/01/Astrological-Remedies-to-Bring-Happiness-in-Your-Home-e1580479277272.jpeg",
    paragraph2:
      "Vastu corrections in the home also play a vital role in restoring harmony. Rahu can cause deceit and misunderstandings, while Ketu often results in detachment and lack of communication. These influences can be neutralized with the right remedies.",
    paragraph3:
      "Astrology, when guided by Psychic Krishna Sai, lights the way for a loving and respectful family environment where peace and happiness can flourish.",
  },
];

const title = "Family Problem Solutions";
const bannerImage = "/images/services/family-problem-banner.jpg"; // Update this path as needed

const FamilyProblems = () => {
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

export default FamilyProblems;
