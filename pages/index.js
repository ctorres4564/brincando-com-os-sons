// pages/index.js - Mapeamento e exportação das páginas dos cards
const cards = require('../src/templates/cards.js');

module.exports = {
  card1: cards.getCard1Html(),
  card2: cards.getCard2Html(),
  card3: cards.getCard3Html(),
  card4: cards.getCard4Html(),
  card5: cards.getCard5Html()
};
