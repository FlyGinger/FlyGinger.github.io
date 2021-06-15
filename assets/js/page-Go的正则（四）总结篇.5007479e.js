(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{503:function(s,e,a){"use strict";a.r(e);var n=a(1),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"go-的正则-四-总结篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-的正则-四-总结篇"}},[s._v("#")]),s._v(" Go 的正则（四）总结篇")]),s._v(" "),a("p",[s._v("想要判断正则表达式能否匹配某个字符串，首先要理解正则表达式的含义。这就需要解析正则表达式，构造一个等价的语法树，并在构造过程中尽可能地进行优化。")]),s._v(" "),a("p",[s._v("这个总结篇总结了以下三篇随笔。这三篇不建议看，都是读代码时随手写的。")]),s._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/post/2021-06-13 Go 的正则（一）.html"}},[s._v("Go 的正则（一）")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/post/2021-06-13 Go 的正则（二）.html"}},[s._v("Go 的正则（二）")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/post/2021-06-13 Go 的正则（三）.html"}},[s._v("Go 的正则（三）")])],1)]),s._v(" "),a("h2",{attrs:{id:"语法树的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法树的数据结构"}},[s._v("#")]),s._v(" 语法树的数据结构")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A Regexp is a node in a regular expression syntax tree.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Regexp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Op       Op "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// operator")]),s._v("\n    Flags    Flags\n    Sub      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Regexp  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// subexpressions, if any")]),s._v("\n    Sub0     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Regexp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// storage for short Sub")]),s._v("\n    Rune     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("rune")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matched runes, for OpLiteral, OpCharClass")]),s._v("\n    Rune0    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("rune")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// storage for short Rune")]),s._v("\n    Min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Max "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// min, max for OpRepeat")]),s._v("\n    Cap      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// capturing index, for OpCapture")]),s._v("\n    Name     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// capturing name, for OpCapture")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("code",[s._v("Regexp")]),s._v(" 位于 "),a("code",[s._v("regexp/syntax")]),s._v(" 包中，定义了正则表达式语法树的节点结构。")]),s._v(" "),a("h3",{attrs:{id:"op-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#op-字段"}},[s._v("#")]),s._v(" "),a("code",[s._v("Op")]),s._v(" 字段")]),s._v(" "),a("p",[a("code",[s._v("Op")]),s._v(" 字段，保存了节点的类型。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// An Op is a single regular expression operator.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Op "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Operators are listed in precedence order, tightest binding to weakest.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Character class operators are listed simplest to most complex")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (OpLiteral, OpCharClass, OpAnyCharNotNL, OpAnyChar).")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    OpNoMatch        Op "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches no strings")]),s._v("\n    OpEmptyMatch                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches empty string")]),s._v("\n    OpLiteral                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches Runes sequence")]),s._v("\n    OpCharClass                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches Runes interpreted as range pair list")]),s._v("\n    OpAnyCharNotNL                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches any character except newline")]),s._v("\n    OpAnyChar                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches any character")]),s._v("\n    OpBeginLine                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches empty string at beginning of line")]),s._v("\n    OpEndLine                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches empty string at end of line")]),s._v("\n    OpBeginText                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches empty string at beginning of text")]),s._v("\n    OpEndText                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches empty string at end of text")]),s._v("\n    OpWordBoundary                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches word boundary `\\b`")]),s._v("\n    OpNoWordBoundary               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches word non-boundary `\\B`")]),s._v("\n    OpCapture                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// capturing subexpression with index Cap, optional name Name")]),s._v("\n    OpStar                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches Sub[0] zero or more times")]),s._v("\n    OpPlus                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches Sub[0] one or more times")]),s._v("\n    OpQuest                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches Sub[0] zero or one times")]),s._v("\n    OpRepeat                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches Sub[0] at least Min times, at most Max (Max == -1 is no limit)")]),s._v("\n    OpConcat                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches concatenation of Subs")]),s._v("\n    OpAlternate                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// matches alternation of Subs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" opPseudo Op "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// where pseudo-ops start")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Pseudo-ops for parsing stack.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    opLeftParen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" opPseudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v("\n    opVerticalBar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[a("code",[s._v("Op")]),s._v(" 是按照结合的程度从紧到松定义的。")]),s._v(" "),a("p",[a("code",[s._v("OpNoMatch")]),s._v(" 是不匹配任何字符串的类型。 "),a("code",[s._v("OpEmptyMatch")]),s._v(" 是空字符串类型。")]),s._v(" "),a("p",[a("code",[s._v("OpLiteral")]),s._v(" 是字面量类型，最普通的类型了，匹配字符本身。 "),a("code",[s._v("OpCharClass")]),s._v(" 是字符类类型，代表 "),a("code",[s._v("[a-b]")]),s._v(" 这种形式的正则表达式。 "),a("code",[s._v("OpAnyCharNotNL")]),s._v(" 是通配符类型，能够匹配除了 "),a("code",[s._v("\\n")]),s._v(" 之外的任何一个字符。 "),a("code",[s._v("OpAnyChar")]),s._v(" 是全集类型，能够匹配任何一个字符。")]),s._v(" "),a("p",[a("code",[s._v("OpBeginLine")]),s._v(" 、 "),a("code",[s._v("OpEndLine")]),s._v(" 、 "),a("code",[s._v("OpBeginText")]),s._v(" 、 "),a("code",[s._v("OpEndText")]),s._v(" 、 "),a("code",[s._v("OpWordBoundary")]),s._v(" 、 "),a("code",[s._v("OpNoWordBoundary")]),s._v(" 不匹配实际的字符。它们分别匹配行首、行末、文首、文末、单词边界和非单词边界，它们匹配的是一个位置。 POSIX 实际不支持 "),a("code",[s._v("\\b")]),s._v(" 、 "),a("code",[s._v("\\A")]),s._v(" 等这类操作，所以不会生成这些节点类型。不过 "),a("code",[s._v("^")]),s._v(" 和 "),a("code",[s._v("$")]),s._v(" 还是支持的，所以可以生成匹配行首行末的操作。")]),s._v(" "),a("p",[a("code",[s._v("OpCapture")]),s._v(" 是捕获类型。在正则表达式中，可以使用 "),a("code",[s._v("()")]),s._v(" 来捕获匹配到的内容。")]),s._v(" "),a("p",[a("code",[s._v("OpStar")]),s._v(" 、 "),a("code",[s._v("OpPlus")]),s._v(" 、 "),a("code",[s._v("OpQuest")]),s._v(" 、 "),a("code",[s._v("OpRepeat")]),s._v(" 是重复类型，分别是 "),a("code",[s._v("*")]),s._v(" 、 "),a("code",[s._v("+")]),s._v(" 、 "),a("code",[s._v("?")]),s._v(" 和 "),a("code",[s._v("{m,n}")]),s._v(" 类型的重复。")]),s._v(" "),a("p",[a("code",[s._v("OpConcat")]),s._v(" 是连接类型，代表连接操作。比如正则表达式 "),a("code",[s._v("ab")]),s._v(" ， "),a("code",[s._v("a")]),s._v(" 和 "),a("code",[s._v("b")]),s._v(" 就连接到了一起。 "),a("code",[s._v("OpAlternate")]),s._v(" 是选择类型，代表选择操作。比如正则表达式 "),a("code",[s._v("a|b")]),s._v(" ， "),a("code",[s._v("a")]),s._v(" 和 "),a("code",[s._v("b")]),s._v(" 就选择到了一起。")]),s._v(" "),a("p",[a("code",[s._v("opPseudo")]),s._v(" 是伪操作符的起点，从这个值开始定义的操作符都是伪操作符。伪操作符在解析正则表达式过程中起到辅助作用的操作符，不会出现在解析结果中。")]),s._v(" "),a("p",[s._v("伪操作符只有两个，一个是左括号 "),a("code",[s._v("opLeftParen")]),s._v(" ，一个是选择符号 "),a("code",[s._v("opVerticalBar")]),s._v(" 。")]),s._v(" "),a("h3",{attrs:{id:"sub-和-sub0-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sub-和-sub0-字段"}},[s._v("#")]),s._v(" "),a("code",[s._v("Sub")]),s._v(" 和 "),a("code",[s._v("Sub0")]),s._v(" 字段")]),s._v(" "),a("p",[a("code",[s._v("Sub")]),s._v(" 字段是一个数组（切片），保存了该节点的子节点，从而构成一种树结构。")]),s._v(" "),a("p",[a("code",[s._v("Sub0")]),s._v(" 是一个真正意义上的数组，定长数组，其存在的目的是减少内存操作的次数。在创建新节点或者清空 "),a("code",[s._v("Sub")]),s._v(" 时，一般会令 "),a("code",[s._v("Sub = Sub0[:0]")]),s._v(" 。这样一来，向 "),a("code",[s._v("Sub")]),s._v(" 中添加的第一个元素，实际上是保存在 "),a("code",[s._v("Sub0")]),s._v(" 这个定长数组中，没有进行任何申请新数组的内存操作。向 "),a("code",[s._v("Sub")]),s._v(" 中添加第二个或更多个元素时， "),a("code",[s._v("Sub")]),s._v(" 才会拓展长度。")]),s._v(" "),a("p",[s._v("另外， Go 中向一个装满的切片添加新元素时， Go 会创建一个更大的数组，然后把原来切片内的元素都复制过来。")]),s._v(" "),a("h3",{attrs:{id:"rune-和-rune0-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rune-和-rune0-字段"}},[s._v("#")]),s._v(" "),a("code",[s._v("Rune")]),s._v(" 和 "),a("code",[s._v("Rune0")]),s._v(" 字段")]),s._v(" "),a("p",[a("code",[s._v("Rune")]),s._v(" 字段也是一个数组（切片），保存了字符信息。")]),s._v(" "),a("p",[a("code",[s._v("Rune")]),s._v(" 用于两种 "),a("code",[s._v("Op")]),s._v(" 类型。第一个是 "),a("code",[s._v("OpLiteral")]),s._v(" 字面量类型，对应 "),a("code",[s._v("a")]),s._v(" 、 "),a("code",[s._v("b")]),s._v(" 这样的正则表达式。此时 "),a("code",[s._v("Rune")]),s._v(" 字段中保存的是字符，例如 "),a("code",[s._v("['a', 'b', 'c']")]),s._v(" 对应正则表达式 "),a("code",[s._v("abc")]),s._v(" 。")]),s._v(" "),a("p",[s._v("第二个是 "),a("code",[s._v("OpCharClass")]),s._v(" 字符类类型，它代表的是一类字符，对应 "),a("code",[s._v("[a-z0-9]")]),s._v(" 这样的正则表达式。此时 "),a("code",[s._v("Rune")]),s._v(" 字段中保存的是范围，其格式是 "),a("code",[s._v("[lo0, hi0, lo1, hi1, lo2, hi2, ...]")]),s._v(" ，每两个字符是一对。正则表达式 "),a("code",[s._v("[a-z0-9]")]),s._v(" 对应的 "),a("code",[s._v("Rune")]),s._v(" 字段应该是 "),a("code",[s._v("['a', 'z', '0', '9']")]),s._v(" 。")]),s._v(" "),a("p",[s._v("另外， "),a("code",[s._v("Rune0")]),s._v(" 字段的作用和 "),a("code",[s._v("Sub0")]),s._v(" 的作用是类似的，都是优化手段。由于字符类类型的 "),a("code",[s._v("Rune")]),s._v(" 是一对一对的，所以 "),a("code",[s._v("Rune0")]),s._v(" 是一个长度为 2 的定长数组。")]),s._v(" "),a("h3",{attrs:{id:"其他字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他字段"}},[s._v("#")]),s._v(" 其他字段")]),s._v(" "),a("p",[a("code",[s._v("Flags")]),s._v(" 字段保存了节点的配置信息。包括大小写敏感、"),a("code",[s._v(".")]),s._v(" 是否匹配 "),a("code",[s._v("\\n")]),s._v(" 等等一些配置。本文的中心是正则表达式的解析，因此这个字段不会详细介绍。下文的分析中，默认 "),a("code",[s._v("Flags == 0")]),s._v(" 。在默认的 POSIX 模式下， "),a("code",[s._v("Flags")]),s._v(" 就是等于 0 的。")]),s._v(" "),a("p",[a("code",[s._v("Min")]),s._v(" 和 "),a("code",[s._v("Max")]),s._v(" 字段用于 "),a("code",[s._v("OpRepeat")]),s._v(" 类型的节点，保存的是重复的最小和最大的次数。")]),s._v(" "),a("p",[a("code",[s._v("Cap")]),s._v(" 和 "),a("code",[s._v("Name")]),s._v(" 字段用于 "),a("code",[s._v("OpCapture")]),s._v(" 类型的节点，保存捕获的索引和命名。")]),s._v(" "),a("h2",{attrs:{id:"解析器的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析器的数据结构"}},[s._v("#")]),s._v(" 解析器的数据结构")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" parser "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    flags       Flags     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parse mode flags")]),s._v("\n    stack       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Regexp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// stack of parsed expressions")]),s._v("\n    free        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Regexp\n    numCap      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// number of capturing groups seen")]),s._v("\n    wholeRegexp "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    tmpClass    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("rune")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// temporary char class work space")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("parser")]),s._v(" 位于 "),a("code",[s._v("regexp/syntax")]),s._v(" 包中，是解析正则表达式时使用的辅助数据结构。")]),s._v(" "),a("p",[a("code",[s._v("flags")]),s._v(" 字段用于保存解析时的配置参数，本文中默认它一直是 0 。")]),s._v(" "),a("p",[a("code",[s._v("stack")]),s._v(" 是解析栈，解析过程中使用的栈。")]),s._v(" "),a("p",[a("code",[s._v("free")]),s._v(" 是回收站，结构上来说是一个链表。 "),a("code",[s._v("free")]),s._v(" 直接指向一个 "),a("code",[s._v("Regexp")]),s._v(" ，然后通过该 "),a("code",[s._v("Regexp")]),s._v(" 的 "),a("code",[s._v("Sub0[0]")]),s._v(" 继续指向下一个 "),a("code",[s._v("Regexp")]),s._v(" ……从而形成链表。链表中存放的是不再使用的节点。当解析器需要创建新节点时，首先会看看 "),a("code",[s._v("free")]),s._v(" 中有没有节点，如果有就拿过来直接用，如果没有才去真正创建新的节点。当然，如果某节点不再使用了，就会直接塞到 "),a("code",[s._v("free")]),s._v(" 中。")]),s._v(" "),a("p",[a("code",[s._v("numCap")]),s._v(" 是捕获组的数量，可以简单理解为 "),a("code",[s._v("(")]),s._v(" 的数量。")]),s._v(" "),a("p",[a("code",[s._v("wholeRegexp")]),s._v(" 保存了正则表达式本体。")]),s._v(" "),a("p",[a("code",[s._v("tmpClass")]),s._v(" 是在处理字符类时使用的一个辅助数组。")]),s._v(" "),a("h2",{attrs:{id:"解析过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析过程"}},[s._v("#")]),s._v(" 解析过程")]),s._v(" "),a("p",[s._v("解析器的灵魂就是这个解析栈，解析过程主要就是栈的操作过程。")]),s._v(" "),a("h3",{attrs:{id:"入栈操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入栈操作"}},[s._v("#")]),s._v(" 入栈操作")]),s._v(" "),a("p",[s._v("入栈是通过 "),a("code",[s._v("push()")]),s._v(" 方法进行的，其中利用了一个非常重要的优化方法 "),a("code",[s._v("maybeConcat()")]),s._v(" 。 "),a("code",[s._v("maybeConcat()")]),s._v(" 会检查栈顶，如果栈顶的两个元素都是 "),a("code",[s._v("OpLiteral")]),s._v(" 类型，那么就将其合并。")]),s._v(" "),a("p",[s._v("每次调用 "),a("code",[s._v("push()")]),s._v(" 时， "),a("code",[s._v("push()")]),s._v(" 都会先调用 "),a("code",[s._v("maybeConcat()")]),s._v(" ，然后再把新节点压入栈中。举个例子，依次向栈中压入字面量类型的节点 "),a("code",[s._v("a")]),s._v(" 、 "),a("code",[s._v("b")]),s._v(" 、 "),a("code",[s._v("c")]),s._v(" 、 "),a("code",[s._v("d")]),s._v(" 时，栈的变化如下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                          +-------+    +-------+    +-------+\n                          |   b   |    |   c   |    |   d   |\n             +-------+    +-------+    +-------+    +-------+\n             |   a   |    |   a   |    |  ab   |    |  abc  |\n+-------+    +-------+    +-------+    +-------+    +-------+\n| STACK | -> | STACK | -> | STACK | -> | STACK | -> | STACK |\n+-------+    +-------+    +-------+    +-------+    +-------+\n        push a       push b       push c       push d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这样的 "),a("code",[s._v("push()")]),s._v(" 操作保证了栈顶不会有连续的、超过两个 "),a("code",[s._v("OpLiteral")]),s._v(" 节点。另外， "),a("code",[s._v("push()")]),s._v(" 还有一个小优化。如果要入栈的节点是一个 "),a("code",[s._v("OpCharClass")]),s._v(" 节点，并且 "),a("code",[s._v("len(Rune) == 2")]),s._v(" 且 "),a("code",[s._v("Rune[0] == Rune[1]")]),s._v(" ，那么可以把它优化成一个 "),a("code",[s._v("OpLiteral")]),s._v(" 节点。用人话来说， "),a("code",[s._v("[a]")]),s._v(" 这样的正则表达式可以优化成 "),a("code",[s._v("a")]),s._v(" 。")]),s._v(" "),a("h3",{attrs:{id:"字面量和字符类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字面量和字符类"}},[s._v("#")]),s._v(" 字面量和字符类")]),s._v(" "),a("p",[s._v("说起来简单，但是字面量和字符类复杂程度很高。有最普通的字面量，还有通过转义来表示的字面量，还有预定义好的字符类，还可以用某些方式表示 Unicode 字符……具体的解析过程就不看了，假定我们已经拿到了字面量和字符类的节点，现在要把它入栈。")]),s._v(" "),a("p",[s._v("忽略那些麻烦的部分之后，字面量和字符类确实是最简单的，它们的入栈没有花里胡哨的东西，直接通过 "),a("code",[s._v("push()")]),s._v(" 放入栈中就完了。")]),s._v(" "),a("h3",{attrs:{id:"连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[s._v("#")]),s._v(" 连接")]),s._v(" "),a("p",[s._v("假定依次向栈中压入了 "),a("code",[s._v("a")]),s._v(" 、 "),a("code",[s._v("b")]),s._v(" 、 "),a("code",[s._v("c")]),s._v(" 、 "),a("code",[s._v("d")]),s._v(" 、 "),a("code",[s._v("[0-9]")]),s._v(" 、 "),a("code",[s._v("x")]),s._v(" 、 "),a("code",[s._v("y")]),s._v(" ，那么最终的栈应该是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------+\n|   y   |\n+-------+\n|   x   |\n+-------+\n| [0-9] |\n+-------+\n| abcd  |\n+-------+\n| STACK |\n+-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("如果此时正则表达式已经解析完了，那么需要把栈中的各个节点合并为一个。这是通过 "),a("code",[s._v("concat()")]),s._v(" 方法实现的。")]),s._v(" "),a("p",[a("code",[s._v("concat()")]),s._v(" 中首先会调用熟悉的 "),a("code",[s._v("maybeConcat()")]),s._v(" 方法，此时栈中会变成：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------+\n|  xy   |\n+-------+\n| [0-9] |\n+-------+\n| abcd  |\n+-------+\n| STACK |\n+-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后 "),a("code",[s._v("concat()")]),s._v(" 会创建一个 "),a("code",[s._v("OpConcat")]),s._v(" 类型的节点 "),a("code",[s._v("re")]),s._v(" ，然后把栈中的三个节点变成 "),a("code",[s._v("re")]),s._v(" 的子节点， "),a("code",[s._v('re.Sub = {"abcd", "[0-9]", "xy"}')]),s._v(" 。最后，栈中会变成：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------+\n| <re>  |\n+-------+\n| STACK |\n+-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("实际上， "),a("code",[s._v("concat()")]),s._v(" 不会把栈中的所有节点全部连接起来。它会从栈顶向下寻找，直到遇到 "),a("code",[s._v("opLeftParen")]),s._v(" 、 "),a("code",[s._v("opVerticalBar")]),s._v(" 或者栈底，标记这个位置为 "),a("code",[s._v("i")]),s._v(" 。 "),a("code",[s._v("concat()")]),s._v(" 只会将位置 "),a("code",[s._v("i")]),s._v(" 之后所有节点连接起来。")]),s._v(" "),a("p",[s._v("换句话说， "),a("code",[s._v("concat()")]),s._v(" 只会把从栈顶往下的第一个 "),a("code",[s._v("(")]),s._v(" 、 "),a("code",[s._v("|")]),s._v(" 或者栈底之后的所有节点连接起来。")]),s._v(" "),a("h3",{attrs:{id:"选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择"}},[s._v("#")]),s._v(" 选择")]),s._v(" "),a("p",[s._v("选择是除了连接之外的另一个重要的操作，其操作符是 "),a("code",[s._v("|")]),s._v(" 。当解析正则表达式遇到 "),a("code",[s._v("|")]),s._v(" 时，会调用 "),a("code",[s._v("parseVerticalBar()")]),s._v(" 方法来处理。在 "),a("code",[s._v("parseVerticalBar()")]),s._v(" 方法中，首先会调用 "),a("code",[s._v("concat()")]),s._v(" 方法，将栈顶的 "),a("code",[s._v("(")]),s._v(" 或者 "),a("code",[s._v("|")]),s._v(" 之后的所有元素连接成一个。然后 "),a("code",[s._v("parseVerticalBar()")]),s._v(" 会调用 "),a("code",[s._v("swapVerticalBar()")]),s._v(" 方法。")]),s._v(" "),a("p",[a("a",{attrs:{href:"#%E8%BF%9E%E6%8E%A5"}},[s._v("连接")]),s._v(" 中曾经提到 "),a("code",[s._v("concat()")]),s._v(" 的施工范围。执行完 "),a("code",[s._v("concat()")]),s._v(" 之后，只有三种可能的栈形态。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("             +-------+    +-------+\n             | <re>  |    | <re>  |\n             +-------+    +-------+\n             |   (   |    |   |   |\n+-------+    +-------+    +-------+\n| <re>  |    |  ...  |    |  ...  |\n+-------+    +-------+    +-------+\n| STACK |    | STACK |    | STACK |\n+-------+    +-------+    +-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("第一种情况是栈中没有 "),a("code",[s._v("(")]),s._v(" 和 "),a("code",[s._v("|")]),s._v(" 的情况，所有节点被连接成了一个。第二种和第三种则是分别先遇到了 "),a("code",[s._v("(")]),s._v(" 或 "),a("code",[s._v("|")]),s._v(" 。 "),a("code",[s._v("(")]),s._v(" 代表了子表达式的开始，可以认为是另一种形式的“栈底”，因此第二种情况就不多加解释。而第三种情况中，可以想想 "),a("code",[s._v("|")]),s._v(" 之下具体是什么。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("             +-------+    +-------+\n             | <re>  |    | <re>  |\n             +-------+    +-------+\n             |   |   |    |   |   |\n+-------+    +-------+    +-------+\n| <re>  |    | <re1> |    | <re1> |\n+-------+    +-------+    +-------+\n|   |   |    |   (   |    |   |   |\n+-------+    +-------+    +-------+\n| <re1> |    |  ...  |    |  ...  |\n+-------+    +-------+    +-------+\n| STACK |    | STACK |    | STACK |\n+-------+    +-------+    +-------+\n    √            √            ×\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("这次又是三种情况。第一种情况， "),a("code",[s._v("|")]),s._v(" 之下只有另一个节点。第二种情况， "),a("code",[s._v("|")]),s._v(" 之下是另一个节点和 "),a("code",[s._v("(")]),s._v(" 。而第三种情况是不可能发生的， "),a("code",[s._v("|")]),s._v(" 之下不可能还有 "),a("code",[s._v("|")]),s._v(" 。 "),a("code",[s._v("parseVerticalBar()")]),s._v(" 能够保证，从离栈顶最近的 "),a("code",[s._v("(")]),s._v(" （或栈底，如果没有 "),a("code",[s._v("(")]),s._v(" 的话）到栈顶之间的所有元素中，最多只有一个 "),a("code",[s._v("|")]),s._v(" 。这一性质是靠 "),a("code",[s._v("swapVerticalBar()")]),s._v(" 方法实现的。")]),s._v(" "),a("p",[a("code",[s._v("swapVerticalBar()")]),s._v(" 会检查栈顶第二个元素，如果发现它是 "),a("code",[s._v("|")]),s._v(" ，那么就把它交换到栈顶；如果不是 "),a("code",[s._v("|")]),s._v(" ，那么手动在栈顶压入一个 "),a("code",[s._v("|")]),s._v(" 。举个例子来说，入栈的节点分别是 "),a("code",[s._v("a")]),s._v(" 、 "),a("code",[s._v("b")]),s._v(" 、 "),a("code",[s._v("|")]),s._v(" 、 "),a("code",[s._v("c")]),s._v(" 、 "),a("code",[s._v("d")]),s._v(" 、 "),a("code",[s._v("|")]),s._v(" 、 "),a("code",[s._v("e")]),s._v(" 、 "),a("code",[s._v("f")]),s._v(" ，那么栈中的活动分别是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                                                    +-------+\n                                                    |   c   |\n                          +-------+    +-------+    +-------+\n                          |   b   |    |   |   |    |   |   |\n             +-------+    +-------+    +-------+    +-------+\n             |   a   |    |   a   |    |  ab   |    |  ab   |\n+-------+    +-------+    +-------+    +-------+    +-------+\n| STACK | -> | STACK | -> | STACK | -> | STACK | -> | STACK | ->\n+-------+    +-------+    +-------+    +-------+    +-------+\n        push a       push b       push |       push c        push d\n\n                                       +-------+\n                                       |   f   |\n+-------+                 +-------+    +-------+\n|   d   |                 |   e   |    |   e   |\n+-------+    +-------+    +-------+    +-------+\n|   c   |    |   |   |    |   |   |    |   |   |\n+-------+    +-------+    +-------+    +-------+\n|   |   |    |  cd   |    |  cd   |    |  cd   |\n+-------+    +-------+    +-------+    +-------+\n|  ab   |    |  ab   |    |  ab   |    |  ab   |\n+-------+    +-------+    +-------+    +-------+\n| STACK | -> | STACK | -> | STACK | -> | STACK |\n+-------+    +-------+    +-------+    +-------+\n        push |       push e       push f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("也就是说 "),a("code",[s._v("|")]),s._v(" 之下，到最近的 "),a("code",[s._v("(")]),s._v(" （或者栈底）之上的所有节点，它们之间的关系都是选择关系。当向栈中加入字面量或者字符类时，它们会直接附加在栈顶。当遇到 "),a("code",[s._v("|")]),s._v(" 时，从栈顶到第一个 "),a("code",[s._v("|")]),s._v(" 之间节点会被打包成一个节点，放到 "),a("code",[s._v("|")]),s._v(" 之下。被打包好的节点已经是一个完整的选项了。")]),s._v(" "),a("p",[s._v("以上是遇到 "),a("code",[s._v("|")]),s._v(" 之后的操作。还是用上面的例子，最后栈中剩了很多节点，需要把它们聚合成一个。首先，需要使用 "),a("code",[s._v("concat()")]),s._v(" 把还没连接起来的元素连接起来。然后，使用 "),a("code",[s._v("swapVerticalBar()")]),s._v(" 把 "),a("code",[s._v("|")]),s._v(" 交换出来，丢掉。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------+    +-------+\n|  ef   |    |   |   |\n+-------+    +-------+    +-------+\n|   |   |    |  ef   |    |  ef   |\n+-------+    +-------+    +-------+\n|  cd   |    |  cd   |    |  cd   |\n+-------+    +-------+    +-------+\n|  ab   |    |  ab   |    |  ab   |\n+-------+    +-------+    +-------+\n| STACK | -> | STACK | -> | STACK |\n+-------+    +-------+    +-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("最后，使用 "),a("code",[s._v("alternate()")]),s._v(" 方法把所有选项选择在一起。 "),a("code",[s._v("alternate()")]),s._v(" 会从栈顶开始向下搜索，直到找到栈底或者 "),a("code",[s._v("(")]),s._v(" ，标记这个位置为 "),a("code",[s._v("i")]),s._v(" 。 "),a("code",[s._v("alternate()")]),s._v(" 会把从 "),a("code",[s._v("i")]),s._v(" 到栈顶的所有元素选择到一起。")]),s._v(" "),a("p",[s._v("下文中，会把 "),a("code",[s._v("concat()")]),s._v(" 、 "),a("code",[s._v("swapVerticalBar()")]),s._v(" 、 "),a("code",[s._v("alternate()")]),s._v(" 素质三连称为"),a("strong",[s._v("清理")]),s._v("操作。很明显，清理操作可以把从栈顶开始往下，到第一个 "),a("code",[s._v("(")]),s._v(" （或栈底）之间的所有节点组合成一个节点。")]),s._v(" "),a("p",[s._v("正事说完了，然后说两个上面没提到的优化技巧。第一个是在 "),a("code",[s._v("swapVerticalBar()")]),s._v(" 中。 "),a("code",[s._v("swapVerticalBar()")]),s._v(" 不光会检查栈顶第二个节点是不是 "),a("code",[s._v("|")]),s._v(" ，还会检查栈顶第一个节点和栈顶第三个节点是不是字符类节点。如果它们都是字符类节点，那么可以把它们直接合并。举个例子来说， "),a("code",[s._v("[a-z]|[0-9]")]),s._v(" 可以简化成 "),a("code",[s._v("[a-z0-9]")]),s._v(" 。")]),s._v(" "),a("p",[s._v("另一个是在 "),a("code",[s._v("alternate()")]),s._v(" 中，使用了一个 "),a("code",[s._v("cleanAlt()")]),s._v(" 方法。 "),a("code",[s._v("cleanAlt()")]),s._v(" 方法能够判断一个 "),a("code",[s._v("OpCharClass")]),s._v(" 类型的节点是不是能够“升格”。如果一个 "),a("code",[s._v("OpCharClass")]),s._v(" 的范围是 "),a("code",[s._v("{0, '\\n'-1, '\\n'+1, unicode.MaxRune}")]),s._v(" ，那么它可以直接变为一个 "),a("code",[s._v("OpAnyCharNotNL")]),s._v(" 节点。如果一个 "),a("code",[s._v("OpCharClass")]),s._v(" 的范围是 "),a("code",[s._v("{0, unicode.MaxRune}")]),s._v(" ，那么它可以直接变为一个 "),a("code",[s._v("OpAnyChar")]),s._v(" 节点。")]),s._v(" "),a("h3",{attrs:{id:"括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#括号"}},[s._v("#")]),s._v(" 括号")]),s._v(" "),a("p",[s._v("括号是能够改变优先级的重要操作，实现起来也很复杂。但是讲完连接和选择之后，括号其实不怎么难以理解了。")]),s._v(" "),a("p",[s._v("当解析器遇到 "),a("code",[s._v("(")]),s._v(" 时，会新建一个 "),a("code",[s._v("opLeftParen")]),s._v(" 节点，压入栈中。并且会记录这个 "),a("code",[s._v("(")]),s._v(" 是解析器遇到的第几个 "),a("code",[s._v("(")]),s._v(" ，用户后续捕获分组时使用。")]),s._v(" "),a("p",[s._v("当遇到 "),a("code",[s._v(")")]),s._v(" 时，会调用 "),a("code",[s._v("parseRightParen()")]),s._v(" 方法。它首先进行了清理操作（提示一下，是那个三连）。然后，它弹出了栈顶的两个元素，其一是括号内的内容，其二是 "),a("code",[s._v("opLeftParen")]),s._v(" 节点（如果不是那就要报错了）。然后，创建一个新的 "),a("code",[s._v("OpCapture")]),s._v(" 节点，令括号内的内容作为其唯一的子节点。最后，把新节点压入栈中。")]),s._v(" "),a("h3",{attrs:{id:"重复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复"}},[s._v("#")]),s._v(" 重复")]),s._v(" "),a("p",[s._v("重复有四种， "),a("code",[s._v("*")]),s._v(" 、 "),a("code",[s._v("+")]),s._v(" 、 "),a("code",[s._v("?")]),s._v(" 、 "),a("code",[s._v("{m,n}")]),s._v(" ，分别对应四种类型的节点。读过了连接、选择和括号之后，可以确定栈顶的元素一定是需要重复的那部分（除非原正则表达式就写错了，比如 "),a("code",[s._v("a**")]),s._v(" ）。")]),s._v(" "),a("p",[s._v("所以当遇到这些操作时，解析器会简单地创建一个新节点 "),a("code",[s._v("re")]),s._v(" ，类型与重复方式对应，然后弹出栈顶元素，作为 "),a("code",[s._v("re")]),s._v(" 的子节点，最后把 "),a("code",[s._v("re")]),s._v(" 压入栈中。")]),s._v(" "),a("p",[s._v("Go 中不允许 "),a("code",[s._v("{m,n}")]),s._v(" 中的数字超过 1000 ，嵌套地超过也不行，也就是说 "),a("code",[s._v("(x{100}){11}")]),s._v(" 也不行，拆开括号之后实际的重复次数是 1100 。这里有一个递归的判断过程。")]),s._v(" "),a("h3",{attrs:{id:"结束和其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束和其他"}},[s._v("#")]),s._v(" 结束和其他")]),s._v(" "),a("p",[s._v("结束时，来一个清理操作即可。")]),s._v(" "),a("p",[s._v("其他的问题，比如说 "),a("code",[s._v("x*?")]),s._v(" 可以代表非贪婪的匹配，这些操作是 POSIX 不支持的。")]),s._v(" "),a("p",[s._v("语法树生成好了，接下来要看语法树怎么变成一个状态机了。")])])}),[],!1,null,null,null);e.default=t.exports}}]);