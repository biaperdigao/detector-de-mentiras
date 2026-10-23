# Detector de Mentiras

Gerador de peça para checagem ao vivo de debate. A cada mentira registrada, o alarme dispara e a peça mostra **a mentira, a verdade e a fonte (link)**, com a foto de quem falou em meio-tom e a sirene animada.

Tudo roda num único arquivo (`index.html`), sem instalação e sem servidor próprio.

## Como publicar no GitHub Pages

1. No GitHub, crie um repositório novo (ex.: `detector-de-mentiras`). Pode ser público.
2. Clique em **Add file → Upload files** e envie os arquivos desta pasta (`index.html`, `README.md` e `.nojekyll`). Confirme com **Commit changes**.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Source: Deploy from a branch**, branch **main**, pasta **/ (root)** e clique em **Save**.
5. Depois de 1 ou 2 minutos, o endereço aparece no topo da página de Pages, no formato `https://NOME-DO-USUARIO.github.io/detector-de-mentiras/`.

Para atualizar depois, basta subir um `index.html` novo por cima do antigo.

## Como usar

- **Iniciar debate** (ou barra de espaço) liga o cronômetro. Ele não aparece na peça, só marca o minuto de cada mentira.
- Preencha **Quem disse, Foto, Mentira, Verdade e Fonte** e clique em **Disparar alarme** (ou `Ctrl`+`Enter`).
- Sem foto, a peça reaproveita a última foto da mesma pessoa. Você também pode arrastar uma imagem direto para a peça.
- Clique em qualquer item do histórico para voltar a exibi-lo.
- **Modo transmissão** deixa só a peça na tela, para capturar no OBS ou gravar a tela. `Esc` sai.
- O som do alarme só toca depois do primeiro clique na página (regra dos navegadores).

## Contador para redes

A aba **Contador para redes** gera a peça para publicar: "Fulano disse X mentiras em X minutos", a frase em destaque ("FULANO MENTE") e o par "ele disse que… / mas a verdade é que…", com a fonte.

- **Puxar do ao vivo** conta as mentiras registradas da pessoa, usa o tempo do cronômetro e traz a mentira mais recente dela. Tudo pode ser editado à mão depois.
- Em **Escolher do histórico** dá para trocar qual mentira aparece.
- **Feed 4:5** e **Stories 9:16** trocam a prévia. A prévia é exatamente a imagem baixada.
- **Baixar feed** (1080 × 1350) e **Baixar stories** (1080 × 1920) salvam PNGs prontos para postar.

## Onde ficam os dados

Os registros e as fotos ficam salvos **só no navegador de quem está operando** (localStorage). Não vão para o GitHub nem para outra pessoa. Abrir em outro computador ou em janela anônima começa do zero. Apague os dois itens de exemplo antes de ir ao ar.

As fotos são reduzidas automaticamente, mas o navegador guarda cerca de 5 MB por site. Se aparecer o aviso de falta de espaço, apague itens antigos.

## Créditos

Design: Sophia Lapertosa.
Fontes: Anton, Archivo, Instrument Serif, Libre Caslon Condensed e IBM Plex Mono (Google Fonts, licença OFL).
