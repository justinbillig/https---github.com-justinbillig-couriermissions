import favicon32 from "../../assets/logo/favicon-32.png";
import favicon180 from "../../assets/logo/favicon-180.png";
import favicon512 from "../../assets/logo/favicon-512.png";

export function GET() {
  return new Response(
    JSON.stringify({
      name: "Courier Missions",
      short_name: "Courier Missions",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#183044",
      icons: [
        { src: favicon32.src, sizes: "32x32", type: "image/png" },
        { src: favicon180.src, sizes: "180x180", type: "image/png" },
        { src: favicon512.src, sizes: "512x512", type: "image/png" },
      ],
    }),
    { headers: { "Content-Type": "application/manifest+json; charset=utf-8" } },
  );
}
