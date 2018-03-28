//var dx = (function() {
var isOp = (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
var isMoz = typeof InstallTrigger !== 'undefined';
var isChrome = !!window.chrome && !isOp;
var appVer = navigator.appVersion;
var isIE = ((appVer.indexOf("MSIE") > 0) || (appVer.indexOf("Trident/") > 0));
var isIE8 = (appVer.indexOf("MSIE 8") > 0);
var isIE9 = (appVer.indexOf("MSIE 9") > 0);
var isIE10 = (appVer.indexOf("MSIE 10") > 0);
var isIE11 = (appVer.indexOf("Trident/") > 0);
var isIE9OrLater = (isIE9 || isIE10 || isIE11);

var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : Element.prototype;
var hasOwnProperty = Object.prototype.hasOwnProperty;

window.innerHeight = window.innerHeight || document.documentElement.clientHeight;
window.innerWidth = window.innerWidth || document.documentElement.clientWidth;
window.mobilecheck = function() {
    var check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

if (!document.newdom) {
    document.newdom = function(tag) { return document.createElement(tag) };
}
if (!document.getdom) {
    document.getdom = function(tag) { return (tag[0] === "#") ? document.getElementById(tag.substring(1)) : document.querySelectorAll(tag) };
}
if (!elementPrototype.attr) {
    elementPrototype.attr = function(n, v) {
        if (typeof v != "undefined") {
            this.setAttribute(n, v);
            return this;
        } else {
            return this.getAttribute(n);
        }
    };
}
if (!elementPrototype.append) {
    elementPrototype.append = function(obj) {
        this.appendChild(obj);
        return this;
    };
}
if (!elementPrototype.html) {
    elementPrototype.html = function(ctx) {
        if (typeof ctx === "undefined") return this.innerHTML;
        this.innerHTML = ctx;
        return this
    };
}
if (!elementPrototype.val) {
    elementPrototype.val = function(ctx) {
        if (typeof ctx === "undefined") return this.value;
        this.value = ctx;
        return this
    };
}
if (!elementPrototype.realTop) {
    elementPrototype.realTop = function() { return this.getBoundingClientRect().top };
}
if (!elementPrototype.realLeft) {
    elementPrototype.realLeft = function() { return this.getBoundingClientRect().left };
}
if (!elementPrototype.hasClass) {
    elementPrototype.hasClass = function(c) {
        var cn = ' ' + this.className + ' ';
        return (cn.indexOf(' ' + c + ' ') >= 0)
    };
}
if (!elementPrototype.addClass) {
    elementPrototype.addClass = function(c) {
        var cn = ' ' + this.className + ' ',
            cs = [];
        cs = c.split(" ");
        for (var i = 0; i < cs.length; i++) {
            if (cn.indexOf(' ' + cs[i] + ' ') < 0) {
                c = this.className + ' ' + c;
            }
        }
        this.className = c.trim();
        return this
    };
}
if (!elementPrototype.removeClass) {
    elementPrototype.removeClass = function(c) {
        var cn = ' ' + this.className.trim() + ' ';
        this.className = cn.replace(" " + c + " ", " ").trim();
        return this
    };
}
if (!elementPrototype.swapClass) {
    elementPrototype.swapClass = function(c, d) {
        var cn = ' ' + this.className + ' ';
        this.className = cn.replace(' ' + c + ' ', ' ' + d + ' ').trim();
        return this
    };
}
if (!elementPrototype.displayTop) {
    elementPrototype.displayTop = function() {
        var fix = (window.pageYOffset || document.documentElement.scrollTop);
        return this.getBoundingClientRect().top + fix;
    };
}
if (!elementPrototype.displayLeft) {
    elementPrototype.displayLeft = function() {
        var fix = (window.pageXOffset || document.documentElement.scrollLeft);
        return this.getBoundingClientRect().left + fix;
    };
}
if (!elementPrototype.getdom) {
    elementPrototype.getdom = function(tar) {
        return (tar[0] === "#") ? document.getElementById(tar.substring(1)) : this.querySelectorAll(tar);
    }
}
if (!elementPrototype.setdisplay) {
    elementPrototype.setdisplay = function(d) { this.style.display = d; return this }
}
if (!elementPrototype.addEvent) {
    elementPrototype.addEvent = function(eventName, fn, bool) {
        bool = (typeof bool != "undefined") ? bool : false;
        var old = this["on" + eventName] || function() {};
        this["on" + eventName] = function() {
            old.apply(this);
            fn.apply(this);
        };
        return this;
    }
}
window.addEvent = function(eventName, fn) {
    var old = this["on" + eventName] || function() {};
    this["on" + eventName] = function() {
        old.apply(this);
        fn.apply(this);
    };
    return this;
};

if (!Object.keys) {
    Object.keys = function(obj) {
        var keys = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) keys.push(i);
        }
        return keys;
    };
}
if (!Object.keyInd) {
    Object.keyInd = function(obj, prop) {
        var n = -1;
        for (var k in obj) {
            if (k == prop) return n;
            n++;
        }
        return n;
    };
}
if (!Object.hasNode) {
    Object.hasNode = function(obj, path) {
        var nodes = path.split(".");
        var curNode = obj;
        if (isEmpty(curNode)) return false;
        if (Object.keys(curNode).length > 0) {
            for (var i = 0; i < nodes.length; i++) {
                if (curNode.hasOwnProperty(nodes[i])) {
                    curNode = curNode[nodes[i]];
                    if (i >= nodes.length - 1) return true;
                }
            }
        }
        return false;
    };
}
if (!Object.extend) {
    Object.extend = function(d, s) {
        for (var p in s) d[p] = s[p];
        return d;
    };
}
if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
    window.XMLHttpRequest = function() { return new ActiveXObject('MSXML2.XMLHttp'); };
}
if (typeof console === "undefined" || typeof console.log === "undefined") {
    if (typeof console === "undefined") console = {};
    console.log = function(log_message) {
        alert(log_message);
    }
}

