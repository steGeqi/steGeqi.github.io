var posts=["2023/05/23/ChatGLM-6B模型部署/","2024/01/29/ES6语法初探/","2023/06/21/Linux - Ubuntu系统换国内源/","2023/08/07/Linux - 人生苦短，我用Vim【最受欢迎的编辑器】/","2024/02/08/《向前》 我的2023年终总结回顾/","2023/07/19/一文搞懂Nginx/","2023/05/19/hello-world/","2023/08/02/代码随想录-数组/","2023/08/15/别畏难，先干起来再说！/","2024/01/15/微信小程序开发/","2023/10/10/生物信息学-分子进化与系统发育/","2024/01/15/微信小程序开发问题汇总/","2023/09/25/生物信息学-复习题库-选择题/","2023/09/24/生物信息学-合成生物学/","2023/07/16/生物信息学-序列比对原理/","2023/10/05/生物信息学-新一代测序技术及其应用/","2023/06/22/生物信息学-生物信息学的概念和发展历史/","2023/10/05/生物信息学-生物信息学编程基础/","2023/07/01/生物信息学-生物学数据库及其检索/","2023/10/11/生物信息学-统计学习与推理/","2023/08/01/生物信息学-真核生物基因组的注释/","2023/09/14/生物信息学-蛋白质组学/","2023/07/22/生物信息学-蛋白质结构预测分析/","2023/08/19/生物信息学-转录组学/","2023/09/03/生物信息学-非编码RNA/","2023/06/22/计算机组成原理-指令系统/","2023/06/21/计算机组成原理-计算机系统概述/","2023/12/04/计算机网络（三）数据链路层/","2023/11/05/计算机网络（二）物理层/","2023/10/28/计算机网络（一）计算机网络体系结构/","2023/11/12/计算机网络（六）应用层/","2023/11/28/计算机网络（五）传输层/","2023/12/04/计算机网络（四）网络层/","2024/03/02/Golang-标准库/","2024/03/02/Golang-Gin详解/","2024/03/01/Golang-基础/","2024/03/06/Docker常用命令/","2024/03/06/Gorm-快速入门/","2024/03/06/Gorm-事务和Hook/","2024/03/06/Gorm-增删改查/","2024/03/06/Gorm-高级查询/","2024/03/07/Docker（二）Docker部署/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };