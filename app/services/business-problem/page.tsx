import Faq from '@/app/components/home/Faq';
import SectionService from '@/app/components/service/SectionService';
import React from 'react';

const contentData = [
  {
  header: 'Business Challenges',
  paragraph1:
    "Running a business often comes with constant pressure, uncertainty, and challenges. Psychic Krishna Sai, a renowned Business Problem Specialist, explains that many obstacles are not only practical but also connected to cosmic and planetary influences. Psychic Krishna Sai guides entrepreneurs with astrological insights, while a Business Problem Specialist helps them recognize emotional strengths, decision-making patterns, and stress levels. This awareness empowers business owners to manage challenges wisely and build resilience for long-term success.",
  imageSrc: '/images/service/business/five1.jpg',
  paragraph2:
    "Many business obstacles arise from hidden cosmic disturbances or negative planetary alignments. Consulting Psychic Krishna Sai, the trusted Business Problem Specialist, can reveal unseen risks and guide entrepreneurs to make well-informed decisions while avoiding setbacks. With the expertise of a Business Problem Specialist, challenges can be turned into opportunities for growth.",
  paragraph3:
    "Astrology provides valuable insights, but it should work alongside market research, financial analysis, and strategic planning. Psychic Krishna Sai emphasizes that by combining spiritual guidance with the support of a Business Problem Specialist, business owners can strengthen their foundation for success and prosperity.",
}
,
  {
    header: 'Causes of Failure',
    paragraph1:
      "Astrology highlights that weak Jupiter or Mercury, Rahu-Ketu doshas, or malefic Saturn can bring setbacks. If the Sun (Surya) appears weak in your horoscope, it can significantly affect business growth. Psychic Krishna Sai, as a Business Problem Specialist, recommends powerful mantras and remedies to strengthen planetary positions and protect businesses from repeated failures.",
    imageSrc:
      'https://astrotalk.com/astrology-blog/wp-content/uploads/2019/08/business-losses-1-768x502.jpg',
    paragraph2:
      "Apart from planetary effects, Vastu defects in offices or shops can lead to losses. Swarn Dosh is another astrological condition that can drain profits. Without proper remedies, even successful businesses may face sudden downfall.",
    paragraph3:
      "Unfavorable timing for investments or partnerships also contributes to failure. This is why consulting Psychic Krishna Sai, a Business Problem Specialist, ensures that ventures start during auspicious periods for maximum success.",
  },
  {
    header: 'Astrological Remedies',
    paragraph1:
      "Psychic Krishna Sai suggests yantras, gemstones, and mantras uniquely aligned with your business horoscope. As a Business Problem Specialist, he provides personalized remedies to strengthen positive planetary influences while reducing the effects of malefic ones.",
    imageSrc: '/images/service/business/five2.jpg',
    paragraph2:
      "Special poojas, homams, and rituals guided by Psychic Krishna Sai can neutralize negative influences. Worshipping Goddess Lakshmi on Fridays with white flowers and sweets, keeping her idol in the northeast, and offering prayers can invite prosperity and stability.",
    paragraph3:
      "Astrological remedies are most effective when combined with honesty, dedication, and ethical business practices. Regular spiritual consultation with Psychic Krishna Sai keeps your business aligned with favorable planetary energies.",
  },
  {
    header: 'Success Strategies',
    paragraph1:
      "Choosing auspicious dates for product launches, deals, and investments based on your horoscope brings greater success. Psychic Krishna Sai, an experienced Business Problem Specialist, provides strategies rooted in astrology to help entrepreneurs make confident and timely decisions.",
    imageSrc: '/images/service/business/five3.jpg',
    paragraph2:
      "Along with Vastu-compliant workspaces, remedies like gemstone therapy and Vedic rituals suggested by Psychic Krishna Sai help attract positive energies and opportunities. These practices strengthen business growth and create stability.",
    paragraph3:
      "By staying spiritually strong, confident, and aligned with astrological insights, business owners can overcome challenges and achieve long-term prosperity. Psychic Krishna Sai’s guidance ensures you remain prepared for both opportunities and obstacles.",
  },
];

const title = 'Business Problem Solutions';
const bannerImage = '/images/services/business-problem-banner.jpg'; // Update path as needed

const Business: React.FC = () => {
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

export default Business;
