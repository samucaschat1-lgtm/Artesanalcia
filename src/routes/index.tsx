import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
const heroProduct = "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/src/assets/projetos-serralheria-transparente.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+5.000 Proyectos para Fabricar y Vender" },
      {
        name: "description",
        content:
          "Biblioteca digital com mais de 5.000 proyectos de herrería para consultar, estudiar, fabricar y vender.",
      },
      { name: "author", content: "+5.000 Proyectos para Fabricar y Vender" },
      { property: "og:title", content: "+5.000 Proyectos para Fabricar y Vender" },
      {
        property: "og:description",
        content:
          "Amplie as possibilidades da sua oficina com milhares de proyectos e referências de fabricação metálica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    
  }),
  component: Index,
});

const Cta = ({ children }: { children: ReactNode }) => (
  <a href="#planes" className="cta">
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
  [
    "+5.000 proyectos",
    "Uma grande variedade de modelos para consultar cuando surja una nueva idea, pedido u oportunidad de fabricación.",
  ],
  [
    "Mais possibilidades de fabricação",
    "Encontre proyectos de mesas, estanterías, portones, remolques, remolques, estruturas metálicas e muitos outros modelos.",
  ],
  [
    "Referências para sua oficina",
    "Tenha proyectos organizados para estudar diferentes modelos e encontrar referências antes de começar uma nova fabricação.",
  ],
  [
    "Mais opções para ofrecer",
    "Amplie o catálogo de piezas que você pode apresentar aos seus clientes e aumente as possibilidades de novos trabalhos.",
  ],
];

const forYou: [string, string][] = [
  [
    "Quieres aprender nuevos modelos de fabricación",
    "Ideal para quem quer conhecer diferentes possibilidades de piezas e ter referências para estudar e fabricar.",
  ],
  [
    "Quieres ampliar el catálogo del taller",
    "Tenha novos modelos para consultar e encontrar ideias de produtos que podem ser oferecidos aos clientes.",
  ],
  [
    "Precisa de referências para novos proyectos",
    "Uma biblioteca com milhares de proyectos para consultar quando aparecer uma nova peça ou oportunidade.",
  ],
  [
    "Quieres encontrar más posibilidades de venta",
    "Tenha mais opções de produtos para apresentar aos clientes e transformar novas ideias em oportunidades de fabricação.",
  ],
];

const problems = [
  "Pasar horas buscando referencias para descubrir cómo fabricar una pieza diferente.",
  "Tener siempre las mismas opciones de productos para fabricar y ofrecer a los clientes.",
  "Encontrar uma nova oportunidade de trabalho e não ter um proyecto ou modelo para consultar.",
  "Perder tiempo intentando dibujar y planificar cada nueva pieza desde cero.",
];

const solutions = [
  "Ter +5.000 proyectos de herrería organizados para consultar quando precisar.",
  "Encontrar diferentes modelos de muebles, estruturas, remolques, remolques e muito mais.",
  "Usar os proyectos como referência para estudar e planejar novas piezas para fabricação.",
  "Ampliar las posibilidades de productos que puedes fabricar y ofrecer a tus clientes.",
];

const bonuses = [
  {
    title: "GUÍA DE PRECIOS PARA HERRERÍA",
    subtitle:
      "una referencia práctica para organizar costos y calcular el precio de venta",
    items: [
      "Organiza los principales costos de fabricación",
      "Ten una referencia para calcular precios de venta",
      "Evita olvidar materiales y gastos al calcular tu precio",
      "Use como apoio para precificar suas piezas",
    ],
    value: "R$27",
  },
  {
    title: "CATÁLOGO DE PRODUTOS PARA OFERECER",
    subtitle:
      "ideias de piezas para ampliar as opções apresentadas aos seus clientes",
    items: [
      "Diversas ideas de productos para incluir en tu catálogo",
      "Modelos que pueden servir como referencia para nuevos trabajos",
      "Más opciones para presentar a tus clientes",
      "Ayuda para descubrir nuevos productos que puedes fabricar",
    ],
    value: "R$27",
  },
  {
    title: "CATÁLOGO DE IDEIAS + LISTA DE FORNECEDORES",
    subtitle:
      "más referencias para encontrar productos y materiales para tu taller",
    items: [
      "Ideias de piezas para estudar e fabricar",
      "Referencias para ampliar tu catálogo",
      "Lista de proveedores y materiales relacionados con la fabricación",
      "Más facilidad para encontrar nuevas posibilidades para tu taller",
    ],
    value: "R$47",
  },
];

