import React from "react";
import { MdDownload, MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import curriculoPDF from "../curriculo2025.pdf";
import "./CaixaDownloadCV.css";
const CaixaDownloadCV = () => {
  // status: 'idle' | 'loading' | 'done'
  const [status, setStatus] = useState("idle");

  const handleBaixarCurriculo = async () => {
    if (status === "loading") return;

    setStatus("loading");

    const filename = "bernardoHeckler_CV_2026.pdf";

    try {
      const res = await fetch(curriculoPDF, { cache: "no-store" });
      if (!res.ok) throw new Error("Falha ao baixar arquivo");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      if (isIOS) {
        const opened = window.open(curriculoPDF, "_blank", "noopener,noreferrer");
        if (!opened) {
          const a = document.createElement("a");
          a.href = curriculoPDF;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      setTimeout(() => {
        setStatus("done");
        setTimeout(() => setStatus("idle"), 3000);
        window.URL.revokeObjectURL(url);
      }, 700);
    } catch (err) {
      console.error("Erro no download do CV:", err);
      const a = document.createElement("a");
      a.href = curriculoPDF;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  return (
    <div className="linha" id="linha-caixa">
      <button
        className={`btn-baixar ${status === "done" ? "btn-baixado" : ""} ${
          status === "loading" ? "loading" : ""
        }`}
        onClick={handleBaixarCurriculo}
        disabled={status === "loading"}
        aria-live="polite"
        aria-pressed={status === "loading"}
      >
        <span className="btn-content">
          <span className="btn-text">
            {status === "done"
              ? "Download concluído"
              : status === "loading"
              ? "Baixando…"
              : "Baixar CV"}
          </span>

          <span className="btn-icon" aria-hidden>
            {status === "loading" ? (
              <span className="spinner" />
            ) : status === "done" ? (
              <MdCheckCircle size={20} />
            ) : (
              <MdDownload size={20} />
            )}
          </span>
        </span>
      </button>
    </div>
  );
};

export default CaixaDownloadCV;
