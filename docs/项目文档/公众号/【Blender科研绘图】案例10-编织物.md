## 0 前沿

嘿，朋友们。

这期给大家讲解**编织物**建模及材质添加过程

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFO4ibxeo4FQxibLWCK16ESba8sWubpIT2nWNHlvJ7jLIhcxBGtqRRY7QA/640?wx_fmt=png)

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**阵列修改器/焊接**/螺旋修改器******/贝塞尔曲线**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q2zvpBO9wBvnWTAdd1Xx2l1TfJ0nE4MqfezjtW5W0h2Jdf9fCiaDZWdg/640?wx_fmt=png)

**我们的账号将专注于制作Blender科研绘图**，同时欢迎关注我们的科研知识分享公众号：萤火科研  

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

**1 建模过程**

A全选模型，按X进行删除

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFLxFIgoyfic91oqk6FjyfzlTjibbLoNkHXeCK55fJuXcb6KlOclZmPgAg/640?wx_fmt=png)

Shift+A添加一个圆环

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFzuceEWsabpRdDHGeZAS7KHtsNpBb6IPpibbDhO2eWoDedBkjhs8KkQw/640?wx_fmt=png)

将圆环的顶点设置为16

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFNrtc0anjiaWnicY0UobNjAxiaZtsCMxia8PX9s6fzFdotIubQichKTJDNIQ/640?wx_fmt=png)

按G，按X将圆环沿着X轴进行移动一定距离

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFMauticVBxyEYJTDzic7Ra0ns4ld6viaqibmtrtAicSUwBt0qvxpxFL35Guw/640?wx_fmt=png)

给圆环添加一个阵列修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFyJxuIZdgapMKhVKomqkaib57KqQ147IUm7perZCuiaiagG8C9iaK8TqpicA/640?wx_fmt=png)

取消勾选‘相对偏移’，勾选‘物体偏移’

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFgL2xAS59UbZwl2tiaGa9OT4EY252iaFicWaPqJ7LAwUq0DlQxAeicn4e8Q/640?wx_fmt=png)

这时候Shift+A添加一个空物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFN6N40PEQZs0h0V8lib2YGuZw3pFria4E56ZDDLWtscLibvBIBgzPWcWGg/640?wx_fmt=png)

按R，按Z，输入90，将空物体绕着Z轴旋转90°（必须要旋转，不然后面可能会出错）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFteE03vQHgeM6WhSpYpEFTvaxIra0WyTsEAlib789lgnTcKBq9Dnl1SA/640?wx_fmt=png)

这时候选中圆环

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFsrIJ6x32B2ZzaIATQ1s60jtrkMUrnAzgpYVUDD6Xaw8vgQ1cP5rMOQ/640?wx_fmt=png)

右键\-设置原点\-原点->3D游标（这一步也是很关键的一步，不然后面阵列出来的模型将出现错误）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFjc2xKNaGjb9pHzcNeGWdGPEddqLUYmdMTdsYQsmqQic3yXiamwbLHAXw/640?wx_fmt=png)

这时候回到修改器面板，在物体偏移中选择空物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFclGsHFwxwDetOWrsheGhcGn9CgYlqc3uVQ9pJUzLannsAcBwWD0nWQ/640?wx_fmt=png)

同时数量设置为4，效果如下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFNQrDdkJmQYibLmwqOtDeUQIATKy7kOhljuSL3bAvuqgfx2ic9ee3faAg/640?wx_fmt=png)

按Tab进入编辑模式，按A全选圆环

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFzPibpM2yHGHKia7EVR6krgYrwErpuibWjtk5Igl72nghk8nuxFNKgntUw/640?wx_fmt=png)

按G，按X将圆环沿着X轴进行移动，可以看到下面情景，到两两圆相切即可（具体离的近一点就好，具体多少自己可以把握）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFes1EW8ibbBPUo4YicAaAaxjICrbHgvIDeIzia2u5icvXFGxXw626AQIpQg/640?wx_fmt=png)

按Tab进入物体模式，添加一个螺旋修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFFelCB3fsSVEItFHmibzq0eUXR91AzaheXicr7nIib3mviaKhDQqFh0p8hw/640?wx_fmt=png)

螺旋设置为12 m

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFekiaC1yQ0hPhmeUU3FLGNsbaGB6ltxQKOvSKhWwvgHNHyVib0A4KolpQ/640?wx_fmt=png)

按A全选圆环和空物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFSqicThXaocK19mM1d5kOmzDfOdRzLKGWeAricge4odUEibCWs2KoZYDDw/640?wx_fmt=png)

