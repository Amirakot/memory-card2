
var card = document.querySelectorAll('.card');//select all cards 
console.log(card)

var flag=true;
var array=[];
var firstCard;
//flip every card

card.forEach(function(e,i){e.addEventListener( 'click', function() {
   if(flag){
    
    e.classList.toggle('is-flipped');
   }
   if(array.length ==0 ){
    var img =e.childNodes[1].nextElementSibling.firstChild;
   console.log(img.src)
   
    array.push(img)
      
}
   else if(array.length==1){
    array.push(img)
   } 
   if(array.length == 2){
    flag=false;
 
    

   }
  
   else{return;}


})

 


  });
  

/*var x;
 x=[...Array.from(card).keys()]
console.log(x)

var random=Math.floor(Math.random()*x.length)
var ran=[];
ran.push(random)
console.log(ran)
var image=document.getElementsByTagName("img");
console.log(image)
var z=Array.from(image)
console.log(z)
function check(img1,img2){
for(var i=0;i<image.length;i++){
if(image[i].src==image[i].src){
    image[i].style.background="bg-green";
    console.log(image[i].src)
}
else if(image[i]!=image[i]){
    image[i].style.background="bg-red"
}
}}
    */