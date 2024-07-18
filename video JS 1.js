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
// if( tes === true ){
//     alert('user menekan OK');
// } else {
//     alert('user menekan Cancel');
// }  


// alert('selmat datang..')
// var lagi = true;

// while( lagi === true ){
//     var nama = prompt('masukkan nama:')
//     alert("halo " + nama);

//     lagi = confirm('coba lagi?')
// }

// alert('terima kasih')

// alert('mulai');
// for (var i = 0; i <5; i++) {
//     alert('hello world!');
// }
// alert('selesai');

// var angka = prompt('masukkan angka :');
// if( angka % 2 === 0) {
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
// while (nilaiAwal <= 10){
//     console.log('hello word ' + nilaiAwal + 'x');
// nilaiAwal++
// }

// latihan1
// var jmlAngkot = 10;
// var noAngkot = 1;

// while (noAngkot <= jmlAngkot) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     noAngkot++;
// }

// for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
//     console.log('hello world ' + nilaiAwal + 'x');
// }

// latihan2
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while(noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     noAngkot++;
// }
// for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
// }

// var angka = prompt('masukkan angka:');

// if(angka % 2== 0) {
//     alert('Angka tersebut adalah genap');
// } else {
//     alert('Angka tersebut adalah ganjil');
// }

// // latihan 3
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else{
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }

// var angka = prompt('masukkan angka:');

// if(angka % 2== 0) {
//     alert('Angka tersebut adalah genap');
// } else if (angka % 2 == 1) {
//     alert('Angka tersebut adalah ganjil');
// }else{
//     alert('yang anda masukkan bukan angka');
// }


// // latihan 4
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lemabur');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }


var item = prompt('masukkan nama makanan / minuman : \n ( cth: nasi, daging, susu, hamburger, softdrink)');

switch(item.toLowerCase()){
    case 'nasi':
    case 'daging':
    case'susu':
        alert('makan / minuman SEHAT');
        break;
    case 'hamburger':
    case'softdrink':
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default:
        alert('maaf, item yang anda masukkan belum terdaftar');
        break;
}