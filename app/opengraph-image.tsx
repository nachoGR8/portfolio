import { ImageResponse } from "next/og";
import { hero, site } from "@/lib/data";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf9",
          padding: 72,
          color: "#0b0b0c",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#3d5afe" }}>{hero.eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#66666e", maxWidth: 900 }}>
            {hero.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
