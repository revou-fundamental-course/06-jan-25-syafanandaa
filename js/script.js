
let usernameInput = document.getElementById('user-name'); // buat variabel mengambil data dr id user-name

document.getElementById('submit').addEventListener("click", function() { // jika klik tombol kirim akan menjalankan function
    const username = usernameInput.value // mendapatkan nama dari inputan

    if (name == "") { 
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"; // jika name kosong akan tampil pesan error
    } else {
        document.getElementsById('name').innerHTML = username; // mengganti nama di html dengan nama yang baru
    }
}); 

function validateForm() {
    const nama = document.forms['message-form']['user-name'].value;
    
    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"

        return false; // form validationnya berati salah
    }

    // document.getElementById("name").innerHTML = nama;
    // document.getElementById("error-name").innerHTML = "";

    setName(nama)

    return false;
}

function setName(name) {
    document.getElementById("username").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}



function formValidation() {
    // console.log('form validationhas been clicked!');

    let valid = true;

    let nameInput = document.getElementById('name-input').value;
    console.log(nameInput);
    if (nameInput == ""){
        alert('Name must be filled out');
        valid = false;
    }   
    
    let tanggalInput = document.getElementById('tanggal-input').value;
    console.log(tanggalInput);
    if (tanggalInput == ""){
        alert('Tanggal must be filled out');
        valid = false;
    }     

    let jkInputL = document.getElementById('jk-input-lakilaki').checked;
    let jkInputP = document.getElementById('jk-input-perempuan').checked;
    // console.log(jkInput);
    if (!jkInputL && !jkInputP){
        alert('Jenis kelamin must be filled out');
        valid = false;
    }   
    
    let pesanInput = document.getElementById('pesan-input').value;
    if (pesanInput == ""){
        alert('Pesan must be filled out');
        valid = false;
    }     

    if  (valid) {
        document.getElementById('result-form-nama').innerHTML = nameInput;
        document.getElementById('result-form-tanggal').innerHTML = tanggalInput;
        // document.getElementById('result-form-jk').innerHTML = jkInput;
        document.getElementById('result-form-jk').textContent = jkInputL ? "Laki-Laki" : "Perempuan"
        document.getElementById('result-form-pesan').innerHTML = pesanInput;      
    }
}

document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner += 1; // bacanya indexBanner + 1

    changeBackground();
}

// function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    // console.log(bannerList.length);
    // console.log(indexBanner);

    if (indexBanner > bannerList.length - 1) {
        //  reset indexbanner
        indexBanner = 0;
    }

    // Looping to change background
    for (let i = 0; i < bannerList.length; i++) {
        // console.log[i];
        // console.log[bannerList[i]];
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);