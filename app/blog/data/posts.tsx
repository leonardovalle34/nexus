export type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
  content: React.ReactNode
}

import React from 'react'

export const posts: Omit<Post, 'content'>[] = [
  {
    slug: 'por-que-sua-empresa-precisa-de-um-site',
    title: 'Por que sua empresa precisa de um site profissional em 2025',
    description: 'Descubra por que ter um site profissional é essencial para pequenas e médias empresas que querem crescer no digital.',
    date: '2025-06-01',
    tags: ['Sites', 'Marketing Digital'],
    readingTime: '5 min',
  },
  {
    slug: 'instagram-para-empresas',
    title: 'Instagram para empresas: como gerar clientes de verdade',
    description: 'Aprenda as estratégias que realmente funcionam para transformar seu Instagram em uma máquina de captação de clientes.',
    date: '2025-06-05',
    tags: ['Instagram', 'Social Media'],
    readingTime: '6 min',
  },
  {
    slug: 'o-que-e-seo',
    title: 'O que é SEO e por que sua empresa precisa disso agora',
    description: 'SEO é a chave para aparecer no Google sem pagar por anúncios. Entenda como funciona e como aplicar para o seu negócio.',
    date: '2025-06-08',
    tags: ['SEO', 'Google'],
    readingTime: '5 min',
  },
  {
    slug: 'google-minha-empresa',
    title: 'Google Minha Empresa: o guia completo para aparecer no mapa',
    description: 'Aprenda como configurar e otimizar seu perfil no Google Minha Empresa e apareça quando clientes buscam pelo seu serviço.',
    date: '2025-06-12',
    tags: ['Google', 'SEO Local'],
    readingTime: '6 min',
  },
  {
    slug: 'como-criar-site-barato',
    title: 'Como criar um site profissional sem gastar uma fortuna',
    description: 'Saiba quais são as opções reais para criar um site profissional com bom custo-benefício para o tamanho do seu negócio.',
    date: '2025-06-15',
    tags: ['Sites', 'PME'],
    readingTime: '5 min',
  },
  {
    slug: 'gestao-redes-sociais',
    title: 'Vale a pena contratar uma agência para gerenciar suas redes sociais?',
    description: 'Entenda quando faz sentido terceirizar a gestão das redes sociais da sua empresa e o que esperar de uma boa agência.',
    date: '2025-06-18',
    tags: ['Social Media', 'Agência Digital'],
    readingTime: '5 min',
  },
  {
    slug: 'app-sob-medida-ou-pronto',
    title: 'App sob medida ou solução pronta: qual escolher para sua empresa?',
    description: 'Descubra as vantagens e desvantagens de desenvolver um app próprio versus usar uma plataforma pronta.',
    date: '2025-06-20',
    tags: ['Apps', 'Tecnologia'],
    readingTime: '6 min',
  },
  {
    slug: 'identidade-visual-pequena-empresa',
    title: 'Identidade visual para pequenas empresas: por que é mais importante do que você pensa',
    description: 'Uma identidade visual profissional não é luxo — é necessidade. Veja como uma boa marca transforma seu negócio.',
    date: '2025-06-22',
    tags: ['Identidade Visual', 'Branding'],
    readingTime: '4 min',
  },
  {
    slug: 'youtube-para-empresas',
    title: 'YouTube para empresas: como usar o maior buscador de vídeos do mundo',
    description: 'Saiba como usar vídeos para atrair clientes e posicionar sua empresa como autoridade no nicho.',
    date: '2025-06-25',
    tags: ['YouTube', 'Marketing de Conteúdo'],
    readingTime: '5 min',
  },
  {
    slug: 'landing-page-vs-site',
    title: 'Landing page ou site institucional: qual a melhor opção para o seu negócio?',
    description: 'Entenda a diferença entre landing page e site institucional e descubra qual vai gerar mais resultado.',
    date: '2025-06-28',
    tags: ['Sites', 'Conversão'],
    readingTime: '5 min',
  },
  {
    slug: 'erros-site-empresarial',
    title: '7 erros no site da sua empresa que estão afastando clientes',
    description: 'Descubra os erros mais comuns em sites empresariais que fazem os visitantes saírem sem entrar em contato.',
    date: '2025-07-01',
    tags: ['Sites', 'UX'],
    readingTime: '6 min',
  },
  {
    slug: 'trafego-organico-vs-pago',
    title: 'Tráfego orgânico vs tráfego pago: qual investir primeiro?',
    description: 'Google Ads ou SEO? Descubra qual estratégia faz mais sentido para o momento da sua empresa.',
    date: '2025-07-05',
    tags: ['SEO', 'Google Ads'],
    readingTime: '6 min',
  },
]

