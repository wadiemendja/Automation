const loop = setInterval(() => {

    const video = document.querySelector('video');
    video.play();
    video.addEventListener("ended", () => {
        setTimeout(() => {
            document.querySelector('[value="no"]').click();
            document.querySelector('[value="false"]').click();
            document.querySelector('.primary').click();
        }, 1000);
    });

}, (document.querySelector('video').duration + 5) * 1000);


setInterval(() => {
    if (document.body.innerText.indexOf('Your task queue is empty') == 0)
        clearInterval(loop)
}, 5 * 1000);

