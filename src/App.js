import React, { useState } from "react";

const APP_URL = "https://morogo-delivery-flow.base44.app";
const PARTNER_EMAIL = "contact@jibgo.ma";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80";
const CUSTOMER_IMAGE =
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80";
const STORE_IMAGE =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80";
const DRIVER_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80";

const colors = {
  bg: "#F6F1EA",
  bgSoft: "#FBF8F3",
  card: "#FFFFFF",
  text: "#153C43",
  muted: "#6E777B",
  teal: "#0B6A67",
  tealDark: "#084D53",
  gold: "#D4A11E",
  border: "#E6DDD2",
  shadow: "0 18px 40px rgba(21,60,67,0.08)",
};

const translations = {
  English: {
    badge: "Built for Morocco",
    openApp: "Open App",
    partner: "Partner With Us",
    navWhy: "Why Jibgo",
    navCustomers: "Customers",
    navStores: "Stores",
    navDrivers: "Drivers",
    title: "Everything you need, delivered.",
    subtitle:
      "Jibgo connects customers, stores, and drivers through one smooth delivery experience built for real daily life across Morocco.",
    stats1: "Connected delivery ecosystem",
    stats2: "Core categories supported",
    stats3: "Main user roles",
    stats4: "Built for mobile-first access",
    whyTitle: "Why Jibgo",
    whyText:
      "A local-first delivery platform for food, groceries, beauty, fashion, and more — designed for Morocco with a cleaner, simpler, mobile-first experience.",
    feature1: "One App, More Choice",
    feature1Text:
      "Restaurants, groceries, beauty, fashion, and daily essentials in one place.",
    feature2: "Fast Local Delivery",
    feature2Text:
      "Reliable delivery designed around neighborhoods, local stores, and everyday needs.",
    feature3: "Simple Tracking",
    feature3Text:
      "Customers, stores, and drivers stay informed from order to delivery.",
    customersTitle: "For Customers",
    customersText:
      "Browse nearby stores, discover categories, place orders in a few taps, and enjoy a smooth delivery experience designed around everyday local convenience.",
    storesTitle: "For Stores & Partners",
    storesText:
      "Receive digital orders, manage products clearly, and reach more customers with tools built for real store operations, onboarding, and growth.",
    driversTitle: "For Drivers",
    driversText:
      "Work flexibly, manage deliveries clearly, and earn with a simple workflow built for real delivery operations in Moroccan cities and neighborhoods.",
    exploreCustomer: "Explore Customer App",
    exploreStore: "Explore Store Tools",
    exploreDriver: "Explore Driver Flow",
    howTitle: "How Jibgo works",
    how1: "Customers discover local stores and place orders in seconds.",
    how2: "Stores receive and manage orders through a clean workflow.",
    how3: "Drivers deliver quickly with clear order updates and routing.",
    ctaTitle: "Ready to grow with Jibgo?",
    ctaText:
      "Whether you want to order, sell, or deliver, Jibgo helps you move faster with one connected platform.",
    faqTitle: "Frequently asked questions",
    faq1q: "What is Jibgo?",
    faq1a:
      "Jibgo is a multi-category delivery platform built for Morocco, connecting customers, stores, and drivers.",
    faq2q: "Who can join Jibgo?",
    faq2a:
      "Customers, stores, and delivery drivers can all join the ecosystem depending on their role.",
    faq3q: "How can stores partner with Jibgo?",
    faq3a:
      "Stores can contact us directly through the partner button or the contact email shown below.",
    contactTitle: "Get in touch",
    contactText:
      "For partnerships, store onboarding, driver applications, or support, contact us directly.",
    footer: "© JIBGO — All rights reserved.",
  },

  Français: {
    badge: "Conçu pour le Maroc",
    openApp: "Ouvrir l'app",
    partner: "Devenir partenaire",
    navWhy: "Pourquoi Jibgo",
    navCustomers: "Clients",
    navStores: "Magasins",
    navDrivers: "Livreurs",
    title: "Tout ce dont vous avez besoin, livré.",
    subtitle:
      "Jibgo connecte clients, magasins et livreurs à travers une expérience de livraison fluide pensée pour la vie quotidienne au Maroc.",
    stats1: "Écosystème de livraison connecté",
    stats2: "Catégories principales prises en charge",
    stats3: "Rôles utilisateurs principaux",
    stats4: "Pensé pour le mobile",
    whyTitle: "Pourquoi Jibgo",
    whyText:
      "Une plateforme locale pour la restauration, les courses, la beauté, la mode et plus, conçue pour le Maroc avec une expérience plus simple et mobile-first.",
    feature1: "Une seule app, plus de choix",
    feature1Text:
      "Restaurants, courses, beauté, mode et essentiels du quotidien au même endroit.",
    feature2: "Livraison locale rapide",
    feature2Text:
      "Une livraison fiable pensée pour les quartiers, les commerces locaux et les besoins quotidiens.",
    feature3: "Suivi simple",
    feature3Text:
      "Clients, magasins et livreurs restent informés du début jusqu’à la livraison.",
    customersTitle: "Pour les clients",
    customersText:
      "Parcourez les magasins proches, découvrez les catégories, commandez en quelques clics et profitez d’une expérience de livraison fluide.",
    storesTitle: "Pour les magasins & partenaires",
    storesText:
      "Recevez des commandes digitales, gérez vos produits clairement et atteignez plus de clients avec des outils conçus pour de vraies opérations.",
    driversTitle: "Pour les livreurs",
    driversText:
      "Travaillez librement, gérez vos livraisons clairement et gagnez avec un système simple adapté à de vraies opérations.",
    exploreCustomer: "Découvrir l'app client",
    exploreStore: "Découvrir les outils magasin",
    exploreDriver: "Découvrir le parcours livreur",
    howTitle: "Comment fonctionne Jibgo",
    how1: "Les clients découvrent les magasins locaux et commandent en quelques secondes.",
    how2: "Les magasins reçoivent et gèrent les commandes via un flux clair.",
    how3: "Les livreurs livrent rapidement avec des mises à jour claires.",
    ctaTitle: "Prêt à grandir avec Jibgo ?",
    ctaText:
      "Que vous souhaitiez commander, vendre ou livrer, Jibgo vous aide à avancer plus vite avec une plateforme connectée.",
    faqTitle: "Questions fréquentes",
    faq1q: "Qu’est-ce que Jibgo ?",
    faq1a:
      "Jibgo est une plateforme de livraison multi-catégories conçue pour le Maroc, reliant clients, magasins et livreurs.",
    faq2q: "Qui peut rejoindre Jibgo ?",
    faq2a:
      "Les clients, magasins et livreurs peuvent tous rejoindre l’écosystème selon leur rôle.",
    faq3q: "Comment un magasin peut-il devenir partenaire ?",
    faq3a:
      "Les magasins peuvent nous contacter directement via le bouton partenaire ou l’adresse email ci-dessous.",
    contactTitle: "Contactez-nous",
    contactText:
      "Pour les partenariats, l’onboarding magasins, les candidatures livreurs ou le support, contactez-nous directement.",
    footer: "© JIBGO — Tous droits réservés.",
  },

  العربية: {
    badge: "مصمم للمغرب",
    openApp: "افتح التطبيق",
    partner: "كن شريكاً",
    navWhy: "لماذا Jibgo",
    navCustomers: "العملاء",
    navStores: "المتاجر",
    navDrivers: "السائقون",
    title: "كل ما تحتاجه، يصلك.",
    subtitle:
      "يربط Jibgo العملاء والمتاجر والسائقين من خلال تجربة توصيل سلسة مصممة للحياة اليومية في المغرب.",
    stats1: "منظومة توصيل مترابطة",
    stats2: "فئات أساسية مدعومة",
    stats3: "أدوار مستخدمين رئيسية",
    stats4: "مصمم للهاتف أولاً",
    whyTitle: "لماذا Jibgo",
    whyText:
      "منصة محلية للطعام والبقالة والجمال والأزياء وأكثر، مصممة للمغرب بتجربة أبسط وأكثر عملية على الهاتف.",
    feature1: "تطبيق واحد، خيارات أكثر",
    feature1Text: "مطاعم، بقالة، جمال، أزياء واحتياجات يومية في مكان واحد.",
    feature2: "توصيل محلي سريع",
    feature2Text: "توصيل موثوق مصمم للأحياء المحلية والمتاجر واحتياجات اليومي.",
    feature3: "تتبع بسيط",
    feature3Text:
      "يبقى العملاء والمتاجر والسائقون على اطلاع من الطلب حتى التسليم.",
    customersTitle: "للعملاء",
    customersText:
      "تصفح المتاجر القريبة، اكتشف الفئات، اطلب في بضع خطوات، واستمتع بتجربة توصيل سلسة ومريحة.",
    storesTitle: "للمتاجر والشركاء",
    storesText:
      "استقبل الطلبات رقمياً، أدر المنتجات بوضوح، ووصل إلى عملاء أكثر بأدوات مبنية لعمليات حقيقية.",
    driversTitle: "للسائقين",
    driversText:
      "اعمل بمرونة، أدر التوصيلات بوضوح، واربح من خلال نظام بسيط وعملي في المدن والأحياء المغربية.",
    exploreCustomer: "اكتشف تطبيق العملاء",
    exploreStore: "اكتشف أدوات المتاجر",
    exploreDriver: "اكتشف تجربة السائق",
    howTitle: "كيف يعمل Jibgo",
    how1: "يكتشف العملاء المتاجر المحلية ويطلبون خلال ثوانٍ.",
    how2: "تستقبل المتاجر الطلبات وتديرها من خلال سير عمل واضح.",
    how3: "يوصل السائقون الطلبات بسرعة مع تحديثات واضحة.",
    ctaTitle: "جاهز للنمو مع Jibgo؟",
    ctaText:
      "سواء كنت تريد الطلب أو البيع أو التوصيل، يساعدك Jibgo على التحرك أسرع عبر منصة مترابطة واحدة.",
    faqTitle: "الأسئلة الشائعة",
    faq1q: "ما هو Jibgo؟",
    faq1a:
      "Jibgo هو منصة توصيل متعددة الفئات مصممة للمغرب وتربط العملاء والمتاجر والسائقين.",
    faq2q: "من يمكنه الانضمام إلى Jibgo؟",
    faq2a:
      "يمكن للعملاء والمتاجر وسائقي التوصيل جميعاً الانضمام حسب دور كل طرف.",
    faq3q: "كيف يمكن للمتجر أن يصبح شريكاً؟",
    faq3a:
      "يمكن للمتاجر التواصل معنا مباشرة عبر زر الشراكة أو البريد الإلكتروني أدناه.",
    contactTitle: "تواصل معنا",
    contactText:
      "للشراكات، وانضمام المتاجر، وطلبات السائقين أو الدعم، تواصل معنا مباشرة.",
    footer: "© JIBGO — جميع الحقوق محفوظة.",
  },

  Amazigh: {
    badge: "Ittwabna i Lmghrib",
    openApp: "Ldi l'app",
    partner: "Ili d acarik",
    navWhy: "Mayɣ Jibgo",
    navCustomers: "Imsaɣen",
    navStores: "Tiḥanutin",
    navDrivers: "Inebgawen",
    title: "Akk ayen teḥtajed, ad ak-id yawi.",
    subtitle:
      "Jibgo issdukkel imsaɣen, tiḥanutin d inebgawen s usiweḍ isehlan i tudert n yal ass di Maroc.",
    stats1: "Anagraw n usiweḍ yeqqnen",
    stats2: "Taggayin tigejdanin yettwasefraken",
    stats3: "Kraḍ n twuriwin tigejdanin",
    stats4: "Yettwabna i mobile",
    whyTitle: "Mayɣ Jibgo",
    whyText:
      "Talɣut tamurtant i učči, lmaqla, ljamal, lmoda d wiyaḍ, tettwabna i Maroc s uskar ifehmen u d mobile-first.",
    feature1: "Yiwen l'app, ugar n tixṭirin",
    feature1Text:
      "Imaṭʿamen, lmaqla, ljamal, lmoda d yessefk-ik n wass deg yiwen umkan.",
    feature2: "Asiweḍ arurad n tmurt",
    feature2Text: "Asiweḍ yettwamen i yimezdaɣ, tiḥanutin d yessefk n yal ass.",
    feature3: "Aḍfaṛ isehlan",
    feature3Text:
      "Imsaɣen, tiḥanutin d inebgawen qqimen ɣef ubrid seg usentem ar usiweḍ.",
    customersTitle: "I yimsaɣen",
    customersText:
      "Wali tiḥanutin i iqerben, af taggayin, suter s waṭas, u zhu s usiweḍ isehlan.",
    storesTitle: "I tiḥanutin d icarraken",
    storesText:
      "Rmes tlatanin s umata, sefrek iferdisen-ik s usefham, u awḍed ar ugar n yimsaɣen s ifecka n lkhidma.",
    driversTitle: "I inebgawen",
    driversText:
      "Xdem s tlelli, sefrek tawṣilin s usefham, u rbeḥ s unagraw ifehmen di Maroc.",
    exploreCustomer: "Wali l'app n yimsaɣen",
    exploreStore: "Wali ifecka n tḥanut",
    exploreDriver: "Wali amecwar n unebgi",
    howTitle: "Amek iteddu Jibgo",
    how1: "Imsaɣen ttnafen tiḥanutin timura u sutren deg tasragt.",
    how2: "Tiḥanutin rmesent tlatanin u sefrekent-ten s wudem ifehmen.",
    how3: "Inebgawen sswḍen s lemɣawla s yileqman yeṣfan.",
    ctaTitle: "Theyyad ad tnemɣured d Jibgo?",
    ctaText:
      "Ama tebɣiḍ ad tesutreḍ, ad tezneḍ neɣ ad tawsḍeḍ, Jibgo ad ak-yeǧǧed ad tedduḍ s waṭas deg yiwen umkan.",
    faqTitle: "Isteqsiyen yettwaseqsan aṭas",
    faq1q: "D acu-t Jibgo?",
    faq1a:
      "Jibgo d talɣut n usiweḍ i waṭas n lqsmat tettwabna i Maroc, tessdukkel imsaɣen, tiḥanutin d inebgawen.",
    faq2q: "Anwa izemren ad yeddu d Jibgo?",
    faq2a:
      "Imsaɣen, tiḥanutin d inebgawen zemren ad dduen d unagraw ilmend n twuri-nsen.",
    faq3q: "Amek tezmer tḥanut ad tili d acarik?",
    faq3a:
      "Tiḥanutin zemrent ad aɣ-d nermsent s srid s uqeffal n ucarik neɣ s yimayl ddaw-a.",
    contactTitle: "Nermes-aɣ-d",
    contactText:
      "I icarraken, asnulfu n tḥanutin, isutar n inebgawen neɣ tallalt, nermes-aɣ-d srid.",
    footer: "© JIBGO — akk izerfan ttwḥerzen.",
  },
};

