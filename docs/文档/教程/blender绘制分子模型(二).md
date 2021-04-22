
![效果图](https://static01.imgkr.com/temp/6061ffeda3e44b49b6fc4f3821a60959.png)

**效果图**

[上篇文章](https://adwizardjk.art/blender-chem/) 写了如何利用openbabel手动生成分子3d模型，原博主写了一个python程序可以自动生成模型，下面是纯新手向的教程。

### [](https://adwizardjk.art/blender-chem2/#安装 "安装")安装

建议使用conda,安装包可以去各大镜像站下载，速度快。这里使用的是[北外源](https://adwizardjk.art/blender-chem2/Right) 安装包列表拉到最下面按系统选择最新的即可，若觉得anaconda过于臃肿可以使用[miniconda](https://mirrors.bfsu.edu.cn/anaconda/miniconda/) 。windows下安装较为简单，勾选同意协议后什么都不用动一路下一步即可。linux下cd到下载目录然后运行

bash

```
bash Anaconda3-xx.xx.x-Linux-x86_64.sh
```

然后出现引导，是否同意协议，确认安装目录之类的一路Enter即可，唯一需要注意的是安装目录待会用得到。

### [](https://adwizardjk.art/blender-chem2/#配置 "配置")配置

配置主要为配置`.condarc`下载快一点，linux需要配置用户环境变量。

#### [](https://adwizardjk.art/blender-chem2/#windows "windows")windows

打开`Anaconda prompt` 运行:

bash

```
conda config --set show_channel_urls yes
```

在用户目录%USERPROFILE%下会生成一个`.condarc`文件，打开文件写入北外镜像的配置:

yaml

```
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/main
  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/r
  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.bfsu.edu.cn/anaconda/cloud
  msys2: https://mirrors.bfsu.edu.cn/anaconda/cloud
  bioconda: https://mirrors.bfsu.edu.cn/anaconda/cloud
  menpo: https://mirrors.bfsu.edu.cn/anaconda/cloud
  pytorch: https://mirrors.bfsu.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.bfsu.edu.cn/anaconda/cloud
```

#### [](https://adwizardjk.art/blender-chem2/#linux "linux")linux

`.condarc`直接用echo vim之类的写入即可，需要配置一下用户环境变量。在.bashrc .zshrc或者你使用的其他sh配置文件中写入一行：

bash

```
source /opt/anaconda/etc/profile.d/conda.sh
```

`conda.sh`的位置取决于安装的位置，默认为`～/anaconda3/etc/profile.d/conda.sh`我使用的是archlinux,[ArchlinuxCN](https://www.archlinuxcn.org/) 打包了anaconda,安装位置为opt/anaconda/ 将其替换为你的用户目录即可，然后`source`一下：

现在就可以在终端中使用`conda`命令了

### [](https://adwizardjk.art/blender-chem2/#使用 "使用")使用

下面的操作windows用户在`anaconda prompt`,linux用户在终端操作即可。

bash

```

conda create -n blender python=3.6


conda activate blender


conda install -c openbabel openbabel


pip install blender-chemicals


blender-chemicals c1ccccc1
```

此时应该自动打开了blender并且已经根据SMI生成了一个苯环的分子模型，以后使用只要`conda activate blender`然后输入`blender-chemicals <smi-string>`(或mol cif)即可。

### [](https://adwizardjk.art/blender-chem2/#作者github "作者github")作者github

[patrickfuller/blender-chemicals](https://github.com/patrickfuller/blender-chemicals)

 _文章作者:_ [金葵](https://adwizardjk.art/about)

 _文章链接:_ [http://adwizardjk.art/blender-chem/](http://adwizardjk.art/blender-chem/)

 _版权声明:_ 本博客所有文章除特別声明外，均采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 许可协议。转载请注明来源 [金葵](https://adwizardjk.art/about) !