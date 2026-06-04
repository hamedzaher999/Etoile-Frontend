export const toastStyle = {
  duration: 3500,

  style: {
    background: "rgba(5, 5, 12, 0.82)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    padding: "16px 18px",
    borderRadius: "20px",

    fontSize: "13px",
    fontFamily: "serif",

    boxShadow: "0 0 40px rgba(120,0,255,0.18)",

    maxWidth: "420px",
  },

  success: {
    iconTheme: {
      primary: "#67e8f9",
      secondary: "#020308",
    },

    style: {
      border: "1px solid rgba(34,211,238,0.18)",

      boxShadow: "0 0 35px rgba(34,211,238,0.15)",
    },
  },

  error: {
    iconTheme: {
      primary: "#f87171",
      secondary: "#020308",
    },

    style: {
      border: "1px solid rgba(248,113,113,0.18)",

      boxShadow: "0 0 35px rgba(248,113,113,0.15)",
    },
  },

  loading: {
    iconTheme: {
      primary: "#c084fc",
      secondary: "#020308",
    },

    style: {
      border: "1px solid rgba(192,132,252,0.18)",

      boxShadow: "0 0 35px rgba(168,85,247,0.15)",
    },
  },
};
