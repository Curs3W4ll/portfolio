import { definePreset, palette } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

export default {
  preset: definePreset(Aura, {
    darkModeSelector: false,
    semantic: {
      primary: palette("#C980E6"),
    },
  }),
};
