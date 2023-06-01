const impactsobj = {
    // dummy
    dummyitem: {
        displayName: "Lorem",
        cost: 100,
        needs: ["ipsumreq", "dolorreq"]
    },
    ipsumreq: {
        displayName: "Ipsum",
        cost: 10
    },
    dolorreq: {
        displayName: "Dolor",
        cost: 3.3
    },
    // actual stuff
    car: {
        displayName: "Automobile",
        cost: 10036,
        ges: 4.6 * 1000,
        needs: ["aluminium", "plastic", "newmaterial", "steel", "rubber"]
    },
    can: {
        displayName: "Boîte de conserve (2.6oz)",
        cost: 113099597 + 0.21 + 23.6,
        ges: 0.98,
        needs: ["tin"]
    },
    uniform: {
        displayName: "Uniforme",
        cost: 290,
        ges: 0.004,
        needs: ["newmaterial", "plastic"]
    },
    // reqs
    tin: {
        displayName: "Étain (1934g)",
        cost: 3052.98,
        ges: 0.07,
        needs: []
    },

    newmaterial: {
        displayName: "Tissu",
        cost: 0,
        ges: 0,
        needs: ["cotton", "polystyrene"]
    },
    cotton: {
        displayName: "Cotton",
        cost: 10,
        ges: 0.03,
        needs: []
    },
    polystyrene: {
        displayName: "Polystyrène",
        cost: 2,
        ges: 1000,
        needs: ["plastic"]
    },
    plastic: {
        displayName: "Plastique",
        cost: 1,
        ges: 1000,
        needs: []
    },

    aluminium: {
        displayName: "Aluminium (466lbs)",
        cost: 458.95,
        ges: 100,
        needs: []
    },
    steel: {
        displayName: "Acier (900kg)",
        cost: 1040,
        ges: 10 ** 6,
        needs: ["iron", "coal"]
    },
    iron: {
        displayName: "Fer",
        cost: 200,
        ges: 11,
        needs: []
    },
    coal: {
        displayName: "Carbone de charbon",
        cost: 67,
        ges: 60,
        needs: []
    },
    rubber: {
        displayName: "Caoutchouc (40kg)",
        cost: 15.2,
        ges: 1048,
        needs: []
    },
};

const tracetree = document.querySelector(".tracetree");
const ddmenu = document.querySelector("#starts");
const dotrace = document.querySelector("#dotrace");
const _tracer = (thingarr, costtally = 0, co2tally = 0) => {
    let reqs = [];
    thingarr.forEach(thing => {
        tracetree.insertAdjacentHTML('beforeend', `<span class="impactnode">${thing.displayName}</span>`);
        if (thing.needs) reqs.push(...thing.needs.map(e => impactsobj[e]));
        costtally += thing.cost;
        co2tally += thing.ges;
    });

    if (reqs.length) {
        tracetree.insertAdjacentHTML('beforeend', "<hr>");
        return _tracer(reqs, costtally);
    }
    return { cost: costtally, ges: co2tally };
};
const trace = thing => {
    tracetree.innerHTML = "";
    const { cost, ges } = _tracer([impactsobj[thing]]);
    tracetree.insertAdjacentHTML('beforeend', `<hr><p>Coût d'existence: $${cost.toFixed(2)}<br>Émissions GES: ${ges}g</p>`);
};

dotrace.onclick = e => trace(ddmenu.options[ddmenu.selectedIndex].value);

window.trace = trace;