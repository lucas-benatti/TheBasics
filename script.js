document.querySelector(".photos").addEventListener("wheel", event => {
 if(event.deltaY > 0){
   event.target.scrollBy(100, 0);
 } else {
  event.target.scrollBy(-100, 0);
 }
})