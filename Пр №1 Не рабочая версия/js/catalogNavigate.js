"use strict";

let list_group = document.querySelector(".list-group");
let list1 = document.querySelectorAll(".list-group-item");

const products_buket = [
  {
    id: 1,
    category: "Букет",
    name: "Белая нежность",
    price: 11300,
    availability: "есть в наличии",
    img: "./image/product_001.webp",
  },
  {
    id: 2,
    category: "Букет",
    name: "Радужный рассвет",
    price: 13500,
    availability: "есть в наличии",
    img: "./image/product_002.webp",
  },
  {
    id: 3,
    category: "Букет",
    name: "Нежный ветерок",
    price: 17000,
    availability: "нет в наличии",
    img: "./image/product_003.webp",
  },
  {
    id: 4,
    category: "Букет",
    name: "Весеннее пробуждение",
    price: 17000,
    availability: "нет в наличии",
    img: "./image/product_017.jpeg",
  },
];
const products_roza = [
  {
    id: 1,
    category: "Розы",
    name: "Мелодия сентября",
    price: 300,
    availability: "нет в наличии",
    img: "./image/product_004.webp",
  },
  {
    id: 2,
    category: "Розы",
    name: "Весеняя радуга",
    price: 800,
    availability: "есть в наличии",
    img: "./image/product_005.webp",
  },
  {
    id: 3,
    category: "Розы",
    name: "Новый рассвет",
    price: 1100,
    availability: "есть в наличии",
    img: "./image/product_006.webp",
  },
  {
    id: 4,
    category: "Розы",
    name: "Осенний закат",
    price: 3100,
    availability: "есть в наличии",
    img: "./image/product_018.jpeg",
  },
];
const products_tulpan = [
  {
    id: 1,
    category: "Тюльпаны",
    name: "Осенний блюз",
    price: 300,
    availability: "есть в наличии",
    img: "./image/product_007.jpeg",
  },
  {
    id: 2,
    category: "Тюльпаны",
    name: "Летняя романтика",
    price: 500,
    availability: "нет в наличии",
    img: "./image/product_008.jpeg",
  },
  {
    id: 3,
    category: "Тюльпаны",
    name: "Весеннее утро",
    price: 1900,
    availability: "есть в наличии",
    img: "./image/product_009.webp",
  },
  {
    id: 4,
    category: "Тюльпаны",
    name: "Изысканный букет",
    price: 2900,
    availability: "есть в наличии",
    img: "./image/product_020.jpeg",
  },
];
const products_pions = [
  {
    id: 1,
    category: "Пионы",
    name: "51 цветок",
    price: 5300,
    availability: "есть в наличии",
    img: "./image/product_010.webp",
  },
  {
    id: 2,
    category: "Пионы",
    name: "Розовые пионы",
    price: 2500,
    availability: "нет в наличии",
    img: "./image/product_011.webp",
  },
  {
    id: 3,
    category: "Пионы",
    name: "Для любимой",
    price: 900,
    availability: "нет в наличии",
    img: "./image/product_012.webp",
  },
  {
    id: 4,
    category: "Пионы",
    name: "Волшебный",
    price: 3900,
    availability: "нет в наличии",
    img: "./image/product_021.jpeg",
  },
  {
    id: 5,
    category: "Пионы",
    name: "61 пион",
    price: 5900,
    availability: "нет в наличии",
    img: "./image/product_019.jpeg",
  },
];
const products_suh = [
  {
    id: 1,
    category: "Сухоцветы",
    name: "Перья сиреневые",
    price: 1300,
    availability: "есть в наличии",
    img: "./image/product_013.webp",
  },
  {
    id: 2,
    category: "Сухоцветы",
    name: "Сиреневая статица",
    price: 2500,
    availability: "нет в наличии",
    img: "./image/product_014.webp",
  },
  {
    id: 3,
    category: "Сухоцветы",
    name: "Сухоцветы Физалис",
    price: 900,
    availability: "есть в наличии",
    img: "./image/product_022.jpeg",
  },
  {
    id: 4,
    category: "Пионы",
    name: "Сухоцветы Артишок",
    price: 4900,
    availability: "есть в наличии",
    img: "./image/product_016.webp",
  },
];

let product_buket = document.querySelector(".product__card-buket");
let product_roza = document.querySelector(".product__card-roza");
let product_tulpan = document.querySelector(".product__card-tulpan");
let product_pion = document.querySelector(".product__card-pion");
let product_suh = document.querySelector(".product__card-suh");

function productBuket() {
  for (let i = 0; i < products_buket.length; i++) {
    let card = document.createElement("div");
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let availability = document.createElement("p");
    let price = document.createElement("p");

    card.className = "product__card-frame";
    div_img.className = "product__frame-img";
    img.className = "product__img-src";
    info.className = "product__frame-info";
    availability.className = "product__frame-availability";
    price.className = "product__frame-price";

    product_buket.appendChild(card);
    card.appendChild(div_img);
    div_img.appendChild(img);
    card.appendChild(info);
    card.appendChild(availability);
    card.appendChild(price);

    img.src = products_buket[i].img;
    info.textContent = products_buket[i].name;
    availability.textContent = products_buket[i].availability;
    price.textContent = products_buket[i].price + " руб.";

    if (availability.textContent == "есть в наличии") {
      availability.style.color = "green";
    } else {
      availability.style.color = "red";
    }
  }
}

