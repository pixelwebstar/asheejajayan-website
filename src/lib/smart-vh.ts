/** Early: --vh before first paint. */
export const BOOT_SCRIPT =
  '(function(){var r=document.documentElement,l=innerWidth;function s(){r.style.setProperty("--vh",(innerHeight*0.01)+"px")}s();addEventListener("resize",function(){var w=innerWidth;if(w<1024&&w===l)return;l=w;s()})})();';
