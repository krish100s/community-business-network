(function () {
  if (window.GCBNotify) return;

  const styles = `
    .gcb-notify-wrap{
      position:fixed;
      top:20px;
      right:20px;
      z-index:5000;
      display:flex;
      flex-direction:column;
      gap:10px;
      pointer-events:none;
      max-width:min(360px,calc(100vw - 32px));
    }
    .gcb-notify{
      pointer-events:auto;
      display:flex;
      align-items:flex-start;
      gap:12px;
      padding:14px 15px;
      border-radius:16px;
      background:#fff;
      color:#111;
      border:1px solid rgba(17,17,17,.08);
      box-shadow:0 22px 54px rgba(17,17,17,.16);
      transform:translateY(-10px) scale(.98);
      opacity:0;
      animation:gcbIn .24s ease forwards;
    }
    .gcb-notify.closing{
      animation:gcbOut .22s ease forwards;
    }
    .gcb-notify-icon{
      width:34px;
      height:34px;
      border-radius:11px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-shrink:0;
      font-size:.9rem;
      margin-top:1px;
      color:#fff;
    }
    .gcb-notify-body{
      flex:1;
      min-width:0;
    }
    .gcb-notify-title{
      font-family:var(--font-brand);
      font-size:.82rem;
      font-weight:800;
      letter-spacing:.04em;
      margin-bottom:4px;
    }
    .gcb-notify-message{
      font-size:.9rem;
      line-height:1.55;
      color:#374151;
      word-break:break-word;
    }
    .gcb-notify-close{
      border:none;
      background:transparent;
      color:#6b7280;
      cursor:pointer;
      font-size:.9rem;
      width:30px;
      height:30px;
      border-radius:10px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-shrink:0;
      transition:background .18s ease,color .18s ease;
    }
    .gcb-notify-close:hover{background:rgba(17,17,17,.05);color:#111}
    .gcb-success .gcb-notify-icon{background:#15803d}
    .gcb-error .gcb-notify-icon{background:#b91c1c}
    .gcb-info .gcb-notify-icon{background:#1d4ed8}
    .gcb-warning .gcb-notify-icon{background:#b45309}
    @keyframes gcbIn{
      from{transform:translateY(-12px);opacity:0}
      to{transform:translateY(0) scale(1);opacity:1}
    }
    @keyframes gcbOut{
      from{transform:translateY(0) scale(1);opacity:1}
      to{transform:translateY(-8px) scale(.98);opacity:0}
    }
    @media(max-width:768px){
      .gcb-notify-wrap{
        left:16px;
        right:16px;
        top:16px;
        max-width:none;
      }
      .gcb-notify{
        padding:13px 14px;
        border-radius:15px;
      }
      .gcb-notify-message{font-size:.88rem}
    }
  `;

  const style = document.createElement("style");
  style.setAttribute("data-gcb-notify", "true");
  style.textContent = styles;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.className = "gcb-notify-wrap";
  wrap.setAttribute("aria-live", "polite");
  wrap.setAttribute("aria-atomic", "true");
  document.body.appendChild(wrap);

  const icons = {
    success: "fa-circle-check",
    error: "fa-triangle-exclamation",
    info: "fa-circle-info",
    warning: "fa-triangle-exclamation",
  };

  const titles = {
    success: "Success",
    error: "Error",
    info: "Info",
    warning: "Warning",
  };

  function notify(message, type = "info", options = {}) {
    const toast = document.createElement("div");
    toast.className = `gcb-notify gcb-${type}`;
    const duration = typeof options.duration === "number" ? options.duration : 4500;
    toast.innerHTML = `
      <div class="gcb-notify-icon"><i class="fa-solid ${icons[type] || icons.info}"></i></div>
      <div class="gcb-notify-body">
        <div class="gcb-notify-title">${titles[type] || titles.info}</div>
        <div class="gcb-notify-message">${message}</div>
      </div>
      <button type="button" class="gcb-notify-close" aria-label="Close notification"><i class="fa-solid fa-xmark"></i></button>
    `;

    const close = () => {
      toast.classList.add("closing");
      window.setTimeout(() => toast.remove(), 220);
    };

    toast.querySelector(".gcb-notify-close").addEventListener("click", close);
    wrap.appendChild(toast);
    window.setTimeout(close, duration);
    return toast;
  }

  window.GCBNotify = {
    notify,
    success: (message, options) => notify(message, "success", options),
    error: (message, options) => notify(message, "error", options),
    info: (message, options) => notify(message, "info", options),
    warning: (message, options) => notify(message, "warning", options),
  };
})();
