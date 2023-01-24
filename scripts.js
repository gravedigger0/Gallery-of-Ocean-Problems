const track = document.getElementById("image_track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percent = mouseDelta / maxDelta * -100;
    let nextPercent = parseFloat(track.dataset.prevPercent) + percent; 
    
    nextPercent = Math.min(nextPercent, 0);
    nextPercent = Math.max(nextPercent, -100);

    track.dataset.percent = nextPercent;
    track.style.transform = `translate(${nextPercent}%, -50%)`

    const images = track.getElementsByClassName("image")
    console.log(images)


    for (let image of images) {
        image.style.objectPosition = `${nextPercent + 100}% 50%`
        console.log(image)
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercent = track.dataset.percent
}
