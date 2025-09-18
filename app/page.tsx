import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main style={{
      minHeight: "100dvh",
      background: "color-mix(in srgb, var(--primary) 85%, white)",
      display: "flex",
      alignItems: "center",
      padding: "24px 16px",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
        display: "grid",
        gap: 24,
        gridTemplateColumns: "1fr",
      }}>
        <div style={{
          display: "grid",
          gap: 24,
          alignItems: "center",
          gridTemplateColumns: "1.1fr 0.9fr",
        }}>
          <section style={{ color: "#0b0f1a" }}>
            <Image
              src="/logo-removebg-preview.png"
              alt="Logo ZYPP"
              width={260}
              height={80}
              priority
              style={{ width: "min(260px, 45%)", height: "auto", marginBottom: 12 }}
            />
            <h1 style={{
              fontSize: "clamp(28px, 5.5vw, 56px)",
              lineHeight: 1.05,
              margin: 0,
              fontWeight: 800,
              color: "#121826",
            }}>
              Location de trottinettes électriques à Montpellier – déplacements rapides
            </h1>
            <p style={{
              marginTop: 16,
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "#0f172a",
              maxWidth: 640,
            }}>
              Trottinette électrique en libre‑service à Montpellier: mobilité urbaine simple et rapide. 1000 véhicules disponibles 24h/24, accessibles en un clic via l’application ZYPP.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                background: "#0f172a",
                color: "white",
                padding: "12px 18px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              }}>
                Contactez nous !
              </Link>
              <a href="tel:+33145678901" style={{
                background: "rgba(15,23,42,0.85)",
                color: "white",
                padding: "10px 14px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
              }}>
                +33 1 45 67 89 01
              </a>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              <div style={{ background: "rgba(15,23,42,0.9)", color: "white", padding: "8px 12px", borderRadius: 12 }}>
                12 rue du Faubourg Saint‑Antoine, 75012 Paris
              </div>
            </div>
          </section>

          <aside style={{ position: "relative" }}>
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              maxWidth: 520,
              margin: "0 auto",
              filter: "drop-shadow(0 32px 40px rgba(0,0,0,0.35))",
            }}>
              <Image
                src="/2104.i123.026.S.m004.c13.electric_scooter_realistic-removebg-preview.png"
                alt="Trottinette ZYPP"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 520px"
                style={{ 
                  objectFit: "contain",
                  background: "transparent"
                }}
              />
            </div>
          </aside>
        </div>

        <footer style={{
          marginTop: 8,
          background: "#0f172a",
          color: "white",
          borderRadius: 14,
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <span>@zypp</span>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="https://www.zypp.com" style={{ color: "white", textDecoration: "none" }}>www.zypp.com</a>
          </div>
        </footer>
      </div>
    </main>
  );
}


