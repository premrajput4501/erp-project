const roles = [
    "Developer",
    "Designer",
    "Manager",
    "Analyst",
    "Tester",
    "Technical Consultant",
];
const skills = [
    "JavaScript",
    "Python",
    "Project Management",
    "SQL",
    "UI Design",
    "HTML",
    "CSS",
    "JS",
    "Good Communication",
];
const candidates = [];

document.getElementById("roleSyncInputBtn").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = `
                <h2>RoleSync Input</h2>
                <div class="form-group">
                    <label for="candidateName">Candidate Name:</label>
                    <input type="text" id="candidateName" placeholder="Enter Candidate Name">
                </div>
                <div class="form-group">
                    <label for="roleName">Role Name:</label>
                    <select id="roleName">
                        ${roles
                            .map(
                                (role) =>
                                    `<option value="${role}">${role}</option>`
                            )
                            .join("")}
                    </select>
                </div>
                <div class="form-group">
                    <label for="skill">Skills:</label>
                    <select id="skill">
                        ${skills
                            .map(
                                (skill) =>
                                    `<option value="${skill}">${skill}</option>`
                            )
                            .join("")}
                    </select>
                </div>
                <div class="form-group">
                    <label for="experience">Experience (Years):</label>
                    <input type="number" id="experience" placeholder="Enter Experience">
                </div>
                <div class="form-group">
                    <label for="score">Score (%):</label>
                    <input type="number" id="score" placeholder="Enter Score">
                </div>
                <button id="saveRoleSync">Save</button>
            `;

    document.getElementById("saveRoleSync").addEventListener("click", () => {
        const name = document.getElementById("candidateName").value || "N/A";
        const role = document.getElementById("roleName").value || "N/A";
        const skill = document.getElementById("skill").value || "N/A";
        const experience = document.getElementById("experience").value || 0;
        const score = document.getElementById("score").value || 0;

        const eligibility = score >= 50 ? "Eligible" : "Not Eligible";

        candidates.push({ name, role, skill, experience, score, eligibility });

        alert("Candidate details saved successfully!");
    });
});

document.getElementById("roleSyncBtn").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = `
                <h2>RoleSync</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Skills Required</th>
                            <th>Experience Required</th>
                            <th>Key Responsibilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Developer</td>
                            <td>JavaScript</td>
                            <td>2 Years</td>
                            <td>Build and maintain applications.</td>
                        </tr>
                        <tr>
                            <td>Designer</td>
                            <td>UI Design</td>
                            <td>1 Year</td>
                            <td>Create user interfaces and experiences.</td>
                        </tr>
                        <tr>
                            <td>Manager</td>
                            <td>Project Management</td>
                            <td>5 Years</td>
                            <td>Lead teams and manage projects.</td>
                        </tr>
                        <tr>
                            <td>Analyst</td>
                            <td>SQL</td>
                            <td>3 Years</td>
                            <td>Analyze and interpret data.</td>
                        </tr>
                        <tr>
                            <td>Tester</td>
                            <td>Python</td>
                            <td>2 Years</td>
                            <td>Test applications for bugs.</td>
                        </tr>
                        <tr>
                            <td>Technical Consultant</td>
                            <td>HTML, CSS, JS, Good Communication</td>
                            <td>3 Years</td>
                            <td>Provide technical solutions and consultancy.</td>
                        </tr>
                    </tbody>
                </table>
            `;
});

document.getElementById("candidateStackBtn").addEventListener("click", () => {
    let tableRows = candidates
        .map(
            (candidate) => `
                <tr>
                    <td>${candidate.name}</td>
                    <td>${candidate.role}</td>
                    <td>${candidate.skill}</td>
                    <td>${candidate.experience} Years</td>
                    <td>${candidate.score}%</td>
                    <td>${candidate.eligibility}</td>
                </tr>
            `
        )
        .join("");

    if (!tableRows) {
        tableRows = `<tr><td colspan="6">No candidates available</td></tr>`;
    }

    document.getElementById("mainContent").innerHTML = `
                <h2>Candidate Stack</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Skill</th>
                            <th>Experience</th>
                            <th>Score</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            `;
});
