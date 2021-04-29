# 【Blender科研绘图】案例15-OLED器件
**0 前沿**

嘿，朋友们。

这期给大家讲解**OLED 器件**建模及渲染

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**发光材质 / 阵列修改器**/ 添加文字 \*\*\*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE8pHpjNO5Zibkia6UMXDNDjqxe673oFkjOMyQnDQjEbpmJkq5SbLRflOA/640?wx_fmt=png)

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

**1 建模过程**

A 全选，X 删除所有物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEM2Liac2XH02oz7avMmwic7WE8GfE1AWRwzw22ygO9ia1SAhqcrO2AcM7g/640?wx_fmt=png)

Shift+A 添加一个平面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEysFUxdCrR32HiaMRsFKic1gKbLdxO2HNy7MZ5Cu8V29EZEe7xQ2m2SHg/640?wx_fmt=png)

添加一个实体化修改器，厚度-0.1 m, 

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEQGjsUZnYy59AmEKfBSxlm8mPU9EuKKXjrmutf7iaA62icSyniaiceIo9Pg/640?wx_fmt=png)

按 Tab 进入编辑模式，右键-细分

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE8qDb83UFwPKT3ibUQqSZxpfribjpXKtgaURA1D164MuqH4ljz0Gkjqiag/640?wx_fmt=png)

按 Tab 回到物体模式，添加阵列修改器，数量设置为 5，相对偏移设置为 Z 轴，数量设置为 2.2，完成之后**将两个修改器都进行应用**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEFpeEc50Jh1ZiaK019GibXTU3eymA7icpHK5RUL0aeHnTicSdq7FlEQH67g/640?wx_fmt=png)

再次按 Tab 进入编辑模式，选择在 Y 轴方向的一个点（见下图小黄点部分），然后按 Shift+S，将游标设置到选中项（如果 Shift+S 无法设置游标，可以右键模型 - 吸附 - 游标 -> 选中项也可以），即让游标到小黄点的位置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEibJPibj21QqiadOj9xlBib9WUROvJeX5yRBQCGm63rDtKIMuWBYhsh4z4Q/640?wx_fmt=png)

将游标设置好之后，按 Tab 回到物体模式，Shift+A 添加一个文本

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEHn4Cf4HDic5OUDias1icIyleRRY8UkKDedYSXciaofA5ibjXqoFKQ0UMeGg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE7ra4DvajwibkLuNPSY7qu3ibPXficIW02aWMhdgOGDkBU5fFL7LaNh4yQ/640?wx_fmt=png)

按‘~’进入前视图，按 S 将文本缩放，按 G，再按 X 将文本调整到中间的位置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEuicBUicmaOY1nEOChQ6XUGxVwgaVDI0BNOIxvYLG5lvThz2eicxAIiaDQA/640?wx_fmt=png)

选择文本之后，按 Tab 进入编辑模式，这时候直接输入即可打出来对应的文字，然后将其几何数据中的挤出设置为 0.04 m，可以适当再调整一下文本的位置

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzETaa8iaN3PrFiau5B1NwmSDxgsN4r1fW1UESSKJ7kXUicvJd6ojTCribPTA/640?wx_fmt=png)

Shift+D 复制，按 Z，将文本沿着 Z 轴复制到不同的位置，分别按 Tab 进入编辑模式，对其名字进行修改

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE0geDpOkmk1NeOa3aIiciaUJfwEktGQRt4xWDS6YKZOZiboDQeBiamwibntQ/640?wx_fmt=png)

按 Tab 回到物体模式，选中平面，按 Tab 进入编辑模式，按 P 分离，选择按松散物块，模型即完成了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEnRf7u7DTEicOvCwhvtQqoJwR4nUoRuqyaEhWnhqTianhicxDAks31ESOg/640?wx_fmt=png)

**2 材质添加**

添加材质，给最下面的 Substrate 添加下图材质，提高一定金属度，降低粗糙度，新朋友可以参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)，学习如何添加材质

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE5B4gOhGggF6D6YtYxT6p0uDFJx1AnlHTb7fWNJD7xH5heV0wykWZ6A/640?wx_fmt=png)

