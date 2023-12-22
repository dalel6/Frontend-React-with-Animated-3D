import React, { useState } from 'react';
import cave from '../../assets/cave.mp4';
import "./cave.css";
import ThirdTitle from "../ThirdTitle/ThirdTitle";

const Cave = () => {
  const [showMore, setShowMore] = useState({ p1: false, p2: false, p3: false });

  const handleToggleShowMore = (paragraph) => {
    setShowMore(prevShowMore => ({ ...prevShowMore, [paragraph]: !prevShowMore[paragraph] }));
  };

  return (
    <><div className='title'>
          <ThirdTitle />
      </div><div className="cave">
        
              <div className="video-column">
                  <video style={{ opacity: 0.6 }} src={cave} autoPlay loop muted />
              </div>
              <div className="text-column">
                  <h1 className="h1-separator">WHAT IS A VR CAVE?</h1>
                  <p>
                      {showMore.p1 ? (
                        'A Virtual Reality CAVE, acronym for Cave Automatic Virtual Environment, represents a specialized virtual reality space characterized by a cubic chamber devoid of physical obstructions. In this configuration, each surface—comprising the walls, floor, and ceiling—serves as a dynamic projection screen, collectively fostering an immersive virtual environment. Users within this three-dimensional CAVE employ stereoscopic eyewear and interact with the virtual landscape through sophisticated input devices, such as wands, data gloves, joysticks, and comparable interfaces.'
                          
                      ) : (
                        'A Virtual Reality CAVE, acronym for Cave Automatic Virtual Environment, represents a specialized virtual reality space characterized by a cubic chamber devoid of physical obstructions.'
                      )}
                      <button className="cavebutton" onClick={() => handleToggleShowMore('p1')}>
                          {showMore.p1 ? 'Read Less' : 'Read More'}
                      </button>
                  </p>

                  <h1 className="h1-separator">HOW DOES A VR CAVE WORK?</h1>
                  <p>
                      {showMore.p2 ? (
                          'Utilizing stereoscopic glasses within a VR CAVE facilitates the perception of three-dimensional graphics and images, seemingly suspended in the surrounding space. This immersive experience allows users to physically navigate around these virtual objects, closely examine them, and gain a comprehensive understanding of their appearance as if they were tangible entities. The projection systems employed in VR CAVEs demand exceptionally high resolutions to uphold the illusion of reality, ensuring a visually convincing and detailed representation of the virtual environment.To enhance the interactive experience, the VR CAVE incorporates sensors that meticulously track the user is movements. This tracking mechanism enables seamless adjustments in the displayed video content, ensuring a continuous alignment with the individual user is changing perspective.'
                      ) : (
                        ' Utilizing stereoscopic glasses within a VR CAVE facilitates the perception of three-dimensional graphics and images, seemingly suspended in the surrounding space. This immersive experience allows users to physically navigate around these virtual objects, closely examine them, and gain a comprehensive understanding of their appearance as if they were tangible entities'
                      )}
                      <button className="cavebutton" onClick={() => handleToggleShowMore('p2')}>
                          {showMore.p2 ? 'Read Less' : 'Read More'}
                      </button>
                  </p>

                  <h1 className="h1-separator">WHY ARE VR CAVES SO IMPORTANT?</h1>
                  <p>
                      {showMore.p3 ? (
                          'With the increasing affordability and accessibility of VR CAVE technology, its implications extend significantly across both commercial and humanitarian domains, presenting captivating possibilities.In addition to its current life-saving applications in fields such as medicine, where CAVE simulations and VR systems are instrumental in disease monitoring, pre-emptive measures, and intricate surgical planning, the technology delivers substantial cost savings for businesses engaged in research and design. One of the most compelling features of CAVE technology lies in its virtually boundless applications. The potential spans beyond the virtual realm, offering a wealth of opportunities that are not merely theoretical but truly infinite in scope.'
                      ) : (
                          'With the increasing affordability and accessibility of VR CAVE technology, its implications extend significantly across both commercial and humanitarian domains, presenting captivating possibilities.'
                      )}
                      <button className="cavebutton" onClick={() => handleToggleShowMore('p3')}>
                          {showMore.p3 ? 'Read Less' : 'Read More'}
                      </button>
                  </p>
              </div>
          </div></>
  );
};

export default Cave;