function isDom(obj) {
    try {
        return obj instanceof HTMLElement;
    } catch (e) {
        return (typeof obj === "object") && (obj.nodeType === 1) && (typeof obj.style === "object") && (typeof obj.ownerDocument === "object");
    }
}

function guid() {
    var S4 = function() { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function uid(l = 8) {
    var ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        r = "";
    for (var i = 0; i < l; i++) r += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    return r;
}

function newdom(tag) { return document.createElement(tag) }

function getdom(tar) { return (tar[0] === "#") ? document.getElementById(tar.substring(1)) : document.querySelectorAll(tar) }

function ajax(targetDom, cmd, params, timeout, errmsg) {
    var ps = [];
    for (var pname in params) {
        var val = params[pname] + "";
        if (typeof val == "object") {
            if (!isEmpty(val)) {
                for (var key in val) val[key] = encodeURIComponent(val[key].replace(/\+/g, "¤"));
            }
        } else {
            if (val) {
                if (val.length > 0) {
                    ps.push(pname + "=" + encodeURIComponent(val.replace(/\+/g, "¤")));
                } else {
                    ps.push(pname + "=");
                }
            } else {
                console.log("value: (" + (typeof val) + ")" + val);
                console.log("Error: Params(" + pname + ") is 'Undenfined' CANNOT be replaced!");
            }
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', cmd + ".php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.timeout = (typeof timeout !== "undefined") ? timeout : 30000;
    xhr.onerror = function() {
        targetDom.innerHTML = (typeof errmsg !== "undefined") ? errmsg : "err";
    };
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                try {
                    var tmp = decodeURIComponent(this.responseText);
                    tmp = tmp.replace(/¤/g, "+").replace(/¶/g, " ");
                    targetDom.innerHTML = tmp;
                } catch (ex) {
                    console.log(ex);
                }
            }
        }
    };
    try {
        if (ps.length > 0) {
            xhr.send(ps.join("&"));
        } else {
            xhr.send();
        }
    } catch (err) { console.log("fail to send xhr"); }
}

function ajaxSend(form, script, afterSend) {
    var es = form.elements,
        formData = {};
    for (var k in es) {
        if ((es[k].name != "") && (es[k].name != "undefined")) formData[es[k].name] = es[k].value;
    }
    formData.ajax = true;
    ajaxGet(guid(), script, formData, function(b) {
        if (typeof afterSend != "undefined") afterSend(b);
    });
}

function ajaxGet(buffername, cmd, data, fn, timeout) {
    var b = {};
    b = (isEmpty(buffername)) ? createBuffer() : createBuffer(buffername);
    ajax(b.dom, cmd, data, timeout);
    b.waitload = window.setInterval(function() {
        if (b.dom.innerHTML.length > 0) {
            window.clearInterval(b.waitload);
            try {
                b.value = JSON.parse(b.dom.innerHTML);
            } catch (err) {
                b.value = b.dom.innerHTML;
            }
            fn(b);
            removeBuffer(buffername);
            delete b;
        }
    });
}

function ajaxFiles(domId, cmd, data) {
    var x = document.getElementById(domId);
    var formdata = new FormData();
    var params = (data.hasOwnProperty("params")) ? data.params : {};
    for (var i = 0; i < x.files.length; i++) {
        formdata.append(domId + "[" + i + "]", x.files[i]);
    }
    for (var k in params) {
        var p = ((Array.isArray(params[k])) || (typeof params[k] === 'object')) ? JSON.stringify(params[k]) : params[k];
        formdata.append(k, p);
    }

    var xhr = new XMLHttpRequest();
    xhr.open("post", cmd + ".php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (data.hasOwnProperty("onload")) data.onload(this.responseText);
        } else {
            if (data.hasOwnProperty("onerror")) {
                data.onerror(this.responseText);
            } else {
                console.log("error");
            }
        }
    }
    xhr.send(formdata);
}

