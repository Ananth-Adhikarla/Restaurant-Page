import websiteJSON from "./website.json";
import {CreateElement} from "./common.js";

export const about = () => {
  const container = document.createElement("section");
  container.classList.add("aboutContainer");
  CreateElement(websiteJSON.about, container);
  return container;
}