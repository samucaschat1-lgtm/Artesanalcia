import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Archivos STL de Juguetes y Modelos 3D" },
      {
        name: "description",
        content: "Más de 500 archivos STL de juguetes y modelos 3D listos para descargar e imprimir.",
      },
      { name: "author", content: "+500 Archivos STL de Juguetes y Modelos 3D" },
      { property: "og:title", content: "+500 Archivos STL de Juguetes y Modelos 3D" },
      {
        property: "og:description",
        content: "Una biblioteca digital de archivos STL para imprimir juguetes, figuras y modelos 3D.",
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
  ["+500 archivos STL", "Una gran variedad de archivos 3D para descargar, organizar y tener siempre disponibles cuando quieras imprimir algo nuevo."],
  ["Juguetes y modelos 3D", "Encuentra diferentes categorías de juguetes, figuras, personajes, objetos decorativos y modelos para impresión 3D."],
  ["Listos para imprimir", "Ten una biblioteca digital de archivos STL para consultar y elegir tus próximos modelos de impresión."],
  ["Más opciones para crear", "Amplía tu colección de modelos 3D y descubre nuevas piezas para imprimir, personalizar y coleccionar."],
];

const problems = [
  "Pasar horas buscando archivos STL en diferentes sitios para encontrar un modelo que te interese.",
  "Tener pocas opciones de juguetes y modelos 3D para imprimir en tu colección.",
  "Encontrar una idea para imprimir y no tener un archivo STL adecuado para comenzar.",
  "Perder tiempo buscando, organizando y separando archivos de diferentes fuentes.",
];

const solutions = [
  "Tener +500 archivos STL organizados para consultar cuando quieras imprimir algo nuevo.",
  "Encontrar juguetes, figuras y modelos 3D para diferentes momentos y proyectos.",
  "Elegir rápidamente un modelo y tener el archivo listo para llevar a tu flujo de impresión.",
  "Ampliar tu biblioteca digital y descubrir nuevas posibilidades para imprimir y personalizar.",
];
const bonuses = [
  {
    title: "COLECCIÓN EXTRA DE FIGURAS 3D",
    subtitle: "modelos adicionales para ampliar tu biblioteca de impresión",
    items: ["Más figuras para imprimir", "Nuevos modelos para coleccionar", "Ideas para personalizar tus impresiones", "Archivos organizados para facilitar tu consulta"],
    value: "$27",
  },
  {
    title: "CATÁLOGO DE IDEAS PARA IMPRESIÓN 3D",
    subtitle: "referencias para descubrir qué puedes imprimir",
    items: ["Ideas de juguetes y objetos 3D", "Diferentes estilos de modelos", "Referencias para tus próximas impresiones", "Más variedad para tu colección"],
    value: "$27",
  },
  {
    title: "PACK EXTRA + GUÍA DE ORGANIZACIÓN",
    subtitle: "más archivos y una forma práctica de mantener tu biblioteca organizada",
    items: ["Modelos adicionales", "Categorías para organizar tus STL", "Ideas para separar tus archivos", "Más facilidad para encontrar tus modelos"],
    value: "$47",
  },
];

