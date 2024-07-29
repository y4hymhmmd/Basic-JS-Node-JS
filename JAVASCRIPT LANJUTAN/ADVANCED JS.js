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

//Destruction Variable


//Dectruction array
// const perkenalan = ['halo', 'nama', 'saya', 'yahya muhammad'];

// skipping items
// const [salam, , , nama] = perkenalan;

// console.log(nama);


// //swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b,a]
// console.log(a);
// console.log(b);

// //retutn value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba()
// console.log(b);


// //rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]
// console.log(a)
// console.log(values);

// //desctructuring Object
// const mhs = {
//     nama: 'yahya',
//     umur: 17
// }

// const {nama, umur} = mhs;
// console.log(nama);


//Assignment tanpa deklarasi object

// ({ nama, umur } = { nama: 'yahya', umur: 17 });
// console.log(nama);


// //assing ke variable baru
// const mhs = {
//     nama: 'yahya',
//     umur: 17
// }

// const { nama: n, umur: u } = mhs;
// console.log(u);

// //memberikan default value
// const mhs = {
//     nama: 'yahya',
//     umur: 17, 
//     email: 'yahya@gmail.com',
// }

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

//meberikan nilai deafult + assing ke variabel baru
// const mhs = {
//     nama: 'yahya',
//     umur: 17, 
//     email: 'yahya@gmail.com',
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);



//rest parameter
// const mhs = {
//     nama: 'yahya',
//     umur: 17,
//     email: 'yahya@gmail.com',
// }

// const { nama, ...value } = mhs;
// console.log(nama, value);


// //mengambil field pada object, stselah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'yahya',
//     umur: 17,
//     email: 'yahya@gmail.com',
// }

// function getidMhs ({id}) {
//     return id;
// }

// console.log(getidMhs(mhs));

//desctucturing
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// // const jumlah = penjumlahanPerkalian(2, 3)[0];
// // const kali = penjumlahanPerkalian(2, 3)[1];


// // const [jumlah, kali] =  penjumlahanPerkalian(2, 3);
// // console.log(jumlah);
// // console.log(kali);

// const [kurang, tambah, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);



//desctuncturing function arguments
// const mhs1 = {
//     nama: 'yahya',
//     umur: 17,
//     email: 'yahya@gmail.com',
//     nilai: {
//         tugas: 90,
//         uts: 85,
//         uas: 95
//     }
// }

// // function cetakMhs (mhs){
// //     return `Halo, nama saya ${mhs.nama}, saya  berumur ${mhs.umur} tahun.`;
// // }

// // console.log(cetakMhs(mhs1));

// function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
//     return `Halo, nama saya ${nama}, saya  berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
// }

// console.log(cetakMhs(mhs1));

//for...of
// const mhs = ['yahya', 'bayu', 'adit'];

// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for (const m of mhs){
//     console.log(m);
// }


//string
// const nama = 'yahya';
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ['yahya', 'bayu', 'adit'];
// // mhs.forEach((m, i) => {
// //     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// // });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }



//nodelist
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach( n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }


//arguments
// function jumlahAngka() {
//     // return arguments.reduce((a, i) => a + i);
//     // arguments.forEach(a=> jumlsh += a);
//     let jumlah = 0;
//     for (a of arguments){
//         jumlah += a;
//     }

//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5, 6, 7, 8, 9));

// //for in
// const mhs = {
//     nama: 'yahya',
//     umur: 17,
//     email: 'yahya@gmail.com',
// }

// for(m in mhs) {
//     console.log(m);
// }


//spread operator
//memecah iterables menjadi single element

// const mhs = ['yahya', 'antony', 'budi'];
// console.log(...mhs[0]);



//Menggabungkan 2 array

// const mhs = ['yahya', 'antony', 'budi'];
// const dosen = ['bruno', 'justin', 'lil budi'];
// const orang = [...mhs, ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);



