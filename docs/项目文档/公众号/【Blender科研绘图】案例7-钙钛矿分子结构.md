# 【Blender科研绘图】案例7-钙钛矿分子结构
**0 前沿**

嘿，朋友们。

这期给大家讲解**钙钛矿晶格建模过程**，材质大家可以按自己的风格来选择制作，里面涉及到打光及摄像机的内容都已经讲过，故不再赘述，如果不会的同学，后面我会附上链接

**难度**：⭐⭐⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**Alpha 通道 / 粒子修改器**/Alpha 通道与透射 \*\*\*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTZNTB6U1Tf0Fjnv8IEtF9xD15yfk3KK8E1H415tNribQZYn0RFvDPs6g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT9PECpVr6EgpibV9gfY9TCrbSMrkagm47GcTib5LFrt3DqkRHLBMibrCYA/640?wx_fmt=png)

**VX 答疑群见底部，欢迎和我们分享你制作的效果，也欢迎你加入我们和我们一起用爱发电**

**1 建模过程**

按 A，再按 X 删除所有物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTZSHcsteOnWRcHnn25BvibuqlwEcMaatQKo4RBS3ZGUdAiaUBva5ScvSQ/640?wx_fmt=png)

Shift+A 添加一个默认立方体，不要调整大小

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT4IAdwnlvXqUsUg1iaZ7QM9HA5HDuhkF6PEXdnNBDSQso6PhVCE1QICg/640?wx_fmt=png)

选中立方体，按 Tab 进入编辑模式，然后按数字键 1 进入点选择模式，按 A 选择所有立方体的顶点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTxnqC9gnoS6RTL74YcZCmGIl8cEjs1mLJ7eIjrRXwA2ekpgicq8HOdaw/640?wx_fmt=png)

按 Ctrl+B 拉出来倒角（可以沿着 X 轴方向拉动）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTETlraS9EJC2JvrDWUiaTKib25tKEQMRRssIC72uibnGAcK8G6UA1nEiaeQ/640?wx_fmt=png)

拉成如下图这样差不多

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT8VVnibTMrw7icgiclMHFzWwhGLucGhKKJ6G8yxraoM3hR2BTFEL94rmkA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT0zjQg6e19ib5KtLKuJ2uyUZEGhzRHsWicIH2Sj8n339In0cdia9TJKaeQ/640?wx_fmt=png)

然后按 M，选择按距离合并

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTjj0BWKAq4CvTic7bQZqF9XFA921qPQdTPkibibnpqZnSQD0XXl27y4oJA/640?wx_fmt=png)

将按距离合并的合并距离设置为合适的值（什么算合适的数值呢，就是让离的很近的点合并成一个点即可，具体多少，看自己的模型就好）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT7dEWbibhQ54UsMaXCsAbmiaDBXzPTK147ejdmdicz52SMdLV4hy5KzMlg/640?wx_fmt=png)

合并完成之后，我们便得到了八面体的结构

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTGvsQCtythdFsribiaiaziav9Qs8ODt3RGqAEfo4fgJfIWTPMcibV6Uq88Iw/640?wx_fmt=png)

仍然在编辑模式下，然后按 Alt+Z 进入透视模式，选择下图所标注的两边的点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT6ia1k8UJQd8D8TwJDzXJ0XphqmIL7hz8LLa4uYsIYmZicqjFsVd9mKeA/640?wx_fmt=png)

按 F，可以让这两个点连接起来

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTl9VibqEmPLpjhKeWVZlZbzn4AYLu4r5ATgJl8hCjNQq3BbMpcaic5rUA/640?wx_fmt=png)

然后右键-细分（这么做的目的是为了让这两个连线的中点出现一个新的点，后面大家就知道为什么这么做了）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTlBeqp52BVLV71knRibhZJ5PNicc3UPYWia7TCgS3SRkhxH7RNqKwm771A/640?wx_fmt=png)

然后选择八面体的六个顶点，（最好是按着 Shift，一个一个的加选，不要按 A 全选所有的点，因为这样会把刚刚我们细分出来的点也选上）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTFuHO5BwgxXMaOVbWib3WOYmgs6Fr2ee2GCA5sgbicxIldQqhNrCzE6fA/640?wx_fmt=png)

