function loadMembers() {
    const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB-lujJVUStXFEKixYku5ENN5ibGiTJwm_dx3amDX-ShMcZcqyOSNw3O1Gh7-qbg4tfVmHs4iNpMcm/pub?output=csv"

    fetch(SHEET_URL)
        .then(res => res.text())
        .then(csv => {
            const rows = csv.trim().split("\n").slice(1);
            const html = rows.map(row => {
                const [lastName, firstName, email, phone] = row.split(",");

                return `
                    <p>
                        <strong>${firstName} ${lastName}</strong><br/>
                        Email: <a href="mailto:${email}">${email}</a><br/>
                        Phone: ${phone}
                    </p>
                `;
            }).join("");
            document.getElementById("members-list").innerHTML = html;
        })
        .catch(err => {
            document.getElementById("members-list").innerHTML = "<!> Error loading data . . .";
        });
}

document.addEventListener("DOMContentLoaded", loadMembers);