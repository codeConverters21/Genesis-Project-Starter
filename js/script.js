let all_services = [
  {
    id: 0,
    url: "img/services-portfolio/services_0.jpg",
    caption: "Paperwork handling and after sales service",
    content:
      "Support in all the stages of the project from paperwork handling to after-sales.",
  },
  {
    id: 1,
    url: "img/services-portfolio/services_1.jpeg",
    caption: "Maintenance",
    content:
      " It is important to maintain the value of your elevator unchanged over time to ensure efficiency and reliability.",
  },
  {
    id: 2,
    url: "img/services-portfolio/services_2.jpg",
    caption: "Emergency service and 24/7 availability",
    content:
      " We provide constant support, ensuring a high standard of safety through timely interventions 24/7.",
  },
  {
    id: 3,
    url: "img/services-portfolio/services_3.png",
    caption: "Repairs",
    content:
      " We carry out structural and functional repairs with the aim to provide quality and safety to our customers.",
  },
  {
    id: 4,
    url: "img/services-portfolio/services_4.jpg",
    caption: "Restructuring and transformation of existing systems",
    content:
      " We offer the best solutions for restructuring and aesthetic and functional transformation for existing systems.",
  },
];

let image = document.getElementById("services_image");
let caption = document.getElementById("services_caption");
let content = document.getElementById("services_content");
let i = 1;
const nextService = () => {
  image.src = all_services[i].url;
  caption.innerText = all_services[i].caption;
  content.innerText = all_services[i].content;
  i += 1;
  i = i % 5;
};

let mod = document.getElementById("modal");
let modal_image = document.getElementById("modal_image");
function showPhoto(event) {
  modal_image.src = event.target.attributes.src.nodeValue;
  mod.style.display = "grid";

  console.log(event.target.attributes.src.nodeValue);
}

const closeModal = () => {
  mod.style.display = "none";
};

const image_list = [
  "img/services-portfolio/port_0.jpg",
  "img/services-portfolio/port_1.jpg",
  "img/services-portfolio/port_3.jpg",
  "img/services-portfolio/port_4.jpg",
  "img/services-portfolio/port_2.jpg",
  "img/services-portfolio/port_8.jpg",
  "img/services-portfolio/port_5.jpg",
  "img/services-portfolio/port_6.jpg",
  "img/services-portfolio/port_7.jpg",
  "img/services-portfolio/port_3.jpg",
];
let k = 0;
const nextPhoto = () => {
  modal_image.src = image_list[k];
  k += 1;
  k = k % 10;
};

const previousPhoto = () => {
  modal_image.src = image_list[k];
  k >= 0 ? (k -= 1) : (k = 9);
};