选择好这些点之后，在下图所示的位置添加一个顶点组，然后将其重命名为‘八面体’，然后选择指定，以后我们想快速选择这六个顶点，就直接在顶点组里点选择即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTSdBCiaorMfS5VcIlgbyvFf79hRicHvGa6kVqvt4CFytV8xryCFrkfsUg/640?wx_fmt=png)

同样的，我们选择好中心点，然后添加一个顶点组，并再次进行指定。

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTp5FFlQicX9iaWPd4Kfk4y5aeM1DBSq3icpibAu3uNuGpvMvzWSkTn9F1fA/640?wx_fmt=png)

好了之后，我们按 Tab 进入物体模式，然后按 Shift+A 添加一个新的默认立方体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTQKl6x3FMMia3FQ58zyuuGpBAb4sy9wQyzqNnPS3EXziaQNpjh20aMajQ/640?wx_fmt=png)

然后按 Alt+Z 可以进入透视视图（再按一次退出），从而可以看到内部结构

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTSkXGxOd6AW9EicXS0wQYa9xIaSUbCUiaibyicugFNn7bFXZVuYWpfZOO3A/640?wx_fmt=png)

然后选择立方体，按下图所示，给立方体添加三个阵列修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTRQQuSJQA5FkEUu1cUdHGMibEkF1v4iaqWvQxgu2P3C0R99ILdt0mVUTw/640?wx_fmt=png)

然后分别按下图来设置，让其在 X 方向，Y 方向，Z 方向进行复制，数量看自己想要几个重复单元，但是越多的话生成的点和面将会很多，大家根据自己的电脑来设置，我这里设置为 2 来给大家演示，这里要注意的是必须将三个阵列修改器的合并勾选，因为阵列复制的时候，相交的地方点和线是重合的，勾选合并可以让重复的点合成为一个，这样减少了点和面，也防止模型出错

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTH10udEs0xD2gr3RhaBicPia2ibxKBdXs6cLcBTj90WOm76TeVg7BibNpHw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibToiauHpFJVVYrGlGYdyc7Pr0W58sy4LPPafmGsSj7tC4ykMtWNvQ2FfA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTR8UmL1aB0uL3MIXiasib6V80urSGK0omGe58aVLdIKmRfR0XTptU066w/640?wx_fmt=png)

阵列修改器设置完成之后，我们想让八面体也使用同样的修改器，该如何操作呢？我们先选中八面体，然后按 Shift 加选复制好的立方体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTI1ic0CeGTvbeNoUZ4YpKT7JbLhNkz23O7h7YVQTibqlYCV2BBF2AeoZg/640?wx_fmt=png)

然后按 Ctrl+L（生成关联项），选择修改器，这样就可以把立方体的修改器同样应用给八面体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTH8ccaJdBrvPnbUkFl6qtLaiaseHPiatdZ2tk0cNGCcPANf03RbGOMpPg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTpr7MbPgBYwiaicMN5MFqvRDsnUDicJTYG2kJicLH6VbibPBVSBHziclr7TLA/640?wx_fmt=png)

然后我们开始制作原子，Shift+A 添加经纬球

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibToVg76wCuxib1PRA3tXe8MyicYhR1Zg0Iu9G1UL6JX697xtoTJpvUuUIQ/640?wx_fmt=png)

按 G 将其拖到一边，平滑着色之后，Shift+D 进行复制成三个球体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTFDT6yz9SqQkDp8awKo7xETMRYAJQYt81kq4zfbgf4hfKBRr747IPLA/640?wx_fmt=png)

这三个球体分别代表钙钛矿结构的三种不同原子，我们在右边分别对其进行重命名以做区分

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTCTrb0OOuk44RnxtUUEbJXNpD0z66YFNO50HKlf4PV5yUoEm0ZSvsFg/640?wx_fmt=png)

