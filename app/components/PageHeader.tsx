type Props = { title: string; subtitle?: string };

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div style={{
      background: "linear-gradient(180deg, color-mix(in srgb, var(--primary) 25%, white) 0%, transparent 100%)",
      padding: "32px 16px",
      borderRadius: 16,
      border: "1px solid #e5e7eb",
    }}>
      <h1 style={{
        margin: 0,
        fontSize: "clamp(24px, 4.5vw, 40px)",
        fontWeight: 800,
        color: "#111827",
      }}>{title}</h1>
      {subtitle && (
        <p style={{ marginTop: 8, color: "#374151" }}>{subtitle}</p>
      )}
      <div style={{ height: 4, width: 72, background: "var(--primary)", marginTop: 12, borderRadius: 8 }} />
    </div>
  );
}


