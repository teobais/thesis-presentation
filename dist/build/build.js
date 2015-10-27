(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+java+markdown+perl+php+python+sql+yaml */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==n)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},plugins:{},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),l=0;a=r[l++];)t.highlightElement(a,e===!0,n)},highlightElement:function(n,a,r){for(var l,i,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=t.languages[l]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=n.textContent,u={element:n,language:l,grammar:i,code:s};if(!s||!i)return t.hooks.run("complete",u),void 0;if(t.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=e.data,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},highlight:function(e,a,r){var l=t.tokenize(e,a);return n.stringify(t.util.encode(l),r)},tokenize:function(e,n){var a=t.Token,r=[e],l=n.rest;if(l){for(var i in l)n[i]=l[i];delete n.rest}e:for(var i in n)if(n.hasOwnProperty(i)&&n[i]){var o=n[i];o="Array"===t.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),P=[p,1];b&&P.push(b);var A=new a(i,g?t.tokenize(m,g):m,h);P.push(A),w&&P.push(w),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var l={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}t.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code,l=n.immediateClose;_self.postMessage(t.highlight(r,t.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}});
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold);
Prism.languages.perl={comment:[{pattern:/(^\s*)=\w+[\s\S]*?=cut.*/m,lookbehind:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0}],string:[/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,/\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/,/\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,/\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,/\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,/\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,/("|`)(?:[^\\]|\\[\s\S])*?\1/,/'(?:[^'\\\r\n]|\\.)*'/],regex:[/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/,/\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/,/\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,/\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,/\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,/\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,{pattern:/(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,lookbehind:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,lookbehind:!0},/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*>|\b_\b/,alias:"symbol"},vstring:{pattern:/v\d+(\.\d+)*|\d+(\.\d+){2,}/,alias:"string"},"function":{pattern:/sub [a-z0-9_]+/i,inside:{keyword:/sub/}},keyword:/\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,punctuation:/[{}[\];(),:]/};
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(a){return e.tokenStack.push(a),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var a,n=0;a=e.tokenStack[n];n++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(n+1)+"}}}",Prism.highlight(a,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/}));
Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/};
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*[:\-,[{\r\n?][ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var backdrops;

    function createBackdropForSlide(slide) {
      var backdropAttribute = slide.getAttribute('data-bespoke-backdrop');

      if (backdropAttribute) {
        var backdrop = document.createElement('div');
        backdrop.className = backdropAttribute;
        backdrop.classList.add('bespoke-backdrop');
        deck.parent.appendChild(backdrop);
        return backdrop;
      }
    }

    function updateClasses(el) {
      if (el) {
        var index = backdrops.indexOf(el),
          currentIndex = deck.slide();

        removeClass(el, 'active');
        removeClass(el, 'inactive');
        removeClass(el, 'before');
        removeClass(el, 'after');

        if (index !== currentIndex) {
          addClass(el, 'inactive');
          addClass(el, index < currentIndex ? 'before' : 'after');
        } else {
          addClass(el, 'active');
        }
      }
    }

    function removeClass(el, className) {
      el.classList.remove('bespoke-backdrop-' + className);
    }

    function addClass(el, className) {
      el.classList.add('bespoke-backdrop-' + className);
    }

    backdrops = deck.slides
      .map(createBackdropForSlide);

    deck.on('activate', function() {
      backdrops.forEach(updateClasses);
    });
  };
};

},{}],3:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1;

        if (activeSlideHasBulletByOffset(1)) {
          activateBullet(activeSlideIndex, activeBulletIndex + 1);
          return false;
        } else if (bullets[nextSlideIndex]) {
          activateBullet(nextSlideIndex, 0);
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1;

        if (activeSlideHasBulletByOffset(-1)) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        } else if (bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    activateBullet(0, 0);
  };
};

},{}],4:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    deck.slides.forEach(function(slide) {
      slide.addEventListener('keydown', function(e) {
        if (/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName) || e.target.contentEditable === 'true') {
          e.stopPropagation();
        }
      });
    });
  };
};

},{}],5:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var parseHash = function() {
      var hash = window.location.hash.slice(1),
        slideNumberOrName = parseInt(hash, 10);

      if (hash) {
        if (slideNumberOrName) {
          activateSlide(slideNumberOrName - 1);
        } else {
          deck.slides.forEach(function(slide, i) {
            if (slide.getAttribute('data-bespoke-hash') === hash) {
              activateSlide(i);
            }
          });
        }
      }
    };

    var activateSlide = function(index) {
      var indexToActivate = -1 < index && index < deck.slides.length ? index : 0;
      if (indexToActivate !== deck.slide()) {
        deck.slide(indexToActivate);
      }
    };

    setTimeout(function() {
      parseHash();

      deck.on('activate', function(e) {
        var slideName = e.slide.getAttribute('data-bespoke-hash');
        window.location.hash = slideName || e.index + 1;
      });

      window.addEventListener('hashchange', parseHash);
    }, 0);
  };
};

},{}],6:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical';

    document.addEventListener('keydown', function(e) {
      if (e.which == 34 || // PAGE DOWN
        (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
        (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
        (isHorizontal && e.which == 37) || // LEFT
        (!isHorizontal && e.which == 38) // UP
      ) { deck.prev(); }
    });
  };
};

},{}],7:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressParent.appendChild(progressBar);
    deck.parent.appendChild(progressParent);

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
    });
  };
};

},{}],8:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      firstSlide = deck.slides[0],
      slideHeight = firstSlide.offsetHeight,
      slideWidth = firstSlide.offsetWidth,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform'),

      wrap = function(element) {
        var wrapper = document.createElement('div');
        wrapper.className = 'bespoke-scale-parent';
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        return wrapper;
      },

      elements = useZoom ? deck.slides : deck.slides.map(wrap),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = parent.offsetHeight / slideHeight;

        elements.forEach(scale.bind(null, Math.min(xScale, yScale)));
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};

},{}],9:[function(require,module,exports){
(function (global){
/*!
 * bespoke-theme-cube v2.0.1
 *
 * Copyright 2014, Mark Dalgleish
 * This content is released under the MIT license
 * http://mit-license.org/markdalgleish
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.cube=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cube-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-slide{pointer-events:auto;-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);

    var wrap = function(element) {
      var wrapper = document.createElement('div');
      wrapper.className = 'bespoke-theme-cube-slide-parent';
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
    };

    deck.slides.forEach(wrap);
  };
};

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var axis = options == 'vertical' ? 'Y' : 'X',
      startPosition,
      delta;

    deck.parent.addEventListener('touchstart', function(e) {
      if (e.touches.length == 1) {
        startPosition = e.touches[0]['page' + axis];
        delta = 0;
      }
    });

    deck.parent.addEventListener('touchmove', function(e) {
      if (e.touches.length == 1) {
        e.preventDefault();
        delta = e.touches[0]['page' + axis] - startPosition;
      }
    });

    deck.parent.addEventListener('touchend', function() {
      if (Math.abs(delta) > 50) {
        deck[delta > 0 ? 'prev' : 'next']();
      }
    });
  };
};

},{}],11:[function(require,module,exports){
var from = function(opts, plugins) {
  var parent = (opts.parent || opts).nodeType === 1 ? (opts.parent || opts) : document.querySelector(opts.parent || opts),
    slides = [].filter.call(typeof opts.slides === 'string' ? parent.querySelectorAll(opts.slides) : (opts.slides || parent.children), function(el) { return el.nodeName !== 'SCRIPT'; }),
    activeSlide = slides[0],
    listeners = {},

    activate = function(index, customData) {
      if (!slides[index]) {
        return;
      }

      fire('deactivate', createEventData(activeSlide, customData));
      activeSlide = slides[index];
      fire('activate', createEventData(activeSlide, customData));
    },

    slide = function(index, customData) {
      if (arguments.length) {
        fire('slide', createEventData(slides[index], customData)) && activate(index, customData);
      } else {
        return slides.indexOf(activeSlide);
      }
    },

    step = function(offset, customData) {
      var slideIndex = slides.indexOf(activeSlide) + offset;

      fire(offset > 0 ? 'next' : 'prev', createEventData(activeSlide, customData)) && activate(slideIndex, customData);
    },

    on = function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
      return off.bind(null, eventName, callback);
    },

    off = function(eventName, callback) {
      listeners[eventName] = (listeners[eventName] || []).filter(function(listener) { return listener !== callback; });
    },

    fire = function(eventName, eventData) {
      return (listeners[eventName] || [])
        .reduce(function(notCancelled, callback) {
          return notCancelled && callback(eventData) !== false;
        }, true);
    },

    createEventData = function(el, eventData) {
      eventData = eventData || {};
      eventData.index = slides.indexOf(el);
      eventData.slide = el;
      return eventData;
    },

    deck = {
      on: on,
      off: off,
      fire: fire,
      slide: slide,
      next: step.bind(null, 1),
      prev: step.bind(null, -1),
      parent: parent,
      slides: slides
    };

  (plugins || []).forEach(function(plugin) {
    plugin(deck);
  });

  activate(0);

  return deck;
};

module.exports = {
  from: from
};

},{}],12:[function(require,module,exports){
// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require("./..\\..\\bower_components\\prism\\prism.js");


},{"./..\\..\\bower_components\\prism\\prism.js":1,"bespoke":11,"bespoke-backdrop":2,"bespoke-bullets":3,"bespoke-forms":4,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-theme-cube":9,"bespoke-touch":10}]},{},[12])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxUaG9kb3Jpc1xccHJvamVjdHNcXGdpdFxcdGhlc2lzLXByZXNlbnRhdGlvblxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVGhvZG9yaXMvcHJvamVjdHMvZ2l0L3RoZXNpcy1wcmVzZW50YXRpb24vYm93ZXJfY29tcG9uZW50cy9wcmlzbS9wcmlzbS5qcyIsIkM6L1Rob2RvcmlzL3Byb2plY3RzL2dpdC90aGVzaXMtcHJlc2VudGF0aW9uL25vZGVfbW9kdWxlcy9iZXNwb2tlLWJhY2tkcm9wL2xpYi9iZXNwb2tlLWJhY2tkcm9wLmpzIiwiQzovVGhvZG9yaXMvcHJvamVjdHMvZ2l0L3RoZXNpcy1wcmVzZW50YXRpb24vbm9kZV9tb2R1bGVzL2Jlc3Bva2UtYnVsbGV0cy9saWIvYmVzcG9rZS1idWxsZXRzLmpzIiwiQzovVGhvZG9yaXMvcHJvamVjdHMvZ2l0L3RoZXNpcy1wcmVzZW50YXRpb24vbm9kZV9tb2R1bGVzL2Jlc3Bva2UtZm9ybXMvbGliL2Jlc3Bva2UtZm9ybXMuanMiLCJDOi9UaG9kb3Jpcy9wcm9qZWN0cy9naXQvdGhlc2lzLXByZXNlbnRhdGlvbi9ub2RlX21vZHVsZXMvYmVzcG9rZS1oYXNoL2xpYi9iZXNwb2tlLWhhc2guanMiLCJDOi9UaG9kb3Jpcy9wcm9qZWN0cy9naXQvdGhlc2lzLXByZXNlbnRhdGlvbi9ub2RlX21vZHVsZXMvYmVzcG9rZS1rZXlzL2xpYi9iZXNwb2tlLWtleXMuanMiLCJDOi9UaG9kb3Jpcy9wcm9qZWN0cy9naXQvdGhlc2lzLXByZXNlbnRhdGlvbi9ub2RlX21vZHVsZXMvYmVzcG9rZS1wcm9ncmVzcy9saWIvYmVzcG9rZS1wcm9ncmVzcy5qcyIsIkM6L1Rob2RvcmlzL3Byb2plY3RzL2dpdC90aGVzaXMtcHJlc2VudGF0aW9uL25vZGVfbW9kdWxlcy9iZXNwb2tlLXNjYWxlL2xpYi9iZXNwb2tlLXNjYWxlLmpzIiwiQzovVGhvZG9yaXMvcHJvamVjdHMvZ2l0L3RoZXNpcy1wcmVzZW50YXRpb24vbm9kZV9tb2R1bGVzL2Jlc3Bva2UtdGhlbWUtY3ViZS9kaXN0L2Jlc3Bva2UtdGhlbWUtY3ViZS5qcyIsIkM6L1Rob2RvcmlzL3Byb2plY3RzL2dpdC90aGVzaXMtcHJlc2VudGF0aW9uL25vZGVfbW9kdWxlcy9iZXNwb2tlLXRvdWNoL2xpYi9iZXNwb2tlLXRvdWNoLmpzIiwiQzovVGhvZG9yaXMvcHJvamVjdHMvZ2l0L3RoZXNpcy1wcmVzZW50YXRpb24vbm9kZV9tb2R1bGVzL2Jlc3Bva2UvbGliL2Jlc3Bva2UuanMiLCJDOi9UaG9kb3Jpcy9wcm9qZWN0cy9naXQvdGhlc2lzLXByZXNlbnRhdGlvbi9zcmMvc2NyaXB0cy9mYWtlX2ZiN2RiNzQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qIGh0dHA6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sP3RoZW1lcz1wcmlzbS1va2FpZGlhJmxhbmd1YWdlcz1tYXJrdXArY3NzK2NsaWtlK2phdmFzY3JpcHQramF2YSttYXJrZG93bitwZXJsK3BocCtweXRob24rc3FsK3lhbWwgKi9cbnZhciBfc2VsZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUmJnNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZT9zZWxmOnt9LFByaXNtPWZ1bmN0aW9uKCl7dmFyIGU9L1xcYmxhbmcoPzp1YWdlKT8tKD8hXFwqKShcXHcrKVxcYi9pLHQ9X3NlbGYuUHJpc209e3V0aWw6e2VuY29kZTpmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIG4/bmV3IG4oZS50eXBlLHQudXRpbC5lbmNvZGUoZS5jb250ZW50KSxlLmFsaWFzKTpcIkFycmF5XCI9PT10LnV0aWwudHlwZShlKT9lLm1hcCh0LnV0aWwuZW5jb2RlKTplLnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvXFx1MDBhMC9nLFwiIFwiKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLm1hdGNoKC9cXFtvYmplY3QgKFxcdyspXFxdLylbMV19LGNsb25lOmZ1bmN0aW9uKGUpe3ZhciBuPXQudXRpbC50eXBlKGUpO3N3aXRjaChuKXtjYXNlXCJPYmplY3RcIjp2YXIgYT17fTtmb3IodmFyIHIgaW4gZSllLmhhc093blByb3BlcnR5KHIpJiYoYVtyXT10LnV0aWwuY2xvbmUoZVtyXSkpO3JldHVybiBhO2Nhc2VcIkFycmF5XCI6cmV0dXJuIGUubWFwJiZlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdC51dGlsLmNsb25lKGUpfSl9cmV0dXJuIGV9fSxsYW5ndWFnZXM6e2V4dGVuZDpmdW5jdGlvbihlLG4pe3ZhciBhPXQudXRpbC5jbG9uZSh0Lmxhbmd1YWdlc1tlXSk7Zm9yKHZhciByIGluIG4pYVtyXT1uW3JdO3JldHVybiBhfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSxuLGEscil7cj1yfHx0Lmxhbmd1YWdlczt2YXIgbD1yW2VdO2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpe2E9YXJndW1lbnRzWzFdO2Zvcih2YXIgaSBpbiBhKWEuaGFzT3duUHJvcGVydHkoaSkmJihsW2ldPWFbaV0pO3JldHVybiBsfXZhciBvPXt9O2Zvcih2YXIgcyBpbiBsKWlmKGwuaGFzT3duUHJvcGVydHkocykpe2lmKHM9PW4pZm9yKHZhciBpIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShpKSYmKG9baV09YVtpXSk7b1tzXT1sW3NdfXJldHVybiB0Lmxhbmd1YWdlcy5ERlModC5sYW5ndWFnZXMsZnVuY3Rpb24odCxuKXtuPT09cltlXSYmdCE9ZSYmKHRoaXNbdF09byl9KSxyW2VdPW99LERGUzpmdW5jdGlvbihlLG4sYSl7Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKG4uY2FsbChlLHIsZVtyXSxhfHxyKSxcIk9iamVjdFwiPT09dC51dGlsLnR5cGUoZVtyXSk/dC5sYW5ndWFnZXMuREZTKGVbcl0sbik6XCJBcnJheVwiPT09dC51dGlsLnR5cGUoZVtyXSkmJnQubGFuZ3VhZ2VzLkRGUyhlW3JdLG4scikpfX0scGx1Z2luczp7fSxoaWdobGlnaHRBbGw6ZnVuY3Rpb24oZSxuKXtmb3IodmFyIGEscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZScpLGw9MDthPXJbbCsrXTspdC5oaWdobGlnaHRFbGVtZW50KGEsZT09PSEwLG4pfSxoaWdobGlnaHRFbGVtZW50OmZ1bmN0aW9uKG4sYSxyKXtmb3IodmFyIGwsaSxvPW47byYmIWUudGVzdChvLmNsYXNzTmFtZSk7KW89by5wYXJlbnROb2RlO28mJihsPShvLmNsYXNzTmFtZS5tYXRjaChlKXx8WyxcIlwiXSlbMV0saT10Lmxhbmd1YWdlc1tsXSksbi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZShlLFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikrXCIgbGFuZ3VhZ2UtXCIrbCxvPW4ucGFyZW50Tm9kZSwvcHJlL2kudGVzdChvLm5vZGVOYW1lKSYmKG8uY2xhc3NOYW1lPW8uY2xhc3NOYW1lLnJlcGxhY2UoZSxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpK1wiIGxhbmd1YWdlLVwiK2wpO3ZhciBzPW4udGV4dENvbnRlbnQsdT17ZWxlbWVudDpuLGxhbmd1YWdlOmwsZ3JhbW1hcjppLGNvZGU6c307aWYoIXN8fCFpKXJldHVybiB0Lmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsdSksdm9pZCAwO2lmKHQuaG9va3MucnVuKFwiYmVmb3JlLWhpZ2hsaWdodFwiLHUpLGEmJl9zZWxmLldvcmtlcil7dmFyIGc9bmV3IFdvcmtlcih0LmZpbGVuYW1lKTtnLm9ubWVzc2FnZT1mdW5jdGlvbihlKXt1LmhpZ2hsaWdodGVkQ29kZT1lLmRhdGEsdC5ob29rcy5ydW4oXCJiZWZvcmUtaW5zZXJ0XCIsdSksdS5lbGVtZW50LmlubmVySFRNTD11LmhpZ2hsaWdodGVkQ29kZSxyJiZyLmNhbGwodS5lbGVtZW50KSx0Lmhvb2tzLnJ1bihcImFmdGVyLWhpZ2hsaWdodFwiLHUpLHQuaG9va3MucnVuKFwiY29tcGxldGVcIix1KX0sZy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7bGFuZ3VhZ2U6dS5sYW5ndWFnZSxjb2RlOnUuY29kZSxpbW1lZGlhdGVDbG9zZTohMH0pKX1lbHNlIHUuaGlnaGxpZ2h0ZWRDb2RlPXQuaGlnaGxpZ2h0KHUuY29kZSx1LmdyYW1tYXIsdS5sYW5ndWFnZSksdC5ob29rcy5ydW4oXCJiZWZvcmUtaW5zZXJ0XCIsdSksdS5lbGVtZW50LmlubmVySFRNTD11LmhpZ2hsaWdodGVkQ29kZSxyJiZyLmNhbGwobiksdC5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIix1KSx0Lmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsdSl9LGhpZ2hsaWdodDpmdW5jdGlvbihlLGEscil7dmFyIGw9dC50b2tlbml6ZShlLGEpO3JldHVybiBuLnN0cmluZ2lmeSh0LnV0aWwuZW5jb2RlKGwpLHIpfSx0b2tlbml6ZTpmdW5jdGlvbihlLG4pe3ZhciBhPXQuVG9rZW4scj1bZV0sbD1uLnJlc3Q7aWYobCl7Zm9yKHZhciBpIGluIGwpbltpXT1sW2ldO2RlbGV0ZSBuLnJlc3R9ZTpmb3IodmFyIGkgaW4gbilpZihuLmhhc093blByb3BlcnR5KGkpJiZuW2ldKXt2YXIgbz1uW2ldO289XCJBcnJheVwiPT09dC51dGlsLnR5cGUobyk/bzpbb107Zm9yKHZhciBzPTA7czxvLmxlbmd0aDsrK3Mpe3ZhciB1PW9bc10sZz11Lmluc2lkZSxjPSEhdS5sb29rYmVoaW5kLGY9MCxoPXUuYWxpYXM7dT11LnBhdHRlcm58fHU7Zm9yKHZhciBwPTA7cDxyLmxlbmd0aDtwKyspe3ZhciBkPXJbcF07aWYoci5sZW5ndGg+ZS5sZW5ndGgpYnJlYWsgZTtpZighKGQgaW5zdGFuY2VvZiBhKSl7dS5sYXN0SW5kZXg9MDt2YXIgbT11LmV4ZWMoZCk7aWYobSl7YyYmKGY9bVsxXS5sZW5ndGgpO3ZhciB5PW0uaW5kZXgtMStmLG09bVswXS5zbGljZShmKSx2PW0ubGVuZ3RoLGs9eSt2LGI9ZC5zbGljZSgwLHkrMSksdz1kLnNsaWNlKGsrMSksUD1bcCwxXTtiJiZQLnB1c2goYik7dmFyIEE9bmV3IGEoaSxnP3QudG9rZW5pemUobSxnKTptLGgpO1AucHVzaChBKSx3JiZQLnB1c2godyksQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShyLFApfX19fX1yZXR1cm4gcn0saG9va3M6e2FsbDp7fSxhZGQ6ZnVuY3Rpb24oZSxuKXt2YXIgYT10Lmhvb2tzLmFsbDthW2VdPWFbZV18fFtdLGFbZV0ucHVzaChuKX0scnVuOmZ1bmN0aW9uKGUsbil7dmFyIGE9dC5ob29rcy5hbGxbZV07aWYoYSYmYS5sZW5ndGgpZm9yKHZhciByLGw9MDtyPWFbbCsrXTspcihuKX19fSxuPXQuVG9rZW49ZnVuY3Rpb24oZSx0LG4pe3RoaXMudHlwZT1lLHRoaXMuY29udGVudD10LHRoaXMuYWxpYXM9bn07aWYobi5zdHJpbmdpZnk9ZnVuY3Rpb24oZSxhLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKFwiQXJyYXlcIj09PXQudXRpbC50eXBlKGUpKXJldHVybiBlLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbi5zdHJpbmdpZnkodCxhLGUpfSkuam9pbihcIlwiKTt2YXIgbD17dHlwZTplLnR5cGUsY29udGVudDpuLnN0cmluZ2lmeShlLmNvbnRlbnQsYSxyKSx0YWc6XCJzcGFuXCIsY2xhc3NlczpbXCJ0b2tlblwiLGUudHlwZV0sYXR0cmlidXRlczp7fSxsYW5ndWFnZTphLHBhcmVudDpyfTtpZihcImNvbW1lbnRcIj09bC50eXBlJiYobC5hdHRyaWJ1dGVzLnNwZWxsY2hlY2s9XCJ0cnVlXCIpLGUuYWxpYXMpe3ZhciBpPVwiQXJyYXlcIj09PXQudXRpbC50eXBlKGUuYWxpYXMpP2UuYWxpYXM6W2UuYWxpYXNdO0FycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGwuY2xhc3NlcyxpKX10Lmhvb2tzLnJ1bihcIndyYXBcIixsKTt2YXIgbz1cIlwiO2Zvcih2YXIgcyBpbiBsLmF0dHJpYnV0ZXMpbys9KG8/XCIgXCI6XCJcIikrcysnPVwiJysobC5hdHRyaWJ1dGVzW3NdfHxcIlwiKSsnXCInO3JldHVyblwiPFwiK2wudGFnKycgY2xhc3M9XCInK2wuY2xhc3Nlcy5qb2luKFwiIFwiKSsnXCIgJytvK1wiPlwiK2wuY29udGVudCtcIjwvXCIrbC50YWcrXCI+XCJ9LCFfc2VsZi5kb2N1bWVudClyZXR1cm4gX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcj8oX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKXt2YXIgbj1KU09OLnBhcnNlKGUuZGF0YSksYT1uLmxhbmd1YWdlLHI9bi5jb2RlLGw9bi5pbW1lZGlhdGVDbG9zZTtfc2VsZi5wb3N0TWVzc2FnZSh0LmhpZ2hsaWdodChyLHQubGFuZ3VhZ2VzW2FdLGEpKSxsJiZfc2VsZi5jbG9zZSgpfSwhMSksX3NlbGYuUHJpc20pOl9zZWxmLlByaXNtO3ZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO3JldHVybiBhPWFbYS5sZW5ndGgtMV0sYSYmKHQuZmlsZW5hbWU9YS5zcmMsZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciYmIWEuaGFzQXR0cmlidXRlKFwiZGF0YS1tYW51YWxcIikmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsdC5oaWdobGlnaHRBbGwpKSxfc2VsZi5QcmlzbX0oKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPVByaXNtKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiYoZ2xvYmFsLlByaXNtPVByaXNtKTtcblByaXNtLmxhbmd1YWdlcy5tYXJrdXA9e2NvbW1lbnQ6LzwhLS1bXFx3XFxXXSo/LS0+Lyxwcm9sb2c6LzxcXD9bXFx3XFxXXSs/XFw/Pi8sZG9jdHlwZTovPCFET0NUWVBFW1xcd1xcV10rPz4vLGNkYXRhOi88IVxcW0NEQVRBXFxbW1xcd1xcV10qP11dPi9pLHRhZzp7cGF0dGVybjovPFxcLz8oPyFcXGQpW15cXHM+XFwvPS4kPF0rKD86XFxzK1teXFxzPlxcLz1dKyg/Oj0oPzooXCJ8JykoPzpcXFxcXFwxfFxcXFw/KD8hXFwxKVtcXHdcXFddKSpcXDF8W15cXHMnXCI+PV0rKSk/KSpcXHMqXFwvPz4vaSxpbnNpZGU6e3RhZzp7cGF0dGVybjovXjxcXC8/W15cXHM+XFwvXSsvaSxpbnNpZGU6e3B1bmN0dWF0aW9uOi9ePFxcLz8vLG5hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX0sXCJhdHRyLXZhbHVlXCI6e3BhdHRlcm46Lz0oPzooJ3xcIilbXFx3XFxXXSo/KFxcMSl8W15cXHM+XSspL2ksaW5zaWRlOntwdW5jdHVhdGlvbjovWz0+XCInXS99fSxwdW5jdHVhdGlvbjovXFwvPz4vLFwiYXR0ci1uYW1lXCI6e3BhdHRlcm46L1teXFxzPlxcL10rLyxpbnNpZGU6e25hbWVzcGFjZTovXlteXFxzPlxcLzpdKzovfX19fSxlbnRpdHk6LyYjP1tcXGRhLXpdezEsOH07L2l9LFByaXNtLmhvb2tzLmFkZChcIndyYXBcIixmdW5jdGlvbihhKXtcImVudGl0eVwiPT09YS50eXBlJiYoYS5hdHRyaWJ1dGVzLnRpdGxlPWEuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sXCImXCIpKX0pLFByaXNtLmxhbmd1YWdlcy54bWw9UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCxQcmlzbS5sYW5ndWFnZXMuaHRtbD1QcmlzbS5sYW5ndWFnZXMubWFya3VwLFByaXNtLmxhbmd1YWdlcy5tYXRobWw9UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCxQcmlzbS5sYW5ndWFnZXMuc3ZnPVByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMuY3NzPXtjb21tZW50Oi9cXC9cXCpbXFx3XFxXXSo/XFwqXFwvLyxhdHJ1bGU6e3BhdHRlcm46L0BbXFx3LV0rPy4qPyg7fCg/PVxccypcXHspKS9pLGluc2lkZTp7cnVsZTovQFtcXHctXSsvfX0sdXJsOi91cmxcXCgoPzooW1wiJ10pKFxcXFwoPzpcXHJcXG58W1xcd1xcV10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDF8Lio/KVxcKS9pLHNlbGVjdG9yOi9bXlxce1xcfVxcc11bXlxce1xcfTtdKj8oPz1cXHMqXFx7KS8sc3RyaW5nOi8oXCJ8JykoXFxcXCg/OlxcclxcbnxbXFx3XFxXXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8scHJvcGVydHk6LyhcXGJ8XFxCKVtcXHctXSsoPz1cXHMqOikvaSxpbXBvcnRhbnQ6L1xcQiFpbXBvcnRhbnRcXGIvaSxcImZ1bmN0aW9uXCI6L1stYS16MC05XSsoPz1cXCgpL2kscHVuY3R1YXRpb246L1soKXt9OzpdL30sUHJpc20ubGFuZ3VhZ2VzLmNzcy5hdHJ1bGUuaW5zaWRlLnJlc3Q9UHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMuY3NzKSxQcmlzbS5sYW5ndWFnZXMubWFya3VwJiYoUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcIm1hcmt1cFwiLFwidGFnXCIse3N0eWxlOntwYXR0ZXJuOi8oPHN0eWxlW1xcd1xcV10qPz4pW1xcd1xcV10qPyg/PTxcXC9zdHlsZT4pL2ksbG9va2JlaGluZDohMCxpbnNpZGU6UHJpc20ubGFuZ3VhZ2VzLmNzcyxhbGlhczpcImxhbmd1YWdlLWNzc1wifX0pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJpbnNpZGVcIixcImF0dHItdmFsdWVcIix7XCJzdHlsZS1hdHRyXCI6e3BhdHRlcm46L1xccypzdHlsZT0oXCJ8JykuKj9cXDEvaSxpbnNpZGU6e1wiYXR0ci1uYW1lXCI6e3BhdHRlcm46L15cXHMqc3R5bGUvaSxpbnNpZGU6UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlfSxwdW5jdHVhdGlvbjovXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFwiYXR0ci12YWx1ZVwiOntwYXR0ZXJuOi8uKy9pLGluc2lkZTpQcmlzbS5sYW5ndWFnZXMuY3NzfX0sYWxpYXM6XCJsYW5ndWFnZS1jc3NcIn19LFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnKSk7XG5QcmlzbS5sYW5ndWFnZXMuY2xpa2U9e2NvbW1lbnQ6W3twYXR0ZXJuOi8oXnxbXlxcXFxdKVxcL1xcKltcXHdcXFddKj9cXCpcXC8vLGxvb2tiZWhpbmQ6ITB9LHtwYXR0ZXJuOi8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sbG9va2JlaGluZDohMH1dLHN0cmluZzovKFtcIiddKShcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcImNsYXNzLW5hbWVcIjp7cGF0dGVybjovKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbYS16MC05X1xcLlxcXFxdKy9pLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntwdW5jdHVhdGlvbjovKFxcLnxcXFxcKS99fSxrZXl3b3JkOi9cXGIoaWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcImJvb2xlYW5cIjovXFxiKHRydWV8ZmFsc2UpXFxiLyxcImZ1bmN0aW9uXCI6L1thLXowLTlfXSsoPz1cXCgpL2ksbnVtYmVyOi9cXGItPyg/OjB4W1xcZGEtZl0rfFxcZCpcXC4/XFxkKyg/OmVbKy1dP1xcZCspPylcXGIvaSxvcGVyYXRvcjovLS0/fFxcK1xcKz98IT0/PT98PD0/fD49P3w9PT89P3wmJj98XFx8XFx8P3xcXD98XFwqfFxcL3x+fFxcXnwlLyxwdW5jdHVhdGlvbjovW3t9W1xcXTsoKSwuOl0vfTtcblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0PVByaXNtLmxhbmd1YWdlcy5leHRlbmQoXCJjbGlrZVwiLHtrZXl3b3JkOi9cXGIoYXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLG51bWJlcjovXFxiLT8oMHhbXFxkQS1GYS1mXSt8MGJbMDFdK3wwb1swLTddK3xcXGQqXFwuP1xcZCsoW0VlXVsrLV0/XFxkKyk/fE5hTnxJbmZpbml0eSlcXGIvLFwiZnVuY3Rpb25cIjovW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSooPz1cXCgpL2l9KSxQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiamF2YXNjcmlwdFwiLFwia2V5d29yZFwiLHtyZWdleDp7cGF0dGVybjovKF58W15cXC9dKVxcLyg/IVxcLykoXFxbLis/XXxcXFxcLnxbXlxcL1xcXFxcXHJcXG5dKStcXC9bZ2lteXVdezAsNX0oPz1cXHMqKCR8W1xcclxcbiwuO30pXSkpLyxsb29rYmVoaW5kOiEwfX0pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJqYXZhc2NyaXB0XCIsXCJjbGFzcy1uYW1lXCIse1widGVtcGxhdGUtc3RyaW5nXCI6e3BhdHRlcm46L2AoPzpcXFxcYHxcXFxcP1teYF0pKmAvLGluc2lkZTp7aW50ZXJwb2xhdGlvbjp7cGF0dGVybjovXFwkXFx7W159XStcXH0vLGluc2lkZTp7XCJpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uXCI6e3BhdHRlcm46L15cXCRcXHt8XFx9JC8sYWxpYXM6XCJwdW5jdHVhdGlvblwifSxyZXN0OlByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0fX0sc3RyaW5nOi9bXFxzXFxTXSsvfX19KSxQcmlzbS5sYW5ndWFnZXMubWFya3VwJiZQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwibWFya3VwXCIsXCJ0YWdcIix7c2NyaXB0OntwYXR0ZXJuOi8oPHNjcmlwdFtcXHdcXFddKj8+KVtcXHdcXFddKj8oPz08XFwvc2NyaXB0PikvaSxsb29rYmVoaW5kOiEwLGluc2lkZTpQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCxhbGlhczpcImxhbmd1YWdlLWphdmFzY3JpcHRcIn19KSxQcmlzbS5sYW5ndWFnZXMuanM9UHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5QcmlzbS5sYW5ndWFnZXMuamF2YT1QcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKFwiY2xpa2VcIix7a2V5d29yZDovXFxiKGFic3RyYWN0fGNvbnRpbnVlfGZvcnxuZXd8c3dpdGNofGFzc2VydHxkZWZhdWx0fGdvdG98cGFja2FnZXxzeW5jaHJvbml6ZWR8Ym9vbGVhbnxkb3xpZnxwcml2YXRlfHRoaXN8YnJlYWt8ZG91YmxlfGltcGxlbWVudHN8cHJvdGVjdGVkfHRocm93fGJ5dGV8ZWxzZXxpbXBvcnR8cHVibGljfHRocm93c3xjYXNlfGVudW18aW5zdGFuY2VvZnxyZXR1cm58dHJhbnNpZW50fGNhdGNofGV4dGVuZHN8aW50fHNob3J0fHRyeXxjaGFyfGZpbmFsfGludGVyZmFjZXxzdGF0aWN8dm9pZHxjbGFzc3xmaW5hbGx5fGxvbmd8c3RyaWN0ZnB8dm9sYXRpbGV8Y29uc3R8ZmxvYXR8bmF0aXZlfHN1cGVyfHdoaWxlKVxcYi8sbnVtYmVyOi9cXGIwYlswMV0rXFxifFxcYjB4W1xcZGEtZl0qXFwuP1tcXGRhLWZwXFwtXStcXGJ8XFxiXFxkKlxcLj9cXGQrKD86ZVsrLV0/XFxkKyk/W2RmXT9cXGIvaSxvcGVyYXRvcjp7cGF0dGVybjovKF58W14uXSkoPzpcXCtbKz1dP3wtWy09XT98IT0/fDw8Pz0/fD4+Pz4/PT98PT0/fCZbJj1dP3xcXHxbfD1dP3xcXCo9P3xcXC89P3wlPT98XFxePT98Wz86fl0pL20sbG9va2JlaGluZDohMH19KTtcblByaXNtLmxhbmd1YWdlcy5tYXJrZG93bj1QcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKFwibWFya3VwXCIse30pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJtYXJrZG93blwiLFwicHJvbG9nXCIse2Jsb2NrcXVvdGU6e3BhdHRlcm46L14+KD86W1xcdCBdKj4pKi9tLGFsaWFzOlwicHVuY3R1YXRpb25cIn0sY29kZTpbe3BhdHRlcm46L14oPzogezR9fFxcdCkuKy9tLGFsaWFzOlwia2V5d29yZFwifSx7cGF0dGVybjovYGAuKz9gYHxgW15gXFxuXStgLyxhbGlhczpcImtleXdvcmRcIn1dLHRpdGxlOlt7cGF0dGVybjovXFx3Ky4qKD86XFxyP1xcbnxcXHIpKD86PT0rfC0tKykvLGFsaWFzOlwiaW1wb3J0YW50XCIsaW5zaWRlOntwdW5jdHVhdGlvbjovPT0rJHwtLSskL319LHtwYXR0ZXJuOi8oXlxccyopIysuKy9tLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJpbXBvcnRhbnRcIixpbnNpZGU6e3B1bmN0dWF0aW9uOi9eIyt8IyskL319XSxocjp7cGF0dGVybjovKF5cXHMqKShbKi1dKShbXFx0IF0qXFwyKXsyLH0oPz1cXHMqJCkvbSxsb29rYmVoaW5kOiEwLGFsaWFzOlwicHVuY3R1YXRpb25cIn0sbGlzdDp7cGF0dGVybjovKF5cXHMqKSg/OlsqKy1dfFxcZCtcXC4pKD89W1xcdCBdLikvbSxsb29rYmVoaW5kOiEwLGFsaWFzOlwicHVuY3R1YXRpb25cIn0sXCJ1cmwtcmVmZXJlbmNlXCI6e3BhdHRlcm46LyE/XFxbW15cXF1dK1xcXTpbXFx0IF0rKD86XFxTK3w8KD86XFxcXC58W14+XFxcXF0pKz4pKD86W1xcdCBdKyg/OlwiKD86XFxcXC58W15cIlxcXFxdKSpcInwnKD86XFxcXC58W14nXFxcXF0pKid8XFwoKD86XFxcXC58W14pXFxcXF0pKlxcKSkpPy8saW5zaWRlOnt2YXJpYWJsZTp7cGF0dGVybjovXighP1xcWylbXlxcXV0rLyxsb29rYmVoaW5kOiEwfSxzdHJpbmc6Lyg/OlwiKD86XFxcXC58W15cIlxcXFxdKSpcInwnKD86XFxcXC58W14nXFxcXF0pKid8XFwoKD86XFxcXC58W14pXFxcXF0pKlxcKSkkLyxwdW5jdHVhdGlvbjovXltcXFtcXF0hOl18Wzw+XS99LGFsaWFzOlwidXJsXCJ9LGJvbGQ6e3BhdHRlcm46LyhefFteXFxcXF0pKFxcKlxcKnxfXykoPzooPzpcXHI/XFxufFxccikoPyFcXHI/XFxufFxccil8LikrP1xcMi8sbG9va2JlaGluZDohMCxpbnNpZGU6e3B1bmN0dWF0aW9uOi9eXFwqXFwqfF5fX3xcXCpcXCokfF9fJC99fSxpdGFsaWM6e3BhdHRlcm46LyhefFteXFxcXF0pKFsqX10pKD86KD86XFxyP1xcbnxcXHIpKD8hXFxyP1xcbnxcXHIpfC4pKz9cXDIvLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntwdW5jdHVhdGlvbjovXlsqX118WypfXSQvfX0sdXJsOntwYXR0ZXJuOi8hP1xcW1teXFxdXStcXF0oPzpcXChbXlxccyldKyg/OltcXHQgXStcIig/OlxcXFwufFteXCJcXFxcXSkqXCIpP1xcKXwgP1xcW1teXFxdXFxuXSpcXF0pLyxpbnNpZGU6e3ZhcmlhYmxlOntwYXR0ZXJuOi8oIT9cXFspW15cXF1dKyg/PVxcXSQpLyxsb29rYmVoaW5kOiEwfSxzdHJpbmc6e3BhdHRlcm46L1wiKD86XFxcXC58W15cIlxcXFxdKSpcIig/PVxcKSQpL319fX0pLFByaXNtLmxhbmd1YWdlcy5tYXJrZG93bi5ib2xkLmluc2lkZS51cmw9UHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24udXJsKSxQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24uaXRhbGljLmluc2lkZS51cmw9UHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24udXJsKSxQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24uYm9sZC5pbnNpZGUuaXRhbGljPVByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duLml0YWxpYyksUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duLml0YWxpYy5pbnNpZGUuYm9sZD1QcmlzbS51dGlsLmNsb25lKFByaXNtLmxhbmd1YWdlcy5tYXJrZG93bi5ib2xkKTtcblByaXNtLmxhbmd1YWdlcy5wZXJsPXtjb21tZW50Olt7cGF0dGVybjovKF5cXHMqKT1cXHcrW1xcc1xcU10qPz1jdXQuKi9tLGxvb2tiZWhpbmQ6ITB9LHtwYXR0ZXJuOi8oXnxbXlxcXFwkXSkjLiovLGxvb2tiZWhpbmQ6ITB9XSxzdHJpbmc6Wy9cXGIoPzpxfHFxfHF4fHF3KVxccyooW15hLXpBLVowLTlcXHNcXHtcXChcXFs8XSkoPzpbXlxcXFxdfFxcXFxbXFxzXFxTXSkqP1xcMS8sL1xcYig/OnF8cXF8cXh8cXcpXFxzKyhbYS16QS1aMC05XSkoPzpbXlxcXFxdfFxcXFxbXFxzXFxTXSkqP1xcMS8sL1xcYig/OnF8cXF8cXh8cXcpXFxzKlxcKCg/OlteKClcXFxcXXxcXFxcW1xcc1xcU10pKlxcKS8sL1xcYig/OnF8cXF8cXh8cXcpXFxzKlxceyg/Oltee31cXFxcXXxcXFxcW1xcc1xcU10pKlxcfS8sL1xcYig/OnF8cXF8cXh8cXcpXFxzKlxcWyg/OlteW1xcXVxcXFxdfFxcXFxbXFxzXFxTXSkqXFxdLywvXFxiKD86cXxxcXxxeHxxdylcXHMqPCg/OltePD5cXFxcXXxcXFxcW1xcc1xcU10pKj4vLC8oXCJ8YCkoPzpbXlxcXFxdfFxcXFxbXFxzXFxTXSkqP1xcMS8sLycoPzpbXidcXFxcXFxyXFxuXXxcXFxcLikqJy9dLHJlZ2V4OlsvXFxiKD86bXxxcilcXHMqKFteYS16QS1aMC05XFxzXFx7XFwoXFxbPF0pKD86W15cXFxcXXxcXFxcW1xcc1xcU10pKj9cXDFbbXNpeHBvZHVhbG5nY10qLywvXFxiKD86bXxxcilcXHMrKFthLXpBLVowLTldKSg/OlteXFxcXF18XFxcXC4pKj9cXDFbbXNpeHBvZHVhbG5nY10qLywvXFxiKD86bXxxcilcXHMqXFwoKD86W14oKVxcXFxdfFxcXFxbXFxzXFxTXSkqXFwpW21zaXhwb2R1YWxuZ2NdKi8sL1xcYig/Om18cXIpXFxzKlxceyg/Oltee31cXFxcXXxcXFxcW1xcc1xcU10pKlxcfVttc2l4cG9kdWFsbmdjXSovLC9cXGIoPzptfHFyKVxccypcXFsoPzpbXltcXF1cXFxcXXxcXFxcW1xcc1xcU10pKlxcXVttc2l4cG9kdWFsbmdjXSovLC9cXGIoPzptfHFyKVxccyo8KD86W148PlxcXFxdfFxcXFxbXFxzXFxTXSkqPlttc2l4cG9kdWFsbmdjXSovLHtwYXR0ZXJuOi8oXnxbXi1dXFxiKSg/OnN8dHJ8eSlcXHMqKFteYS16QS1aMC05XFxzXFx7XFwoXFxbPF0pKD86W15cXFxcXXxcXFxcW1xcc1xcU10pKj9cXDIoPzpbXlxcXFxdfFxcXFxbXFxzXFxTXSkqP1xcMlttc2l4cG9kdWFsbmdjZXJdKi8sbG9va2JlaGluZDohMH0se3BhdHRlcm46LyhefFteLV1cXGIpKD86c3x0cnx5KVxccysoW2EtekEtWjAtOV0pKD86W15cXFxcXXxcXFxcW1xcc1xcU10pKj9cXDIoPzpbXlxcXFxdfFxcXFxbXFxzXFxTXSkqP1xcMlttc2l4cG9kdWFsbmdjZXJdKi8sbG9va2JlaGluZDohMH0se3BhdHRlcm46LyhefFteLV1cXGIpKD86c3x0cnx5KVxccypcXCgoPzpbXigpXFxcXF18XFxcXFtcXHNcXFNdKSpcXClcXHMqXFwoKD86W14oKVxcXFxdfFxcXFxbXFxzXFxTXSkqXFwpW21zaXhwb2R1YWxuZ2Nlcl0qLyxsb29rYmVoaW5kOiEwfSx7cGF0dGVybjovKF58W14tXVxcYikoPzpzfHRyfHkpXFxzKlxceyg/Oltee31cXFxcXXxcXFxcW1xcc1xcU10pKlxcfVxccypcXHsoPzpbXnt9XFxcXF18XFxcXFtcXHNcXFNdKSpcXH1bbXNpeHBvZHVhbG5nY2VyXSovLGxvb2tiZWhpbmQ6ITB9LHtwYXR0ZXJuOi8oXnxbXi1dXFxiKSg/OnN8dHJ8eSlcXHMqXFxbKD86W15bXFxdXFxcXF18XFxcXFtcXHNcXFNdKSpcXF1cXHMqXFxbKD86W15bXFxdXFxcXF18XFxcXFtcXHNcXFNdKSpcXF1bbXNpeHBvZHVhbG5nY2VyXSovLGxvb2tiZWhpbmQ6ITB9LHtwYXR0ZXJuOi8oXnxbXi1dXFxiKSg/OnN8dHJ8eSlcXHMqPCg/OltePD5cXFxcXXxcXFxcW1xcc1xcU10pKj5cXHMqPCg/OltePD5cXFxcXXxcXFxcW1xcc1xcU10pKj5bbXNpeHBvZHVhbG5nY2VyXSovLGxvb2tiZWhpbmQ6ITB9LC9cXC8oPzpbXlxcL1xcXFxcXHJcXG5dfFxcXFwuKSpcXC9bbXNpeHBvZHVhbG5nY10qKD89XFxzKig/OiR8W1xcclxcbiwuO30pJnxcXC0rKn48PiE/Xl18KGx0fGd0fGxlfGdlfGVxfG5lfGNtcHxub3R8YW5kfG9yfHhvcnx4KVxcYikpL10sdmFyaWFibGU6Wy9bJiokQCVdXFx7XFxeW0EtWl0rXFx9LywvWyYqJEAlXVxcXltBLVpfXS8sL1smKiRAJV0jPyg/PVxceykvLC9bJiokQCVdIz8oKDo6KSonPyg/IVxcZClbXFx3JF0rKSsoOjopKi9pLC9bJiokQCVdXFxkKy8sLyg/ISU9KVskQCVdWyFcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFtcXFxcXFxdXl9ge3x9fl0vXSxmaWxlaGFuZGxlOntwYXR0ZXJuOi88KD8hWzw9XSlcXFMqPnxcXGJfXFxiLyxhbGlhczpcInN5bWJvbFwifSx2c3RyaW5nOntwYXR0ZXJuOi92XFxkKyhcXC5cXGQrKSp8XFxkKyhcXC5cXGQrKXsyLH0vLGFsaWFzOlwic3RyaW5nXCJ9LFwiZnVuY3Rpb25cIjp7cGF0dGVybjovc3ViIFthLXowLTlfXSsvaSxpbnNpZGU6e2tleXdvcmQ6L3N1Yi99fSxrZXl3b3JkOi9cXGIoYW55fGJyZWFrfGNvbnRpbnVlfGRlZmF1bHR8ZGVsZXRlfGRpZXxkb3xlbHNlfGVsc2lmfGV2YWx8Zm9yfGZvcmVhY2h8Z2l2ZW58Z290b3xpZnxsYXN0fGxvY2FsfG15fG5leHR8b3VyfHBhY2thZ2V8cHJpbnR8cmVkb3xyZXF1aXJlfHNheXxzdGF0ZXxzdWJ8c3dpdGNofHVuZGVmfHVubGVzc3x1bnRpbHx1c2V8d2hlbnx3aGlsZSlcXGIvLG51bWJlcjovXFxiLT8oMHhbXFxkQS1GYS1mXShfP1tcXGRBLUZhLWZdKSp8MGJbMDFdKF8/WzAxXSkqfChcXGQoXz9cXGQpKik/XFwuP1xcZChfP1xcZCkqKFtFZV1bKy1dP1xcZCspPylcXGIvLG9wZXJhdG9yOi8tW3J3eG9SV1hPZXpzZmRscFNiY3R1Z2tUQk1BQ11cXGJ8XFwrWys9XT98LVstPT5dP3xcXCpcXCo/PT98XFwvXFwvPz0/fD1bPX4+XT98flt+PV0/fFxcfFxcfD89P3wmJj89P3w8KD86PT4/fDw9Pyk/fD4+Pz0/fCFbfj1dP3xbJV5dPT98XFwuKD86PXxcXC5cXC4/KT98W1xcXFw/XXxcXGJ4KD86PXxcXGIpfFxcYihsdHxndHxsZXxnZXxlcXxuZXxjbXB8bm90fGFuZHxvcnx4b3IpXFxiLyxwdW5jdHVhdGlvbjovW3t9W1xcXTsoKSw6XS99O1xuUHJpc20ubGFuZ3VhZ2VzLnBocD1QcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKFwiY2xpa2VcIix7a2V5d29yZDovXFxiKGFuZHxvcnx4b3J8YXJyYXl8YXN8YnJlYWt8Y2FzZXxjZnVuY3Rpb258Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVjbGFyZXxkZWZhdWx0fGRpZXxkb3xlbHNlfGVsc2VpZnxlbmRkZWNsYXJlfGVuZGZvcnxlbmRmb3JlYWNofGVuZGlmfGVuZHN3aXRjaHxlbmR3aGlsZXxleHRlbmRzfGZvcnxmb3JlYWNofGZ1bmN0aW9ufGluY2x1ZGV8aW5jbHVkZV9vbmNlfGdsb2JhbHxpZnxuZXd8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dXNlfHJlcXVpcmV8cmVxdWlyZV9vbmNlfHZhcnx3aGlsZXxhYnN0cmFjdHxpbnRlcmZhY2V8cHVibGljfGltcGxlbWVudHN8cHJpdmF0ZXxwcm90ZWN0ZWR8cGFyZW50fHRocm93fG51bGx8ZWNob3xwcmludHx0cmFpdHxuYW1lc3BhY2V8ZmluYWx8eWllbGR8Z290b3xpbnN0YW5jZW9mfGZpbmFsbHl8dHJ5fGNhdGNoKVxcYi9pLGNvbnN0YW50Oi9cXGJbQS1aMC05X117Mix9XFxiLyxjb21tZW50OntwYXR0ZXJuOi8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLiopLyxsb29rYmVoaW5kOiEwfX0pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJwaHBcIixcImNsYXNzLW5hbWVcIix7XCJzaGVsbC1jb21tZW50XCI6e3BhdHRlcm46LyhefFteXFxcXF0pIy4qLyxsb29rYmVoaW5kOiEwLGFsaWFzOlwiY29tbWVudFwifX0pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJwaHBcIixcImtleXdvcmRcIix7ZGVsaW1pdGVyOi9cXD8+fDxcXD8oPzpwaHApPy9pLHZhcmlhYmxlOi9cXCRcXHcrXFxiL2ksXCJwYWNrYWdlXCI6e3BhdHRlcm46LyhcXFxcfG5hbWVzcGFjZVxccyt8dXNlXFxzKylbXFx3XFxcXF0rLyxsb29rYmVoaW5kOiEwLGluc2lkZTp7cHVuY3R1YXRpb246L1xcXFwvfX19KSxQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwicGhwXCIsXCJvcGVyYXRvclwiLHtwcm9wZXJ0eTp7cGF0dGVybjovKC0+KVtcXHddKy8sbG9va2JlaGluZDohMH19KSxQcmlzbS5sYW5ndWFnZXMubWFya3VwJiYoUHJpc20uaG9va3MuYWRkKFwiYmVmb3JlLWhpZ2hsaWdodFwiLGZ1bmN0aW9uKGUpe1wicGhwXCI9PT1lLmxhbmd1YWdlJiYoZS50b2tlblN0YWNrPVtdLGUuYmFja3VwQ29kZT1lLmNvZGUsZS5jb2RlPWUuY29kZS5yZXBsYWNlKC8oPzo8XFw/cGhwfDxcXD8pW1xcd1xcV10qPyg/OlxcPz4pL2dpLGZ1bmN0aW9uKGEpe3JldHVybiBlLnRva2VuU3RhY2sucHVzaChhKSxcInt7e1BIUFwiK2UudG9rZW5TdGFjay5sZW5ndGgrXCJ9fX1cIn0pKX0pLFByaXNtLmhvb2tzLmFkZChcImJlZm9yZS1pbnNlcnRcIixmdW5jdGlvbihlKXtcInBocFwiPT09ZS5sYW5ndWFnZSYmKGUuY29kZT1lLmJhY2t1cENvZGUsZGVsZXRlIGUuYmFja3VwQ29kZSl9KSxQcmlzbS5ob29rcy5hZGQoXCJhZnRlci1oaWdobGlnaHRcIixmdW5jdGlvbihlKXtpZihcInBocFwiPT09ZS5sYW5ndWFnZSl7Zm9yKHZhciBhLG49MDthPWUudG9rZW5TdGFja1tuXTtuKyspZS5oaWdobGlnaHRlZENvZGU9ZS5oaWdobGlnaHRlZENvZGUucmVwbGFjZShcInt7e1BIUFwiKyhuKzEpK1wifX19XCIsUHJpc20uaGlnaGxpZ2h0KGEsZS5ncmFtbWFyLFwicGhwXCIpLnJlcGxhY2UoL1xcJC9nLFwiJCQkJFwiKSk7ZS5lbGVtZW50LmlubmVySFRNTD1lLmhpZ2hsaWdodGVkQ29kZX19KSxQcmlzbS5ob29rcy5hZGQoXCJ3cmFwXCIsZnVuY3Rpb24oZSl7XCJwaHBcIj09PWUubGFuZ3VhZ2UmJlwibWFya3VwXCI9PT1lLnR5cGUmJihlLmNvbnRlbnQ9ZS5jb250ZW50LnJlcGxhY2UoLyhcXHtcXHtcXHtQSFBbMC05XStcXH1cXH1cXH0pL2csJzxzcGFuIGNsYXNzPVwidG9rZW4gcGhwXCI+JDE8L3NwYW4+JykpfSksUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcInBocFwiLFwiY29tbWVudFwiLHttYXJrdXA6e3BhdHRlcm46LzxbXj9dXFwvPyguKj8pPi8saW5zaWRlOlByaXNtLmxhbmd1YWdlcy5tYXJrdXB9LHBocDovXFx7XFx7XFx7UEhQWzAtOV0rXFx9XFx9XFx9L30pKTtcblByaXNtLmxhbmd1YWdlcy5weXRob249e1widHJpcGxlLXF1b3RlZC1zdHJpbmdcIjp7cGF0dGVybjovXCJcIlwiW1xcc1xcU10rP1wiXCJcInwnJydbXFxzXFxTXSs/JycnLyxhbGlhczpcInN0cmluZ1wifSxjb21tZW50OntwYXR0ZXJuOi8oXnxbXlxcXFxdKSMuKi8sbG9va2JlaGluZDohMH0sc3RyaW5nOi8oXCJ8JykoPzpcXFxcPy4pKj9cXDEvLFwiZnVuY3Rpb25cIjp7cGF0dGVybjovKCg/Ol58XFxzKWRlZlsgXFx0XSspW2EtekEtWl9dW2EtekEtWjAtOV9dKig/PVxcKCkvZyxsb29rYmVoaW5kOiEwfSxcImNsYXNzLW5hbWVcIjp7cGF0dGVybjovKFxcYmNsYXNzXFxzKylbYS16MC05X10rL2ksbG9va2JlaGluZDohMH0sa2V5d29yZDovXFxiKD86YXN8YXNzZXJ0fGFzeW5jfGF3YWl0fGJyZWFrfGNsYXNzfGNvbnRpbnVlfGRlZnxkZWx8ZWxpZnxlbHNlfGV4Y2VwdHxleGVjfGZpbmFsbHl8Zm9yfGZyb218Z2xvYmFsfGlmfGltcG9ydHxpbnxpc3xsYW1iZGF8cGFzc3xwcmludHxyYWlzZXxyZXR1cm58dHJ5fHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcImJvb2xlYW5cIjovXFxiKD86VHJ1ZXxGYWxzZSlcXGIvLG51bWJlcjovXFxiLT8oPzowW2JvXSk/KD86KD86XFxkfDB4W1xcZGEtZl0pW1xcZGEtZl0qXFwuP1xcZCp8XFwuXFxkKykoPzplWystXT9cXGQrKT9qP1xcYi9pLG9wZXJhdG9yOi9bLSslPV09P3whPXxcXCpcXCo/PT98XFwvXFwvPz0/fDxbPD0+XT98Pls9Pl0/fFsmfF5+XXxcXGIoPzpvcnxhbmR8bm90KVxcYi8scHVuY3R1YXRpb246L1t7fVtcXF07KCksLjpdL307XG5QcmlzbS5sYW5ndWFnZXMuc3FsPXtjb21tZW50OntwYXR0ZXJuOi8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHdcXFddKj9cXCpcXC98KD86LS18XFwvXFwvfCMpLiopLyxsb29rYmVoaW5kOiEwfSxzdHJpbmc6e3BhdHRlcm46LyhefFteQFxcXFxdKShcInwnKSg/OlxcXFw/W1xcc1xcU10pKj9cXDIvLGxvb2tiZWhpbmQ6ITB9LHZhcmlhYmxlOi9AW1xcdy4kXSt8QChcInwnfGApKD86XFxcXD9bXFxzXFxTXSkrP1xcMS8sXCJmdW5jdGlvblwiOi9cXGIoPzpDT1VOVHxTVU18QVZHfE1JTnxNQVh8RklSU1R8TEFTVHxVQ0FTRXxMQ0FTRXxNSUR8TEVOfFJPVU5EfE5PV3xGT1JNQVQpKD89XFxzKlxcKCkvaSxrZXl3b3JkOi9cXGIoPzpBQ1RJT058QUREfEFGVEVSfEFMR09SSVRITXxBTEx8QUxURVJ8QU5BTFlaRXxBTll8QVBQTFl8QVN8QVNDfEFVVEhPUklaQVRJT058QkFDS1VQfEJEQnxCRUdJTnxCRVJLRUxFWURCfEJJR0lOVHxCSU5BUll8QklUfEJMT0J8Qk9PTHxCT09MRUFOfEJSRUFLfEJST1dTRXxCVFJFRXxCVUxLfEJZfENBTEx8Q0FTQ0FERUQ/fENBU0V8Q0hBSU58Q0hBUiBWQVJZSU5HfENIQVJBQ1RFUiAoPzpTRVR8VkFSWUlORyl8Q0hBUlNFVHxDSEVDS3xDSEVDS1BPSU5UfENMT1NFfENMVVNURVJFRHxDT0FMRVNDRXxDT0xMQVRFfENPTFVNTnxDT0xVTU5TfENPTU1FTlR8Q09NTUlUfENPTU1JVFRFRHxDT01QVVRFfENPTk5FQ1R8Q09OU0lTVEVOVHxDT05TVFJBSU5UfENPTlRBSU5TfENPTlRBSU5TVEFCTEV8Q09OVElOVUV8Q09OVkVSVHxDUkVBVEV8Q1JPU1N8Q1VSUkVOVCg/Ol9EQVRFfF9USU1FfF9USU1FU1RBTVB8X1VTRVIpP3xDVVJTT1J8REFUQSg/OkJBU0VTPyk/fERBVEVUSU1FfERCQ0N8REVBTExPQ0FURXxERUN8REVDSU1BTHxERUNMQVJFfERFRkFVTFR8REVGSU5FUnxERUxBWUVEfERFTEVURXxERU5ZfERFU0N8REVTQ1JJQkV8REVURVJNSU5JU1RJQ3xESVNBQkxFfERJU0NBUkR8RElTS3xESVNUSU5DVHxESVNUSU5DVFJPV3xESVNUUklCVVRFRHxET3xET1VCTEUoPzogUFJFQ0lTSU9OKT98RFJPUHxEVU1NWXxEVU1QKD86RklMRSk/fERVUExJQ0FURSBLRVl8RUxTRXxFTkFCTEV8RU5DTE9TRUQgQll8RU5EfEVOR0lORXxFTlVNfEVSUkxWTHxFUlJPUlN8RVNDQVBFKD86RCBCWSk/fEVYQ0VQVHxFWEVDKD86VVRFKT98RVhJU1RTfEVYSVR8RVhQTEFJTnxFWFRFTkRFRHxGRVRDSHxGSUVMRFN8RklMRXxGSUxMRkFDVE9SfEZJUlNUfEZJWEVEfEZMT0FUfEZPTExPV0lOR3xGT1IoPzogRUFDSCBST1cpP3xGT1JDRXxGT1JFSUdOfEZSRUVURVhUKD86VEFCTEUpP3xGUk9NfEZVTEx8RlVOQ1RJT058R0VPTUVUUlkoPzpDT0xMRUNUSU9OKT98R0xPQkFMfEdPVE98R1JBTlR8R1JPVVB8SEFORExFUnxIQVNIfEhBVklOR3xIT0xETE9DS3xJREVOVElUWSg/Ol9JTlNFUlR8Q09MKT98SUZ8SUdOT1JFfElNUE9SVHxJTkRFWHxJTkZJTEV8SU5ORVJ8SU5OT0RCfElOT1VUfElOU0VSVHxJTlR8SU5URUdFUnxJTlRFUlNFQ1R8SU5UT3xJTlZPS0VSfElTT0xBVElPTiBMRVZFTHxKT0lOfEtFWVM/fEtJTEx8TEFOR1VBR0UgU1FMfExBU1R8TEVGVHxMSU1JVHxMSU5FTk98TElORVN8TElORVNUUklOR3xMT0FEfExPQ0FMfExPQ0t8TE9ORyg/OkJMT0J8VEVYVCl8TUFUQ0goPzpFRCk/fE1FRElVTSg/OkJMT0J8SU5UfFRFWFQpfE1FUkdFfE1JRERMRUlOVHxNT0RJRklFUyBTUUwgREFUQXxNT0RJRll8TVVMVEkoPzpMSU5FU1RSSU5HfFBPSU5UfFBPTFlHT04pfE5BVElPTkFMKD86IENIQVIgVkFSWUlOR3wgQ0hBUkFDVEVSKD86IFZBUllJTkcpP3wgVkFSQ0hBUik/fE5BVFVSQUx8TkNIQVIoPzogVkFSQ0hBUik/fE5FWFR8Tk8oPzogU1FMfENIRUNLfENZQ0xFKT98Tk9OQ0xVU1RFUkVEfE5VTExJRnxOVU1FUklDfE9GRj98T0ZGU0VUUz98T058T1BFTig/OkRBVEFTT1VSQ0V8UVVFUll8Uk9XU0VUKT98T1BUSU1JWkV8T1BUSU9OKD86QUxMWSk/fE9SREVSfE9VVCg/OkVSfEZJTEUpP3xPVkVSfFBBUlRJQUx8UEFSVElUSU9OfFBFUkNFTlR8UElWT1R8UExBTnxQT0lOVHxQT0xZR09OfFBSRUNFRElOR3xQUkVDSVNJT058UFJFVnxQUklNQVJZfFBSSU5UfFBSSVZJTEVHRVN8UFJPQyg/OkVEVVJFKT98UFVCTElDfFBVUkdFfFFVSUNLfFJBSVNFUlJPUnxSRUFEKD86UyBTUUwgREFUQXxURVhUKT98UkVBTHxSRUNPTkZJR1VSRXxSRUZFUkVOQ0VTfFJFTEVBU0V8UkVOQU1FfFJFUEVBVEFCTEV8UkVQTElDQVRJT058UkVRVUlSRXxSRVNUT1JFfFJFU1RSSUNUfFJFVFVSTlM/fFJFVk9LRXxSSUdIVHxST0xMQkFDS3xST1VUSU5FfFJPVyg/OkNPVU5UfEdVSURDT0x8Uyk/fFJUUkVFfFJVTEV8U0FWRSg/OlBPSU5UKT98U0NIRU1BfFNFTEVDVHxTRVJJQUwoPzpJWkFCTEUpP3xTRVNTSU9OKD86X1VTRVIpP3xTRVQoPzpVU0VSKT98U0hBUkUgTU9ERXxTSE9XfFNIVVRET1dOfFNJTVBMRXxTTUFMTElOVHxTTkFQU0hPVHxTT01FfFNPTkFNRXxTVEFSVCg/OklORyBCWSk/fFNUQVRJU1RJQ1N8U1RBVFVTfFNUUklQRUR8U1lTVEVNX1VTRVJ8VEFCTEVTP3xUQUJMRVNQQUNFfFRFTVAoPzpPUkFSWXxUQUJMRSk/fFRFUk1JTkFURUQgQll8VEVYVCg/OlNJWkUpP3xUSEVOfFRJTUVTVEFNUHxUSU5ZKD86QkxPQnxJTlR8VEVYVCl8VE9QP3xUUkFOKD86U0FDVElPTlM/KT98VFJJR0dFUnxUUlVOQ0FURXxUU0VRVUFMfFRZUEVTP3xVTkJPVU5ERUR8VU5DT01NSVRURUR8VU5ERUZJTkVEfFVOSU9OfFVOSVFVRXxVTlBJVk9UfFVQREFURSg/OlRFWFQpP3xVU0FHRXxVU0V8VVNFUnxVU0lOR3xWQUxVRVM/fFZBUig/OkJJTkFSWXxDSEFSfENIQVJBQ1RFUnxZSU5HKXxWSUVXfFdBSVRGT1J8V0FSTklOR1N8V0hFTnxXSEVSRXxXSElMRXxXSVRIKD86IFJPTExVUHxJTik/fFdPUkt8V1JJVEUoPzpURVhUKT8pXFxiL2ksXCJib29sZWFuXCI6L1xcYig/OlRSVUV8RkFMU0V8TlVMTClcXGIvaSxudW1iZXI6L1xcYi0/KD86MHgpP1xcZCpcXC4/W1xcZGEtZl0rXFxiLyxvcGVyYXRvcjovWy0rKlxcLz0lXn5dfCYmP3xcXHw/XFx8fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dP3xcXGIoPzpBTkR8QkVUV0VFTnxJTnxMSUtFfE5PVHxPUnxJU3xESVZ8UkVHRVhQfFJMSUtFfFNPVU5EUyBMSUtFfFhPUilcXGIvaSxwdW5jdHVhdGlvbjovWztbXFxdKClgLC5dL307XG5QcmlzbS5sYW5ndWFnZXMueWFtbD17c2NhbGFyOntwYXR0ZXJuOi8oW1xcLTpdXFxzKighW15cXHNdKyk/WyBcXHRdKlt8Pl0pWyBcXHRdKig/OigoPzpcXHI/XFxufFxccilbIFxcdF0rKVteXFxyXFxuXSsoPzpcXDNbXlxcclxcbl0rKSopLyxsb29rYmVoaW5kOiEwLGFsaWFzOlwic3RyaW5nXCJ9LGNvbW1lbnQ6LyMuKi8sa2V5OntwYXR0ZXJuOi8oXFxzKls6XFwtLFt7XFxyXFxuP11bIFxcdF0qKCFbXlxcc10rKT9bIFxcdF0qKVteXFxyXFxue1tcXF19LCNdKz8oPz1cXHMqOlxccykvLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJhdHJ1bGVcIn0sZGlyZWN0aXZlOntwYXR0ZXJuOi8oXlsgXFx0XSopJS4rL20sbG9va2JlaGluZDohMCxhbGlhczpcImltcG9ydGFudFwifSxkYXRldGltZTp7cGF0dGVybjovKFs6XFwtLFt7XVxccyooIVteXFxzXSspP1sgXFx0XSopKFxcZHs0fS1cXGRcXGQ/LVxcZFxcZD8oW3RUXXxbIFxcdF0rKVxcZFxcZD86XFxkezJ9OlxcZHsyfShcXC5cXGQqKT9bIFxcdF0qKFp8Wy0rXVxcZFxcZD8oOlxcZHsyfSk/KT98XFxkezR9LVxcZHsyfS1cXGR7Mn18XFxkXFxkPzpcXGR7Mn0oOlxcZHsyfShcXC5cXGQqKT8pPykoPz1bIFxcdF0qKCR8LHxdfH0pKS9tLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJudW1iZXJcIn0sXCJib29sZWFuXCI6e3BhdHRlcm46LyhbOlxcLSxbe11cXHMqKCFbXlxcc10rKT9bIFxcdF0qKSh0cnVlfGZhbHNlKVsgXFx0XSooPz0kfCx8XXx9KS9pbSxsb29rYmVoaW5kOiEwLGFsaWFzOlwiaW1wb3J0YW50XCJ9LFwibnVsbFwiOntwYXR0ZXJuOi8oWzpcXC0sW3tdXFxzKighW15cXHNdKyk/WyBcXHRdKikobnVsbHx+KVsgXFx0XSooPz0kfCx8XXx9KS9pbSxsb29rYmVoaW5kOiEwLGFsaWFzOlwiaW1wb3J0YW50XCJ9LHN0cmluZzp7cGF0dGVybjovKFs6XFwtLFt7XVxccyooIVteXFxzXSspP1sgXFx0XSopKFwiKD86W15cIlxcXFxdfFxcXFwuKSpcInwnKD86W14nXFxcXF18XFxcXC4pKicpKD89WyBcXHRdKigkfCx8XXx9KSkvbSxsb29rYmVoaW5kOiEwfSxudW1iZXI6e3BhdHRlcm46LyhbOlxcLSxbe11cXHMqKCFbXlxcc10rKT9bIFxcdF0qKVsrXFwtXT8oMHhbXFxkYS1mXSt8MG9bMC03XSt8KFxcZCtcXC4/XFxkKnxcXC4/XFxkKykoZVtcXCtcXC1dP1xcZCspP3xcXC5pbmZ8XFwubmFuKVsgXFx0XSooPz0kfCx8XXx9KS9pbSxsb29rYmVoaW5kOiEwfSx0YWc6LyFbXlxcc10rLyxpbXBvcnRhbnQ6L1smKl1bXFx3XSsvLHB1bmN0dWF0aW9uOi8tLS18WzpbXFxde31cXC0sfD4/XXxcXC5cXC5cXC4vfTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBiYWNrZHJvcHM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCYWNrZHJvcEZvclNsaWRlKHNsaWRlKSB7XG4gICAgICB2YXIgYmFja2Ryb3BBdHRyaWJ1dGUgPSBzbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmVzcG9rZS1iYWNrZHJvcCcpO1xuXG4gICAgICBpZiAoYmFja2Ryb3BBdHRyaWJ1dGUpIHtcbiAgICAgICAgdmFyIGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IGJhY2tkcm9wQXR0cmlidXRlO1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJhY2tkcm9wJyk7XG4gICAgICAgIGRlY2sucGFyZW50LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcbiAgICAgICAgcmV0dXJuIGJhY2tkcm9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMoZWwpIHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICB2YXIgaW5kZXggPSBiYWNrZHJvcHMuaW5kZXhPZihlbCksXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gZGVjay5zbGlkZSgpO1xuXG4gICAgICAgIHJlbW92ZUNsYXNzKGVsLCAnYWN0aXZlJyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsLCAnaW5hY3RpdmUnKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsICdiZWZvcmUnKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsICdhZnRlcicpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgYWRkQ2xhc3MoZWwsICdpbmFjdGl2ZScpO1xuICAgICAgICAgIGFkZENsYXNzKGVsLCBpbmRleCA8IGN1cnJlbnRJbmRleCA/ICdiZWZvcmUnIDogJ2FmdGVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3MoZWwsICdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYmFja2Ryb3AtJyArIGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1iYWNrZHJvcC0nICsgY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBiYWNrZHJvcHMgPSBkZWNrLnNsaWRlc1xuICAgICAgLm1hcChjcmVhdGVCYWNrZHJvcEZvclNsaWRlKTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICBiYWNrZHJvcHMuZm9yRWFjaCh1cGRhdGVDbGFzc2VzKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWN0aXZlU2xpZGVJbmRleCxcbiAgICAgIGFjdGl2ZUJ1bGxldEluZGV4LFxuXG4gICAgICBidWxsZXRzID0gZGVjay5zbGlkZXMubWFwKGZ1bmN0aW9uKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyA/IG9wdGlvbnMgOiAnW2RhdGEtYmVzcG9rZS1idWxsZXRdJykpLCAwKTtcbiAgICAgIH0pLFxuXG4gICAgICBuZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0U2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXggKyAxO1xuXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0KDEpKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQoYWN0aXZlU2xpZGVJbmRleCwgYWN0aXZlQnVsbGV0SW5kZXggKyAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0c1tuZXh0U2xpZGVJbmRleF0pIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChuZXh0U2xpZGVJbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHByZXYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZXZTbGlkZUluZGV4ID0gYWN0aXZlU2xpZGVJbmRleCAtIDE7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQoLTEpKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQoYWN0aXZlU2xpZGVJbmRleCwgYWN0aXZlQnVsbGV0SW5kZXggLSAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0c1twcmV2U2xpZGVJbmRleF0pIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChwcmV2U2xpZGVJbmRleCwgYnVsbGV0c1twcmV2U2xpZGVJbmRleF0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGFjdGl2YXRlQnVsbGV0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICAgIGFjdGl2ZUJ1bGxldEluZGV4ID0gYnVsbGV0SW5kZXg7XG5cbiAgICAgICAgYnVsbGV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlLCBzKSB7XG4gICAgICAgICAgc2xpZGUuZm9yRWFjaChmdW5jdGlvbihidWxsZXQsIGIpIHtcbiAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldCcpO1xuXG4gICAgICAgICAgICBpZiAocyA8IHNsaWRlSW5kZXggfHwgcyA9PT0gc2xpZGVJbmRleCAmJiBiIDw9IGJ1bGxldEluZGV4KSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWluYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocyA9PT0gc2xpZGVJbmRleCAmJiBiID09PSBidWxsZXRJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtY3VycmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBidWxsZXRzW2FjdGl2ZVNsaWRlSW5kZXhdW2FjdGl2ZUJ1bGxldEluZGV4ICsgb2Zmc2V0XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgIGRlY2sub24oJ25leHQnLCBuZXh0KTtcbiAgICBkZWNrLm9uKCdwcmV2JywgcHJldik7XG5cbiAgICBkZWNrLm9uKCdzbGlkZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFjdGl2YXRlQnVsbGV0KGUuaW5kZXgsIDApO1xuICAgIH0pO1xuXG4gICAgYWN0aXZhdGVCdWxsZXQoMCwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICBkZWNrLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlKSB7XG4gICAgICBzbGlkZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoL0lOUFVUfFRFWFRBUkVBfFNFTEVDVC8udGVzdChlLnRhcmdldC5ub2RlTmFtZSkgfHwgZS50YXJnZXQuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBwYXJzZUhhc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSksXG4gICAgICAgIHNsaWRlTnVtYmVyT3JOYW1lID0gcGFyc2VJbnQoaGFzaCwgMTApO1xuXG4gICAgICBpZiAoaGFzaCkge1xuICAgICAgICBpZiAoc2xpZGVOdW1iZXJPck5hbWUpIHtcbiAgICAgICAgICBhY3RpdmF0ZVNsaWRlKHNsaWRlTnVtYmVyT3JOYW1lIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVjay5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgaSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLWhhc2gnKSA9PT0gaGFzaCkge1xuICAgICAgICAgICAgICBhY3RpdmF0ZVNsaWRlKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBhY3RpdmF0ZVNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBpbmRleFRvQWN0aXZhdGUgPSAtMSA8IGluZGV4ICYmIGluZGV4IDwgZGVjay5zbGlkZXMubGVuZ3RoID8gaW5kZXggOiAwO1xuICAgICAgaWYgKGluZGV4VG9BY3RpdmF0ZSAhPT0gZGVjay5zbGlkZSgpKSB7XG4gICAgICAgIGRlY2suc2xpZGUoaW5kZXhUb0FjdGl2YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHBhcnNlSGFzaCgpO1xuXG4gICAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHNsaWRlTmFtZSA9IGUuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2UtaGFzaCcpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHNsaWRlTmFtZSB8fCBlLmluZGV4ICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHBhcnNlSGFzaCk7XG4gICAgfSwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IG9wdGlvbnMgIT09ICd2ZXJ0aWNhbCc7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMzQgfHwgLy8gUEFHRSBET1dOXG4gICAgICAgIChlLndoaWNoID09IDMyICYmICFlLnNoaWZ0S2V5KSB8fCAvLyBTUEFDRSBXSVRIT1VUIFNISUZUXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOSkgfHwgLy8gUklHSFRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSA0MCkgLy8gRE9XTlxuICAgICAgKSB7IGRlY2submV4dCgpOyB9XG5cbiAgICAgIGlmIChlLndoaWNoID09IDMzIHx8IC8vIFBBR0UgVVBcbiAgICAgICAgKGUud2hpY2ggPT0gMzIgJiYgZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgKyBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzcpIHx8IC8vIExFRlRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOCkgLy8gVVBcbiAgICAgICkgeyBkZWNrLnByZXYoKTsgfVxuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRlY2spIHtcbiAgICB2YXIgcHJvZ3Jlc3NQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBwcm9wID0gb3B0aW9ucyA9PT0gJ3ZlcnRpY2FsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHByb2dyZXNzUGFyZW50LmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLXBhcmVudCc7XG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtcHJvZ3Jlc3MtYmFyJztcbiAgICBwcm9ncmVzc1BhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XG4gICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NQYXJlbnQpO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZVtwcm9wXSA9IChlLmluZGV4ICogMTAwIC8gKGRlY2suc2xpZGVzLmxlbmd0aCAtIDEpKSArICclJztcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgcGFyZW50ID0gZGVjay5wYXJlbnQsXG4gICAgICBmaXJzdFNsaWRlID0gZGVjay5zbGlkZXNbMF0sXG4gICAgICBzbGlkZUhlaWdodCA9IGZpcnN0U2xpZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgc2xpZGVXaWR0aCA9IGZpcnN0U2xpZGUub2Zmc2V0V2lkdGgsXG4gICAgICB1c2Vab29tID0gb3B0aW9ucyA9PT0gJ3pvb20nIHx8ICgnem9vbScgaW4gcGFyZW50LnN0eWxlICYmIG9wdGlvbnMgIT09ICd0cmFuc2Zvcm0nKSxcblxuICAgICAgd3JhcCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnYmVzcG9rZS1zY2FsZS1wYXJlbnQnO1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICAgIH0sXG5cbiAgICAgIGVsZW1lbnRzID0gdXNlWm9vbSA/IGRlY2suc2xpZGVzIDogZGVjay5zbGlkZXMubWFwKHdyYXApLFxuXG4gICAgICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSAnTW96IFdlYmtpdCBPIG1zJy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJlZml4ZXMucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnRQcm9wZXJ0eSwgcHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgcHJvcGVydHkgaW4gcGFyZW50LnN0eWxlID8gcHJlZml4ICsgcHJvcGVydHkgOiBjdXJyZW50UHJvcGVydHk7XG4gICAgICAgICAgfSwgcHJvcGVydHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KCdUcmFuc2Zvcm0nKSksXG5cbiAgICAgIHNjYWxlID0gdXNlWm9vbSA/XG4gICAgICAgIGZ1bmN0aW9uKHJhdGlvLCBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS56b29tID0gcmF0aW87XG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJ3NjYWxlKCcgKyByYXRpbyArICcpJztcbiAgICAgICAgfSxcblxuICAgICAgc2NhbGVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHhTY2FsZSA9IHBhcmVudC5vZmZzZXRXaWR0aCAvIHNsaWRlV2lkdGgsXG4gICAgICAgICAgeVNjYWxlID0gcGFyZW50Lm9mZnNldEhlaWdodCAvIHNsaWRlSGVpZ2h0O1xuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goc2NhbGUuYmluZChudWxsLCBNYXRoLm1pbih4U2NhbGUsIHlTY2FsZSkpKTtcbiAgICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2NhbGVBbGwpO1xuICAgIHNjYWxlQWxsKCk7XG4gIH07XG5cbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKiFcbiAqIGJlc3Bva2UtdGhlbWUtY3ViZSB2Mi4wLjFcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCwgTWFyayBEYWxnbGVpc2hcbiAqIFRoaXMgY29udGVudCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9taXQtbGljZW5zZS5vcmcvbWFya2RhbGdsZWlzaFxuICovXG5cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKGUpO2Vsc2V7dmFyIG87XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9vPXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP289Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYobz1zZWxmKTt2YXIgZj1vO2Y9Zi5iZXNwb2tlfHwoZi5iZXNwb2tlPXt9KSxmPWYudGhlbWVzfHwoZi50aGVtZXM9e30pLGYuY3ViZT1lKCl9fShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxudmFyIGNsYXNzZXMgPSBfZGVyZXFfKCdiZXNwb2tlLWNsYXNzZXMnKTtcbnZhciBpbnNlcnRDc3MgPSBfZGVyZXFfKCdpbnNlcnQtY3NzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjc3MgPSBcIip7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MH1AbWVkaWEgcHJpbnR7Knstd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDpleGFjdH19QHBhZ2V7c2l6ZTpsYW5kc2NhcGU7bWFyZ2luOjB9LmJlc3Bva2UtcGFyZW50ey13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC42cyBlYXNlO3RyYW5zaXRpb246YmFja2dyb3VuZCAuNnMgZWFzZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtvdmVyZmxvdzpoaWRkZW59QG1lZGlhIHByaW50ey5iZXNwb2tlLXBhcmVudHtvdmVyZmxvdzp2aXNpYmxlO3Bvc2l0aW9uOnN0YXRpY319LmJlc3Bva2UtdGhlbWUtY3ViZS1zbGlkZS1wYXJlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7LXdlYmtpdC1wZXJzcGVjdGl2ZTo2MDBweDtwZXJzcGVjdGl2ZTo2MDBweDtwb2ludGVyLWV2ZW50czpub25lfS5iZXNwb2tlLXNsaWRle3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC42cyBlYXNlLG9wYWNpdHkgLjZzIGVhc2UsYmFja2dyb3VuZCAuNnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNnMgZWFzZSxvcGFjaXR5IC42cyBlYXNlLGJhY2tncm91bmQgLjZzIGVhc2U7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCUgMDt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCUgMDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NjQwcHg7aGVpZ2h0OjQ4MHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bWFyZ2luLXRvcDotMjQwcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTMyMHB4O2JhY2tncm91bmQ6I2VhZWFlYTtwYWRkaW5nOjQwcHg7Ym9yZGVyLXJhZGl1czowfUBtZWRpYSBwcmludHsuYmVzcG9rZS1zbGlkZXt6b29tOjEhaW1wb3J0YW50O2hlaWdodDo3NDNweDt3aWR0aDoxMDAlO3BhZ2UtYnJlYWstYmVmb3JlOmFsd2F5cztwb3NpdGlvbjpzdGF0aWM7bWFyZ2luOjA7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfX0uYmVzcG9rZS1iZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDBweCl0cmFuc2xhdGVYKC0zMjBweClyb3RhdGVZKC05MGRlZyl0cmFuc2xhdGVYKC0zMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwcHgpdHJhbnNsYXRlWCgtMzIwcHgpcm90YXRlWSgtOTBkZWcpdHJhbnNsYXRlWCgtMzIwcHgpfUBtZWRpYSBwcmludHsuYmVzcG9rZS1iZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZX19LmJlc3Bva2UtYWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpdHJhbnNsYXRlWCgzMjBweClyb3RhdGVZKDkwZGVnKXRyYW5zbGF0ZVgoMzIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCl0cmFuc2xhdGVYKDMyMHB4KXJvdGF0ZVkoOTBkZWcpdHJhbnNsYXRlWCgzMjBweCl9QG1lZGlhIHByaW50ey5iZXNwb2tlLWFmdGVyey13ZWJraXQtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmV9fS5iZXNwb2tlLWluYWN0aXZle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBwcmludHsuYmVzcG9rZS1pbmFjdGl2ZXtvcGFjaXR5OjF9fS5iZXNwb2tlLWFjdGl2ZXtvcGFjaXR5OjF9LmJlc3Bva2UtYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2V9QG1lZGlhIHByaW50ey5iZXNwb2tlLWJ1bGxldHstd2Via2l0LXRyYW5zaXRpb246bm9uZTt0cmFuc2l0aW9uOm5vbmV9fS5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjB9bGkuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgxNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxNnB4KX1AbWVkaWEgcHJpbnR7bGkuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZX19QG1lZGlhIHByaW50ey5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjF9fS5iZXNwb2tlLWJ1bGxldC1hY3RpdmV7b3BhY2l0eToxfS5iZXNwb2tlLXNjYWxlLXBhcmVudHstd2Via2l0LXBlcnNwZWN0aXZlOjYwMHB4O3BlcnNwZWN0aXZlOjYwMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmJlc3Bva2Utc2NhbGUtcGFyZW50IC5iZXNwb2tlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfUBtZWRpYSBwcmludHsuYmVzcG9rZS1zY2FsZS1wYXJlbnR7LXdlYmtpdC10cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50fX0uYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTM2NnB4KXsuYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnR7aGVpZ2h0OjRweH19QG1lZGlhIHByaW50ey5iZXNwb2tlLXByb2dyZXNzLXBhcmVudHtkaXNwbGF5Om5vbmV9fS5iZXNwb2tlLXByb2dyZXNzLWJhcnstd2Via2l0LXRyYW5zaXRpb246d2lkdGggLjZzIGVhc2U7dHJhbnNpdGlvbjp3aWR0aCAuNnMgZWFzZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDg5ZjM7Ym9yZGVyLXJhZGl1czowIDRweCA0cHggMH0uZW1waGF0aWN7YmFja2dyb3VuZDojZWFlYWVhfS5iZXNwb2tlLWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjZzIGVhc2U7dHJhbnNpdGlvbjpvcGFjaXR5IC42cyBlYXNlO29wYWNpdHk6MDt6LWluZGV4Oi0xfS5iZXNwb2tlLWJhY2tkcm9wLWFjdGl2ZXtvcGFjaXR5OjF9cHJle3BhZGRpbmc6MjZweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo4cHh9Ym9keXtmb250LWZhbWlseTpoZWx2ZXRpY2EsYXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MThweDtjb2xvcjojNDA0MDQwfWgxe2ZvbnQtc2l6ZTo3MnB4O2xpbmUtaGVpZ2h0OjgycHg7bGV0dGVyLXNwYWNpbmc6LTJweDttYXJnaW4tYm90dG9tOjE2cHh9aDJ7Zm9udC1zaXplOjQycHg7bGV0dGVyLXNwYWNpbmc6LTFweDttYXJnaW4tYm90dG9tOjhweH1oM3tmb250LXNpemU6MjRweDtmb250LXdlaWdodDo0MDA7bWFyZ2luLWJvdHRvbToyNHB4O2NvbG9yOiM2MDYwNjB9aHJ7dmlzaWJpbGl0eTpoaWRkZW47aGVpZ2h0OjIwcHh9dWx7bGlzdC1zdHlsZTpub25lfWxpe21hcmdpbi1ib3R0b206MTJweH1we21hcmdpbjowIDEwMHB4IDEycHg7bGluZS1oZWlnaHQ6MjJweH1he2NvbG9yOiMwMDg5ZjM7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XCI7XG4gIGluc2VydENzcyhjc3MsIHsgcHJlcGVuZDogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIGNsYXNzZXMoKShkZWNrKTtcblxuICAgIHZhciB3cmFwID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtdGhlbWUtY3ViZS1zbGlkZS1wYXJlbnQnO1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50KTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIGRlY2suc2xpZGVzLmZvckVhY2god3JhcCk7XG4gIH07XG59O1xuXG59LHtcImJlc3Bva2UtY2xhc3Nlc1wiOjIsXCJpbnNlcnQtY3NzXCI6M31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtJyArIGNscyk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lXG4gICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnYmVzcG9rZS0nICsgY2xzICsnKFxcXFxzfCQpJywgJ2cnKSwgJyAnKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICB9LFxuXG4gICAgICBkZWFjdGl2YXRlID0gZnVuY3Rpb24oZWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IGRlY2suc2xpZGVzW2RlY2suc2xpZGUoKV0sXG4gICAgICAgICAgb2Zmc2V0ID0gaW5kZXggLSBkZWNrLnNsaWRlKCksXG4gICAgICAgICAgb2Zmc2V0Q2xhc3MgPSBvZmZzZXQgPiAwID8gJ2FmdGVyJyA6ICdiZWZvcmUnO1xuXG4gICAgICAgIFsnYmVmb3JlKC1cXFxcZCspPycsICdhZnRlcigtXFxcXGQrKT8nLCAnYWN0aXZlJywgJ2luYWN0aXZlJ10ubWFwKHJlbW92ZUNsYXNzLmJpbmQobnVsbCwgZWwpKTtcblxuICAgICAgICBpZiAoZWwgIT09IGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgICAgWydpbmFjdGl2ZScsIG9mZnNldENsYXNzLCBvZmZzZXRDbGFzcyArICctJyArIE1hdGguYWJzKG9mZnNldCldLm1hcChhZGRDbGFzcy5iaW5kKG51bGwsIGVsKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBhZGRDbGFzcyhkZWNrLnBhcmVudCwgJ3BhcmVudCcpO1xuICAgIGRlY2suc2xpZGVzLm1hcChmdW5jdGlvbihlbCkgeyBhZGRDbGFzcyhlbCwgJ3NsaWRlJyk7IH0pO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBkZWNrLnNsaWRlcy5tYXAoZGVhY3RpdmF0ZSk7XG4gICAgICBhZGRDbGFzcyhlLnNsaWRlLCAnYWN0aXZlJyk7XG4gICAgICByZW1vdmVDbGFzcyhlLnNsaWRlLCAnaW5hY3RpdmUnKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbn0se31dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGluc2VydGVkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcywgb3B0aW9ucykge1xuICAgIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm47XG4gICAgaW5zZXJ0ZWRbY3NzXSA9IHRydWU7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9XG4gICAgXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJlcGVuZCkge1xuICAgICAgICBoZWFkLmluc2VydEJlZm9yZShlbGVtLCBoZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufTtcblxufSx7fV19LHt9LFsxXSlcbigxKVxufSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBheGlzID0gb3B0aW9ucyA9PSAndmVydGljYWwnID8gJ1knIDogJ1gnLFxuICAgICAgc3RhcnRQb3NpdGlvbixcbiAgICAgIGRlbHRhO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGUudG91Y2hlc1swXVsncGFnZScgKyBheGlzXTtcbiAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRlbHRhID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdIC0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGEpID4gNTApIHtcbiAgICAgICAgZGVja1tkZWx0YSA+IDAgPyAncHJldicgOiAnbmV4dCddKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuIiwidmFyIGZyb20gPSBmdW5jdGlvbihvcHRzLCBwbHVnaW5zKSB7XG4gIHZhciBwYXJlbnQgPSAob3B0cy5wYXJlbnQgfHwgb3B0cykubm9kZVR5cGUgPT09IDEgPyAob3B0cy5wYXJlbnQgfHwgb3B0cykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMucGFyZW50IHx8IG9wdHMpLFxuICAgIHNsaWRlcyA9IFtdLmZpbHRlci5jYWxsKHR5cGVvZiBvcHRzLnNsaWRlcyA9PT0gJ3N0cmluZycgPyBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNsaWRlcykgOiAob3B0cy5zbGlkZXMgfHwgcGFyZW50LmNoaWxkcmVuKSwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsLm5vZGVOYW1lICE9PSAnU0NSSVBUJzsgfSksXG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbMF0sXG4gICAgbGlzdGVuZXJzID0ge30sXG5cbiAgICBhY3RpdmF0ZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoIXNsaWRlc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlKCdkZWFjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1tpbmRleF07XG4gICAgICBmaXJlKCdhY3RpdmF0ZScsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpO1xuICAgIH0sXG5cbiAgICBzbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBmaXJlKCdzbGlkZScsIGNyZWF0ZUV2ZW50RGF0YShzbGlkZXNbaW5kZXhdLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoaW5kZXgsIGN1c3RvbURhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RlcCA9IGZ1bmN0aW9uKG9mZnNldCwgY3VzdG9tRGF0YSkge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBzbGlkZXMuaW5kZXhPZihhY3RpdmVTbGlkZSkgKyBvZmZzZXQ7XG5cbiAgICAgIGZpcmUob2Zmc2V0ID4gMCA/ICduZXh0JyA6ICdwcmV2JywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoc2xpZGVJbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgfSxcblxuICAgIG9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IChsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gb2ZmLmJpbmQobnVsbCwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9mZiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdID0gKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyICE9PSBjYWxsYmFjazsgfSk7XG4gICAgfSxcblxuICAgIGZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihub3RDYW5jZWxsZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIG5vdENhbmNlbGxlZCAmJiBjYWxsYmFjayhldmVudERhdGEpICE9PSBmYWxzZTtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUV2ZW50RGF0YSA9IGZ1bmN0aW9uKGVsLCBldmVudERhdGEpIHtcbiAgICAgIGV2ZW50RGF0YSA9IGV2ZW50RGF0YSB8fCB7fTtcbiAgICAgIGV2ZW50RGF0YS5pbmRleCA9IHNsaWRlcy5pbmRleE9mKGVsKTtcbiAgICAgIGV2ZW50RGF0YS5zbGlkZSA9IGVsO1xuICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcbiAgICB9LFxuXG4gICAgZGVjayA9IHtcbiAgICAgIG9uOiBvbixcbiAgICAgIG9mZjogb2ZmLFxuICAgICAgZmlyZTogZmlyZSxcbiAgICAgIHNsaWRlOiBzbGlkZSxcbiAgICAgIG5leHQ6IHN0ZXAuYmluZChudWxsLCAxKSxcbiAgICAgIHByZXY6IHN0ZXAuYmluZChudWxsLCAtMSksXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfTtcblxuICAocGx1Z2lucyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICBwbHVnaW4oZGVjayk7XG4gIH0pO1xuXG4gIGFjdGl2YXRlKDApO1xuXG4gIHJldHVybiBkZWNrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZyb206IGZyb21cbn07XG4iLCIvLyBSZXF1aXJlIE5vZGUgbW9kdWxlcyBpbiB0aGUgYnJvd3NlciB0aGFua3MgdG8gQnJvd3NlcmlmeTogaHR0cDovL2Jyb3dzZXJpZnkub3JnXG52YXIgYmVzcG9rZSA9IHJlcXVpcmUoJ2Jlc3Bva2UnKSxcbiAgY3ViZSA9IHJlcXVpcmUoJ2Jlc3Bva2UtdGhlbWUtY3ViZScpLFxuICBrZXlzID0gcmVxdWlyZSgnYmVzcG9rZS1rZXlzJyksXG4gIHRvdWNoID0gcmVxdWlyZSgnYmVzcG9rZS10b3VjaCcpLFxuICBidWxsZXRzID0gcmVxdWlyZSgnYmVzcG9rZS1idWxsZXRzJyksXG4gIGJhY2tkcm9wID0gcmVxdWlyZSgnYmVzcG9rZS1iYWNrZHJvcCcpLFxuICBzY2FsZSA9IHJlcXVpcmUoJ2Jlc3Bva2Utc2NhbGUnKSxcbiAgaGFzaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtaGFzaCcpLFxuICBwcm9ncmVzcyA9IHJlcXVpcmUoJ2Jlc3Bva2UtcHJvZ3Jlc3MnKSxcbiAgZm9ybXMgPSByZXF1aXJlKCdiZXNwb2tlLWZvcm1zJyk7XG5cbi8vIEJlc3Bva2UuanNcbmJlc3Bva2UuZnJvbSgnYXJ0aWNsZScsIFtcbiAgY3ViZSgpLFxuICBrZXlzKCksXG4gIHRvdWNoKCksXG4gIGJ1bGxldHMoJ2xpLCAuYnVsbGV0JyksXG4gIGJhY2tkcm9wKCksXG4gIHNjYWxlKCksXG4gIGhhc2goKSxcbiAgcHJvZ3Jlc3MoKSxcbiAgZm9ybXMoKVxuXSk7XG5cbi8vIFByaXNtIHN5bnRheCBoaWdobGlnaHRpbmdcbi8vIFRoaXMgaXMgYWN0dWFsbHkgbG9hZGVkIGZyb20gXCJib3dlcl9jb21wb25lbnRzXCIgdGhhbmtzIHRvXG4vLyBkZWJvd2VyaWZ5OiBodHRwczovL2dpdGh1Yi5jb20vZXVnZW5ld2FyZS9kZWJvd2VyaWZ5XG5yZXF1aXJlKFwiLi8uLlxcXFwuLlxcXFxib3dlcl9jb21wb25lbnRzXFxcXHByaXNtXFxcXHByaXNtLmpzXCIpO1xuXG4iXX0=
