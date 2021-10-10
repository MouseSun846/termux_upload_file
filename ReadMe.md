# 说明
## 本项目是基于Android搭建的服务器，实现文件上传
## 手机安装的是termux+ubuntu+mariadb+java,将maven构建后的jar在手机上运行
# 技术栈
## termux+ubuntu+springboot+mariadb+mybatis+vue+elemntui
# 部署
## 需要配置手机的IP地址，使用ifconfig命令进行查看，在前端项目MyUploader-master进行设置src\Global.vue
```
<script>
  const server_config = {
    url: 'http://192.168.31.253:8080'
  };
  export default {
    server_config
  }
</script>


```