按R，按Y将整体绕着Y轴旋转90度

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFP3QWuibFfKEJZia0oL7cmNyaLmXPBqAA3ibeC2E1h6NCS9FYnicEOOEMSw/640?wx_fmt=png)

按S，将模型缩小为0.167倍（就是原来的1/6）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFTibANwlKVoXib9qp3KmbW5jKutxF7QldtqHM7hJh2KBzgicZKc8Xicvyzw/640?wx_fmt=png)

**按A全选模型和空物体,一定要全选模型和空物体再进行应用**，然后再Ctrl+A 应用缩放

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUF2eBvvh4Y9lOcp00TsicATozyAELhesmGzxQFmO5NZxTBnrIZLIs6Phw/640?wx_fmt=png)

这时候发现模型变长了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFTH2TPSegt3fEq9C3hWSA8tlqngGPnQPdmVkPUkXGETDSfzwmWzwcPw/640?wx_fmt=png)

只需要将螺旋里面的12m改成2m就好

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFLNEHJKJf1D0LvLTPZkPkwLKcgqlTnuuZ4pK6VFg45SbDqPzqVOvgBw/640?wx_fmt=png)

再次添加一个阵列修改器**（注意这个案例会需要很多个阵列修改器，大家注意每个修改器的名字别弄混），将相对偏移设置为下图**  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFABUlLxgsT95IjmfV3icIFQxPl2l7g2NGHCx0F22hKf1EwWHEkNvw9xg/640?wx_fmt=png)

上图好了之后发现两个模型之间有明显的断裂，我们只需要添加一个焊接修改器就好

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFVdPrseJXdn3v3JYZLgbKibL4FFLVWGRWseibfcT2SFVtx46SWGo7TSkQ/640?wx_fmt=png)

好了之后将我们的这个大麻花模型在右上角点一下眼睛图标将模型进行隐藏

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFibOuQScVyhN9ZUNYO43YROYCNfPYB9lae5TURHnGnPj2AibnN0RfHccA/640?wx_fmt=png)

Shift+A添加一个贝塞尔曲线

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFrJnGuicZDjnhRPlx0ceBW0Qs4qgEuQNo1jia9EGJsaJvhvCPibJTVAasg/640?wx_fmt=png)

按Tab进入编辑模式，可以看到这个贝塞尔曲线，框选左边的点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFbxLGmncFO9BuDiczicyhjUeIZzEnU3y3n0Rf4FNClQibDHUfmOJKZHaFQ/640?wx_fmt=png)

按R，按Z，输入\-45将左边点的切线与X轴重合，这样整个贝塞尔曲线将完全与X轴平行

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFpukSHQuowOsG6PnHeyic6UHwKqoN7C0ibzP0yyZDOh55AMyDefxovSeA/640?wx_fmt=png)

这时候再选择右侧的点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFebNVSQkZ5SJLiczgqRuvBm63YP4ggoJicuRJicsGB1Klg4PHbXTTBdNeg/640?wx_fmt=png)

按E，按X，将此点沿着X轴进行挤出，这时候注意左下角有个移动X距离，我们输入2m即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFfRAUfRqh8Z2ROWoxJ2ozwZlCSdABemVIEML9ILDYHOkTrZDr6hy3lg/640?wx_fmt=png)

然后按Shift+R可以不断重复这个操作，案例来说重复多少个点都是可以的，我建议在10以上，但是也不要太多，否则可能导致卡顿，我这里设置的是14个点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUF3CG6RvBPqiaNLWkGU6uMoxDABCpXN0F31Gy6MMsWFwhBPRnce6vGKYQ/640?wx_fmt=png)

将14个点搞好之后，从左侧开始，隔着一个点选一个

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFJlFBEwicibFD1WPULp2RWboCrPI7ICfPMeSRicxnxriahNKlZShIiag6LOg/640?wx_fmt=png)

按G，按Z，将这些点沿着Z轴进行移动，从而得到下面的类似正弦的曲线，移动距离即高度建议设置为2 m。然后我们继续添加一个曲线修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFpIgPQHhdQmyMwW6mib9JNPHRodZicyaqYubwyEC4mSBEL2CZul1Y77tQ/640?wx_fmt=png)

在曲线修改器\-曲线物体\-贝塞尔曲线

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUF1JbLVdVp7DS0PkVjX9mS97zXx8u2YedO3q3llWRJws45XJAGV1A5rg/640?wx_fmt=png)

