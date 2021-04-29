# 【Blender科研绘图】案例12-多孔结构
**0 前沿**

嘿，朋友们。

这期给大家讲解**[[多孔结构]]**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4HqHWv5w7PAFEaEZuicpNUqicqmaGQ4UXgh0ISibklybxQBdHDBKNWPA1g/640?wx_fmt=png)

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**[[阵列修改器]] / [[重建网格]]**/ [[焊接]] \*\*\*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q2zvpBO9wBvnWTAdd1Xx2l1TfJ0nE4MqfezjtW5W0h2Jdf9fCiaDZWdg/640?wx_fmt=png)

同时欢迎关注我们的科研知识分享公众号：萤火科研  

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

原创 idea 有**FX 创新实验室**提供，视频版请参考：

[https://www.bilibili.com/video/BV1Tv411B7oj?p=2](https://www.bilibili.com/video/BV1Tv411B7oj?p=2)

**1 建模过程**

A 全选，删除所有物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4JE6UA2JcFGb9V2rNqxRRmdbQXfrcsyibGWSQS2fWiaOCzzBCOvkkibx0Q/640?wx_fmt=png)

Shift+A 添加一个立方体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4TM8xfNnPXStMsg6YXp4JICgWBxD9FWRuF0zxF9lotHCLNepAI6roXQ/640?wx_fmt=png)

接下来给这个立方体，添加**三个[[阵列修改器]]**，这三个修改器分别让其在 X，Y，Z 方向进行复制 10 个，这三个阵列修改器的设置见下图，第一个阵列修改器的相对偏移，系数 X 设置为 1.00

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4rwDzF4DZ9qgDnicQ1sflMmlpDicOtyD07PibCOFCdqAgToQOic9ssUuDUA/640?wx_fmt=png)

第二个阵列修改器，其相对偏移 Y 设置为 1.00

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4icG753vNKrGe8amYBicysxLhYzRthZTwBiceGDeShdKJO2Us0QejXj7Ig/640?wx_fmt=png)

第三个阵列修改器 Z 设置为 1.0

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ghQcJ3d4eYmBeebkpFWQsq1ak8SEbMcmuJjeFFAYdsx4QF5wWialFmA/640?wx_fmt=png)

这时候这个大立方体有 10X10X10 的小立方体组成

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4CyAtTUbpkNCQy2icv127KKlsM9x79MRrbtTbDMokJBQF4K5GmUGVMOQ/640?wx_fmt=png)

分别将三个阵列修改器进行应用，注意这里一定要在物体模式（如果有一些小伙伴发现自己无法应用可能是在编辑模式，按 Tab 就可以来回切换）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4Jx1FlD5LTwCAoEwicxy5uLLFJMdPeqMrJYsAV2FlnryJhhCokqZkC6g/640?wx_fmt=png)

**将三个小立方体应用之后**，我们按 Tab 进入编辑模式，按 A 进行全选

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ic6olw9MPGPeLLTIGyKY5x2pyGXm0OgRAACsmWQJ5yF8vIO9AWFWMwg/640?wx_fmt=png)

在左下角的紫色图标，找到随机选项

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4vjaSLHeo7hPHtHt5CwxbkoC5oAlXzFG6UtdjvCfz0FTGfyO92HaAiag/640?wx_fmt=png)

点了随机选项，会出现这个小黄点，点击并拖动它

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4jCcqeulsddHRwZk7iaiaqJkyAbJqsejH5hibMia9GXu2ywpylEaMob5nuw/640?wx_fmt=png)

具体拖动多少可以自己把握，我这里将这个距离拖动了 1.25 m，随即种子设置为 20

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4h81GIX94MT1RiciaIfxEPwC0gulglafOibPEOddBjuVOclZFkYoR78CkQ/640?wx_fmt=png)

按 X，进行删除，点击仅面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4lSofL52eU1MPpkO0Dibztd1LQDaxGI6R5dtxMVNp7tHKnTsqAr4hqjw/640?wx_fmt=png)

给这个删除面之后的模型添加一个**[[焊接修改器]]**，让一些重复的点进行合并

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4y3vZZQqd0mXYmZUOlAdnnia0LrNxWJKc1WO4oDcianVYSZM84fChpwZQ/640?wx_fmt=png)

焊接修改器可以参考下面设置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4Dc3zic7ddL94dmDpTibfaROnaicWCVWibC1Eol7XWnZOzupgBL9Q2utLyg/640?wx_fmt=png)

