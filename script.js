

"use strict";
let $form=document.querySelector("#form");
let $distance=document.querySelector("#distance");
let $foot=document.querySelector("#foot");
let $bicycle=document.querySelector("#bicycle");
let $car=document.querySelector("#car");
let $plane=document.querySelector("#plance");


$form.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    let myFunction = function(distance){
        let v1=(distance/3.6).toFixed(2);
        let v2=(distance/20.1).toFixed(2);
        let v3=(distance/70).toFixed(2);
        let v4=(distance/200).toFixed(2);
        
        $foot.innerHTML=`
        <h3 style="text-align: center; margin: 0; margin: 10px 0;">Piyoda</h3>
        <p style="text-align: center;">${v1 + " soat"}</p>
        `;
        $bicycle.innerHTML=`
        <h3 style="text-align: center; margin: 0; margin: 10px 0;">Velosoped</h3>
        <p style="text-align: center;">${v2 + " soat"}</p>
        `;
        $car.innerHTML=`
        <h3 style="text-align: center; margin: 0; margin: 10px 0;">Mashinada</h3>
        <p style="text-align: center;">${v3 + " soat"}</p>
        `;
        $plance.innerHTML=`
        <h3 style="text-align: center; margin: 0; margin: 10px 0;">Samolyot</h3>
        <p style="text-align: center;">${v4 + " soat"}</p>
        `;
    }
    myFunction($distance.value - 0)
    
});