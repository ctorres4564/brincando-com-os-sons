# Brincando com os Sons — Produção de Conteúdo Digital

## Objetivo do Projeto
Produção contínua e automatizada de carrosséis educativos para redes sociais (Instagram e Facebook) voltados ao público infantil, pais e educadores. A série tem foco na estimulação da linguagem e exploração lúdica dos sons da fala.
O **Episódio 01** explora o som inicial **/p/** por meio de palavras familiares (pato, panela, pipa e pão), com total respeito ao desenvolvimento infantil, sem caráter diagnóstico e com linguagem envolvente e acessível.

## Stack Utilizada
- **Linguagem & Runtime:** Node.js (v24+) / JavaScript
- **Renderizador Pixel-Perfect:** Puppeteer-Core com motor Chromium / Microsoft Edge
- **Layout & Estilos:** HTML5 semântico, CSS3 Moderno (Flexbox, CSS Grid, tipografia Google Fonts: Fredoka e Nunito)
- **Formatos de Entrega:** PNG 1080×1350 px (4:5, sRGB), PDF para conferência, legendas em `.txt` e pacote `.zip`

## Estrutura de Diretórios
```
/
├── .gitignore
├── README.md
├── package.json
├── /src              # Códigos-fonte dos templates HTML e CSS
├── /components       # Componentes visuais modulares dos cards
├── /pages            # Páginas estáticas completas de cada card
├── /services         # Serviços de geração, renderização e processamento
├── /utils            # Utilitários de conversão, empacotamento e medição
├── /assets           # Ilustrações originais e ícones
├── /docs             # Documentação técnica e guia pedagógico
├── /prompts          # Documentação de prompts das ilustrações
├── /scripts          # Scripts de automação de build e exportação
└── /Brincando_com_os_Sons
    └── /Publicacao_01  # Pasta final com os arquivos prontos para postagem
```

## Instruções de Instalação e Execução
1. Instalar as dependências:
   ```bash
   npm install
   ```
2. Gerar todos os cards, PDF, legendas e arquivo ZIP:
   ```bash
   node scripts/render_cards.js
   ```
3. Os arquivos finais estarão disponíveis em `Brincando_com_os_Sons/Publicacao_01/`.
