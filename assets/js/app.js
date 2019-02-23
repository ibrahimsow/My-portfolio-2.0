require('../scss/app.scss');
// const $ = require('jquery');
// require('bootstrap');

// transition sur la redirection de mon liens d'ancrage
console.log("hey");
AOS.init();

$(document).ready(function() {
    $(window).on('scroll', function() {
      if (Math.round($(window).scrollTop()) > 100) {
        $('.mynav').addClass('scrolled');
      } else {
        $('.mynav').removeClass('scrolled');
      }
    });
    $(".my-pic").click(function(){
        $(".my-pic").fadeOut("slow", function(){
            $('.qualitees').fadeIn('slow');
            $(".qualitees").css('display', "block");
            $(".my-pic").css('display', "none");
        });
        console.log("img");
    });
    $(".qualitees").click(function(){
        $(".qualitees").fadeOut("slow", function(){
            $('.my-pic').fadeIn('slow');
            $(".my-pic").css('display', "block");
            $(".qualitees").css('display', "none");
        });
        console.log("qua");
    });
  });

(function() {
    var speed = 600;
    var moving_frequency = 15; // Affects performance !
    var links = document.querySelectorAll("a"); // Active links
    var href; 
    for(var i=0; i<links.length; i++)
    {   
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
        {
            links[i].onclick = function()
            {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if(element = document.getElementById(href.substr(1)))
                {
                    var hop_count = speed/moving_frequency
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                    
                    for(var j = 1; j <= hop_count; j++)
                    {
                        (function()
                         {
                             var hop_top_position = gap*j;
                             setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*j);
                         })();
                    }
                }
                
                return false;
            };
        }
    }
    
    var getScrollTopElement =  function (e)
    {
        var top = 0;
        
        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        
        return top;
    };
    
    var getScrollTopDocument = function()
    {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();

const monmenu = document.querySelector(".showmenu");
const divmenu = document.querySelector(".menu");
const monhamberger = document.querySelector(".hamburger");
const close = document.querySelector(".closeBtn");
const closemenuaccueil = document.querySelector(".accueil");
const closemenuprojets = document.querySelector(".projets");
const closemenuapropos = document.querySelector(".apropos");
const closemenucontact = document.querySelector(".contact");

// monhamberger.addEventListener("click", function(showmenu){
//        document.querySelector(".showmenu").style.top = "0vh";
//     //    document.querySelector(".menu").style.display = "block";
//        // document.querySelector(".hamburger").style.display = "none";
//  })
//  close.addEventListener("click", function(hidemenu){
//         document.querySelector(".showmenu").style.top = "-150vh";
//  })
//  closemenuaccueil.addEventListener("click", function(hidemenu){
//      document.querySelector(".showmenu").style.top = "-150vh";
//  })
//  closemenuprojets.addEventListener("click", function(hidemenu){
//     document.querySelector(".showmenu").style.top = "-150vh";
// })
//  closemenuapropos.addEventListener("click", function(hidemenu){
//      document.querySelector(".showmenu").style.top = "-150vh";
//  })

 // sticky menu

//  $(document).ready(function() {
//  window.addEventListener('scroll', function () {
//   if (window.pageYOffset >= 50) {
//     $(".portfolio-nav").css("position", "sticky");
//     $(".portfolio-nav").css("box-shadow", "0px 1px 11px 0px rgba(0,0,0,0.22)");
//     $(".portfolio-nav").css("background", "linear-gradient(#fff, #ffffffbf)");
//   } else {
//     $(".portfolio-nav").css("position", "absolute");
//     $(".portfolio-nav").css("box-shadow", "none");
//     $(".portfolio-nav").css("background", "none");

//   }
// });
// });



  // dashboard


//change hambuger menu color on red when i'm on section-appli
// var fullScreen = $(window).height();  
// $(document).ready(function(){
//    $(window).scroll(function(){
//       var scroll = $(window).scrollTop();
//       if (scroll > fullScreen) {
//         $(".btn-menu").css("backgroundColor" , "#a70000fa");
//       }
//       else{
//          $(".btn-menu").css("backgroundColor" , "white");  	
//       }
//    })
//  })

//  window.onresize = function(event) {
//    $(window).scroll(function(){
//       var scroll = $(window).scrollTop();
//       if (scroll > fullScreen) {
//         $(".btn-menu").css("backgroundColor" , "#a70000fa");
//       }
//       else{
//          $(".btn-menu").css("backgroundColor" , "white");  	
//       }
//    })
// };
 