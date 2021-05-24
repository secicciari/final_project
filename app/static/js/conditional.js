var webpageurl = window.location.href;

if (location.hostname === "127.0.0.1") {
    var d = document, h = d.getElementsByTagName('head')[0], s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '../static/js/config.js';
    h.appendChild(s);

    var d1 = document, h1 = d1.getElementsByTagName('head')[0], s1 = d1.createElement('script');
    s1.type = 'text/javascript';
    s1.async = true;
    s1.src = '../static/js/leafletmap.js';
    h1.appendChild(s1);
} else if (webpageurl == "https://green-team-wine.herokuapp.com/" || "http://green-team-wine.herokuapp.com/") {
    var d1 = document, h1 = d1.getElementsByTagName('head')[0], s1 = d1.createElement('script');
    s1.type = 'text/javascript';
    s1.async = true;
    s1.src = '../static/js/leafletmap.js';
    h1.appendChild(s1);
}