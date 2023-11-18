module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        customText: 'rgba(255, 255, 255, 0.87)',
        customTextHover: '#535bf2',
        customBackground: '#242424',
        customPrimary: '#646cff', 
        customButtonBackground: '#1a1a1a', 
        customButtonHoverBorder: '#646cff', 
        customButtonHoverText: '#535bf2', 
        customButtonFocusOutline: '-webkit-focus-ring-color',
      },
      borderWidth: {
        '1': '1px', 
      },
      borderRadius: {
        '8': '8px',
      },
      padding: {
        '0.6em': '0.6em', 
        '1.2em': '1.2em', 
      },
      fontSize: {
        '1em': '1em', 
        '3.2em': '3.2em', 
      },
      outline: {
        '4': '4px auto -webkit-focus-ring-color', 
      },
    },
  },
  plugins: [],
};
