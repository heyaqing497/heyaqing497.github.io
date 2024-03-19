# markdown

markdown 使用介紹. [markdown 中文文檔](https://markdown-zh.readthedocs.io/en/latest)

## 一、标题

    # 这是一级标题
    ## 这是二级标题
    ### 这是三级标题
    #### 这是四级标题
    ##### 这是五级标题
    ###### 这是六级标题

## 二、字体

**这是加粗的文字 1**  
**这里是加粗 2**  
_这是倾斜的文字 3_  
_这里是斜体 4_  
**_这是斜体加粗的文字 5_**  
~~这是加删除线的文字 6~~  
<u>下划线 7</u>

    **这是加粗的文字1**
    __这里是加粗2__
    *这是倾斜的文字3*
    _这里是斜体4_
    ***这是斜体加粗的文字5***
    ~~这是加删除线的文字6~~
    <u>下划线7</u>

## 三、分割线

三个以上的连字符, 星号, 或者下划线

---

---

---

---

    ---
    ----
    ***
    *****

## 四、列表

- 黄瓜
- 玉米
- 茄子

* 黄瓜
* 玉米
* 茄子

- 黄瓜
- 玉米
- 茄子

1. 黄瓜
2. 玉米
3. 茄子

   - 黄瓜
   - 茄子
   - 玉米

   * 黄瓜
   * 玉米
   * 茄子

   - 黄瓜
   - 玉米
   - 茄子

   1. 黄瓜
   2. 玉米
   3. 茄子

## 五、段落

- 段落一
  > 区块标记一
- 段落二

  > 区块标记二
  > 这段文字将被引用显示...

      * 段落一
        > 区块标记一
      * 段落二
        > 区块标记二
      > 这段文字将被引用显示...

## 六、插入链接或图片

[点击跳转至百度](http://www.baidu.com)

![RS7.PNG](https://i.loli.net/2021/10/18/lMsJy3tzTXhvHiI.png)

    [点击跳转至百度](http://www.baidu.com)

    ![RS7.PNG](https://i.loli.net/2021/10/18/lMsJy3tzTXhvHiI.png)

## 七、插入代码块

`fun (x: Int, y: Int): Int {
  return x + y
}`

```python
def hello_world():
    print("Hello, World!")
```

```javascript
fun (x: Int, y: Int): Int {
  return x + y
}
```

    fun (x: Int, y: Int): Int {
      return x + y
    }

---

    ``fun (x: Int, y: Int): Int {
      return x + y
    }``

    ```python
    def hello_world():
        print("Hello, World!")
    ```

    ```javascript
    fun (x: Int, y: Int): Int {
      return x + y
    }
    ```

        fun (x: Int, y: Int): Int {
          return x + y
        }

## 八、插入表格

| 表头 | 条目一 | 条目二 |
| :--: | :----: | :----: |
| 项目 | 项目一 | 项目二 |

    表头|条目一|条目二
    :---:|:---:|:---:
    项目|项目一|项目二

三个短斜杠左右的冒号用于控制对齐方式，只放置左边冒号表示文字居左，只放置右边冒号表示文字居右，如果两边都放置冒号表示文字居中。

## 九、特殊符号处理

Markdown 使用反斜杠\插入语法中用到的特殊符号。

    \   反斜线
    `   反引号
    *   星号
    _   底线
    {}  花括号
    []  方括号
    ()  括弧
    #   井字号
    +   加号
    -   减号
    .   英文句点
    !   惊叹号

## 十、给文字設置顔色和字號

<font size=1>大小为 1 的字体</font>
<font size=6>大小为 6 的字体</font>
<font color=gray size=4>gray 颜色的字</font>
<font color=green size=4>green 颜色的字</font>
<font color=hotpink size=4>hotpink 颜色的字</font>
<font color=LightCoral size=4>LightCoral 颜色的字</font>
<font color=LightSlateGray size=4>LightSlateGray 颜色的字</font>
<font color=orangered size=4>orangered 颜色的字</font>
<font color=red size=4>red 颜色的字</font>
<font color=springgreen size=4>springgreen 颜色的字</font>
<font color=Turquoise size=4>Turquoise 颜色的字</font>

    <font size=1>大小为1的字体</font>
    <font size=6>大小为6的字体</font>
    <font color=gray size=4>gray颜色的字</font>
    <font color=green size=4>green颜色的字</font>
    <font color=hotpink size=4>hotpink颜色的字</font>
    <font color=LightCoral size=4>LightCoral颜色的字</font>
    <font color=LightSlateGray size=4>LightSlateGray颜色的字</font>
    <font color=orangered size=4>orangered颜色的字</font>
    <font color=red size=4>red颜色的字</font>
    <font color=springgreen size=4>springgreen颜色的字</font>
    <font color=Turquoise size=4>Turquoise颜色的字</font>

## 十一、数学公式

### 1、多行公式包裹在\`\`\`math 和\`\`\`内，例如：

```math
e^{i\pi} + 1 = 0
```

    ```math
    e^{i\pi} + 1 = 0
    ```

### 2. 行内公式包裹在\`\$和\$\`内

`$E \neq mc^2$`是一个行内公式

    `$E \neq mc^2$`是一个行内公式

## 十二、添加待办事项

三只青蛙

- [x] 第一只青蛙
- [ ] 第二只青蛙
- [ ] 第三只青蛙

      三只青蛙
      * [x] 第一只青蛙
      * [ ] 第二只青蛙
      * [ ] 第三只青蛙
