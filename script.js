const form = document.getElementById("formMahasiswa");

const tabelMahasiswa = document.getElementById("tabelMahasiswa");
const tabelKelompok = document.getElementById("tabelKelompok");

const hasilData = document.getElementById("hasilData");

let nomor = 1;

// Data anggota kelompok
const anggotaKelompok = [
    "YUNIA - 312510056",
    "GHINA ILMAN SALSAEZAR - 312510496",
    "DJENETE KELOPATRA BENGGU DA COSTA - 312510118",
    "FINA FADILA - 312510097"
];

// Ketika tombol simpan diklik
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;

    // Menampilkan data mahasiswa
    const baris = document.createElement("tr");

    baris.innerHTML = `
        <td>${nomor}</td>
        <td>${nim}</td>
        <td>${nama}</td>
    `;

    tabelMahasiswa.appendChild(baris);

    // Menampilkan data kelompok
    tabelKelompok.innerHTML = "";

    anggotaKelompok.forEach(function (anggota, index) {

        const barisKelompok = document.createElement("tr");

        const kolomNo = document.createElement("td");
        kolomNo.textContent = index + 1;

        const kolomNama = document.createElement("td");
        kolomNama.textContent = anggota;

        barisKelompok.appendChild(kolomNo);
        barisKelompok.appendChild(kolomNama);

        tabelKelompok.appendChild(barisKelompok);

    });

    // Menampilkan hasil
    hasilData.style.display = "block";


    // 2. RESET - TOMBOL RESET, DI LUAR, JANGAN PAKAI form.addEventListener("reset")
    const btnReset = document.getElementById("btnReset"); // atau getElementById tombol Reset kamu
    // atau document.querySelector('button[type="reset"]')

    btnReset.addEventListener("click", function () {
        form.reset();
        // JANGAN pakai hasilData.style.display = "none" di sini
        // kalo kamu mau tabel tetap tampil
    });

});