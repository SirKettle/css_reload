// code based on the css reloader chrome plugin
	
function reloadCSS(){

	var nTimestamp = (new Date().valueOf());
	var aLinkElements = document.querySelectorAll("link[rel=stylesheet][href]");
	var nLinks = aLinkElements.length;
	
	for (var nIndex = 0, eLink, sHref; nIndex < nLinks; nIndex++){
		eLink = aLinkElements[nIndex];
		sHref = eLink.href.replace(/[?&]cssReloader=([^&$]*)/, "");
		eLink.href = sHref + (sHref.indexOf("?") < 0 ? "?" : "&") + "cssReloader=" + nTimestamp;
	}
	
}