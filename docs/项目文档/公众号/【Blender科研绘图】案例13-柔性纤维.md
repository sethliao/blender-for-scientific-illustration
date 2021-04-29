# 【Blender科研绘图】案例13-柔性纤维
**0 前沿**

嘿，朋友们。

这期给大家讲解**柔性**[[纤维结构]] \*\*\*\*

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tLkU25xyPP6NrFeSGbqVyjQzMZsNPtrUsaxjxicvNLIPFUIPBV5dDgRQ/640?wx_fmt=png)

**难度**：⭐⭐（需要知道最基础的知识，已经了解如何移动、旋转、缩放模型）

**[[简单形变]] / [[粒子修改器]]**/ 无背渲染**\*\***/ 曲线 \*\*

你在制作过程中遇到任何问题欢迎加入我们的微信群，进行咨询，我们会及时反馈你的问题，来帮你制备出案例效果~（微信答疑群见底端，欢迎大家分享自己制备的渲染图）  

**1 建模过程**

A 全选，按 X 删除所有物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0ttO2ibWqDn0kbS4LqzaHAyok5EnOibSK5R2ZXCPw69ca6Gyvxtq6T0hZw/640?wx_fmt=png)

Shift+A 添加一个平面

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tw6kH32B53YVv8NI29U5bTKgqZ8H9eZ7AcZfL4iadSrjg39g74uBBYicQ/640?wx_fmt=png)

按 S，按 Y 将平面沿着 Y 轴进行拉伸，之后按 Tab 进入编辑模式，右键-细分-切割次数 20 次

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0togjlurvib9cAGb8UCNj5E80Chu3sx4qzNlRCuDe1oC2gcVCXDeqqZ9w/640?wx_fmt=png)

切割完成之后，**再次**右键细分-一次即可，添加完成之后再按一下 Tab 进入物体模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tGmeXW3sf1dpuOomHVnsaMdyXlzR4FG4vOqIZuicv7Wa69m6KEkohrKA/640?wx_fmt=png)

再给平面添加一个简易形变修改器

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tNniaSWvlBVRRATteQnz61zoFUVnwhqlMPfTdibMUBFuCJAfEEHdF8ypw/640?wx_fmt=png)

Shift+A 添加一个纯轴

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t42EXVQXibbpSDtwAjIeMpmJAyLMzHtAOhnqvjXUqJIHyx0WprqIBINQ/640?wx_fmt=png)

再选择平面，在前面添加的简单形变修改器其中选择弯曲-再选择空物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tibuerZibW40L0VO6TkcywY2RwicE6CDdyibKb2iaWKb97UfRby1xMfBHYrA/640?wx_fmt=png)

这时候再选择空物体（在物体模式下选择空物体）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tHysETmhDGkleR0HicL0ib7nJicqJewA1QpibfYoehgpD9N1Y6Yuxc0W3EQ/640?wx_fmt=png)

按 R，按 X，输入 90，即可得到下面模型，如果你的轴向和我有所不同，你可能需要按 R，按 Y 或者 Z，然后输入 90 也行，自己可以去尝试

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0taavUpicWKiaIHKoZiadicSZQZumRa6QFC0EseV44LE4DE1VRxySEgPxbbQ/640?wx_fmt=png)

按着 Shift 将空物体拖动到平面的子集

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tGR5R4icLL1yJvib3tiaTxEOt0nkYqzibB4O3Xr5fmYAOo58MQ1oKeqFjtg/640?wx_fmt=png)

这时候，再选择平面，按 R，按 X，按 20，旋转一定的角度即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tftIGjJ9DE77TxkDkDF0ZcNicYu2T3PCjy2ta2OYaSSDJSvTb6pfgH1w/640?wx_fmt=png)

将平面暂时隐藏，Shift+A 添加一个贝塞尔曲线

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tzgQ96r8R664qcoIyHrDnXvLR3aU8qIpnicqa31Va7EXovZDicsll0CIg/640?wx_fmt=png)

按 Tab 进入编辑模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tLGnkUTNA4wkictUjc5KsdRQQBHgDxfOePKEHY11icu2gq90FiaSGF6pbQ/640?wx_fmt=png)

右键-细分

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0typ62FmZHD7ibWtZB2fWHWgaubzf1DqzaichosGYicJdBqxRjScwDydYiaw/640?wx_fmt=png)

再次右键-细分

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tPY6yASbomGkylicgG2jOk38xnb0tasVIFSvTEHPRCj9n0UfAZPZKPrA/640?wx_fmt=png)

