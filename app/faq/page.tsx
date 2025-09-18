import PageHeader from "@/app/components/PageHeader";

export default function FAQPage() {
  return (
    <main style={{
      padding: "40px 16px",
      minHeight: "100dvh",
      backgroundColor: "var(--background)",
      background: `
        radial-gradient(80% 40% at 50% 0%, rgba(11,15,26,0.6) 0%, rgba(11,15,26,0) 60%),
        linear-gradient(180deg, rgba(17,24,39,0.65) 0%, rgba(17,24,39,0) 55%)
      `,
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <PageHeader title="FAQ – trottinette électrique libre‑service" />
        <section style={{
          background: "white",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}>
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>Comment fonctionne ZYPP ?</h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>Téléchargez l&apos;application ZYPP sur votre smartphone, localisez une trottinette disponible près de vous, déverrouillez-la via l&apos;app, effectuez votre trajet, puis déposez-la dans une zone autorisée et verrouillez-la pour terminer la location.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>Quels sont les tarifs ?</h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>1 euro pour débloquer la trottinette, puis 15 centimes par minute d&apos;utilisation. Un trajet de 15 minutes coûte donc 3,25 euros au total.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>Où puis-je déposer la trottinette ?</h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>Vous pouvez déposer la trottinette dans les zones de dépose banalisées indiquées sur l&apos;application grâce à la géolocalisation. Évitez les trottoirs étroits et les zones interdites.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>Quand les trottinettes sont-elles rechargées ?</h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>Les trottinettes sont ramassées toutes les nuits entre 21h et 6h du matin pour être rechargées et entretenues si nécessaire.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>Comment devenir rechargeur ?</h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>ZYPP recrute des particuliers pour recharger les trottinettes à domicile en échange d&apos;une rémunération ou de tarifs préférentiels. Remplissez le formulaire &quot;Devenir rechargeur&quot; pour candidater.</p>
          </div>

          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>Quand ZYPP arrive-t-il à Montpellier ?</h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>ZYPP sera disponible à Montpellier dès janvier 2025 avec un parc de 1000 trottinettes électriques en libre-service 24h/24.</p>
          </div>
        </section>
      </div>
    </main>
  );
}