按下图所示给正方体添加粒子效果

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT1TylqJ07zOhkGm4M7t2mlNwGnF2uibEjrxqdVhNgBpJQZxic9v0Awy6A/640?wx_fmt=png)

选择毛发

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTibMRuF9vF9FfXQAI9LoMOWkhorxKL2N5sSZdYvZ6Zc9pibgwFrhyfEibA/640?wx_fmt=png)

按下图进行设置，将发射源设置为顶点，勾选‘使用修改器堆栈’，取消‘随机顺序’，在渲染中将渲染物体设置为‘物体’，物体设置为‘骨架原子’（骨架原子是我自己的名字，其实也就是刚刚复制出来的球体）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTRic7twbQjHcGSs3Mmlqzxhhzg9xap9zEwCiauqgrPjs3T9QNq09A1fTw/640?wx_fmt=png)

下面将其‘渲染’和‘视图显示’中的显示发射体关掉，这样就出来骨架了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTvGNvjbMcK7juhQKEq080XzDfQcZnia9vffINOBIFlnmqwBJbhIzKqwg/640?wx_fmt=png)

然后选择八面体，同样的添加粒子设置，选择毛发

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTZwwJ2WH5fVmSjd7LMkHk8XB87f6qIAD60pvkODqX8FZnoXImheUKhA/640?wx_fmt=png)

设置见下图，可以看到除了最后选择的实例物体不一样，其他基本大同小异，不过这里**不需要**取消勾选‘显示发射体’（发射体就是我们选择的正八面体和正方体框架）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTaFPPdHHSgpOt6cXE3Gl27c2t9E4uRy9LeM9p6GzE6jwyianGe7Ne0rA/640?wx_fmt=png)

效果如下图所示

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTJFSl3PonaIJ1nwyfFBRMulAtxGX5dhq8zfCicrLLIzRiaiblaOSbYvKgw/640?wx_fmt=png)

然后继续选择八面体，在其顶点组-密度中选择‘八面体’，这就是最初我们设置的那些点，意思就是让‘八面体原子’复制到八面体的顶点位置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTpTVdzD6icWojfLKr5n2XicJ4spON7D41ZwOI8UZEW0w6H89WSAGb0cTA/640?wx_fmt=png)

我们给八面体的边缘顶点设置了小球，我们要继续给八面体的中心添加小球，那么我们选择八面体，然后按下图添加另外一个粒子设置即可，还是选择毛发，设置也还是一样，只不过物体选项要选择‘中心原子’（‘中心原子’‘八面体原子’‘骨架原子’其实就是不同的经纬球，这是为了方便之后上色所以才需要赋予不同的原子）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTE3SVYpUxVQEqMahfBkdKP282AJDMm82A4OSiauwGyxAkABg2ZbIFkdQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTn4grxzQx89GSkGmXuIvK6diaO2eh23h51wnoWyegH6VoqE5ffZD7WRA/640?wx_fmt=png)

下面我们的模型其实就已经完成了，然后开始赋予材质

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTyRqI15DtlibqicDia4JWe1jWMlkeibDvnNZPQIk9KPjxPmk6xV78YaIHTw/640?wx_fmt=png)

**2 材质添加**

按 Z 进入材质预览模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTQkjJFZVf9wGALic8tFBxoBdVic0ESpQ6gFAFVrN3REib3pvibg6PibMF9YQ/640?wx_fmt=png)

选择‘骨架原子’按下图给其添加绿色材质（**大家可以选择自己想要的任何颜色）**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTrylAT3ibNxuib7QDZiaDcsor3zhCm1vr0a5zgzQZdER4gURbibsLCI5wZg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTwK8yBNYaN0xibziaY2J0WiariaaibMO5MZ0spiaZ53X0QsV3uibvzdySo1Uog/640?wx_fmt=png)

然后选择八面体，对其基础色进行修改，将粗糙度设置为 0，这样其表面就成了镜面光滑了，然后将透射设置为 1，这样光就可以穿过并且有折射效果，将 Alpha 设置为下图所示，Alpha 表示的是透明度，我这里设置为 0.75。这里要注意，透射和 Alpha 不太一样，透射的参数可以控制光透过并使材质的折射发生改变，而 Alpha 仅仅是改变透明度，这里大家可以选择自己觉得合适的效果

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTI00qSb3hFkrQq2740Oe4fKXHrjria1RmOREXC9eCqibT1Zx1hPct7wwg/640?wx_fmt=png)

