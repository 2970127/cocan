const
    pastille_can = document.querySelector(".pastille.can"),
    pastille_cap = document.querySelector(".pastille.cap"),
    caninfo = document.querySelector("#caninfo"),
    capinfo = document.querySelector("#capinfo");

const scroller = elem => elem.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
});

pastille_can.onclick = () => scroller(caninfo);
pastille_cap.onclick = () => scroller(capinfo);