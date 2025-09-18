import PageHeader from "@/app/components/PageHeader";

export default function TarifsPage() {
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
        <PageHeader title="Tarifs & fonctionnement" />
        <section style={{
          background: "white",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}>
          <p>
            Découvrez nos tarifs et comment ZYPP fonctionne: solution de mobilité urbaine à Montpellier pour des déplacements rapides en trottinette électrique en libre‑service.
          </p>
        </section>

        <section style={{
          background: "white",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          marginTop: 16,
        }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Notre service</h2>
          <p>ZYPP est une startup proposant la location de trottinettes électriques en libre-service 24h/24. Elle vient d&apos;avoir l&apos;autorisation de s&apos;installer sur la ville de Montpellier dès janvier 2025 avec un parc de 1000 trottinettes sans borne d&apos;attache.</p>
          <p>Ses trottinettes électriques seront accessibles au moyen d&apos;un simple smartphone muni de l&apos;application.</p>
        </section>

        <section style={{
          background: "white",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          marginTop: 16,
        }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Tarifs – location trottinette Montpellier</h2>
          <p>Le tarif : 1 euro la location puis 15 centimes par minute. Un trajet d&apos;un quart d&apos;heure coûtera donc 3,25 euros.</p>
        </section>

        <section style={{
          background: "white",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          marginTop: 16,
        }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Comment ça marche</h2>
          <p>Une fois le trajet effectué, on dépose la trottinette sur un trottoir dans une zone de dépose banalisée (vérifiable sur l&apos;application mobile grâce à la géolocalisation) et on prend soin de la verrouiller via l&apos;application pour conclure la location.</p>
          <p>Les trottinettes seront ramassées toutes les nuits de 21h à 6h du matin pour être rechargées et entretenues si besoin.</p>
        </section>

        <section style={{
          background: "white",
          color: "#111827",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          marginTop: 16,
        }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Devenir rechargeur</h2>
          <p>Afin de minimiser les ressources nécessaires pour la recharge des trottinettes, ZYPP cherche à recruter des particuliers prêts à réaliser la recharge à leur domicile en échange d&apos;une rémunération ou de tarifs préférentiels sur la location.</p>
        </section>
      </div>
    </main>
  );
}


