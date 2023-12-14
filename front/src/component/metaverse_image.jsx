// animation.js
const loadImage = () => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = './meta1.png';
  
      image.onload = () => {
        resolve(image);
      };
  
      image.onerror = (error) => {
        reject(error.message || 'Error loading image');
      };
    });
  };
  
  export default loadImage;
  