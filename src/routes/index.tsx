import { createFileRoute } from "@tanstack/react-router";
import hero from "../assets/hero-100-transparent-0hmj8zo-.png.asset.json";
import planBasic from "../assets/plano-basico-100.png.asset.json";
import planPremium from "../assets/plano-premium-100.png.asset.json";
import recipe1 from "../assets/recipe-1.webp.asset.json";
import recipe2 from "../assets/recipe-2.webp.asset.json";
import recipe3 from "../assets/recipe-3.webp.asset.json";
import recipe4 from "../assets/recipe-4.webp.asset.json";
import recipe5 from "../assets/recipe-5.webp.asset.json";
import recipe6 from "../assets/recipe-6.webp.asset.json";
import recipe7 from "../assets/recipe-7.webp.asset.json";
import recipe8 from "../assets/recipe-8.webp.asset.json";
import recipe9 from "../assets/recipe-9.webp.asset.json";
import recipe10 from "../assets/recipe-10.webp.asset.json";
import recipe11 from "../assets/recipe-11.webp.asset.json";
import recipe12 from "../assets/recipe-12.webp.asset.json";
import bonus1 from "../assets/bonus-1.webp.asset.json";
import bonus2 from "../assets/bonus-2.webp.asset.json";
import bonus3 from "../assets/bonus-3.webp.asset.json";
import bonus4 from "../assets/bonus-4.webp.asset.json";
import bonus5 from "../assets/bonus-5.webp.asset.json";
import avatar1 from "../assets/avatar-1.jpg.asset.json";
import avatar2 from "../assets/avatar-2.jpg.asset.json";
import avatar3 from "../assets/avatar-3.jpg.asset.json";
import avatar4 from "../assets/avatar-4.jpg.asset.json";
import avatar5 from "../assets/avatar-5.jpg.asset.json";
import avatar6 from "../assets/avatar-6.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100 Cafés da Manhã Saudáveis para Substituir o Pão" },
      { name: "description", content: "100 opções práticas, rápidas e saudáveis para variar seu café da manhã sem depender do pão." },
      { property: "og:title", content: "100 Cafés da Manhã Saudáveis para Substituir o Pão" },
      { property: "og:description", content: "Receitas simples e deliciosas para transformar seu café da manhã." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const recipes = [
  [recipe1.url, "Escondidinho Cremoso", "175 kcal"], [recipe2.url, "Hambúrguer Artesanal", "230 kcal"],
  [recipe3.url, "Panqueca Recheada", "125 kcal"], [recipe4.url, "Torta de Carne Moída", "175 kcal"],
  [recipe5.url, "Bolinho de Carne", "330 kcal"], [recipe6.url, "Carne Moída com Batata", "280 kcal"],
  [recipe7.url, "Rocambole Recheado", "325 kcal"], [recipe8.url, "Lasanha de Frigideira", "195 kcal"],
  [recipe9.url, "Macarrão Molho Especial", "195 kcal"], [recipe10.url, "Esfiha de Carne", "180 kcal"],
  [recipe11.url, "Kafta Grelhada", "180 kcal"], [recipe12.url, "Berinjela Recheada", "275 kcal"],
];

const bonuses = [
  [bonus1.url, "+50 Sobremesas Zero Açúcar", "R$ 24,90"],
  [bonus2.url, "Planejamento Semanal Pronto", "R$ 19,90"],
  [bonus3.url, "Guia de Lanches Saudáveis", "R$ 17,90"],
  [bonus4.url, "Lista de Compras Econômica da Semana", "R$ 19,90"],
  [bonus5.url, "Café da Manhã para Desinchar e Começar o Dia Mais Leve", "R$ 21,90"],
];

const reviews = [
  [avatar1.url, "Patrícia Almeida", "18 de fevereiro de 2026", "“Fiz a crepioca de frango e minha família pediu pra repetir no dia seguinte!”", "103"],
  [avatar2.url, "Roberta Mendes", "27 de fevereiro de 2026", "“MARAVILHOSO, muita variedade, tá me ajudando bastante na cozinha. Nem acredito que ele é esse valor.”", "98"],
  [avatar3.url, "Rafael Cardoso", "10 de janeiro de 2026", "“Gostei muito porque não parece aquelas receitas difíceis de dieta. São ideias práticas mesmo, com ingredientes que eu já tenho em casa”", "87"],
  [avatar4.url, "Juliana Ribeiro", "5 de fevereiro de 2026", "“Nunca imaginei que dava pra fazer tanta coisa no café da manhã! Já testei 4 receitas e todas ficaram uma delícia!”", "142"],
  [avatar5.url, "Bruno Martins", "23 de janeiro de 2026", "“Eu queria diminuir o pão, mas não sabia o que comer no lugar. O material me ajudou demais, principalmente pelas receitas rápidas”", "76"],
  [avatar6.url, "Camila Nogueira", "12 de março de 2026", "“Comprei e já fiz a Vitamina de Morango com Banana... ficou incrível! Recomendo pra quem quer economizar e comer bem logo de manhã.”", "119"],
];

const faqs = [
  ["Como vou receber o material?", "Após a confirmação do pagamento, você receberá o acesso ao material imediatamente no seu e-mail."],
  ["O livro pode ser impresso?", "Sim. Você pode acessar pelo celular, tablet ou computador e também imprimir o material se preferir."],
  ["Tem receitas para quem está de dieta?", "Sim. O guia reúne opções leves, nutritivas e variadas para diferentes objetivos alimentares."],
  ["Não sei cozinhar muito bem... serve pra mim?", "Serve sim. As receitas foram pensadas para serem simples, rápidas e feitas com ingredientes acessíveis."],
  ["Posso acessar pelo celular?", "Sim. O material funciona em qualquer celular, tablet ou computador."],
  ["E se eu não gostar? Tem garantia?", "Você tem 30 dias para testar. Se não gostar, pode solicitar o reembolso integral."],
];

function Cta() {
  return <a className="cta" href="#ofertas">QUERO AS RECEITAS AGORA <span>→</span></a>;
}

function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading"><span>{eyebrow}</span><h2>{children}</h2></div>;
}

