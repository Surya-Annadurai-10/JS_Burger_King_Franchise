let dosa = document.querySelector("#dosa");
let idly = document.querySelector("#idly");
let biriyani = document.querySelector("#biriyani");
let chickenRice = document.querySelector("#chickenrice");
let meals = document.querySelector("#meals");
let shawarma = document.querySelector("#shawarma");
let paniPoori = document.querySelector("#panipoori");
let btn = document.querySelector(".button");
let imgBox = document.querySelector(".img-box");
let orderNo = document.querySelector(".order-num");

//food DataBase
let foodImg = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
    name: "dosa",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
    name: "idly",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    name: "biriyani",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/4/79eac01f-1c14-4fa4-97f3-9cb461767d7c_3b75301f-0d1d-4476-8f38-445fd70c3f29.jpg",
    name: "chickenrice",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/20/b8c807e6-8cfa-4f2c-b170-3eeaeb33e6d2_b4e0b195-1125-4bcf-818e-54d1a1649716.jpg",
    name: "meals",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/5a91ff68d023e999215d120a8f0e73b5",
    name: "shawarma",
  },
  {
    img: "https://s.yimg.com/fz/api/res/1.2/vRlWiQHO_2jcptN0cdg70Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/c59abd02-3664-3a54-a1d4-23c2802e42e6/t_500x300",
    name: "panipoori",
  },
];

let arr = [];


// fetching using Attribute selector;
let food = document.querySelectorAll('[name ="food"]');


food.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    if (element.checked) {
      arr.push(event.target.id);
      console.log(arr);
    }

    // deleting the respective unchecked value 
    if (!element.checked) {
      arr.forEach((ele , i) =>{
        if (event.target.id == ele){
         arr.splice(i, 1);
        }
      })
      console.log(arr);
      
    }
  });
});

btn.addEventListener("click", () => {


  if (arr.length == 0){
    order
  orderNo.innerText = `Select Your Favourite Food and Place Order !!`

  }else{
  orderNo.innerText = `Order ID : ${Math.floor(Math.random() * 1100)}`

  }
  let imgBoxRemove = document.querySelectorAll(".foods");
  
  if (imgBoxRemove.length > 0) {
    imgBoxRemove.forEach((value, index) => {
      value.remove();
      console.log(value);
    });
  }



  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < foodImg.length; j++) {
      if (arr[i] == foodImg[j].name) {

        let order = document.createElement("img");
        order.classList.add("foods");
        order.src = foodImg[j].img;
        //  console.log(order);
        imgBox.appendChild(order);
      }
    }
  }
});

function clear() {}
