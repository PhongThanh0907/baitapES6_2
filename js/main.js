let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
function getEle(id) {
  return document.getElementById(id);
}

const hinhAnh = () => {
  let content = "";
  for (let index in dataGlasses) {
    content += `<div class="glassImg"><img src=${dataGlasses[index].src} alt=""></div>`;
  }
  document.getElementById("vglassesList").innerHTML = content;
};
hinhAnh();

const glasses = document.getElementsByClassName("glassImg");
for (let i = 0; i < glasses.length; i++) {
  glasses[i].addEventListener("click", () => {
    getEle(
      "avatar"
    ).innerHTML = `<img class="glasses-img" src="${dataGlasses[i].virtualImg}" alt="">`;
    document.getElementsByClassName("vglasses__info")[0].style.display =
      "block";
    getEle("glassesInfo").innerHTML = `
        <div class="header">
            <h3>${dataGlasses[i].name} - ${dataGlasses[i].brand} (${dataGlasses[i].color})</h3>
            <button class="btn btn-danger">$${dataGlasses[i].price}</button>
            <span>Stocking</span>
            <p>${dataGlasses[i].description}</p>
        </div>
    `;
  });
}

getEle("remove").addEventListener("click", () => {
  document.getElementsByClassName("vglasses__info")[0].style.display = "none";
  document.getElementsByClassName("glasses-img")[0].style.display = "none";
});

getEle("getback").addEventListener("click", () => {
  document.getElementsByClassName("vglasses__info")[0].style.display = "block";
  document.getElementsByClassName("glasses-img")[0].style.display = "block";
})