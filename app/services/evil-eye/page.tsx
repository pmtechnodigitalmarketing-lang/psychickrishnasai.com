import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";

const contentData = [
  {
  header: "What is Evil Eye?",
  paragraph1:
    "The Evil Eye, also known as “Drishti,” is believed to be a harmful gaze that brings misfortune, jealousy, or sickness. Psychic Krishna Sai, a renowned Evil Eye Specialist, explains that in astrology it represents a negative energy capable of disrupting one’s aura and leading to illness, emotional stress, or setbacks. Psychic Krishna Sai emphasizes that while it is not a literal eye, the Evil Eye symbolizes destructive vibrations projected onto someone, which can deeply affect their physical, mental, emotional, and spiritual well-being.",
  imageSrc: "/images/service/eye/six1.jpg",
  paragraph2:
    "Often, the Evil Eye comes from individuals who consciously or unconsciously emit negativity due to envy. Cultures across the world acknowledge its effects, and even skeptics often come to believe after experiencing its impact firsthand. The guidance of an Evil Eye Specialist provides protection and remedies to counteract such negative influences.",
  paragraph3:
    "This belief has deep roots in Vedic astrology, where texts describe how envy and evil vibrations can disturb harmony. Consulting an experienced Evil Eye Specialist like Psychic Krishna Sai ensures the right spiritual remedies are applied, helping individuals neutralize harmful energies and restore peace.",
}
,
  {
    header: "Symptoms & Impact",
    paragraph1:
      "Common signs of Evil Eye include headaches, sudden illness, irritability, or unexplained misfortune. Psychic Krishna Sai highlights that symptoms may range from physical ailments such as fatigue, body pain, and sleep disturbances, to emotional struggles like anxiety and depression.",
    imageSrc: "/images/service/eye/six2.jpg",
    paragraph2:
      "Children may cry excessively without reason, while adults may experience confusion, negativity, or constant setbacks. These are clear signs where intervention from an Evil Eye Specialist becomes essential.",
    paragraph3:
      "If left unresolved, Evil Eye can impact relationships, finances, career growth, and overall peace of mind. Identifying and addressing it early ensures stability and harmony.",
  },
  {
    header: "Astrological Remedies",
    paragraph1:
      "Psychic Krishna Sai, an experienced Evil Eye Specialist, provides effective remedies such as salt rituals, lemon-chili techniques, and protective black thread practices. These remedies are designed to neutralize negativity and restore spiritual balance.",
    imageSrc: "/images/service/eye/six3.jpg",
    paragraph2:
      "Special poojas like Nazar Dosh Nivaran, along with chanting protective mantras such as the Hanuman Chalisa, strengthen the aura against harmful energies. Wearing black thread, amulets, or gemstones also provides powerful protection.",
    paragraph3:
      "For children, small black dots behind the ear are commonly used. Vastu remedies like placing rock salt or lemon-chili hangings in the home further help deflect negative energy.",
  },
  {
    header: "Protective Measures",
    paragraph1:
      "Psychic Krishna Sai advises using symbols like 'Nazar Battu' or black beads as protective shields against harmful gazes. As an Evil Eye Specialist, he emphasizes that protection not only blocks negativity but also enhances mental clarity, relationships, and overall luck.",
    imageSrc:
      "https://static.toiimg.com/thumb/msid-116366537,imgsize-30312,width-400,resizemode-4/116366537.jpg",
    paragraph2:
      "Daily chanting, spiritual baths, lighting camphor, and maintaining purity in the home environment are powerful preventive measures. During certain astrological phases, these protections become especially crucial.",
    paragraph3:
      "Evil Eye protection works like a spiritual firewall, restoring balance during key life transitions such as marriage, business ventures, or career growth. With guidance from Psychic Krishna Sai, one can stay shielded and attract positive energies.",
  },
];

const title = "Evil Eye Protection";
const bannerImage = "/images/services/evil-eye-banner.jpg"; // Update this path as needed

const EvilEye: React.FC = () => {
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

export default EvilEye;
