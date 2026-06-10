import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BCDDxPbG.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BwLccz2K.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/","cacheDir":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/node_modules/.astro/","outDir":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/dist/","srcDir":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/","publicDir":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/public/","buildClientDir":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/dist/client/","buildServerDir":"file:///C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/pages/[lang].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/[lang]@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DQugYF--.mjs","C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_nWWApU6M.mjs","C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/components/Services.astro?astro&type=script&index=0&lang.ts":"_astro/Services.astro_astro_type_script_index_0_lang.CBgecawJ.js","C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts":"_astro/Testimonials.astro_astro_type_script_index_0_lang.DLIUJz_L.js","C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.CmxshFJO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/components/Services.astro?astro&type=script&index=0&lang.ts","const c=document.querySelectorAll(\"[data-service-card]\");c.length>0&&c[0].classList.add(\"active\");c.forEach((t,a)=>{t.addEventListener(\"click\",()=>{c.forEach(e=>e.classList.remove(\"active\")),t.classList.add(\"active\")})});document.querySelectorAll(\"[data-scroll-to]\").forEach(t=>{t.addEventListener(\"click\",a=>{a.stopPropagation();const e=a.currentTarget.getAttribute(\"data-scroll-to\");e&&document.getElementById(e)?.scrollIntoView({behavior:\"smooth\"})})});"],["C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts","const c=document.querySelector(\".testimonials-track\"),f=document.querySelectorAll(\".testimonial-slide\"),i=document.getElementById(\"testimonials-prev\"),o=document.getElementById(\"testimonials-next\"),d=document.querySelectorAll(\".testimonial-dot\");let t=0;const l=f.length;function n(){const e=-t*100;c.style.transform=`translateX(${e}%)`,d.forEach((s,u)=>{u===t?s.classList.add(\"active\"):s.classList.remove(\"active\")}),i&&o&&(i.disabled=t===0,o.disabled=t===l-1)}i?.addEventListener(\"click\",()=>{t>0&&(t--,n())});o?.addEventListener(\"click\",()=>{t<l-1&&(t++,n())});d.forEach((e,s)=>{e.addEventListener(\"click\",()=>{t=s,n()})});let a=0,r=0;c?.addEventListener(\"touchstart\",e=>{a=e.touches[0].clientX});c?.addEventListener(\"touchmove\",e=>{r=e.touches[0].clientX});c?.addEventListener(\"touchend\",()=>{const s=a-r;Math.abs(s)>50&&(s>0&&t<l-1?(t++,n()):s<0&&t>0&&(t--,n()))});n();"],["C:/Users/marco/OneDrive/Escritorio/WaveCordTech/fernando_riascos_contrcuccion/fr-construccion/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"form-modal\"),l=document.getElementById(\"form-overlay\"),s=document.getElementById(\"close-form\"),r=document.querySelectorAll('[data-toggle-form=\"true\"]'),a=()=>{e&&(e.classList.remove(\"hidden\"),e.classList.add(\"flex\")),document.body.style.overflow=\"hidden\"},n=()=>{e&&(e.classList.add(\"hidden\"),e.classList.remove(\"flex\")),document.body.style.overflow=\"\"};r.forEach(d=>{d.addEventListener(\"click\",c=>{c.preventDefault(),a()})});l?.addEventListener(\"click\",n);s?.addEventListener(\"click\",n);const t=document.getElementById(\"service-select\"),o=document.getElementById(\"service-warning\");t?.addEventListener(\"change\",()=>{t&&o&&o.classList.toggle(\"hidden\",t.value!==\"__other__\")});"]],"assets":["/_astro/_lang_.ZgGeB0J7.css","/_astro/_lang_.DxWC-OPM.css","/images/handyman.webp","/images/hero-handyman.jpg","/images/logo-header.png","/images/logo-main.png","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"BIjVGrcOYusMti7WjFzR7OLjddOqKIbQJX1ViJZK9Us="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
