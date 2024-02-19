function generateReport() {
    let textArea = document.getElementById("output");
    textArea.textContent = "";
    let checkboxInputs = Array.from(document.querySelectorAll("input[type='checkbox']"));
    let dataRows = Array.from(document.querySelectorAll(" tbody tr"));
    let report = [];
    let columnIndices = [];
    for (let i = 0; i < checkboxInputs.length; i++) {
        if (checkboxInputs[i].checked == true) {
            columnIndices.push(i);
        }
    }
    dataRows.forEach(row => {
        let employee = {};
        for (let i = 0; i < row.children.length; i++) {
            if (columnIndices.includes(i)) {
                employee[checkboxInputs[i].name] = row.children[i].textContent;
            }
        }
        report.push(employee);
    })
    textArea.textContent = JSON.stringify(report);
}