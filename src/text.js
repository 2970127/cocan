const scenarios = [
    // [
    //     "oh hi there",

    //     "side:cap",
    //     "Hello there my dearest underpaid trash Oyo",

    //     "side:can",
    //     "express:sad",
    //     "...",
    //     "wait:2000",

    //     "express:bruh",
    //     "That wasn't very nice.",
    //     "wait:1000",

    //     "side:cap",
    //     "I shitten't give! *laughs capitalistically*",
    //     "wait:5000",
    //     "wipe:"
    // ],
    [
        "side:cap",
        "Gaspiller, c'est négligeable!",
        "Tant qu'on respecte au minimum les régulations,\nc'est bien de développer l'économie générale!",

        "side:can",
        "La source du problème, c’est notre mode de vie!",
        "express:sad",
        "Nous surconsommons!",
        "express:bruh",
        "Le gaspillage arrive car nous achetons trop,\ncar les industries produisent trop,\nrien n’est pris à une valeur complète!"
    ],
    [
        "side:cap",
        "Tant que ça fait plaisir, c’est bien d’acheter pour soi!",

        "side:can",
        "express:bruh",
        "Au moins, achetez quelque chose de durable ou d’utile!",
        "express:sad",
        "La durabilité d’objets de divertissements diminue de plus en plus."
    ],
    [
        "side:cap",
        "Le monde tourne autour du profit!",
        "Tant que l’argent rentre, le monde ferme les yeux!",

        "side:can",
        "express:sad",
        "Des milliers, des enfants et des femmes,",
        "sont exploités dans les usines,",
        "par exemple du Bengal, à chaque jour!"
    ],
    [
        "side:cap",
        "Les changements climatiques, c’est des fake News.",
        "Où du moins, l’industrie ne contribue pas grand-chose,",
        "c’est toutes les pailles en plastique et les voitures du peuple.",

        "side:can",
        "Les industries blâment le monde,",
        "mais l’industrie profite de changer à des pailles\nen papier, tandis que le consommateur paye!",
        "express:sad",
        "Les jets privés produisent une quantité\ninnombrable de gaz à effet de serre !"
    ],
    [
        "side:can",
        "Le saviez-vous?",
        "express:sad",
        "Plusieurs personnes forment des addictions\nà acheter impulsivement des produits.",

        "side:cap",
        "C’est un problème de notre monde moderne.",
        "Tant que c’est profitable."
    ],
    [
        "side:can",
        "Il faut arrêter de surproduire!",
        "À chacun ses besoins de chacun de ses habilités,",
        "pas plus, pas moins!",

        "express:bruh",
        "side:cap",
        "Bouche fermée, racaille rouge du syndicalisme!"
    ],
    [
        "side:can",
        "Arrêtez la publicité avec de grands écrans!",
        "Ça consomme autant que plusieurs maisons!",

        "side:cap",
        "Cela est mieux que d’imprimer une myriade de pancartes.",
        "Vous aimez vos arbres, non?"
    ],
    [
        "side:can",
        "Avant de jeter quelque chose,\nvous pourrez le donner à quelqu’un d’autre!",

        "express:bruh",
        "side:cap",
        "Qui voudrait de quelque chose usé?"
    ]
]

const sleep = ms => new Promise(res => setTimeout(res, ms));

const msgs = document.querySelector(".msgcontainer");
const msgtext = (side, str) => msgs.insertAdjacentHTML('beforeend', `<div class="row"><div class="msg ${side}"><div>${str}</div></div></div>`);
const texting = async msgobj => {
    let side = "can", delay = 1000;

    for (const msg of msgobj) {
        if (msg.startsWith("side:")) {
            side = msg.split("side:")[1];
            continue;
        }

        if (msg.startsWith("delay:")) {
            delay = Number(msg.split("delay:")[1]);
            continue;
        }

        if (msg.startsWith("wait:")) {
            await sleep(msg.split("wait:")[1]);
            continue;
        }

        if (msg.startsWith("wipe:")) {
            msgs.innerHTML = "";
            continue;
        }

        if (msg.startsWith("express:")) {
            const expression = msg.split("express:")[1];
            document.querySelector(`.pastillerow > .${side}`).style.backgroundImage = `url(./img/${side}/${expression}.png)`
            console.log(side, expression, document.querySelector("." + side));

            continue;
        }

        msgtext(side, msg);
        await sleep(delay + msg.length * 50);
    };
    if (side != "meta") texting([
        "delay:0",
        "wipe:",

        "side:can",
        "express:0",

        "side:cap",
        "express:0",

        "side:meta"
    ]);
}

window.texting;

window.scenarios = {
    foo: [
        "oh hi there",

        "side:cap",
        "Hello there my dearest underpaid trash Oyo",

        "side:can",
        "express:sad",
        "...",
        "wait:2000",

        "express:bruh",
        "That wasn't very nice.",
        "wait:1000",

        "side:cap",
        "I shitten't give! *laughs capitalistically*",
        "wait:5000",
        "wipe:"
    ]
};

window.playTextScenario = async button => {
    button.disabled = true;
    const i = Math.floor(Math.random() * scenarios.length);
    await texting(scenarios[i]);
    button.disabled = false;
}