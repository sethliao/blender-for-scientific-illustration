# 【Blender科研绘图】案例9-柔性太阳能电池板
**0 前沿**

嘿，朋友们。

这期给大家讲解如何制作**平面及柔性太阳能电池板**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QwYWgaEk3sxILknyV5cyJ4Os8DBkJicKHyrjkUJ7gmejRe6gccJadI4A/640?wx_fmt=png)

**难度**：⭐⭐⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型，如何设置摄像机 / 如何添加材质，如果有朋友们不太熟悉建议查看之前的教程）[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

**HDR 环境打光 / 简易形变修改器**/ 图像纹理**\*\***/ 节点 \*\*

同时欢迎关注我们的科研知识分享公众号：萤火科研  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q2zvpBO9wBvnWTAdd1Xx2l1TfJ0nE4MqfezjtW5W0h2Jdf9fCiaDZWdg/640?wx_fmt=png)

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

**1 平面太阳能电池板制作过程**

我们使用的 Blender 最新版本 2.92(以后我们的教程会坚持使用最新版本的 Blender)

首先我们新建好一个文档，按 A 选择所有物体，然后按 X 快捷键进行删除

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QiaDXY2ou74BaMXpeYYiaIHiaLQmiaA0CRBLtDTB6DeJjictjC984MJSwGpA/640?wx_fmt=png)

Shift+A 添加一个平面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QhmZKru3w8EIusE7MUWkl4wiaicQjKGiap78dMGw1J2ia2ujhicZmt6vVbCg/640?wx_fmt=png)

按 Tab 进入编辑模式，右键-细分-切割次数设置为 20

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QKFr9yjURtx2cYu2LdKicEbtrqJTIBcNR9icS7Sktiabib0CnE8XQZg3iavA/640?wx_fmt=png)

再按一次 Tab 退出编辑模式，进入物体模式，我们想要给这个平面增加厚度，所以我们添加一个[[实体化]]修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QP2nFoMnvqS0ick4OCw3KmoGFQVU6MsZH4wQ6o8Cp20Z6qBFicBtetjyA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QZP0XJjRfDnDKicVVQDBiaFm709rHKK3p06BAAl188KQeCVxQ7iaz74pcw/640?wx_fmt=png)

将厚度设置为 0.1 m（自己想法设置厚度就好，不用和我完全一样）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QKhIE2cPlVAUxycZicBKjbTAKVrG62HLpa6lK3ticicyy7VLnGGicLlKIjA/640?wx_fmt=png)

现在模型变角太直，我们想让它圆滑一点，所以我们添加一个[[倒角修改器]]

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q6PnEhicU9ibtedWG6a97a5NE0cOCbYTmMePf65nvhGWNXEdSkWeVib4pA/640?wx_fmt=png)

将[[倒角修改器]]的数量设置为 0.01 m, 段数设置为 2

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QHlp8BTx810SiciakKv8zNnHe9PbWmnFxdmWictB0noy3vUq9bupgDac1Q/640?wx_fmt=png)

在物体模式下，右键模型，平滑着色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QBjiciaSW7mK2nyib5pOD12sR5fN2UIDTKfrgTOEAhibeialKx7qHGiciavaNA/640?wx_fmt=png)

给模型开始添加材质

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QmNA2J5vhLwjukHsicrjIVlGyy811RNiaV2icgYwfE942dP2en9Rxt5sXg/640?wx_fmt=png)

点击小黄点，选择图像纹理

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QbBBk8phya0icOzwPcicjapIXGI5pjUhBrrVXvcbJLH8ibm4JFg4Wv2ZBA/640?wx_fmt=png)

点击打开，这时候我们选择一张图像就可以把图片映射到模型上方

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QFUwClENcAGRZ0pWVQTL4d1Fy8QnybMR4EFpgsPPsyvW764bZXIYVhg/640?wx_fmt=png)

