// input username dan password admin
username = "";
password = "";
counter1 = 0;

// melakukan perulangan sampai username yang dimasukkan benar
while(username!="admin"){
    username=prompt("Masukkan Username");
    counter1++;
}

// melakukan perulangan sampai password yang di masukkan benar
while(password!="123"){
    password=prompt("Masukkan Password");
    counter1++;
}

// memilih untuk memasukkan data atau keluar
menu= prompt("Selamat datang di program nilai SMKN 1 BEKASI buatan Andin \n Silahkan pilih menu (masukkan angka): \n 1. Masukkan data \n 2. Keluar");

// untuk jawaban pilihan menu, jika 1 maka mengisi data, jika 2 dia keluar, else pilihannya salah
if(menu == 1){
    alert("Masukkan data");
    nama = prompt("Masukkan nama")// untuk masukkan nama
    console.log("Nama : " +nama);
    nis = prompt("Masukkan NIS berupa angka 5 digit")// untuk masukkan nis
    console.log("NIS : " +nis);
    kelas = prompt("Masukkan Kelas dengan format X RPL A/B")// untuk masukkan kelas
    console.log("KELAS : " +kelas);
    semester = prompt ("Masukkan semester berupa angka")// untuk masukkan semester
    console.log("SEMESTER : " +semester);
}else if(menu > 2){
    alert("Pilihan anda salah!")
}else{
    alert("Anda keluar")
}

// untuk memasukkan nilai
if(menu == 1){
    alert("Masukkan nilai")
    // perulangan untuk input nilai dan mata pelajaran
    for(a=0;a<3;a++){
        Matapelajaran=prompt("Masukkan nama mata pelajaran")// untuk input mata pelajaran
        console.log("Mata pelajaran : " + Matapelajaran);
        NilaiTugas=parseInt(prompt("Masukkan nilai tugas"))// untuk input nilai tugas
        console.log("Tugas : " +NilaiTugas);
        NilaiPTS=parseInt(prompt("Masukkan nilai PTS"))// untuk input nilai pts
        console.log("PTS : " +NilaiPTS);
        NilaiPAS=parseInt(prompt("Masukkan nilai PAS"))// untuk input nilai pas
        console.log("PAS : " +NilaiPAS);
        NilaiAkhir=(NilaiTugas+NilaiPTS+NilaiPAS)/3 // untuk menghitung nilai akhir
        console.log("Nilai akhir : " +NilaiAkhir)
            // untuk menentukan predikat
            if(NilaiAkhir >=81 && NilaiAkhir <=100){
                predikat="A (Bagus)";
            }else if(NilaiAkhir >=71 && NilaiAkhir <=80){
                predikat="B (Cukup)"
            }else if(NilaiAkhir >=61 && NilaiAkhir <=70){
                predikat="C (Kurang)"
            }else{
                predikatprodas="D (Sangat kurang)"
            }console.log("Grade : " +predikat);
    }
}