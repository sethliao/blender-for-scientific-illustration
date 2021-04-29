# 【Blender科研绘图】案例8-磷脂双分子层
**0 前沿**

嘿，朋友们。

这期给大家讲解**磷脂双分子**的建模及渲染过程。

**难度**：⭐⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**实例化 / AO 遮蔽光**/ 无背渲染**\*\***/ [[置换修改器]] \*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxmODbHMVHpOKIamE6FzFLopORg9P3lwVQK4a7K21QPU4hs5MibibbzuEA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxyuE7icPHibbqth4xhibkzz1naiaHyxlIG7woEGbR3VyfPfFngkibaSWg6Kw/640?wx_fmt=png)

**VX 答疑群见底部，欢迎和我们分享你制作的效果**

**1 建模过程**

按 A 全选，按 X 删除所有的模型

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxcGiahNmuibRu3KdiabXEh34pI97fKnwmRoDLPzpftvw5IZkEJ9PK659oA/640?wx_fmt=png)

Shift+A 添加一个默认立方体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxD4UvsxZVP22H4q8lPScKAnibFHXicVtnMA6kzeRXbicu6sTj9ewWw6trg/640?wx_fmt=png)

在修改器选项里面添加一个表面[[细分]]修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxwjEUXt3fOfibVnEHs1Lz6MDQ49txxib5FKiaibjg02OFGbIObLsTz3bUQw/640?wx_fmt=png)

将[[细分]]设置为下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx5MelkabhFOjuG5DQPb8FptZ3MykJ0HXONYzEUyDapvIyPiaibL0jtDDg/640?wx_fmt=png)

设置完成后在右边的向下小箭头里面选择应用

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxgGhsHdJxBUsXC8jkgicw5cJiatqFDnuUHZwjuSChF6Sd7hDWgNJ0XjFA/640?wx_fmt=png)

按键盘‘~’选择底部

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxic62gS2icFibVkpTuwguOy5tU1fR4jUg3ibX8yhmdkDDNbJKjDyAqXhX5g/640?wx_fmt=png)

在编辑模式下，选择下图所示两个面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxl8RJ1YHl74ricT4CG4zd4vhG0F8892CJnOYlKkGVKvXqeU9R2ZDFaWg/640?wx_fmt=png)

按键盘 I 进行内部挤压，向内挤压一个合适的距离即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx4vrUhgbTtiakULYmkPgWib2va2g8KRmwLMK3HKIvvIfgFcxiaPqibSpzrg/640?wx_fmt=png)

同样另一边也是如此

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxmDTSCibNLsM1Lh3picsI0Pa0ibwOQic5UvrfzFWJSGziafEn1LMFUK57oGw/640?wx_fmt=png)

好了之后们来偏好设置-插件-搜索 looptools 勾选即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx3MacaxY4jicW7yInqBappk4wrcWSG3sdLpjJTEGV5ap4XfE1WgSyhWQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxiagpwia5tTIaPBcajlyzdiaF9SBybQrx9JZ1XiaZJEWwT9s4p0khlXV83w/640?wx_fmt=png)

然后重新回到底部选择刚刚那四个面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxsLwsxKpz454RpDNjnShMgQib01yH3NDppprmlOWYFIObAEQJEN4QvLg/640?wx_fmt=png)

然后右键可以看到多了一栏‘LoopTools'，在其中选择圆环

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxWKCLjsu6xHE7tdXib67jVqRguOxI846elkNzLPYEDreQ8e4tLCZ8Q9Q/640?wx_fmt=png)

原来的两个面分别变成了圆环的均匀分布

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxvVU1ibeey3TIeN0Xdlvc9fMLYib9OybI4NBJibjattm74B8swTwaOg0sw/640?wx_fmt=png)

上面选中好四个面之后，按 G，再按 Z 向下拉一段距离即可，在下图所示位置（链子图标下拉菜单）勾选各自原点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxJ43R6Beib5iaicF5cf5ZNYZnGMPbbeFWNYYNHDc2Du1MvEya01lY1HIQg/640?wx_fmt=png)

按 S，进行缩放（见下图）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx5QibBzibReibics0Yo7LgmMXiaDv1IPLvE5ygDqwOk1DNEdCcuGXILearBA/640?wx_fmt=png)

按 S，再按 Z，再输入 0，这样原来斜着的面变成了平面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxeMYahxmqeYXHFNlcHte10ibkaj61XiaXRCiaGiadJ5hZBNO5qYh2XAde8Q/640?wx_fmt=png)

接下来按 E，延着 Z 轴方向进行挤出

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxtD7btjyRiaibicBvNUmPibQEvdlL89xmUTVqXTmQS4S2jEpyFcMFgk6XMA/640?wx_fmt=png)

