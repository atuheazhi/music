<template>
    <div>
        <div class="hotopct">
            <img src="../assets/hot_music_bg_2x.jpg" alt="">
            <span></span>
            <p>更新日期：01月08日</p>
        </div>
        <Musicltem :newMusiclist="newMusiclist"></Musicltem>
    </div>
</template>
<script>
import Musicltem from '../components/Musicltem'
export default {
    name:'notsong',
    components:{
       Musicltem
    },
    data(){
        return{
            newMusiclist:[]
        }
    },
    beforeRouteEnter(to,form,next){
        next(vm=>{
             vm.$http.get('/personalized/newsong?limit=20').then(data=>{
             vm.newMusiclist = data.data.result;
             // console.log(vm.newMusiclist)
             });
        });
    }
}
</script>
<style lang="less" scoped>
.hotopct{
    width: 100%;
    position: relative;
    img{
        width: 100%;
    }
    span{
        width: 142px;
        height: 67px;
        display: block;
        background-position: -24px -30px;
        background-image: url(../assets/index_icon_2x.png);
        background-size: 166px 97px;
        position: absolute;
        top: 40px;
        left: 28px;
    }
    p{
        position: absolute;
        color: #fff;
        font-size: 12px;
        bottom: 20px;
        left: 28px;
    }
}
</style>