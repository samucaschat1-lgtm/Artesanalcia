import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import avatarHomem1 from "@/assets/avatar-homem-1.jpg";
import avatarHomem2 from "@/assets/avatar-homem-2.jpg";
import avatarHomem4 from "@/assets/avatar-homem-4.jpg";

const heroProduct = "/ChatGPT%20Image%2022%20de%20set.%20de%202026%2C%2023_09_34.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+100 Proyectos para Fabricar y Vender" },
      {
        name: "description",
        content:
          "Biblioteca digital con más de 5.000 proyectos de herrería para consultar, estudiar, fabricar y vender.",
      },
      { name: "author", content: "+100 Proyectos para Fabricar y Vender" },
      { property: "og:title", content: "+100 Proyectos para Fabricar y Vender" },
      {
        property: "og:description",
        content:
          "Amplía las posibilidades de tu taller con miles de proyectos y referencias de fabricación metálica.",
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
    "+100 proyectos",
    "Una gran variedad de modelos para consultar cuando surja una nueva idea, pedido u oportunidad de fabricación.",
  ],
  [
    "Más posibilidades de fabricación",
    "Encuentra proyectos de mesas, estanterías, portones, remolques, estructuras metálicas y muchos otros modelos.",
  ],
  [
    "Referencias para tu taller",
    "Ten proyectos organizados para estudiar diferentes modelos y encontrar referencias antes de comenzar una nueva fabricación.",
  ],
  [
    "Más opciones para ofrecer",
    "Amplía el catálogo de piezas que puedes presentar a tus clientes y aumenta las posibilidades de nuevos trabajos.",
  ],
];

const problems = [
  "Pasar horas buscando referencias para descubrir cómo fabricar una pieza diferente.",
  "Tener siempre las mismas opciones de productos para fabricar y ofrecer a los clientes.",
  "Encontrar una nueva oportunidad de trabajo y no tener un proyecto o modelo para consultar.",
  "Perder tiempo intentando dibujar y planificar cada nueva pieza desde cero.",
];

const solutions = [
  "Tener +100 proyectos de herrería organizados para consultar cuando los necesites.",
  "Encontrar diferentes modelos de muebles, estructuras, remolques y mucho más.",
  "Usar los proyectos como referencia para estudiar y planificar nuevas piezas para fabricar.",
  "Ampliar las posibilidades de productos que puedes fabricar y ofrecer a tus clientes.",
];const bonuses = [
  {
    title: "GUÍA DE PRECIOS PARA HERRERÍA",
    subtitle:
      "una referencia práctica para organizar costos y calcular el precio de venta",
    items: [
      "Organiza los principales costos de fabricación",
      "Ten una referencia para calcular precios de venta",
      "Evita olvidar materiales y gastos al calcular tu precio",
      "Úsalo como apoyo para calcular el precio de tus piezas",
    ],
    value: "$27",
  },
  {
    title: "CATÁLOGO DE PRODUCTOS PARA OFRECER",
    subtitle:
      "ideas de piezas para ampliar las opciones que presentas a tus clientes",
    items: [
      "Diversas ideas de productos para incluir en tu catálogo",
      "Modelos que pueden servir como referencia para nuevos trabajos",
      "Más opciones para presentar a tus clientes",
      "Ayuda para descubrir nuevos productos que puedes fabricar",
    ],
    value: "$27",
  },
  {
    title: "CATÁLOGO DE IDEAS + LISTA DE PROVEEDORES",
    subtitle:
      "más referencias para encontrar productos y materiales para tu taller",
    items: [
      "Ideas de piezas para estudiar y fabricar",
      "Referencias para ampliar tu catálogo",
      "Lista de proveedores y materiales relacionados con la fabricación",
      "Más facilidad para encontrar nuevas posibilidades para tu taller",
    ],
    value: "$47",
  },
];

