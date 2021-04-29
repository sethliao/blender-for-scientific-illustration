# 【Blender科研绘图】案例14-泡沫镍
**0 前沿**

嘿，朋友们。

这期给大家讲解**泡沫镍**

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**区域选择 / 正十二面体**/ [[细分]]**\*\***/ [[降噪]] \*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOoXxoT0BbHO1awm4l8m0n40b0sM5AHp1dU9jicQ6GAiaFSNa0wU1UeINw/640?wx_fmt=png)

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

**1 建模过程**

我们使用的 Blender 最新版本 2.92(以后我们的教程会坚持使用最新版本的 Blender)

首先我们新建好一个文档，按 A 选择所有物体，然后按 X 快捷键进行删除

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOFBXb6etkQPjLicq67emjNk7qmBP3xZum1qBeWNJt5fGDBAITS61698A/640?wx_fmt=png)

Shift+A 添加一个棱角球

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOicmgG8KF59prZn0n6lE0TR77TYxdYyb4TFYVVL5CHJ6uuQP32gkKzibQ/640?wx_fmt=png)

细分设置为 1

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNO4nhDQoaZLDyFWhrB2K1TVtxTh2ZcUW7mDqWo69AveJCKLxZrAiaMqtA/640?wx_fmt=png)

按 Tab 进入编辑模式，Ctrl+B 进行倒角，可以自己手动拉，也可以自己手动拉一下，然后参考下面的设置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNO6na7Q80jtfPweqydk9qph4YS7I8BzLwf7SrHJBLP5ZLuLNYCnN2upA/640?wx_fmt=png)

按 M 进行合并，将一些重叠在一起的点进行合并

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNORPibiaBEeIVy0YPBUFUnnODemiaCXjUeuc0bPJIfqWFAuBhPaiaCOJTlWw/640?wx_fmt=png)

将合并距离增加一些，这样可以看到下面有 40 个重叠的点被去除掉了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOPRbiaMiaOoyvxnD1TNNUXbHajSAG41HN48I2DGH6JicXTfAN2SvNg1ZqQ/640?wx_fmt=png)

之后在十二面体的基础上，对点进行倒角，具体倒角倒多少，需要看个人审美，倒角出来的三角形决定了泡沫镍的柱子的粗细程度，而中间的五边形决定了泡沫镍的孔有多大

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNORF3EgmsHhdn77sIq4ic6xRGSwK6fOOLiaZm4icLTOyLtBAs9HicWMbmKkQ/640?wx_fmt=png)

按 3 进入面选择，点中一个五边形，按 Shift+G 进行区域选择，可以快速选择模型中相似的面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOaUIUMdQsaCZbEPYUkUuRIjbl6VicKKzIm5NaH6T5g5DO61Qg1q4CKibQ/640?wx_fmt=png)

按 X，删除面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOqwTTSbN4bcSN5XxecPexSVwXDyjHhxoBanxVOLbNKWr7Edy83iaMHPQ/640?wx_fmt=png)

得到镂空结构，**同样**选择一个三角形，按 Shift+G 进行区域选择

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOCc4blOicpZYlZzqfKbTg9MfIwiafmZoRqhlh1icT4zxsaDqEfc9g4pmNw/640?wx_fmt=png)

在左侧，挤出选项中，选择‘挤出各个面’

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOqALRWlibZ0K64iaJrEvoEWzg2gTh65z3NGYlP1SbBRnnI19tKnXUapIw/640?wx_fmt=png)

拖动小黄点，一开始不要拖动太多距离，用来卡边

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNO6Zch2l9MP0kqJiahqmfVRMnGibT5dnWkLn3mjH1SqexbQbQXeOwK8fibA/640?wx_fmt=png)

再次拖动比较长的一段距离

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOxOuR13Csshwtk18Bzv84dUIibzZPdia5y5gH76YibuiaCEfMblg63DN9uA/640?wx_fmt=png)

最好第三次挤出一点距离卡边，完成之后，按 Tab 退出编辑模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOHQ3qXfLotMIbNAuJkWfnvKsoicL9pqoWBlNImmkOicF7uWYjCMmrEvzQ/640?wx_fmt=png)

添加一个[[细分]]，将视图和渲染均设置为 3

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNO1iatr0SqEzqYnwzTjaEKAnrNmo5ic11GicJRMAKlshh7PhUKQnNVnEWUA/640?wx_fmt=png)

再添加一个实体化，给里面的镂空结构增加一定的厚度

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOE3zxrKsJGyS5UFNC48rkibico2iaibEmtqQv6tUa6by2qFVpvUPC5REBvQ/640?wx_fmt=png)

完成之后右键-平滑着色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOQMYlF3J5LAzvibkp5VHEmicfw8HdPCtVhspOKEYszsUf9NJB46L5NvFQ/640?wx_fmt=png)

勾选自动光滑，模型便完成了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOr7euoeFKXsW66ujgvSMWHTVickL3pHAuogs0TZRUHwHvDSzGalab3Ag/640?wx_fmt=png)

**2 材质添加**

给其添加一个材质，我这里用了比较暗的基础色，提高金属度，降低了糙度，让其更像金属

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNO9gk7n2FBkhIK3sL7krJibyBJPp8iaaMg8UicQ8o0NbtEZziaYE6aYicLNcg/640?wx_fmt=png)

同时在世界面板的颜色中，选择其颜色的小黄点，然后选择环境纹理，进入 Blender 自带的 HDR 贴图库，选择一个 HDR 贴图，（当然大家可以自己打光，新朋友可以参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOVWkUnQJJaSqEoQdhiazmtWvmrcS5Hgk7vG3VvmOVVtdibanwO9AlPdTA/640?wx_fmt=png)

**3 渲染设置**

渲染将其设置为 Cycles-GPU 渲染，自适应采样，勾选[[降噪]]，打开透明，新朋友请参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOb1a8HGxg7lTTO49u67icwicTfOYpIMoibYNJFrHrMGUUmvRdv4Ajz5j0g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNOQRlUK23m9UFIFiaXVuuhBiaU4Duh7eAibcgUBSqJ3W3WTwjf4oVn5OibuQ/640?wx_fmt=png)

微信答疑群

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8PkibjxNTWYNYncWTCiaTcnNO5Oic8zq5bXtuxynj5j0ZicggV6jrEwRzCmZCqb9KCNiaWAIPibXA6pDuZQ/640?wx_fmt=jpeg)

同时欢迎关注我们的科研知识分享公众号：萤火科研  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q2zvpBO9wBvnWTAdd1Xx2l1TfJ0nE4MqfezjtW5W0h2Jdf9fCiaDZWdg/640?wx_fmt=png) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484728&idx=1&sn=8a8ce32da15252e071d731745d676697&chksm=cf184eecf86fc7faddce6bcc5d9c23d9733bca10714e3c22f76df9d2e7443f1a3db247898e57&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484728&idx=1&sn=8a8ce32da15252e071d731745d676697&chksm=cf184eecf86fc7faddce6bcc5d9c23d9733bca10714e3c22f76df9d2e7443f1a3db247898e57&scene=178&cur_album_id=1752875309680377865#rd)
