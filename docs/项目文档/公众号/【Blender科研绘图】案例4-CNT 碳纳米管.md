# 【Blender科研绘图】案例4-CNT|碳纳米管
**0 前沿**

嘿，朋友们。

这期给大家讲解 CNT 碳纳米管的建模及渲染过程。

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

阵列修改器**/**粒子修改器**/\*\***骨架修改器 / 无背渲染 \*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHD5jxpvIjBumUpJNdENWOOfI3qcnvXfBBiaW2WxeoRpiccib5XQ0kiaiaCmQ/640?wx_fmt=png)

视频版教程在底部~

同时欢迎关注我们的科研知识分享公众号：萤火科研  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MvU54ibVqR99TGmsVk3ib3ZljFTNej6ZVjvJZsyYaicmHNrmBLYc5n4ia34GMRCa55stCRDdXKPsgzlQ/640?wx_fmt=png)

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~  

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8MvU54ibVqR99TGmsVk3ib3Zl72HL8MTABIM5DO5acLnSr3dcA3ibS1MlB4tUPtkHib9ZOgtUosLXSYwg/640?wx_fmt=png)

**1 建模过程**

我们使用的 Blender 最新版本 2.92(以后我们的教程会坚持使用最新版本的 Blender)

首先我们新建好一个文档，按 A 选择所有物体，然后按 X 快捷键进行删除

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHPCzkSzyia9ppbp4MDKCZ4IuavazOpPDT8Rfy0z1ZOAjcQV7htjS2huA/640?wx_fmt=png)

Shift+A 新建一个【圆环】，如下图所示

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHcFhAvv3F5HfFd25Qvg408m8bjWWribop4Dia253U6zSaO0V8A7UHP1Kw/640?wx_fmt=png)

注意点：添加好【圆环】之后点左下角的‘添加圆环’打开二级菜单，如下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH4n0rglhA27O28Eb6I6W2ibJINhNXhPrYtvrEnbOiaxsfaibRibm7dF3HeA/640?wx_fmt=png)

将顶点数目设置为 6，此时圆环变成了 6 边形

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHSaRwfUWjlRCLOgGiaSMNtbFwFeQMSrYmmh3QlZNob9hd5tuaMsmia7bg/640?wx_fmt=png)

然后点击键盘左上角‘~'进入视图选择，选择顶视图（有小键盘的朋友可以点小键盘的数字 8 快速进入顶视图）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHL0vvzCVjYrFCfibxicaBicy18cKOqr8OhoyWlmzHtTYxicEynT6MiadiayQA/640?wx_fmt=png)

按 Tab 或者在左上角选择编辑模式从而进入编辑模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHr2Nu0iamGOpVic8Y9a2SSF9rmRROibgiamSFDxGcRlle9LEEoHAVt3f5Ng/640?wx_fmt=png)

按上排数字键盘进入点选择模式，然后按 A 进行全选所有点，按 F 键，可以将所选点填充为一个面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHbC5JnNXOAJIOOQw3nnWYpuBA86kKzDpEkSWZrLwpkKrV8E7SGZy0eg/640?wx_fmt=png)

注意点 / 难点：按 Shift+D 进行复制，将复制出来的六边形拖出来后，按右键取消移动，下图展示了 Shift+D 移动鼠标状态下模型复制的情况。（注意此时必须要在编辑模式下进行）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHI3pUMt7MibU8wu6U2FoCE0BZzAjSFUiaM0DT6VOVmia8kWYsJricRTvxmA/640?wx_fmt=png)

上一步按了右键之后此时只能看到一个六边形，其实此刻是两个六边形重叠在了一起，所以只能看到一个

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH2JZ3JJyUbT2WCiaTykx4U0zSnsIAnLjlL9NHZRetYxrJZusdia5uv6Yg/640?wx_fmt=png)

选择下图所示的点（六边形右上方的小白点），然后按快捷键 L 进行加选（必须先选择点，然后再按 L）（按 L 系统会自动帮你把电脑认为是相关的部分选择，按两下 L，或者更多次 L，选择就会继续扩大选择）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH7JdqxFlOrYLYfYgZzgRfQPebjibU3icUGpgK2yExXHgunxmOdcoHWZ8g/640?wx_fmt=png)

上一步选择好之后，在菜单栏上面或者下面那个链条选项下勾选活动元素

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHk887xRw2gPzq5PSd63nalskod1LgQGRcia7axt4YM8gTu1ia5jXbxO4Q/640?wx_fmt=png)

