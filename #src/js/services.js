servicesBtn = document.querySelector(".services__btn");
services = gsap.timeline({
    scrollTrigger:{
        trigger: ".services",
        start:"top 20%+=100px",
        end: "top 20%+=100px",
        toggleActions:"play none",
    }
})

.to(".services__title",{
    opacity: 1,
    duration: 1.5,
    ease: Expo.easeInOut
 })


.to(servicesBtn,2,{
    opacity: 1,      
    ease: Expo.easeInOut
 });

tl = gsap.timeline();
if (availableScreenWidth > 1100) {
    servicesBtn.addEventListener('mouseover',() =>{
        gsap.to(servicesBtn, 2, {color: "#000"});
    });
    servicesBtn.addEventListener('mouseleave',() =>{
    gsap.to(servicesBtn, 2, {color: "#ffd700"});
    });
}
function fadeOutServices() {
    tl.to(servicesBtn,{
            duration:1,
            opacity: 0,
            y:-100,      
            ease: Expo.easeInOut
         })

         .to(".form",{
            display: "block",
            visibility: "visible",
        })

         .to(servicesBtn,{
            delay: 0.2,
            visibility: "hidden",
            display:"none"
        })

        .to(".services__title",{
            duration:0.8,
             y:-300,
             opacity: 0, 
             ease: Expo.easeInOut
         },"-=1")
    
        .to(".services__overlay1",1,{
            left: "-125%", 
            ease: Expo.easeInOut        
         })

         .to(".services__overlay2",0.5,{
            right: "-125%",   
            ease: Expo.easeInOut        
         },"-=1")
         
         .to(".services",{
             height:"120%"
         })
         .to(".services__overlay",0.5,{
             opacity:0,
             ease: Expo.easeInOut,
            })
            
            .to(".services__intro",{
            onComplete: () => title.play(),
            visibility: "hidden",
            display:"none"
        })

         .to(".services__overlay ",{
            visibility: "hidden",
            display:"none"
        })

         .to(".services__title",{
            visibility: "hidden"
         });
}

title = gsap.timeline().pause();

title.from(CSSRulePlugin.getRule(".services__title--section::after"),1,{
    cssRule:{
        width:"100%",
        transformOrign:"right center",
        opacity:1
    }
})

.to(CSSRulePlugin.getRule(".services__title--section::after"),1,{
    cssRule:{
        opacity:0
    },
    repeat:-1,
    yoyo:true,
    duration: 2,
    ease: "power3.out"
})

.to(".span-title-services",{
    duration:0.5,
    opacity:1
},"-=1")

.to(".form",{
    duration:1,
    opacity:1
})

.to(".form__label",{
    duration:1,
    stagger:1,
    opacity:1
})
.to(".form__input",{
    duration:2,
    stagger:1,
    width:"100%",
    opacity:1
})

.from(".btn-animate",{
    opacity:0,
    stagger:1
})

.to(".btn-animate",{
    duration:1.25,
    stagger:1,
    opacity:1
})
.from(".form__price",{
    scale:0
})

.to(".form__price",{
    scale:1,
    duration:1,
})