挤出一次之后，再次重复挤出几次

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxrjzPiaM1TzmldicfrsPS8ABOgYtmzsCMdT2gzd4kuo5Y1tPUffjjOsfQ/640?wx_fmt=png)

下面是挤出了三次的效果，最后一次挤出尽量短一点的距离

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxpY7RkfnUkZsUObSTon1zXiaoibOAnVgAaWyuhkBE6ic4Da9GkuQbltlNA/640?wx_fmt=png)

然后按 S，进行缩放

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxiaQkMQWZbsribzLQ6WKzDol9CVCtpXb6txxCibpf0kia4Y4PS8uYIN24Xg/640?wx_fmt=png)

按 Tab 进入物体模式，然后按 Ctrl+2，给其一个 2 级表面细分修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxI0ZOEA2mbrEaNGZ5iatOso8p5Q4mcZYVumkUJ21QLE9tbZbVC4PbFdg/640?wx_fmt=png)

右键继续给一个平滑着色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxZMrC2dlJsaZflCPn6ZPBktgWVlP7tPYmfSfhsyeAgicBQDNoawZfazw/640?wx_fmt=png)

但是我们这个磷脂分子的腿太直了，为了我们让它有点弯曲，先按 Tab 进入编辑模式-然后按 2 进行边选择，我们先随便点腿上的一条边，然后在-选择 - 选择循环-循环边进行循环选择（当然也可以直接 Alt + 鼠标左键进行快速循环选择）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxH7NVAibKH9Sy5ibo0mdGzVIiaib62K3HgL73rxYdmvafia29giasRQHrSPRQ/640?wx_fmt=png)

然后 Ctrl+B 将选择的循环边进行倒角，滚动按鼠标滑轮可以进行多一些分段

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxaicMIjzFywu40iaibpzb52eDeyGYbhrGxL0ST8W05XRQGf5CpiaKAPxvrg/640?wx_fmt=png)

同样的方法，大家可以给另一条腿添加一些分段，然后再对某一条边进行循环选择，按 G 键，可以将腿进行移动，从而实现下面的效果，大家可以自由发挥，只要不是特别直的腿就行，太直并不真实

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxbicTgM0R18JwAxWjUUll8GYkasOLP518kFwopxsel2s3E3G3Tgae0GA/640?wx_fmt=png)

将腿的弯曲效果实现之后，我们在编辑模式下按 A 全选模型

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx7rsY8F5We6s3DnlVmPTAibZAwpAQ5cYbD90QibyXUaPPsTaOw04FuyLA/640?wx_fmt=png)

按 Shift+D 进行模型复制，这时候不要确认，按一下右键，这样复制的模型就会与原来的模型重叠

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxGInK5CIibR3kOhQzicLYl017ibLz4NYPHh4vQfcCiavHrI6vTe33jibSpeg/640?wx_fmt=png)

然后我们再按 R, 按 Y（或者 X 根据自己建模的方向来选择），再输入 180，这时候模型就旋转了过来

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxQDvtZwQDuDEFxRRZ7mTTG71Q676jSQox0Jy4sXRDfFLolPvMP8x8ibQ/640?wx_fmt=png)

按 G，再按 Z 将模型向下移动一定距离即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxb2c1TTJIXFaTLNZTPiap43xu9wpkvHqa8jCgxC95l7ciadpmTMlDS2cg/640?wx_fmt=png)

磷脂双分子建模好了，然后我们进入物体模式 (Tab 键），然后 Shift+A 添加一个栅格

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxRNSSz8QaHbjL6KusSBFuvVwSe8RPPG6u2Dhx6t9AQ02pHsiaibPibEGyw/640?wx_fmt=png)

添加完毕之后不要进行确认和其他操作，在左下角的 X/Y 方向细分和尺寸进行设置，我分别设置为了 100，100，10m，大家可以根据自己电脑配置来调整细分，比如也可以设置成 50, 50,10m

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxEvRoqxYJy3bYZqCzoSZTpaqVLYIJbrGgCFKmgKyxkVHFJXicyFEx10Q/640?wx_fmt=png)

选择栅格之后，在右边的’物品属性‘（**也就是黄色的图标，下图标注的位置有点偏移 =。=**）的实例化中选择面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxic5NB1lgibqvic9hwIqmIKTZbZDaS0Q1KTXdYUvUEm8PXice1hRYH9sPag/640?wx_fmt=png)

按住 Shift 将刚刚的磷脂双分子即‘立方体’拖到栅格的子集，可以得到下图效果

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxgicLMW9iaxsOktfoZR5ObibsIAudHdQKej6LxfQLF800w3swpzwy3QZbQ/640?wx_fmt=png)

选择磷脂双分子模型按 S 进行缩小（缩小到很小很小很小），缩放到大致如下图所示效果

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxVcBQibic6kuUq9iag2ZjxcKKZUlRnpnIQxc6JDTFh1iaJbVNH1T47vFPAw/640?wx_fmt=png)

