@@include('_libs.js')

startBtn = document.querySelector(".myBtn");

introTl = gsap.timeline();

introTl.to(".logo path:nth-child(1)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(2)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(3)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(4)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(5)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(6)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(7)",{
    animationPlayState: "running"
})
introTl.to(".logo path:nth-child(8)",{
    animationPlayState: "running"
})

introTl.to(".logo",{
    delay:0.3,
    animationPlayState: "running"
})

window.addEventListener('load', () => {
    gsap.from(startBtn,{
        delay:.5,
        visibility: "hiden",
        display: "none",
        duration:1.5,
        opacity: 0,
        y: 100,
        ease: Power2.easeInOut
        })

    gsap.to(startBtn,{
        delay:1,
        duration: 2.5,
        opacity: 1,
        ease: Power2.easeInOut,
        visibility: "visible",
        display: "inline-block",
        });
});

if (availableScreenWidth > 1100) {
    startBtn.addEventListener('mouseover',() =>{
        gsap.to(startBtn, 2, {color: "black"});
    });
    startBtn.addEventListener('mouseleave',() =>{
        gsap.to(startBtn, 2, {color: "white"});
    });
}

 function fadeOut() {
      gsap.from(startBtn,{
        visibility: "hidden",
        display:"none",
     });

     gsap.to(startBtn,{
        visibility: "visible",
        display:"block",
     });

     gsap.to(startBtn,{
        duration:1,
        autoAlpha: 1,
     });

     gsap.to(startBtn,{
        duration:1,
        autoAlpha: 0,
        visibility: "hidden",
        display:"none",
     });

     gsap.to(".goto",{
         visibility:"hidden",
         display: "none",
     })

     gsap.to(".logo",2,{
         y:-300,
         opacity: 0
     });

     gsap.to(".logo",2,{
         y:-400,
         opacity: 0,
         ease: Power2.easeInOut,
         delay: 2
     });

     gsap.to(".overlay",2,{
        delay:1,
        top: "-125%",
        ease: Expo.easeInOut
     });

     gsap.to(".overlay-2",2,{
         delay:1.2,
         top: "-125%",
         ease: Expo.easeInOut
     });

     gsap.to(".overlay-3",2,{
        delay:1.3,
        top: "-125%",
        ease: Expo.easeInOut,
        onComplete: function(){
            tlText.play();
        }
    });
    gsap.to(".body",2,{
        delay:1.8,
        overflow: "visible"
    });
    gsap.from(".wrapper",2,{
         opacity: 0,
         ease: Power2.easeInOut
     });

     gsap.to(".wrapper",2,{
         opacity:1,
         delay: 1,
         ease: Power2.easeInOut,
         visibility: "visible",
         display: "flex",   
     });
     gsap.to(".overlay",{
         delay:1.6,
        display:"none"
     });
 }