function ajaxClipboard(data, fn) {
    var d = (data != "") ? { data: JSON.stringify(data) } : {};
    ajaxGet(guid(), "script/clipboard", d, fn);
}

function yyyymmdd(date, d) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = date.getDate().toString();
    if (mm.length == 1) mm = "0" + mm;
    if (dd.length == 1) dd = "0" + dd;
    return yyyy + d + mm + d + dd;
}

function fullTime(date) {
    var d = "-",
        d1 = ":";
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = date.getDate().toString();
    var HH = date.getHours().toString();
    var MM = date.getMinutes().toString();
    var ss = date.getSeconds().toString();
    if (mm.length == 1) mm = "0" + mm;
    if (dd.length == 1) dd = "0" + dd;
    if (HH.length == 1) HH = "0" + HH;
    if (MM.length == 1) MM = "0" + MM;
    if (ss.length == 1) ss = "0" + ss;
    return yyyy + d + mm + d + dd + " " + HH + d1 + MM + d1 + ss;
}

function isEmpty(obj) {
    if (obj == null) return true;
    if (typeof obj === "undefined") return true;
    if (typeof obj == "object") {
        for (var key in obj) { return false; }
    }
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    return true;
}

function ln2br(str) { return str.replace(/\n/g, "\r\n"); }

function br2ln(str) { return str.replace(/<br \/>/g, "\n"); }

function clone(obj) {
    var newObj = {};
    if (isEmpty(obj)) { return undefined; }
    for (var k in obj) { newObj[k] = obj[k]; }
    return newObj;
}

function getRealObjTop(obj) { return obj.getBoundingClientRect().top }

function getRealObjLeft(obj) { return obj.getBoundingClientRect().left }

function createBuffer(bufferName) {
    if (!isEmpty(getBufferByName(bufferName))) {
        var b = getBufferByName(bufferName);
        b.dom.innerHTML = "";
        return b;
    }
    var buffer = {};
    buffer.id = "b_" + guid();
    buffer.name = (typeof bufferName != "undefined") ? bufferName : "";
    buffer.value = {};
    buffer.waitload = {};
    buffer.dom = document.createElement("div");
    buffer.dom.id = buffer.id;
    buffer.dom.name = "";
    buffer.dom.className = "buffer";
    buffer.dom.style.display = "none";
    buffer.dom.innerHTML = "";
    buffer.dom.self = buffer;
    document.body.appendChild(buffer.dom);
    return buffer;
}

function getBufferByName(bufferName) {
    var bufferDoms = document.body.querySelectorAll(".buffer");
    for (var i = 0; i < bufferDoms.length; i++) {
        if (!isEmpty(bufferDoms[i].self)) {
            if (bufferDoms[i].self.name == bufferName) return bufferDoms[i].self;
        }
    }
}

function removeBuffer(bufferName) {
    var bufferDoms = document.body.querySelectorAll(".buffer");
    for (var i = 0; i < bufferDoms.length; i++) {
        if (!isEmpty(bufferDoms[i].self)) {
            if (bufferDoms[i].self.name == bufferName) {
                bufferDoms[i].parentNode.removeChild(bufferDoms[i]);
            }
        }
    }
}

function addScript(c) {
    var h = document.head || getdom('head')[0],
        ss = getdom("script"),
        a = false;
    if (ss.length > 0) {
        for (var i = 0; i < ss.length; i++) { if (ss[i].src === c) { a = true; break; } }
    }
    if (!a) {
        s = newdom("script");
        s.type = "text/javascript";
        s.src = c;
        h.appendChild(s);
    }
}

