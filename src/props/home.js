import websiteJSON from "./website.json";
import {CreateElement} from "./common.js";

export const home = () => {
  const container = document.createElement("section");
  container.classList.add("homeContainer");
  CreateElement(websiteJSON.home, container);
  return container;
}



