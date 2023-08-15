---
title: 一文搞懂Nginx
date: 2023-07-19 21:26:27
tags:
  - 运维
  - Nginx
categories: 
  - 运维
  - Nginx
cover: https://img0.baidu.com/it/u=3077560467,581170262&fm=253&fmt=auto&app=138&f=JPEG?w=1099&h=500
---

> 偶然看到几个Nginx视频，感觉讲的还可以，基础入门的话足够，特此整理下笔记，附上视频链接 [B站GeekHour](https://www.bilibili.com/video/BV1mz4y1n7PQ?p=1&vd_source=9fa45d38b63739759da2d8d32a65ec93)

# 一、Nginx 简介

* 目前最流行的web服务器

  ![image-20230719114236584](https://cdn.jsdelivr.net/gh/steGeqi/blog-image/nginx/202307191142701.png)

* 俄罗斯程序员Igor Sysoev开发，为了解决并发连接问题。

# 二、Nginx安装及基础操作

## 2.1安装

### 方式一、包管理器

Linux：

```shell
sudo apt update
sudo apt install nginx

nginx -V #查看nginx的信息
nginx -t #查看nginx的安装位置
```

> nginx的常见安装位置：
>
> * /etc/nginx   ubuntu系统
> * /usr/local/etc/nginx
> * /opt/homebrew/etc/nginx

Moc：

```shell
brew install nginx
```

Windows:

```shell
scoop install nginx
choco install nginx
```

![image-20230719114310217](https://cdn.jsdelivr.net/gh/steGeqi/blog-image/nginx/202307191143562.png)

### 方式二、编译安装

![image-20230719114328795](https://cdn.jsdelivr.net/gh/steGeqi/blog-image/nginx/202307191143356.png)

### 方式三、Docker

```shell
docker pull nginx
docker run -d -p 9090:80 --name nginx nginx
```

![image-20230721150103465](https://cdn.jsdelivr.net/gh/steGeqi/blog-image/nginx/202307211501156.png)

> 可先搜所相关镜像，挂载时建议将 nginx.conf 等配置文件同步在宿主机上，便于修改。
>
> 示例：
>
> 1. 在宿主机上创建 /data/nginx 目录用来挂载nginx数据，在该目录下创建其他三个路径,如下：
>
> ```shell
> mkdir www  # 挂载web文件
> mkdir logs # 挂载日志文件
> mkdir conf # 挂载配置文件
> ```
>
> 2. 将nginx的配置文件cp到宿主机
>
> ```shell
> docker cp ID:/etc/nginx/nginx.conf /data/nginx/conf
> ```
>
> **记得修改nginx.conf的权限**
>
> 3. 删除之前的容器，并进行数据挂载
>
> ```shell
> docker run -d --name nginx -p 9090:80 
> -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf 
> -v /data/nginx/www/:/usr/share/nginx/html 
> -v /data/nginx/logs:/var/log/nginx nginx
> ```

由于笔者对于nginx的使用场景，基本都在于项目部署，因此基本操作都在Linux环境下，后续的举例在Linux中的操作。

## 2.2 服务启动/停止

### 启动

+ linux环境下启动nginx,只需要在终端中输入nginx即可启动，无提示即为启动成功。

```shell
nginx
```

> Nginx 的进程模型
>
> 主要有两类进程
>
> 1. master 主进程  只有一个 主要负责读取和验证配置文件
>
> 2.  worker 进程可以有很多个，负责处理实际的请求。
>
>    ![image-20230721144347254](https://cdn.jsdelivr.net/gh/steGeqi/blog-image/nginx/202307211443253.png)

* 也可以通过查看nginx进程没判断是否启动成功  

```shell
ps -ef|grep nginx
```

* 通过查看端口

```shell
lsof -i:80
```

通过PID判断进程是否为nginx的进程。

### 停止

```shell
nginx -s 
	# quite		优雅停止
	# stop		立即停止
	# reload	重载配置文件
	# reopen	重新打开日志文件
```

## 三、Nginx 配置文件

> nginx配置文件为 nginx.conf,在nginx安装目录下。
>
> 可以通过 Vim 编辑器来修改内容。

* 检查配置文件有无错误

```shell
nginx -t # 检查配置文件
nginx -s reload  # 重新加载配置文件
```

每次更改配置文件之后都需要重新启动

###  配置文件结构

#### 全局块

> 全局块是配置⽂件的第⼀个块，也是配置⽂件的主体部分，主要⽤来设置⼀些影响Nginx服务 器整体运⾏的配置指令，主要包括配置运⾏Nginx服务器的⽤户（组）、允许⽣成的worker process数、进程PID存放路径、⽇志存放路径和类型以及配置⽂件引⼊等。
>
> 全局块包括 使用者、工作进程数量（work_processes）等

##### work_processes 工作进程 

一般work_processes数量与CPU内核数量相同，也可以修改为auto这压根

### events 块

> 网络连接的一些配置，比如每个work进程可以接收多少网络连接、网络IO模型等。

### http块

> 修改最频繁的情况，虚拟主机、反向代理、负载均衡等都在此处配置。包含若干个server块。



### 
