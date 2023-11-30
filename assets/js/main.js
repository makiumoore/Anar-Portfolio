const navMenu=document.getElementById('sidebar')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

const tabs=document.querySelectorAll('[data-target'),
      tabContent=document.querySelectorAll(['data-content'])

      tabs.forEach(tab=>{
        tab.addEventListener("click", ()=>{
            const target=document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents=>{
                tabContents.classList.remove("skills__active")
            })

            target.classList.add("skills__active")

            tabs.forEach(tab=>{
                tab.classList.remove("skills__active")
            })

            tab.classList.add("skills__active")
        })
      })





const modalViews=document.querySelectorAll('.services__modal'),
      modelBtns=document.querySelectorAll('.services__button'),
      modalCloses=document.querySelectorAll('.services__modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn,i)=>{
    modelBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click",()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})




const sections=document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    let scrollY=window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-50,
        sectionId=current.getAttribute("id");

        if(scrollY>sectionTop && scrollY <=sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}






const coords={x:0, y:0};
const circles=document.querySelectorAll(".circle");

circles.forEach(function(circle){
    circle.x=0;
    circle.y=0;
});

window.addEventListener("mousemove", function(e){
    coords.x=e.clientX;
    coords.y=e.clientY;

    animateCircles();

});

function animateCircles(){

    let x=coords.x;
    let y=coords.y;

    circles.forEach(function (circle, index){
        circle.style.left=x-12+"px";
        circle.style.top=y-12+"px";

       

        circle.x=x;
        circle.y=y;

        const nextCircle=circles[index+1] || circle[0];
        x+=(nextCircle.x-x)*0.3;
        y+=(nextCircle.y-y)*0.3;
    });
}


// var swiper = new Swiper(".swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 10,
//       stretch: 2,
//       depth: -50,
//       modifier: 2,
//       slideShadows: true
//     },
//     spaceBetween: 60,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     }
//   });


// const filterContainer = document.querySelector(".portfolio-filter-inner");
// const filterBtns = filterContainer.children;
// const totalFilterBtn = filterBtns.length;
// const portfolioItems = document.querySelectorAll(".portfolio-item");
// const totalPortfolioItem = portfolioItems.length;

// for (let i = 0; i < totalFilterBtn; i++) {
//     filterBtns[i].addEventListener("click", function() {
//         const currentActive = filterContainer.querySelector(".active");
//         if (currentActive) {
//             currentActive.classList.remove("active");
//         }
//         this.classList.add("active");

//         const filterValue = this.getAttribute("data-filter");

//         for (let k = 0; k < totalPortfolioItem; k++) {
//             const itemCategory = portfolioItems[k].getAttribute("data-category");

//             if (filterValue === "all" || filterValue === itemCategory) {
//                 portfolioItems[k].classList.remove("hide");
//                 portfolioItems[k].classList.add("show");
//             } else {
//                 portfolioItems[k].classList.add("hide");
//                 portfolioItems[k].classList.remove("show");
//             }
//             if(filterValue==="all"){
//                 portfolioItems[k].classList.remove("hide");
//                 portfolioItems[k].classList.add("show");
//             }
//         }
//     });
// }



// const scrollUp=() =>{
//     const scrollUp=document.getElementById('scroll-up')
//     this.scrollY>=350 ?scrollUp.classList.add('show-scroll')
//                             :scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)





const send = document.querySelector("#send");

if (send) {
    send.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('sds');
        alert('sd');
    });
}

const sr = document.getElementById('submit').addEventListener('click',function(){
    alert('sd ')
})

