const skillTracker = document.getElementById("skillTracker");
const excellenceHub = document.getElementById("excellenceHub");
const skillTrackerData = document.getElementById("skillTrackerData");
const excellenceHubData = document.getElementById("excellenceHubData");
const skillTrackerContent = document.getElementById("skillTrackerContent");
const excellenceHubContent = document.getElementById("excellenceHubContent");
const skillTrackerDataContent = document.getElementById(
    "skillTrackerDataContent"
);
const excellenceHubDataContent = document.getElementById(
    "excellenceHubDataContent"
);
const skillsForm = document.getElementById("skillsForm");
const excellenceForm = document.getElementById("excellenceForm");
const ratingValue = document.getElementById("ratingValue");
const readinessValue = document.getElementById("readinessValue");
const skillTrackerTable = document
    .getElementById("skillTrackerTable")
    .getElementsByTagName("tbody")[0];
const excellenceHubTable = document
    .getElementById("excellenceHubTable")
    .getElementsByTagName("tbody")[0];

skillTracker.addEventListener("click", () => {
    skillTrackerContent.classList.add("active");
    excellenceHubContent.classList.remove("active");
    skillTrackerDataContent.classList.remove("active");
    excellenceHubDataContent.classList.remove("active");
});

excellenceHub.addEventListener("click", () => {
    excellenceHubContent.classList.add("active");
    skillTrackerContent.classList.remove("active");
    skillTrackerDataContent.classList.remove("active");
    excellenceHubDataContent.classList.remove("active");
});

skillTrackerData.addEventListener("click", () => {
    skillTrackerDataContent.classList.add("active");
    excellenceHubDataContent.classList.remove("active");
    skillTrackerContent.classList.remove("active");
    excellenceHubContent.classList.remove("active");
});

excellenceHubData.addEventListener("click", () => {
    excellenceHubDataContent.classList.add("active");
    skillTrackerDataContent.classList.remove("active");
    skillTrackerContent.classList.remove("active");
    excellenceHubContent.classList.remove("active");
});

document.getElementById("proficiency").addEventListener("input", (e) => {
    ratingValue.textContent = e.target.value;
});

document.getElementById("readinessRating").addEventListener("input", (e) => {
    readinessValue.textContent = e.target.value;
});

skillsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const proficiency = document.getElementById("proficiency").value;
    alert("Details saved!");

    const skillData = { name, skills, experience, proficiency };
    let skillDataList = JSON.parse(localStorage.getItem("skillDataList")) || [];
    skillDataList.push(skillData);
    localStorage.setItem("skillDataList", JSON.stringify(skillDataList));
    renderSkillTrackerTable();
});

excellenceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const empName = document.getElementById("empName").value;
    const role = document.getElementById("role").value;
    const performanceScore = document.getElementById("performanceScore").value;
    const readinessRating = document.getElementById("readinessRating").value;
    const achievements = document.getElementById("achievements").value;
    const managerFeedback = document.getElementById("managerFeedback").value;
    const remarks = document.getElementById("remarks").value;
    alert("Details saved!");

    const excellenceData = {
        empName,
        role,
        performanceScore,
        readinessRating,
        achievements,
        managerFeedback,
        remarks,
    };
    let excellenceDataList =
        JSON.parse(localStorage.getItem("excellenceDataList")) || [];
    excellenceDataList.push(excellenceData);
    localStorage.setItem(
        "excellenceDataList",
        JSON.stringify(excellenceDataList)
    );
    renderExcellenceHubTable();
});

function renderSkillTrackerTable() {
    const skillDataList =
        JSON.parse(localStorage.getItem("skillDataList")) || [];
    skillTrackerTable.innerHTML = "";
    skillDataList.forEach((data) => {
        const row = skillTrackerTable.insertRow();
        row.innerHTML = `
                    <td>${data.name}</td>
                    <td>${data.skills}</td>
                    <td>${data.experience}</td>
                    <td>${data.proficiency}</td>
                `;
    });
}

function renderExcellenceHubTable() {
    const excellenceDataList =
        JSON.parse(localStorage.getItem("excellenceDataList")) || [];
    excellenceHubTable.innerHTML = "";
    excellenceDataList.forEach((data) => {
        const row = excellenceHubTable.insertRow();
        row.innerHTML = `
            <td>${data.empName}</td>
            <td>${data.role}</td>
            <td>${data.performanceScore}</td>
            <td>${data.readinessRating}</td>
            <td>${data.achievements}</td>
            <td>${data.managerFeedback}</td>
            <td>${data.remarks}</td>
        `;
    });
}

renderSkillTrackerTable();
renderExcellenceHubTable();
