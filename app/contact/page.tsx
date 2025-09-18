'use client';

import { useState } from 'react';

import PageHeader from "@/app/components/PageHeader";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1000));
      setMessage('Merci ! Votre message a été envoyé.');
      (event.currentTarget as HTMLFormElement).reset();
    } catch (e) {
      setMessage("Une erreur est survenue. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
        <div style={{ marginBottom: 16 }}>
          <PageHeader title="Contact – mobilité urbaine Montpellier" />
        </div>

        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr" }}>
          {/* Contact Info */}
          <section style={{
            background: "white",
            color: "#111827",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            height: "fit-content",
          }}>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--primary)" }}>Informations de contact</h2>
            
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Email</h3>
              <a href="mailto:contact@zypp.com" style={{ color: "var(--primary)", textDecoration: "none" }}>
                contact@zypp.com
              </a>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Téléphone</h3>
              <a href="tel:+33145678901" style={{ color: "var(--primary)", textDecoration: "none" }}>
                +33 1 45 67 89 01
              </a>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Adresse</h3>
              <p style={{ margin: 0, color: "#6b7280" }}>
                12 rue du Faubourg Saint-Antoine<br />
                75012 Paris, France
              </p>
            </div>

            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Horaires</h3>
              <p style={{ margin: 0, color: "#6b7280" }}>
                Lundi - Vendredi: 9h - 18h<br />
                Samedi: 10h - 16h
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section style={{
            background: "white",
            color: "#111827",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--primary)" }}>Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Nom complet</label>
                <input 
                  name="fullName" 
                  type="text" 
                  required 
                  placeholder="Votre nom complet"
                  style={{ 
                    width: "100%", 
                    padding: 12, 
                    borderRadius: 8, 
                    border: "1px solid #e5e7eb",
                    fontSize: 16,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Email</label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="votre@email.com"
                  style={{ 
                    width: "100%", 
                    padding: 12, 
                    borderRadius: 8, 
                    border: "1px solid #e5e7eb",
                    fontSize: 16,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Sujet</label>
                <select 
                  name="subject" 
                  required
                  style={{ 
                    width: "100%", 
                    padding: 12, 
                    borderRadius: 8, 
                    border: "1px solid #e5e7eb",
                    fontSize: 16,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                >
                  <option value="" disabled>Sélectionnez un sujet</option>
                  <option>Question générale</option>
                  <option>Devenir rechargeur</option>
                  <option>Problème technique</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required
                  placeholder="Décrivez votre demande..."
                  style={{ 
                    width: "100%", 
                    padding: 12, 
                    borderRadius: 8, 
                    border: "1px solid #e5e7eb",
                    fontSize: 16,
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  background: "var(--primary)",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>

            {message && (
              <div style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: message.includes('erreur') ? '#fef2f2' : '#f0f9ff',
                color: message.includes('erreur') ? '#dc2626' : '#0369a1',
                border: `1px solid ${message.includes('erreur') ? '#fecaca' : '#bae6fd'}`,
              }}>
                {message}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}


