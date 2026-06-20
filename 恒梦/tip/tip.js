//zifuir
concat('') //合并字符串
padStart(zsihdu, '') //补齐字符串
padEnd(zsihdu, '') //补齐字符串
slice() //获取子字符串
substr(index, length) //获取子字符串
substring(start, end) //获取子字符串
trim() //去除两端空格
trimLeft() || trimStart() //去除开头空格
trimRight() || trimEnd() //去除结尾空格
toLowerCase() //转小写
toUpperCase() //转大写
charAt(index) //获取指定位置字符
replace(old, newstr) //替换字符串
replaceAll(old, newstr) //替换所有字符串
split(separator, limit) //分割字符串，返回数组
includes(str) //判断是否包含指定字符串
startsWith(str) //判断是否以指定字符串开头
endsWith(str) //判断是否以指定字符串结尾
charCodeAt(index) //获取指定位置字符的ASCII码
fromCharCode(code) //根据ASCII码获取字符
localeCompare(str) //比较两个字符串，返回-1/0/1
localeCompare(str, locales, options) //比较两个字符串，根据locales和options进行比较
normalize(form) //规范化字符串
repeat(count) //重复字符串count次
indexOf(str) //查找字符串第一次出现的位置
lastIndexOf(str) //查找字符串最后一次出现的位置
search(regexp) //正则匹配，返回匹配到的第一个位置
match(regexp) //正则匹配，返回匹配到的所有位置
matchAll(regexp) //正则匹配，返回匹配到的所有位置的迭代器
at(index) //获取指定位置字符，等同charAt()，允许负数索引
get.verticalStr //返回原str
//zifuir标签
str.sub() //<sub>str</sub>
str.small() //<small>str</small>
str.big() //<big>str</big>
str.bold() //<b>str</b>粗体
str.blink() //<blink>str</blink>闪动
str.fixed() //<tt>str</tt>打字机字体
str.strike() //<strike>str</strike>删除线
str.underline() //<u>str</u>下划线
str.overline() //<overline>str</overline>上划线
str.italic() //<i>str</i>斜体
str.bold() //<b>str</b>粗体
str.center() //<center>str</center>居中
str.fontcolor(color) //<font color="color">str</font>字体颜色
str.fontsize(size) //<font size="size">str</font>字体大小
str.fontfamily(family) //<font family="family">str</font>字体类型
str.h1() //<h1>str</h1>标题1
str.h2() //<h2>str</h2>标题2
str.h3() //<h3>str</h3>标题3
str.h4() //<h4>str</h4>标题4
str.h5() //<h5>str</h5>标题5
str.h6() //<h6>str</h6>标题6
str.hr() //<hr>水平线
str.link(url) //<a href="url">str</a>超链接
str.img(src, alt, width, height) //<img src="src" alt="alt" width="width" height="height">图片
str.list(type) //<ul>或<ol>，type为1或2，1表示有序列表，2表示无序列表
str.li(content) //<li>content</li>列表项
str.table(rows, cols) //<table>，rows行数，cols列数
str.tr(content) //<tr>content</tr>表格行
str.td(content, rowspan, colspan) //<td>content</td>表格单元格
str.div(content, id, classx) //<div id="id" class="class">content</div>块级元素
str.span(content, id, classx) //<span id="id" class="class">content</span>内联元素
str.code(content) //<code>content</code>代码块
str.pre(content) //<pre>content</pre>预格式化代码块
str.blockquote(content) //<blockquote>content</blockquote>引用块
str.center(content) //<center>content</center>居中块
str.color(color) //<font color="color">str</font>颜色块
str.size(size) //<font size="size">str</font>大小块
str.family(family) //<font family="family">str</font>字体块
str.align(align) //<div align="align">content</div>对齐块
str.bgcolor(color) //<div style="background-color:color;">content</div>背景色块
str.border(width, style, color) //<div style="border:width style color;">content</div>边框块
str.margin(margin) //<div style="margin:margin;">content</div>外边距块
str.padding(padding) //<div style="padding:padding;">content</div>内边距块
str.shadow(x, y, blur, color) //<div style="box-shadow:x y blur color;">content</div>阴影块
str.borderradius(radius) //<div style="border-radius:radius;">content</div>圆角块
str.opacity(opacity) //<div style="opacity:opacity;">content</div>透明度块
str.rotate(deg) //<div style="transform:rotate(deg);">content</div>旋转块
str.scale(x, y) //<div style="transform:scale(x, y);">content</div>缩放块
str.skew(x, y) //<div style="transform:skew(x, y);">content</div>倾斜块
str.translate(x, y) //<div style="transform:translate(x, y);">content</div>位移块
str.rotate3d(x, y, z, deg) //<div style="transform:rotate3d(x, y, z, deg);">content</div>3D旋转块
str.scale3d(x, y, z) //<div style="transform:scale3d(x, y, z);">content</div>3D缩放块
str.perspective(n) //<div style="perspective:n;">content</div>透视块
str.transition(property, duration, timing, delay) //<div style="transition:property duration timing delay;">content</div>过渡块
str.animation(name, duration, timing, delay, iteration, direction, fillMode) //<div style="animation:name duration timing delay iteration direction fillMode;">content</div>动画块
str.gradient(
  type,
  color1,
  color2,
  direction,
  position,
  size,
  shape,
  size2,
  shape2
) //<div style="background:type color1, color2 direction position size shape, size2 shape2;">content</div>渐变块
