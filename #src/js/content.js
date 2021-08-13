let tlText = gsap.timeline().pause();

tlText.to(".header",{
    width:"100%",
    opacity:1,
    duration:1
})

.from(".letter",1.5,{
    y:250,
    stagger: {
        from: "random",
        amount: 1.5,
        ease: "power2.in",
        onComplete: () => text.play()
    }
})

.from(".scroll-animation",{
    opacity:0,
    y:200,
    duration:2
});


if (availableScreenWidth >= 1000) {
        document.addEventListener("mousemove", parallax);
        function parallax(e) {
        document.querySelectorAll(".object").forEach(function(move){
            if (availableScreenWidth >= 1000) {
                var moving_value = move.getAttribute("data-value");
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;

                move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
            }
            else{
                return;
            }
        });
    }
}
@@include('typing.js')