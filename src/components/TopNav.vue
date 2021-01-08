<template>
    <ul class="topnav">
        <li><router-link  tag="a" to="/">推荐音乐</router-link></li>
        <li><router-link  tag="a" to="/notsong">热歌榜</router-link></li>
        <li><router-link  tag="a" to="/d">搜索</router-link></li>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.topnav{
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    z-index: 2;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    li{
        flex: 1;
        font-size: 15px;
        a{
            color: #000;
            text-decoration: none;
            display: inline-block;
            line-height: 40px;
            font-weight: 400;
            &.router-link-exact-active{
                color: #dd001b;
                border-bottom: 2px solid #dd001b;
            }
        }
    }
}
</style>