按 Tab 进入物体模式，按 S，按 X 拖动鼠标沿着 X 轴方向进行放大，也不需要特别太长，自己把握

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tPTiaxXd2VOkuZtgUtUicgsqZF40r3ZE5sTrXmbaFFHl8ZicrUiaQsFY4ibw/640?wx_fmt=png)

Shift+D 将这根贝塞尔曲线进行复制（可以沿着 Y 轴进行复制，但是也不必要）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tEclJb8AcFlpicgsOx1avBAUgGOYGUuoh8SbTw1JcvKFFVh3dGY6oL5A/640?wx_fmt=png)

将这三个贝塞尔曲线选中，按 M 新建一个集合，命名 Fiber

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t8rsgGbpdVjunqdaLGdtiaia8Sibvw16RJjibMvMBwG1siaNPiaiae5pVLUJzw/640?wx_fmt=png)

可以再次选择这三个中的曲线，沿着 X，Y 或者 Z 进行一定角度的旋转，只要让它们不完全一样就行，我这里是选择了中间的纤维，按 R，按 Z，输入 180

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tIuEaECjn0lkBayVr3QQRiaro16rpicvUWXEFOqApib15So3DrjPmFicdiaA/640?wx_fmt=png)

这时候再选择第一根，Ctrl+A 全部变换即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0taGHmSDGJpus5GUnxC4SzPoetTSGIl00nZNGqao7MAoEbeqic54qtHSQ/640?wx_fmt=png)

这之后在给你添加几何数据-深度设置为 0.01，打开封盖

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t4Chu6XnmQIXfCJNTaL0rBxb2EGCVFWuYgUDQslzQ4sDXJWCKeicIXzw/640?wx_fmt=png)

**其他两根也是如此操作**，也是要应用之后再给其添加 0.01 m 的深度

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t18gzm156aodwvynaOQF4UwTTgaB9AXRLIc6J02hUvZ1bicfapMo5FnQ/640?wx_fmt=png)

后面选择平面，添加粒子系统，发射体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tg03mQfjxXbSfWpiaMdibh7Rt6XLWDJkxr1ln0ia46S1wKnMTczaUoQ6OA/640?wx_fmt=png)

设置见下图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tW9nicXC4tbiaValKtHDSH7nANoLMVnq6jX8E8y85WKrjG0sCKuw2V27g/640?wx_fmt=png)

渲染为，集合，实例集合选择 Fiber

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0ty3ZUBOJWeo0k05RdQnIpEQZkYa1GjdLdgwpZu8ib3ia6XKvYicKelwPww/640?wx_fmt=png)

勾选旋转-坐标轴向选择 - 全局 Z，其余设置可以参考下图（**大家可以根据自己的审美来调整这里的选择程度**）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t2SUkXIfa2ibmCvQibyPrIOSBIE7rx1BF3AKfJv8nZlnk6IFf9DHGJIBA/640?wx_fmt=png)

然后分别在渲染和视图显示中将显示发射体关闭

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tJggQDmB4wKL0XCHk2WpnvsT09PNm8b5YGBjQGX0ibBKzLzNicjZ3TUeg/640?wx_fmt=png)

现在发现纤维数目太少了，我们回到上面将其 Number 改多一些，设置为 3000 或者更多（太多电脑可能会大），**注意到这里，其实已经算是结束了，大家可以直接对这个模型还有纤维进行添加材质就好，后面的操作可能会比较涉及比较多的面，不建议笔记本电脑用户使用，但是可以看一下目的是什么**

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tyXW0tAFSOIsErv8zIPOzKWUbImAHiaYCNMauvpT5CNm3hynrS3jHibNA/640?wx_fmt=png)

这里选择粒子设置修改器，将其进行转换，会发现右侧生成了很多物体

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tHeWGCbgdjvYic5q7cJlQZnJLwTkibXsyoRuGNRsEqzSw53lL4DibH9cWA/640?wx_fmt=png)

将平面隐藏，同时框选所有的纤维结构（在左侧进行框选，不要去右侧一个个选）

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tkvibzAr9uRSHaZZ0BpAofHFQyt2J2xZ8tsbypNM8KgUeNNEKYgzfOicA/640?wx_fmt=png)

选中之后选择物体-转换到-网格

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t3CTbnKIqF0mSoSUkficGn78TMHZkvciacvw49ibGOicTQe2VYyGPNV3nXg/640?wx_fmt=png)

物体-合并

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0twU3wmEZhWSoA5icX9YfJoia862S2jEI6WYpQSPGeb0CwvkicsN73Uvqeg/640?wx_fmt=png)

