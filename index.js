const selectPlan = (planNumber) => {
    const selectPlanNumberElm = document.getElementById (`plan${planNumber}`);
    selectPlanNumberElm.classList.add ('plan--selected');
};

selectPlan (3)