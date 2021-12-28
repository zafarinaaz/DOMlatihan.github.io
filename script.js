const klik = document.querySelector('button')
function ubahWarnaKlik() {
    klik.style.backgroundColor='lightblue';
}
klik.onclick= ubahWarnaKlik;


klik.addEventListener('click', function() {
    const body = document.querySelector('body');
    const p = document.createElement('body');
    const textBaru= document.createTextNode('ahahahah');
    p.appendChild(textBaru);
    body.appendChild(p);
    //const randomNumber = Date.now();
    //p.appendChild(randomNumber)
    //document.getElementsByTagName('p').innerHTML=randomNumber;
});
