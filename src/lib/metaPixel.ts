// src/lib/metaPixel.ts
let initialized = false;
let pixelIdStored: string | null = null;

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-meta-pixel]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.async = true;
    s.setAttribute("data-meta-pixel", "true");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load Meta Pixel script"));
    document.head.appendChild(s);
  });
}

/**
 * Inituje pixel - można wywołać tylko po akceptacji cookies.
 */
export async function initPixel(pixelId: string) {
  if (initialized) return;
  pixelIdStored = pixelId;

  // wstrzykujemy oficjalny fbevents.js
  await injectScript("https://connect.facebook.net/en_US/fbevents.js");

  // inicjalizacja fbq - (kod odwzorowuje oficjalny snippet)
  // jeśli fbq jest już dostępny w global scope, użyjemy go
  if (!(window as any).fbq) {
    // safety: jeśli fbevents.js zostało załadowane, fbq powinno istnieć
    // ale na wszelki wypadek tworzymy fallback
    (window as any).fbq = function () {
      (window as any).fbq.callMethod
        ? (window as any).fbq.callMethod.apply((window as any).fbq, arguments)
        : (window as any).fbq.queue.push(arguments);
    };
    (window as any)._fbq = (window as any).fbq;
    (window as any).fbq.push = (window as any).fbq;
    (window as any).fbq.loaded = true;
    (window as any).fbq.version = "2.0";
    (window as any).fbq.queue = [];
  }

  try {
    (window as any).fbq("init", pixelId);
    (window as any).fbq("track", "PageView");
    initialized = true;

    // dorysuj noscript pixel (fallback), tylko po akceptacji
    addNoScriptPixel(pixelId);
  } catch (e) {
    console.warn("metaPixel init error", e);
  }
}

function addNoScriptPixel(pixelId: string) {
  // upewnij się, że nie dodamy wielokrotnie
  if (document.getElementById("meta-pixel-noscript")) return;
  const noscript = document.createElement("noscript");
  noscript.id = "meta-pixel-noscript";
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
  document.body.appendChild(noscript);
}

/** Track dowolne zdarzenie.
 *  Jeżeli pixel nie został zainicjalizowany - nic nie robi.
 */
export function track(eventName: string, params?: Record<string, any>) {
  if (!initialized) return;
  try {
    (window as any).fbq("track", eventName, params || {});
  } catch (e) {
    console.warn("metaPixel track error", e);
  }
}

/** Track page view ponownie (użyteczne przy nawigacji SPA) */
export function trackPageView() {
  if (!initialized) return;
  try {
    (window as any).fbq("track", "PageView");
  } catch (e) {
    console.warn("metaPixel trackPageView error", e);
  }
}

export function isInitialized() {
  return initialized;
}
