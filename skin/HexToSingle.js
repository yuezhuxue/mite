// by ls
function InsertString(t, c, n) {
    var r = new Array();
    for (var i = 0; i * 2 < t.length; i++) {
        r.push(t.substr(i * 2, n));
    }
    return r.join(c);
}
function FillString(t, c, n, b) {
    if ((t == "") || (c.length != 1) || (n <= t.length)) {
        return t;
    }
    var l = t.length;
    for (var i = 0; i < n - l; i++) {
        if (b == true) {
            t = c + t;
        }
         else {
            t += c;
        }
    }
    return t;
}
function HexToSingle(t) {
    t = t.replace(/\s+/g, "");
    if (t == "") {
        return "";
    }
    if (t == "00000000") {
        return "0";
    }
    if ((t.length > 8) || (isNaN(parseInt(t, 16)))) {
        return "Error";
    }
    if (t.length < 8) {
        t = FillString(t, "0", 8, true);
    }
    t = parseInt(t, 16).toString(2);
    t = FillString(t, "0", 32, true);
    var s = t.substring(0, 1);
    var e = t.substring(1, 9);
    var m = t.substring(9);
    e = parseInt(e, 2) - 127;
    m = "1" + m;
    if (e >= 0) {
        m = m.substr(0, e + 1) + "." + m.substring(e + 1)
    }
     else {
        m = "0." + FillString(m, "0", m.length - e - 1, true)
    }
    if (m.indexOf(".") == -1) {
        m = m + ".0";
    }
    var a = m.split(".");
    var mi = parseInt(a[0], 2);
    var mf = 0;
    for (var i = 0; i < a[1].length; i++) {
        mf += parseFloat(a[1].charAt(i)) * Math.pow(2, -(i + 1));
    }
    m = parseInt(mi) + parseFloat(mf);
    if (s == 1) {
        m = 0 - m;
    }
    return m;
}
function SingleToHex(t) {
    if (t == "") {
        return "";
    }
    t = parseFloat(t);
    if (isNaN(t) == true) {
        return "Error";
    }
    if (t == 0) {
        return "00000000";
    }
    var s,
    e,
    m;
    if (t > 0) {
        s = 0;
    }
     else {
        s = 1;
        t = 0 - t;
    }
    m = t.toString(2);
    if (m >= 1) {
        if (m.indexOf(".") == -1) {
            m = m + ".0";
        }
        e = m.indexOf(".") - 1;
    }
     else {
        e = 1 - m.indexOf("1");
    }
    if (e >= 0) {
        m = m.replace(".", "");
    }
     else {
        m = m.substring(m.indexOf("1"));
    }
    if (m.length > 24) {
        m = m.substr(0, 24);
    }
     else {
        m = FillString(m, "0", 24, false)
    }
    m = m.substring(1);
    e = (e + 127).toString(2);
    e = FillString(e, "0", 8, true);
    var r = parseInt(s + e + m, 2).toString(16);
    r = FillString(r, "0", 8, true);
    return InsertString(r, " ", 2).toUpperCase();
}
function FormatHex(t, n, ie) {
    var r = new Array();
    var s = "";
    var c = 0;
    for (var i = 0; i < t.length; i++) {
        if (t.charAt(i) != " ") {
            s += t.charAt(i);
            c += 1;
            if (c == n) {
                r.push(s);
                s = "";
                c = 0;
            }
        }
        if (ie == false) {
            if ((i == t.length - 1) && (s != "")) {
                r.push(s);
            }
        }
    }
    return r.join("\n");
}
function FormatHexBatch(t, n, ie) {
    var a = t.split("\n");
    var r = new Array();
    for (var i = 0; i < a.length; i++) {
        r[i] = FormatHex(a[i], n, ie);
    }
    return r.join("\n");
}
function HexToSingleBatch(t) {
    var a = FormatHexBatch(t, 8, true).split("\n");
    var r = new Array();
    for (var i = 0; i < a.length; i++) {
        r[i] = HexToSingle(a[i]);
    }
    return r.join("\r\n");
}
function SingleToHexBatch(t) {
    var a = t.split("\n");
    var r = new Array();
    for (var i = 0; i < a.length; i++) {
        r[i] = SingleToHex(a[i]);
    }
    return r.join("\r\n");
}
// 保留1位小数
function fomatFloat(src,pos){ 
  return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos); 
} 
//将一个数字转化成16进制字符串形式
function toHex(num){
	return num<16?"0"+num.toString(16).toUpperCase():""+num.toString(16).toUpperCase();
}
//将一个16进制字符串转10进制
function toDec(sixteen){
	return parseInt(sixteen,16);
}
