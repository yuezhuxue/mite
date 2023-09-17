function $(o){ return document.getElementById(o); }
function uz(){
    var v = $("txt1").value;
	var r = v.match(/\\u[0-9a-fA-F]{4}/g);
	if(r == null) {
		$("txt2").value = v;
		return false;
	}
	for(var i = 0; i < r.length; i++){
		v = v.replace(r[i],unescape(r[i].replace("\\u","%u")));
	}
    $("txt2").value = v;
}
function zu(){
    var v = $("txt1").value.split("");
    var ascii = "";
    for (var i = 0; i < v.length; i++) {
        var code = Number(v[i].charCodeAt(0));
        if (!$("onlyzw").checked || code > 127) {
            var charAscii = code.toString(16);
            charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
            ascii += "\\u" + charAscii;
        } else {
            ascii += v[i];
        }
    }
    $("txt2").value = ascii;
}