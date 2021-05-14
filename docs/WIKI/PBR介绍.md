Metal-Roughness流程/Specular-Glossiness流程

通过上面的介绍，我们可以只知道，在真实的生活中，视觉效果的呈现，主要取决于

1.自然光照下，物体呈现的颜色；

2.物体表面对光线的镜面反射角度；

3.物体表面对光线镜面反射和漫反射的比例；

在Metal-Rougnness流程中，分别对应BaseColor，Roughness，Metallic这三个参数；

在Metal-Roughness流程中，只要按照流程，分别设置好BaseColor，Roughness，Metallic，就可以基本确定物体材质的视觉效果；

在Specular-Glossiness流程中，参数发生了变化，分别为Diffuse，Glossiness，Specular三个参数；

在Specular-Glossiness流程中，Diffuse和Specular共同决定了物体的basecolor，和表面镜面反射和漫反射的比例，与第一种流程的区别在于，此流程直接指定确定的占比值，第一种是根据Metallic属性，自动匹配相应的占比值；

最右侧三张贴图 AO，normal，height都是为了增加材质贴图的细节，使得其看起来更真实。

AO贴图会根据模型某一部分相对于其他组成部分或者其他模型之间的几何距离，模拟模型的光影效果，比如一些夹角会更暗或者更亮，某一些面因为其他模型部分的影响，可能光照更少。

normal贴图会根据光照环境，优化模型表面的光影效果，比如一些凸起凹陷等细节；

height贴图会给模型本身根据实际需要增加凸起或者凹陷的几何效果。比如木质模型，某处被敲打而导致的凹陷效果。

  
![](https://upload-images.jianshu.io/upload_images/1981099-1efecdcafef0db07.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
[对Physically Based Rendering PBR原理的理解 - 简书](https://www.jianshu.com/p/36f61d19891b)

AO是来描绘物体和物体相交或靠近的时候遮挡周围漫反射光线的效果，可以解决或改善漏光、飘和阴影不实等问题，解决或改善场景中缝隙、褶皱与墙角、角线以及细小物体等的表现不清晰问题，综合改善细节尤其是暗部阴影，增强空间的层次感、真实感，同时加强和改善画面明暗对比，增强画面的艺术性。
[环境光遮蔽_百度百科](https://baike.baidu.com/item/%E7%8E%AF%E5%A2%83%E5%85%89%E9%81%AE%E8%94%BD/8818208?fr=aladdin&fromtitle=Ambient%20Occlusion&fromid=6216032)