import { definePreset, palette } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const MyPreset = definePreset(Aura, {
  darkModeSelector: false,
  semantic: {
    primary: palette("#C980E6"),
    accent: palette("#5FDFC8"),
    colorScheme: {
      light: {
        accent: {
          color: "{accent.500}",
          contrastColor: "#ffffff",
          hoverColor: "{accent.600}",
          activeColor: "{accent.700}",
        },
      },
      dark: {
        accent: {
          color: "{accent.400}",
          contrastColor: "{surface.900}",
          hoverColor: "{accent.300}",
          activeColor: "{accent.200}",
        },
      },
    },
  },
});

export default {
  preset: MyPreset,
};
