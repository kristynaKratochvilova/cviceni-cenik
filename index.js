const plan1 = document.querySelector ('#plan1');
const plan2 = document.querySelector ('#plan2');
const plan3 = document.querySelector ('#plan3');

const selectPlan = (planNumber) => {
    if (plan1.classList.contains ('plan--selected')) {
        plan1.classList.remove ('plan--selected');
    }
    if (plan2.classList.contains ('plan--selected')) {
        plan2.classList.remove ('plan--selected');
    }
    if (plan3.classList.contains ('plan--selected')) {
        plan3.classList.remove ('plan--selected');
    }

    const selectPlanNumberElm = document.getElementById (`plan${planNumber}`);
    selectPlanNumberElm.classList.add ('plan--selected');
};

selectPlan (3);
