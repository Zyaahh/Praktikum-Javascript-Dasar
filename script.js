

/// komentar

///aktivitas 1: setup berkas & integrasi javascript (script.js)
///mencetar sebuah nilai = console.log("teks")

console.log("=== Kalkulator Nilai Rapor Kelas ===");
console.log("Javascript Terhubung!");

//Variabel Const = Konstanta sifatnya tetap dan tidak bisa diiubah

const Nama_Kampus = "UPI PWK"; // Nama Kmapus x Tidak bisa Diubah karena konstanta
const Mata_Kuliah = ["Promnet", "Jarkom", "SCM"]; // sama tidka bisa diubah juga

//Variabel let = "Let" digunakan untuk nilai yang bisa diubah sewaktu-waktu

let Nama_Guru = "Pak Zamzam"; //Nama guru untuk guru yang mengajar
let Kelas_Praktikum = "Lab B"; //Nama kelas yang kita pakai juga bisa berubah

// Cetak nilai-nilai dari variabel let dan variabel const
// Operator + digunakan untuk menggunakan teks string
console.log("Kampus : " + Nama_Kampus); //tampilkan nama kampus
console.log("Kelas : " + Kelas_Praktikum); //tampilan nama kelas
console.log("Guru : " + Nama_Guru); //tampilan nama guru

//Demo perbedaan variabel const dan let

Nama_Guru = "Pak Adelio"; ///Nama_Guru variabelnya let
console.log("Guru Baru (Setelah diubah dengan variabel let): " + Nama_Guru);

//Menggunakan variabel const
// Nama_Kampus = "UPI BUMSIL"; /// Akan terjadi error (Uncaught Typeerror)

///Input interaktif
/// alert ini berfungsi sebagai pemanggil dialog pop out
alert("Selamat Datang di Aplikasi Kalkulator Nilai Rpor! ");

///Menampilkan nama mahasiswa

let Nama_Mahasiswa = prompt("Halo! Maukan Nama Kamu Untuk Memulai : ");

///Conditional Statment IF, ELSE IF, ELSE
/// Tulis "if (Nama_Mahasiswa)"
/// Maksudnya adalah "Jika Nama_Mahasiwa ada isinya " jalankan blok diatas
///"else"  : Jika tidak sesuai dan tidak memenuhi atau kososng jalankan blok bawah

if(Nama_Mahasiswa) {
/// jika user mengisi nama
    alert("Halo, " + Nama_Mahasiswa + "Yuk kita hitung nilai rapor kamu.");
    console.log("Siswa yang aktif: " + Nama_Mahasiswa);
} else {
    ////jika user tidak mengisi nama (kosong) dipanggil anonim
    alert("Kamu tidak memasukkan nama. Kamu dipanggil Mahasiswa Anonymous");
    Nama_Mahasiswa = "Siswa Anonim"
    console.log("Siswa yang aktif: " + Nama_Mahasiswa);
}

/// Operasi Aritmatika - Hitung Nilai Rata-Rata

let Nilai_Promnet = 80;
let Nilai_Jarkom = 75;
let Nilai_SCM = 90;

//// Jumlahkan Nilai
let Jumlah_Nilai = Nilai_Promnet + Nilai_Jarkom + Nilai_SCM;

/// Bagi hasil perjumalahan dibagi 3
let Nilai_RataRata = Jumlah_Nilai / 3;

///Cetak nilai nya atau output
console.log("Nilai" + Nama_Mahasiswa + "Keren");
console.log("Promnet : " + Nilai_Promnet);
console.log("Jarkom : " + Nilai_Jarkom);
console.log("SCM : " + Nilai_SCM);

////Tampilkan Nilai Rata-rata
console.log("Nilai Rata Rata Adalah : " + Nilai_RataRata);

/// tampilkan jumlah nilai
console.log("Jumlah Nilai Kamu Adalah" + Jumlah_Nilai);

///// Percabangan IF ELSE untuk menentukan predikat = A, B, C, D

/////buat variabel kosong -> string kosong
let Predikat = ""; /// Kan diisi gradenya/ peredikat
let Keterangan = ""; /// akan di isi keterangan 

///Percabangan / Conditional statment ELSE IF

if (Nilai_RataRata >= 90) { 
    ///kondisi yang pertama di cek
    Predikat = "A";
    Keterangan = "Sangat Baik!!";
} else if (Nilai_RataRata >= 80) { ///kondisi pertama tidak terpenuhi
    Predikat = "B";
    Keterangan = "Baik";
} else if (Nilai_RataRata >= 70) { ///kondisi kedua tidak terpenuhi
    Predikat = "C";
    Keterangan = "Cukup";
} else { ///jika semua tidak terpenuhi
    Predikat = "D";
    Keterangan = "Perlu Ditingkatkan";
}

//// tampilkan if, else if, else

console.log("Predikat : " + Predikat + "-" + Keterangan);

///tampilkan pop out alert

alert(
    "Hasil Rapor" + Nama_Mahasiswa + ":\n" +
    "Rata-Rata" + Nilai_RataRata + ":\n" +
    "Predikat" + Predikat +" (" + Keterangan + ")"
);


///Function -> cara membunngkus sekumpulan kode menjadi satu blok
///yang bisa dipanggil kapan saja dengan nama function nya
///strukturnya : fungtion penjumlahan ( nilai + nilai2+ nilai3)

function Hitung_RataRata(n1,n2,n3) {
    let Jumlah = n1 +n2 +n3;
    return Jumlah /3;
}

function Tentukan_Predikat(Rata){
    ////setiap baris  "if" untuk menentukan predikat
    if(Rata >= 90) return "A - Sangat Baik";
    if(Rata >= 80) return "B - Baik";
    if(Rata >= 70) return "C - Cukup";
    return "D - Perlu Diperbaiki";
}

/// buat variabel dulu
////rata-rata
let Mahasiswa_A = Hitung_RataRata(88, 92, 85);
////predikat
let Mahasiswa_A_Predikat = Tentukan_Predikat(Mahasiswa_A);

///Cetak konsole

console.log("Rata-Rata Nilai Mahasiswa A adalah" + Mahasiswa_A);
console.log("Predikatnya adalah" + Mahasiswa_A_Predikat);

////ARRAY DAN LOOPING

/// Kotak penyimpanan yang di isi nilai
//ditulis dengan[...]
/// Note : index dari array dimulai dari O

// ARRAY ----------- menampilkan daftar mahasiswa
let Daftar_Mahasiswa = [ 
    "Adelio Rafa",  /// posisi 0
    "Zamzam", /// posisi 1
    "Abey", /// posisi 2
    "Sapta", /// posisi 3
    "Zahra" /// posisis 4
    ///total array adalah 5
];

///cetak array
console.log("=== Daftar Masiswa Kelas A" + Kelas_Praktikum + "===");

///LOOPING for

for (let i = 0; i< Daftar_Mahasiswa.length; i++) {
    console.log((i +1) + "-" + Daftar_Mahasiswa[i]);
}

///leght
console.log("Total Mahasiswa :" + Daftar_Mahasiswa.length + "Orang");
console.log("Praktikum Selesai War is Over");