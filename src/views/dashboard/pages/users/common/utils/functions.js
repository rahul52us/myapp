export const randomGradientColor = () => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      do {
        color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
      } while (color === '#FFFFFF'); // Keep generating until color is not white
      return color;
    };

    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    return `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  };