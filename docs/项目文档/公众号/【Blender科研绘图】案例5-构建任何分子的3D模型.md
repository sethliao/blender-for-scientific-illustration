# 【Blender科研绘图】案例5-构建任何分子的3D模型
**0 前沿**

嘿，朋友们。

这期给大家讲解如何在 Blender 中导入任何想要结构的 3D 模型。本期流程较为简单，只不过设计几个文件名字和网页，大家之后保存好那些网站之后想要查询即可。

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibvicP5ib5QqlKsPeGwgjibMliceIzF1yzyyIhmSWlDwoAMH2bezjccia2FRQ/640?wx_fmt=png)

难度：⭐⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）（本期也适合初学者）

**SMILES 分子语言**/**pdb 文件**/**OpenBabelGUI 软件**

同时欢迎关注我们的科研知识分享公众号：萤火科研

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibx8PTS9mgfuKFsxy0Rrj5jjJJibsHW8llWjCV6ybQcy96WOPQntmIMDA/640?wx_fmt=png)

微信答疑群在底端哦

**1 pdb 插件安装**

首先打开 Blender 在其中编辑-偏好设置-插件。pdb 插件就是让 blender 可以导入 pdb 文件，这些文件一般为 3D 软件的通用格式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibBr01wvumgsmILNBGu1rafH3IqDaib1SdgkAxhYt6uBHfICbhqsDibXfw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibkWNJLdI0AANhdw9baS3bnFEMUMjL1Kbt6cPKhIaf0w0fQ3ZGszOjNw/640?wx_fmt=png)

搜索 pdb，勾选 pdb/XYZ 插件（其实从此可以看出 blender 安装插件是多么的方便，不需要额外破解或者再去文件夹搞来搞去）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibpoLJeqTYMibkdibIC3WkibHHyMjibOw5KsePp83P9XDhOP14GPrxkA2XIA/640?wx_fmt=png)

**2 Open Babel GUI 软件**

我们安装好了 pdb 导入插件，但是该从哪里搞 pdb 文件呢？，这时候来到下面这个网站

[https://github.com/openbabel/openbabel/releases/tag/openbabel-3-1-1](https://github.com/openbabel/openbabel/releases/tag/openbabel-3-1-1)

按图点击下载所指文件即可（或者自己直接在网页搜索 Open Babel 即可）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibTumwiaLAwpsJTmCqicNSLlCxtHZubx1FHLGTkNqEJ8lu9FqXxjiaISjOw/640?wx_fmt=png)

好了之后，打开文件，这里注意一定要是以管理员身份打开，否则可能会报错

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibXlGAwJu3DibDexWA2AcIPt86cWQ2ynTb1RciapKNSxArNM2OWuRrribvQ/640?wx_fmt=png)

下面为软件的界面，但是不要慌，大部分功能我们都用不到，一步一步跟着来即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibBjsQztzuhOyHgAE2ULrEAQpoBLtcicGoGA5ewjV6IicFKwJXWBERfsTQ/640?wx_fmt=png)

首先我们在右边将 output format 修改成 pdb 文件格式（这里的意思其实类似格式工厂，可以将另一种格式的文件转化为 pdb 文件）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ib7b36sSsKZuD7Dqv4gcAok25SEBNxa4D2YUq2VC1V4W0G9nD49nMxicw/640?wx_fmt=png)

搞完右边看左边，勾选 input below 的选项，然后我们就可以在左边黄色区域输入分子式啦，从而得到分子的 pdb 文件，进而导入到 blender 进行修改使用，但是这里的分子式不是一般的分子式，它是一种特殊的分子格式，一般叫 SMiLES 语言，这个我们不需要全部记得规则，我们需要什么去查什么就可，接着向下看

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibOo44yBVs476MRtulv9L4iciacBlbJh4RibDiael4nkzXxW7Pby8rrjoia6Q/640?wx_fmt=png)

在百度或者谷歌直接搜索分子 SMILES 规范就可查到很多规则和形式，比如我选择下图所示的分子式（大家可以去试试乙醇 / 丙酮这些常见的）

**SMILES 写作规范**：[https://www.jianshu.com/p/8c915de5ad4d](https://www.jianshu.com/p/8c915de5ad4d)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibLVkHx1AjotAYIXWlA6nWqiaA2BfEZIdYsVjPoVFcgQbACawEZjfaQag/640?wx_fmt=png)

我们成功将 SMILES 格式输入进来了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibj7NHRCibq394zibIvgUQmoR7lkKQdkXwMxu0fRWVWjOtAeLUVykxRGYA/640?wx_fmt=png)

这时候要选择一下输出位置，并对其进行命名

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibC2XF2SCgUVibyrQKag8b6Ebb8XbyicwTbDBeLSRJiar47zoYyibhDyUL5Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ib1RVEH6T10IQW8krMAkF9BgvCPqGeDqPfhrYVbiaNRYYPvicFIVSstdUQ/640?wx_fmt=png)