下面这个图片大家可以直接另存为来获取，大家可以在公众号后台绘图 Solar Panel 进行下载，或者可以到[https://cc0textures.com / 进行免费下载（搜索 Solar](https://cc0textures.com/进行免费下载（搜索Solar) Panel, 这个网站都是免费的材质网站大家可以收藏一下免费下载，当然这个网站是国外的网站，如果下载不了可以在公众号后台下载）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QCMZy87GFowOjRntsuHPLXW8EMkVwYhI6I4Z9kcr6Uf3x3z8aIkIhUg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QSnfibia0aNvhljyBKTtEaSfHKg3CRMX3fwDjmFqksyfDY2RSaGqgbKibA/640?wx_fmt=png)

按 Z 进入材质预览模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QebY9RI6QpYcpMKvxozp6xnl9rumaGicJbGZiazhKzia45Q7E9SGToxadA/640?wx_fmt=png)

模型已经好了，不过有点丑（当然如果部分同学可能场景比较黑暗，可以按下图把场景灯光和场景世界都关掉）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QwsqBMyzpozHzwFtlXyHBpLnCYKubN4ibvMkFzjroOfiaVkjrKiaboOj8Q/640?wx_fmt=png)

**2 调整电池板大小**

为了让我们的模型不丑，同时调整一下太阳能电池板的大小，我们来继续操作，先在上面选择着色 Shading

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QuUyDATiawtFVjpMPQrMS8iamacibggsbGwbVVlqXqEVV6UFfSR6HN0YEg/640?wx_fmt=png)

这时候我们可以看到下面一些框框，我画的红色框框不需要管，左边的窗口意思是我们现在打开一个纹理，并把这个纹理给了这个模型

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QLkBLYjFoh86r4SZcqYea7YYmC25DwbOosNTalqibrRW2FR2puSl2dOg/640?wx_fmt=png)

这时候打开偏好设置-插件-搜索 Node Wrangler 勾选即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QjQM5b4ZawrTAjsatEBd9ls4ZCwiaDC6Vtiatsa54Lf2ybKI6uTqX2Ntg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QjGCjbNpqVqyIbyibRmxPRhliaL8Wu03vavWvgbLhVzic8SOcBQ6C5uvwg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QQKPP4lonQZ4LDsXDee96qEwqQId8QEPUWHBP4OKiczpKqDTnXTcicjjA/640?wx_fmt=png)

这时候单击选中左边的框框，按 X 可以将其删除

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QGQ8nmLU0hTOeF2t9fNncxauWj8zBkxjibPqBPy4LISh4Xmkw6sJ1IVw/640?wx_fmt=png)

然后按住 Ctrl+T**同时**鼠标左键单击这个绿色的原理化 BSDF 就会生成三个框框（这就是刚刚那个插件的作用可以快速生成一些常用节点）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QFKR9wWWx7UEr82L7WZNqQK29My45FpqjzUlSD9Y7UQib2loPVQwEv4g/640?wx_fmt=png)

我们还是选择打开，然后打开我们下载好的图片纹理

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QpRTDVqGeianiadOlzLiamGGTN2ZepC3wENc3wRQJ2Qhyf2t0jGCpiaVrdg/640?wx_fmt=png)

现在模型搞定了，我们该如何调整电池的大小呢

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QicK845RbRbFlcgbYJ2JAtZXplNujiaMrVBibfCHl3glZn4EaSFc7vYrTg/640?wx_fmt=png)

可以看到这里有个缩放，我们将 X，Y 同时设置为 0.5, 或者 2 这样电池块就可以实现放大或者缩小的效果，具体咋设置看自己想要的效果，或者大家可以将我们的立方体模型进行缩放，当然长方形也是可以的，这时候可能需要调整一下 X，Y 方向的缩放

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QOXD2L8vpWx4GuKmkbguIZB84Byc8biblWntIjJc3rqkq53cpszpKPeg/640?wx_fmt=png)

