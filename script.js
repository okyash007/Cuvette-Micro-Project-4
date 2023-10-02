const element = document.getElementById("myElement");
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const delet = document.getElementById( 'delet' )
const reset = document.getElementById( 'reset' )



for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    element.innerHTML += buttons[i].innerHTML;
    console.log(buttons[i].innerHTML);
  });
}



equal.addEventListener("click", function () {
  console.log( eval(element.innerHTML) )
  element.innerHTML = eval(element.innerHTML)
});




delet.addEventListener( 'click',function(){
  element.innerHTML = element.innerHTML.slice(0, -1);
} )



reset.addEventListener('click', function(){
  element.innerHTML = ""
})