function addStyle(c, id) {
    var h = document.head || getdom('head')[0],
        s = getdom("style");

    if (typeof id != "undefined") {
        s = getdom("#" + id);
        s.appendChild(document.createTextNode(c));
    } else {
        if (s.length > 0) {
            s[0].appendChild(document.createTextNode(c));
        } else {
            s = newdom("style");
            s.type = "text/css";
            s.appendChild(document.createTextNode(c));
            h.appendChild(s);
        }
    }
}
window.addEvent("load", function() {
    if (!window.pageYOffset) {
        window.pageYOffset = (function() {
            return (window.pageYOffset || (document.documentElement.scrollTop || document.body.parentNode.scrollTop));
        })();
    }
    if (!window.pageXOffset) {
        window.pageXOffset = (function() {
            return (window.pageXOffset || (document.documentElement.scrollLeft || document.body.parentNode.scrollLeft));
        })();
    }
});

function getData(d, fn) {
    ajaxGet(guid(), "db/dba", d, function(b) {
        fn(b);
    });
}

function isJson(str) {
    try {
        if (isNaN(str)) {
            JSON.parse(str);
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
    return true;
}

function getNumber(s, nan) {
    if ((typeof s == "undefined") || (s == "")) return 0;
    if (!isNaN(s)) return parseFloat(s);
    var d = s.replace(/[^0-9\.]/g, '');
    return (d != "") ? parseFloat(d) : "";
}

function round(n, d) {
    var d = (typeof d != "undefined") ? d : 2;
    return Math.round(getNumber(n) * Math.pow(10, d)) / Math.pow(10, d);
}

function cunit(v, o, n) {
    var u = { "cm": 1, "in": 2.54, "mm": 0.1, "m": 100 };
    return v * u[o] / u[n];
}

function getNode(obj, n, a) {
    if (typeof obj == "undefined") return false;
    var c = obj,
        nodes = n.split("."),
        lv = 0,
        r = true;
    if ((n.indexOf(".") < 0) && (typeof a == "undefined")) return obj.hasOwnProperty(n);
    while (lv < nodes.length) {
        if (c.hasOwnProperty(nodes[lv])) {
            c = c[nodes[lv]];
            lv++;
        } else {
            r = false;
            break;
        }
    }
    if (typeof a == "undefined") return r;
    return (r) ? c : a;
}

function msgbox(p, f) {
    addStyle(".msgbox {display: block;text-align: center;z-index:9999;color:#FFF;font-size:24px;}");
    addStyle(".fullscreen {position: fixed; top:0px; left:0px; right:0px; bottom:0px; background-color:rgba(0,0,0,0.7);}");
    addStyle(".msgbox-inner {display: block;text-align: center;margin-top:20%;}");
    addStyle(".msgctx {display: block;text-align:center;padding:10px;}");
    addStyle(".msgbtn {margin:5px;}");

    var box = newdom("div").addClass("msgbox").addClass("fullscreen");
    var innerBox = newdom("div").addClass("msgbox-inner");
    box.append(innerBox);
    document.body.append(box);

    var msgCtx = newdom("div").addClass("msgctx").html(getNode(p, "msg", "say something..."));
    innerBox.append(msgCtx);

    switch (getNode(p, "type", "")) {
        case "":
            var btnClose = newdom("button").addClass("btn").addClass("msgbtn").addClass("btn-primary").html("Close");
            btnClose.onclick = function() {
                box.remove();
            };
            innerBox.append(btnClose);
            break;
        case "YesAndNo":
            var btnYes = newdom("button").addClass("btn").addClass("msgbtn").addClass("btn-success").html("Yes");
            var btnNo = newdom("button").addClass("btn").addClass("msgbtn").addClass("btn-danger").html("No");

            btnYes.onclick = function() {
                if (p.hasOwnProperty("agree")) p.agree();
                box.remove();
            };
            btnNo.onclick = function() {
                box.remove();
            };
            innerBox.append(btnYes);
            innerBox.append(btnNo);
            break;
        case "OKCancel":
            var btnYes = newdom("button").addClass("btn").addClass("msgbtn").addClass("btn-success").html("OK");
            var btnNo = newdom("button").addClass("btn").addClass("msgbtn").addClass("btn-danger").html("Cancel");
            btnYes.onclick = function() {
                if (p.hasOwnProperty("agree")) p.agree();
                box.remove();
            };
            btnNo.onclick = function() {
                box.remove();
            };
            innerBox.append(btnYes);
            innerBox.append(btnNo);
            break;
        case "OKOnly":
            var btnOK = newdom("button").addClass("btn").addClass("msgbtn").addClass("btn-success").html("OK");
            btnOK.onclick = function() {
                if (p.hasOwnProperty("agree")) p.agree();
                box.remove();
            };
            innerBox.append(btnOK);
            break;
    }

    if (typeof f != "undefined") f();
}

function getTimeStamp() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = (d.getDate() >= 10) ? d.getDate() : "0" + d.getDate();
    var HH = d.getHours(),
        MM = d.getMinutes(),
        ss = d.getSeconds();

    if (mm < 10) mm = "0" + mm;
    if (HH < 10) HH = "0" + HH;
    if (MM < 10) MM = "0" + MM;
    if (ss < 10) ss = "0" + ss;
    return [d.getFullYear(), mm, dd].join('-') + ' ' + [HH, MM, ss].join(':');
}

function getToday() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = (d.getDate() >= 10) ? d.getDate() : "0" + d.getDate();
    if (mm < 10) mm = "0" + mm;
    return [d.getFullYear(), mm, dd].join('-');
}
var jQL = function(j) {
    return {
        sum: function(x) {
            var tmp = 0;
            if (typeof j == "string") {
                try {
                    j = JSON.parse(j);
                } catch (err) {
                    console.log("The value is not json");
                    return tmp;
                }
            }
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) tmp += parseFloat(getNumber(j[i][x], 0));
            } else {
                tmp = parseFloat(getNumber(j[x]));
            }
            return tmp;
        },
        sumif: function(x, cond) {
            var tmp = 0;
            if (typeof j == "string") {
                try {
                    j = JSON.parse(j);
                } catch (err) {
                    console.log("The value is not json");
                    return tmp;
                }
            }
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) {
                    try {
                        cond = cond.replace(new RegExp("`.+`", "g"), function(m) {
                            return j[i][m.substring(1, m.length - 1)];
                        });
                        if (eval(cond)) {
                            var num = getNumber(j[i][x]);
                            if (isNaN(num)) num = 0;
                            tmp += parseFloat(num);
                        }
                    } catch (err) {
                        console.log("calc cond error");
                        return tmp;
                    }
                }
            } else {
                tmp = parseFloat(getNumber(j[x]));
            }
            return tmp;
        },
        sumproduct: function() {
            var tmp = 0,
                v = 1;
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) {
                    v = 1;
                    for (var m = 0; m < arguments.length; m++) v *= parseFloat(getNumber(j[i][arguments[m]]));
                    tmp += v;
                }
            } else {
                for (var m = 0; m < arguments.length; m++) v *= parseFloat(j[arguments[m]]);
                tmp = v;
            }
            return tmp;
        },
        keys: function() {
            if (Array.isArray(j)) {
                return (j.length > 0) ? Object.keys(j[0]) : [];
            } else {
                return Object.keys(j);
            }
        },
        vals: function(x) {
            var tmp = [];
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) tmp.push(j[i][x]);
            } else {
                tmp.push(j[i][x]);
            }
            return tmp;
        },
        rows: function(n) {
            if (Array.isArray(j)) {
                return j[n];
            } else {
                return j;
            }
        },
        concat: function() {
            var tmp = [],
                ln = "";
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) {
                    ln = "";
                    for (var m = 0; m < arguments.length; m++) {
                        ln += (j[i].hasOwnProperty(arguments[m])) ? j[i][arguments[m]] : arguments[m];
                    }
                    tmp.push(ln);
                }
            } else {
                for (var m = 0; m < arguments.length; m++) ln += (j.hasOwnProperty(arguments[m])) ? j[arguments[m]] : arguments[m];
                tmp.push(ln);
            }
            return tmp;
        },
        concatText: function(t) {
            var tmp = [],
                ln = "",
                empty = t.replace(/{[\d|\w]+}/g, "");
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) {
                    ln = t;
                    for (var k in j[i]) ln = ln.replace(new RegExp("{" + k + "}", "g"), j[i][k]); //{[\d|\w]+}
                    ln = ln.replace(/{[\d|\w]+}/g, "");
                    tmp.push((ln != empty) ? ln : "");
                }
            } else {
                for (var k in j) ln = ln.replace(new RegExp("{" + k + "}", "g"), j[k]);
                ln = ln.replace(/{[\d|\w]+}/g, "");
                tmp.push((ln != empty) ? ln : "");
            }
            return tmp;
        },
        lookup: function(f, k, kv) {
            if (Array.isArray(j)) {
                for (var i = 0; i < j.length; i++) {
                    if (j[i][k] == kv) return j[i][f];
                }
                return "";
            } else {
                return j[f];
            }
        }
    }
};
//})();