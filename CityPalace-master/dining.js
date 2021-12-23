var images=[
    "Images/dining2.jpg",
    "Images/dining3.jpg",
    "Images/dining1.jpg"
]

var rightbutton = document.getElementById('right');
var leftbutton = document.getElementById('left');
var i = 0;
var time = 10000;

// Dynamically link our src path from our js
function setImage() {
    document.slide.src = images[i];
}

// Automatic Slide
function slideImg() {
    if(i<images.length - 1) {
        i++;
    } else {
        i=0;
    }

    setImage();
    setTimeout('slideImg()', time);
}

window.onload = slideImg;

// Right Button
rightbutton.addEventListener('click', function() {
    if(i<images.length - 1) {
        i++;
    } else {
        i=0;
    }

    setImage();
})

// Left Button
leftbutton.addEventListener('click', function() {
    if(i>0) {
        i--;
    } else {
        i=images.length - 1;
    }

    setImage();
})

function finalCost(){
    var foodItem = document.getElementById("food_item").value;
    var specialItemm = document.getElementById("special_item").value;
    var foodQuatity = document.getElementById("food_quantity").value;
    var deliveryType = document.getElementById("delivery_type").value;
    //var deliveryArea = document.getElementById("delivery_area").value;
    var base = (parseInt(foodItem))*(foodQuatity);
    var all_food = base + (parseInt(specialItemm)) + (parseInt(deliveryType));
    document.getElementById("result").innerHTML = all_food;
}
function ok_result(){
    document.getElementById("okResult").style.display="block";
    document.getElementById("okResult").style.backgroundColor="#DCE775";
    document.getElementById("input_box").style.display="none";
}
// Navigation bar mobile
function buttonopenclose() {
    var x = document.getElementById("iconopen");
    var y = document.getElementById("iconclose");
    var close = document.getElementsByClassName("close");
    
    // console.log(close);
    if(x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}
