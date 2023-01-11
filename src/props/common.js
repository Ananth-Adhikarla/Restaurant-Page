import {header, footer} from "./navbar.js";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";
import divider from "../assets/images/divider.png";
import pizza1 from "../assets/images/pizza1.jpg";
import pizza2 from "../assets/images/pizza2.jpg";
import pizza3 from "../assets/images/pizza2.jpg";


export const CreateElement = (jsonObject, appendTo) => {

  let element = null;

  if((appendTo instanceof Node) === false)
    element = document.createElement(appendTo);
  else 
    element = appendTo;

  for(let [key, value] of Object.entries(jsonObject)){

    let temp = null;
    if(value.name === "card") {
      temp = CreateCards(value.img, value.title, value.price, value.desc);
    }
    else
      temp = document.createElement(value.name);

    if(temp.nodeName === 'A'){
      temp.href = value.text;
      temp.target = "_blank";
    }
    else if(temp.nodeName === "IMG"){
      temp.src = divider;
    }
    else if(value.name !== "card")
      temp.textContent = value.text;

    if(value.style.length > 0){
      value.style.forEach(style => temp.classList.add(style));
    }

    if(value.id !== undefined){
      temp.id = value.id;
      let obj = strToObj(value.target);
      temp.addEventListener("click", obj, false);
    }

    element.appendChild(temp);
  }

  return element;
}

const GetMainContainer = () => {
  let mainContainer = document.getElementById("content");
  return mainContainer;
}

export const Render = (mainContainer, newChild) => {
  let child = mainContainer.childNodes[1];
  mainContainer.replaceChild(newChild, child);
}

export const LoadInitial = () => {
  let mainContainer = GetMainContainer();
  mainContainer.classList.add("home-bg-image");
  mainContainer.appendChild(header());
  mainContainer.appendChild(home());
  mainContainer.appendChild(footer());
}

export const LoadHome = () => {
  let mainContainer = GetMainContainer();
  mainContainer.classList.replace("home-default", "home-bg-image");
  Render(mainContainer, home());
}

export const LoadMenu = () => {
  let mainContainer = GetMainContainer();
  mainContainer.classList.replace("home-bg-image", "home-default");
  Render(mainContainer, menu());
}

export const LoadAbout = () => {
  let mainContainer = GetMainContainer();
  mainContainer.classList.replace("home-bg-image", "home-default");
  Render(mainContainer, about());
}

const strToObj = (str) => {
  var obj = {};
  if(str&&typeof str ==='string'){
      eval("obj ="+str);
  }
  return obj
}

const pizzaImages = (name) => {
  let pizzas = [
    {
      name: "pizza1",
      img: pizza1,
    },
    {
      name: "pizza2",
      img: pizza2,
    },
    {
      name: "pizza3",
      img: pizza3,
    }
  ]

  return pizzas.filter(pizza => pizza.name === name).pop().img;
}

const CreateCards = (img, title, price, desc) => {
  let card = document.createElement("div");
  let card_left = document.createElement("div");
  let image = document.createElement("img");
  let card_right = document.createElement("div");
  let card_right_top = document.createElement("div");
  let card_title = document.createElement("div");
  let card_price = document.createElement("div");
  let card_desc = document.createElement("div");

  card.classList.add("menuItems");
  card_left.classList.add("left");
  card_right.classList.add("right");
  card_right_top.classList.add("right-top");
  card_title.classList.add("title");
  card_price.classList.add("price");
  card_desc.classList.add("description");

  image.src = pizzaImages(img);
  card_title.textContent = title;
  card_price.textContent = price;
  card_desc.textContent = desc;

  card_left.appendChild(image);
  card_right_top.appendChild(card_title);
  card_right_top.appendChild(card_price);
  card_right.appendChild(card_right_top);
  card_right.appendChild(card_desc);
  card.appendChild(card_left);
  card.appendChild(card_right);

  return card;
}

// export const CreateEvents = (container, obj) => {
//   let links = obj.filter(item => item.id !== undefined)
//   links.forEach(item => {
//     container.querySelector(item.name).addEventListener("click", eval("obj ="+item.target))
//   });
// }