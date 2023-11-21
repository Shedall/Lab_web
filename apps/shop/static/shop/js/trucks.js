const truckLeft = document.querySelector('#truck_left');
const truckRight = document.querySelector('#truck_right');

alert(truckLeft,truckRight);

window.addEventListener('scroll',() => {
    truckLeft.style.left = `${truckLeft.clientWidth}px`;
    truckRight.style.left = `-${truckRight.clientWidth}px`;

    truckLeft.style.top = `${truckLeft.clientHeight / 2-10}px`;
    truckRight.style.top = `-${truckRight.clientHeight / 2 + 60}px`;

    var rect = truckLeft.getBoundingClientRect();

    var value = rect.top + truckLeft.clientHeight * 1.8;
    var offset = Math.min(truckLeft.clientWidth - (value * 1.85), -window.innerWidth / 2 + 50)

    truckLeft.style.left = `${offset}px`;
    truckRight.style.left = `${-offset}px`;
})




