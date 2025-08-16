"use client";
import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";

const contentData = [
  {
  header: "What is Black Magic?",
  paragraph1:
    "Psychic Krishna Sai, a renowned Black Magic Specialist, explains that black magic, also known as witchcraft, is the usage of supernatural power for selfish or harmful purposes. As a trusted guide, Psychic Krishna Sai provides protection and remedies when someone uses black magic to damage others physically, mentally, or financially with the victim’s hair, clothes, photo, or even eye contact. This practice has existed for generations, and in this age of Kalyug, where true well-wishers are few, we must remain cautious and seek the support of an experienced Black Magic Specialist.",
  imageSrc: "/images/service/black/second1.jpg",
  paragraph2:
    "Black magic, also referred to as dark magic or witchcraft, involves invoking supernatural powers for destructive intentions. Spells, curses, and rituals may be used to control or harm others, which is why guidance from Psychic Krishna Sai, the leading Black Magic Specialist, is essential to safeguard against such negative forces. With his deep expertise, Psychic Krishna Sai helps individuals break free from curses and regain peace of mind with the support of a powerful Black Magic Specialist.",
  paragraph3:
    "In many cultures and cities, including spiritual hubs like Bangkok’s Ratchaprasong intersection, people pray for blessings in work, fortune, love, and relationships. But just as there are divine energies, there are also dark forces—making protection from black magic crucial. Psychic Krishna Sai offers spiritual remedies as a trusted Black Magic Specialist to ensure people remain protected, balanced, and free from harmful energies.",
}
,
  {
    header: "Symptoms of Black Magic",
    paragraph1:
      "According to Psychic Krishna Sai, there are different signs that reveal if a person is under black magic. These include sudden health problems, behavioral changes, financial loss, or disturbed sleep. Common symptoms can be unexplained stomach issues, headaches, body aches, or drastic weight changes.",
    imageSrc: "/images/service/black/second2.jpg",
    paragraph2:
      "A person influenced by black magic may display extreme anger, mood swings, or reclusive behavior. Vivid nightmares, disturbed sleep, and constant irritation are also strong indicators. Only a skilled Black Magic Specialist can identify whether these issues are spiritual or psychological in nature.",
    paragraph3:
      "Black magic can also affect financial stability. Victims may face unexpected income loss or constant misfortune, which often requires spiritual remedies to reverse.",
  },
  {
    header: "Removal Process",
    paragraph1:
      "Psychic Krishna Sai provides effective solutions for removing black magic through spiritual remedies, chants, and protective rituals. Energy itself is neutral—like electricity—it can be divine or destructive depending on how it is used. A Black Magic Specialist understands this energy balance and channels it positively to restore harmony.",
    imageSrc: "/images/service/black/second3.jpg",
    paragraph2:
      "While black magic practices exist, Psychic Krishna Sai emphasizes that many cases are psychological, where fear itself becomes the real curse. Still, genuine black magic does exist, and with expert intervention it can be neutralized safely.",
    paragraph3:
      "Avoid attempting removal yourself, as it may worsen the situation. Professional guidance from a Black Magic Specialist is necessary to break the cycle of fear, negativity, and recurring obstacles caused by such forces.",
  },
  {
    header: "Protection Techniques",
    paragraph1:
      "Psychic Krishna Sai, a trusted Black Magic Specialist, advises that prevention is as important as removal. Protective mantras, talismans, and spiritual cleansing rituals should be practiced regularly. Just as daily bathing cleanses the body, spiritual practices cleanse the aura and prevent the buildup of dark energies.",
    imageSrc: "/images/service/black/second4.jpg",
    paragraph2:
      "Through consistent spiritual practice, one develops sensitivity to detect negative energy. People with strong spiritual awareness often notice haziness, pressure, or nausea around those affected by black energy. Such early detection can prevent further harm.",
    paragraph3:
      "Only those with advanced sixth sense can perceive the full extent of black energy coverings. This is why consulting Psychic Krishna Sai, an experienced Black Magic Specialist, is vital for long-term protection and peace of mind.",
  },
];

const title = "Black Magic Removal";
const bannerImage = "/images/services/black-magic-banner.jpg"; // Update path as needed

const BlackMagic: React.FC = () => {
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

export default BlackMagic;
