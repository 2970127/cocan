const rotCard = function (e, elem) {
    const
        x = e.clientX,
        y = e.clientY;

    const
        rect = elem.getBoundingClientRect()
    middleX = (rect.left + rect.right) / 2,
        middleY = (rect.top + rect.bottom) / 2;

    const
        maxAngle = 20,
        offsetX = Math.min(Math.max((x - middleX) / middleX, -1), 1) * maxAngle,
        offsetY = Math.min(Math.max((y - middleY) / middleY, -1), 1) * maxAngle;

    elem.animate({
        transform:
            `perspective(8000px) 
            rotateX(${-1 * offsetY}deg) 
            rotateY(${offsetX}deg)`
    }, { duration: 3000, fill: "forwards", easing: "ease-in-out" })
};

document.querySelectorAll(".neucard").forEach(elem =>
    document.addEventListener("mousemove", e => rotCard(e, elem))
);