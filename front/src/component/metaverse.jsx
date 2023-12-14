// YourComponent.jsx
import React, { useEffect } from 'react';
import loadImage from './metaverse_image'; // Adjust the path as necessary

const Yourimage = () => {
  useEffect(() => {
    const addImageToComponent = async () => {
      try {
        const image = await loadImage();

        // Apply CSS styles dynamically
        image.classList.add('custom-image'); // Add a CSS class
        image.style.width = '300px'; // Set width
        

        // Add the image to the component
        document.getElementById('your-component-id').appendChild(image);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    addImageToComponent();
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div id="your-component-id">
      {/* Other content in YourComponent */}
    </div>
  );

};

export default Yourimage;
