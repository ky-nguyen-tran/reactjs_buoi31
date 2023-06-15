

import { useState } from "react";
import modelImg from "../assets/img/model.jpg"
const data =[
    {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: require("../assets/img/v1.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: require("../assets/img/v2.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: require("../assets/img/v3.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: require("../assets/img/v4.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: require("../assets/img/v5.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: require("../assets/img/v6.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: require("../assets/img/v7.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: require("../assets/img/v8.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: require("../assets/img/v9.png"),
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

function Btap() {
    const [img,setImg] = useState();
  return (
    <div>
        <div className="model-container">
      <img className="model-img" src={modelImg} alt="" />
      {img?<img className="selected-glass" src={img} alt="" />:null}
      </div>
      <div className="glass-list">
{data.map((glass,index)=>{
    console.log(glass.url);
    return (
        <img onClick={()=>setImg(glass.url)} key={glass.id} src={glass.url} alt="" />
    )
})}
      </div>
    </div>
  );
}

export default Btap;