Dielectric 层给一个红色，粗糙度给 0.2，**这里其实可以将高光降为 0 效果可能会更好**（因为我们一会要添加发光材质，如果这些模型有高光可能会导致光纤乱反射）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzENZjSu3xN4WXh8KyVibaaNnNHCEQRqTnx3QGaicEQnNUd1pLYz4qjyAiaA/640?wx_fmt=png)

给 Active Layer 层添加一个基础色，降低粗糙度，将自发光设置为自己想要的颜色，自发光强度可以设置为 3  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEnyyObzcIBvbFZuaUUJSictKXJhiaibSkg3aG87OalS4tQsic1Vuw9wp01g/640?wx_fmt=png)

Phosphor 层 添加一个蓝色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEgyGoh4hH8k7IDiaQcPZ2qflZxdo3pUicQbJJuPyiamyfYr3iaPVt5k0G7g/640?wx_fmt=png)

最后是顶部的 Transparent Layer, 给其降低粗糙度，将透射设置为 1.0

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEEo7Uo2icquHpDOCwMDklIzkk7EpMn29wzLcK7JbTNibs1GlsM7jev2vA/640?wx_fmt=png)

同时将视图显示中勾选背部剔除，Alpha 混合

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE3iar6c8gYffLmaxHLicqVDpiaIVbJrhTBtgtIW3OaHWlwQ2lhfYrrzBaw/640?wx_fmt=png)

完成前面操作后，按‘~’进入右视图或者左视图，分别框选每一层的文字和长方体，将其向右拖动（可以看下面两图操作）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzErXW4nk2Rp1ACenCNK74APKKdhPnGAXwgialFl170uUakmD1FvibNZvxw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzENcibIupNsUiaQGy0Q9qqGiba9VIv44pb5YnfNApAQtLGUMo6Bsic4wyaUg/640?wx_fmt=png)

**3 渲染设置**

渲染设置使用 Cycles-GPU 计算，勾选降噪，在胶片中选择透明-透明玻璃

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEZrHDtQia5Y8n0ichdteVpVbWkia4V2LYavt2HSgn9AKqNvxtW0bvTX3Ew/640?wx_fmt=png)

按 Z 进入渲染

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEibVcJXtGNyA9ibs0u6uD4PT7t9DGd3pSdMjTJD90qMy15uLO8dmKZrGQ/640?wx_fmt=png)

在颜色中选择环境纹理-打开 Blender 自带的 HDR 贴图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE9ele8Libuvq9OJM02ynQpPd039MaPxzebDFuKRmImSjZiaKvzic7FDa5Q/640?wx_fmt=png)

将贴图强度设置为 3.0

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEsEqkHibPclEYK6Z7EOr98dniboh26NP0hTmOyJeFWicU4feStPkZe7k1w/640?wx_fmt=png)

添加相机，设置角度

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEPeWuCZ8dwAISEO88AhjbXMvXAJHozOWrs7vI4H8ayiarGIy78vWPPhQ/640?wx_fmt=png)

在相机选项中将镜头-类型中设置为正交，这里正交比例可以调整渲染的区域范围

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzEFe8Hop0A39cWiayK5Wgrk2IXJB0tjnAr7lev0lph7TITlTibgvQ8u64Q/640?wx_fmt=png)

F12 进行渲染

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzExo5PyV3KicKcicicsUa2fOK2LVcm6HK4jXv03MK7QvcSC1cH6dwV0amMg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NlvZria16HCep5JaR6NcyzE8pHpjNO5Zibkia6UMXDNDjqxe673oFkjOMyQnDQjEbpmJkq5SbLRflOA/640?wx_fmt=png)

答疑群

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8NlvZria16HCep5JaR6NcyzESQGKDDsmwIkzBVqxDuV0pwZ9BdNqTVAA6HdjqKjnpZdySiasKBYQiang/640?wx_fmt=jpeg) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484759&idx=1&sn=bad048ca4c43b6c99f99c1d794074d6a&chksm=cf184e83f86fc795a308d79d0e384bf58da8ad509474bc3dd3a5231fdaee309c425fed55809b&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484759&idx=1&sn=bad048ca4c43b6c99f99c1d794074d6a&chksm=cf184e83f86fc795a308d79d0e384bf58da8ad509474bc3dd3a5231fdaee309c425fed55809b&scene=178&cur_album_id=1752875309680377865#rd)
