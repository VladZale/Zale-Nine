Titlle = gsap.timeline({
    scrollTrigger:{
        trigger: ".work__title",
        start: "top 50%+=100px",
        end: "top 50%+=100px",
        toggleActions:"play none reverse",
    }
});

Titlle.from(CSSRulePlugin.getRule(".work__title::after"),1,{
    cssRule:{
        width:"100%",
        transformOrign:"right center",
        opacity:1
    }
})
.to(CSSRulePlugin.getRule(".work__title::after"),1,{
    cssRule:{
        opacity:0
    },
    repeat:-1,
    yoyo:true,
    duration: 2,
    ease: "power3.out"
})
.to(".span-title-work",{
    duration:1,
    opacity:1
},"-=1");


document.querySelectorAll(".work__item").forEach((item) => {
    // begin
            gsap.fromTo(item, {
                left: "-125%"
            }, {
                scrollTrigger: {
                    trigger: item,
                    start: "top center",
                    end: "top center",
                    toggleActions:"play none reverse",
                  
                },  
            }) 
            // begin to end
            gsap.fromTo(item, {
                left: "-125%"
            }, {
                scrollTrigger: {
                    trigger: item,
                    start: "top center",
                    end: "top center",
                    toggleActions:"play none reverse",
                   
                },
                duration: 3,
                left: "0%",
                immediateRender: false,
         
            })  
})

