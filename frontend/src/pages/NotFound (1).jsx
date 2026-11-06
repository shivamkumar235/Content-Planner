export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        background: "#1c1c1c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", textAlign: "center" }}>
        {/* Glitch 404 number */}
        <h1
          className="glitch-404"
          style={{
            fontSize: "180px",
            fontWeight: 800,
            letterSpacing: "10px",
            margin: 0,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "2px rgba(255,255,255,0.85)",
            position: "relative",
          }}
          data-text="404"
        >
          404
        </h1>

        {/* Page not found label */}
        <p
          style={{
            color: "#fff",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "10px",
            marginTop: "-30px",
            marginBottom: "30px",
          }}
        >
          PAGE NOT FOUND
        </p>

        {/* Homepage button */}
        <a
          href="/Dashboard"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            border: "1.5px solid #ff1f5e",
            color: "#ff1f5e",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "2px",
            textDecoration: "none",
            borderRadius: "2px",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ff1f5e";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ff1f5e";
          }}
        >
          HOMEPAGE
        </a>
      </div>

      <style>{`
        .glitch-404 {
          position: relative;
        }
        .glitch-404::before,
        .glitch-404::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.85);
        }
        .glitch-404::before {
          -webkit-text-stroke: 2px #ff1f5e;
          animation: glitchTop 3s infinite linear alternate-reverse;
        }
        .glitch-404::after {
          -webkit-text-stroke: 2px #4f3fff;
          animation: glitchBottom 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitchTop {
          0% { clip-path: inset(0 0 85% 0); transform: translate(-3px, -2px); }
          20% { clip-path: inset(10% 0 60% 0); transform: translate(3px, 1px); }
          40% { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          80% { clip-path: inset(20% 0 50% 0); transform: translate(-3px, 1px); }
          100% { clip-path: inset(0 0 85% 0); transform: translate(3px, -2px); }
        }
        @keyframes glitchBottom {
          0% { clip-path: inset(70% 0 0 0); transform: translate(3px, 2px); }
          20% { clip-path: inset(50% 0 20% 0); transform: translate(-2px, -1px); }
          40% { clip-path: inset(30% 0 40% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 1px); }
          80% { clip-path: inset(45% 0 25% 0); transform: translate(3px, -1px); }
          100% { clip-path: inset(70% 0 0 0); transform: translate(-3px, 2px); }
        }
        @media (max-width: 600px) {
          .glitch-404 { font-size: 90px !important; }
        }
      `}</style>
    </div>
  );
}
