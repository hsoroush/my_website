

function navFunction(){
 var x = document.getElementById("navbarid");
    if(x.className == "navbar"){
        x.className += " responsiveNav";
    }else{
        x.className = "navbar";
    } 
} 



var bodyVar=document.body;
bodyVar.style.fontFamily="Arial, sans-serif";
var nickName=document.querySelector('#nickname');
nickName.innerHTML="Soroush";

//to add text for Fovorites

var fovorites=document.querySelector('#favorites');

var obj=['Programming', 'Meeting Friends', 'cooking', 'Reading'];
for(var i=0; i < obj.length; i++){
fovorites.innerHTML +=obj[i] + ', ';
}

//to add text for Hometown

var homeTown= document.querySelector('#hometown');

homeTown.innerHTML="Afghanistan";

//////////// add a new class to the each of list under the picture in the about page

var parentName=document.querySelector('#moreInfo');

var list_item=parentName.childNodes;


for(var j=0; j<list_item.length; j++){
    list_item[j].className = 'list-item';
}

var storeClass=document.querySelector('.list-item');

storeClass.style.color='green';







