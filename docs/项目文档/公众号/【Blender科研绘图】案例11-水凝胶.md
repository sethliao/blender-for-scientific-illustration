# 【Blender科研绘图】案例11-水凝胶
**0 前沿**

嘿，朋友们。

这期给大家讲解**水凝胶**的制作过程

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4qUlGgtmVObaoMlLbJs5BTKd4gQolI5Nu221dHibJZxfYKPpdLPhlLPA/640?wx_fmt=png)

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**[[置换修改器]] / [[发光材质]]**/ [[实体化]] \*\*\*\*

同时欢迎关注我们的科研知识分享公众号：萤火科研  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q2zvpBO9wBvnWTAdd1Xx2l1TfJ0nE4MqfezjtW5W0h2Jdf9fCiaDZWdg/640?wx_fmt=png)

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

**1 建模过程**

我们使用的 Blender 最新版本 2.92(以后我们的教程会坚持使用最新版本的 Blender)

首先我们新建好一个文档，按 A 选择所有物体，然后按 X 快捷键进行删除

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ZLkDysKwhVicNbLyQ7pGjvzTfUhQKRIhibZXk0p7UXiaJXxzVibdxiar2DQ/640?wx_fmt=png)

Shift+A 添加一个平面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4VtBdY0gRNJ4kAXEamTaic2WEokiapUTx33QMR2Yu5I6zFgmrgc02e90g/640?wx_fmt=png)

按 Tab 进入编辑模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4UxuUDGb57iaicCvL7eoAo1ickw3ycamPCbrR2o8ObiaNcPywQ9wV4HdcmA/640?wx_fmt=png)

右键-细分

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4rict1W3chSIiaJlk8VMyJZA60ibgEsSYv3lDuq0P6MyFicw3NvSDianDnUQ/640?wx_fmt=png)

切割次数设置为 20

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd47R0DI3EwncuaA1Fh2kaBtia6Apiar6jctuESq6J4JgnawxibicbhVRIeZw/640?wx_fmt=png)

第一次细分之后，再次右键-细分一次即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4TiaOcvzvd3xc5xnPAMkOlO1CiaURk9u3X3HVHcM7wkUCfOFvRHVPUY7w/640?wx_fmt=png)

按 A 全选，按 S，按 X 进行缩放，缩放多少看自己顺眼即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4LlJXs9guZ8IJ8L2icn9XxNPiciaib8ObjjnZNH7t5W1YMRljDdAFCCIVMA/640?wx_fmt=png)

选择平面-添加一个[[置换修改器]]

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4JTZggfQb2RyYdcHRcia1PwNVKgOB7o1AmQlqdf1hWz5UOHluHib1D25A/640?wx_fmt=png)

点击新建

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4mCS0wo3tPZlibj5RCzGbqdVwEnE6I6lfjHs8gCrYhuSciag3yiaMljckA/640?wx_fmt=png)

按下图点击

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ZZTVnGBcsnmRZRD5haaWhibw5tUkqRNH0PpcUA1UvJI0IuRJUFNpptg/640?wx_fmt=png)

选择云絮

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd44oDGpHIB3IUksW6KzWoibYVWtqTrpJic3gefSfAYRSyBG8qCjMtRXldg/640?wx_fmt=png)

可以将尺寸设置为 2.00，这个可以自己来调整，但是不建议调的太小或者太大

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4Nx1Zict9hJqOQ5HviaNm0eExwXj6lDRqGUfcNDKJYXKZGJcbcRNXFwnw/640?wx_fmt=png)

设置好这里之后，再次到修改器选项，将[[置换修改器]]的强度 / 力度设置为 0.6，这个也可以自己进行设置，同样不要太大或者太小

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4WpLrnRKoh1Nia05Gf2Z0TDibBvMtHTESOtpVhF3qmxmtJHEV4wGXZRTQ/640?wx_fmt=png)

同时再次给平面添加一个实体化修改器-将设置厚度设置为 0.4 m

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4mqLmdkuuzOo8lqJtUWGicfBae81swibdLhMlyC4MDXBrmVicVle9mdj2A/640?wx_fmt=png)

按 Tab 进入物体模式，右键-平滑着色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ltPric7pFVKhyia8hibZNRnIITxFubedgeBNSLylqZlicLSJG2c6qGY1EA/640?wx_fmt=png)