后面的这个设置‘Alpha 混合的意思就将透射和 Alpha 的效果叠加在一起，可以参考我下图的设置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTf2MqlIAqtdu20snQY93uA4XsT3sfy4neGuWicY2yJdZQlACYib29HRZg/640?wx_fmt=png)

然后再给八面体原子和中心原子分别选择一个颜色即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTkUd29mxy7185EvktsUE2ua2kcc1yhQtBUqhgSje1ql7erPbiaru8UKg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTGa8OibF2JPgKzGAqU3IRDhgM3F35kmt8unblAibJHywOdgBM9BEuLMEw/640?wx_fmt=png)

模型到这里就完成了，后面是关于渲染设置。这一节核心内容就已经结束了，会渲染的同学无需继续阅读

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTRwoOE4HVNEW5h5GTtf0azCiau5pLZLNq2yYYEdsibo0GibrYFBWcBVpoA/640?wx_fmt=png)

**3 渲染设置**

首先设置一个台面，这个台面如何建模请参考之前的推送（十分简单，新同学请查看一下之前的内容）

**打光，背景，相机设置都可以去参考【Blender 科研绘图】案例 4 - 纳米阵列[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT1QG6K92rkTknWjrtOZm6j7k7Uy08nfFcWOrrdGECf2iadibV8Hbjpatw/640?wx_fmt=png)

灯光也是如此，请查看之前的灯光设置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTUY0K6G54BuXdf9vk9Vhayl6Ykm8quMDlJFq4caJnPuwJyHQISN7nag/640?wx_fmt=png)

相机设置请参考

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTOMplufAwXK4AaNhQozsDLuClqT9RX0DW8DU73aqF6K0Y1JiaGFOd2og/640?wx_fmt=png)

渲染器按下图设置，选择 Cycles-GPU 计算（没用独立显卡的按 CPU 计算也可以），勾选图片降噪

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTdAM8hFJ1icNEVcprZuQbJhbiaqPDIlc3tRQ8bucHDNdxyK44mkUFjJww/640?wx_fmt=png)

然后按 F12 进行渲染，发现这个玻璃的折射特别乱

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTYPjscJlBAzByibpbbpnb0rUoVrVC9e4Zay4AuS9s21lFMIWWL5mMlqg/640?wx_fmt=png)

所以我选择了八面体，然后将其材质中的透射设置为了 0，这样只有 Alpha 效果改变其透明度，然后再次按 F12 进行渲染，效果如下图，但是图片有点灰暗，可以将图片保存到 PS 或者 PS 中调整色阶，对比度和亮度（这个大家自己调，也可以参考值之前的文章）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT4ibdLsSXKR5gnkiahibXCH0a0RQFEdrckvyn3bGhxr3KvD98wzWkzLnEA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTZNTB6U1Tf0Fjnv8IEtF9xD15yfk3KK8E1H415tNribQZYn0RFvDPs6g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibTkVhdDo2IiagYfkQs9vcvfV7QJbvRCWRJYQyDgAia1eX1yduibHORnuZ7w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PgFZfZoLEHSI415fDI1zibT9PECpVr6EgpibV9gfY9TCrbSMrkagm47GcTib5LFrt3DqkRHLBMibrCYA/640?wx_fmt=png) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484416&idx=1&sn=6fe2c2d3a692fda811b8a18e8be24998&chksm=cf184fd4f86fc6c26356b02f28591d1dc192def53c96b5309f2415b0c5e7ef0479c4bdfaa566&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484416&idx=1&sn=6fe2c2d3a692fda811b8a18e8be24998&chksm=cf184fd4f86fc6c26356b02f28591d1dc192def53c96b5309f2415b0c5e7ef0479c4bdfaa566&scene=178&cur_album_id=1752875309680377865#rd)
