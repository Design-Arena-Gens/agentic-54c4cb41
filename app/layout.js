import "./globals.css";

export const metadata = {
  title: "Motion Narration Explainer",
  description:
    "Clarifies the video editing technique where static images are animated while narrating without showing a face."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