这时候注意我们回到之前的第三个修改器，即阵列修改器.001，可以看下图，在里面将适配类型修改为适配曲线，曲线选择为贝塞尔曲线即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFl8icZujecR3QwuaeLjIvIcsbzAj7c6EQoFnffhiaudiaH8B56lZ4zeWXg/640?wx_fmt=png)

下一步继续给模型添加一个阵列修改器，设置参考下图，我们使用恒定偏移，Y和Z均设置为2 m，数量选择2

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFbDck69AyyJiaibpia8ic9JlqVMYxYjY3SkMrAYwpapMk31RibhiaDDicGKhkA/640?wx_fmt=png)

添加好之后，我们继续添加阵列修改器，这里选择恒定偏移，Y的距离设置为4 m，数量选择为7

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUF39QcH2prlSa6bM5xZAMZz5nGrz7yRHzEfaWkzkQ6bd0iaIxNtEsa8wQ/640?wx_fmt=png)

效果如下图，然后还有最后一步

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFWoJdmsFTZY9DUia5PDmfHhWiaCqgB75ZuRHunXN17HEJQvUIPqOgAM8A/640?wx_fmt=png)

按A全选模型和空物体已经贝塞尔曲线，Shift+D进行复制，然后右键取消移动**（这时候复制出来的模型发生了重合）**，再继续按R，按Z，输入90，效果如下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFOib9Qy5McT2kjfDrtJAAicGnP3w6t9culhib3bPCQlRXVUHiaQ83omnJYw/640?wx_fmt=png)

按G，按X将复制出来的沿着X轴进行移动，具体距离自己观察，效果如下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFnHn58na1dCr3KowYD8JjcKdavN0wUqoTefPkeibNjgyiaTZakhdoFGJg/640?wx_fmt=png)

**2 材质添加**

选择织物添加一个新的材质，这里颜色建议设置为下图，同时提高粗糙度，降低高光。给两部分均选择这一个材质，材质和摄像机以及渲染如果有新入门的小伙伴不熟悉请参考[【Blender科研绘图】案例4-纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFoQ3fhTWjFSPJu1enuaweJOothQwicBHjtpGsgGRicU7xu8f4JXyiaM8Pg/640?wx_fmt=png)

**3 渲染设置**

渲染设置，选择Cycles，GPU渲染，打开降噪选项，在胶片里面选择透明。同样新手可以参考之前的[【Blender科研绘图】案例4-纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFAXmF4W2KxYfKA4KzpxkUia2yZteMfibA7S69qrkcWoFNibrhyyxzLypPA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFeRDWh8wNBibC6q7kJIACUP6UC9tIgPjXQM1IdNXPic3MtMRknyNIaRfA/640?wx_fmt=png)

然后打开环境光遮蔽，可以让画面更亮

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFm2VUuxobmribIIa8foqufia46cicx9m0LRAHk7bCzxqzn8Wc9DXIpzicBQ/640?wx_fmt=png)

按下图将场景世界取消勾选

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFgG3w1ANhyIIZk79gJ92cjzdnx32EcKuW8ZLEJt40ibT0IWDs6ZpH8Dw/640?wx_fmt=png)

设置相机，找到自己喜欢的角度，按F12进行渲染

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFeeemA4LZMWkHvh4h4GeYz0QI66J2aqf5yU4lDK51VuicbGHicaRDejyw/640?wx_fmt=png)

图片有点暗，可以导入到PS或者PPT提高亮度和对比度，新手请参考[【Blender科研绘图】案例4-纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUF2bqaksmttN2M40Xgk1ramlXKMB2oVdeyM5KqyqLOArBicZIGWpB0VtA/640?wx_fmt=png)

如果大家觉得而这个模型卷的太厉害，可以在螺旋修改器里面将角度设置为180°，将会有所改善

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUF6hb9DiaCsddgVibibM3rBK0Cia6AOmiaDH19dia8VshfcsiawBCtTrqibEiapcw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFO4ibxeo4FQxibLWCK16ESba8sWubpIT2nWNHlvJ7jLIhcxBGtqRRY7QA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8M3sKFLPaWF6t4aQqxadGUFy1pKvZCwfVefos3nDU7mbsskvsMLxCVF9ibV2TUQu1Mzftum9IWNZog/640?wx_fmt=jpeg)




[【Blender科研绘图】案例10-编织物](https://mp.weixin.qq.com/s/Otg4AZmMt4JwMpaSOJNIaQ)