// let food1s = document.getElementById('food1');
// let food2s = document.getElementById('food2');
// let food4s = document.getElementById('food4');
// let food5s = document.getElementById('food5');
// let food6s = document.getElementById('food6');
// let food7s = document.getElementById('food7');
// let food8s = document.getElementById('food8');
// let food9s = document.getElementById('food9');
// let foods = document.getElementById('food');



// food1s.addEventListener('click',()=>{
//     document.body.style.backgroundImage = "url('./Magi.png')";
// })

// food2s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })
// food4s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })
// food5s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })
// food6s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })
// food7s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })
// food8s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })
// food9s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food.jp')";
// })

const items = [
    "./pizaa.png",
    "./burger.png",
    "./sandwich.png",
    "./fries.png",
    "./SpringRoll.png",
   " ./Momos.png",
   "./Noodles.png",
   "./Pasta.png"
]

const MainImage = document.getElementById("food");


const menu  = document.getElementById("menu");



// const body = document.body;
// console.log(body);
let str="";

window.addEventListener("load",()=>{
    // console.log("Hello");
    let arr = [];
  items.map((item,index)=>{
    str += `
     <div class="food_image">
      <img src=${item} class="image"  alt=item${index+1}/>
     </div>
    `
  })
  menu.innerHTML += str;
  const image = document.getElementsByClassName("image");
//   console.log(image);
  arr = Array.from(image);
//   console.log(arr)

   handleClick(arr);
});

function setMainImage(item){
//   console.log("clicked");
  MainImage.style.backgroundImage = `url(${item})`;
}



function handleClick(arr){
    // for(let i=0;i<arr.length;i++){
    //     console.log(arr[i])
    // }

    arr.map((item)=>{
        item.addEventListener("click",(e)=>{
            let x=e.target.attributes[0].nodeValue;
        //  console.log(e.target.attributes[0].nodeValue);
        setMainImage(x);
        })
    })
}
// console.log(food_image);
// const array = Array.from(food_image);
// console.log(array);
// // array.map(())
// console.log(array);

