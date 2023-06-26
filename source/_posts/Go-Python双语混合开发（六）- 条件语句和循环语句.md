---
title: Go+Python双语混合开发（六）- 条件语句和循环语句
date: 2023-06-22 11:35:51
tags: 
  - Go
  - Python
  - Go+Python双语混合开发
categories: 
  - Python
  - GO
  - Go+Python双语混合开发
cover: ../img/logo/Go+Python.jpg	
---

# 基本语法

## if条件控制语句

**Go**

```go
if 条件 {
    满足条件
} else {
    不满足条件
}
```

**Python**

```python
if
```

```go
	// if statement; condition
	if num := 11; num % 2 == 0 {
		fmt.Println("偶数")
	}else{
		fmt.Println(num)
	}
	//fmt.Println(num) num变量作用域仅存在于if条件语句范围内
```

## 循环

### for循环

**Go** 
