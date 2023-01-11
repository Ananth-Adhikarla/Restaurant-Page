import websiteJSON from "./website.json";
import {CreateElement} from "./common.js";

export const menu = () => {
  const container = document.createElement("section");
  container.classList.add("menuContainer");
  CreateElement(websiteJSON.menu, container);
  return container;
}