我们可以看到上图栅格会和我们的磷脂双分子有一点点的重叠，我们重新选择栅格，然后在实例化里面把‘显示实例’里面的‘视图’‘渲染’都关掉

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxSewFGDwW7OVZ4fmnfGul9ufoq9G7WQ1v0Pz5ckDAHPphu9JP5G003g/640?wx_fmt=png)

磷脂双分子层建好之后，我们选择栅格，给其添加起伏效果，添加修改器-[[置换修改器]]，然后跟着下图操作即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx55eibaQkfDfYasO9hwsHUFnGZmOvAcAARYJrDMqzTIyEUq2FmlTFxxg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxz3PnqPOg7JmTHrfjeQXom8icfqDYOicCbGaPz3Ox5dpM8NeoEnUGCZ2w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxVibN5LlnPG4lEZia9vHavej6lSH22B9mloAEqcgaPmNE1TXEddvD5C3A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxsLZibnrKiaMibSpIFGLpFfNop8ib8yeXhrSpouKiapJTZvCZDxrEgTlcQwg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxjE8lyPQwpCGRO2KTMRibgH7IZThfbMPwsCZlcu041C2LS52Jy0vjLhw/640?wx_fmt=png)

添加云絮效果，将尺寸调整到自己满意的效果即可，这样我们模型就建好了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxkLdssSmJT4SmcuUI9oGCQibcKw07SJiaGmHGl43QXfnibWc7LAWAlVUhg/640?wx_fmt=png)

**2 材质添加**

**选择我们的磷脂双分子**就是立方体**（不要选择栅格）**，这里注意可以将‘立方体’前面的小眼睛关掉，以防渲染的时候模型重叠，然后再添加材质，随便添加自己喜欢的颜色，新同学可以参考之前材质和渲染的内容[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxBic6FbbyBOmdTghl7MzFW6ZtqxsOibvjuicXiaqUtTtmhThIKYMORfeIiag/640?wx_fmt=png)

按 Z 选择进入材质预览模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxM1nibh5lG3jGbxg3WBqEsJoXlykUK1s8uxx0IFHzCuMrPhicoIueQDlA/640?wx_fmt=png)

**3 渲染设置**

将渲染器设置为 Cycles-GPU 渲染-打开[[降噪]]选项

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxzian27nedWbtclWI1tmM1iaaicFXNVq6QXOOQasCPA1UzuX2WsIHttibicg/640?wx_fmt=png)

将胶片-透明打开，这样没用模型的地方就是透明的

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxS1BXhTcksD6bHyd8frYHNLsr8iaHXlrNZ1a32M3pte6Bdx11YK78iaLQ/640?wx_fmt=png)

Shift+A 添加一个面光源将其放大到合适的位置，亮度调整差不多即可，同样也可以参考之前的文章[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxlB4DpMGkjIPFjMUUUia6Sw2uCfiaeUOwQgOpp9ajLFncsRSsdYhMw1Og/640?wx_fmt=png)

按 Z 进入实时渲染模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzx3ZxMicDAVCwTL0Mibu67Uu9eS8TB2tff20hHbYbBvBNX6U7BUbicKPJzA/640?wx_fmt=png)

发现场景有点暗，可以在下图所示位置打开‘环境光遮蔽 AO’这个算法选项可以让场景更加亮

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxQAm6JF2yGC6X0NOibh6TcrUaib9qGHz6rwqsY0MJ0FvvGYklIcWq5hgg/640?wx_fmt=png)

添加摄像机调整位置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxd13jueWCciaXicx2cs8no2M8k9cvibuVpsa5jvMQ4icia5nBqlLHTy8SPPw/640?wx_fmt=png)

按 F12 进行渲染即可渲染输出，可以自己在 PS 和 PPT 进行后期调整对比度亮度及饱和度，同样可以参考之前的文章[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxH9iaCiaXsoUej4zpehMQojXlGBRCwQia3BrFicETWkX42rMwSKVotGP6aw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxmODbHMVHpOKIamE6FzFLopORg9P3lwVQK4a7K21QPU4hs5MibibbzuEA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8MmibMtldLts5GhK8y0DlDzxOd0jnWeicOqvjzlQ6B7zr9OBHVaJKlnSVQ78LshkdHSiaYKTn08ThIaw/640?wx_fmt=jpeg) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484472&idx=1&sn=f2e9e044dc7b332ff75203cfaa23966d&chksm=cf184fecf86fc6fa4189670bb72cad69d6756aeff94b37a989f2e6fc1ad60d3d5a39959801d2&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484472&idx=1&sn=f2e9e044dc7b332ff75203cfaa23966d&chksm=cf184fecf86fc6fa4189670bb72cad69d6756aeff94b37a989f2e6fc1ad60d3d5a39959801d2&scene=178&cur_album_id=1752875309680377865#rd)
