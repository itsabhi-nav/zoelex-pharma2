import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const serif = await readFile(
  join(process.cwd(), "assets/InstrumentSerif-Regular.ttf"),
);

export const alt =
  "Zoelex Pharma — contract and private-label nutraceutical manufacturing in Pune, India.";
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
          background: "#f7f2e9",
          color: "#211a16",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #211a16",
                borderRadius: "4px",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              Z
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  lineHeight: 1,
                }}
              >
                ZOELEX
              </div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.42em",
                  color: "rgba(33,26,22,0.55)",
                  lineHeight: 1,
                }}
              >
                PHARMA
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              color: "rgba(33,26,22,0.6)",
            }}
          >
            PUNE · INDIA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "16px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#a4673f",
              marginBottom: "26px",
            }}
          >
            Contract &amp; private-label nutraceutical manufacturing
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "92px",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontFamily: "Instrument Serif",
              maxWidth: "1000px",
            }}
          >
            <span>Built to be taken.</span>
            <span>Designed to be remembered.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(33,26,22,0.18)",
            paddingTop: "24px",
            fontSize: "14px",
            color: "rgba(33,26,22,0.6)",
          }}
        >
          <span>GUMMIES · THIN FILMS · SOFTGELS · LIPOSOMAL</span>
          <span>GMP · FSSAI · GLP</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serif,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
