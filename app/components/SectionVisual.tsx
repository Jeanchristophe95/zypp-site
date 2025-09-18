import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
};

export default function SectionVisual({ src = "/next.svg", alt }: Props) {
  return (
    <div style={{
      position: "relative",
      background:
        "radial-gradient(60% 60% at 50% 40%, rgba(82, 113, 255, 0.15) 0%, rgba(82,113,255,0.05) 55%, transparent 70%)",
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      padding: 16,
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
    }}>
      <Image
        src={src}
        alt={alt}
        width={420}
        height={240}
        style={{ objectFit: "contain", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))" }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(180deg, rgba(17,24,39,0.04) 0%, rgba(17,24,39,0) 35%, rgba(17,24,39,0.04) 100%)",
      }} />
    </div>
  );
}


