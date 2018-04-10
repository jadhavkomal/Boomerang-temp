  $(window).scroll(function() {
    if($(this).scrollTop() > 30)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "0";
    /*setTimeout(function(){
      mySidenav .classList.add("opened");
    }, 6000);*/
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  /* setTimeout(function(){
       mySidenav . classList.remove("opened");
    }, 600);*/
}



  
