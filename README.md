# 图片、PDF预览插件


## 第一步
`npm i @bestime/file-viewer`

## 第二步
将静态资源：`node_modules/@bestime/file-viewer/dist/static/`复制到你的项目中，并注册静态资源访问的相对路径，以 `/` 结尾
```ts
import { install } from "@bestime/file-viewer"
// 如果不注册，会导致PDF依赖的脚本无法正确找到
install("./public/static/")
```
## 使用
```ts
// 导入插件
import FileViewer from '@bestime/file-viewer'

// 实例化插件
const iFileCcontroller = new FileViewer({
  outline: true,
  mount: document.getElementById('source-room'), // 挂在至容器，需要给它设定宽高
})

// 设置文件列表（会覆盖之前的数据）
controller.setData([
  {
    url: 'https://www.demo.com/static/1.pdf',
    type: 'pdf'
  },
  {
    url: 'https://www.demo.com/static/2.png',
    type: 'image'
  },
  {
    url: 'https://www.demo.com/static/3.png',
    type: 'image'
  },
  {
    url: 'https://www.demo.com/static/4.png',
    type: 'image'
  },
])

// 通过索引预览一个资源
controller.setIndex(0)
```