缩放问题解决了，**但是模型材质感觉还是有点黑**，有时候太阳能电池是有点暗紫色或者说深蓝色的，那该怎么办呢，我们这里按 Shift+A 添加 RGB 节点，它可以给模型 RGB 颜色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QTHVr8gkbyJmSG3TAiawuGtUV8QDa1yIgibH2gFiazW9StKtCTXd6feeww/640?wx_fmt=png)

然后我们继续 Shift+A 添加一个混合 RGB

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QXDo8JUM3zbqS2Vx7TNzLd7ThEUqm3u4a2rnp57Z1g3pX29wfUkQ4VQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QMbic3tpM78o18uSZrxDH1cI9RWjh5hBICgQBRbDOo2Lq1WCWEic22bpQ/640?wx_fmt=png)

然后拖动这些线末端的小黄点将它们连接成下图所示，这样我们用了一个混合修改器，将图像纹理和颜色节点叠加在了一起，然后再赋予给了模型，这里注意先将 RGB 和图片纹理节点连接到混合节点，然后再连接原理化 BSDF

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QbI2KEDh8HFE20NsxWbfj8dia5Q2ibVInrpYSdbBibWvQqmRKJvbH4k9dw/640?wx_fmt=png)

这时候，我将混合节点的系数设置为 0.1，这样图像纹理将占主导，同时将 RBG 设置为暗紫色，这个颜色大家可以自己调试，同时我将金属度调高，将糙度降低是电池板表面看起来更加光滑更像真实情况

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QxX3I6Zvw7A1ibuOzOpxQLHicnqogRrHOsN9ZlDeicXb28NLCSVCeBdaPg/640?wx_fmt=png)

然后我们按 Z 进入材质预览模式，发现场景有点暗，是因为世界没用光

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Qu8VYN43mEnyrP4TCJP62iceiaQ8b2rODhVibW3ZHyvCU4rhS5466uLEDg/640?wx_fmt=png)

我们按下图进入 World 选项中

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QEr1xJHG9C8J9VQgJ4D9uAf8kfTjnWy1qiacogqXN9gq94rz7KPyMicBQ/640?wx_fmt=png)

点击一个颜色小黄点，添加**环境纹理（注意是环境纹理不是其他纹理）**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QdJzQAnOjfH8kL23VptjeqWMNQRlYgjOb1oHI1EUCZxT9vVrS3kMI0w/640?wx_fmt=png)

哇哦，一片紫色别慌

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QhajEKWJ4JvQHnicuOBAXibga58BoostmYxyWgic4JVXPYFE5sD9Ao64ag/640?wx_fmt=png)

我们打开 Blender 默认的 HDR 文件中的自带 HDR 图，**路径大家看下图**（大家也可以自己找 HDR 贴图，也可以自己直接去百度 HDR 图）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QIunam1iaTJPz4tN4t8YfOiaRY9h8IS6AZYulehPgo9icOuichcgbRYkVIQ/640?wx_fmt=png)

然后在渲染设置中，选择 Cycles 渲染，GPU 或者 CPU 计算均可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q7iacAQoNJ6Q2FZhaTXNXXMS8qjtKU6C3iaTKfWYuxviapQJ0ph5EBWbicg/640?wx_fmt=png)

将胶片-透明-透明玻璃都打开

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QTrvkoW99BPibDbF51KsNWvlTRRM9019IuP90bQiadgicQ0HT0zpAEYzwg/640?wx_fmt=png)

设置相机，不会的可以参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QibuSDfLiaLMicmwxFkIuAPzibXgXIf8btM4tdxbmbjJWCvDazD1xyS36xA/640?wx_fmt=png)

🆗得到的图还不错的平面电池板，然后我们继续搞柔性的

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QaCiawVictEjlav2Dc5s8HSgPqDJHwwU0yK6WVlFiaAQ48ib1Ua5SW6qflQ/640?wx_fmt=png)

**3 柔性太阳能电池板**

按 Z，从渲染模式退回到材质预览模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q231YzJI6ibS6goC85PaxTcvkia19LqPquiayOpINyibDaumDMZJqBadDug/640?wx_fmt=png)

