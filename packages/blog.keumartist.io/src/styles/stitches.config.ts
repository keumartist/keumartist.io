import { createStitches } from "@stitches/react";
import { defaultStyles } from "./defaults";

const { styled, css, globalCss, getCssText } = createStitches({
  prefix: "blog",
  theme: {
    fonts: {
      $sans: "system-ui, sans-serif",
    },
    fontWeights: {
      $normal: "400",
      $medium: "500",
      $semibold: "600",
      $bold: "700",
    },
  },
});

globalCss({ ...defaultStyles })();

export { styled, css, getCssText };
