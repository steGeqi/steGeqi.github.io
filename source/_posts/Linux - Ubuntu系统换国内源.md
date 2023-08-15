---
title: Linux基础-Ubuntu系统换国内源
date: 2023-06-21 12:49:27
tags: Linux
categories: Linux
cover: https://pica.zhimg.com/v2-1d1311ab9fed3c3cd044ac758607781a_1440w.jpg?source=172ae18b
---

## Linux分类及软件包管理工具

## Linux分类

**一般来说linux系统基本上分两大类：**

[RedHat](https://juejin.cn/search?query=RedHat&type=0)系列：Redhat、Centos、Fedora等
[Debian](https://juejin.cn/search?query=Debian&type=0)系列：Debian、Ubuntu等

### RedHat 系列

- 常见的安装包格式 rpm包,安装rpm包的命令是“rpm -参数”
- 包管理工具 yum
- 支持tar包

### Debian系列

- 常见的安装包格式 deb包,安装deb包的命令是“dpkg -参数”
- 包管理工具 apt-get
- 支持tar包

### yum

**yum是RedHat系列的高级软件包管理工具**

- 主要功能是更方便的添加/删除/更新RPM包。
- 它能自动解决包的依赖性问题。
- 它能便于管理大量系统的更新问题。

**yum的特点**

- 可以同时配置多个资源库(Repository)
- 简洁的配置文件(/etc/yum.conf)
- 自动解决增加或删除rpm包时遇到的倚赖性问题
- 保持与RPM数据库的一致性

**yum可以用于运作rpm包，例如在CentOS/RedHat系统上对某个软件的管理**

```shell
安装：yum install <package_name>
卸载：yum remove <package_name>
更新：yum update <package_name>
```

### apt-get

**apt-get是Debian系列的高级软件包管理工具**

- 配置文件/etc/apt/sources.list

**apt-get可以用于运作deb包，例如在Ubuntu上对某个软件的管理：**

```shell
安装：apt-get install <package_name>
卸载：apt-get remove <package_name>
更新：apt-get update <package_name>
```

## 什么是源？

源就是 **来源** 。
就是你安装软件时，程序从哪里获取软件包（安装程序在你的机器上，但需要安装的东西却在软件源服务器上）。
可理解为**软件仓库**。

```shell
常见镜像源：

清华大学镜像源： https://mirrors.tuna.tsinghua.edu.cn/

中科大镜像源： https://mirrors.ustc.edu.cn/

网易镜像源： http://mirrors.163.com/

阿里镜像源： https://developer.aliyun.com/mirror/

python pip源

清华大学：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云：http://mirrors.aliyun.com/pypi/simple/

豆瓣：http://pypi.douban.com/simple/

中国科技大学 ：https://pypi.mirrors.ustc.edu.cn/simple/

华中理工大学：http://pypi.hustunique.com/

山东理工大学：http://pypi.sdutlinux.org/
```

## 什么是镜像？

镜像，原意是光学里指的物体在镜面中所成之像。引用到电脑网络上，一个网站的镜像是指对一个网站内容的拷贝。镜像通常用于为相同信息内容提供不同的源，特别是在下载量大的时候提供了一种可靠的网络连接。制作镜像是一种文件同步的过程。“镜像网站”（英文:Mirror sites），又译作““镜像站点” ，亦即把一个互联网上的网站数据“拷贝”到本地服务器，并保持本地服务器数据的同步更新，因此也称为“复制网络站点” 。
镜像源就是把官方的源做一个镜像，可以在这下载软件。

### 为什么要换源？

ubuntu官方源在国外，下载软件可能会很慢，这时候就需要换成国内的镜像源。

## 换源步骤

#### 1. 备份源列表

```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

#### 2.使用vim编辑器打开sources.list文件，进行修改

```shell
sudo vim /etc/apt/sources.list
```

> ```shell
> sudo apt-get install vim
> ```
>
> 安装vim编辑器

#### 3.将源文件内容全部注释，并添加其他源

> vim 编辑器基本操作:
>
> 1. 字母 i 键为插入功能；
> 2. \#为注释符号；
> 3. ESC键 + wq + ! 强制保存退出；

1. 注释源文件

   ![1683865303520.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6934f8b2b0b14ecc82a265a35c2e5c49~tplv-k3u1fbpfcp-watermark.image)

2. 复制清华源，并粘贴在sources.list 中

   ```shell
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal universe
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates universe
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal multiverse
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates multiverse
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security universe
   deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security multiverse
   ```

   

   ![1683865735732.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf21ec905a3a4bbdbf1b133fa3a94132~tplv-k3u1fbpfcp-watermark.image)

3. 保存源文件

#### 4.更新源

```shell
sudo apt-get update
```

