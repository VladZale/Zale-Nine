const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

const menuOverlayOne = document.querySelector('.menu__overlay-1');
const menuOverlayTwo = document.querySelector('.menu__overlay-2');

const arrowOne = document.querySelector('.menu__arrow-one');
const arrowTwo = document.querySelector('.menu__arrow-two');
const arrowThree = document.querySelector('.menu__arrow-three');

const arrows = [arrowOne,arrowTwo,arrowThree];

const toggleMenu = new gsap.timeline({paused: true, reversed:true});

let posYStart = 16;
let posYEnd = -16;

if(availableScreenWidth <= 991){
    posYStart = 8;
    posYEnd = -8;
}
toggleMenu
    .to(arrowTwo,0.125,{
        scaleX:0,
        opacity:0
    })
        .to(arrowOne,0.25,{
            transformOrigin: "50% 50%",
            y: posYStart,
            ease:Power2.easeInOut
        },"slide")
        .to(arrowThree,0.25,{
            transformOrigin: "50% 50%",
            y: posYEnd,
            ease:Power2.easeInOut
        },"slide")
        .to(iconMenu,.5,{
            rotation:360,
            ease:Power4.easeInOut
        })
        .to(arrowOne,0.25,{
            rotation:45,
            ease:Power2.easeInOut
        },"cross")
        .to(arrowThree,0.25,{
            rotation:-45,
            ease:Power2.easeInOut
        },"cross")
        .to(menuOverlayOne,{
            duration:1,
            left:"0%",
            ease:Expo.easeInOut
        })
        .to(menuOverlayTwo,{
            duration:1.2,
            left: "0%",
            ease:Expo.easeInOut
        },"-=0.95")
        .to(menuBody,{
            duration:1,
            left: "0%",
            ease:Expo.easeInOut
        },"-=0.9")
        .from(".menu__item",{
            stagger:0.5,
            x:-200,
            opacity:0,
            ease: Expo.easeInOut
        });

    iconMenu.addEventListener('click', _ => {
        toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
        document.body.classList.toggle('lock');
    });
