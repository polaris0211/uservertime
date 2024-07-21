import { style } from "@vanilla-extract/css";
import { global } from "./theme.css";

export const titleElement = style({
  fontSize: global.fontSize.xLarge,
  fontWeight: global.fontWeight.large,
  marginBlock: 6,
});

export const description = style({
  fontSize: global.fontSize.small,
  color: "#888",
  fontWeight: global.fontWeight.light,
});

export const section = style({
  display: "flex",
  width: "50vw",
  height: "30px",
  justifyContent: "space-evenly",
  padding: "20px",
});
export const urlInput = style({
  width: "40vw",
  height: "30px",
  fontSize: global.fontSize.small,
  fontWeight: global.fontWeight.light,
  outline: "none",
  caretColor: global.color.primary,
  marginInline: "10px",
  marginBlock: 0,
  border: "solid",
  borderWidth: "1px",
  borderColor: "#aaa",
  padding: "5px",
  borderRadius: "10000px",
  "::placeholder": {
    fontSize: global.fontSize.micro,
    color: "#999",
  },
});
export const urlButton = style({
  width: "10vw",
  height: "44px",
  margin: "0",
  padding: "5px",
  border: "solid",
  backgroundColor: global.color.primary,
  color: "#fff",
  fontSize: global.fontSize.small,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: global.fontWeight.light,
  borderRadius: "10000px",
});
