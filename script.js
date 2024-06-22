const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let shuffle_letters = letters.sort(() =>{
    if(Math.random() > .5){
       return 1 
    }
    else{
       return -1
    }
});
letters.forEach(letter =>{
    let card = document.createElement('div');
    card.className = 'gameCard';
    card.innerHTML = letter;
    let cards = document.querySelector('.cards');

    card.onclick = () =>{
        card.classList.add('cardOpen');
        let open = document.querySelectorAll('.cardOpen');
        setTimeout(()=>{
            if(open.length > 1){  
                if(open[0].innerHTML == open[1].innerHTML){
                    open[0].classList.add('cardMatch')
                    open[1].classList.add('cardMatch')

                    open[1].classList.remove('cardOpen')
                    open[0].classList.remove('cardOpen')
                    
                    let matchingCards = document.querySelectorAll('.cardMatch');
                    if(matchingCards.length == letters.length){
                        alert(`You have won!!`)
                        location.reload();
                    }
                }
                else{
                    open[1].classList.remove('cardOpen')
                    open[0].classList.remove('cardOpen')
                }
            }
        }, 1000)
    }
    cards.appendChild(card);
});
