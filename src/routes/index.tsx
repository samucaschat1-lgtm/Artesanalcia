import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const IMG = "https://maisde150receitasdecachacas.vercel.app/assets/optimized/";
const CAKTO_40 = "https://pay.cakto.com.br/4468wep";
const CAKTO_FULL = "https://pay.cakto.com.br/v2muve7";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+150 Receitas de Cachaça Artesanal" },
      { name: "description", content: "Biblioteca de Cachaças Artesanais com mais de 150 receitas, infusões, drinks e materiais extras." },
      { property: "og:title", content: "+150 Receitas de Cachaça Artesanal" },
      { property: "og:description", content: "Para começar a produzir na sua própria casa." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Countdown() {
  const [seconds, setSeconds] = useState(13 * 60 + 56);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 13 * 60 + 56)), 1000);
    return () => clearInterval(timer);
  }, []);
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return <>{m}:{s}</>;
}

const bonuses = [
  ["BÔNUS 01", "bonus-1-600.webp", "Manual de Higiene e de Conservação", "Conheça os cuidados de higiene, armazenamento e conservação da sua cachaça."],
  ["BÔNUS 02", "bonus-2-600.webp", "Guia de Precificação e Apresentação Profissional", "Organize seus custos e aprimore a apresentação do seu produto artesanal."],
  ["BÔNUS 03", "bonus-3-600.webp", "50 Drinks e Coquetéis", "Explore 50 combinações para levar criatividade e tradição a cada brinde."],
  ["BÔNUS 04", "bonus-4-600.webp", "Guia de Madeiras e Sabores", "Descubra a influência de madeiras como carvalho, amburana, bálsamo e jequitibá."],
  ["BÔNUS 05", "bonus-5-600.webp", "Guia de Harmonização", "Conheça combinações de cachaças, pratos e petiscos para diferentes ocasiões."],
];

