function index_xss() {
    var a = 'XSS/xss.html';
    window.location.replace(a)
}

function index_idor() {
    var b = 'idor/idor.html';
    window.location.replace(b)
}
function index_openr() {
    var c = 'Open%20Redirect/openr.html';
    window.location.replace(c)
}
function index_sde() {
    var d = 'sensitive%20data%20exposure/sde.html';
    window.location.replace(d)
}
function index_bac() {
    var e = 'Broken%20Access%20control/bac.html';
    window.location.replace(e)
}