function productRoza() {
  for (let i = 0; i < products_roza.length; i++) {
    let card = document.createElement("div");
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let availability = document.createElement("p");
    let price = document.createElement("p");

    card.className = "product__card-frame";
    div_img.className = "product__frame-img";
    img.className = "product__img-src";
    info.className = "product__frame-info";
    availability.className = "product__frame-availability";
    price.className = "product__frame-price";

    product_roza.appendChild(card);
    card.appendChild(div_img);
    div_img.appendChild(img);
    card.appendChild(info);
    card.appendChild(availability);
    card.appendChild(price);

    img.src = products_roza[i].img;
    info.textContent = products_roza[i].name;
    availability.textContent = products_roza[i].availability;
    price.textContent = products_roza[i].price + " руб.";

    if (availability.textContent == "есть в наличии") {
      availability.style.color = "green";
    } else {
      availability.style.color = "red";
    }
  }
}

function productTulpan() {
  for (let i = 0; i < products_tulpan.length; i++) {
    let card = document.createElement("div");
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let availability = document.createElement("p");
    let price = document.createElement("p");

    card.className = "product__card-frame";
    div_img.className = "product__frame-img";
    img.className = "product__img-src";
    info.className = "product__frame-info";
    availability.className = "product__frame-availability";
    price.className = "product__frame-price";

    product_tulpan.appendChild(card);
    card.appendChild(div_img);
    div_img.appendChild(img);
    card.appendChild(info);
    card.appendChild(availability);
    card.appendChild(price);

    img.src = products_tulpan[i].img;
    info.textContent = products_tulpan[i].name;
    availability.textContent = products_tulpan[i].availability;
    price.textContent = products_tulpan[i].price + " руб.";

    if (availability.textContent == "есть в наличии") {
      availability.style.color = "green";
    } else {
      availability.style.color = "red";
    }
  }
}

function productPion() {
  for (let i = 0; i < products_pions.length; i++) {
    let card = document.createElement("div");
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let availability = document.createElement("p");
    let price = document.createElement("p");

    card.className = "product__card-frame";
    div_img.className = "product__frame-img";
    img.className = "product__img-src";
    info.className = "product__frame-info";
    availability.className = "product__frame-availability";
    price.className = "product__frame-price";

    product_pion.appendChild(card);
    card.appendChild(div_img);
    div_img.appendChild(img);
    card.appendChild(info);
    card.appendChild(availability);
    card.appendChild(price);

    img.src = products_pions[i].img;
    info.textContent = products_pions[i].name;
    availability.textContent = products_pions[i].availability;
    price.textContent = products_pions[i].price + " руб.";

    if (availability.textContent == "есть в наличии") {
      availability.style.color = "green";
    } else {
      availability.style.color = "red";
    }
  }
}

function productSuh() {
  for (let i = 0; i < products_suh.length; i++) {
    let card = document.createElement("div");
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("p");
    let availability = document.createElement("p");
    let price = document.createElement("p");

    card.className = "product__card-frame";
    div_img.className = "product__frame-img";
    img.className = "product__img-src";
    info.className = "product__frame-info";
    availability.className = "product__frame-availability";
    price.className = "product__frame-price";

    product_suh.appendChild(card);
    card.appendChild(div_img);
    div_img.appendChild(img);
    card.appendChild(info);
    card.appendChild(availability);
    card.appendChild(price);

    img.src = products_suh[i].img;
    info.textContent = products_suh[i].name;
    availability.textContent = products_suh[i].availability;
    price.textContent = products_suh[i].price + " руб.";

    if (availability.textContent == "есть в наличии") {
      availability.style.color = "green";
    } else {
      availability.style.color = "red";
    }
  }
}

productBuket();

list_group.addEventListener("click", function (event) {
  if (document.querySelector(".product__card-frame")) {
    for (let element of document.querySelectorAll(".product__card-frame")) {
      element.remove();
    }
  }
  if (Array.prototype.indexOf.call(list1, event.target) == 0) {
    productBuket();
  } else if (Array.prototype.indexOf.call(list1, event.target) == 1) {
    productRoza();
  } else if (Array.prototype.indexOf.call(list1, event.target) == 2) {
    productTulpan();
  } else if (Array.prototype.indexOf.call(list1, event.target) == 3) {
    productPion();
  } else if (Array.prototype.indexOf.call(list1, event.target) == 4) {
    productSuh();
  }
});

let popup = document.querySelector(".popup");
let auto = document.querySelector("#auto");
let close = document.querySelector(".popup__title-close");

auto.addEventListener("click", function () {
  popup.style.display = "block";
});

close.addEventListener("click", function () {
  popup.style.display = "none";
});