function Index() {
  return <main>
    <div className="promo">🔥 ESSA PROMOÇÃO ACABA HOJE!</div>
    <section className="hero-pattern hero">
      <div className="container hero-inner">
        <span className="tag">CHEGA DE COMER PÃO TODOS OS DIAS</span>
        <h1><em>100 CAFÉS DA MANHÃ SAUDÁVEIS</em> <strong>PARA<br /> SUBSTITUIR O PÃO</strong></h1>
        <img className="hero-image" src={hero.url} alt="Livro digital 100 Cafés da Manhã com acesso pelo celular" />
        <p className="lead">Descubra 100 opções diferentes para variar seu café da manhã de forma saudável, prática e saborosa, sem depender do pão e sem cair na mesmice.</p>
        <Cta />
        <p className="secure">🔒 Compra segura • Acesso imediato • 30 dias de garantia</p>
        <div className="stats"><div><b>2.400+</b><span>Compradores</span></div><div><b>100</b><span>Receitas</span></div><div><b>30 DIAS</b><span>Garantia</span></div></div>
      </div>
    </section>

    <section className="audience"><div className="container"><Heading eyebrow="FEITO PARA VOCÊ">PARA QUEM É ESTE GUIA?</Heading>
      <div className="check-grid">{["Não quer depender do pão no café da manhã todos os dias","Busca opções simples e saudáveis","Não sabe o que comer no lugar do pão","Quer opções completas para variar","Quer ideias rápidas para a semana"].map(x=><div key={x}><i>✓</i>{x}</div>)}</div>
    </div></section>

    <section className="routine"><div className="container"><Heading eyebrow="SIMPLES DE VERDADE">TUDO PENSADO PARA FACILITAR SUA ROTINA</Heading>
      <div className="feature-grid">
        <article><div className="feature-icon">⏱</div><small>APENAS 5 MIN</small><h3>Receitas prontas em poucos minutos</h3><p>Opções rápidas para você começar o dia bem, até na rotina mais corrida.</p></article>
        <article><div className="feature-icon">◎</div><small>SEM COMPLICAÇÕES</small><h3>Ingredientes simples e acessíveis</h3><p>Baratos, fáceis de encontrar e que você provavelmente já tem em casa.</p></article>
        <article><div className="feature-icon">▣</div><small>ONDE VOCÊ QUISER</small><h3>Acesso em qualquer dispositivo</h3><p>Celular, tablet, computador ou impressão. Consulte sempre que precisar.</p></article>
      </div>
    </div></section>

    <section className="recipes"><div className="container wide"><Heading eyebrow="ALGUMAS DAS DELÍCIAS">VEJA O QUE VOCÊ VAI PREPARAR</Heading>
      <div className="recipe-grid">{recipes.map(([src,name,kcal])=><article className="recipe" key={name}><div><img src={src} alt={name}/><span>{kcal}</span></div><h3>{name}</h3></article>)}</div>
      <Cta />
    </div></section>

    <section className="bonuses"><div className="container wide"><Heading eyebrow="OFERTA ESPECIAL">VOCÊ TAMBÉM RECEBE 5 BÔNUS EXCLUSIVOS</Heading>
      <p className="section-copy">Materiais complementares para simplificar sua rotina, organizar a semana e tornar sua alimentação ainda mais variada.</p>
      <div className="bonus-grid">{bonuses.map(([src,name,price],i)=><article className="bonus" key={name}><img src={src} alt={name}/><div><small>BÔNUS {i+1}</small><h3>{name}</h3><p>De <s>{price}</s> por</p><b>GRÁTIS</b></div></article>)}</div>
      <div className="bonus-total">Valor total dos bônus: <s>R$ 96,00</s><strong>HOJE INCLUSOS GRATUITAMENTE!</strong></div>
    </div></section>

    <section className="reviews"><div className="container wide"><Heading eyebrow="QUEM COMPROU, APROVOU">RESULTADOS DE QUEM JÁ ESTÁ VARIANDO O CAFÉ DA MANHÃ</Heading>
      <div className="review-grid">{reviews.map(([src,name,date,text,likes])=><article className="review" key={name}><div className="review-head"><img src={src} alt={name}/><div><h3>{name}</h3><span className="stars">★★★★★</span><small>{date}</small></div></div><p>{text}</p><footer>♡ &nbsp; {likes} pessoas acharam útil</footer></article>)}</div>
    </div></section>

    <section className="offers" id="ofertas"><div className="container"><Heading eyebrow="ESCOLHA SEU ACESSO">COMECE HOJE MESMO</Heading>
      <div className="plan-grid">
        <Plan title="PLANO BÁSICO" image={planBasic.url} old="R$ 67,00" price="17,90" href="https://pay.hotmart.com/K106157682V?checkoutMode=10" items={["Livro 100 Cafés da Manhã","Acesso imediato"]}/>
        <Plan featured title="PLANO PREMIUM" image={planPremium.url} old="R$ 147,00" price="27,90" href="https://pay.hotmart.com/U106157894R?checkoutMode=10" items={["Livro 100 Cafés da Manhã","Todos os 5 Bônus","Acesso vitalício","Atualizações"]}/>
      </div>
    </div></section>

    <section className="guarantee"><div className="container guarantee-inner"><div className="seal"><b>30</b><span>DIAS DE<br/>GARANTIA</span></div><div><span>Risco zero</span><h2>GARANTIA INCONDICIONAL DE 30 DIAS</h2><p>Você pode acessar todo o material e testar por 30 dias. Se por qualquer motivo não gostar, basta solicitar o reembolso e devolveremos 100% do seu dinheiro.</p></div></div></section>

    <section className="faq"><div className="container"><Heading eyebrow="TIRE SUAS DÚVIDAS">PERGUNTAS FREQUENTES</Heading><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="final"><div className="container"><h2>PRONTA PARA TRANSFORMAR SEU CAFÉ DA MANHÃ?</h2><p>Escolha seu plano e receba o acesso imediatamente após a confirmação do pagamento.</p><Cta/><small>🔒 Pagamento 100% seguro</small></div></section>
    <footer className="site-footer"><p>© 2026 100 Cafés da Manhã Saudáveis. Todos os direitos reservados.</p><p>Este produto não substitui o acompanhamento de um profissional de saúde.</p></footer>
  </main>;
}

function Plan({ title,image,old,price,href,items,featured=false }: {title:string;image:string;old:string;price:string;href:string;items:string[];featured?:boolean}) {
  return <article className={`plan ${featured ? "featured" : ""}`}>{featured && <div className="best">MAIS VENDIDO • RECOMENDADO</div>}<h3>{title}</h3><img src={image} alt={title}/><ul>{items.map(x=><li key={x}>✓ {x}</li>)}</ul><p>De <s>{old}</s> por apenas</p><div className="price"><sup>R$</sup><b>{price}</b></div><small>Pagamento único • Sem mensalidades</small><a href={href}>ESCOLHER ESTE PLANO <span>→</span></a></article>;
}