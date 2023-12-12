console.log('start');
// När alla kort är vända ska pop-up fönstret visas 'you won'
// Göra x-knappen klickbar och resetta spelet, alltså vända tillbaka alla kort och slumpa ut dom på nytt
// 'null' är efter HTMLElement, eftersom querySelectorn returnerar null om den inte hittar något element i '.memory-cards'
let cardContainer = document.querySelector('.memory-cards');
let memoryCard = document.querySelectorAll('.memory-card');
let cards = document.querySelectorAll('.memory-card');
// 'Array.from(cards)' konverterar NodeList i memoryCard till en array med alla kort inuti.
let cardArray = Array.from(cards);
let countCardArray = [];
function shuffleCards() {
    // Loopar igenom arrayen från slutet till början och blandar korten enligt Fisher-Yates shuffle metoden.
    // Alltså för varje loop tas ett slumpat index mellan 0 och det nuvarande, sedan byts elementet vid det slumpade indexet ut med elementet vid det nyvarnade indexet.
    for (let i = cardArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
    // Lägger alla blandade kort i cardContainer så de visas på sidan.
    if (cardContainer) {
        cardContainer.innerHTML = '';
        cardArray.forEach(card => {
            cardContainer.appendChild(card);
        });
    }
}
// Gör korten klickbara, vid varje klick vänds kortet så länge inte två kort redan är vända.
function cardFlip() {
    cardArray.forEach(card => {
        card.addEventListener('click', () => {
            if (countCardArray.length < 2) {
                countCardArray.push(card);
                card.classList.add('flip');
                console.log(countCardArray);
                compareCards();
            }
        });
    });
}
function compareCards() {
    if (countCardArray.length === 2) {
        if (countCardArray[0].dataset.card === countCardArray[1].dataset.card) {
            console.log('korten är lika');
            countCardArray = [];
            // Med setTimeout() går det 1.5s (1500 millisekunder) och sedan tas 'flip' klassen bort från båda korten och countCardArray nollställs.
        }
        else {
            console.log('korten är ej lika');
            setTimeout(() => {
                countCardArray[0].classList.remove('flip');
                countCardArray[1].classList.remove('flip');
                countCardArray = [];
            }, 1500);
        }
    }
}
shuffleCards();
cardFlip();
compareCards();
