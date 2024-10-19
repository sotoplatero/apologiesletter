import { j as decodeKey } from './chunks/astro/server_C0JNFnrn.mjs';
import './chunks/shared_BnJfrxUh.mjs';
import './chunks/astro-designed-error-pages_BHM4SjAq.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CT3jP1RJ.mjs';

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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/soto/projects/apologiesletter/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/generate-apology","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/generate-apology","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/generate-apology\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"generate-apology","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/generate-apology.ts","pathname":"/api/generate-apology","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/about.DJzLMeus.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/generator","isIndex":false,"type":"page","pattern":"^\\/generator\\/?$","segments":[[{"content":"generator","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/generator.astro","pathname":"/generator","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://writeapologyletter.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/soto/projects/apologiesletter/src/components/ApologyWizard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/soto/projects/apologiesletter/src/pages/generator.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/generator@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/soto/projects/apologiesletter/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/soto/projects/apologiesletter/src/pages/articles/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/soto/projects/apologiesletter/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/soto/projects/apologiesletter/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/soto/projects/apologiesletter/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/generate-apology@_@ts":"pages/api/generate-apology.astro.mjs","\u0000@astro-page:src/pages/articles/[...page]@_@astro":"pages/articles/_---page_.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/generator@_@astro":"pages/generator.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/soto/projects/apologiesletter/node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/examples-emotional-apology-letters-neighbor/index.md?astroContentCollectionEntry=true":"chunks/index_IsowklzS.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/tips-writing-apology-letter-family-situation/index.md?astroContentCollectionEntry=true":"chunks/index_DmfSW-np.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/tips-writing-apology-letter-professional-environment/index.md?astroContentCollectionEntry=true":"chunks/index_B8SXUf4s.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/examples-emotional-apology-letters-neighbor/index.md?astroPropagatedAssets":"chunks/index_BfKpKtxI.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/tips-writing-apology-letter-family-situation/index.md?astroPropagatedAssets":"chunks/index_DVKd4vgF.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/tips-writing-apology-letter-professional-environment/index.md?astroPropagatedAssets":"chunks/index_BGP8TROE.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/soto/projects/apologiesletter/node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/actions/runtime/virtual/get-action.js":"chunks/get-action_CNf5kgsN.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/examples-emotional-apology-letters-neighbor/index.md":"chunks/index_BhmC6bO6.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/tips-writing-apology-letter-family-situation/index.md":"chunks/index_FtwOOFVa.mjs","C:/Users/soto/projects/apologiesletter/src/content/articles/tips-writing-apology-letter-professional-environment/index.md":"chunks/index_A-jYzcP5.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_9lWHhTmN.mjs","\u0000@astrojs-manifest":"manifest_QHZoy08u.mjs","@astrojs/svelte/client.js":"_astro/client.CWY0IrnN.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","C:/Users/soto/projects/apologiesletter/node_modules/.pnpm/@preact+signals@1.3.0_preact@10.24.3/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.CzZwSbV1.js","@astrojs/preact/client.js":"_astro/client.eFDpbWYx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.DJzLMeus.css","/favicon.svg","/_astro/client.CWY0IrnN.js","/_astro/client.eFDpbWYx.js","/_astro/client.NHESSXny.js","/_astro/hoisted.2daoxv0f.js","/_astro/signals.module.CzZwSbV1.js","/og-images/tips-writing-apology-letter-family-situation.png","/og-images/write-apology-letter-friend-lack-communication.png","/about/index.html","/api/generate-apology","/contact/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"wu8raZTofUjetm0KGf0k2b64SuIsmo7G6ylcLmIdFvE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
