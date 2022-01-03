const klik = document.querySelector('button')
function ubahWarnaKlik() {
    klik.style.backgroundColor='lightblue';
}
klik.onclick= ubahWarnaKlik;


klik.addEventListener('click', function() {
    const randomNumber = Date.now();
    var hasil = document.getElementById('container');
    if (randomNumber%15===0) {
        hasil.innerHTML='Boleh juga!';
    } else if (randomNumber%4===0) {
        hasil.innerHTML='Boleh juga!';
    } else if (randomNumber%7===0) {
        hasil.innerHTML='Mengerikan!';
    } else {
        hasil.innerHTML='Hebat!';
    }
});
    
