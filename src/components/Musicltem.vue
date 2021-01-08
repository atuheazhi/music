<template>
    <ul class="MusicltemList">
      <router-link v-for="ltem in newMusiclist" :key="ltem.id" tag="li" to="/">
         <div class="left">
            <div>{{ltem.name}}</div>
            <p><i></i>{{ltem.song.artists[0].name}}</p>
         </div>
         <div class="right"><span></span></div>
      </router-link>
    </ul>
</template>
<script>
export default {
    name:"Musicltem",
    props:{
        newMusiclist:Array
    }
}
</script>
<style lang="less" scoped>
.MusicltemList{
    li{
        display: flex;
        padding-left: 10px;
        padding-right:10px;
        margin-top: 10px;
        .left{
            flex: 1;
            text-align: left;
            border-bottom:1px solid #ddd;
            p{
                font-size: 12px;
                color: #888;
                i{
                    background-image: url(../assets/index_icon_2x.png);
                    display: inline-block;
                    width: 12px;
                    height: 8px;
                    margin-right: 4px;
                    background-size: 166px 97px;
                }
            }
        }
        .right{
            border-bottom:1px solid #ddd;
            display: flex;
            align-items: center;
            span{
                background-image: url(../assets/index_icon_2x.png);
                display: inline-block;
                width: 22px;
                height: 22px;
                background-size: 166px 97px;
                background-position: -24px 0px;
            }
        }
    }
}
</style>