import { createTheme, responsiveFontSizes } from "@mui/material";

const createCustomTheme = (baseTheme, customColors) => {

  console.log(customColors)
    // Merge the custom colors with the base theme
    const mergedPalette = {
      ...baseTheme.palette,
      ...customColors,
    };

    // Create the custom theme by overriding the base theme with merged palette
    const customTheme = createTheme({
      ...baseTheme,
      palette: mergedPalette,
    });

    // Optionally, you can apply responsive font sizes to the custom theme
    const responsiveCustomTheme = responsiveFontSizes(customTheme);

    return responsiveCustomTheme;
  };

export default createCustomTheme;