这些都搞定之后，在中间进行勾选 Add hydrogens（顾名思义，就是自动补齐氢原子）和 Generate 3D Coordinates（产生 3D 坐标信息）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibiaAiceJBVKeHodnjo1DET4ekghGibFxoAx63ErV8NVmk3pNXEZfbibgL8w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibTX5M1vhc3aofmLZ9qReHs7Xia2f5SpJcx55q1ffzQ6iaiany9FcQvfLjA/640?wx_fmt=png)

点击 Convert, 这时候分子的 pdb 文件就已经生成了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibrgCJC7L7cBO80znvF2lNNb808dRPh0WQj8VgFOfRwYDHIpm5sE4ZRw/640?wx_fmt=png)

**3 导入 Blender**

现在我们有了 pdb 文件，我们回到 blender，按 A 全选，再按 X 删除所有模型

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ib9c3tWtyHm78nsmqXOOy71SVR3RdLWU7JsM2PEbJm5wkETrOy4qdXkQ/640?wx_fmt=png)

在文件-导入-Protein Date Bank 即 pdb

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibe7lBhCicgGhXCWAJOFYiaASLsze9rfFenuicfhheOKrwLEO3MVxrm2lhg/640?wx_fmt=png)

选择刚刚生产的 pdb 文件，同时右边可以选择生产模型球体的大小

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibFRBuHw8XibEOInibDbTq2B1S6fAQdDlbttib343ibRXL3wEPaIltzt1LVA/640?wx_fmt=png)

这样就成功导进来啦

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ib2NXN91WACfbeicibaibV3EotbK2ibmiauCj7CFUjziblRDianic1EQr0tUcPPA/640?wx_fmt=png)

同时，我们在材质里面可以选择各个原子并对其材质进行更改，见下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibKPrBfNCvMcgdhpt66BbYhNmBtPYygfs3PsJN67TK3ks82bvChuzVLQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibmIzSobWrC4BbO1IVv4iao89qomTDwanbULZpdB9JGDgLypGOdouBXLA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7iblGORc06066GCdU0sfKXyZFdUKQsVYaaKtvfNrOcdwGQDvfIHwuh8aA/640?wx_fmt=png)

**4 渲染**

渲染还是老路子，这里我准备生成没有背景的 PNG 图，选择 Cycles 渲染器，GPU 计算（这里前面几期都做了很多次了，可以去复习一下）[【Blender 科研绘图】案例 4-CNT | 碳纳米管](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484199&idx=1&sn=036d744caafe645f51b9f37bd0caa049&chksm=cf1848f3f86fc1e592ff4479f5de23efaad694b1a9e968a70cdd0127db8eae78f4635c99f196&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibfeZLMUElJNHfs5KapKeAAnhEUWdg0komE85ibM5BpPJTdo3uaZnJMIQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibiceuTsMozLRIy8BdcsRfWpggscoULVF122Fmric1pmAsC9MEF7WHs3Lw/640?wx_fmt=png)

添加相机

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibf6qZXEvkcKia5XD1bzbU26fJhh2TyibYru62IogSlmZLha9XDjZkxofQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibLfYquZib3L3VBlhZF0Iv4dKfUSN1eNjE1szqvD5jJeO6uQV3zWMSGdg/640?wx_fmt=png)

调整相机位置与角度（之前推送有详细介绍）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibSsFPic51J7LMv4AibiakNO0icrKp9ye6zI9plGhlocSD7ZGlW4Oroeuvxg/640?wx_fmt=png)

最后我们发现渲染场景比较暗，可以在下图所示打开环境光遮蔽 AO，再次按 F12 渲染即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibvwX02hjbORibDhtVodticzu6fTy5tmxvSj71Tl8GnZ1t8nGCQpnx8BKg/640?wx_fmt=png)

效果如下图，导出，导入到 ps 或 ppt 提高亮度，对比度和饱和度即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibgI9BsrtpvdQ0aibvCrG7QH50uzV5s4ILTsB6MgvGCR1xIqFic5ediaAGw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ibvicP5ib5QqlKsPeGwgjibMliceIzF1yzyyIhmSWlDwoAMH2bezjccia2FRQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8MVS995bUNm8b8JR4gd0R7ib77GbunSFkcuBHgbnic6icq3yPiaJdjiazt0Q5oUqBkwuFDf7dEO1nl8dPA/640?wx_fmt=jpeg)

视频版教程：[https://www.bilibili.com/video/BV1RK4y127wE](https://www.bilibili.com/video/BV1RK4y127wE) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484293&idx=1&sn=72425b551076a5f50845aee582447327&chksm=cf184851f86fc14776dcc3967d21bc073d18ce295caeba032ce788c5312e43dd20ff1d12ac91&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484293&idx=1&sn=72425b551076a5f50845aee582447327&chksm=cf184851f86fc14776dcc3967d21bc073d18ce295caeba032ce788c5312e43dd20ff1d12ac91&scene=178&cur_album_id=1752875309680377865#rd)
