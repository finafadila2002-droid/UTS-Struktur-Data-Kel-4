// file script.js

const users = [
    {
        nim: "312510056",
        nama: "YUNIA"
    },

    {
        nim: "312510097",
        nama: "FINA FADILA"
    },

    {
        nim: "312510496",
        nama: "GHINA ILMAN SALSAEZAR"
    },

    {
        nim: "312510118",
        nama: "DJENETE KELOPATRA BENGGU DA COSTA"
    }
];

// Mengambil elemen HTML
const form = document.getElementById("formMahasiswa");
const foto = document.getElementById("foto");
const preview = document.getElementById("preview");
const errorFoto = document.getElementById("errorFoto");
const pesan = document.getElementById("pesan");

// Menyimpan tampilan avatar awal
const avatarAwal = preview.innerHTML;

// Preview foto mahasiswa
foto.addEventListener("change", function () {

    const file = foto.files[0];

    errorFoto.textContent = "";

    if (!file) {
        preview.innerHTML = avatarAwal;
        return;
    }

    // Memeriksa format foto
    const format = ["image/jpeg", "image/png", "image/webp"];

    if (!format.includes(file.type)) {
        errorFoto.textContent = "Format foto harus JPG, PNG, atau WEBP!";
        foto.value = "";
        preview.innerHTML = avatarAwal;
        return;
    }

    // Memeriksa ukuran foto maksimal 2 MB
    if (file.size > 2 * 1024 * 1024) {
        errorFoto.textContent = "Ukuran foto maksimal 2 MB!";
        foto.value = "";
        preview.innerHTML = avatarAwal;
        return;
    }

    // Menampilkan foto
    const reader = new FileReader();

    reader.onload = function (event) {
        preview.innerHTML = `
            <img src="${event.target.result}" alt="Foto Mahasiswa">
        `;
    };

    reader.readAsDataURL(file);

});

// Tombol simpan
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nim = document.getElementById("nim").value.trim();
    const nama = document.getElementById("nama").value.trim();

    if (nim === "" || nama === "") {
        pesan.textContent = "NIM dan Nama Lengkap wajib diisi!";
        pesan.style.color = "red";
        return;
    }

    pesan.textContent = "Data mahasiswa berhasil disimpan!";
    pesan.style.color = "green";

});

// Tombol reset
form.addEventListener("reset", function () {

    setTimeout(function () {

        preview.innerHTML = avatarAwal;

        errorFoto.textContent = "";
        pesan.textContent = "";

    }, 0);

});