Tab 进入编辑模式

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tlyl36kyNdGDW1SiaDeOyzvHxtG3UiacKqbaxw1uTwQBQoZwOOiaBqO9wg/640?wx_fmt=png)

按‘~’进入顶视图，同时按一下 Alt+Z（或者 Ctrl+Z，不同版本可能不同）进入透视视图

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tdJk02Rb6PVgcsQ6o6oab5xqYuj2icjLnkkiapncJ8R9mjw1ia5vicjXibIw/640?wx_fmt=png)

框选边缘按 X 删除点即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tBSicg06bZgccUYbic1Bbdkw2CSVHVPRPMpYv51Zc6WsTtWhItLQoXAaA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tUYDs6bT0UMPKwD5TcJibn3rG7GcmSNxVaxY4Aj91PUQ5vFzEpKJzP6A/640?wx_fmt=png)

对四周进行修整之后便得到下图，便完成啦

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tOxHdibpppDCxT8iazvvYexkjyYEmvmDmWloQ2ECFu0cMOjslWw8XQ7Uw/640?wx_fmt=png)

**2 材质添加**

随便添加一个材质即可，新来的朋友请参考[4](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tPhmJicaBykNw9JLsI71XIBRItZaIQRWbrIVp865yYRjjZbGfwmzCMkw/640?wx_fmt=png)

添加相机，选好角度，新朋友可以参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tlYUibJF0EmusQswbE17edkk3VC4Io5DIotoSFIILSEJYh2A6A4SFxibA/640?wx_fmt=png)

**3 渲染设置**

将渲染设置为 Cycles-GPU 渲染，打开自适应采样，勾选降噪

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tiaAyFDbtM2spVXBRWm4azsDrCaziabkVp5kOKgU6MYlkvOga9kcc4Yjg/640?wx_fmt=png)

同样在下面勾选透明（新朋友请参考[【Blender 科研绘图】案例 4 - 纳米阵列](http://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484259&idx=1&sn=e5f0ff741c8638b845faeace99855563&chksm=cf1848b7f86fc1a1a874881b152f7ade02ec042a5114197bce84b9b2d9dac2d0abed3bbbd0ed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tUSTF1Nr0JTPQe2PmHmAzesSqUKzXW5B4N59onr87xzxH8dgGagX6XQ/640?wx_fmt=png)

添加环境纹理 HDR，前几期也说过很多次啦，可自行查询

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t8ibCJqQlNagJx74oSOChvaCBnStZUAzicERpoTulknX8IpDXEPy2LhJQ/640?wx_fmt=png)

在 Blender 默认目录找到 HDR 文件，选择即可

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tCOHP5DC8rHotXVQ8icwBdibQHqPI25WGrAD4Y4VwQNcyU3G7YNwvGycg/640?wx_fmt=png)

按 F12 进行渲染

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0t8kkqfqwGU4QS6icxbEOnKnhx3N2Fno0MzfqRWsL7rUD1mlnqrxUZiaZw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tLkU25xyPP6NrFeSGbqVyjQzMZsNPtrUsaxjxicvNLIPFUIPBV5dDgRQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/uicuMum8Zv8NKwn8DQpK3OlwHSM8WPS3Q2zvpBO9wBvnWTAdd1Xx2l1TfJ0nE4MqfezjtW5W0h2Jdf9fCiaDZWdg/640?wx_fmt=png)

同时欢迎关注我们的科研知识分享公众号：萤火科研  

![](https://mmbiz.qpic.cn/mmbiz_jpg/uicuMum8Zv8P82ZtrAWqshLZmqEptHE0tf3EFDpyUSvt9ViaTehwRSKJltGNiahE9boNd9lxicahmr0HnKMRdye9HA/640?wx_fmt=jpeg) 
 [https://mp.weixin.qq.com/s?\_\_biz=Mzg3ODA5MTk2Mw==&mid=2247484702&idx=1&sn=97c5800b9fbc81e7f0f109048480cb27&chksm=cf184ecaf86fc7dc457b110eafbd9cb95229e5d3c6899a99f7557bcb9a5d44ad54a4d38668b2&scene=178&cur_album_id=1752875309680377865#rd](https://mp.weixin.qq.com/s?__biz=Mzg3ODA5MTk2Mw==&mid=2247484702&idx=1&sn=97c5800b9fbc81e7f0f109048480cb27&chksm=cf184ecaf86fc7dc457b110eafbd9cb95229e5d3c6899a99f7557bcb9a5d44ad54a4d38668b2&scene=178&cur_album_id=1752875309680377865#rd)