const faq: [string, string][] = [
  [
    "¿Cómo recibiré el material?",
    "Após a confirmação da compra, você recebe o acesso imediatamente por e-mail e WhatsApp. É só baixar os arquivos e começar a consultar os proyectos.",
  ],
  [
    "¿Qué incluye el plan básico?",
    "O plano básico inclui o material principal com +5.000 proyectos de herrería para consultar e usar como referência na fabricação.",
  ],
  [
    "¿Qué incluye el plan completo?",
    "No plano completo você recebe os +5.000 proyectos mais os bônus de precificação, catálogo de produtos, catálogo de ideias e lista de fornecedores.",
  ],
  [
    "¿Necesito saber de herrería para usarlo?",
    "Os proyectos servem como material de consulta e referência. O aproveitamento depende do seu nível de conhecimento, ferramentas disponíveis e experiência com fabricação.",
  ],
  [
    "¿Sirve para quienes están comenzando?",
    "Sim. O material pode ser usado por quem está buscando conhecer novos modelos e possibilidades de fabricação, sempre respeitando os conhecimentos e habilidades necessários para executar cada proyecto.",
  ],
  [
    "Quais tipos de proyectos fazem parte do material?",
    "A biblioteca reúne diferentes categorias, incluindo mesas, estanterías, portones, estruturas metálicas, remolques, remolques, churrasqueiras, escadas e muitos outros modelos.",
  ],
  [
    "¿Necesito alguna aplicación para usarlo?",
    "Não. Você só precisa abrir os arquivos no celular, tablet ou computador para consultar o material. Se quiser, também pode imprimir os proyectos.",
  ],
  [
    "Posso usar os proyectos como referência para meus clientes?",
    "Sim. Os proyectos podem servir como referência para estudar modelos e apresentar possibilidades de fabricação aos seus clientes.",
  ],
  [
    "¿El material sirve para cualquier tipo de taller?",
    "O material reúne diferentes categorias de proyectos de herrería e pode ser usado como biblioteca de referências, conforme as ferramentas, equipamentos e conhecimentos disponíveis na sua oficina.",
  ],
  [
    "Posso imprimir os proyectos?",
    "Sí. Después de recibir el material, puedes imprimir los archivos según tus necesidades de consulta.",
  ],
  [
    "¿Existe garantía?",
    "Sí. Tienes 15 días de garantía para acceder y probar el material. Si no es lo que necesitas, puedes solicitar el reembolso dentro de ese plazo.",
  ],
  [
    "¿El acceso es por tiempo limitado?",
    "No. El acceso al material queda habilitado para que puedas consultarlo cuando lo necesites.",
  ],
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
        <h2>⏰ Aproveite a condição especial para acessar os +5.000 proyectos</h2>
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
  const images = [
    "4115A40C-EBFA-42C4-8CE0-566C1D040B24.PNG",
    "5B2DC197-2EE3-4E84-BCDF-447EE008C158.PNG",
    "8D3241E1-4E2D-4AEA-8A08-0EF9BCF9F61C.PNG",
    "ChatGPT Image 21 de set. de 2026, 13_09_40.PNG",
    "ChatGPT Image 21 de set. de 2026, 13_22_05.PNG",
    "ChatGPT Image 21 de set. de 2026, 13_23_47.PNG",
    "F066A463-1669-43FB-97E8-02ACE3FB3694.PNG",
    "F2CB89E0-9718-4FE8-956B-1C5F9BE00462.PNG",
  ];

  const imageUrl = (file: string) =>
    `https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/${encodeURIComponent(file)}`;

  return (
    <div className={`carousel ${landscape ? "carousel-landscape" : "carousel-portrait"}`} aria-label="Carrossel automático de proyectos">
      <div className="carousel-track">
        {[...images, ...images].map((file, i) => (
          <div className="carousel-item" key={`${file}-${i}`}>
            <img
              src={imageUrl(file)}
              alt={`Proyecto de herrería ${(i % images.length) + 1}`}
              loading="eager"
              decoding="async"
              draggable={false}
            />
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
      <b>🔥 Ahorras {save}</b>
    </div>
  );
}

function Testimonials() {
  const testimonialImages = [
    "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/marcos.png",
    "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/samuel.png",
    "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/gilberto.png",
  ];
  const testimonialNames = ["Marcos", "Samuel", "Gilberto"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonialImages.length), 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section section-alt testimonials">
      <div className="container">
        <h2>MIRA LO QUE DICEN SOBRE EL MATERIAL</h2>
        <p>
          Feedbacks de quem buscou mais proyectos e referências para ampliar suas
          possibilidades na fabricação.
        </p>
        <div className="testimonial-card">
          <img
            className="testimonial-image testimonial-photo"
            src={testimonialImages[index]}
            alt={"Testimonio de " + testimonialNames[index]}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <div className="stars" aria-label="5 estrelas e 1723 reseñas">
            ★★★★★ <span>(1723 reseñas)</span>
          </div>
        </div>
        <div className="testimonial-nav">
          <button
            aria-label="Testimonio anterior"
            onClick={() => setIndex((index - 1 + testimonialImages.length) % testimonialImages.length)}
          >
            <ChevronLeft />
          </button>
          <div>
            {Array.from({ length: testimonialImages.length }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para o depoimento ${i + 1}`}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            aria-label="Siguiente testimonio"
            onClick={() => setIndex((index + 1) % testimonialImages.length)}
          >
            <ChevronRight />
          </button>
        </div>
        <Cta>QUERO GARANTIR OS +5.000 PROJETOS</Cta>
      </div>
    </section>
  );
}

function Index() {
  const today = new Intl.DateTimeFormat("es-419").format(new Date());

  return (
    <main>
      <div className="topbar">⚡ Oferta especial disponible solo hoy {today}</div>

      <section className="hero">
        <div className="narrow hero-inner">
          <h1>
            APRENDE <mark>+5.000 PROJETOS</mark> PARA{" "}
            <mark>FABRICAR Y VENDER</mark>
          </h1>
          <img
            className="hero-product"
            src={heroProduct}
            alt="Mais de cinco mil proyectos de herrería para fabricar e vender"
          />
          <p className="support">
            Accede a uma biblioteca completa de proyectos de herrería
            para consultar, estudar e encontrar novas piezas para fabricar e
            ofrecer aos seus clientes.
          </p>
          <CheckList
            items={[
              "+5.000 proyectos de herrería para consultar e usar como referência",
              "Encontre modelos de mesas, estanterías, portones, remolques, remolques, estruturas e muito mais",
              "Amplie as possibilidades do que você pode fabricar e ofrecer aos seus clientes",
            ]}
          />
          <Cta>👉 ACCEDER AGORA</Cta>
          <p className="delivery">
            Recibes todo de inmediato, directamente en tu
            <br /> WhatsApp y correo electrónico
          </p>
        </div>
      </section>

      <Urgency />

      <section className="previews section-alt">
        <div className="container">
          <h2>MIRA ALGUNOS DE LOS PROYECTOS DISPONIBLES</h2>
        </div>
        <Carousel />
        <div className="narrow centered">
          <p>
            Tudo já vem organizado para você consultar os proyectos e encontrar
            referências para diferentes tipos de fabricação sem precisar começar
            cada ideia do zero.
          </p>
          <div className="process">
            <b>📲 ACCEDE</b>
            <span>➡</span>
            <b>📐 CONSULTA</b>
            <span className="down">⬇</span>
            <b>🔧 FABRICA E VENDE!</b>
          </div>
          <Cta>👉 QUIERO LOS +5.000 PROYECTOS</Cta>
        </div>
        <Carousel />
      </section>

      <section className="section light">
        <div className="container">
          <h2>
            UNA BIBLIOTECA COMPLETA PARA AMPLIAR TUS POSIBILIDADES EN
            HERRERÍA
          </h2>
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
            <Cta>QUERO ACCEDER OS PROJETOS</Cta>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>
            ¿HAS PENSADO EN TENER MILES DE PROYECTOS PARA CONSULTAR SIN NECESITAR
            COMENZAR CADA PIEZA DESDE CERO?
          </h2>
          <img
            className="problem-image"
            src="https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/gg02.png"
            alt="Proyecto de herrería para consulta e fabricação"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          <div className="problem-grid">
            <ul>
              {problems.map((item) => (
                <li key={item}>
                  <span>❌</span>
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              {solutions.map((item) => (
                <li key={item}>
                  <span>✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="centered">
            <Cta>QUIERO VER LOS +5.000 PROYECTOS</Cta>
          </div>
        </div>
        <Carousel landscape />
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>ESTE MATERIAL ES IDEAL PARA TI SI...</h2>
          <div className="grid-two">
            {forYou.map(([title, text]) => (
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
            <Cta>QUIERO COMENZAR AHORA</Cta>
          </div>
        </div>
      </section>

      <section className="section receive">
        <div className="container">
          <h2>TODO LO QUE VAS A RECIBIR</h2>
          <article className="main-material">
            <span className="badge">ACCESO INMEDIATO</span>
            <img className="material-image" src="https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/gugudada.png" alt="Tudo o que você vai receber" loading="lazy" decoding="async" draggable={false} />
            <h3>+5.000 PROJETOS PARA FABRICAR Y VENDER</h3>
            <CheckList
              items={[
                "+5.000 proyectos de herrería organizados para consulta",
                "Modelos de mesas, estanterías, portones, remolques, remolques e estruturas",
                "Proyectos para estudar diferentes possibilidades de fabricação",
                "Referências para ampliar o catálogo de produtos da sua oficina",
                "Acesso digital imediato",
              ]}
            />
            <p className="delivery-box">
              Recibes todo de inmediato, directamente en tu WhatsApp y correo electrónico
            </p>
          </article>
          <div className="bonus-heading">
            <h2>EL PLAN COMPLETO INCLUYE AÚN MÁS</h2>
            <p>
              Você também vai receber 4 bônus complementares para aproveitar
              ainda mais os proyectos
            </p>
          </div>
          <div className="bonus-grid">
            {bonuses.map((bonus, i) => (
              <article className="bonus-card" key={bonus.title}>
                <span className="bonus-label">
                  BONO {i + 1}
                  {i === 2 ? " E 4" : ""}
                </span>
                <img
                  className="bonus-image"
                  src={[
                    "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/bonus%201%20.png",
                    "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/bonus%202%20.png",
                    "https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/bonus%203%20e%204%20.png",
                  ][i]}
                  alt={i === 2 ? "Bono 3 e 4" : `Bono ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <h3>{bonus.title}</h3>
                <p>{bonus.subtitle}</p>
                <CheckList items={bonus.items} />
                <div className="value">
                  <s>{bonus.value}</s>
                  <span>→</span>
                  <strong>GRATIS</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="section section-alt plans">
        <div className="container">
          <div className="offer-label">⏰ OFERTA ESPECIAL</div>
          <h2>ESCOLHA A MELHOR FORMA DE ACCEDER OS PROJETOS</h2>
          <div className="plans-grid">
            <article className="plan basic">
              <h3>PLAN BÁSICO</h3>
              <img className="plan-image" src="https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/plano%20basico%202.png" alt="Plano Básico" loading="lazy" decoding="async" draggable={false} />
              <CheckList
                items={[
                  "+5.000 proyectos para fabricar e vender",
                  "Proyectos de mesas, estanterías, portones e muebles metálicos",
                  "Modelos de remolques, remolques e estruturas",
                  "Acesso imediato ao material digital",
                ]}
              />
              <Price
                old="R$47,90"
                price="14,90"
                installments="o 4 cuotas de R$5,00 con tarjeta"
                save="R$30,00"
              />
              <a className="cta" href="https://pay.cakto.com.br/y68c6tk_1128010">
                QUIERO EL PLAN BÁSICO
              </a>
            </article>
            <article className="plan complete">
              <div className="bestseller">MÁS VENDIDO</div>
              <h3>PLAN COMPLETO</h3>
              <img className="plan-image" src="https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/plano%20premium%20.png" alt="Plano Completo" loading="lazy" decoding="async" draggable={false} />
              <span className="bonus-badge">⚡ MAIS PROJETOS + BONO</span>
              <CheckList
                items={[
                  "+5.000 proyectos para fabricar e vender",
                  "🎁 Bono 1 - Guia de Precificação para Serralheria",
                  "🎁 Bono 2 - Catálogo de Produtos para Oferecer",
                  "🎁 Bono 3 - Catálogo de Ideias",
                  "🎁 Bono 4 - Lista de Fornecedores",
                  "Acceso inmediato por WhatsApp y correo electrónico",
                ]}
              />
              <Price
                old="R$128,90"
                price="24,90"
                installments="o 6 cuotas de R$5,48 con tarjeta"
                save="R$101,00"
              />
              <a className="cta" href="https://pay.cakto.com.br/4s7b73g_1128073">
                QUERO O PLAN COMPLETO
              </a>
              <EmptyMedia className="secure-seal" />
            </article>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section guarantee">
        <div className="container guarantee-card">
          <span className="badge">🔒 Riesgo cero para ti</span>
         <img
  className="guarantee-seal-image"
  src="https://raw.githubusercontent.com/samucaschat1-lgtm/projetosparafabricar/main/public/selo.PNG"
  alt="Sello de garantía de 15 días — satisfacción o reembolso"
  loading="lazy"
  decoding="async"
  draggable={false}
  style={{
    width: "min(100%, 260px)",
    height: "auto",
    maxHeight: 300,
    objectFit: "contain",
    display: "block",
    margin: ".25rem auto 1rem",
    borderRadius: 18,
  }}
/>
          <div>
            <h2>
              GARANTIA DE 15 DIAS <mark>SATISFAÇÃO OU REEMBOLSO</mark>
            </h2>
            <p>No tienes que comprar a ciegas.</p>
            <p>
              Después de la compra, tienes <strong>15 dias</strong> para acessar o
              material, abrir os proyectos e testar o conteúdo para ver se ele faz
              sentido para sua rotina de fabricação.
            </p>
            <p>
              Si por cualquier motivo sientes que no era lo que necesitabas,
              solo tienes que solicitar el reembolso dentro de ese plazo.
            </p>
            <p>Sin burocracia. Sin dolores de cabeza. Sin complicaciones.</p>
            <div className="guarantee-box">
              O risco fica com a gente para você testar o material com
              tranquilidade e ver se os proyectos fazem sentido para sua oficina.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt faq">
        <div className="faq-wrap">
          <h2>PERGUNTAS FREQUENTES</h2>
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

      <footer>
        <div className="container">
          <p>
            Copyright © 2026 | +5.000 Proyectos para Fabricar y Vender
            <br />
            Todos os direitos reservados.
          </p>
          <p>
            Este site não é afiliado ao Facebook™, Instagram™, Google™ ou
            qualquer outra plataforma mencionada.
          </p>
          <p>
            Todos os direitos sobre a obra “+5.000 Proyectos para Fabricar e
            Vender” são reservados ao produtor, nos termos da Lei nº 9.610/98
            (Lei de Direitos Autorais).
          </p>
          <p>
            Este produto é um material digital de consulta e referência para
            herrería. Os resultados podem variar conforme o conhecimento, as
            ferramentas, a experiência e a aplicação de cada pessoa.
          </p>
        </div>
      </footer>
    </main>
  );
}
