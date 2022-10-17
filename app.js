const canvas = document.querySelector("#canvas");

document.body.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDec = mouseX / window.innerWidth,
          yDec = mouseY / window.innerHeight;

    const maxX = canvas.offsetWidth = window.innerWidth;
    const maxY = canvas.offsetHeight = window.innerHeight;


    let translateX = maxX * xDec * -1;
    let translateY = maxY * yDec * -1;

    console.log({translateX, translateY});

    canvas.animate({
        transform: `translate(${translateX}px, ${translateY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })

});