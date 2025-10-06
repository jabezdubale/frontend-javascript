interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Jabez",
  lastName: "Dubale",
  age: 25,
  location: "Ethiopia",
};
const student2: Student = {
  firstName: "Lemmi",
  lastName: "Beshada",
  age: 25,
  location: "Ethiopia",
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table: HTMLTableElement = document.createElement("table");
  const tHead: HTMLTableSectionElement = document.createElement("thead");
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  const thFirstName: HTMLTableCellElement = document.createElement("th");
  thFirstName.textContent = "First name";
  headerRow.appendChild(thFirstName);
  const thLocation: HTMLTableCellElement = document.createElement("th");
  thLocation.textContent = "Location";
  headerRow.appendChild(thLocation);

  tHead.appendChild(headerRow);
  table.appendChild(tHead);

  students.forEach(({ firstName, location }: Student) => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const fnCell: HTMLTableCellElement = document.createElement("td");
    fnCell.textContent = firstName;

    const locCell: HTMLTableCellElement = document.createElement("td");
    locCell.textContent = location;

    row.append(fnCell, locCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => renderTable(studentsList));
