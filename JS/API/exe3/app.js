let color = document.getElementById('color');
console.log(color.value);
window.onload = function () {
    document.getElementById("color-container").style.backgroundColor = color.value;
  };

document.getElementById('button').addEventListener('click', ()=>{

    document.getElementById("color-container").style.backgroundColor = color.value;

})