import React from "react";
import { MdDownload, MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import curriculoPDF from "../curriculo2025.pdf";
import "./CaixaDownloadCV.css";
const CaixaDownloadCV = () => {
  
  // status: 'idle' | 'loading' | 'done'
  const [status, setStatus] = useState("idle");

  const handleBaixarCurriculo = () => {
    if (status === "loading") return; // avoid double clicks

    setStatus("loading");

    const link = document.createElement("a");
    link.href = curriculoPDF;
    link.download = "bernardoHeckler_CV_2026.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // give a small feedback time for 'loading', then show success
    setTimeout(() => {
      setStatus("done");

      // reset to idle after a short period so user can download again
      setTimeout(() => setStatus("idle"), 3000);
    }, 700);
  };
  return (
    <div className="linha" id="linha-caixa">
        <button
          className={`btn-baixar ${status === "done" ? "btn-baixado" : ""} ${status === "loading" ? "loading" : ""}`}
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
