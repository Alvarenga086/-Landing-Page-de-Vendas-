Sanity Studio (local)

Passos para configurar o Sanity Studio localmente e permitir que o cliente adicione fotos de produto:

1. Instale o Sanity CLI globalmente (se ainda não tiver):

```bash
npm install -g @sanity/cli
```

2. Entre na pasta do Studio e instale dependências:

```bash
cd sanity-studio
npm install
```

3. Configure variáveis de ambiente (pasta raiz do projeto):

Crie um arquivo `.env` ou use as variáveis no seu ambiente com os valores do seu projeto Sanity:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

4. Inicie o Studio:

```bash
npm run dev
```

5. No Sanity Studio, crie documentos do tipo `Product` com `name`, `description`, `category` e `image`.

6. Permita origem (CORS) para seu domínio Vercel no painel do Sanity (Settings → CORS origins) para que o site público possa carregar imagens.

Observações:
- Depois de adicionar produtos no Studio, o site buscará automaticamente os produtos via API (desde que `SANITY_PROJECT_ID` e `SANITY_DATASET` estejam configurados no ambiente do Vercel).

## Deploy no Vercel

Para publicar o Sanity Studio de forma estática no Vercel (fácil e grátis no plano Starter):

1. No GitHub, confirme que a pasta `sanity-studio/` está no repositório (já adicionada aqui).
2. No Vercel, clique em `New Project` → escolha o repositório → em `Root Directory` selecione `sanity-studio`.
3. Em `Build Command` coloque:

```
npm run build
```

4. Em `Output Directory` coloque:

```
dist
```

5. Configure as variáveis de ambiente no Vercel (Project Settings → Environment Variables):

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_USE_CDN=true
```

6. Deploy — o Vercel irá rodar `npm run build` dentro da pasta `sanity-studio` e publicar o conteúdo de `dist`.

Alternativa com Vercel CLI (opcional):

```bash
# instale vercel se não tiver
npm i -g vercel
# faça deploy apontando para a pasta
vercel --cwd sanity-studio
```

Após o deploy, compartilhe a URL do Studio para que o cliente faça uploads semanais.