function openApp() {
  window.open(APP_URL, "_blank", "noopener,noreferrer");
}

function partnerNow() {
  window.location.href = `mailto:${PARTNER_EMAIL}?subject=Partner%20with%20JIBGO`;
}

function LogoMark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: 18,
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(11,106,103,1) 0%, rgba(9,86,93,1) 55%, rgba(212,161,30,1) 100%)",
          boxShadow: "0 14px 30px rgba(11,106,103,0.18)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.28) 0, rgba(255,255,255,0) 35%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.18) 0, rgba(255,255,255,0) 28%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 18,
            top: 10,
            width: 18,
            height: 30,
            borderRadius: "10px 10px 14px 14px",
            borderLeft: "5px solid white",
            borderBottom: "5px solid white",
            transform: "skewY(-8deg)",
          }}
        />
      </div>

      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          <span style={{ color: colors.teal }}>Jibg</span>
          <span style={{ color: colors.gold }}>o</span>
        </div>
        <div
          style={{
            fontSize: 11,
            color: colors.muted,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            marginTop: 4,
          }}
        >
          Delivery across Morocco
        </div>
      </div>
    </div>
  );
}

function Button({ children, onClick, secondary = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px 22px",
        borderRadius: 999,
        border: secondary ? `1px solid ${colors.border}` : "none",
        background: secondary ? colors.card : colors.teal,
        color: secondary ? colors.text : "white",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: secondary ? "none" : "0 12px 24px rgba(11,106,103,0.16)",
      }}
    >
      {children}
    </button>
  );
}

