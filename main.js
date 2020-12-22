    // INSERT QUESTION

function showInsertQuest(){
    var x = document.getElementById("one");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}

    //INSERT MULTI LINE TEXT

const target = document.querySelector("#second");

const displayWhenSelected = (source, value, target) => {
    const selectedIndex = source.selectedIndex;
    const isSelected = source[selectedIndex].value === value;
    target.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
const source = document.querySelector("#location");
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "loc5", target)
);

    //INSERT SINGLE CHOICE

const targetA = document.querySelector("#textbox");

const displayWhenSelectedA = (sourceA, value, targetA) => {
    const selectedIndexA = sourceA.selectedIndexA;
    const isSelectedA = sourceA[selectedIndexA].value === value;
    targetA.classList[isSelectedA
        ? "add"
        : "remove"
    ]("show");
};
const sourceA = document.querySelector("#location");
sourceA.addEventListener("change", (evt) =>
    displayWhenSelected(sourceA, "loc6", targetA)
);

    //INSERT MULTI CHOICE

    const targetB = document.querySelector("#textboxall");

    const displayWhenSelectedB = (sourceB, value, targetB) => {
        const selectedIndexB = sourceB.selectedIndexB;
        const isSelectedB = sourceB[selectedIndexB].value === value;
        targetB.classList[isSelectedB
            ? "add"
            : "remove"
        ]("show");
    };
    const sourceB = document.querySelector("#location");
    sourceB.addEventListener("change", (evt) =>
        displayWhenSelected(sourceB, "loc7", targetB)
    );