此刻，分别按 R, Z, 然后输入 120（R 表示旋转，按 Z 代表绕 Z 轴旋转，120 代表旋转 120 度），输入完之后按 Enter 进行确认（这是让六边形绕着这个选择的点进行旋转），效果如下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHmm3Q9gq5qjQoCIibibcHxX6qclBJiaAuqyy92arIRYHbdbOtC2EkLk3Zg/640?wx_fmt=png)

复制好之后，继续进行复制，然后按右键取消移动（选择右边的六边形，如果你不小心取消了选择，那么你在右边的六边形上面随便选择一个点按 L 就可以自动选择整个六边形）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHxDFObIpdHEaEXfxZcxG9PE9QA743YLXkfiaeubvjsFydyeegqpBbqIQ/640?wx_fmt=png)

之后选择如下图所示的小白点的位置（和刚刚小白点是同样的位置，其实不一定选择下图推荐的小白点，选择其它点旋转也可以，但是角度可能需要变换一下），按 L 进行扩选，最后再分别按 R, Z, 120 输入完之后按 Enter 进行确认即可得到下图    

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHPuKibxkCxTIWiclMEWaseBkDaf21YRuTjh7hnlEyTTh2zBU09h8rxAHw/640?wx_fmt=png)

同样的道理，将上面复制出来的第三个六边形进行复制，随便在其上面点一个点，按 L 进行扩充选择，Shift+D 进行复制，按鼠标右键取消选择，最后在下图所示小白点的位置点击

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH0KkhibECIgNplppd07Aet71iaVw1C6JJjiaq2hYzZWicVGVibwGEFwIuYicA/640?wx_fmt=png)

再按 R，Z，-120 按 Enter 进行确认得到下面阵列

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHjwTV5V2YZujbWvavEiaYbLpBKibzY2VJqq8E2J8KQ7Zq8Nr1ECIBOx7A/640?wx_fmt=png)

此时按 A 全选所有的六边形，因为复制出来的六边形有边和点是重合的，所以我们按 M，选择按距离进行合并距离很近的边和点

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH4qjtVJOtv56iblibUyAArWgaLUicosX1pMxLbnkH9iaIWMvvQ7EVlS4XOA/640?wx_fmt=png)

然后再按 Tab 回到物体模式或者左上角选择退出编辑模式进入物体模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHyWg9pGgKEtSc8D2spa7lJd3KUfPOaeibrHXtm7YLLAkVEQsUf5alGqw/640?wx_fmt=png)

在右侧添加【阵列修改器】

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHerRicyTWqPhfSr0MeRlkAetJell6wjxboftAQmPvUAYzib6nNibXc8CwA/640?wx_fmt=png)

分别将数量设置为 6，相对偏移中的 X 设置为偏移 0.8，这一步的意思为让我们制作出来的模型沿着 X 轴移动 0.8 个自身的大小，最后再勾选合并可以优化模型

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHlpUOeNHvDVz927z5xGS5UgDKtxTGR1aNPO09D9tcMBbVAfR8oNJ4yQ/640?wx_fmt=png)

同样为了更清楚看清模型的边，我们在视图叠加层选项中勾选线框

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHyfX6mtDTo6YJJIlFoj6wo3MTZmdUHB29WjqajkYd0THOKRBly3lXrg/640?wx_fmt=png)

复制完沿着 X 轴，我们再添加一个【阵列修改器】，此时将数量也设置为 6，取消勾选相对偏移，勾选恒定偏移，将模型沿着 Y 轴移动 3 m 进行复制，最后一定不要选择合并，否则模型会乱掉（3 m 是根据模型的大小算出来的，当然自己也可以试试大概为多少可以重合为下图）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHCCqzZFBOYdJac3uEukeujVDTNjdlTVg3Ag0g4xib3BwQmLfqLiaoJeRg/640?wx_fmt=png)

选择物体之后，添加【线框修改器】，将厚度设置为合适值，这里推荐为 0.16 m，同时勾选边界范围优化边界模型的面（如果不勾选边界范围，大家可以换一下角度看一下边缘，可以发现会有缺面的情况）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHO3fXLIz89MahEmyicnjBeibzYONzuYicM1ROJVoNMyeNfl5KS24rAG28w/640?wx_fmt=png)

现在边框骨架仍然为棱角尖锐的模型，我们添加一个【倒角修改器】，推荐将宽度设置为 0.3 m，段数为 2 或 3（段数也高骨架越圆滑，但是会提高系统资源占用）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHNVaCBoHC8MTU8WZo8hPic9TN0R1IpUictA7Gry3tQia0jic7N0Wj6Dgrcw/640?wx_fmt=png)

然后右键点击模型，选择平滑着色，即可完成骨架

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHHCgGtSiaTtdlR2xKicMzJiaDLjdC5OOHxkDaUGXGSCY1PtnEAgPezFkhw/640?wx_fmt=png)

