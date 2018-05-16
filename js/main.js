$(document).ready(function(){
    setInterval(chanchePnone,5000);
});
function chanchePnone() {
    // console.log(($('.iphone').attr("src") === "img/iphone.png"));
    if($('.iphone').attr("src")== "img/iphone.png"){
       var src = "img/iphonevk.png";
    }else if($('.iphone').attr("src")== "img/iphonevk.png"){
        var src = "img/iphoneinst.png";
    }else{
        var src = "img/iphone.png";
    };
    console.log(src);
    $('.iphone').attr("src", src);

}