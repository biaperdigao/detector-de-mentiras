/**
 * Detector de Mentiras: recebe as peças da página e salva no Google Drive.
 *
 * Como instalar (uma vez só, uns 10 minutos):
 * 1. No Google Drive compartilhado, crie (ou abra) a pasta das peças e copie o ID dela:
 *    é o trecho do endereço depois de /folders/.
 * 2. Abra https://script.google.com, clique em "Novo projeto" e cole este arquivo inteiro.
 * 3. Preencha PASTA_ID e troque SENHA por uma senha só de vocês.
 * 4. Clique em Implantar > Nova implantação > tipo "App da Web".
 *    Executar como: "Eu". Quem pode acessar: "Qualquer pessoa".
 * 5. Autorize o acesso ao Drive quando o Google pedir e copie o link que termina em /exec.
 * 6. Na página, em Peças para redes > Configurar Google Drive, cole o link e a senha.
 *
 * Cada envio cria (se ainda não existir) a pasta do debate e, dentro dela, uma subpasta
 * por atualização. Reenviar uma atualização troca os arquivos de mesmo nome (os antigos vão para a lixeira).
 */
const PASTA_ID = 'COLE_AQUI_O_ID_DA_PASTA';
const SENHA = 'troque-esta-senha';

function doPost(e) {
  try {
    const req = JSON.parse(e.postData.contents);
    if (req.token !== SENHA) return resposta({ ok: false, erro: 'senha errada' });
    const nome = String(req.nome || '');
    if (!/^[a-z0-9-]+\.png$/.test(nome)) return resposta({ ok: false, erro: 'nome de arquivo inválido' });

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const raiz = DriveApp.getFolderById(PASTA_ID);
      const debate = subpasta(raiz, limpa(req.pasta) || 'Debate');
      const atualizacao = subpasta(debate, limpa(req.subpasta) || 'Atualização');
      const antigos = atualizacao.getFilesByName(nome);
      while (antigos.hasNext()) antigos.next().setTrashed(true);
      const blob = Utilities.newBlob(Utilities.base64Decode(req.base64), 'image/png', nome);
      const arquivo = atualizacao.createFile(blob);
      return resposta({ ok: true, arquivo: arquivo.getUrl(), pasta: atualizacao.getUrl() });
    } finally {
      lock.releaseLock();
    }
  } catch (err) {
    return resposta({ ok: false, erro: String(err && err.message || err) });
  }
}

// Abrir o link /exec no navegador mostra se o script está no ar.
function doGet() {
  return resposta({ ok: true, mensagem: 'Detector de Mentiras: script do Drive funcionando.' });
}

function subpasta(pai, nome) {
  const achou = pai.getFoldersByName(nome);
  return achou.hasNext() ? achou.next() : pai.createFolder(nome);
}

function limpa(texto) {
  return String(texto || '').replace(/[\\/:*?"<>|]/g, ' ').trim().slice(0, 80);
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