现在开始添加骨架上的原子，首先添加粒子系统，在右侧点击加号后，选择点击毛发

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHibKSVTAp5WZ25zJCppy183enniap5bNEU6OGC4l4Y08FCMTJdGmCmNKg/640?wx_fmt=png)

之后按 Shift+A 添加一个【经纬球体】，按 G，然后按 X 将球体沿着 X 轴移走（我们想添加一个球体并将球体附着在骨架节点上作为原子）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHCfKvcmqQrwJ8ofEg75reiahmGWofEibDbk85BYPzX28P9Ckzzl8VRkFw/640?wx_fmt=png)

再回到粒子修改器设置部分，注意必须选择整个框架，而不是选择球体，在源中将发射源设置为顶点，勾选使用修改器堆栈，并取消勾选随机顺序，并在渲染里面将渲染为选项设置成物体，最后将实例物体选择为球体，具体可参考下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHOdgibWMjF5GrHsPQkFBHy0HY93ianh9OqxkH8Yx1I83ooUoicp0dmzQ5w/640?wx_fmt=png)

此时，部分骨架交点可能有多个原子，只需要在修改器中调整粒子设置的位置到线框之前即可，我们的石墨烯就建好了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHjTCIzk0GXib0N4mBk4Dstmv60tOSNwiaNovRyKWkiaqohxMTRBfdqAvzA/640?wx_fmt=png)

在此基础，Shift+A 添加一个【贝塞尔圆】，注意是贝塞尔圆，而非网格里面的圆环

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHh26jh9Luoq4BbB6J3hxOYiaiaCkia10TibNFbiaYFTK5HwRFm1vPzGWIMWQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHZvQse0aicUl82LNC17FWbODF9TISoK7LxWIJDicl83G9giaBBnFVL8D1w/640?wx_fmt=png)

按 R，按 X，然后输入 90，按 Enter，将其绕 X 轴旋转 90°

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHj30xeDNSJVweuKXdfJJLtfto8c30B58nZ6AacWboORaabbHnDvgk3g/640?wx_fmt=png)

此时，点击石墨烯骨架（一定要旋转骨架之后再添加），添加【曲线修改器】，在曲线物体选项中选择贝塞尔圆。效果见下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHorAHL6xqrRYxzZqvUtYHyEQUgzXzZCIDdOPJuwsRPicxKEqVxrhQleQ/640?wx_fmt=png)

此刻点击贝塞尔圆环（注意不要选择骨架，去选择贝塞尔圆环）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHSQib65EsPFafHG4s1e9tsoyYkEyDjuOyfRcAPvP7dHicEcDGJfh22ia5g/640?wx_fmt=png)

按快捷键 S，对贝塞尔圆环进行缩放，大概是选择 3.312 倍，只要圆环首位相接即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHFdFTy8Qn0TqjLDxFofpbjevxUUx5LhpRr3tQ7picbg4lkcf2s5ZaK6A/640?wx_fmt=png)

此时选择 CNT 骨架，一定要选择骨架而非贝塞尔圆环，将曲线修改器移动到粒子设置前面，同时可以添加一个【焊接修改器】，将其距离设置为 0.1 m 使模型更加完美

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHxedwl0OG4jQZNKESr6A5jW0V4AUdC6mA6uOpALQuFzAxOZVLjB8lvg/640?wx_fmt=png)

同时对球体进行平滑着色

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHQ8bHYibDWCcrQ1tqYQnWelg3Ev2pOn9rmoVJpyGA5ibdd5ibP4icJDwOzQ/640?wx_fmt=png)

**2 材质添加**

再在右上角的小漏斗图标将下图所示的图标进行勾选

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHOB2Qds3IRjbYXJhyM70ALhEFBLxA8aAVUQkcHLAhibA8fja7qRXmflA/640?wx_fmt=png)

然后在右上角，将球体的眼睛和照相机图标关掉，表示其视图和渲染不可见（注意一定是把球体，而不要把圆环的眼睛和照相机图标关了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHanf5ZHialhaRrHp9ict5ISS9OSvQF3nqMXJQ9Ba0KgZq9dSBXTDM6Caw/640?wx_fmt=png)

按快捷键 Z 进入材质预览模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHa5SVOxJRUXkiaJd6ONeLEribMEyb8WPHibjtGOEbMhuxibK962SOdkBwoQ/640?wx_fmt=png)

然后取消勾选场景世界

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHp8Y38FsOlTLQBuZ8cBwxgM3y8Zp0EOCV1vCk4jVXrURk8d1HRia8ZSA/640?wx_fmt=png)