const faq: [string, string][] = [
  [
    "¿Cómo recibiré el material?",
    "Después de confirmar la compra, recibirás acceso inmediato por correo electrónico y WhatsApp. Solo tienes que descargar los archivos y comenzar a consultar los proyectos.",
  ],
  [
    "¿Qué incluye el plan básico?",
    "El plan básico incluye el material principal con +100 proyectos de herrería para consultar y usar como referencia en la fabricación.",
  ],
  [
    "¿Qué incluye el plan completo?",
    "En el plan completo recibes los +100 proyectos más los bonos de precios, catálogo de productos, catálogo de ideas y lista de proveedores.",
  ],
  [
    "¿Necesito saber de herrería para usarlo?",
    "Los proyectos sirven como material de consulta y referencia. El aprovechamiento depende de tu nivel de conocimientos, las herramientas disponibles y tu experiencia en fabricación.",
  ],
  [
    "¿Sirve para quienes están comenzando?",
    "Sí. El material puede ser utilizado por quienes buscan conocer nuevos modelos y posibilidades de fabricación, siempre respetando los conocimientos y habilidades necesarios para ejecutar cada proyecto.",
  ],
  [
    "¿Qué tipos de proyectos forman parte del material?",
    "La biblioteca reúne diferentes categorías, incluyendo mesas, estanterías, portones, estructuras metálicas, remolques, parrillas, escaleras y muchos otros modelos.",
  ],
  [
    "¿Necesito alguna aplicación para usarlo?",
    "No. Solo necesitas abrir los archivos en tu celular, tablet o computadora para consultar el material. Si quieres, también puedes imprimir los proyectos.",
  ],
  [
    "¿Puedo usar los proyectos como referencia para mis clientes?",
    "Sí. Los proyectos pueden servir como referencia para estudiar modelos y presentar posibilidades de fabricación a tus clientes.",
  ],
  [
    "¿El material sirve para cualquier tipo de taller?",
    "El material reúne diferentes categorías de proyectos de herrería y puede utilizarse como biblioteca de referencias, según las herramientas, equipos y conocimientos disponibles en tu taller.",
  ],
  [
    "¿Puedo imprimir los proyectos?",
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
        <h2>⏰ Aprovecha la condición especial para acceder a los +100 proyectos</h2>
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
    "CARRETILHA.png",
    "ESCALERA INDUSTRIAL.png",
    "ESTANTE UNDUSTRIAL.png",
    "MESA DE CENTRO.png",
    "MESA DE COMEDOR.png",
    "Mesa Y BANCO.png",
    "PARRILLA PARA CARBON.png",
    "PORTON CORREDIZO.png",
  ];

  const imageUrl = (file: string) =>
    `https://raw.githubusercontent.com/samucaschat1-lgtm/cafereceitas/main/public/${encodeURIComponent(file)}`;

  return (
    <div
      className={`carousel ${landscape ? "carousel-landscape" : "carousel-portrait"}`}
      aria-label="Carrusel automático de proyectos"
    >
      <div className="carousel-track">
        {[...images, ...images].map((file, i) => (
          <div className="carousel-item" key={`${file}-${i}`}>
            <img
              src={imageUrl(file)}
              alt={`Proyecto de herrería ${(i % images.length) + 1}`}
              loading="lazy"
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
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <p>{installments}</p>
        <b>🔥 Ahorras {save}</b>
    </div>
  );
}function Index() {
  const today = new Intl.DateTimeFormat("es-419").format(new Date());

  return (
    <main>
      <div className="topbar">⚡ Oferta especial disponible solo hoy {today}</div>

      <section className="hero">
        <div className="narrow hero-inner">
          <h1>
            APRENDE <mark>+100 PROYECTOS</mark> PARA{" "}
            <mark>FABRICAR Y VENDER</mark>
          </h1>
          <img
            className="hero-product"
            src={heroProduct}
            fetchPriority="high"
            loading="eager"
            alt="Más de cinco mil proyectos de herrería para fabricar y vender"
          />

          <Price
            old="$19"
            price="4"
            installments="pago único de $4"
            save="$15"
          />

          <p className="support">
            Accede a una biblioteca completa de proyectos de herrería para consultar, estudiar y encontrar nuevas piezas para fabricar y ofrecer a tus clientes.
          </p>
          <CheckList
            items={[
              "+100 proyectos de herrería para consultar y usar como referencia",
              "Encuentra modelos de mesas, estanterías, portones, remolques, estructuras y mucho más",
              "Amplía las posibilidades de lo que puedes fabricar y ofrecer a tus clientes",
            ]}
          />
          <Cta>👉 ACCEDER AHORA</Cta>
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
            Todo viene organizado para que consultes los proyectos y encuentres referencias para diferentes tipos de fabricación sin tener que comenzar cada idea desde cero.
          </p>
          <div className="process">
            <b>📲 ACCEDE</b>
            <span>➡</span>
            <b>📐 CONSULTA</b>
            <span className="down">⬇</span>
            <b>🔧 FABRICA E VENDE!</b>
          </div>
          <Cta>👉 QUIERO LOS +100 PROYECTOS</Cta>
        </div>
        <Carousel />
      </section>

      <section className="section light">
        <div className="container">
          <h2>
            UNA BIBLIOTECA COMPLETA PARA AMPLIAR TUS POSIBILIDADES EN HERRERÍA
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
            <Cta>QUIERO ACCEDER A LOS PROYECTOS</Cta>
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
            alt="Proyecto de herrería para consulta y fabricación"
            loading="lazy"
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
            <Cta>QUIERO VER LOS +100 PROYECTOS</Cta>
          </div>
        </div>
        <Carousel landscape />
      </section>

      <section className="section section-alt">
      <section className="section receive">
        <div className="container">
          <h2>TODO LO QUE VAS A RECIBIR</h2>
          <article className="main-material">
            <span className="badge">ACCESO INMEDIATO</span>
            <img
              className="material-image"
              src="/ChatGPT%20Image%2022%20de%20set.%20de%202026%2C%2023_42_45.png"
              alt="Todo lo que vas a recibir"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <h3>+100 PROYECTOS PARA FABRICAR Y VENDER</h3>
            <CheckList
              items={[
                "+100 proyectos de herrería organizados para consulta",
                "Modelos de mesas, estanterías, portones, remolques y estructuras",
                "Proyectos para estudiar diferentes posibilidades de fabricación",
                "Referencias para ampliar el catálogo de productos de tu taller",
                "Acceso digital inmediato",
              ]}
            />
            <p className="delivery-box">
              Recibes todo de inmediato, directamente en tu WhatsApp y correo electrónico
            </p>
          </article>

          <div className="bonus-heading">
            <h2>EL PLAN COMPLETO INCLUYE AÚN MÁS</h2>
            <p>
              También recibirás 4 bonos complementarios para aprovechar aún más los proyectos
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
                    "https://raw.githubusercontent.com/samucaschat1-lgtm/cafereceitas/main/public/bonus%201%20latam%20.png",
                    "https://raw.githubusercontent.com/samucaschat1-lgtm/cafereceitas/main/public/bonus%202%20LATAM.png",
                    "https://raw.githubusercontent.com/samucaschat1-lgtm/cafereceitas/main/public/bonus%203%20LATAM.png",
                  ][i]}
                  alt={i === 2 ? "Bonos 3 y 4" : `Bono ${i + 1}`}
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
    <h2>ELIGE LA MEJOR FORMA DE ACCEDER A LOS PROYECTOS</h2>

    <div className="plans-grid">
      <article className="plan basic">
        <h3>PLAN BÁSICO</h3>

        <img
  className="plan-image"
  src="/ChatGPT%20Image%2022%20de%20set.%20de%202026%2C%2023_09_34.png"
  alt="Plano Básico"
  loading="lazy"
  decoding="async"
  draggable={false}
/>
        <CheckList
          items={[
            "+100 proyectos para fabricar y vender",
            "Proyectos de mesas, estanterías, portones y muebles metálicos",
            "Modelos de remolques y estructuras",
            "Acceso inmediato al material digital",
          ]}
        />

        <Price
          old="$19"
          price="4"
          installments="pago único de $4"
          save="$15"
        />

        <div className="local-currency-notice">
          <p>💳 Tu pago se convierte a tu moneda local.</p>
        </div>

        <a
          className="cta"
          href="https://pay.hotmart.com/T107722244V?off=3a1ek6wc&checkoutMode=10"
        >
          QUIERO EL PLAN BÁSICO
        </a>
      </article>

      <article className="plan complete">
        <div className="bestseller">MÁS VENDIDO</div>
        <h3>PLAN COMPLETO</h3>

        <img
  className="plan-image"
  src="/8E1EA8BD-6531-4B5D-82FC-2A0B99F7AB17.PNG"
  alt="Plano Premium"
  loading="lazy"
  decoding="async"
  draggable={false}
/>

        <span className="bonus-badge">
          ⚡ MÁS PROYECTOS + BONOS
        </span>

        <CheckList
          items={[
            "+100 proyectos para fabricar y vender",
            "🎁 Bono 1 - Guía de Precios para Herrería",
            "🎁 Bono 2 - Catálogo de Productos para Ofrecer",
            "🎁 Bono 3 - Catálogo de Ideas",
            "🎁 Bono 4 - Lista de Proveedores",
            "Acceso inmediato por WhatsApp y correo electrónico",
          ]}
        />

        <Price
          old="$38"
          price="8"
          installments="pago único de $8"
          save="$30"
        />

        <div className="local-currency-notice">
          <p>💳 Tu pago se convierte a tu moneda local.</p>
        </div>

        <a
          className="cta"
          href="https://pay.hotmart.com/T107722244V?off=igxudoqu&checkoutMode=10"
        >
          QUIERO EL PLAN COMPLETO
        </a>

        <EmptyMedia className="secure-seal" />
      </article>
    </div>
  </div>
</section>
      <section className="section section-alt reviews">
        <div className="container">
          <h2>LO QUE DICEN QUIENES YA USAN LOS PROYECTOS</h2>
          <p className="reviews-sub">
            Herreros y talleres que ampliaron sus posibilidades de fabricación con la biblioteca.
          </p>
          <div className="reviews-grid">
            {[
              {
                name: "Carlos Martínez",
                place: "Taller de herrería · Ciudad de México",
                text: "Tenía siempre los mismos modelos para ofrecer. Ahora, cuando un cliente pide algo diferente, abro la biblioteca y ya tengo varios proyectos para mostrarle. Se cerró mi primer portón corredizo en dos semanas.",
                avatar: avatarHomem1,
              },
              {
                name: "Jorge Ramírez",
                place: "Metálicas y soldadura · Bogotá",
                text: "Lo mejor es tener todo organizado en un solo lugar. Antes perdía horas buscando referencias por internet; ahora consulto el proyecto, saco mis medidas y directo al taller. Ahorra muchísimo tiempo.",
                avatar: avatarHomem2,
              },
              {
                name: "Luis Alvarado",
                place: "Herrería y muebles metálicos · Lima",
                text: "Las mesas y estanterías me sirvieron para ampliar el catálogo de mi taller. Presenté tres modelos nuevos a mis clientes y ya me pidieron dos. La inversión se recuperó con el primer trabajo.",
                avatar: "/sr2.jpg",
              },
              {
                name: "Andrés Pérez",
                place: "Taller metálico · Guadalajara",
                text: "Estaba empezando y no sabía por dónde arrancar. Con los proyectos pude estudiar modelos de parrillas y estructuras, y fabricar mis primeras piezas con seguridad. Muy recomendable.",
                avatar: "/sr.jpg",
              },
            ].map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars" aria-label="5 de 5 estrellas">
                  ★★★★★
                </div>
                <p className="review-text">“{review.text}”</p>
                <div className="review-author">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.place}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="centered">
            <Cta>👉 QUIERO ACCEDER A LOS PROYECTOS</Cta>
          </div>
        </div>
      </section>

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
              GARANTÍA DE 15 DÍAS <mark>SATISFACCIÓN O REEMBOLSO</mark>
            </h2>
            <p>No tienes que comprar a ciegas.</p>
            <p>
              Después de la compra, tienes <strong>15 días</strong> para acceder al material, abrir los proyectos y probar el contenido para ver si tiene sentido para tu rutina de fabricación.
            </p>
            <p>
              Si por cualquier motivo sientes que no era lo que necesitabas,
              solo tienes que solicitar el reembolso dentro de ese plazo.
            </p>
            <p>Sin burocracia. Sin dolores de cabeza. Sin complicaciones.</p>
            <div className="guarantee-box">
              El riesgo lo asumimos nosotros para que puedas probar el material con tranquilidad y comprobar si los proyectos tienen sentido para tu taller.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt faq">
        <div className="faq-wrap">
          <h2>PREGUNTAS FRECUENTES</h2>
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
            Copyright © 2026 | +100 Proyectos para Fabricar y Vender
            <br />
            Todos los derechos reservados.
          </p>
          <p>
            Este sitio no está afiliado a Facebook™, Instagram™, Google™ ni a ninguna otra plataforma mencionada.
          </p>
          <p>
            Todos los derechos sobre la obra “+100 Proyectos para Fabricar y Vender” están reservados al productor, de acuerdo con la legislación aplicable.
          </p>
          <p>
            Este producto es un material digital de consulta y referencia para herrería. Los resultados pueden variar según los conocimientos, las herramientas, la experiencia y la aplicación de cada persona.
          </p>
        </div>
      </footer>
    </main>
  );
}
