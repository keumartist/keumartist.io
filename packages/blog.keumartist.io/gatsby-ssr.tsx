import * as React from "react";
import { getCssText } from "./src/styles/stitches.config";
import { RenderBodyArgs } from "gatsby";

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <style dangerouslySetInnerHTML={{ __html: getCssText() }} />,
  ]);
};
