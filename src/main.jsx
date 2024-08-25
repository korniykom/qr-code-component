import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import QRCode from "./QRCode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-dvh flex h-dvh items-center justify-center bg-slate-300">
      <QRCode />
    </div>
  </StrictMode>,
);
