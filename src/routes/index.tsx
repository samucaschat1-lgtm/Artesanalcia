import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mega Pack 3D · Edição 2026" },
      {
        name: "description",
        content: "+500 Arquivos STL de Brinquedos e Modelos 3D Prontos Para Você Imprimir, Criar e Vender.",
      },
      { name: "author", content: "Mega Pack 3D · Edição 2026" },
      { property: "og:title", content: "Mega Pack 3D · Edição 2026" },
      {
        property: "og:description",
        content: "+500 Arquivos STL de Brinquedos e Modelos 3D para imprimir, criar e vender.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Cta = ({ children }: { children: ReactNode }) => (
  <a href="#planos" className="cta">
    {children}
  </a>
);

const EmptyMedia = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`empty-media ${className}`} />
);

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="check-list">
    {items.map((item) => (
      <li key={item}>
        <Check aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const benefits: [string, string][] = [
  ["Brinquedos articulados", "Modelos com diferentes movimentos e possibilidades para imprimir e criar."],
  ["Dragões e criaturas", "Modelos de criaturas e personagens para ampliar sua coleção."],
  ["Dinossauros", "Diversos modelos de dinossauros para imprimir, colecionar ou criar produtos."],
  ["Animais 3D", "Modelos de animais para diferentes projetos e aplicações."],
  ["Fidgets e brinquedos", "Opções variadas para imprimir e explorar novos produtos."],
  ["Robôs e modelos mecânicos", "Modelos com visual mecânico para quem gosta de criar peças diferentes."],
  ["Miniaturas", "Miniaturas para colecionar, presentear ou utilizar em novos projetos."],
  ["Modelos para coleção", "Uma variedade de modelos para ampliar seu acervo de impressão 3D."],
  ["Modelos para decoração", "Peças para criar objetos decorativos e produtos personalizados."],
  ["Utilidades e acessórios", "Modelos funcionais para diferentes necessidades do dia a dia."],
  ["Modelos para presentes", "Ideias para criar presentes personalizados com impressão 3D."],
  ["Peças para produção", "Modelos para testar, produzir e transformar em novas oportunidades."],
];

const problems = [
  "Quer encontrar novos modelos para imprimir.",
  "Deseja criar brinquedos e produtos diferentes.",
  "Gosta de produzir peças com impressão 3D.",
  "Quer ampliar seu catálogo de produtos.",
  "Busca modelos variados em um único lugar.",
  "Quer economizar tempo procurando arquivos.",
  "Deseja explorar encomendas e vendas com impressão 3D.",
];

const solutions = [
  "Não possui interesse em impressão 3D.",
  "Procura apenas arquivos gratuitos aleatórios.",
  "Não pretende utilizar os modelos.",
  "Não tem interesse em produzir brinquedos ou modelos 3D.",
];

const bonuses = [
  {
    title: "🎁 BÔNUS 01 — GUIA DE PRODUTOS 3D PARA VENDER",
    subtitle: "Descubra diferentes tipos de produtos que você pode criar com impressão 3D e ideias para ampliar seu catálogo.",
    items: ["Tipos de produtos para criar", "Ideias para ampliar seu catálogo", "Possibilidades com impressão 3D"],
    value: "R$27",
  },
  {
    title: "🎁 BÔNUS 02 — TABELA DE PREÇOS PARA PRODUTOS 3D",
    subtitle: "Uma referência para ajudar você a organizar seus preços e calcular o valor dos seus produtos.",
    items: ["Referência de preços", "Organização dos valores", "Apoio para calcular seus produtos"],
    value: "R$27",
  },
];

const faq: [string, string][] = [
  ["O que eu recebo após a compra?", "Você recebe o acesso ao pack com mais de 500 arquivos STL de brinquedos e modelos 3D, além dos bônus incluídos no plano escolhido."],
  ["São arquivos físicos ou digitais?", "São arquivos digitais para utilização em impressão 3D."],
  ["Quantos arquivos STL estão inclusos?", "A coleção principal possui mais de 500 arquivos STL de brinquedos e modelos 3D."],
  ["Preciso ter uma impressora 3D?", "Para imprimir os arquivos, você precisa ter acesso a uma impressora 3D ou utilizar um serviço de impressão 3D."],
  ["Posso acessar os arquivos depois?", "O acesso é vitalício, conforme as condições apresentadas na oferta."],
  ["Como recebo meu acesso?", "Após a confirmação do pagamento, você recebe as instruções para acessar sua coleção digital."],
  ["Os modelos extras estão inclusos?", "Sim, os modelos extras fazem parte dos bônus do Plano Completo."],
  ["Existe garantia?", "Sim. A oferta possui garantia de 7 dias, conforme as condições apresentadas no momento da compra."],
];

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="time">
      <strong>{String(value).padStart(2, "0")}</strong>
      <small>{label}</small>
    </div>
  );
}

function Urgency() {
  const compute = () => 827 - (Math.floor(Date.now() / 1000) % 618);
  const [seconds, setSeconds] = useState(827);

  useEffect(() => {
    setSeconds(compute());
    const id = window.setInterval(() => setSeconds(compute()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="urgency">
      <div className="narrow urgency-inner">
        <h2>⏰ Aproveite enquanto o Plano Completo está em promoção</h2>
        <div className="timer">
          <TimeUnit value={Math.floor(seconds / 60)} label="min" />
          <b>:</b>
          <TimeUnit value={seconds % 60} label="seg" />
        </div>
      </div>
    </section>
  );
}

function Carousel({ landscape = false }: { landscape?: boolean }) {
  const placeholders = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className={`carousel ${landscape ? "carousel-landscape" : "carousel-portrait"}`} aria-label="Espaços reservados para futuros modelos 3D">
      <div className="carousel-track">
        {[...placeholders, ...placeholders].map((i, index) => (
          <div className="carousel-item" key={`placeholder-${i}-${index}`}>
            <EmptyMedia className="carousel-placeholder" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Price({
  old,
  price,
  installments,
  save,
}: {
  old: string;
  price: string;
  installments: string;
  save: string;
}) {
  return (
    <div className="price">
      <p>de {old} por:</p>
      <div>
        <small>R$</small>
        <strong>{price}</strong>
      </div>
      <p>{installments}</p>
      <b>🔥 Você economiza {save}</b>
    </div>
  );
}

function Index() {
  const today = new Intl.DateTimeFormat("pt-BR").format(new Date());

  return (
    <main>
      <div className="topbar">⚡ Oferta especial disponível hoje • {today}</div>

      <section className="hero">
        <div className="narrow hero-inner">
          <p className="eyebrow">Mega Pack 3D · Edição 2026</p>
          <h1>
            +500 <mark>ARQUIVOS STL</mark> DE
            <mark>BRINQUEDOS E MODELOS 3D</mark> PRONTOS PARA VOCÊ IMPRIMIR, CRIAR E VENDER
          </h1>
          <EmptyMedia className="hero-product empty-image-placeholder" />

          <Price
            old="R$19,90"
            price="10,90"
            installments="pagamento único"
            save="R$9,00"
          />

          <p className="support">
            Enquanto você pensa, outras pessoas já estão usando a impressão 3D para criar brinquedos, modelos e produtos para vender. Coloque sua impressora 3D para trabalhar e tenha centenas de opções para produzir, testar e transformar em novas oportunidades de venda.
          </p>
          <CheckList
            items={[
              "Acesso digital",
              "Liberação imediata",
              "Pagamento seguro",
            ]}
          />
          <Cta>QUERO GARANTIR MEU ACESSO</Cta>
          <p className="delivery">
            Acesso digital • Liberação imediata • Pagamento seguro
          </p>
        </div>
      </section>

      <Urgency />

      <section className="previews section-alt">
        <div className="container">
          <h2>VEJA TUDO O QUE VOCÊ VAI RECEBER NESSA COLEÇÃO EXCLUSIVA</h2>
          <p>
            São +500 arquivos STL de brinquedos e modelos 3D, organizados em diferentes categorias para você sempre ter novas opções para imprimir, criar e vender.
          </p>
        </div>
        <Carousel />
        <div className="narrow centered">
          <p>
            São centenas de possibilidades reunidas em um único acervo para você não depender de pesquisas intermináveis por arquivos espalhados na internet.
          </p>
          <div className="process">
            <b>📁 ESCOLHA</b><span>➡</span><b>🖨️ IMPRIMA</b><span className="down">⬇</span><b>💰 VENDA!</b>
          </div>
          <Cta>QUERO GARANTIR MEU ACESSO</Cta>
        </div>
        <Carousel />
      </section>

      <section className="section light">
        <div className="container">
          <h2>+500 ARQUIVOS STL DE BRINQUEDOS E MODELOS 3D PARA IMPRIMIR</h2>
          <p className="section-intro">
            E dezenas de outros modelos para você transformar em impressões reais. Tenha uma grande variedade de arquivos reunidos em um único acervo para encontrar novas ideias sem precisar procurar modelo por modelo na internet.
          </p>
          <div className="grid-two">
            {benefits.map(([title, text]) => (
              <article className="info-card" key={title}>
                <span className="card-icon">
                  <Check />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="centered">
            <Cta>QUERO ACESSAR A COLEÇÃO</Cta>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>VEJA COMO ESSE MATERIAL PODE TRANSFORMAR SUA IMPRESSÃO 3D</h2>
          <EmptyMedia className="problem-image empty-image-placeholder" />
          <div className="problem-grid">
            <div>
              <h3>É para você</h3>
              <ul>
                {problems.map((item) => (
                  <li key={item}>
                    <span>✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Não é para você</h3>
              <ul>
                {solutions.map((item) => (
                  <li key={item}>
                    <span>❌</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="centered">
            <Cta>QUERO MEU ACESSO</Cta>
          </div>
        </div>
        <Carousel landscape />
      </section>

      <section className="section receive">
        <div className="container">
          <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
          <article className="main-material">
            <span className="badge">ACESSO IMEDIATO</span>
            <EmptyMedia className="material-image empty-image-placeholder" />
            <h3>+500 ARQUIVOS STL DE BRINQUEDOS E MODELOS 3D</h3>
            <CheckList
              items={[
                "Uma biblioteca com centenas de modelos para você imprimir, testar e transformar em produtos físicos.",
                "Acesso digital imediato à coleção principal.",
                "Modelos variados reunidos em um único acervo.",
              ]}
            />
            <p className="delivery-box">
              Acesso imediato, sem enrolação.
            </p>
          </article>

          <div className="bonus-heading">
            <h2>E AINDA TEM UM BÔNUS ESPECIAL…</h2>
            <p>
              Além da coleção principal, você recebe modelos extras para ampliar ainda mais sua biblioteca e ter novas opções para imprimir.
            </p>
          </div>

          <div className="bonus-grid">
            {bonuses.map((bonus, i) => (
              <article className="bonus-card" key={bonus.title}>
                <span className="bonus-label">BÔNUS {i + 1}</span>
                <EmptyMedia className="bonus-image empty-image-placeholder" />
                <h3>{bonus.title}</h3>
                <p>{bonus.subtitle}</p>
                <CheckList items={bonus.items} />
                <div className="value">
                  <s>{bonus.value}</s>
                  <span>→</span>
                  <strong>GRÁTIS</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="centered">
            <Cta>QUERO TUDO ISSO</Cta>
          </div>
          <p className="centered bonus-note"><strong>Bônus incluso</strong></p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>E AINDA TEM UM BÔNUS ESPECIAL…</h2>
          <article className="main-material">
            <span className="badge">EXCLUSIVO DO PLANO COMPLETO</span>
            <EmptyMedia className="material-image empty-image-placeholder" />
            <h3>LEVE TAMBÉM O PACK DE MODELOS EXTRAS 3D</h3>
            <p>
              Além da coleção principal, você recebe modelos extras para ampliar ainda mais sua biblioteca e ter novas opções para imprimir.
            </p>
          </article>
          <Carousel />
          <div className="centered">
            <Cta>QUERO MEUS BÔNUS</Cta>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>MODELOS 3D PREMIUM: UMA SELEÇÃO ESPECIAL PARA AMPLIAR SEU CATÁLOGO</h2>
          <p className="section-intro">
            A seleção com modelos diferenciados do acervo. Tenha acesso a uma seleção especial de modelos 3D para ampliar suas opções de produção e encontrar peças diferentes para imprimir e oferecer aos seus clientes.
          </p>
          <Carousel />
          <div className="centered">
            <Cta>QUERO OS MODELOS PREMIUM</Cta>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>ACESSO IMEDIATO, SEM ENROLAÇÃO</h2>
          <p className="section-intro">
            Tudo 100% digital. Sem esperar entrega física: você recebe o acesso e já pode começar a explorar os modelos.
          </p>
          <div className="grid-two">
            {[
              ["01", "Faça sua compra", "Escolha a forma de pagamento e conclua o pedido com segurança."],
              ["02", "Receba as instruções", "As informações de acesso chegam logo após a confirmação."],
              ["03", "Entre na coleção", "Acesse a área com todos os modelos organizados por categoria."],
              ["04", "Escolha seus modelos", "Navegue pelas categorias e selecione o que quer imprimir."],
              ["05", "Comece a imprimir e vender", "Baixe os arquivos e coloque sua impressora 3D para trabalhar."],
            ].map(([number, title, text]) => (
              <article className="info-card" key={number}>
                <span className="card-icon"><strong>{number}</strong></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt reviews">
        <div className="container">
          <h2>QUEM JÁ ESTÁ IMPRIMINDO E CRIANDO COM MODELOS 3D</h2>
          <p className="reviews-sub">
            Algumas mensagens de clientes que receberam a coleção e começaram a explorar os modelos.
          </p>
          <div className="reviews-grid">
            {[1, 2, 3].map((item) => (
              <article className="review-card" key={item}>
                <div className="review-stars" aria-label="Depoimento de cliente">★★★★★</div>
                <p className="review-text">“Depoimento de cliente”</p>
                <div className="review-author">
                  <EmptyMedia className="review-avatar-placeholder" />
                  <div>
                    <strong>Cliente da coleção</strong>
                    <span>Usuário de impressão 3D</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="centered">
            <Cta>QUERO FAZER PARTE</Cta>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>SUA IMPRESSORA JÁ ESTÁ PRONTA. AGORA FALTA ESCOLHER O QUE ELA VAI CRIAR.</h2>
          <p className="section-intro">
            Você já tem a tecnologia nas mãos. Agora pode ter também um acervo com centenas de possibilidades para imprimir, testar e transformar em produtos.
          </p>
          <p className="section-intro">
            Imprima para você. Crie presentes. Produza brinquedos. Faça encomendas. Amplie seu catálogo. Ou explore novas possibilidades de renda com produtos feitos na impressão 3D.
          </p>
          <p className="section-intro"><strong>Tudo começa escolhendo o primeiro modelo.</strong></p>
          <p className="centered"><strong>+500 Arquivos STL de Brinquedos e Modelos 3D.</strong></p>
          <p className="centered"><strong>Imprima hoje. Crie e venda seus produtos.</strong></p>
          <div className="centered">
            <Cta>QUERO MEU ACESSO</Cta>
          </div>
        </div>
      </section>

      <section id="planos" className="section section-alt plans">
        <div className="container">
          <div className="offer-label">⏰ OFERTA ESPECIAL</div>
          <h2>APROVEITE ENQUANTO O PLANO COMPLETO ESTÁ EM PROMOÇÃO</h2>
          <p className="section-intro">Comece pelo essencial ou leve a coleção completa com todos os bônus.</p>

          <div className="plans-grid">
            <article className="plan basic">
              <h3>PLANO BÁSICO</h3>
              <p><strong>Essencial</strong></p>
              <EmptyMedia className="plan-image empty-image-placeholder" />
              <CheckList
                items={[
                  "+500 Arquivos STL de Brinquedos e Modelos 3D",
                  "Acesso Vitalício",
                  "Envio Imediato",
                  "Não inclui bônus",
                ]}
              />
              <Price old="R$19,90" price="10,90" installments="Pagamento único" save="R$9,00" />
              <div className="local-currency-notice">
                <p>💳 Pagamento único.</p>
              </div>
              <a className="cta" href="https://pay.hotmart.com/T107722244V?off=3a1ek6wc&checkoutMode=10">
                QUERO O PLANO BÁSICO
              </a>
            </article>

            <article className="plan complete">
              <div className="bestseller">MAIS COMPLETO • RECOMENDADO</div>
              <h3>PLANO COMPLETO</h3>
              <EmptyMedia className="plan-image empty-image-placeholder" />
              <span className="bonus-badge">⚡ TODOS OS BÔNUS</span>
              <CheckList
                items={[
                  "+500 Arquivos STL de Brinquedos e Modelos 3D",
                  "Uso comercial, caso contemplado pela licença dos arquivos",
                  "Bônus 1: Guia de Produtos 3D para Vender",
                  "Bônus 2: Tabela de Preços para Produtos 3D",
                  "Bônus 3: Guia de Acabamento e Pintura",
                  "Bônus 6: Pack de Modelos Extras 3D",
                  "Bônus 7: Modelos 3D Premium",
                  "Acesso Vitalício",
                  "Envio Imediato",
                ]}
              />
              <Price old="R$97,00" price="37,90" installments="Hoje, pagamento único" save="R$59,10" />
              <div className="local-currency-notice">
                <p>💳 Pagamento único • Acesso vitalício.</p>
              </div>
              <a className="cta" href="https://pay.hotmart.com/T107722244V?off=igxudoqu&checkoutMode=10">
                QUERO O PLANO COMPLETO
              </a>
              <EmptyMedia className="secure-seal" />
            </article>
          </div>
        </div>
      </section>

      <section className="section guarantee">
        <div className="container guarantee-card">
          <span className="badge">ACESSO IMEDIATO • 7 DIAS DE GARANTIA</span>
          <EmptyMedia className="guarantee-seal-image empty-image-placeholder" />
          <div>
            <h2>SUA COMPRA 100% SEGURA E SEM RISCO NENHUM</h2>
            <p>Você recebe acesso imediato a mais de 500 arquivos STL de brinquedos e modelos 3D, além dos bônus incluídos na oferta.</p>
            <p>
              Se dentro de <strong>7 dias</strong> sentir que o material não faz sentido para você, é só pedir o reembolso conforme as condições da garantia.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt faq">
        <div className="faq-wrap">
          <h2>DÚVIDAS FREQUENTES</h2>
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container centered">
          <h2>COMECE HOJE A EXPLORAR CENTENAS DE MODELOS PARA IMPRESSÃO 3D</h2>
          <p>
            Tenha +500 arquivos STL de brinquedos e modelos 3D e todos os bônus reunidos em uma única oferta.
          </p>
          <Cta>QUERO MEU ACESSO</Cta>
          <p>Acesso imediato • Acesso vitalício • 7 dias de garantia</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 — Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
        </div>
      </footer>
    </main>
  );
}
