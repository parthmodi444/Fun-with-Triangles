const sides=document.querySelectorAll(".side-input");
const areaBtn=document.querySelector("#area-btn");
const outputEl=document.querySelector("#output");
function getArea()
{
const base=Number(sides[0].value);
const heigth=Number(sides[1].value);
const area=0.5*base*heigth;
outputEl.innerText="The Area  is "+area;

}
areaBtn.addEventListener("click",getArea);