在物体模式下，物体-转换到-曲线

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4K4WgK6EN2iaCQH23TdRG9OTPYZeJ1OFZGc1Diac5OQ0wAPa0xkxBNlRg/640?wx_fmt=png)

在右侧菜单栏，几何数据-倒角-将深度设置为 0.25 m, 同时将分辨率设置为 1 

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4HfkeiarAcstAvzpcrFPBXQ3bFjJ6ias6f3MPGTYM6ibX5NHw5KJTFV75w/640?wx_fmt=png)

再次，在物体模式下，物体-转换到-网格

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ZaFSaDh4UOjibHrKyTO8RJH2br6d45Ic3EpGTprp5xpibeUicM8PzfAeQ/640?wx_fmt=png)

[[重建网格]]-体素大小 建议设置为 0.3，太小可能会很卡，**这里计算量比较大，可能要等一会**，勾选平滑法向之后，**再点击体素重构**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ibvsicHgW1yzo3ic2NnWRZFZneruicUwfUZvANaKFk9UicPlMM3ld3lMtzg/640?wx_fmt=png)

便可以得到下面模型

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd47Q5Xmic5oHxoOaXCeSgG7WXnJ5eYstsEV2fofXvzWC2cVjc5X7lAicTQ/640?wx_fmt=png)

最后再次添加一个**[[平滑修改器]]**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4K2AG2eRLrbrlHic9ee07gmnFRI3qLo8IYGsmWLcmvibM4fcl5p1sAThA/640?wx_fmt=png)

[[平滑修改器]]将重复设置为 5

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ez1l6cfEJYYILGxJGIrDGBXqZGcJVWvoyAawPLDGaC2TmXWLLibE6Bg/640?wx_fmt=png)

**2 材质添加**

材质添加可以参考，颜色大家可以自己选择，其余的金属度、高光及糙度可以参考下图，不会添加材质的可以参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4iboaThuuZg7LOmB3J5libjHA2MSkZwffiaB9MF6W3xmo5sB9XbiaicYjDmQ/640?wx_fmt=png)

**3 渲染设置**

渲染设置为 Cycles-GPU 计算，打开[[降噪]]选项

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4VKotQHOOm6z94uqZP9nKM54YCx6cibdlUr0ulmSIib8eYKeiaOYwZdR4Q/640?wx_fmt=png)

设置打开透明，进行无背渲染

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd47zich7DeLcfznWOIW32lGCdX8U0nY1icISrAxZqVIU3D7pM5dX5yV9vg/640?wx_fmt=png)

关闭场景世界选项

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4f4mFqM9hgNiaUywnnaia0Y3qeIcDs019qDK3YNby9pehvqAN8WLEEjibA/640?wx_fmt=png)

选择里面的小黄点选择环境纹理

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4iack8GmeRqRiaY0HmWDRScSoQKBASSJpRkl5SK2Ozia53wKY22q4FIQ8g/640?wx_fmt=png)

打开一个 HDR 贴图，这个 HDR 贴图是 Blender 自带的，路径见下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4vQTdQNVa16nNYUqGGTPU8raxs6mONjvv6a0LjJXr22GjPpiaJozqibdA/640?wx_fmt=png)

Shift+A 添加一个相机，调整角度即可，不会设置相机的同学可以参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4bia5rVVGkfmJDE1Ea8oicFCuNDmd0KM2cjibUU9UeVvLibQ6vMwHFe0r5g/640?wx_fmt=png)

按 F12 进行渲染导出即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4Ck6JFQzx0vFibtUGgvMGk0D5gZJAWFJT0ia4e18Gv4KA1zEZ9N7umpdA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4HqHWv5w7PAFEaEZuicpNUqicqmaGQ4UXgh0ISibklybxQBdHDBKNWPA1g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4p0d8cNL3dlBJ0icoXoCNxWQR9bsrkV8icjWljTzMia8S5y72hxibUH7JpA/640?wx_fmt=jpeg) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484654&idx=1&sn=d08cbea9a2b963a5d15c8036f84b43f6&chksm=cf184f3af86fc62c2804f596cf1c02f69bc03eb7bb8ffd7d26b4233ee0c27e1fc47061d1908c&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484654&idx=1&sn=d08cbea9a2b963a5d15c8036f84b43f6&chksm=cf184f3af86fc62c2804f596cf1c02f69bc03eb7bb8ffd7d26b4233ee0c27e1fc47061d1908c&scene=178&cur_album_id=1752875309680377865#rd)
