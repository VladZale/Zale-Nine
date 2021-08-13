const words = ["Валидность.","Адаптивность.","Кроссбраузерность.","БЭМ.","Анимация."]
let size;

let TlCursor = gsap.timeline().pause()

TlCursor.to('.cursor',{
    opacity: 1,
    ease: "power2.inOut",
    repeat: -1,
}); 

let botTl = gsap.timeline().pause()
let text = gsap.timeline().pause()

text.from('.content__suptext',{
    duration:1.5,
    opacity:0,
    ease: "power3.out",
    onComplete: function(){
        botTl.play();
    }
})

let masterTl = gsap.timeline({repeat: -1}).pause()
botTl.from('.this',{
    duration: 1, 
    y: "13vw",
    ease: "power3.out",
    onComplete: function(){
        TlCursor.play();
        masterTl.play();
    }
})

words.forEach(word => {
    let tlT = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1.5})
    tlT.to('.text',{
        duration:1,
        text: word,
        fontSize: size,
        color:"#ffd700"
    })
    masterTl.add(tlT)
    
});

window.addEventListener('resize', ()  => {
    availableScreenWidth = window.screen.availWidth;
    if(availableScreenWidth >= 1301){
        size = 40;
    }
    else if(availableScreenWidth >= 700 && availableScreenWidth <= 1300){
        size = 30;
    }
    else if(availableScreenWidth >= 500 && availableScreenWidth <= 699){
        size = 24;
    }else if(availableScreenWidth >= 450 && availableScreenWidth <= 499){
        size = 14; 
    }
    else if(availableScreenWidth >= 320 && availableScreenWidth <= 449){
        size = 12;
    }
    else{
        size = 10;
    }

    tlT = gsap.timeline().repeat()
});

