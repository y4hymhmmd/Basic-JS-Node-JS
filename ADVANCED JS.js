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


//filter, map and reduce 

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


//filter 
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

//map 
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


//reduce
//jumlah kan seluruh element
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);


//method chaining
//cari angka >5 kailikan 3 jumlahkan
// const hasil = angka.filter(a => a > 5)
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur);

// console.log(hasil);


// //template literal / template sting
// const nama = 'yahya';
// const umur = 17

// // console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + 'tahun.');

// //Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`);
// const x = 11;
// console.log(`${(x & 2 == 0) ? 'genap' : 'genap'}`);


//HTML fragments
// const mhs = {
//     nama: 'yahya',
//     umur: 17,
//     nrp: '74190348659',
//     email: 'mhs@gmail.com',
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

//2 looping
// const mhs = [
//     {
//         nama: 'yahya',
//         email: 'yahy@gmail.com'
//     },
//     {
//         nama: 'anto',
//         email: 'nto@gmail.com'
//     },
//     {
//         nama: 'budi',
//         email: 'budi@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('') }
// </div>`;


//3 conditionals
//ternary
// const lagu = {
//     judul: 'tetap dalam jiwa',
//     penyanyi: 'isyana sarasvati',
//     feat: 'rayi putra'
// }

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : '' }</li>
// </ul>
// </div>`;



//4 nested 
// const mhs = {
//     nama: 'yahya',
//     semester: 5,
//     mataKuliah: [
//         'rekayasa web',
//         'Analisis dan Perancangan Sistem Informasi',
//         ' Pemrograman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Object'
//     ]
// };

// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//     ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
//     <span class="semester">${mhs.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div > `;


// document.body.innerHTML = el;


// Tagged template
// const nama = 'yahya';
// const umur = 17;

// function highlight(strings,...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;


//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">
//     ${values[i] || ''}</span>`, '');
// }


// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;

// document.body.innerHTML = str;