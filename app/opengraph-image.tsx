import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #F8FBFD 0%, #EEF4F9 50%, #FFFFFF 100%)",
          color: "#16324A",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#1F7CC6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#FFFFFF",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {siteConfig.shortName}
            </span>
            <span style={{ fontSize: 22, color: "#6B7B8C", marginTop: 4 }}>
              {siteConfig.name}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              background: "#1F7CC6",
            }}
          />
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              background: "#7DBD24",
            }}
          />
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              background: "#F7941D",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
