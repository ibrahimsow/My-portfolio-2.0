require('../scss/app.scss');

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
    // $(".my-pic").click(function(){
    //     $(".my-pic").fadeOut("slow", function(){
    //         $('.qualitees').fadeIn('slow');
    //         $(".qualitees").css('display', "block");
    //         $(".my-pic").css('display', "none");
    //     });
    //     $(".my-pic").css('display', "block");
    //     console.log("img");
    // });
    // $(".qualitees").click(function(){
    //     $(".qualitees").fadeOut("slow", function(){
    //         $('.my-pic').fadeIn('slow');
    //         $(".my-pic").css('display', "block");
    //         $(".qualitees").css('display', "none");
                        

    //     });
    //     console.log("qua");
    // });
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

