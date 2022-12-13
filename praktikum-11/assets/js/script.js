// isi logic gamemu 
// menangkap element a dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click', (element)=> {
        computerChoice(element)
    })
})

function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    //membuat pilihan untuk komputer
    let choices = ['Rock', 'Paper', 'scissors'];

    //membuat pilihan random pada komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //jika kita yang menang
    if(pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win'), 100);    
    }

    if(pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Win'), 100);    
    }

    if(pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'), 100);    
    }

    //jika komputer yang menang
    if(pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Lose'), 100);    
    }

    if(pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Lose'), 100);    
    }

    if(pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Lose'), 100);    
    }

    //jika draw
    if(pilihanUser == pilihanKomputer){
        setTimeout(alert('draw'), 100)
    }
}