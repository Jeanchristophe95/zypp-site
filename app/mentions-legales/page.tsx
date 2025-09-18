import PageHeader from "@/app/components/PageHeader";

export default function MentionsLegalesPage() {
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
        <PageHeader title="Mentions légales" />

        <section style={{ display: 'grid', gap: 16, marginTop: 16 }}>
          <div style={{
            background: 'white', color: '#111827', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: 20, boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
          }}>
            <h2 style={{ margin: 0, marginBottom: 8 }}>Mentions légales – Zypp</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <p style={{ margin: 0 }}><b>Nom de l’entreprise</b> : Zypp Mobilité SAS</p>
                <p style={{ margin: 0 }}><b>Forme juridique</b> : SAS</p>
                <p style={{ margin: 0 }}><b>Adresse</b> : 12, rue du Faubourg Saint-Antoine, 75012 Paris</p>
                <p style={{ margin: 0 }}><b>RCS</b> : Paris B 909 876 543</p>
              </div>
              <div>
                <p style={{ margin: 0 }}><b>SIRET</b> : 909 876 543 00019</p>
                <p style={{ margin: 0 }}><b>Capital social</b> : 200 000 €</p>
                <p style={{ margin: 0 }}><b>Directeur de la publication</b> : Claire Dubois</p>
                <p style={{ margin: 0 }}><b>Contact</b> : contact@zypp.com · +33 1 45 67 89 01</p>
              </div>
            </div>
            <p style={{ marginTop: 12 }}><b>Hébergeur</b> : OVH SAS, 2 rue Kellermann, 59100 Roubaix, France – Tél. : +33 9 72 10 10 07</p>
          </div>

          <details style={{
            background: 'white', color: '#111827', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: 16, boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--primary)' }}>Conditions Générales d’Utilisation (CGU)</summary>
            <ul style={{ lineHeight: 1.6, marginTop: 12 }}>
              <li><b>Objet</b> : Définir les conditions d’accès et d’utilisation de l’application Zypp et du site www.zypp.com</li>
              <li><b>Accès</b> : Réservé aux personnes de 14 ans minimum, compte obligatoire</li>
              <li><b>Propriété intellectuelle</b> : Contenus protégés, propriété exclusive de Zypp</li>
              <li><b>Responsabilités</b> : Zypp décline toute responsabilité en cas de mauvaise utilisation</li>
              <li><b>Protection des données</b> : Conformité RGPD, droits d’accès et suppression</li>
              <li><b>Cookies</b> : Techniques et analytiques, consentement requis</li>
              <li><b>Loi applicable</b> : Droit français, juridiction compétente : Paris</li>
            </ul>
          </details>

          <details style={{
            background: 'white', color: '#111827', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: 16, boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--primary)' }}>Politique de confidentialité</summary>
            <ul style={{ lineHeight: 1.6, marginTop: 12 }}>
              <li><b>Données collectées</b> : Nom, email, localisation, historique trajets</li>
              <li><b>Finalité</b> : Gestion des comptes, amélioration du service</li>
              <li><b>Durée de conservation</b> : 3 ans après la dernière utilisation</li>
              <li><b>Droits</b> : Accès, rectification, suppression via dpo@zypp.com</li>
              <li><b>Sécurité</b> : Mesures techniques et organisationnelles</li>
            </ul>
          </details>

          <details style={{
            background: 'white', color: '#111827', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: 16, boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--primary)' }}>Conditions spécifiques à l’application</summary>
            <ul style={{ lineHeight: 1.6, marginTop: 12 }}>
              <li>Géolocalisation, réservation, déverrouillage et paiement via l’app</li>
              <li>Compte obligatoire (email, téléphone, paiement sécurisé)</li>
              <li>Respect des règles : casque recommandé, code de la route</li>
              <li>Vitesse max : 25 km/h, 1 utilisateur par trottinette</li>
              <li>Factures disponibles dans l’espace personnel</li>
            </ul>
          </details>

          <details style={{
            background: 'white', color: '#111827', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: 16, boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--primary)' }}>Politique Cookies & RGPD</summary>
            <ul style={{ lineHeight: 1.6, marginTop: 12 }}>
              <li>Cookies techniques (authentification, géolocalisation)</li>
              <li>Cookies analytiques soumis au consentement</li>
              <li>Gestion des préférences dans l’app</li>
              <li>Base légale : contrat de service</li>
              <li>Notification CNIL en cas de violation</li>
              <li>Contact DPO : dpo@zypp.com</li>
            </ul>
          </details>

          <details style={{
            background: 'white', color: '#111827', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: 16, boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--primary)' }}>Obligations légales EDPM</summary>
            <ul style={{ lineHeight: 1.6, marginTop: 12 }}>
              <li>Âge minimum : 14 ans</li>
              <li>Vitesse max : 25 km/h</li>
              <li>Équipements obligatoires : éclairage, avertisseur sonore, freins</li>
              <li>Assurance responsabilité civile obligatoire</li>
              <li>Trottinettes bridées électroniquement</li>
            </ul>
          </details>
        </section>
      </div>
    </main>
  );
}


