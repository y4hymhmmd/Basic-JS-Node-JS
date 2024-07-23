// Cara untuk membuat Object pada javascript

// // 1. Object Literal
// PROBLEM = tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Yahya',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.energy}, selamat makan!`);
//     }
// }


// // 2. Function Declaration
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let yahya = Mahasiswa('Yahya', 10);
// let anto = Mahasiswa('Anto', 20);


// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let yahya = new Mahasiswa('Yahya', 10);
// let anto = new Mahasiswa('Anto', 20);

//versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat main!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }
// let yahya = new Mahasiswa('Yahya', 10);


// // 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;


//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
//     }

// }

// let yahya = new Mahasiswa('Yahya', 10);





// 4. Object. create


// function satu() {
//     var nama = 'Sandhika'
//     console.log(nama);
// }
// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'erik';
// satu();
// dua('Doddy');
// console.log(nama);

//https://pythontutor.com/javascript.html#mode=edit


// function init() {
//     // let nama = 'yahya';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('yahya');
// panggilNama('muhammad');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('yahya'));

// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// })();

// let a = add();

// console.log(add());
// console.log(add());
// console.log(add());


//arrow function
// const tampilNama = (nama) => {return `Halo, ${nama}`;}
// console.log('yahya');

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('erik', 'malam'));

//implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('yahya');

// const tampilNama = () => `Hello Word!`
// console.log(tampilNama());


// let mahasiswa = ['yahya', 'bayu', 'anto'];

// // let jumlahHuruf = mahasiswa.map(nama => nama.length);
// // console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);




//konsep this pada arrow function

//constructor function
// const Mahasiswa = function () {
//     this.nama = 'Yahya';
//     this.umur = 17;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }

// const yahya = new Mahasiswa();



// //arrow function
// const Mahasiswa = function () {
//     this.nama = 'Yahya';
//     this.umur = 17;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }

// const yahya = new Mahasiswa();

// //object literal
// const mhs1 = {
//     nama: 'yahya',
//     umur: 17,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }





// const Mahasiswa = function () {
//     this.nama = 'Yahya';
//     this.umur = 17;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }

//     setInterval( () =>  {
//         console.log(this.umur++);
//     },500);
// }

// const yahya = new Mahasiswa();
