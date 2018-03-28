var dxx = (function() {
    var dxData = { val: {}, ctx: {} },
        re = new RegExp('\{\{[^\{]*\}\}', 'g'),
        arr;

    function getDB(dbname,tblname, dbuser, dbpass) {

    }
    function dxValue(n, v, d) {
        var self = this;
        this.name = n;
        this.value = v;
        this.binds = [];

        this.dom = (typeof d != "undefined") ? d : null;

        function updateVal() {
            self.value = this.value;
            self.updateBinds();
        };

        if (this.dom != null) { //bind dom
            switch (this.dom.tagName) {
                case "TEXTAREA":
                case "INPUT":
                    this.dom.addEvent("input", function() {updateVal.apply(this)});
                    break;
                case "SELECT":
                default:
                    this.dom.addEvent("change", function() {updateVal.apply(this)});
                    break;
            }
        }

        this.addBind = function(dom) {
            this.binds.push(dom);
        };
        this.updateBinds = function() {
            for (var i = 0; i < this.binds.length; i++) {
                this.binds[i].update();
            }
        };
    }

    function dxContext(n, d) {
        var self = this;
        this.name = n;
        this.dom = d;
        this.src = this.dom.html();
        this.nodes = [];

        function digNodes(n) {
            if (n.childNodes.length > 0) {
                var ns = n.childNodes;
                for (var i = 0; i < ns.length; i++) {
                    if (ns[i].nodeType == 3) {
                        ns[i].src = ns[i].nodeValue;
                        self.nodes.push(ns[i]);
                    } else {
                        digNodes(ns[i]);
                    }
                }
            }
        }
        digNodes(this.dom);

        function writeVal(txt) {
            var html = txt;
            html = html.replace(re, function(match) {
                var m = match.replace(/\s/g, "").replace("{{", "").replace("}}", "");
                if (!/\W/.test(m)) {
                    return (dxData.val.hasOwnProperty(m)) ? dxData.val[m].value : match;
                } else {
                    var tmp = m;
                    var vs = m.split(/\W/);
                    for (var i = 0; i < vs.length; i++) {
                        if (dxData.val.hasOwnProperty(vs[i])) {
                            tmp = tmp.replace(vs[i], dxData.val[vs[i]].value);
                        }
                    }
                    tmp = eval(tmp);
                    return tmp;
                }
            });
            return html;
        }

        this.update = function() {
            var cs = this.nodes;
            for (var i = 0; i < cs.length; i++) {
                cs[i].nodeValue = writeVal(cs[i].src);
            }

            var html = this.src;
            html = writeVal(html);
        };

        this.build = function() {
            var html = this.src;
            html = html.replace(re, function(match) {
                var m = match.replace(/\s/g, "").replace("{{", "").replace("}}", "");
                if (!/\W/.test(m)) {
                    if (dxData.val.hasOwnProperty(m)) {
                        dxData.val[m].addBind(self);
                    }
                } else {
                    var vs = m.split(/\W/);
                    for (var i = 0; i < vs.length; i++) {
                        if (dxData.val.hasOwnProperty(vs[i])) {
                            dxData.val[vs[i]].addBind(self);
                        }
                    }
                }
                return (dxData.val.hasOwnProperty(m)) ? dxData.val[m].value : match;
            });
        };

        this.build();
        this.update();
    }

    window.addEvent("load", function() {
        arr = getdom("dx-val"); //Get Variables
        for (var i = 0; i < arr.length; i++) {
            var n = arr[i].getAttribute("name");
            dxData.val[n] = new dxValue(n, arr[i].getAttribute("value"));
        }

        arr = getdom("[dx-val]"); //Get Inputs
        for (var i = 0; i < arr.length; i++) {
            n = arr[i].getAttribute("dx-val");
            dxData.val[n] = new dxValue(n, arr[i].value, arr[i]);
        }

        arr = getdom("[dx]");
        for (var i = 0; i < arr.length; i++) {
            dxData.ctx[i] = new dxContext(i, arr[i]);
        }
    });
})();