//JAVASCRIPT
console.log("helo word");
// alert("helo word");

//TIPE DATA ANGKA

//angka special
var a = 2 / 0;
var b = -2 / 0;
var c = 0 / 0;
console.log(`${a} \n ${b} \n ${c}`);

//OPERATOR 


//Aritmatika
var a = 5;
var b = 3;
var c = a + b;
console.log(c);

var hasil = 10 / 5;
console.log(hasil);
var hasil = 10 % 5;
console.log(hasil);

// Penugasan
var a = 2;
a++;

var x;
x = 10;
x += 5
console.log(x);

//Perbandingan
var hasil = 10 == 10;
console.log(hasil);
var hasil = 10 == "10";
console.log(hasil);
var hasil = 10 === "10";
console.log(hasil);

//Logika
var aku = 20;
var kamu = 19;

var benar = aku > kamu;
var salah = aku < kamu;

// operator && (and)
var hasil = benar && salah;
console.log(`${benar} && ${salah} = ${hasil}`);

// operator || (or)
var hasil = benar || salah;
console.log(`${benar} || ${salah} = ${hasil}`);

// operator ! (not)
var hasil = !benar
console.log(`!${benar} = ${hasil}`);

//String
var a = 'apple';
var b = 'pen';

var hasil = a + b;
console.log(hasil);

var hasil = a + " " + b;
console.log(hasil);

var hasil = 10 + 10 + "10";
console.log(hasil);
var hasil = "10" + 10 + 10;
console.log(hasil);

//typeof

console.log(typeof 10);
console.log(typeof "10");
console.log(typeof true);

//kondisional
const umur = 26;
const minuman = umur >= 21 ? "Beer" : "Juice";
console.log(minuman);

//TIPE DATA 


//STRING
console.log('ini adalah hari Jum\'at');
console.log('ini adalah hari \n Jum\'at');
console.log('\u00A9');

console.log("Yahya" == "yahya");

console.log("Yahya Muhammad".length);


//boolean true  | false
var x = 10;
console.log(x < 20);

// var nama = prompt('masukkan nama:')
// alert("selamat siang " + nama);


// var tes = confirm('kamu yakin??');
// if (tes === true) {
//     alert('user menekan OK');
// } else {
//     alert('user menekan Cancel');
// }


// alert('selmat datang..')
// var lagi = true;

// while (lagi === true) {
//     var nama = prompt('masukkan nama:')
//     alert("halo " + nama);

//     lagi = confirm('coba lagi?')
// }

// alert('terima kasih')

// alert('mulai');
// for (var i = 0; i < 5; i++) {
//     alert('hello world!');
// }
// alert('selesai');

// var angka = prompt('masukkan angka :');
// if (angka % 2 === 0) {
//     alert('angka tersebut adalah genap');
// } else {
//     alert('angka tersebut adalah ganjil');
// }


// while (true) {
//     console.log("hello word");
// }

// var ulang = true;
// while (ulang) {
//     console.log('hello word');
//     ulang = confirm('lagi');
// }

// var nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//     console.log('hello word ' + nilaiAwal + 'x');
//     nilaiAwal++
// }

// latihan1
// var jmlAngkot = 10;
// var noAngkot = 1;

// while (noAngkot <= jmlAngkot) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     noAngkot++;
// }

// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//     console.log('hello world ' + nilaiAwal + 'x');
// }

// latihan2
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     noAngkot++;
// }
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
// }

// var angka = prompt('masukkan angka:');

// if (angka % 2 == 0) {
//     alert('Angka tersebut adalah genap');
// } else {
//     alert('Angka tersebut adalah ganjil');
// }

// // latihan 3
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }

// var angka = prompt('masukkan angka:');

// if (angka % 2 == 0) {
//     alert('Angka tersebut adalah genap');
// } else if (angka % 2 == 1) {
//     alert('Angka tersebut adalah ganjil');
// } else {
//     alert('yang anda masukkan bukan angka');
// }


// // latihan 4
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lemabur');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }


// var item = prompt('masukkan nama makanan / minuman : \n ( cth: nasi, daging, susu, hamburger, softdrink)');

// switch (item.toLowerCase()) {
//     case 'nasi':
//     case 'daging':
//     case 'susu':
//         alert('makan / minuman SEHAT');
//         break;
//     case 'hamburger':
//     case 'softdrink':
//         alert('makanan / minuman TIDAK SEHAT');
//         break;
//     default:
//         alert('maaf, item yang anda masukkan belum terdaftar');
//         break;
// }

// var s = '';
// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// var tanya = true;
// while (tanya) {
//     var p = prompt('pilih, gajah, semut, orang');

//     var comp = Math.random();

//     if (comp < 0.34) {
//         comp = 'gajah';
//     } else if (comp >= 0.34 && comp < 0.67) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     var hasil = '';

//     if (p == comp) {
//         hasil = 'SERI';
//     } else if (p == 'gajah') {
// if (comp == 'orang') {
//     hasil = 'MENANG';
// } else {
//     hasil = 'KALAH';
// }
//         hasil = (comp == 'orang ') ? 'MENANG' : 'KALAH';
//     } else if (p == 'orang') {
//         hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
//     } else if (p == 'semut') {
//         hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
//     } else {
//         hasil = 'memasukan pilihan yang salah!';
//     }

//     alert('kamu memelih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terima kasih sudah bermain')


// function jumlahDuaBilangan(a, b) {
//     var total;
//     total = a + b;
//     return total;
// }

var jumlahDuaBilangan = function (a, b) {
    var total;
    total = a + b;
    return total;
}

// alert(jumlahDuaBilangan(1, 2));
// alert(jumlahDuaBilangan(25, 30));
// alert(jumlahDuaBilangan(1500, 17.5));

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);


function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;

    return total;
}

console.log(jumlahVolumeDuaKubus(8, 3));

function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}
var hasil = kali(tambah(1, 2), tambah(3, 4));

// var a = parseInt(prompt('masukan nilai 1'));
// var b = parseInt(prompt('masukan nilai 2'));
// var hasil = tambah(a * 2, b * 2);
console.log(hasil);

// function tambah() {
//     return arguments;
// }
// var coba = tambah(5, 10, 20, "hi", false)
// console.log(coba);

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3, 4);
console.log(coba);

var i = 2;
if (i % 2 == 0) {
    var genap = true;
}

if (genap) {
    console.log('genap!');
}

var a = 1;

// function tes() {
//     var b = 2;
//     console.log(a);
// }

// tes();

// for(var i = 10; i >= 1; i--) {
//     console.log(i)
// }


function tampilAngka(n) {
    if (n === 0) return;
    console.log(n);
    return tampilAngka(n - 1);
}

tampilAngka(10);

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}


console.log(faktorial(5))

// //Function Declaration
// function tampilPesan(nama) {
//     alert('halo ' + nama);
// }
// tampilPesan('yahya');
// //Function Expression
// var tampilPesan = function (nama) {
//     alert('halo ' + nama);
// }


//array

var binatang = [];
binatang = [' Kucing', 'Kelinci', 'Monyet', ' Panda ', 'Koala', 'Sapi']

// console.log(binatang[4]);
// console.log(typeof(binatang));
console.log(binatang.length);

var func = function () {
    alert('hello word!');
};

var array = ['teks', 2, false, func, [4, 5, 6]];
console.log(array);


// var arr = ['yahya', 'muhammad', 'putra', "badrul"];

// for(var i = 0; i < arr.length; i++) {
//     console.log('siswa ke-' + (i+1) + ' : ' +  arr[i]);
// }

//Method pada array
var arr = ['yahya', 'muhammad', 'putra', 'badrul', 'sabda'];
//join
// console.log(arr.join('-'));

// push & pop
// arr.push('badrul');
// arr.pop();

// unshift & shift
// arr.unshift('badrul');
// arr.shift();


//splice
// arr.splice(1, 2, 'Dafa', 'bayu');