function Index() {
  return (
    <main className="cacha-page">
      <div className="topbar">🥃 OFERTA ESPECIAL TERMINA EM: <strong><Countdown /></strong></div>

      <section className="hero">
        <div className="eyebrow">BIBLIOTECA DE CACHAÇAS ARTESANAIS</div>
        <h1><em>+150 Receitas de Cachaça Artesanal</em> Para Começar a Produzir na sua própria casa</h1>
        <img className="hero-mockup" src={IMG + "mockup-novo-800-q80.webp"} alt="Kit +150 Receitas de Cachaças Artesanais" />
        <p className="lead">Explore receitas, infusões e combinações com frutas brasileiras para preparar sabores especiais e valorizar nossa tradição. Um universo de aromas e sabores em um só material.</p>
        <ul className="checks">
          <li>Receitas explicadas passo a passo</li><li>Infusões com frutas do Brasil</li><li>Drinks, licores e combinações variadas</li><li>Material digital para consultar no celular</li>
        </ul>
        <a className="cta" href="#oferta">🥃 QUERO MINHAS RECEITAS DE CACHAÇAS</a>
        <div className="micro">WhatsApp&nbsp;&nbsp;·&nbsp;&nbsp;E-mail · Acesso imediato</div>
      </section>

      <section className="dark-section preview" id="receitas">
        <div className="section-kicker">+150 RECEITAS NO MATERIAL COMPLETO</div>
        <h2>Tradição e sabores para inspirar suas receitas:</h2>
        <a className="text-link" href="#oferta">Ver receitas completas ↓</a>
        <div className="marquee"><div className="marquee-track">{[...Array(2)].flatMap((_,set)=>["img-6-440.webp","img-9-440.webp","img-1-440.webp","img-4-440.webp","img-7-440.webp","img-2-440.webp","img-5-440.webp"].map((x,i)=><img key={"r"+set+i} src={IMG+x} alt={"Receita de cachaça "+(i+1)} />))}</div></div>
        <h2>Uma prévia do que você vai receber</h2>
        <div className="marquee marquee-reverse preview-large"><div className="marquee-track">{[...Array(2)].flatMap((_,set)=>["previa-set23-6-800.webp","previa-set23-8-800.webp","previa-set23-10-800.webp","previa-set23-1-800.webp","previa-set23-3-800.webp","previa-set23-5-800.webp","previa-set23-7-800.webp"].map((x,i)=><img key={"p"+set+i} src={IMG+x} alt={"Prévia "+(i+1)} />))}</div></div>
        <a className="cta" href="#oferta">QUERO ACESSO AO MATERIAL COMPLETO</a>
      </section>

      <section className="how section">
        <div className="section-kicker">COMO FUNCIONA</div><h2>Funciona assim:</h2>
        <div className="steps">
          {[
            ["1","📩","Receba o acesso","Material digital disponível após a compra."],
            ["2","🥃","Escolha uma receita","Explore as receitas e escolha seu próximo sabor."],
            ["3","🍋","Prepare em casa","Separe os ingredientes e siga as orientações da receita."],
            ["4","📸","Fotografe","Registre os detalhes da sua criação artesanal."],
            ["5","💰","Compartilhe","Celebre os sabores brasileiros com responsabilidade."]
          ].map(([n,icon,title,text])=><article key={n}><span className="step-icon">{n}{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="testimonials section">
        <div className="section-kicker">RESULTADOS COMPARTILHADOS</div>
        <h2>Veja o que dizem sobre o material:</h2>
        <p>Confira os relatos sobre as receitas de cachaças artesanais.</p>
        <div className="testimonial-grid">
          {["“Material muito organizado e fácil de consultar. Gostei bastante da variedade de receitas.”","“As receitas e os guias extras deixam o material bem completo para quem quer testar sabores diferentes.”","“Gostei de ter tudo reunido em um único material e poder consultar pelo celular.”"].map((t,i)=><div className="quote" key={i}><div className="stars">★★★★★</div><p>{t}</p><strong>Cliente verificado</strong></div>)}
        </div>
      </section>

      <section className="bonus dark-section">
        <div className="section-kicker">CONTEÚDO EXTRA INCLUSO NO KIT COMPLETO</div>
        <h2>Uma coleção completa. Cinco bônus para ir além.</h2>
        <p className="section-intro">Do cuidado com a sua cachaça à combinação perfeita à mesa: conheça os materiais que acompanham o Kit Completo.</p>
        <div className="bonus-grid">
          {bonuses.map(([tag,img,title,desc])=><article className="bonus-card" key={img}><span>{tag}</span><img src={IMG+img} alt={"Capa do "+title}/><h3>{title}</h3><p>{desc}</p><b>BÔNUS GRÁTIS NO KIT</b><div className="bonus-price"><s>R$18,00</s> <strong>POR R$0,00</strong></div><small>Incluso no Kit Completo</small></article>)}
        </div>
        <div className="bonus-total">Valor total dos 5 bônus: <s>R$90,00</s><br/><strong>VOCÊ PAGA PELOS 5 BÔNUS</strong><br/><b>R$0,00</b><span>Todos inclusos na compra do Kit Completo, sem custo adicional.</span></div>
      </section>

      <section className="secure section">
        <div className="security-card"><h3>🔒 PAGAMENTO 100% SEGURO</h3><p>O Pix será identificado no nome de <strong>CAKTO PAY LTDA</strong> responsável financeiro</p></div>
      </section>

      <section className="offer section" id="oferta">
        <div className="section-kicker">⏰ OFERTA POR TEMPO LIMITADO</div>
        <h2>Escolha como quer começar hoje:</h2>
        <div className="plans">
          <article className="plan simple"><h3>40 RECEITAS DE CACHAÇAS</h3><ul><li>Material 100% digital</li><li>Acesso imediato após a compra</li></ul><div className="price">R$10,00</div><a className="cta" href={CAKTO_40}>QUERO 40 RECEITAS</a></article>
          <article className="plan featured"><div className="badge">⭐ MELHOR CUSTO-BENEFÍCIO</div><img src={IMG+"mockup-novo-800-q80.webp"} alt="Kit completo com mais de 150 receitas de cachaças artesanais"/><h3>KIT COMPLETO +150 RECEITAS</h3><p>Para quem quer explorar a tradição da cachaça, descobrir novos sabores e ter um repertório completo sempre à mão.</p><h4>Você recebe:</h4><ul><li>+150 receitas de cachaças artesanais</li><li>Manual de Higiene e de Conservação</li><li>Guia de Precificação e Apresentação Profissional</li><li>50 Drinks e Coquetéis</li><li>Guia de Madeiras e Sabores</li><li>Guia de Harmonização</li><li>Material 100% digital</li><li>Acesso imediato</li><li>Garantia de 7 dias</li></ul><s>R$97,00</s><div className="installments">5x de <strong>R$4,98</strong></div><div className="cash">ou <strong>R$24,90 à vista</strong></div><a className="cta" href={CAKTO_FULL}>QUERO O KIT COMPLETO POR R$24,90</a><small>Pagamento único • Acesso imediato • Garantia de 7 dias</small></article>
        </div>
      </section>

      <section className="payment section">
        <h3>🔒 Formas de pagamento</h3><p>Cartão de crédito em até 5x sem juros ou Pix aprovado na hora</p>
        <div className="pay-icons"><span>VISA</span><span>mastercard</span><span>ELO</span><span>PIX</span></div>
        <img src={IMG+"selo-compra-segura-600.webp"} alt="Compra segura, satisfação garantida e privacidade protegida" className="seal"/>
        <img src={IMG+"garantia-7-dias-risco-zero-420.webp"} alt="Selo de garantia de 7 dias com risco zero" className="guarantee-img"/>
      </section>

      <section className="risk section"><div className="section-kicker">🛡️ VOCÊ COMPRA SEM RISCO</div><h2>Você tem 7 dias para conhecer o material</h2><p>Experimente as receitas e, dentro do prazo, solicite o reembolso conforme as condições da plataforma.</p></section>

      <FAQ />
      <section className="final-cta"><h2>Leve a tradição e os sabores do Brasil para suas próprias receitas.</h2><a className="cta" href="#oferta">🥃 QUERO ACESSO ÀS +150 RECEITAS</a></section>
      <footer>© 2026 — +150 Receitas de Cachaças Artesanais<br/><small>Material digital educacional destinado a maiores de 18 anos. Aprecie com moderação.</small></footer>
    </main>
  );
}

function FAQ() {
  const items = [
    ["Preciso ter experiência para acompanhar?","Não. O material foi organizado para consulta prática, com receitas e orientações apresentadas de forma simples."],
    ["Quais sabores vou encontrar?","Você encontrará diferentes combinações, infusões com frutas, licores e sugestões variadas."],
    ["O que está incluído no Kit Completo?","São mais de 150 receitas e os cinco bônus descritos nesta página."],
    ["Vou receber garrafas ou um livro físico?","Não. O produto é 100% digital."],
    ["Como recebo o material?","O acesso é disponibilizado após a confirmação da compra."],
    ["Funciona no celular?","Sim. O material digital pode ser consultado pelo celular."],
    ["Tem garantia?","Sim. O Kit Completo possui garantia de 7 dias, conforme as condições da plataforma."]
  ];
  return <section className="faq section"><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>Dúvidas frequentes</h2>{items.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>
}
