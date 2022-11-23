const backgroundColorList = [
    "#c0c0c0 0%, #d3d3d3 99%, #dcdcdc 100%", 
    "#fffaf0 0%, #f0f8ff 99%, #f5f5f5 100%", 
    "#dbdbff 0%, #e0e0ff 100%" , 
    "#545466 0%, #3f3f4c 100%" , 
    "#194466 0%, #1e517a 100%", 
    "#c1dbef 0%, #d6e7f4 100%", 
    "#ffd2da 0%, #ffd9df 100%", 
    "#4c4c4c 0%, #666666 100%", 
    "#81947b 0%, #6c8265 100%", 
    "#ebf1d4 0%, #e9f0d0 100%"];
const colorBtn = document.querySelector("#color");
const colorListDiv = document.querySelector(".colorList");
const colorBtnInList = document.querySelectorAll(".changeColor");

document.body.style.background = `linear-gradient(45deg, ${"#c0c0c0 0%, #FFFFFF 99%, #dcdcdc 100%"})`;

for (i=0; i<colorBtnInList.length; i++){
    colorBtnInList[i].style.background = `linear-gradient(45deg, ${backgroundColorList[i]})`;
}

colorBtn.addEventListener("click", function() {
    colorListDiv.classList.toggle("hidden");
});

function changeBackgroundColor(index) {
    document.body.style.background = `linear-gradient(45deg, ${backgroundColorList[index]})`;
}
