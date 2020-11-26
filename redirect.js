url = window.location.protocol + "//" + window.location.hostname.replaceAll('.', '-') + ".ezproxy.auckland.ac.nz" + window.location.pathname + window.location.search + window.location.hash;

window.location.replace(url);
