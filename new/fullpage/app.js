
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
        
        // const firstpagetitle = section.querySelector("#headline");
        // const firstpagetext = section.querySelector('#headline_text');


        // const tl = new TimelineMax({delay:0.5});
        // tl.fromTo(firstpagetitle,1,{y:'50',opacity:0},{y:0, opacity:1})
        //  .fromTo(firstpagetext,1,{opacity:0, x:30},{opacity:1, x:0});


    }
 
});

