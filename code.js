         function myFunction() {
                               var x = document.getElementById("myTopnav");
                             if (x.className === "topnav") {
                                 x.className += " responsive";
                               } else {
                                 x.className = "topnav";
                               }
                             }
                             
                             window.onscroll = function() {myFun()};
                         var header = document.getElementById("mymenu");
                         var sticky = header.offsetTop;
                         function myFun() {
                           if (window.pageYOffset > sticky) {
                             header.classList.add("sticky");
                           } else {
                             header.classList.remove("sticky");
                           }
                         }
                             
                             
                             
                             
                              $(document).ready(function () {
//                     
                       $('a.headhome').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div#MonH1").offset().top
                         }, 1000)
                      })
                     $('a.comp').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div#Img-scroll-1").offset().top
                         }, 1000)
                      })
                      $('a.projet').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div#scroll").offset().top
                         }, 1000)
                      })
                     $('a.forma').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div#eau").offset().top
                         }, 1000)
                      })
                     $('a.format').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div#recette").offset().top
                         }, 1000)
                      })
                     $('a.eau').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div#contact").offset().top
                         }, 1000)
                      })
                     $('a.about').click(function (){
                        $('html, body').animate({
                           scrollTop: $("div.foot").offset().top
                         }, 1000)
                      })
                        $('button.bts').click(function (){
                        $('html, body').animate({
                           scrollTop: $("a.headhome").offset().top
                         }, 1000)
                      })
                    
                     });

//scroll
