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
          background: "#0B0A08",
          color: "#F4EEE2",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-120px",
            top: "-160px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(226,112,58,0.28) 0%, rgba(226,112,58,0.06) 55%, transparent 72%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
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
                border: "1.5px solid rgba(244,238,226,0.5)",
                borderRadius: "2px",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              Z
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3px" }}
            >
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
                  color: "rgba(244,238,226,0.5)",
                  lineHeight: 1,
                }}
              >
                PHARMA
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              letterSpacing: "0.18em",
              color: "rgba(244,238,226,0.55)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                background: "#D8F26A",
              }}
            />
            PUNE / INDIA
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E2703A",
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
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              fontFamily: "Instrument Serif",
              maxWidth: "1000px",
            }}
          >
            <span>Make wellness</span>
            <span>
              worth <span style={{ color: "#E2703A" }}>taking.</span>
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,238,226,0.16)",
            paddingTop: "24px",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "rgba(244,238,226,0.5)",
            position: "relative",
          }}
        >
          <span>GUMMIES / THIN FILMS / SOFTGELS / LIPOSOMAL</span>
          <span>GMP / FSSAI / GLP</span>
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
