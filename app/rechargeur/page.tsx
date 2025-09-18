'use client';

import { useState } from 'react';

import PageHeader from "@/app/components/PageHeader";

export default function DevenirRechargeurPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/rechargeur', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setMessage('Merci ! Votre candidature a été envoyée.');
      (event.currentTarget as HTMLFormElement).reset();
    } catch {
      setMessage("Une erreur est survenue. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main style={{
      padding: '40px 16px',
      minHeight: '100dvh',
      backgroundColor: 'var(--background)',
      background: `
        radial-gradient(80% 40% at 50% 0%, rgba(11,15,26,0.6) 0%, rgba(11,15,26,0) 60%),
        linear-gradient(180deg, rgba(17,24,39,0.65) 0%, rgba(17,24,39,0) 55%)
      `,
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 16 }}>
          <PageHeader title="Devenir rechargeur – déplacements rapides à Montpellier" />
        </div>
        <p>Remplissez le formulaire pour rejoindre le réseau ZYPP.</p>

        <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
          <div style={{
            background: 'white',
            color: '#111827',
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
            display: 'grid',
            gap: 12,
          }}>
          <label>
            Nom et prénom
            <input name="fullName" type="text" required placeholder="Votre nom" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="vous@exemple.com" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          </label>
          <label>
            Téléphone
            <input name="phone" type="tel" required placeholder="06 12 34 56 78" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          </label>
          <label>
            Ville
            <input name="city" type="text" required placeholder="Paris" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          </label>
          <label>
            Disponibilités
            <select name="availability" required defaultValue="" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }}>
              <option value="" disabled>Choisir…</option>
              <option>Journée</option>
              <option>Soirée</option>
              <option>Week-end</option>
            </select>
          </label>
          <label>
            Message (optionnel)
            <textarea name="note" rows={4} placeholder="Dites-nous en plus…" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          </label>

          <button type="submit" disabled={isSubmitting} style={{
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: 999,
            padding: '10px 16px',
            fontWeight: 700,
          }}>
            {isSubmitting ? 'Envoi…' : 'Envoyer'}
          </button>
          </div>
        </form>

        {message && <p role="status">{message}</p>}
      </div>
    </main>
  );
}