//slice
// var arr2 = arr.slice(1, 3)

//foreach 
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['yahya', 'muhammad', 'putra', 'badrul', 'sabda'];
// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })


//map
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });

// console.log(angka2.join(' - '));


//SORT
// var angka = [1, 2, 9, 8, 30, 99, 7, 6, 5, 4, 3];
// console.log(angka.join(' - '));
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '));

//FILTER & FIND
// var angka = [1, 2, 9, 8, 30, 99, 7, 6, 5, 4, 3];
// var angka2 = angka.find(function (x){
//     return x > 5;
// })

// console.log(angka2);

//Note all array methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



//latihan

// var penumpang = [];
// var tambahPenumpang = function (namaPenumpang, penumpang) {
//     if (penumpang.length == 0) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else {
//         for (var i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] == undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             }

//             else if (penumpang[i] == namaPenumpang) {
//                 console.log(namaPenumpang + 'sudah ada di dalam angkot');
//                 return penumpang;
//             }

//             else if (i == penumpang.length - 1) {
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }

//     }
// }

// var hapusPenumpang = function (namaPenumpang, penumpang) {
//     if (penumpang.length == 0) {
//         console.log('Angkot masih kosong');
//     } else {
//         for (var i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] == namaPenumpang) {
//                 penumpang[i] = undefined;
//                 return penumpang;
//             } else if (i == penumpang.length - 1) {
//                 console.log(namaPenumpang + ' tidak ada di dalam angkot');
//                 return penumpang;
//             }
//         }
//     }
//     return penumpang;
// }


// var mhs = {
//     nama: 'Yahya Muhammad',
//     umur: 17,
//     ips: [3.00, 2.50, 3.20],
//     alamat: {
//         jalan: 'Jln. Singgalang 7',
//         kota: 'Pekanbaru',
//         provinsi: 'Riau'
//     }
// };

var siswa = {
    nama: 'Yahya Muhammad',
    nisn: '043040023',
    email: 'yahya@gmail.com',
    jurusan: 'RPL'
}

var siswa2 = {
    nama: 'Anto',
    nisn: '003675491',
    email: 'anto@gmail.com',
    jurusan: 'TKJ'
}

//functon declarations
function buatObjectSiswa(nama, nisn, email, jurusan) {
    var siswa = {}
    siswa.nama = nama;
    siswa.nisn = nisn;
    siswa.email = email;
    siswa.jurusan = jurusan;
    return siswa;
}

var siswa3 = buatObjectSiswa('denis', '066549813', 'denis@gmail.com', 'TKR');

//constructor

function Siswa(nama, nisn, email, jurusan) {
    this.nama = nama;
    this.nisn = nisn;
    this.email = email;
    this.jurusan = jurusan;
}

var siswa4 = new Siswa('Iwan', '009876543', 'iwan@gmail.com', 'RPL');

//this
// var a = 10;
// console.log(this.a);


//cara 1 - function declaration
// function halo (){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object Global

// //cara 2 - object literal 
// var obj ={};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang bersangkutan

// //cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// // this mengembalikan object yang baru dibuat


function Angkot(sopir, trayek, penumpangan, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpangan = penumpangan;
    this.kas = kas;

    this.penumpanganNaik = function (namaPenumpang) {
        this.penumpangan.push(namaPenumpang);
        return this.penumpangan;
    }

    this.penumpanganTurun = function (namaPenumpang, bayar) {
        if (this.penumpangan.length === 0) {
            alert("angkor masih kosong");
            return false;
        }
        for (var i = 0; i < this.penumpangan.length; i++) {
            if (this.penumpangan[i] === namaPenumpang) {
                this.penumpangan[i] = undefined;
                this.kas += bayar;
                return this.penumpangan;
            }
        }
    }
}

    var angkot1 = new Angkot('anto', ['Pekanbaru', 'Padang'], [], 0);
    var angkot2 = new Angkot('budi', ['Aceh', 'Medan'], [], 0);