const normalize = {
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html: {
    "line-height": "1.15",
    "-webkit-text-size-adjust": "100%",
  },
  body: {
    margin: "0",
  },
  main: {
    display: "block",
  },
  h1: {
    "font-size": "2em",
    margin: "0.67em 0",
  },
  hr: {
    "box-sizing": "content-box",
    height: "0",
    overflow: "visible",
  },
  pre: {
    "font-family": "monospace, monospace",
    "font-size": "1em",
  },
  a: {
    "background-color": "transparent",
  },
  "abbr[title]": {
    "border-bottom": "none",
    "text-decoration": "underline dotted",
  },
  "b, strong": {
    "font-weight": "bolder",
  },
  "code, kbd, samp": {
    "font-family": "monospace, monospace",
    "font-size": "1em",
  },
  small: {
    "font-size": "80%",
  },
  legend: {
    "box-sizing": "border-box",
    color: "inherit",
    display: "table",
    "max-width": "100%",
    padding: "0",
    "white-space": "normal",
  },
  progress: {
    "vertical-align": "baseline",
  },
  textarea: {
    overflow: "auto",
  },
  '[type="checkbox"], [type="radio"]': {
    "box-sizing": "border-box",
    padding: "0",
  },
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button':
    {
      height: "auto",
    },
  '[type="search"]': {
    "-webkit-appearance": "textfield",
    "outline-offset": "-2px",
  },
  '[type="search"]::-webkit-search-decoration': {
    "-webkit-appearance": "none",
  },
  "::-webkit-file-upload-button": {
    "-webkit-appearance": "button",
    font: "inherit",
  },
  details: {
    display: "block",
  },
  summary: {
    display: "list-item",
  },
  template: {
    display: "none",
  },
  "[hidden]": {
    display: "none",
  },
};

const reset = {
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
  html: {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
  },
  body: {
    lineHeight: 1,
  },
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video":
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
      display: "block",
      listStyle: "none",
      quotes: "none",
    },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "''",
  },
  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },
};

export const defaultStyles = {
  ...normalize,
  ...reset,
};