选择球体，然后选择右下角的红色小地球图标，再按下图所示，点加号，点击新建添加的材质，在基础色选择自己喜欢的颜色，可以调高金属度调高原子的金属感（随意选择）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH5ic2qpRDMH6FRsS3tP9iafdh1HdFhukGSxZm4my7egGf9U4CwVhtHyKQ/640?wx_fmt=png)

同样选择骨架，添加新材质

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHZjKq8l9t7khELbBLM5fh4x7PHddWtXic6rOP2UNZR7wcRvKzGHOffgg/640?wx_fmt=png)

选择自己喜欢的颜色，然后调整差不多的金属度，同时大家可以自己试试次表面颜色和粗糙度。我们的模型和材质就彻底完成了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH76icL1fFVic6Aa6niazmicfyibJjnicBUUTL88n6k2aicFc88erR4tmB8cmDQ/640?wx_fmt=png)

**3 渲染设置**

选择右下角小电视图标，进行渲染设置，将渲染引擎勾选为 Cycles，设备选择为 GPU（没有也无所谓用 CPU 即可），降噪随便设置，推荐为 OpenImageDenoise

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHQwZn4ibqOribjLRAWrIaIRiciaI1ibPxRDU9764LBpE5JOuGKm2RjlBlT3A/640?wx_fmt=png)

同时很关键的一步，要在胶片里面勾选透明，这时候渲染出来的图片就为无背景的了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHZdCymuL0I9JzNu8LkhTSC3DU9qBH8Ogq02rpSDy1qbQdA3frbep5icg/640?wx_fmt=png)

然后 Shift+A 添加一个【日光】，然后按 G，Z 移动合适的距离

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHoNqbInM0eBH8xTfdFUOy0KQ1y4k7UZS0THCx8ibUv9krISL8iaeWDiaww/640?wx_fmt=png)

选择右下角小绿灯泡，将强度设置为 10，然后取消勾选投射阴影（将不会产生阴影）如果觉得暗可以自己调高亮度或者再添加其它的灯光

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHXnGufQ2n500ia7ZQJZ3l9ef0wZTG2T8ko42iaTXD5ssTIFqX52wTRmiaA/640?wx_fmt=png)

最后 Shift+A 添加一个【摄像机】

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHlhtmicP7Z24jm67EH21HBDX2XnvA2XBp7EyTJ34Zf1l7dibBYvibTXibLg/640?wx_fmt=png)

有小键盘的朋友可以按 Ctrl+Alt+0（小键盘上的 0），将当前视图设置为摄像机，如果大家使用的是笔记本，可以按下图操作

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHjI4UUfibqSIkD4oF83dG32Mx2O2OwrBax1GbsIqJhfXlricnCLHCXa0Q/640?wx_fmt=png)

此时点击右边的隐藏小箭头打开二级菜单或者按 N 可以弹出二级菜单

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHeIazrChCnAaV8ChGAiaA78ibHpgw3uLhhLGj966icSflfBxGkPJv0YZTQ/640?wx_fmt=png)

选择视图界面，勾选锁定相机到视图方位

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHVky1ib8lHRWA239ia6vhMkVwHzp4nwicIzBHKkOBQQ9ib9VfIcF7DlBd0Q/640?wx_fmt=png)

然后就可以滚动滚轮和 Shift 来调整自己想渲染的角度了

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHiaMYftespyczRLr7TSalJyQ0aibYlw851xHzISLnbzxXWulfAzhQF8sw/640?wx_fmt=png)

最后按 F12，进行渲染输出

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UHichXMI6CBUvOTqRsAnuzoGOHETtwzRa4cUSdW1tR0Lohw1jzw6466zQ/640?wx_fmt=png)

进行保存既可，导入 PPT 或者 PS 即可，可以自行调整对比度饱和度及亮度

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NCiaibuKIIhchMnSG1Oz69UH1eag3s5XnTm4MjN12MGicfib06us3Yiapn8NdumDEpiasHFicQbAWB9QUog/640?wx_fmt=png)

 ![](http://wx.qlogo.cn/finderhead/bVy2VQVTWzYP3iahtZlcz4NGUNWeMViaLhADhafAZnCgXopVW1ZNd0VQ/0)
 **志志朋**

【Blender 科研绘图】案例 4-CNT - 碳纳米管 #Blender 科研绘图

视频号 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484199&idx=1&sn=036d744caafe645f51b9f37bd0caa049&chksm=cf1848f3f86fc1e592ff4479f5de23efaad694b1a9e968a70cdd0127db8eae78f4635c99f196&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484199&idx=1&sn=036d744caafe645f51b9f37bd0caa049&chksm=cf1848f3f86fc1e592ff4479f5de23efaad694b1a9e968a70cdd0127db8eae78f4635c99f196&scene=178&cur_album_id=1752875309680377865#rd)
