# Isabella Cortez — Site Institucional

Site institucional premium construído com Next.js 14 (App Router), TypeScript,
Tailwind CSS, Framer Motion e Lucide Icons. Foco total em gerar confiança e
converter visitantes em conversas no WhatsApp.

## 1. Rodar localmente

Pré-requisitos: [Node.js 18+](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## 2. Já está tudo configurado

O número de WhatsApp, e-mail e Instagram reais já estão preenchidos em
`lib/constants.ts` (WhatsApp) e `components/Footer.tsx` (e-mail/Instagram).
Você só precisa mexer nisso se algum dado mudar no futuro.

**Logo**
A logo oficial já está integrada: `public/logo-full.png` (arte completa,
usada em fundos escuros) e `public/logo-mark.png` (monograma "I" estilizado
recortado em formato de emblema, usado no cabeçalho e no rodapé). O favicon e
o ícone para iOS também já foram gerados a partir dela (`favicon-32.png`,
`apple-touch-icon.png`). A paleta do Tailwind (`tailwind.config.ts`) foi
ajustada para bater exatamente com os tons de azul-marinho e dourado da arte.

**Fotos profissionais**
As fotos reais já estão no ar: `public/foto-hero.jpg` (seção inicial) e
`public/foto-sobre.jpg` (seção "Sobre"). Para trocar por outra foto no
futuro, basta substituir o arquivo mantendo o mesmo nome — o tamanho é
ajustado automaticamente.

**Registro OAB**
O número OAB/SP 525.315 já aparece no site (foto de abertura, seção "Sobre",
rodapé e dados estruturados de SEO).

**Imagem de Open Graph (compartilhamento em redes sociais)**
Por padrão o compartilhamento em redes usa `public/logo-full.png`. Se quiser
uma arte dedicada no formato ideal (1200x630px), adicione
`public/og-image.jpg` e aponte para ela em `app/layout.tsx` (`openGraph.images`
e `twitter.images`).

**Domínio real**
Em `lib/constants.ts`, atualize `SITE_URL` para o domínio definitivo do site.
Isso alimenta o SEO, o Open Graph e o `sitemap.xml`.

**Textos, e-mail e Instagram**
- FAQ, Sobre, Diferenciais: ajuste livremente os textos em cada componente
  dentro de `components/`.

## 3. Publicar no GitHub

No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Site institucional Isabella Cortez"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/isabella-cortez-site.git
git push -u origin main
```

(Crie antes o repositório vazio em https://github.com/new — e envie o
conteúdo desta pasta direto na raiz do repositório, não dentro de uma
subpasta, para evitar erro 404 na Vercel.)

## 4. Publicar na Vercel

**Opção A — pelo site (mais simples)**
1. Acesse https://vercel.com/new
2. Selecione o repositório que você acabou de subir no GitHub.
3. A Vercel detecta Next.js automaticamente — não precisa mudar nada.
4. Clique em **Deploy**.
5. Em alguns minutos o site estará no ar em um domínio `.vercel.app`,
   e você pode conectar um domínio próprio em **Settings → Domains**.

**Opção B — pelo terminal**
```bash
npm i -g vercel
vercel login
vercel
```
Siga as instruções (na primeira vez ele pergunta o nome do projeto e
confirma as configurações). Para publicar em produção:
```bash
vercel --prod
```

**Erro "404 NOT_FOUND" depois do deploy**
Isso acontece quando os arquivos do projeto ficaram dentro de uma subpasta
no repositório (ex: `isabella-cortez/package.json` em vez de `package.json`
na raiz). Para corrigir sem precisar reenviar nada ao GitHub: no painel da
Vercel, vá em **Settings → General → Root Directory → Edit**, digite o nome
da subpasta (ex: `isabella-cortez`), salve e depois vá em **Deployments →
⋯ → Redeploy**.

## 5. Estrutura do projeto

```
app/
  layout.tsx      → SEO, fontes, schema.org
  page.tsx         → monta as seções na ordem
  globals.css
components/
  Header.tsx
  Hero.tsx
  PracticeAreas.tsx
  HowItWorks.tsx
  About.tsx
  Differentials.tsx
  FAQ.tsx
  CTAFinal.tsx
  Footer.tsx
  WhatsAppFloatingButton.tsx
lib/
  constants.ts     → WhatsApp, links do menu, URL do site
```

## 6. Performance & SEO já configurados

- Metadados, Open Graph e Schema.org (`Attorney`) em `app/layout.tsx`.
- `sitemap.xml` e `robots.txt` gerados automaticamente (`app/sitemap.ts`,
  `app/robots.ts`).
- Fontes carregadas via `next/font` (sem layout shift, self-hosted).
- Animações respeitam `prefers-reduced-motion`.
- Foco visível em todos os elementos interativos (`:focus-visible`).
