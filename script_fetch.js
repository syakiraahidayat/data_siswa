const tbody = document.getElementById("data-siswa");

// mapping ID kelas → nama kelas (contoh)
const classMap = {
  "cda15d2b-9409-4f55-970e-6499592a6336": "XI-C1"
};

// fungsi bantu: kapitalisasi nama
function capitalizeName(name) {
  return name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

fetch("STUDENTS_rows.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }
    return response.json();
  })
  .then(students => {
    students.forEach((student, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.nis}</td>
        <td>${capitalizeName(student.name)}</td>
        <td>${classMap[student.class_id] || "Tidak diketahui"}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error(error);
    tbody.innerHTML = `
      <tr>
        <td colspan="4">Data gagal dimuat</td>
      </tr>
    `;
  });



