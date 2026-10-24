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

## Peças para redes

A aba **Peças para redes** tem **um painel só** que alimenta as três peças de publicar, com prévia lado a lado:

1. **Ao vivo**: o mesmo desenho da peça ao vivo (foto em meio-tom no bloco lilás, sirene, "até agora, N mentiras foram ditas").
2. **Contador**: "Fulano disse X mentiras em X minutos", a faixa "FULANO MENTE" e o par "ele disse que… / mas a verdade é que…".
3. **Amarela**: "FULANO DISSE X MENTIRAS EM X MINUTOS", "FULANO / MENTE" gigante com a foto quadrada sobre o E, e o par ele disse / verdade com a fonte no rodapé.

As três saem em **feed** (1080 × 1350) ou **stories** (1080 × 1920), escolhido em **Formato das 3 peças**. No stories sobra uma folga em cima e embaixo para a barra do Instagram: na peça Ao vivo a foto cresce, e na Amarela o texto de baixo fica maior.

- **Exportar as 3 peças** baixa três PNGs separados de uma vez (se o navegador perguntar, permita baixar vários arquivos).
- **Puxar do ao vivo** conta as mentiras registradas da pessoa, usa o tempo do cronômetro e traz a mentira mais recente dela. Tudo pode ser editado à mão depois.
- Em **Escolher do histórico** dá para trocar qual mentira aparece.

### Checagem ao vivo (fontes externas)

No painel **Checagem ao vivo**, escolha a **Fonte** e o **Candidato**. A página busca as checagens a cada 10 segundos e preenche sozinha o número de mentiras, os minutos de debate e a mentira em destaque (fala, verdade e fonte). Tudo continua editável.

- **Rodapé** (aovivo.rodape.org): junta Lupa, Aos Fatos, Fato ou Fake e Estadão Verifica. Ele não traz o texto da verdade, então o campo vem como "a Lupa classificou a frase como “falso”". Vale reescrever antes de exportar.
- **VAR Debate** (vardebate.com.br): traz a explicação e as fontes de cada checagem. Itens retirados ou em rechecagem ficam de fora.
- Conta como mentira o que a fonte marca como falso. **Contar imprecisas como mentira** inclui exagerado, impreciso, insustentável etc.
- **Usar sempre a checagem mais recente** troca a mentira em destaque quando chega uma nova. Clicar numa checagem da lista fixa aquela e desliga a troca automática.
- O checagemaovivo.org não libera leitura por outros sites, por isso ainda não está na lista.

### Atualizações (1, 2, 3…)

Acima das prévias ficam as abinhas **Ao vivo · Atualização 1 · Atualização 2 · … · + Nova**.

- **Ao vivo** é o rascunho que acompanha a fonte de checagem.
- Cada mentira nova que chega da fonte vira uma **Atualização N**: uma cópia congelada com o número de mentiras, os minutos, a fala, a verdade, a fonte e uma foto sorteada. As mentiras que já existiam quando a fonte foi ligada não viram atualização.
- A fonte **nunca mexe** numa atualização. Dá para editar a Atualização 2 com calma enquanto a 3 e a 4 chegam.
- **+ Nova** congela à mão o que está na tela.
- Cada abinha mostra o estado: **nova**, **✎ editada** (mudou desde que foi criada ou enviada) ou **✓ enviada**.
- **Baixar as 3 peças** salva no computador. **Aprovar e enviar ao Drive** sobe as três peças em feed e stories (6 PNGs). Enviar a partir de Ao vivo cria uma atualização antes.

### Google Drive

O envio usa um Google Apps Script que salva os arquivos na pasta compartilhada. Quem opera a página não precisa fazer login. A configuração é feita uma vez só:

1. No Drive compartilhado, crie a pasta das peças e copie o ID dela: é o trecho do endereço depois de `/folders/`.
2. Abra [script.google.com](https://script.google.com), crie um **Novo projeto** e cole o conteúdo de [`drive-upload.gs`](drive-upload.gs).
3. No topo do script, preencha `PASTA_ID` e troque `SENHA` por uma senha só de vocês.
4. **Implantar → Nova implantação → App da Web**. Executar como: **Eu**. Quem pode acessar: **Qualquer pessoa**.
5. Autorize o acesso ao Drive e copie o link que termina em `/exec`. Abrir esse link no navegador mostra "script do Drive funcionando".
6. Na página, em **Peças para redes → Configurar Google Drive**, cole o link e a senha.

No Drive, os arquivos ficam em `Pasta das peças / <nome do debate> / Atualização 01 / flavio-atualizacao-01-amarela-feed.png` e assim por diante. Reenviar uma atualização troca os arquivos de mesmo nome, e os antigos vão para a lixeira. O link e a senha ficam salvos só no navegador de quem configurou.

### Banco de fotos

- As 12 fotos do Flávio já vêm embutidas no `index.html`, em preto e branco.
- A cada vez que a página abre, uma foto diferente é sorteada. **Sortear foto** troca, e clicar numa miniatura escolhe.
- A foto escolhida entra no bloco lilás da peça Ao vivo e no E de MENTE da Amarela.
- O campo **Fotos de** diz de quem é o banco (padrão: Flávio). O banco só é usado quando o nome no painel é essa pessoa. Para outra pessoa, as peças usam a foto dela registrada na aba Ao vivo.
- Na aba **Ao vivo**, mentiras dessa pessoa registradas sem foto também recebem uma foto do banco.
- **+ Adicionar fotos** inclui fotos novas (convertidas para P&B), que ficam salvas só no navegador de quem adicionou. Uma foto adicionada pode ser removida com **Remover a escolhida**.

## Onde ficam os dados

Os registros e as fotos ficam salvos **só no navegador de quem está operando** (localStorage). Não vão para o GitHub nem para outra pessoa. Abrir em outro computador ou em janela anônima começa do zero. Apague os dois itens de exemplo antes de ir ao ar.

As fotos são reduzidas automaticamente, mas o navegador guarda cerca de 5 MB por site. Se aparecer o aviso de falta de espaço, apague itens antigos.

## Créditos

Design: Sophia Lapertosa.
Fontes: Anton, Archivo, Instrument Serif, Libre Caslon Condensed e IBM Plex Mono (Google Fonts, licença OFL).
