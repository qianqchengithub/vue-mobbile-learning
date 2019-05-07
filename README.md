# 这是一个移动端的网页学习项目

## 实现 App.vue 组件中的功能

1. 顶部 Header 使用的是 MintUI 中的Header
2. 底部 Topbar 使用的是 Mui 中的 Topbar.html
3. 修改顶部的导航为 router-link 
4. 底部图标高亮通过添加路由 linkActiveClass 为 mui-active

## 实现 HomeContainer.vue 的功能

1. 使用 MintUI 的 Swipe 组件实现轮播图效果
2. 实现 ajax 从服务器获取最新图片的json数据，然后解析渲染
3. 轮播图的图片是一个链接点击可以访问
4. 改造九宫格的样式，取消默认的背景颜色和边线

## 实现了 NewsContainer.vue, VueDetail.vue 的功能以及 抽象了 Comment 评论组件

1. NewsContainer 分页从服务器获取数据，然后渲染为一个列表
2. 在点击了新闻的时候通过路由将新闻的id传输给 NewsDetail.vue 这个组件来加载新闻详细以及新闻的评论
3. 存在的 BUG NewsContainer 进入新闻详细的时候 底部的加载更多按钮会宽度变化
4. 添加自己的评论的几楼显示不正确