const faq: [string, string][] = [
  ["¿Cómo recibiré el material?", "Después de confirmar la compra, recibirás acceso al material digital para descargar los archivos y comenzar a consultar tu biblioteca STL."],
  ["¿Qué incluye el plan básico?", "El plan básico incluye el material principal con +500 archivos STL de juguetes y modelos 3D para descargar e imprimir."],
  ["¿Qué incluye el plan completo?", "El plan completo incluye los +500 archivos STL más los bonos complementarios para ampliar y organizar tu biblioteca de modelos 3D."],
  ["¿Necesito una impresora 3D para usarlo?", "Los archivos están pensados para impresión 3D. Puedes descargarlos y utilizarlos según tu impresora, materiales y configuración."],
  ["¿Sirve para quienes están comenzando?", "Sí. La biblioteca puede servir como fuente de modelos para conocer diferentes posibilidades de impresión 3D, respetando las configuraciones y conocimientos necesarios para cada modelo."],
  ["¿Qué tipos de modelos forman parte del material?", "La biblioteca está enfocada en juguetes y modelos 3D, incluyendo figuras, personajes, objetos y diferentes modelos para imprimir."],
  ["¿Qué es un archivo STL?", "STL es uno de los formatos más utilizados para modelos destinados a impresión 3D. Puedes abrirlo o prepararlo en el software compatible con tu impresora."],
  ["¿Puedo imprimir los modelos en mi casa?", "Sí, siempre que cuentes con una impresora 3D compatible y realices la preparación y configuración adecuadas para cada archivo."],
  ["¿Puedo personalizar los modelos?", "Depende del archivo y del software que utilices. Muchos modelos pueden ser escalados o modificados antes de imprimirlos."],
  ["¿Necesito alguna aplicación para usarlo?", "Necesitarás un programa compatible para abrir o preparar los archivos STL antes de enviarlos a tu impresora 3D."],
  ["¿Puedo guardar los archivos?", "Sí. Después de recibir el material, puedes descargar y organizar los archivos en tu dispositivo según tus necesidades."],
  ["¿Existe garantía?", "Sí. Tienes 15 días de garantía para acceder y probar el material. Si no es lo que necesitas, puedes solicitar el reembolso dentro de ese plazo."],
  ["¿El acceso es por tiempo limitado?", "No. Una vez recibido el material, puedes conservar los archivos para consultarlos cuando quieras."],
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
        <h2>⏰ ⏰ Aprovecha la condición especial para acceder a los +500 archivos STL</h2>
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
    <div className={`carousel ${landscape ? "carousel-landscape" : "carousel-portrait"}`} aria-label="Espacios reservados para futuros modelos 3D">
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
            DESCUBRE <mark>+500 ARCHIVOS STL</mark> DE
            <mark>JUGUETES Y MODELOS 3D</mark>
          </h1>
          <EmptyMedia className="hero-product empty-image-placeholder" />

          <Price
            old="$19"
            price="4"
            installments="pago único de $4"
            save="$15"
          />

          <p className="support">
            Accede a una biblioteca digital con +500 archivos STL de juguetes y modelos 3D para descargar, preparar e imprimir.
          </p>
          <CheckList
            items={[
              "+500 archivos STL para descargar y usar en tus impresiones 3D",
              "Encuentra juguetes, figuras, personajes, objetos y modelos 3D de diferentes categorías",
              "Amplía tu biblioteca de modelos y descubre nuevas posibilidades para imprimir y personalizar",
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
          <h2>MIRA ALGUNOS DE LOS MODELOS 3D</h2>
        </div>
        <Carousel />
        <div className="narrow centered">
          <p>
            Todo viene organizado para que puedas consultar, descargar y elegir tus próximos modelos 3D sin perder tiempo buscando archivos en diferentes lugares.
          </p>
          <div className="process">
            <b>📲 DESCARGA</b><span>➡</span><b>📁 ELIGE</b><span className="down">⬇</span><b>🖨️ IMPRIME!</b>
          </div>
          <Cta>👉 QUIERO LOS +500 ARCHIVOS STL</Cta>
        </div>
        <Carousel />
      </section>

      <section className="section light">
        <div className="container">
          <h2>
            UNA BIBLIOTECA COMPLETA DE MODELOS PARA IMPRESIÓN 3D
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
            ¿HAS PENSADO EN TENER +500 ARCHIVOS STL PARA ELEGIR TU PRÓXIMA IMPRESIÓN?
          </h2>
          <EmptyMedia className="problem-image empty-image-placeholder" />
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
            <EmptyMedia className="material-image empty-image-placeholder" />
            <h3>+500 ARCHIVOS STL DE JUGUETES Y MODELOS 3D</h3>
            <CheckList
              items={[
                "+500 archivos STL organizados para descargar",
                "Juguetes, figuras, personajes y modelos 3D",
                "Archivos STL para explorar diferentes posibilidades de impresión 3D",
                "Más modelos para ampliar tu biblioteca de impresión",
                "Acceso digital inmediato a los archivos STL",
              ]}
            />
            <p className="delivery-box">
              Recibes todo de inmediato, directamente en tu WhatsApp y correo electrónico
            </p>
          </article>

          <div className="bonus-heading">
            <h2>EL PLAN COMPLETO INCLUYE AÚN MÁS MODELOS</h2>
            <p>
              También recibirás bonos complementarios para ampliar aún más tu biblioteca de modelos 3D
            </p>
          </div>

          <div className="bonus-grid">
            {bonuses.map((bonus, i) => (
              <article className="bonus-card" key={bonus.title}>
                <span className="bonus-label">
                  BONO {i + 1}
                  {i === 2 ? " E 4" : ""}
                </span>
                <EmptyMedia className="bonus-image empty-image-placeholder" />
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

        <EmptyMedia className="plan-image empty-image-placeholder" />
        <CheckList
          items={[
            "+500 archivos STL de juguetes y modelos 3D",
            "Juguetes, figuras y modelos 3D para imprimir",
            "Modelos 3D de diferentes categorías",
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

        <EmptyMedia className="plan-image empty-image-placeholder" />

        <span className="bonus-badge">
          ⚡ MÁS PROYECTOS + BONOS
        </span>

        <CheckList
          items={[
            "+500 archivos STL de juguetes y modelos 3D",
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
          <h2>LO QUE DICEN QUIENES YA USAN LOS MODELOS 3D</h2>
          <p className="reviews-sub">
            Personas que ampliaron su biblioteca de modelos para impresión 3D.
          </p>
          <div className="reviews-grid">
            {[
              {
                name: "Carlos Martínez",
                place: "Taller de herrería · Ciudad de México",
                text: "Tenía siempre los mismos modelos para ofrecer. Ahora, cuando un cliente pide algo diferente, abro la biblioteca y ya tengo varios proyectos para mostrarle. Se cerró mi primer portón corredizo en dos semanas.",
                avatar: null,
              },
              {
                name: "Jorge Ramírez",
                place: "Metálicas y soldadura · Bogotá",
                text: "Lo mejor es tener todo organizado en un solo lugar. Antes perdía horas buscando referencias por internet; ahora consulto el proyecto, saco mis medidas y directo al taller. Ahorra muchísimo tiempo.",
                avatar: null,
              },
              {
                name: "Luis Alvarado",
                place: "Herrería y muebles metálicos · Lima",
                text: "Las mesas y estanterías me sirvieron para ampliar el catálogo de mi taller. Presenté tres modelos nuevos a mis clientes y ya me pidieron dos. La inversión se recuperó con el primer trabajo.",
                avatar: null,
              },
              {
                name: "Andrés Pérez",
                place: "Taller metálico · Guadalajara",
                text: "Estaba empezando y no sabía por dónde arrancar. Con los proyectos pude estudiar modelos de parrillas y estructuras, y fabricar mis primeras piezas con seguridad. Muy recomendable.",
                avatar: null,
              },
            ].map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars" aria-label="5 de 5 estrellas">
                  ★★★★★
                </div>
                <p className="review-text">“{review.text}”</p>
                <div className="review-author">
                  <EmptyMedia className="review-avatar-placeholder" />
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
          <EmptyMedia className="guarantee-seal-image empty-image-placeholder" />
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
            Copyright © 2026 | +500 Archivos STL de Juguetes y Modelos 3D
            <br />
            Todos los derechos reservados.
          </p>
          <p>
            Este sitio no está afiliado a Facebook™, Instagram™, Google™ ni a ninguna otra plataforma mencionada.
          </p>
          <p>
            Todos los derechos sobre el material digital “+500 Archivos STL de Juguetes y Modelos 3D” están reservados al productor, de acuerdo con la legislación aplicable.
          </p>
          <p>
            Este producto es un material digital de consulta y referencia para impresión 3D. Los resultados pueden variar según los conocimientos, las herramientas, la experiencia y la aplicación de cada persona.
          </p>
        </div>
      </footer>
    </main>
  );
}
