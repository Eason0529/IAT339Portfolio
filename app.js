const cursor = document.querySelector(".cursor");



document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");
 
  setTimeout(() => {
      cursor.classList.remove("expand");
  }, 500)
})
new fullpage("#fullpage", {
    autoScrolling: true,
    navigation:true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        console.log(destination);
        const tl = new TimelineMax({delay:0.5});
        const title = section.querySelector('h1');
        tl.fromTo(title,1,{y:'50',opacity:0},{y:0, opacity:1});
        
        if(destination.index === 1){
            const secondpageselfimg = section.querySelector(".imgbox");

            const secondpagebio = section.querySelector(".bio");

            tl.fromTo(secondpageselfimg,.7,{y:'50',opacity:0},{y:0, opacity:1});
            tl.fromTo(secondpagebio,.7,{x:'100%',opacity:0},{x:"0%", opacity:1}, "-=0.7");
        }


        if(destination.index === 2){
            const videowidth = section.querySelector(".videowidth");
            const imgcontainer = section.querySelector(".imgcontainer");
            const projectcontentone = section.querySelector(".projectcontentone");
            tl.fromTo(videowidth,1,{y:'50',opacity:0},{y:0, opacity:1})
            .fromTo(imgcontainer,1,{x:'-100%',opacity:0},{x:"0%", opacity:1}, "-=1")
            .fromTo(projectcontentone,1,{x:'100%',opacity:0},{x:"0%", opacity:1}, "-=1");
        }

        if(destination.index === 3){
            const videowidth = section.querySelector(".videowidth");
            const imgcontainer = section.querySelector(".imgcontainer");
            const projectcontenttwo = section.querySelector(".projectcontenttwo");
            tl.fromTo(videowidth,1,{y:'50',opacity:0},{y:0, opacity:1})
            .fromTo(imgcontainer,1,{x:'-100%',opacity:0},{x:"0%", opacity:1}, "-=1")
            .fromTo(projectcontenttwo,1,{x:'100%',opacity:0},{x:"0%", opacity:1}, "-=1");
        }

        if(destination.index === 4){
            const contactanimation = section.querySelector(".contactanimation");
            const imgcontainer = section.querySelector(".imgcontainer");
            tl.fromTo(contactanimation,1,{y:'50',opacity:0},{y:0, opacity:1})
            .fromTo(imgcontainer,1,{x:'-100%',opacity:0},{x:"0%", opacity:1}, "-=1");
        }
        

    }
 
});

$(document).ready(function(){
    $(".videowidth").hover(function(){
        $(this).children("video")[0].play();
    },
    function(){
    $(this).children("video")[0].pause();
    });
});

