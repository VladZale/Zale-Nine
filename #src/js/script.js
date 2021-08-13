let availableScreenWidth = window.screen.availWidth;

@@include('_gsap.js')
@@include('three.min.js')
@@include('hover.js')
@@include('lazy.js')
@@include('webp.js')
@@include('burger.js')
@@include('burgerAnimate.js')
@@include('content.js')
@@include('about.js')

new hoverEffect({
    parent: document.querySelector('.box__img'),
    intensity: 0.2,
    image1: "img/me.webp",
    image2: "img/me2.webp",

    displacementImage: "img/3b.webp"
});

var skewSetter = gsap.quickSetter(".box__img","skewY","deg");
var proxy = {skew:0}

ScrollTrigger.create({
    onUpdate: self =>{
        var skew = self.getVelocity() / -300;
        if(Math.abs(skew) > Math.abs(proxy.skew)){
            proxy.skew = skew;
            gsap.to(proxy,{
                skew:0,
                duration:1,
                ease:"power3",
                overwrite:true,
                onUpdate:() => skewSetter(proxy.skew)
            })
        }
    }
});

@@include('work.js')
@@include('popup.js')
@@include('services.js')
@@include('form.js')