console.log("Hello, World!");
console.log("This is a test script.");

console.log("==========================");
//Menampilkan Nama
let name = "John Doe";
console.log("My name is " + name);

console.log("==========================");
//Menjumlahkan 2 angka
let num1 = 5;
let num2 = 10;
let hasil = num1 + num2;
console.log("Hasil penjulahan: " + hasil);

console.log("==========================");
//cetak angka genap/ganjil
let angka = 7;
if (angka % 2 == 0) {
    console.log(angka + " adalah angka genap");
}else {
    console.log(angka + " adalah angka ganjil");
}

console.log("==========================");
//Menghitung luas segitiga
let alas = 5;
let tinggi = 8;
let luas = (alas * tinggi)/2;
console.log("Luas segitiga: " + luas);
console.log("==========================");

//Menghitung luas lingkaran
let jariJari = 7;
let phi = 3.14;
let luasLingkaran = phi * (jariJari * jariJari);
console.log("Luas lingkaran: " + luasLingkaran);
console.log("==========================");

//Menghitung luas persegi panjang
let panjang = 10;
let lebar = 5;
let luasPersegiPanjang = panjang * lebar;
console.log("==========================");

let number = 8;
if(angka > 0){
    console.log(number + " bernilai Positif");
}else{
    console.log(number + "bernilai Negatif");
}

console.log("============================");

for(let i=1;i<=15;i++){
    if(i % 3 == 0){
        console.log("Kelipatan dari 3 " + i);
    }
}

console.log("============================");

function kurang(a,b){
    return a-b;
}
console.log("hasil dari pengurangan = " + kurang(8,5));

console.log("============================");

let friends = ["Hadi","Huda","Budi","Ari"]

for(let i=0;i< friends.length;i++){
    console.log(friends[i]);
}

console.log("============================");

for(let i=1; i <= 30; i++){
    if(i % 4 ==0){
        console.log(i + " Adalah Bilangan Genap");
    }
}


