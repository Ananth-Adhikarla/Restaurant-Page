import websiteJSON from "./website.json";
import {CreateElement} from "./common.js";

export const header = () => {
  const header = document.createElement("header");
  header.appendChild(CreateElement(websiteJSON.header, "ul"));
  return header;
}

export const footer = () => {
  const footer = document.createElement("footer");
  CreateElement(websiteJSON.footer, footer);
  return footer;
}

