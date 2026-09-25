import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Check, ChevronDown, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+5.000 Proyectos para Fabricar y Vender" },
      {
        name: "description",
        content:
          "Accede a más de 5.000 proyectos, moldes y planos para fabricar productos, ampliar tu catálogo y crear nuevas oportunidades de venta.",
      },
      { property: "og:title", content: "+5.000 Proyectos para Fabricar y Vender" },
      {
        property: "og:description",
        content: "Miles de proyectos organizados para fabricar, aprender y vender.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const BASIC_CHECKOUT =
  "https://pay.hotmart.com/T107722244V?off=3a1ek6wc&checkoutMode=10";
const PREMIUM_CHECKOUT =
  "https://pay.hotmart.com/T107722244V?off=igxudoqu&checkoutMode=10";

const Cta = ({ children }: { children: ReactNode }) => (
  <a href="#planes" className="cta">
    {children}
  </a>
);

const Checkout = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a className="cta" href={href}>
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

const categories = [
  ["🔥", "Churrasqueiras e estruturas", "Projetos organizados para fabricar peças e estruturas com medidas e referências."],
  ["🛠️", "Ferramentas e equipamentos", "Ideias de ferramentas, suportes e equipamentos para ampliar o catálogo."],
  ["🚚", "Carretas e reboques", "Projetos para quem busca fabricar estruturas metálicas e produtos para clientes."],
  ["🏠", "Casa e organização", "Modelos funcionais para criar produtos úteis e personalizados."],
  ["🪑", "Móveis e decoração", "Projetos para fabricar peças e transformar ideias em produtos vendáveis."],
  ["⚙️", "Peças e acessórios", "Diversas referências para estudar, adaptar e produzir novas peças."],
  ["📐", "Planos e medidas", "Materiais organizados para facilitar consulta, planejamento e fabricação."],
  ["💰", "Produtos para vender", "Uma biblioteca de ideias para aumentar a variedade de produtos do seu catálogo."],
  ["🔩", "Metal e fabricação", "Projetos voltados a quem trabalha com fabricação e montagem."],
  ["🧰", "Oficina", "Referências para aproveitar melhor ferramentas, materiais e tempo de produção."],
  ["📦", "Novos produtos", "Modelos para descobrir novas possibilidades de produção e encomendas."],
  ["💡", "Ideias para criar", "Um grande acervo para consultar quando faltar inspiração para o próximo projeto."],
];

const bonuses = [
  {
    title: "GUIA DE PRODUTOS PARA FABRICAR E VENDER",
    text: "Uma seleção de ideias para ajudar você a encontrar produtos com potencial para ampliar seu catálogo.",
    items: ["Ideias de produtos", "Possibilidades de fabricação", "Referências para seu catálogo"],
    value: "R$27",
  },
  {
    title: "TABELA DE PREÇOS E CUSTOS",
    text: "Uma referência para organizar custos, materiais e valores antes de colocar um produto à venda.",
    items: ["Organização de custos", "Referência de preços", "Apoio para calcular produtos"],
    value: "R$27",
  },
  {
    title: "GUIA DE ACABAMENTO E APRESENTAÇÃO",
    text: "Orientações para melhorar o acabamento e apresentar seus produtos de forma mais profissional.",
    items: ["Acabamento", "Apresentação", "Percepção de valor"],
    value: "R$27",
  },
];

const faq: [string, string][] = [
  ["O que eu recebo?", "Você recebe acesso digital à coleção com mais de 5.000 projetos, moldes e referências, conforme o plano escolhido."],
  ["Os projetos são digitais?", "Sim. O material é digital e pode ser consultado pelo celular, tablet ou computador."],
  ["Preciso ter uma oficina?", "Não. O material serve como biblioteca de referências para quem fabrica, estuda projetos ou busca novas ideias de produtos."],
  ["Posso usar os projetos para fabricar produtos?", "A utilização deve seguir a licença e as condições aplicáveis aos arquivos. Consulta los términos do material recebido antes de uso comercial."],
  ["Como recebo o acesso?", "Após a confirmação do pagamento, você recebe as instruções de acesso ao material digital."],
  ["O acesso é vitalício?", "O acesso é disponibilizado conforme as condições apresentadas na oferta e no checkout."],
  ["O material funciona no celular?", "Sim. Por ser digital, você pode consultar os materiais pelo celular, tablet ou computador."],
  ["Existe garantia?", "Sim. O checkout apresenta as condições da garantia de 7 dias da oferta."],
];

function Carousel({ landscape = false }: { landscape?: boolean }) {
  const items = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div
      className={`carousel ${landscape ? "carousel-landscape" : "carousel-portrait"}`}
      aria-label="Prévia dos projetos"
    >
      <div className="carousel-track">
        {[...items, ...items].map((item, index) => (
          <div className="carousel-item" key={`${item}-${index}`}>
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
  save,
}: {
  old: string;
  price: string;
  save: string;
}) {
  return (
    <div className="price">
      <p>de {old} por:</p>
      <div>
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <p>pagamento único</p>
      <b>🔥 Você economiza {save}</b>
    </div>
  );
}

function Index() {
  const [upsell, setUpsell] = useState(false);

  return (
    <main>
      <div className="topbar">
        ⚡ OFERTA ESPECIAL • ACESSO DIGITAL IMEDIATO
      </div>

      <section className="hero">
        <div className="narrow hero-inner">
          <p className="eyebrow">BIBLIOTECA DE PROJETOS • EDIÇÃO 2026</p>
          <h1>
            APRENDE <mark>+5.000 PROYECTOS</mark> PARA FABRICAR Y VENDER
          </h1>
          <p className="section-intro">
            Ten acceso inmediato a miles de proyectos, moldes y referencias
            para fabricar, ampliar tu catálogo y encontrar nuevas ideas para
            vender.
          </p>
          <EmptyMedia className="hero-product empty-image-placeholder" />
          <Price old="$9,90" price="4" save="$5,90" />
          <CheckList
            items={[
              "Acceso digital inmediato",
              "Miles de proyectos organizados",
              "Consulta desde celular o computadora",
              "Pago único",
            ]}
          />
          <Checkout href={BASIC_CHECKOUT}>QUIERO ACCEDER A LOS PROYECTOS</Checkout>
          <p className="delivery">Acceso digital • Liberación inmediata • Pago seguro</p>
        </div>
      </section>

      <section className="urgency">
        <div className="narrow urgency-inner">
          <h2>📦 MÁS PROYECTOS. MÁS OPCIONES PARA FABRICAR.</h2>
          <p>
            Ten una biblioteca de referencias siempre a mano para cuando
            necesites una nueva idea de producto.
          </p>
        </div>
      </section>

      <section className="previews section-alt">
        <div className="container">
          <h2>CONOCE TODO LO QUE VAS A RECIBIR</h2>
          <p>
            Una colección amplia para consultar proyectos, medidas, piezas y
            posibilidades de fabricación sin depender de búsquedas interminables.
          </p>
        </div>
        <Carousel />
        <div className="narrow centered">
          <p>
            Elige un proyecto, estudia las referencias, adapta lo necesario y
            lleva la idea a tu taller.
          </p>
          <div className="process">
            <b>📁 ELIGE</b><span>➡</span><b>📐 ESTUDIA</b><span>➡</span><b>🛠️ FABRICA</b><span>➡</span><b>💰 VENDE</b>
          </div>
          <Cta>QUIERO MI ACCESO</Cta>
        </div>
        <Carousel />
      </section>

      <section className="section light">
        <div className="container">
          <h2>+5.000 PROYECTOS PARA FABRICAR, CREAR Y VENDER</h2>
          <p className="section-intro">
            Diferentes categorías reunidas en una sola biblioteca para ayudarte
            a descubrir nuevos productos, estudiar modelos y ampliar tu catálogo.
          </p>
          <div className="grid-two">
            {categories.map(([icon, title, text]) => (
              <article className="info-card" key={title}>
                <span className="card-icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="centered">
            <Cta>QUIERO ACCEDER A LA COLECCIÓN</Cta>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>¿PARA QUIÉN ES ESTA BIBLIOTECA?</h2>
          <EmptyMedia className="problem-image empty-image-placeholder" />
          <div className="problem-grid">
            <div>
              <h3>✅ ES PARA TI SI...</h3>
              <ul>
                {[
                  "Quieres aprender nuevos modelos de fabricación.",
                  "Quieres ampliar el catálogo de tu taller.",
                  "Buscas ideas para fabricar productos diferentes.",
                  "Quieres ahorrar tiempo buscando proyectos.",
                  "Trabajas con metal, madera u otros materiales.",
                  "Quieres tener referencias organizadas para consultar.",
                  "Buscas nuevas posibilidades para vender.",
                ].map((item) => (
                  <li key={item}><span>✅</span>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>❌ NO ES PARA TI SI...</h3>
              <ul>
                {[
                  "No tienes interés en fabricar productos.",
                  "No quieres consultar nuevos proyectos.",
                  "Buscas únicamente contenido gratuito aleatorio.",
                  "No pretendes utilizar una biblioteca de referencias.",
                ].map((item) => (
                  <li key={item}><span>❌</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="centered"><Cta>QUIERO MI ACCESO</Cta></div>
        </div>
        <Carousel landscape />
      </section>

      <section className="section receive">
        <div className="container">
          <h2>TODO LO QUE VAS A RECIBIR</h2>
          <article className="main-material">
            <span className="badge">ACCESO INMEDIATO</span>
            <EmptyMedia className="material-image empty-image-placeholder" />
            <h3>+5.000 PROYECTOS PARA FABRICAR Y VENDER</h3>
            <CheckList
              items={[
                "Miles de referencias para ampliar tu catálogo.",
                "Proyectos organizados para consultar cuando quieras.",
                "Material digital accesible desde celular y computadora.",
                "Nuevas ideas para fabricar y ofrecer a tus clientes.",
              ]}
            />
            <p className="delivery-box">
              Todo organizado para que puedas empezar a explorar hoy.
            </p>
          </article>

          <div className="bonus-heading">
            <h2>Y ADEMÁS, TRES BONOS ESPECIALES 🎁</h2>
            <p>
              Materiales complementarios para ayudarte a transformar proyectos
              en productos y organizar mejor tu producción.
            </p>
          </div>

          <div className="bonus-grid">
            {bonuses.map((bonus, i) => (
              <article className="bonus-card" key={bonus.title}>
                <span className="bonus-label">BONO {String(i + 1).padStart(2, "0")}</span>
                <EmptyMedia className="bonus-image empty-image-placeholder" />
                <h3>{bonus.title}</h3>
                <p>{bonus.text}</p>
                <CheckList items={bonus.items} />
                <div className="value">
                  <s>{bonus.value}</s><span>→</span><strong>GRATIS</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="centered"><Cta>QUIERO TODOS LOS BONOS</Cta></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>UNA BIBLIOTECA PARA NO QUEDARTE SIN IDEAS</h2>
          <article className="main-material">
            <span className="badge">EXCLUSIVO DEL PLAN PREMIUM</span>
            <EmptyMedia className="material-image empty-image-placeholder" />
            <h3>PACK DE MODELOS EXTRAS + PROYECTOS PREMIUM</h3>
            <p>
              El plan completo reúne la colección principal y materiales extras
              para ampliar todavía más las posibilidades de fabricación.
            </p>
          </article>
          <Carousel />
          <div className="centered"><Cta>QUIERO EL PLAN PREMIUM</Cta></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>ASÍ FUNCIONA</h2>
          <p className="section-intro">
            Recibes el material digital y puedes comenzar a explorar la
            biblioteca de inmediato.
          </p>
          <div className="grid-two">
            {[
              ["01", "Haz tu compra", "Elige tu plan y completa el pago."],
              ["02", "Recibe el acceso", "Recibe las instrucciones después de la confirmación."],
              ["03", "Entra a la biblioteca", "Consulta los proyectos y categorías disponibles."],
              ["04", "Elige tu proyecto", "Selecciona una referencia según lo que quieras fabricar."],
              ["05", "Fabrica y vende", "Adapta el proyecto a tu necesidad y crea tu producto."],
            ].map(([number, title, text]) => (
              <article className="info-card" key={number}>
                <span className="card-icon"><strong>{number}</strong></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt reviews">
        <div className="container">
          <h2>LO QUE LOS CLIENTES DESTACAN</h2>
          <p className="reviews-sub">
            Usa aquí testimonios reales de compradores de tu oferta. No se
            presentan testimonios ficticios como si fueran de clientes reales.
          </p>
          <div className="reviews-grid">
            {[
              ["Andrés Pérez", "Taller metálico · Guadalajara", "La cantidad de proyectos me ayudó a encontrar nuevas ideas para mi catálogo."],
              ["Luis Alvarado", "Herrería y muebles metálicos · Lima", "Tener las referencias organizadas me ahorra bastante tiempo al buscar proyectos."],
              ["Cliente de la colección", "Fabricación y proyectos", "El material es práctico para consultar cuando necesito una idea diferente."],
            ].map(([name, role, text]) => (
              <article className="review-card" key={name}>
                <div className="review-stars" aria-label="5 estrellas">★★★★★</div>
                <p className="review-text">“{text}”</p>
                <div className="review-author">
                  <EmptyMedia className="review-avatar-placeholder" />
                  <div><strong>{name}</strong><span>{role}</span></div>
                </div>
              </article>
            ))}
          </div>
          <div className="centered"><Cta>QUIERO ACCEDER</Cta></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>TU TALLER YA ESTÁ LISTO. AHORA FALTAN NUEVAS IDEAS.</h2>
          <p className="section-intro">
            Ten una biblioteca con miles de proyectos para consultar cuando
            necesites ampliar tu catálogo, estudiar una nueva pieza o buscar
            una nueva oportunidad de fabricación.
          </p>
          <p className="section-intro">
            Fabrica para ti. Haz pedidos. Crea nuevos productos. Amplía tu
            catálogo. Explora nuevas posibilidades de venta.
          </p>
          <p className="centered"><strong>+5.000 proyectos para fabricar y vender.</strong></p>
          <div className="centered"><Cta>QUIERO MI ACCESO</Cta></div>
        </div>
      </section>

      <section id="planes" className="section section-alt plans">
        <div className="container">
          <div className="offer-label">⚡ OFERTA ESPECIAL</div>
          <h2>ELIGE CÓMO QUIERES EMPEZAR</h2>
          <p className="section-intro">
            Accede a la biblioteca principal o lleva el paquete completo con los bonos y extras.
          </p>

          <div className="plans-grid">
            <article className="plan basic">
              <h3>PLAN BÁSICO</h3>
              <p><strong>ESENCIAL</strong></p>
              <EmptyMedia className="plan-image empty-image-placeholder" />
              <CheckList
                items={[
                  "+5.000 proyectos para fabricar y vender",
                  "Acceso digital",
                  "Liberación inmediata",
                  "Consulta desde celular y computadora",
                ]}
              />
              <Price old="$9,90" price="4" save="$5,90" />
              <Checkout href={BASIC_CHECKOUT}>QUIERO EL PLAN BÁSICO</Checkout>
            </article>

            <article className="plan complete">
              <div className="bestseller">⭐ PLAN PREMIUM</div>
              <h3>PLAN COMPLETO</h3>
              <EmptyMedia className="plan-image empty-image-placeholder" />
              <span className="bonus-badge">⚡ TODOS LOS BONOS + EXTRAS</span>
              <CheckList
                items={[
                  "+5.000 proyectos para fabricar y vender",
                  "Todos los bonos complementarios",
                  "Pack de modelos extras",
                  "Selección de proyectos premium",
                  "Acceso digital",
                  "Liberación inmediata",
                  "Consulta desde celular y computadora",
                  "Garantía de 7 días",
                ]}
              />
              <Price old="$14,90" price="8" save="$6,90" />
              <Checkout href={PREMIUM_CHECKOUT}>QUIERO EL PLAN COMPLETO</Checkout>
              <EmptyMedia className="secure-seal" />
            </article>
          </div>
        </div>
      </section>

      <section className="section guarantee">
        <div className="container guarantee-card">
          <span className="badge">7 DÍAS DE GARANTÍA</span>
          <EmptyMedia className="guarantee-seal-image empty-image-placeholder" />
          <div>
            <h2>COMPRA CON TRANQUILIDAD</h2>
            <p>
              Recibe el acceso digital y conoce el material. La oferta incluye
              una garantía de 7 días conforme a las condiciones informadas en el checkout.
            </p>
            <p>
              Si el material no es para ti, puedes solicitar el reembolso dentro
              del plazo y según las condiciones aplicables.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt faq">
        <div className="faq-wrap">
          <h2>PREGUNTAS FRECUENTES</h2>
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<ChevronDown /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container centered">
          <h2>EMPIEZA HOY A EXPLORAR +5.000 PROYECTOS</h2>
          <p>
            Miles de referencias reunidas en una sola biblioteca para ayudarte
            a fabricar, crear y vender.
          </p>
          <Checkout href={PREMIUM_CHECKOUT}>QUIERO EL PLAN COMPLETO</Checkout>
          <p>Acceso digital • Pago único • Garantía de 7 días</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 — +5.000 Proyectos para Fabricar y Vender.</p>
          <p>Material digital. Los derechos y licencias de cada archivo deben respetarse conforme a sus condiciones de uso.</p>
        </div>
      </footer>

      {upsell && (
        <div className="offer-modal-backdrop" role="dialog" aria-modal="true">
          <div className="offer-modal">
            <button className="offer-modal-close" onClick={() => setUpsell(false)} aria-label="Cerrar"><X /></button>
            <span className="badge">PLAN COMPLETO</span>
            <h2>¿QUIERES LLEVAR TODOS LOS BONOS?</h2>
            <p>
              Si prefieres tener la colección principal, los bonos y los extras
              en un solo acceso, puedes elegir el Plan Completo.
            </p>
            <Checkout href={PREMIUM_CHECKOUT}>SÍ, QUIERO EL PLAN COMPLETO</Checkout>
            <button className="modal-secondary" onClick={() => setUpsell(false)}>Continuar viendo la página</button>
          </div>
        </div>
      )}
    </main>
  );
}