同时按下图在下面选择自动光滑，这时候我们波动的水凝胶模型已经完成

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ZPyFDBWqF4YERpHviaj8Qlzic7licuDyIxKJewhjV46icFFSW03kvibKuPA/640?wx_fmt=png)

Shift+A 再次添加一个经纬球，按 S 将经纬球缩小，同样自己看着顺眼即可，**这时候可以 Shift+D 可以将小球复制，或者可以按下图制作方法，使用[[阵列修改器]]可以建模出阵列**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4BibEtqxlQVhK3Liafxh4daXsOtkYyouGfGIvpyEsTRPJmfcEoC7laXgw/640?wx_fmt=png)

这里第一个阵列修改器设置如右图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4JLYrstL2u7Ticukrod6jnvMuOX0iaGlianuVib9o93c6S3HwZ0YZAGdGwg/640?wx_fmt=png)

第二个阵列修改器设置见下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4bahDeG7Jn3fbzYcK3U6UEjyOUuwb1LJFichpbC6gVZQFRqwBBTSjGYg/640?wx_fmt=png)

**2 渲染设置**

渲染引擎设置为 Cycles-GPU 渲染-打开[[降噪]]选项[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4EPCiaKu54RFt4aH1ZP3VGPeaOBNXMz4FY0C5QR9kgcBqk4rWZTW3r1g/640?wx_fmt=png)

这里将透明打开，可以实现无背景渲染

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4spFASe7wLqvqts7KHEekpH8Mx0fJDXRTRtMzI56J2AmEwq1fAbHkmg/640?wx_fmt=png)

设置环境纹理，在下图选择颜色的小黄点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd483eUrKXtk8ghBGMLnMWjv5IGBs5eckLvQA7wVt9WO82oBAqsARsZFw/640?wx_fmt=png)

点击环境纹理

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4DKksGJrrIY9Xjg4EYZSUCwUsZxHoibVT9bxQND9bGXnLQ9E0EILFAOQ/640?wx_fmt=png)

打开 Blender 默认 HDR 库，选择下图所示的 HDR 贴图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4dg7kgnzJVNw2DVJurp1W2W5EC9Ah1uG83YyxQ0I5SSwtGbiaeCql2zA/640?wx_fmt=png)

按 Z-进入材质预览模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd46U3oBChia0PCvXQCpGQWIXCHDFnfiaZ12zCib9FGHpUPObAk3ouD5FsPA/640?wx_fmt=png)

**3 材质添加**

给平面水凝胶添加材质，材质设置见下图，材质添加教程新朋友可以看[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4lAGe1BPQjUAG82LMcXFQGWqm4cajRibZicxfRlB79u2rBGkFQrZXrhvw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd45XNA2PmZm7oWdNj3b0X45Cic9icvshtsZyDwAzic7g5tyMNqNicxA4EWtw/640?wx_fmt=png)

同时给水凝胶中的小球添加材质，颜色只需打开自发光即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4sny5L7UZqOVP6TcflvumEWEO5rxd2vHFCCgP3Iwxw8ibogUo8o7Nxxw/640?wx_fmt=png)

添加一个面光源，光源方向见下图，如果有新的小伙伴可参考之前

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4jyA8S3lAoflQ4a6D3l6cvJ3pnzru4d2EMFIZ1HvfoibD6BOeveR8ftQ/640?wx_fmt=png)

光源能量设置为 500 或者 1000W

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4SrpJVKmp0MELlyUJbBZYuFUia6ZUiafHvJPQSMdKUsxz1A5nLhPXIibjA/640?wx_fmt=png)

Shift+A 添加摄像机，调整角度按 F12 添加进行渲染即可，新朋友可以参考摄像机设置[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8OkfOP8pCztVjyLrUMw8Gd4ib19GticUwoIObBDicdmfiazgibLLWNXfJMC6rKbK1kCLUvqcZygUEiacFGQ/640?wx_fmt=png) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484619&idx=1&sn=f0dbfef4be1f578d91a0f1e7370a56e5&chksm=cf184f1ff86fc609baf990f49f201117d16e46d8ef32233523d70f19ec2fc3482f110b68c0d5&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484619&idx=1&sn=f0dbfef4be1f578d91a0f1e7370a56e5&chksm=cf184f1ff86fc609baf990f49f201117d16e46d8ef32233523d70f19ec2fc3482f110b68c0d5&scene=178&cur_album_id=1752875309680377865#rd)
