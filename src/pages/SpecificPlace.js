import SpecificPlaceTitle from '../components/SpecificPlaceTitle';
import SpecificPlaceImages from "../components/SpecificPlaceImages";
import SpecificPlaceInfo from '../components/SpecificPlaceInfo';
import SpecificPlaceMap from '../components/SpecificPlaceMap';

import SK1 from "../assets/img/syrikalter1.jpg"
import SK2 from "../assets/img/syrikalter2.jpg";
import SK3 from "../assets/img/syrikalter3.jpg";
import SK4 from "../assets/img/syrikalter4.jpg";
import SK5 from "../assets/img/syrikalter5.jpg";

const SpecificPlace = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4">
        <SpecificPlaceTitle title="SYRI I KALTERT" subtitle="Shtrire ne zemer te qytetit te Sarandes" />
        
        <SpecificPlaceImages img1={SK1} img2={SK2} img3={SK3} img4={SK4} img5={SK5} />

        <SpecificPlaceInfo  
            title1="THE BLUE EYE SPRING" 
            paragraph1="Syri i Kalter (The Blue Eye) is a fairy tale-like spring located in
                        the south of Albania, Delvine district, near the town of Saranda.
                        Not only the spring is the attraction but also the surrounding
                        nature, the forest, and the clearest fresh waters I have seen in my
                        life. Even clearer then in the becoming famous now Plitvice Lakes
                        National Park in Croatia. You might have the impression that this
                        place is completely unreal, out of this world, as if specially
                        prepared for a movie set."
            paragraph2="There are few foreign tourist in Albania, so the infrastructure and
                        public services are not in perfect conditions. (Let this not
                        discourage you from the adventure in Albania). However, it is
                        possible to travel to The Blue Eye Spring from Saranda or the
                        beautiful, green and resembling tropical places with white sandy
                        beaches, Ksamil. A taxi can be arranged, the prices are affordable
                        in Albania, and surely it's easy to find locals offering the tours
                        there."
            title2="PRURJA NE VIT"
            description1="Mesatarja e prurjes ne vit eshte 5.9 meter kub per sekonde"
            title3="TEMPERATURA E UJIT"
            description2="Mesatarja e temperatures se ujit eshte 10 grade celzius"
        />

        <SpecificPlaceMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.793271964191!2d20.190275015701733!3d39.92364227942545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b0f01c1bca3b5%3A0x4b23574d1579d66b!2sThe%20Blue%20Eye!5e0!3m2!1sen!2s!4v1661432089617!5m2!1sen!2s"/>
         
      </div>   
    </>  
  );
}

export default SpecificPlace