// //meng-copy array
// const mhs = ['yahya', 'antony', 'budi'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs]
// mhs1[0] = 'fajar'
// console.log(mhs1);


// const liMhs = document.querySelectorAll('li');
// // const mhs = [];
// // for( let i=0; i<liMhs.length; i++ ){
// //     mhs.push(liMhs[i].textContent);
// // }

// // console.log(mhs);

// const mhs = [...liMhs].map(m=> m.textContent);
// console.log(mhs);

const nama1 = document.querySelector('.nama1');
const huruf = [...nama1.textContent].map(h => ` <span>${h}</span>`).join('');
nama1.innerHTML = huruf;
// console.log(huruf);




//Rest Parameter
// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs
// //     return Array.from(arguments);
// return[...arguments]
// }

// console.log(myFunc(1,2,3,4,5));


// function jumlahkan(...angka){
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }
//     // return total;
//     return angka.reduce((a, b) => a + b); 
// }

// console.log(jumlahkan(1,2,3,4,5));



//array destructurtng
// const kelompok1 = ['yahya', 'budi', 'anto', 'fikri', 'toni']
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);



// // object destructuring
// const team = {
//     pm: 'yahya',
//     frontEnd1: 'budi',
//     frontEnd2: 'anto',
//     backEnd: 'fikri',
//     ux: 'reza',
//     devOps: 'toni'
// }

// const { pm, ...myTeam} = team;
// console.log(myTeam);


//fiItering
// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('string', 1, 2, 'yahya', false, 10, true, 'anto'));

//http://latentflip.com/loupe/


// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesa(callback) {
//     const nama = prompt('Masukkan nama anda:');
//     callback(nama);
// }

// tampilkanPesa(nama=> alert(`Halo ${nama}`));

// const mhs = [
//     {
//         'nama': 'yahya',
//         'nrp': '043040023',
//         'email': 'yahy@gmail.com',
//         'jurusan': 'teknik informatika',
//         'idDosenWali': 1
//     },
//     {
//         'nama': 'bayu',
//         'nrp': '043040024',
//         'email': 'bayu@gmail.com',
//         'jurusan': 'teknik informatika',
//         'idDosenWali': 2
//     },
//     {
//         'nama': 'adit',
//         'nrp': '043040025',
//         'email': 'adit@gmail.com',
//         'jurusan': 'teknik elektro',
//         'idDosenWali': 2
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// //Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404); {
//                 error();
//             }
//         }
//     }
//     xhr.open('GET', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('/mahasiswa.json', result =>{
//     const mhs =JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama))
// }, ()=>{

// });

// console.log('selesai');




//JQuery
// console.log('mulai');
// $.ajax({
//     url: '/mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama))
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// })
// console.log('selesai');

// $.ajax({
//     url: ' http://www.omdbapi.com/?apikey=dca61bcc&s=avengers' ,
//     success: movies => console.log(movies)
// })

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.responseText));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }

// }
// xhr.open('GET', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// Promise
// Object yang merepresentasikan keberhasiLan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


// //contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));

// //contoh2 
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
// .finally(() => console.log('selesai menunngu'))
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));
// console.log('selesai');


//promise.all


// const film = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Avengers: Endgame',
//             sutradara: 'yahya',
//             genre: 'Action, Adventure, Sci-Fi'
//         }]);
//     }, 1000);
// });

// const cuaca = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Pekanbaru',
//             temp: 26,
//             kondisi: 'cerah'
//         }]);
//     }, 500);
// });

// Promise.all([film, cuaca])
// .then(response =>{
//     const[film, cuaca] = response;
//     console.log(film);
//     console.log(cuaca);
// });


// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// })

// // console.log(coba);
// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('waktu terlalu lama');
        }

    })
}

// const coba = cobaPromise()
// coba
// .then(() => console.log(coba))
// .catch(() => console.log(coba))

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}

cobaAsync()