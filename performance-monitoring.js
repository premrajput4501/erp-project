    const departments = [
        "Developer",
        "Designer",
        "Manager",
        "Analyst",
        "Tester",
        "Technical Consultant",
    ];
    const statuses = ["Not Started", "In Progress", "Completed"];
    
    document.getElementById("visionMappingBtn").addEventListener("click", () => {
        document.getElementById("mainContent").innerHTML = `
                    <h2>Vision Mapping</h2>
                    <div class="form-group">
                        <label for="department">Department/Role:</label>
                        <select id="department">
                            ${departments
                                .map(
                                    (dept) =>
                                        `<option value="${dept}">${dept}</option>`
                                )
                                .join("")}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="goalDesc">Goal Description:</label>
                        <textarea id="goalDesc" rows="4" placeholder="Enter detailed goal description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="deadline">Target Deadline:</label>
                        <input type="date" id="deadline">
                    </div>
                    <div class="form-group">
                        <label for="status">Progress Status:</label>
                        <select id="status">
                            ${statuses
                                .map(
                                    (status) =>
                                        `<option value="${status}">${status}</option>`
                                )
                                .join("")}
                        </select>
                    </div>
                    <button onclick="addGoal()">Add Goal</button>

                    <h3>Department/Role Goals</h3>
                    <table id="goalsTable">
                        <thead>
                            <tr>
                                <th>Department/Role</th>
                                <th>Goal Description</th>
                                <th>Target Deadline</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Developer</td>
                                <td>Implement new microservices architecture</td>
                                <td>2024-12-31</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Designer</td>
                                <td>Redesign user interface</td>
                                <td>2024-09-30</td>
                                <td><span class="status-pill completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>Technical Consultant</td>
                                <td>Client solution architecture</td>
                                <td>2024-11-15</td>
                                <td><span class="status-pill not-started">Not Started</span></td>
                            </tr>
                            [Previous code remains exactly the same until the Vision Mapping table body section, where we update the sample data:]

                        <tbody>
                            <tr>
                                <td>Developer</td>
                                <td>Implement new microservices architecture</td>
                                <td>2024-12-31</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Designer</td>
                                <td>Redesign user interface</td>
                                <td>2024-09-30</td>
                                <td><span class="status-pill completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>Technical Consultant</td>
                                <td>Client solution architecture</td>
                                <td>2024-11-15</td>
                                <td><span class="status-pill not-started">Not Started</span></td>
                            </tr>
                            <tr>
                                <td>Analyst</td>
                                <td>Perform system performance analysis and optimization recommendations</td>
                                <td>2024-10-15</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                            <tr>
                            
                            </tr>

                        </tbody>

                        </tbody>
                    </table>
                `;
    });

    document.getElementById("employeeInsightsBtn").addEventListener("click", () => {
        document.getElementById("mainContent").innerHTML = `
                    <h2>Department Insights</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Performance Score</th>
                                <th>Goals Completed</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Developer</td>
                                <td>85%</td>
                                <td>12/15</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Designer</td>
                                <td>92%</td>
                                <td>8/8</td>
                                <td><span class="status-pill completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>Manager</td>
                                <td>88%</td>
                                <td>7/10</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Analyst</td>
                                <td>78%</td>
                                <td>5/8</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Tester</td>
                                <td>95%</td>
                                <td>6/6</td>
                                <td><span class="status-pill completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>Technical Consultant</td>
                                <td>82%</td>
                                <td>9/12</td>
                                <td><span class="status-pill in-progress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                `;
    });

    function addGoal() {
        const department = document.getElementById("department").value;
        const goalDesc = document.getElementById("goalDesc").value;
        const deadline = document.getElementById("deadline").value;
        const status = document.getElementById("status").value;

        const tbody = document.querySelector("#goalsTable tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
                    <td>${department}</td>
                    <td>${goalDesc}</td>
                    <td>${deadline}</td>
                    <td><span class="status-pill ${status
                        .toLowerCase()
                        .replace(" ", "-")}">${status}</span></td>
                `;
        tbody.appendChild(newRow);

        document.getElementById("goalDesc").value = "";
        document.getElementById("deadline").value = "";
    }

    document.getElementById("visionMappingBtn").click();
