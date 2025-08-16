import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";


const contentData = [
  {
  header: "Does Each Line Carry Its Own Meaning?",
  paragraph1:
    "The arc of the life line defines the root of the thumb, also known as the mount of the Sun in palmistry, which acts as the reservoir of vitality and energy. In astrology and palm reading, the larger the arc, the stronger a person’s natural reserves—the tanks are full, and the owner has stamina, enthusiasm, and life force to share with the world. A deep life line reveals powerful energy, with great potential for a long and successful life. Such individuals may become impatient with those who tire easily, often channeling this vitality into their temperament. Palmistry experts recommend balancing this energy through physical activity and patience. Psychic Krishna Sai, a renowned Palm Specialist, provides accurate readings to decode your life line and destiny. With the guidance of Psychic Krishna Sai, an experienced Palm Specialist, you can uncover the hidden truths of your future and align with positive energy.",
  imageSrc: "/images/service/plam/one1.jpg",
}
,
  {
    paragraph1:
      "People with water hands have long, rectangular palms and long fingers. Water hands are typically graceful and delicate. Their palms are usually narrow and covered with thin, fine lines. People with water hands often have soft, shiny skin that is sometimes clammy or damp to the touch. The zodiac signs are also based on the elements, but your hand shape and astrological sign might not match up. If you’re a fiery Leo and have water hands, that’s completely normal; it just adds to the interesting makeup of who you are!",
    header: "Hands Carry Its Own Meaning?",
    imageSrc:
      "/images/service/plam/one2.jpg",
    paragraph2:
      "Earth hands have square palms and short fingers. These hands typically look squished or compressed and are wider rather than narrow. People with earth hands usually have thicker skin that is rough or coarse to the touch. They also have very few lines on their palms.People with earth hands are strong-willed, practical, and reliable. These are no-nonsense people who usually prefer to stick to what they know. They are kind though, and are usually the people you turn to when you need advice or a helping hand. People with earth hands are concerned with the here and now and have their feet planted firmly on the ground.",
    paragraph3:
      "Fire hands have long, rectangular palms and short fingers. People with fire hands usually have fingers that are shorter than the length of their palm. The skin on their hands might have a reddish hue and be slightly rough to the touch.[9] If they have lines on their palm, they’re typically thick and deep.While people with fire hands take a lot of risks, they follow their intuition which usually steers them right."
  },
  {
    paragraph1:
      "If your Index finger is longer than your Ring finger, then you are a leader who is quick to take charge of any situation. You are a confident and resourceful person who shines at leading the way. You are also found to be resourceful and quite good at giving advice. You are even-tempered. You are not the kind who will any decision on a whim. You are an analytical, goal-oriented, and far-sighted person. People look upto you for the right answers. You are quite wary of your actions too as they usually have a big impact on the people following you.",
    header: "THE SPACES BETWEEN YOUR FINGERS?",
    imageSrc:
      "/images/service/plam/one3.jpg",
    paragraph2:
      "f your Index finger and Ring finger are the same length, then you are a person who leads a balanced life. You are a caring, faithful, gentle, and well-organized individual. You give a warm vibe who is also known to be a good listener. You gain pleasure in helping others and listening to their problems. Others feel comfortable, recognized, and appreciated in your presence. You are mostly found in peaceful energy. People are also drawn to you and mostly confide in you with their deepest secrets.",
    paragraph3:
      "If your Ring finger is longer than your Index finger, then you have high levels of confidence. You are a very calculated person who leads with a pragmatic and rational approach toward things. You have a strategic mind. You do not get stuck on one thing. One will seldom find you deterred by a problem or obstacle. You usually have a backup plan or an alternate solution if the first solution fails. You also have a charming personality and are quite popular with the opposite sex."
  },
  {
    paragraph1:
      "observing the palm's natural topography. Fleshy areas called mounts and plains are related to different life themes. The classic mounts correspond with the seven classical planets within astrology: Apollo (the sun), Luna (the moon), Mercury, Venus, Mars, Jupiter, and Saturn. Rounded, slightly elevated mounts reveal attributes that are balanced and well-proportioned, while sunken mounts expose an individual's blind spots or underdeveloped qualities. Lastly, extremely prominent mounts reveal dominant characteristics that may be exaggerated or overemphasized.",
    header: "Look at the mounts.",
    imageSrc:
      "/images/service/plam/one4.jpg",
    paragraph2:
      "Located at the base of the index finger (and above the Mount of Inner Mars), the Mount of Jupiter symbolizes confidence, ambition, and leadership. It reveals a connection to the spiritual realm, along with divine aptitudes.The Mount of Saturn is located at the base of the middle finger. This area corresponds to wisdom, responsibility, and fortitude. It reveals an individual's integrity, as well as their deep understanding of the ups and downs of life.",
    paragraph3:
      "Situated beneath the ring finger, the Mount of Apollo derives its name from the sun god of classical antiquity. Within palmistry, this area of the hand corresponds with an individual's optimism, vitality, and dynamic essence. Just as zodiac sun signs expose individuals' innate identity, the Mount of Apollo showcases artistic inclinations, happiness, and potential for success."
  },
  {
    paragraph1:
      "Our palms naturally evolve over the course of our lives, but the fate line transforms the fastest. Also known as the line of destiny, the fate line is a vertical crease in the center of the palm that reveals the degree to which an individual's life will be influenced by external circumstances beyond their control.If the heart line begins below the index finger, it reveals content in relationships; if it begins below the middle finger, it reveals the potential for restlessness. The depth of the line signifies the significance of interpersonal relationships in an individual's life, while the length corresponds with time spent coupled . ",
    header: "Determine the hand shape.",
    imageSrc:
      "/images/service/plam/one5.jpg",
    paragraph2:
      "Whenever you're experiencing a massive shift, whether personal or professional, take a quick peek at the fate line. Has it changed? Palmists believe that itchy hands are a sign of upcoming shifts, so stay attuned to this physiological clue, as well.",
    paragraph3:
      "The sun line, or Apollo's line, is the vertical crease furthest toward the pinky side of the palm, and it reveals public image, legacy, and fame. The sun line varies greatly in length, depth, and position, and alongside the fate line, it demonstrates how and when an individual will achieve success. If the sun line and fate line intersect or run parallel, they signal that an individual's prominence will be a byproduct of external events outside their control. "
  }
];

const title = "Palm Reading";
const bannerImage = "/images/services/palm-reading-banner.jpg"; // Update this path as needed

const PalmReading = () => {
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

export default PalmReading;