Shift+A 添加一个空物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q25djhCCwSWRib5t6bMYbXPSbTVev0Fh1jpvIgBahQjtgASe7DeQoWcg/640?wx_fmt=png)

按 R, 再按 X, 将空物体旋转 90°（别问为啥，先跟着做就行）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q8YPVnDibQX3egOffMxUjDGticBaA4BQlTXpsQQ8bfh8YIhSYzAqnBS1Q/640?wx_fmt=png)

然后选择电池板，添加简易形变修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Qu9BcdtTajNrp8Wfm1E8fmc6ovYR1tTGvFNc1oKHYkmpk6mgEEIbcyQ/640?wx_fmt=png)

选择弯曲

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q0iadToLV9eic4yezq6eib1CgaUmq5KhEXnR5BU0QUWGf7rxCkCytB1J8g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QpYfUVU9XAeQGMd0UAc9n3VTiazWV9yDf30FrMuTNU2UMj2BZ8Drchow/640?wx_fmt=png)

选择空物体-这样就 ok 了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QRia7qKSavDjC1u7UP6DicuBXDJG8R56HgEL8a3VgibtOWBJoX7HkCph5w/640?wx_fmt=png)

但是我们发现将弯曲角度提高，模型开始出现硬边

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Qc0ibg90ibCrxpMJPic5dd7uJVfO15MI1fryBUGkSmRwG9gdQtWib5gMURg/640?wx_fmt=png)

所以我们添加一个表面[[细分]]

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QQ0PJyzYkdnl0afE4BibNIsAbp5efj75l0K3gv9cHiaMG6hTaiaQejiaWQQ/640?wx_fmt=png)

将视图层级设置为 2，完成啦

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QcD2Diaz50ibkqEulnqdepHLUibZ45XiaLHmhQda5YdjeP24cvic0uG9P3kQ/640?wx_fmt=png)

但是现在还有一个问题，我们发现当我们移动模型的时候，模型会发生很奇怪的形变

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q4sicWnxDMVs2AqtpMYiaonYLcfiaMFueW06SuylGibEHuTMulf3icIyXibCg/640?wx_fmt=png)

这时候，我们只需要按住 Shift 将空物体拖动到平面里面作为其子集就好嘞

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QwZLAdiayoYUtcyDYRI6MJG8q98LZfqY6ibwqC4vuWHrjib87gAtJ49XPg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Qg3D8owUUtp4ZTmLTo4ia28icereJoCB1ogmn66dYbXwkwtEujoXdWkRg/640?wx_fmt=png)

这之后拖动旋转就没啥问题了哦，大家可以按 X，再按 30 将模型旋转到直接喜欢的角度，然后设置相机按 F12 渲染就好啦

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QROFxnM3ysb5OfC3Wiafib06dTxZIqpfeAUshLWkPs94uOJ5aF3S8Gmzw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QmWUIHKj2YnYAdN7CJgTud0geHZAuZ2a5LGOloRRzaibGMVAFKVeiaV7g/640?wx_fmt=png)

当然我们有两个材质，大家也可以尝试第二个材质哦（在公众号后台回复 Solar Panel)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QQKrArqpj982hDibEIqjyJp0yG1POOmJcAhtDgvByS5LXBwrMHe5fJMw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3QuuwzgazgabHAMnDC3BsFAXRU5UyaSK6EicHjdCjoG1jgJrN42OGaGAw/640?wx_fmt=jpeg) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484533&idx=1&sn=1917ac437e8db6b542f0380609e40c26&chksm=cf184fa1f86fc6b759ee4f012f693f0065cff71ad33e848fae216c6a4436be2a0714d59a07ee&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484533&idx=1&sn=1917ac437e8db6b542f0380609e40c26&chksm=cf184fa1f86fc6b759ee4f012f693f0065cff71ad33e848fae216c6a4436be2a0714d59a07ee&scene=178&cur_album_id=1752875309680377865#rd)
