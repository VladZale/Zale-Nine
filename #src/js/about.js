

let mediaStartInnerBox; 
let mediaStartImg; 
if(availableScreenWidth >=1440){
    mediaStartImg = "top 50%-=100px"
    mediaStartInnerBox = "top 23%+=100px";
}
else if(availableScreenWidth >= 991 && availableScreenWidth <= 1439){
    mediaStartImg = "top 50%-=100px"
    mediaStartInnerBox = "top 11%+=100px";
}
else if(availableScreenWidth >= 500 && availableScreenWidth <= 990){
    mediaStartImg = "top 60%+=100px"
    mediaStartInnerBox = "top 68%+=100px";
}
else{
    mediaStartImg = "top 60%+=100px"
    mediaStartInnerBox = "top 65%+=100px";
}

Titlle = gsap.timeline({
    scrollTrigger:{
        trigger: ".about__title",
        start: "top 50%+=100px",
        end: "top 50%+=100px",
        toggleActions:"play none reverse",
    }
});

Titlle.from(CSSRulePlugin.getRule(".about__title::after"),1,{
    cssRule:{
        width:"100%",
        transformOrign:"right center",
        opacity:1
    }
})
.to(CSSRulePlugin.getRule(".about__title::after"),1,{
    cssRule:{
        opacity:0
    },
    repeat:-1,
    yoyo:true,
    duration: 2,
    ease: "power3.out"
})
.to(".span-title-about",{
    duration:1,
    opacity:1
},"-=1");

Img = gsap.timeline({
    scrollTrigger:{
        trigger: ".box__img",
        start: mediaStartImg,
        endTrigger: ".about__title::after",
        end: "top 50%+=100px",
        toggleActions:"play none reverse",
    }
})
.set(".box__img", {x:"50%", y:"50%"})
.from((".box__img"),{
    x:-100, 
    y:100,
    z:-20, 
    transformOrigin:"0% 100%",
    opacity:0,
})

InnerBox = gsap.timeline({
    scrollTrigger:{
        trigger: ".box__inner",
        start: mediaStartInnerBox,
        endTrigger: ".about__inner",
        end: "top 50%+=100px",
        toggleActions:"play none reverse",
    }
});

InnerBox.from(".box__inner",{
    duration:1.5,
    left:"110%",
})
    .to(".box__text-overlay",1.5,{
        stagger:1,
        width:"5px",
    })
    .to(CSSRulePlugin.getRule(".line::after"),2,{
    cssRule:{
        stagger:1.5,
        width:"100%"
    },
    ease: Power3.easeInOut
});
