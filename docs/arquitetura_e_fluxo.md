# Documentação Técnica — Série "Brincando com os Sons"

## 1. Objetivo da Solução
Esta ferramenta automatiza a geração, conferência, empacotamento e controle de qualidade de carrosséis educativos para redes sociais (Instagram e Facebook). A proposta pedagógica foca no desenvolvimento da linguagem infantil por meio da exploração lúdica dos sons da fala (fonologia), com respeito integral à diversidade da infância e sem conotação diagnóstica.

---

## 2. Arquitetura do Sistema

A arquitetura foi desenhada em camadas modulares para facilitar a manutenção e a criação contínua de novos episódios:

```
                  ┌───────────────────────────────┐
                  │   Assets / Prompts / SVG      │
                  │   (Ilustrações e Vetores)     │
                  └──────────────┬────────────────┘
                                 │
                                 ▼
                  ┌───────────────────────────────┐
                  │    Design System & Pages      │
                  │   HTML5 + CSS3 (1080x1350)    │
                  └──────────────┬────────────────┘
                                 │
                                 ▼
                  ┌───────────────────────────────┐
                  │    Services & Automation      │
                  │ (Puppeteer-Core / Chromium)   │
                  └──────────────┬────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  6 PNGs (4:5)    │   │  PDF Unificado   │   │ Legendas & Acess.│
│ (1080x1350 sRGB) │   │ (Conferência)    │   │ (.txt)           │
└────────┬─────────┘   └────────┬─────────┘   └────────┬─────────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                ▼
                  ┌───────────────────────────────┐
                  │   Pacote ZIP Consolidado      │
                  │   (publicacao_01.zip)         │
                  └───────────────────────────────┘
```

- **Camada Visual:**
  - `src/styles/design-system.css`: Define as variáveis de cores (Coral, Amarelo, Verde menta, Lilás, Creme e Azul-escuro), tipografia moderna (`Fredoka` e `Nunito`), proporções e classes utilitárias.
  - `pages/`: Templates independentes para cada card (`card01.html` a `card06.html`), em resolução nativa 1080×1350 px (4:5). O Card 06 apresenta a assinatura profissional (Sônia Torres — Fonoaudióloga — CRFª 1-17701).
- **Camada de Serviços & Scripts:**
  - `services/renderService.js`: Encapsula a lógica de automação do Puppeteer com Chromium ou Edge do sistema.
  - `scripts/render_cards.js`: Executa o fluxo ponta a ponta: renderização dos 6 PNGs, unificação do PDF e criação do ZIP.
  - `scripts/validate.js`: Suíte de testes automatizados que verifica dimensões exatas de cada PNG (via headers IHDR), existência dos arquivos e cumprimento das diretrizes editoriais.

---

## 3. Fluxo de Dados

1. **Definição de Conteúdo:** Os textos, palavras-chave e conceitos fonéticos do episódio são configurados nos templates HTML.
2. **Carregamento Visual:** O renderizador abre o template no navegador headless com viewport fixada em 1080×1350 px.
3. **Sincronização de Fontes:** O script aguarda `document.fonts.ready` para garantir que as fontes do Google Fonts sejam desenhadas com nitidez total antes da captura.
4. **Captura Pixel-Perfect:** O Puppeteer efetua o screenshot direto no buffer gerando PNGs em sRGB com contraste auditado.
5. **Geração do PDF de Conferência:** As cinco páginas são concatenadas e exportadas para um único arquivo PDF com 5 páginas nativas de 1080×1350 px.
6. **Empacotamento:** O arquivo `publicacao_01.zip` é montado incluindo todos os cartões, legendas, texto alternativo e PDF.

---

## 4. Como Manter e Criar Novos Episódios

Para criar o próximo episódio (ex: **Episódio 02 — O som /b/**):
1. **Prompts e SVGs:**
   - Adicionar os novos vetores ilustrados em `assets/svgs.js` e documentar os prompts correspondentes em `prompts/`.
2. **Novas Páginas:**
   - Duplicar os templates em `pages/` para o novo episódio ou atualizar os dados das palavras e ilustrações.
3. **Execução:**
   - Rodar o comando:
     ```bash
     npm run build
     ```
   - Rodar a suíte de testes e validação:
     ```bash
     npm test
     ```
4. **Publicação:**
   - Todos os arquivos finais serão salvos organizados na pasta correspondente `Brincando_com_os_Sons/Publicacao_XX/`.
