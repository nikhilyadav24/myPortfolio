function startLoader(){
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter(){
        if(currentValue ===100){
            return;
        }
        currentValue += Math.floor(Math.random()*10) +1;

        if(currentValue>100){
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random()*200)+50;
        setTimeout(updateCounter , delay);
    }
    updateCounter();
}
startLoader();


gsap.to(".counter" , 0.25 , {
    delay:3,
    opacity:0,
});

gsap.to(".bar" , 0.4 , {
    delay : 3.5,
    height :0,
    stagger:{
        amount:0.5,
    }
    // ease:"power4 .inOut",
});


gsap.from(".h1" , 0.5 , {
    delay:4,
    y:400,
    opacity:0,
    stagger:{
        amount:0.4,
    }
    // ease:"power4 .inOut",
})

// gsap.from(".hero" , 0.5 , {
//     delay:4,
//     y:1200,
//     // opacity:0,
//     stagger:{
//         amount:0.4,
//     }
//     // ease:"power4 .inOut",
// })

gsap.to(".hero" ,{
    // delay:5,
    // y:1200,
    scrollTrigger:{
        trigger:".hero1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 80%",
        scrub:1.3,

    },
    scale:1.2,
})



gsap.from(".quote", {
    scrollTrigger: {
        trigger: ".quote",
        toggleActions: "restart pause resume reverse",
        start: "top 60%",
        // markers:true,
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
      opacity:0,
    });
gsap.from(".quote1", {
    scrollTrigger: {
        trigger: ".quote1",
        toggleActions: "restart pause resume reverse",
        start: "top 60%",
        // markers:true,
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
      opacity:0,
    });




    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    
    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    const section_1 = document.getElementById("vertical");
    const col_left = document.querySelector(".col_left");
    const timeln = gsap.timeline({ paused: true });
    
    timeln.fromTo(col_left, {y: 0}, {y: '80vh', duration: 1, ease: 'none'}, 0);
    
    const scroll_1 = ScrollTrigger.create({
        animation: timeln,
        trigger: section_1,
        start: 'top top',
        end: 'bottom center',
        scrub: true,
    });
    
    const section_2 = document.getElementById("horizontal");
    let box_items = gsap.utils.toArray(".horizontal__item");
    
    gsap.to(box_items, {
      xPercent: -100 * (box_items.length - 1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: section_2,
        pin: true,
        scrub: 3,
        snap: 1 / (box_items.length - 1),
        end: "+=" + section_2.offsetWidth
      }
    });


let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap
    .to(".marquee_part",{
    xPercent:-100,
    repeat:-1,
    duration:3,
    ease:"linear",
    })
    .totalProgress(0.5);

    // gsap.set("marquee_inner",{xPercent:-50});

    // window.addEventListener("scroll",function(){
    //     if(this.window.pageYOffset>currentScroll){
    //         isScrollingDown= true;
    //     }else{
    //         isScrollingDown=false;
    //     }

    //     gsap.to(tween,{
    //         timeScale:isScrollingDown ? 1:-1,
    //     });

    //     arrows.forEach((arrow)=>{
    //         if(isScrollingDown){
    //             arrow.classList.remove("active");
    //         }else{
    //             arrow.classList.add("active");
    //         }
    //     });

    //     currentScroll = window.pageYOffset;
    // })


    gsap.utils.toArray(".color").forEach(function(elem) {

        var color = elem.getAttribute('data-color');
        
        ScrollTrigger.create({
          trigger: elem,
          start:'top 50%',
          end:'bottom 50%',
          onEnter: () => gsap.to('.color', {backgroundColor:'#5691f0'}),
          onLeaveBack: () => gsap.to('.color', {backgroundColor:color}), 
        //   markers:true,
          duration:4,
        });
    });


    var cursor = document.querySelector('.cursor'),
        cursorScale = document.querySelectorAll('.cursor-scale'),
        mouseX = 0,
        mouseY = 0

    gsap.to({}, 0.001, {
        repeat: -1,
        
        onRepeat: function () {
            gsap.set(cursor, {
                
                css: {
                    left: mouseX - 15,
                    top: mouseY - 15
                }
            })
        }
    });
    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX ;
        mouseY = e.clientY ;
    });

    // $(document).ready(function(){
    //     $(".hover-this").hover(function(){
    //       $(".cursor").css("transform", "translate(-50%, -50%) scale(8)");
    //       }, function(){
    //       $(".cursor").css("transform", "translate(-50%, -50%) scale(1)");
    //     });
    //   });
 