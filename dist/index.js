console.log('start');
// Begränsa att man bara kan vända två kort åt gången
// Funktion för att jämföra de två kort som vändes
// If-else sats, om de två korten är lika ska de ej vändas tillbaka och om de är olika ska de   båda vändas tillbaka
// När alla kort är vända ska pop-up fönstret visas 'you won'
// Göra x-knappen klickbar och resetta spelet, alltså vända tillbaka alla kort och slumpa ut dom på nytt
// 'null' är efter HTMLElement, eftersom querySelectorn returnerar null om den inte hittar något element i '.memory-cards'
let cardContainer = document.querySelector('.memory-cards');
let memoryCard = document.querySelectorAll('.memory-card');
let cards = document.querySelectorAll('.memory-card');
// 'Array.from(cards)' konverterar NodeList i memoryCard till en array med alla kort inuti.
let cardArray = Array.from(cards);
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
function cardBtn() {
    cardArray.forEach(card => {
        card.addEventListener('click', () => {
            console.log('click');
            card.classList.add('flip');
        });
    });
}
shuffleCards();
cardBtn();
