// components/cardHeader.js - Componente de cabeçalho padronizado de episódio
module.exports = function renderHeaderBadge(episodio = 'EPISÓDIO 01') {
  return `
    <div class="episode-badge">${episodio}</div>
  `;
};
