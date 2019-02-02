/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[5,7],$V1=[1,7],$V2=[10,14,16,17,18,24],$V3=[1,18],$V4=[1,31],$V5=[1,33],$V6=[1,25],$V7=[1,30],$V8=[1,32],$V9=[1,40],$Va=[1,41],$Vb=[13,21,26,28],$Vc=[1,43],$Vd=[1,44],$Ve=[1,45],$Vf=[13,21,26,28,30,32,33],$Vg=[1,46],$Vh=[1,47],$Vi=[13,21,26,28,30,32,33,34,36],$Vj=[1,48],$Vk=[1,49],$Vl=[13,21,26,28,30,32,33,34,36,37,39];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"unit":3,"unit_repetition0":4,"__eof":5,"program":6,"_program":7,"block":8,"stmt":9,"ID":10,"_:":11,"expr":12,"_;":13,"_if":14,"parent":15,"_else":16,"_while":17,"_print":18,"printable":19,"_(":20,"_)":21,"_{":22,"block_repetition0":23,"_}":24,"STRING":25,"_and":26,"expr1":27,"_or":28,"_not":29,"_>":30,"expr2":31,"_<":32,"_=":33,"_+":34,"expr3":35,"_-":36,"_*":37,"expr4":38,"_/":39,"NUMBER":40,"_input":41,"$accept":0,"$end":1},
terminals_: {2:"error",5:"__eof",7:"_program",10:"ID",11:"_:",13:"_;",14:"_if",16:"_else",17:"_while",18:"_print",20:"_(",21:"_)",22:"_{",24:"_}",25:"STRING",26:"_and",28:"_or",29:"_not",30:"_>",32:"_<",33:"_=",34:"_+",36:"_-",37:"_*",39:"_/",40:"NUMBER",41:"_input"},
productions_: [0,[3,2],[6,2],[9,4],[9,3],[9,4],[9,2],[9,3],[9,3],[15,3],[8,3],[19,1],[19,1],[12,3],[12,3],[12,2],[12,1],[27,3],[27,3],[27,3],[27,1],[31,3],[31,3],[31,1],[35,3],[35,3],[35,1],[38,1],[38,1],[38,1],[38,3],[4,0],[4,2],[23,0],[23,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1] 
break;
case 2:
 this.$ = ['Program', $$[$0]] 
break;
case 3:
 this.$ = ['Assignment', $$[$0-3], $$[$0-1]] 
break;
case 4:
 this.$ = ['If', $$[$0-1], $$[$0]] 
break;
case 5:
 this.$ = ['Elseif', $$[$0-1], $$[$0]] 
break;
case 6:
 this.$ = ['Else', $$[$0]] 
break;
case 7:
 this.$ = ['While', $$[$0-1], $$[$0]] 
break;
case 8:
 this.$ = ['Print', $$[$0-1]] 
break;
case 9: case 10: case 30:
 this.$ = $$[$0-1] 
break;
case 11: case 16: case 20: case 23: case 26:
 this.$ = $$[$0] 
break;
case 12:
 this.$ = ['String', $$[$0].replace(/^"(.*)"$/, '\u00241')] 
break;
case 13: case 17:
 this.$ = ['Lt', $$[$0-2], $$[$0]] 
break;
case 14: case 18:
 this.$ = ['Gt', $$[$0-2], $$[$0]] 
break;
case 15:
 this.$ = ['Eq', $$[$0]] 
break;
case 19:
 this.$ = ['Eq', $$[$0-2], $$[$0]] 
break;
case 21:
 this.$ = ['Plus', $$[$0-2], $$[$0]] 
break;
case 22:
 this.$ = ['Minus', $$[$0-2], $$[$0]] 
break;
case 24:
 this.$ = ['Times', $$[$0-2], $$[$0]] 
break;
case 25:
 this.$ = ['Divides', $$[$0-2], $$[$0]] 
break;
case 27:
 this.$ = ['Number', $$[$0]] 
break;
case 28:
 this.$ = ['Id', $$[$0]] 
break;
case 29:
 this.$ = ['Input', ] 
break;
case 31: case 33:
this.$ = [];
break;
case 32: case 34:
$$[$0-1].push($$[$0]);
break;
}
},
table: [o($V0,[2,31],{3:1,4:2}),{1:[3]},{5:[1,3],6:4,7:[1,5]},{1:[2,1]},o($V0,[2,32]),{8:6,22:$V1},o($V0,[2,2]),o($V2,[2,33],{23:8}),{9:10,10:[1,11],14:[1,12],16:[1,13],17:[1,14],18:[1,15],24:[1,9]},o([5,7,10,14,16,17,18,24],[2,10]),o($V2,[2,34]),{11:[1,16]},{15:17,20:$V3},{8:20,14:[1,19],22:$V1},{15:21,20:$V3},{10:$V4,12:23,19:22,20:$V5,25:[1,24],27:26,29:$V6,31:27,35:28,38:29,40:$V7,41:$V8},{10:$V4,12:34,20:$V5,27:26,29:$V6,31:27,35:28,38:29,40:$V7,41:$V8},{8:35,22:$V1},{10:$V4,12:36,20:$V5,27:26,29:$V6,31:27,35:28,38:29,40:$V7,41:$V8},{15:37,20:$V3},o($V2,[2,6]),{8:38,22:$V1},{13:[1,39]},{13:[2,11],26:$V9,28:$Va},{13:[2,12]},{10:$V4,20:$V5,27:42,31:27,35:28,38:29,40:$V7,41:$V8},o($Vb,[2,16],{30:$Vc,32:$Vd,33:$Ve}),o($Vf,[2,20],{34:$Vg,36:$Vh}),o($Vi,[2,23],{37:$Vj,39:$Vk}),o($Vl,[2,26]),o($Vl,[2,27]),o($Vl,[2,28]),o($Vl,[2,29]),{10:$V4,12:50,20:$V5,27:26,29:$V6,31:27,35:28,38:29,40:$V7,41:$V8},{13:[1,51],26:$V9,28:$Va},o($V2,[2,4]),{21:[1,52],26:$V9,28:$Va},{8:53,22:$V1},o($V2,[2,7]),o($V2,[2,8]),{10:$V4,20:$V5,27:54,31:27,35:28,38:29,40:$V7,41:$V8},{10:$V4,20:$V5,27:55,31:27,35:28,38:29,40:$V7,41:$V8},o($Vb,[2,15],{30:$Vc,32:$Vd,33:$Ve}),{10:$V4,20:$V5,31:56,35:28,38:29,40:$V7,41:$V8},{10:$V4,20:$V5,31:57,35:28,38:29,40:$V7,41:$V8},{10:$V4,20:$V5,31:58,35:28,38:29,40:$V7,41:$V8},{10:$V4,20:$V5,35:59,38:29,40:$V7,41:$V8},{10:$V4,20:$V5,35:60,38:29,40:$V7,41:$V8},{10:$V4,20:$V5,38:61,40:$V7,41:$V8},{10:$V4,20:$V5,38:62,40:$V7,41:$V8},{21:[1,63],26:$V9,28:$Va},o($V2,[2,3]),{22:[2,9]},o($V2,[2,5]),o($Vb,[2,13],{30:$Vc,32:$Vd,33:$Ve}),o($Vb,[2,14],{30:$Vc,32:$Vd,33:$Ve}),o($Vf,[2,17],{34:$Vg,36:$Vh}),o($Vf,[2,18],{34:$Vg,36:$Vh}),o($Vf,[2,19],{34:$Vg,36:$Vh}),o($Vi,[2,21],{37:$Vj,39:$Vk}),o($Vi,[2,22],{37:$Vj,39:$Vk}),o($Vl,[2,24]),o($Vl,[2,25]),o($Vl,[2,30])],
defaultActions: {3:[2,1],24:[2,12],52:[2,9]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip */
break;
case 1:return 5;
break;
case 2:return 7;
break;
case 3:return 11;
break;
case 4:return 13;
break;
case 5:return 14;
break;
case 6:return 16;
break;
case 7:return 17;
break;
case 8:return 18;
break;
case 9:return 20;
break;
case 10:return 21;
break;
case 11:return 22;
break;
case 12:return 24;
break;
case 13:return 26;
break;
case 14:return 28;
break;
case 15:return 29;
break;
case 16:return 30;
break;
case 17:return 32;
break;
case 18:return 33;
break;
case 19:return 34;
break;
case 20:return 36;
break;
case 21:return 37;
break;
case 22:return 39;
break;
case 23:return 41;
break;
case 24:return 40;
break;
case 25:return 10;
break;
case 26:return 25;
break;
}
},
rules: [/^(?:\s+)/,/^(?:$)/,/^(?:program\b)/,/^(?::)/,/^(?:;)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:print\b)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:and\b)/,/^(?:or\b)/,/^(?:not\b)/,/^(?:>)/,/^(?:<)/,/^(?:=)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:input\b)/,/^(?:[0-9]+)/,/^(?:[a-zA-Z]+)/,/^(?:"[^"]*")/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}