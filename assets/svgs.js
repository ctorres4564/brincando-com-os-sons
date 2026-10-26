// svgs.js - Ilustrações e elementos visuais originais com estética aquarela digital e traços suaves
module.exports = {
  pato: `
    <svg viewBox="0 0 240 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gradPatoCorpo" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#FFF0A5" />
          <stop offset="65%" stop-color="#F5C85E" />
          <stop offset="100%" stop-color="#EAA638" />
        </radialGradient>
        <radialGradient id="gradPatoBico" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FF9B71" />
          <stop offset="100%" stop-color="#F47752" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <!-- Ondas suaves da água -->
      <path d="M 20 190 Q 60 178 100 190 T 180 190 T 220 190" fill="none" stroke="#74BDB5" stroke-width="6" stroke-linecap="round" opacity="0.75" />
      <path d="M 45 205 Q 85 195 125 205 T 195 205" fill="none" stroke="#74BDB5" stroke-width="4.5" stroke-linecap="round" opacity="0.5" />
      
      <!-- Cauda e Corpo -->
      <path d="M 60 145 C 35 125 45 105 70 125 C 80 115 105 105 145 110 C 180 115 200 140 195 165 C 190 190 150 195 110 192 C 75 190 55 170 60 145 Z" 
            fill="url(#gradPatoCorpo)" />
      
      <!-- Asa com textura em camadas -->
      <path d="M 85 145 C 95 125 125 125 150 138 C 160 143 162 160 145 168 C 120 176 95 170 85 145 Z" 
            fill="#EAA638" opacity="0.6" />
      <path d="M 95 145 C 105 130 128 132 145 142 C 150 146 148 158 138 162 C 118 168 100 160 95 145 Z" 
            fill="#F5C85E" />

      <!-- Pescoço e Cabeça -->
      <circle cx="155" cy="85" r="38" fill="url(#gradPatoCorpo)" />
      
      <!-- Bochecha corada sutil -->
      <circle cx="145" cy="96" r="10" fill="#F47752" opacity="0.25" />

      <!-- Bico amigável e arredondado -->
      <path d="M 180 82 C 195 80 215 85 212 94 C 210 102 190 102 178 96 Z" 
            fill="url(#gradPatoBico)" />

      <!-- Olhinho fofo com brilho -->
      <circle cx="162" cy="78" r="6.5" fill="#24334B" />
      <circle cx="160.5" cy="76" r="2.2" fill="#FFFFFF" />
      
      <!-- Peninha no topo da cabeça -->
      <path d="M 152 48 C 156 38 165 42 160 52 Z" fill="#EAA638" />
    </svg>
  `,

  panela: `
    <svg viewBox="0 0 240 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradPanela" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9AD3CD" />
          <stop offset="50%" stop-color="#74BDB5" />
          <stop offset="100%" stop-color="#529C94" />
        </linearGradient>
        <linearGradient id="gradTampa" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF8F0" />
          <stop offset="100%" stop-color="#D9EFEA" />
        </linearGradient>
      </defs>
      <!-- Vapores lúdicos -->
      <path d="M 105 50 Q 115 35 105 20" fill="none" stroke="#74BDB5" stroke-width="4" stroke-linecap="round" opacity="0.6" />
      <path d="M 125 45 Q 135 25 125 10" fill="none" stroke="#F5C85E" stroke-width="4.5" stroke-linecap="round" opacity="0.7" />
      <path d="M 145 52 Q 155 38 148 24" fill="none" stroke="#A89BDD" stroke-width="4" stroke-linecap="round" opacity="0.6" />

      <!-- Alça Esquerda -->
      <path d="M 46 125 C 24 125 24 155 46 155" fill="none" stroke="#24334B" stroke-width="7" stroke-linecap="round" />
      <!-- Alça Direita -->
      <path d="M 194 125 C 216 125 216 155 194 155" fill="none" stroke="#24334B" stroke-width="7" stroke-linecap="round" />

      <!-- Corpo da Panela -->
      <rect x="44" y="110" width="152" height="78" rx="28" fill="url(#gradPanela)" />
      <!-- Brilho frontal suave -->
      <path d="M 64 122 C 72 155 72 165 64 175" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.4" />

      <!-- Tampa da Panela -->
      <ellipse cx="120" cy="110" rx="76" ry="14" fill="#529C94" />
      <path d="M 48 108 C 55 82 185 82 192 108 Z" fill="url(#gradTampa)" stroke="#74BDB5" stroke-width="3" />
      
      <!-- Pegador da tampa -->
      <rect x="110" y="68" width="20" height="15" rx="6" fill="#F47752" />
      <ellipse cx="120" cy="68" rx="15" ry="6" fill="#FF9B71" />
    </svg>
  `,

  pipa: `
    <svg viewBox="0 0 240 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradPipaLinha" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#24334B" />
          <stop offset="100%" stop-color="#A89BDD" />
        </linearGradient>
      </defs>
      <!-- Rabiola ondulada com movimento -->
      <path d="M 120 165 C 100 185 70 195 90 220 C 98 230 115 225 125 235" 
            fill="none" stroke="#24334B" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="2 1" />
      
      <!-- Lacinhos da rabiola -->
      <!-- Laço 1 (Coral) -->
      <path d="M 100 182 L 86 177 L 102 190 L 88 195 Z" fill="#F47752" />
      <!-- Laço 2 (Amarelo) -->
      <path d="M 76 206 L 68 198 L 82 216 L 68 218 Z" fill="#F5C85E" />
      <!-- Laço 3 (Lilás) -->
      <path d="M 108 226 L 118 218 L 106 236 L 122 235 Z" fill="#A89BDD" />

      <!-- Corpo da Pipa - 4 Quadrantes -->
      <!-- Quadrante Superior Esquerdo (Coral) -->
      <polygon points="120,35 60,105 120,105" fill="#F47752" opacity="0.9" />
      <!-- Quadrante Superior Direito (Amarelo) -->
      <polygon points="120,35 180,105 120,105" fill="#F5C85E" opacity="0.95" />
      <!-- Quadrante Inferior Esquerdo (Verde Menta) -->
      <polygon points="60,105 120,168 120,105" fill="#74BDB5" opacity="0.9" />
      <!-- Quadrante Inferior Direito (Lilás) -->
      <polygon points="180,105 120,168 120,105" fill="#A89BDD" opacity="0.9" />

      <!-- Varetas da pipa (Estrutura) -->
      <line x1="120" y1="35" x2="120" y2="168" stroke="#FFF8F0" stroke-width="4.5" stroke-linecap="round" />
      <path d="M 60 105 Q 120 118 180 105" fill="none" stroke="#FFF8F0" stroke-width="4" stroke-linecap="round" />

      <!-- Contorno suave elegante -->
      <polygon points="120,35 180,105 120,168 60,105" fill="none" stroke="#24334B" stroke-width="4" stroke-linejoin="round" />
    </svg>
  `,

  pao: `
    <svg viewBox="0 0 240 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gradPao" cx="48%" cy="38%" r="62%">
          <stop offset="0%" stop-color="#FFE4B5" />
          <stop offset="45%" stop-color="#EAA638" />
          <stop offset="85%" stop-color="#C67623" />
          <stop offset="100%" stop-color="#934D0B" />
        </radialGradient>
        <radialGradient id="gradCorte" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF6DE" />
          <stop offset="100%" stop-color="#FCE1A8" />
        </radialGradient>
      </defs>
      <!-- Sombra suave na base -->
      <ellipse cx="120" cy="182" rx="78" ry="16" fill="#24334B" opacity="0.12" />

      <!-- Massa do pão arredondado rústico -->
      <path d="M 44 145 C 38 105 70 65 120 65 C 170 65 202 105 196 145 C 192 172 165 178 120 178 C 75 178 48 172 44 145 Z" 
            fill="url(#gradPao)" />

      <!-- Cortes característicos no topo com miolo fofinho e crocante -->
      <!-- Corte 1 (Esquerda) -->
      <path d="M 76 96 C 84 88 94 105 85 116 C 76 124 68 108 76 96 Z" fill="url(#gradCorte)" stroke="#8A4506" stroke-width="1.8" />
      <!-- Corte 2 (Centro) -->
      <path d="M 112 88 C 124 78 132 105 122 120 C 112 130 102 105 112 88 Z" fill="url(#gradCorte)" stroke="#8A4506" stroke-width="1.8" />
      <!-- Corte 3 (Direita) -->
      <path d="M 148 96 C 158 88 168 108 158 118 C 148 126 140 108 148 96 Z" fill="url(#gradCorte)" stroke="#8A4506" stroke-width="1.8" />

      <!-- Salpicado leve de farinha artesanal -->
      <circle cx="98" cy="78" r="2" fill="#FFFFFF" opacity="0.6" />
      <circle cx="140" cy="76" r="2.5" fill="#FFFFFF" opacity="0.7" />
      <circle cx="120" cy="72" r="1.8" fill="#FFFFFF" opacity="0.5" />
    </svg>
  `,

  interrogacao: `
    <svg viewBox="0 0 240 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gradDotCoral" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FF9B71" />
          <stop offset="100%" stop-color="#F47752" />
        </radialGradient>
      </defs>
      <!-- Elementos coloridos formando o arco da interrogação -->
      <circle cx="85" cy="80" r="18" fill="#F5C85E" />
      <circle cx="108" cy="54" r="16" fill="#F47752" />
      <circle cx="138" cy="46" r="20" fill="#74BDB5" />
      <circle cx="168" cy="58" r="17" fill="#A89BDD" />
      <circle cx="182" cy="88" r="18" fill="#F5C85E" />
      <circle cx="170" cy="118" r="16" fill="#F47752" />
      <circle cx="144" cy="140" r="17" fill="#74BDB5" />
      <circle cx="130" cy="168" r="16" fill="#A89BDD" />
      
      <!-- Ponto inferior composto -->
      <circle cx="130" cy="220" r="18" fill="url(#gradDotCoral)" />
      <circle cx="126" cy="216" r="6" fill="#FFFFFF" opacity="0.5" />

      <!-- Pequenas estrelinhas decorativas ao redor -->
      <path d="M 60 50 L 63 56 L 70 57 L 64 62 L 66 69 L 60 65 L 54 69 L 56 62 L 50 57 L 57 56 Z" fill="#F5C85E" opacity="0.8" />
      <path d="M 195 140 L 197 144 L 202 145 L 198 148 L 199 153 L 195 150 L 191 153 L 192 148 L 188 145 L 193 144 Z" fill="#74BDB5" opacity="0.8" />
      <circle cx="95" cy="130" r="5" fill="#A89BDD" opacity="0.6" />
      <circle cx="170" cy="180" r="6" fill="#F5C85E" opacity="0.7" />
    </svg>
  `,

  iconAnimal: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Pegadinha fofa de animal -->
      <ellipse cx="50" cy="62" rx="22" ry="18" fill="#F47752" />
      <circle cx="28" cy="38" r="8" fill="#F47752" />
      <circle cx="43" cy="28" r="8.5" fill="#F47752" />
      <circle cx="58" cy="28" r="8.5" fill="#F47752" />
      <circle cx="73" cy="38" r="8" fill="#F47752" />
    </svg>
  `,

  iconComida: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Maçãzinha fofa -->
      <path d="M 50 40 C 40 26 22 26 22 46 C 22 72 45 84 50 84 C 55 84 78 72 78 46 C 78 26 60 26 50 40 Z" fill="#F5C85E" />
      <!-- Cabinho -->
      <path d="M 50 36 C 50 24 55 18 60 16" fill="none" stroke="#24334B" stroke-width="3.5" stroke-linecap="round" />
      <!-- Folhinha -->
      <path d="M 52 26 C 62 20 68 28 58 32 Z" fill="#74BDB5" />
    </svg>
  `,

  iconBrinquedo: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Cubo lúdico com letra -->
      <rect x="22" y="24" width="56" height="56" rx="14" fill="#A89BDD" />
      <text x="50" y="63" font-family="'Fredoka', sans-serif" font-size="34" font-weight="700" fill="#FFF8F0" text-anchor="middle">P</text>
    </svg>
  `,

  escuta: `
    <svg viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Orelhinha / Fone lúdico de escuta com ondas sonoras -->
      <rect x="25" y="48" width="24" height="64" rx="12" fill="#74BDB5" />
      <rect x="111" y="48" width="24" height="64" rx="12" fill="#74BDB5" />
      <path d="M 37 54 C 37 18 123 18 123 54" fill="none" stroke="#24334B" stroke-width="7" stroke-linecap="round" />
      <!-- Ondas sonoras de escuta suave -->
      <path d="M 143 65 C 151 74 151 86 143 95" fill="none" stroke="#F47752" stroke-width="4.5" stroke-linecap="round" />
      <path d="M 152 56 C 165 70 165 90 152 104" fill="none" stroke="#F5C85E" stroke-width="4.5" stroke-linecap="round" />
    </svg>
  `,

  baloesComunicacao: `
    <svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Balão 1 (Lilás - trás) -->
      <path d="M 50 40 C 50 20 170 20 170 50 C 170 80 120 85 90 85 L 65 100 L 72 85 C 55 85 50 65 50 40 Z" fill="#A89BDD" opacity="0.85" />
      <!-- Balão 2 (Coral - frente) -->
      <path d="M 110 80 C 110 55 240 55 240 90 C 240 120 195 125 170 125 L 155 145 L 158 125 C 120 125 110 105 110 80 Z" fill="#F47752" />
      <circle cx="150" cy="90" r="5" fill="#FFF8F0" />
      <circle cx="175" cy="90" r="5" fill="#FFF8F0" />
      <circle cx="200" cy="90" r="5" fill="#FFF8F0" />
      <!-- Coraçãozinho de conexão afetuosa -->
      <path d="M 235 38 C 235 32 242 28 248 33 C 254 28 261 32 261 38 C 261 48 248 54 248 54 C 248 54 235 48 235 38 Z" fill="#F5C85E" />
    </svg>
  `
};