export const postContents: Record<string, React.ReactNode> = {
  'por-que-sua-empresa-precisa-de-um-site': (
    <>
      <p>Se você ainda depende apenas das redes sociais para divulgar seu negócio, está perdendo uma grande oportunidade. Um site profissional é a base de toda estratégia digital sólida.</p>
      <h2>O que diferencia um site das redes sociais</h2>
      <p>As redes sociais são ótimas para engajamento, mas você não controla o algoritmo. Sua conta pode ser suspensa, o alcance pode cair, e você fica refém das regras de cada plataforma. Com um site próprio, você controla 100% do conteúdo, aparece no Google e capta leads diretamente.</p>
      <h2>SEO: sendo encontrado no Google</h2>
      <p>Quando alguém digita "hidráulico em Joinville" ou "dentista no centro de Florianópolis", o Google mostra os sites que mais correspondem à busca. Sem site, você simplesmente não aparece. Um site bem otimizado pode gerar clientes de forma passiva, sem gastar com anúncios.</p>
      <h2>Credibilidade e confiança</h2>
      <p>Mais de 70% dos consumidores pesquisam uma empresa online antes de comprar. Se não encontram um site, a confiança cai drasticamente. Um site profissional com depoimentos e portfólio transforma visitantes em clientes.</p>
      <h2>Quanto custa não ter um site?</h2>
      <p>Cada cliente que pesquisou seu serviço, não encontrou seu site e foi para o concorrente representa dinheiro perdido. O custo de não ter um site supera em muito o investimento em tê-lo.</p>
    </>
  ),
  'instagram-para-empresas': (
    <>
      <p>Ter um perfil no Instagram não é suficiente. Milhares de empresas postam todo dia sem ver resultado nenhum. O segredo está na estratégia por trás do conteúdo.</p>
      <h2>Por que a maioria das empresas não vende pelo Instagram</h2>
      <p>Os erros mais comuns são: postar apenas produtos sem gerar valor, não ter consistência na frequência, ignorar Stories e Reels, e não interagir com seguidores.</p>
      <h2>A regra 80/20</h2>
      <p>80% conteúdo útil, 20% venda. Ensine algo, mostre bastidores, compartilhe dicas do seu setor. Quando você vender, o seguidor já confia em você.</p>
      <h2>Reels são o maior aliado do alcance orgânico</h2>
      <p>O Instagram prioriza Reels na distribuição. Um único Reels bem feito pode alcançar milhares de pessoas que ainda não te seguem. Invista em vídeos curtos e didáticos.</p>
      <h2>CTA em todo post</h2>
      <p>Todo post precisa de um call to action claro: "Manda uma mensagem", "Clica no link da bio", "Salva esse post". Sem CTA, o engajamento não vira cliente.</p>
    </>
  ),
  'o-que-e-seo': (
    <>
      <p>SEO — Search Engine Optimization — é o conjunto de técnicas que fazem seu site aparecer nas primeiras posições do Google de forma orgânica, sem pagar por anúncios.</p>
      <h2>Como o Google decide quem aparece primeiro</h2>
      <p>O Google analisa centenas de fatores: qualidade do conteúdo, velocidade do site, links externos apontando para o seu, uso correto de palavras-chave e experiência do usuário.</p>
      <h2>SEO local: essencial para PMEs</h2>
      <p>Para pequenas e médias empresas, o SEO local é o mais importante. Aparecer quando alguém pesquisa "serviço + cidade" pode gerar clientes todos os dias sem custo com anúncios.</p>
      <h2>Quanto tempo leva para ver resultado</h2>
      <p>SEO é uma estratégia de médio e longo prazo. Os primeiros resultados aparecem entre 3 e 6 meses, mas uma vez bem posicionado, seu site gera tráfego passivo por anos.</p>
      <h2>Por onde começar</h2>
      <p>Comece pelo básico: título e descrição das páginas bem escritos, conteúdo relevante e frequente, site rápido e responsivo, e presença no Google Minha Empresa.</p>
    </>
  ),
  'google-minha-empresa': (
    <>
      <p>O Google Business Profile é a ferramenta gratuita do Google que permite que seu negócio apareça no mapa e nas buscas locais.</p>
      <h2>Por que é tão importante</h2>
      <p>Quando alguém pesquisa "restaurante perto de mim" ou "eletricista em Joinville", o Google mostra um mapa com os negócios mais relevantes. Empresas com perfil otimizado recebem muito mais cliques e ligações.</p>
      <h2>Como otimizar seu perfil</h2>
      <p>Preencha todas as informações: horário de funcionamento, fotos de qualidade, descrição detalhada dos serviços e link do site. Quanto mais completo, melhor o posicionamento.</p>
      <h2>Avaliações: o fator mais importante</h2>
      <p>Peça para clientes satisfeitos deixarem avaliações. Empresas com mais estrelas aparecem primeiro. Responda sempre — tanto as positivas quanto as negativas.</p>
    </>
  ),
  'como-criar-site-barato': (
    <>
      <p>Muitos empresários acreditam que um site profissional custa caro. A realidade é que o mercado tem opções para todos os tamanhos de negócio e orçamento.</p>
      <h2>Construtores de site: Wix, Squarespace e similares</h2>
      <p>Para negócios muito pequenos, plataformas como Wix oferecem planos mensais acessíveis. A desvantagem é a limitação de customização e o custo recorrente mensal.</p>
      <h2>WordPress: flexível e econômico</h2>
      <p>O WordPress é gratuito e powers mais de 40% da internet. Com um bom tema e hospedagem, você pode ter um site profissional por menos de R$ 100 por mês.</p>
      <h2>Site sob medida: o melhor custo-benefício a longo prazo</h2>
      <p>Um site desenvolvido por uma agência é um investimento único sem mensalidades de plataforma. É mais rápido, mais seguro, otimizado para SEO e 100% personalizado.</p>
    </>
  ),
  'gestao-redes-sociais': (
    <>
      <p>Manter as redes sociais ativas, consistentes e estratégicas demanda tempo, criatividade e conhecimento de marketing. Para muitos empreendedores, esse tempo simplesmente não existe.</p>
      <h2>O custo do tempo perdido</h2>
      <p>Cada hora gasta tentando criar posts é uma hora que deixa de ser investida no core do negócio. Calcule quanto vale sua hora e compare com o custo de uma gestão profissional.</p>
      <h2>O que uma boa agência entrega</h2>
      <p>Planejamento mensal de conteúdo, criação de artes e vídeos, legendas otimizadas, programação de posts, monitoramento de comentários e relatório de resultados.</p>
      <h2>Quando faz sentido terceirizar</h2>
      <p>Quando você não tem tempo para postar com consistência, quando seus posts não geram engajamento ou quando suas redes estão paradas há semanas.</p>
    </>
  ),
  'app-sob-medida-ou-pronto': (
    <>
      <p>Digitalizar processos é fundamental para empresas que querem crescer. Mas na hora de escolher entre um app sob medida ou uma solução pronta, a decisão pode ser difícil.</p>
      <h2>Soluções prontas: rápidas mas limitadas</h2>
      <p>Plataformas genéricas são rápidas de implantar e têm custo inicial baixo. Mas você se adapta ao sistema — não o contrário. Conforme sua empresa cresce, as limitações aparecem.</p>
      <h2>App sob medida: feito para o seu negócio</h2>
      <p>Um sistema desenvolvido especificamente para seu fluxo de trabalho se adapta às suas regras de negócio, integra com seus processos e escala conforme você cresce.</p>
      <h2>Quando vale o investimento</h2>
      <p>Vale quando você tem um processo repetitivo que poderia ser automatizado, quando precisa de integração entre setores ou quando a solução pronta não atende todas as suas necessidades.</p>
    </>
  ),
  'identidade-visual-pequena-empresa': (
    <>
      <p>Muitos empreendedores acreditam que identidade visual é coisa de grandes empresas. Mas pequenas empresas com visual profissional faturam mais, porque transmitem mais confiança.</p>
      <h2>O que é identidade visual</h2>
      <p>É o conjunto de elementos que representam sua marca: logo, paleta de cores, tipografia e padrões gráficos. É o rosto da sua empresa.</p>
      <h2>Como impacta as vendas</h2>
      <p>Uma marca coesa e profissional aumenta a percepção de valor do seu serviço. Clientes associam visual caprichado com qualidade — mesmo que o serviço seja idêntico ao concorrente.</p>
      <h2>Consistência é a chave</h2>
      <p>De nada adianta ter uma logo bonita se ela aparece diferente em cada canal. Consistência visual em todos os pontos de contato constrói reconhecimento de marca.</p>
    </>
  ),
  'youtube-para-empresas': (
    <>
      <p>O YouTube tem mais de 2 bilhões de usuários ativos e é o segundo maior buscador do mundo. Ignorar o YouTube é um erro estratégico.</p>
      <h2>Por que vídeo converte mais</h2>
      <p>Vídeos geram 66% mais leads qualificados do que outros formatos. Quando o cliente assiste a um vídeo seu explicando algo útil, ele chega na conversa de venda já aquecido.</p>
      <h2>Tipos de vídeo que funcionam</h2>
      <p>Tutoriais do seu setor, bastidores do negócio, depoimentos de clientes e respostas às perguntas mais frequentes são os formatos que mais engajam e geram autoridade.</p>
      <h2>SEO no YouTube</h2>
      <p>Use a palavra-chave principal no título, escreva descrições detalhadas e adicione legendas. Isso aumenta o alcance orgânico e faz seus vídeos aparecerem no Google também.</p>
    </>
  ),
  'landing-page-vs-site': (
    <>
      <p>Landing page e site institucional são ferramentas diferentes com objetivos diferentes. Escolher a errada pode custar conversões e dinheiro.</p>
      <h2>O que é uma landing page</h2>
      <p>Uma página única focada em uma única ação: fazer o visitante converter. Sem menu, sem distrações, sem links para outras páginas. Ideal para campanhas de anúncios.</p>
      <h2>O que é um site institucional</h2>
      <p>Apresenta sua empresa de forma completa: quem somos, serviços, portfólio, blog, contato. É a presença digital completa da sua marca e funciona muito bem para SEO.</p>
      <h2>O melhor dos dois mundos</h2>
      <p>A estratégia ideal é ter os dois: site institucional para SEO e autoridade, e landing pages específicas para suas campanhas de anúncios.</p>
    </>
  ),
  'erros-site-empresarial': (
    <>
      <p>Um site mal construído pode afastar mais clientes do que atrair. Veja os 7 erros mais comuns e como evitá-los.</p>
      <h2>1. Site lento</h2>
      <p>53% dos visitantes abandonam um site que demora mais de 3 segundos para carregar. Velocidade é fundamental tanto para o usuário quanto para o SEO.</p>
      <h2>2. Não responsivo para mobile</h2>
      <p>Mais de 60% do tráfego vem de celulares. Um site que não funciona bem no mobile perde a maioria dos visitantes na primeira página.</p>
      <h2>3. Sem CTA claro</h2>
      <p>Se não houver um botão ou chamada clara para entrar em contato, o visitante vai embora sem agir. Coloque um CTA visível em todas as seções.</p>
      <h2>4. Sem prova social</h2>
      <p>Avaliações, cases e depoimentos são essenciais para quebrar a objeção de compra. Clientes confiam em outros clientes.</p>
    </>
  ),
  'trafego-organico-vs-pago': (
    <>
      <p>Devo investir em anúncios ou em SEO? A resposta depende do momento da sua empresa.</p>
      <h2>O que é tráfego pago</h2>
      <p>Visitantes que chegam via anúncios — Google Ads, Meta Ads. O resultado é imediato, mas quando o dinheiro acaba, o tráfego para.</p>
      <h2>O que é tráfego orgânico</h2>
      <p>Visitantes que chegam por buscas no Google sem pagar por clique. Demora mais para construir, mas é sustentável e gratuito no longo prazo.</p>
      <h2>A estratégia ideal</h2>
      <p>Use tráfego pago para resultado imediato enquanto constrói o SEO no médio prazo. Com o tempo, o SEO vai reduzindo sua dependência de anúncios pagos.</p>
    </>
  ),
}

export function getPostBySlug(slug: string) {
  const meta = posts.find(p => p.slug === slug)
  if (!meta) return null
  return { ...meta, content: postContents[slug] }
}