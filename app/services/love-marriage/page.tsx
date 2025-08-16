import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";

const title = "Love Marriage Solutions";
const bannerImage = "/images/services/love-marriage-banner.jpg"; // Update this path as needed

const contentData = [
 {
  header: "Facing Opposition?",
  paragraph1:
    "Are your parents, society, or religion opposing your <b>love marriage</b>? Facing opposition in a <b>love marriage</b> can be emotionally draining, but astrology offers potential <b>love marriage solutions</b> by analyzing birth charts and suggesting remedies. Psychic Krishna Sai, a renowned Love Marriage Specialist, explains that opposition often arises from family disapproval, caste differences, or planetary influences. With the guidance of Psychic Krishna Sai, couples receive powerful astrological remedies and support to strengthen their bond and overcome challenges.",
  imageSrc: "/images/service/marriage/third1.jpg",
  paragraph2:
    "Love marriages often face resistance due to caste, community, or family values. A Love Marriage Specialist uses astrological charts to pinpoint the exact planetary causes behind such obstacles. Your heart sinks as you hear these words from your mother. You've been asking yourself, '<b>will my parents agree for love marriage</b>?' but astrology can provide clarity and direction.",
  paragraph3:
    "But with divine guidance, true love can overcome all barriers. An experienced Love Marriage Specialist like Psychic Krishna Sai examines the charts of both partners to reveal hidden obstacles and suggest effective remedies for a successful <b>love marriage journey</b>.",
}
,
  {
    header: "Astrological Conflicts",
    paragraph1:
      "Mangal dosha, Nadi dosha, or mismatched kundalis can delay or block a <b>love marriage</b>. Marital life may face ups and downs due to planetary influences. Conflicts, lack of understanding, or extramarital affairs often arise due to Rahu-Ketu, Mercury, Mars or Saturn's negative influence. An experienced <b>love problem solution astrologer</b> can help restore trust and bring happiness to married life.",
    imageSrc: "/images/service/marriage/third2.jpg",
    paragraph2:
      "Planetary positions like Venus and Moon play key roles in romantic success. Venus is primarily considered the planet most strongly associated with <b>love and marriage</b>, and therefore plays a significant role in <b>love marriages</b>. However, other planets like Jupiter and Mars, as well as specific houses in the birth chart, also influence the dynamics of marriage.",
    paragraph3:
      "Understanding your charts helps remove relationship struggles before marriage. You can be certain of a <b>love marriage prediction</b> when Venus joins this combination or Planets such as the Moon, Venus or Rahu are placed in the chart. The combination of Mercury-Venus, in signs of Gemini or Scorpio, positively shows <b>love marriage in astrology</b>.",
  },
  {
    header: "Solutions We Offer",
    paragraph1:
      "We perform poojas, mantra remedies, and planetary strengthening for <b>love marriage problems</b>. Astrological <b>love marriage solutions</b> involve analyzing birth charts to identify potential issues and then applying remedies like fasting on specific days, performing rituals, or wearing specific jewelry. These remedies aim to appease planetary influences that may be causing obstacles in <b>love marriage</b> and to strengthen positive planetary positions.",
    imageSrc:
      "https://www.bengalijyotishcenter.com/wp-content/uploads/2025/06/Love-Marriage-specialist.jpg",
    paragraph2:
      "We guide you with muhurat dates, kundali match correction, and rituals. A detailed horoscope analysis can reveal planetary influences causing obstacles and suggest remedies to ensure a successful <b>love marriage</b>. Remedies, including the use of Rudraksha and Gemstones, can be suggested to reunite with a lost love.",
    paragraph3:
      "Our astrologers support couples in gaining family approval and union. Astrological remedies can help remove negativity and bring acceptance from both families in <b>inter-caste love marriage</b>.",
  },
  {
    header: "Strengthen Your Bond",
    paragraph1:
      "Even after marriage, we offer spiritual help to maintain peace and love. To strengthen the bond in a <b>love marriage</b>, astrology suggests various remedies, including pleasing Venus (Shukra), examining birth charts, balancing Mars (Mangal), and appeasing the Moon (Chandra). Specific rituals like moonlit cleansing ceremonies, creating a Venus altar, and incorporating planetary hours can also deepen the emotional connection.",
    imageSrc: "/images/service/marriage/third3.jpg",
    paragraph2:
      "Get yantras, gemstone suggestions, or divine protection for your relationship. Examine both partners' birth charts to understand compatibility and potential challenges. Perform cleansing rituals under the moonlight, especially during a full moon, to purify and strengthen the bond.",
    paragraph3:
      "Let astrology bless your marriage with lifelong harmony and happiness. Deep emotional connection, natural compatibility, and respect for autonomy are crucial for a lasting <b>love marriage</b>. Open and honest communication is essential for building trust and understanding.",
  },
];

export default function LoveMarriage() {
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
}
