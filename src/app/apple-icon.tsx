import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1814",
          color: "#c4894a",
          fontSize: 110,
          fontWeight: 700,
          fontFamily: "Georgia, Times New Roman, serif",
          letterSpacing: -4,
        }}
      >
        S
      </div>
    ),
    size,
  );
}
