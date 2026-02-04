const students = [
  {
    id: "39510371-20c4-4385-8af3-aa52f660271e",
    nis: "123",
    name: "Ahmad Sahroni",
    class_id: "X-A"
  },
  {
    id: "ab893e7a-40fa-4129-9644-afba9e3adc89",
    nis: "12345",
    name: "Ahmad Bahlil",
    class_id: "X-A"
  }
];

const tbody = document.getElementById("data-siswa");

students.forEach((student, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.nis}</td>
    <td>${student.name}</td>
    <td>${student.class_id}</td>
  `;

  tbody.appendChild(row);
});
