const element = document.getElementById("myElement");

const buttons = document.querySelectorAll("div button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    element.innerHTML += buttons[i].innerHTML;
    console.log(buttons[i].innerHTML);
  });
}

const equal = document.getElementById("equal");

equal.addEventListener("click", function () {
  console.log( eval(element.innerHTML) )
  element.innerHTML = eval(element.innerHTML)
});


const delet = document.getElementById( 'delet' )

delet.addEventListener( 'click',function(){
  element.innerHTML = element.innerHTML.slice(0, -1);
} )

const reset = document.getElementById( 'reset' )

reset.addEventListener('click', function(){
  element.innerHTML = ""
})