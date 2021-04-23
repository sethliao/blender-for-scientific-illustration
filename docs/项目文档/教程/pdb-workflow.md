# 原子类
[Avogadro](https://avogadro.cc/)
- 输入英文生成3D原子
![[Pasted image 20210319213059.png]]
[ Atomic Blender (PDB/XYZ)](https://docs.blender.org/manual/en/2.92/addons/import_export/mesh_atomic.html)
- 导入blender
![[Pasted image 20210319213418.png]]
# 蛋白质类
[PDB模型下载](https://www.rcsb.org/)
- 蛋白质，核酸和复杂装配体3D形状的档案信息
![[Pasted image 20210319213158.png]]
[VMD](https://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=VMD)
- VMD是一种分子可视化程序，用于使用3-D图形和内置脚本显示，设置动画和分析大型生物分子系统
![[Pasted image 20210319213258.png]]
[BlendMol](https://durrantlab.pitt.edu/blendmol/)
- BlendMol是一个Blender插件，可以轻松导入VMD“可视化状态”文件。
- ![[Pasted image 20210319213314.png]]




pdb-workflow.md
```
pandoc -o pdb-workflow.docx pdb-workflow.md
```


```
for i in *.html ; do echo "$i" && pandoc -s $i -o $i.md ; done
```

FILES=*.html
for f in $FILES
do
  # extension="${f##*.}"
  filename="${f%.*}"
  echo "Converting $f to $filename.md"
  `pandoc $f -t rst -o $filename.md`
  # uncomment this line to delete the source file.
  # rm $f
done