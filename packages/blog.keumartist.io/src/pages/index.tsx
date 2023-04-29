import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <main>메인페이지</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