function SectionCard({ children, style = {} }) {
  return (
    <div
      style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: 28,
        boxShadow: colors.shadow,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <SectionCard style={{ padding: 24 }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 14,
          background: "linear-gradient(135deg, #0B6A67, #D4A11E)",
          marginBottom: 14,
        }}
      />
      <h3 style={{ margin: "0 0 10px", fontSize: 24, color: colors.text }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: colors.muted, lineHeight: 1.8 }}>{text}</p>
    </SectionCard>
  );
}

function StatCard({ number, label }) {
  return (
    <SectionCard style={{ padding: 22, textAlign: "center" }}>
      <div style={{ fontSize: 30, fontWeight: 800, color: colors.teal }}>
        {number}
      </div>
      <div style={{ marginTop: 8, color: colors.muted }}>{label}</div>
    </SectionCard>
  );
}

function FaqItem({ q, a }) {
  return (
    <SectionCard style={{ padding: 22 }}>
      <h4 style={{ margin: "0 0 10px", fontSize: 20 }}>{q}</h4>
      <p style={{ margin: 0, color: colors.muted, lineHeight: 1.8 }}>{a}</p>
    </SectionCard>
  );
}

function ExploreSection({
  id,
  title,
  text,
  image,
  reverse = false,
  primaryLabel,
  primaryAction,
  secondaryLabel,
  secondaryAction,
}) {
  return (
    <section
      id={id}
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 24px 42px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div style={{ order: reverse ? 2 : 1 }}>
          <SectionCard style={{ padding: 18 }}>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: 430,
                objectFit: "cover",
                borderRadius: 22,
                display: "block",
              }}
            />
          </SectionCard>
        </div>

        <div style={{ order: reverse ? 1 : 2 }}>
          <div
            style={{
              background: colors.bgSoft,
              border: `1px solid ${colors.border}`,
              borderRadius: 28,
              padding: 34,
            }}
          >
            <h2
              style={{
                margin: "0 0 14px",
                fontSize: 42,
                lineHeight: 1.08,
                color: colors.text,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                margin: 0,
                color: colors.muted,
                fontSize: 18,
                lineHeight: 1.9,
              }}
            >
              {text}
            </p>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {primaryLabel ? (
                <Button onClick={primaryAction}>{primaryLabel}</Button>
              ) : null}
              {secondaryLabel ? (
                <Button onClick={secondaryAction} secondary>
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState("English");
  const t = translations[lang];
  const isArabic = lang === "العربية";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        fontFamily:
          'Inter, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(246,241,234,0.88)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <LogoMark />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#why"
              style={{
                textDecoration: "none",
                color: colors.text,
                fontWeight: 700,
              }}
            >
              {t.navWhy}
            </a>
            <a
              href="#customers"
              style={{
                textDecoration: "none",
                color: colors.text,
                fontWeight: 700,
              }}
            >
              {t.navCustomers}
            </a>
            <a
              href="#stores"
              style={{
                textDecoration: "none",
                color: colors.text,
                fontWeight: 700,
              }}
            >
              {t.navStores}
            </a>
            <a
              href="#drivers"
              style={{
                textDecoration: "none",
                color: colors.text,
                fontWeight: 700,
              }}
            >
              {t.navDrivers}
            </a>
            <Button onClick={openApp}>{t.openApp}</Button>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: `1px solid ${colors.border}`,
                background: colors.card,
                color: colors.text,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              <option>English</option>
              <option>Français</option>
              <option>العربية</option>
              <option>Amazigh</option>
            </select>
          </div>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 24px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              marginBottom: 16,
              padding: "10px 16px",
              borderRadius: 999,
              background: "#ECE5DB",
              color: colors.teal,
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            {t.badge}
          </div>

          <h1
            style={{
              margin: "0 0 16px",
              fontSize: 64,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-1.8px",
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: 700,
              color: colors.muted,
              fontSize: 20,
              lineHeight: 1.9,
            }}
          >
            {t.subtitle}
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Button onClick={openApp}>{t.openApp}</Button>
            <Button onClick={partnerNow} secondary>
              {t.partner}
            </Button>
          </div>
        </div>

        <SectionCard style={{ padding: 18 }}>
          <img
            src={HERO_IMAGE}
            alt="Jibgo hero"
            style={{
              width: "100%",
              height: 530,
              objectFit: "cover",
              borderRadius: 22,
              display: "block",
            }}
          />
        </SectionCard>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 42px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
        }}
      >
        <StatCard number="1" label={t.stats1} />
        <StatCard number="4+" label={t.stats2} />
        <StatCard number="3" label={t.stats3} />
        <StatCard number="24/7" label={t.stats4} />
      </section>

      <section
        id="why"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 42px",
        }}
      >
        <h2 style={{ margin: "0 0 14px", fontSize: 44 }}>{t.whyTitle}</h2>
        <p
          style={{
            margin: "0 0 24px",
            maxWidth: 920,
            color: colors.muted,
            fontSize: 18,
            lineHeight: 1.9,
          }}
        >
          {t.whyText}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          <FeatureCard title={t.feature1} text={t.feature1Text} />
          <FeatureCard title={t.feature2} text={t.feature2Text} />
          <FeatureCard title={t.feature3} text={t.feature3Text} />
        </div>
      </section>

      <ExploreSection
        id="customers"
        title={t.customersTitle}
        text={t.customersText}
        image={CUSTOMER_IMAGE}
        primaryLabel={t.exploreCustomer}
        primaryAction={openApp}
      />

      <ExploreSection
        id="stores"
        title={t.storesTitle}
        text={t.storesText}
        image={STORE_IMAGE}
        reverse
        primaryLabel={t.exploreStore}
        primaryAction={partnerNow}
        secondaryLabel={t.partner}
        secondaryAction={partnerNow}
      />

      <ExploreSection
        id="drivers"
        title={t.driversTitle}
        text={t.driversText}
        image={DRIVER_IMAGE}
        primaryLabel={t.exploreDriver}
        primaryAction={partnerNow}
      />

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 42px",
        }}
      >
        <div
          style={{
            background: colors.bgSoft,
            border: `1px solid ${colors.border}`,
            borderRadius: 30,
            padding: 30,
          }}
        >
          <h3 style={{ margin: "0 0 16px", fontSize: 38 }}>{t.howTitle}</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {[t.how1, t.how2, t.how3].map((item) => (
              <SectionCard key={item} style={{ padding: 20 }}>
                <div style={{ color: colors.muted, lineHeight: 1.8 }}>
                  {item}
                </div>
              </SectionCard>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 42px",
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.tealDark}, ${colors.gold})`,
            color: "white",
            borderRadius: 30,
            padding: 34,
          }}
        >
          <h3 style={{ margin: "0 0 14px", fontSize: 40 }}>{t.ctaTitle}</h3>
          <p
            style={{
              margin: "0 0 20px",
              maxWidth: 820,
              lineHeight: 1.9,
              fontSize: 18,
            }}
          >
            {t.ctaText}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button onClick={openApp} secondary>
              {t.openApp}
            </Button>
            <button
              onClick={partnerNow}
              style={{
                padding: "14px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.35)",
                background: "transparent",
                color: "white",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.partner}
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 42px",
        }}
      >
        <h3 style={{ margin: "0 0 16px", fontSize: 36 }}>{t.faqTitle}</h3>

        <div style={{ display: "grid", gap: 14 }}>
          <FaqItem q={t.faq1q} a={t.faq1a} />
          <FaqItem q={t.faq2q} a={t.faq2a} />
          <FaqItem q={t.faq3q} a={t.faq3a} />
        </div>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 56px",
        }}
      >
        <SectionCard style={{ padding: 30, textAlign: "center" }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 32 }}>{t.contactTitle}</h3>
          <p
            style={{
              margin: "0 auto 16px",
              maxWidth: 760,
              color: colors.muted,
              lineHeight: 1.9,
              fontSize: 17,
            }}
          >
            {t.contactText}
          </p>

          <a
            href={`mailto:${PARTNER_EMAIL}?subject=Partner%20with%20JIBGO`}
            style={{
              color: colors.teal,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            {PARTNER_EMAIL}
          </a>
        </SectionCard>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${colors.border}`,
          padding: "30px 24px",
          textAlign: "center",
          color: colors.muted,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LogoMark />
        </div>
        <div style={{ marginTop: 12 }}>{t.footer}</div>
      </footer>
    </div>
  );
}
