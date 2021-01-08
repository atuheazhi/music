<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link v-for="rem in recommendMusiclist" :key="rem.id" to="/" tag="li">
          <div>
             <img :src="rem.picUrl"/>
             <span>{{rem.playCount|formatNum}}</span>
          </div>
          <p>{{rem.name}}</p>
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <Musicltem :newMusiclist="newMusiclist"></Musicltem>
  </div>
</template>

<script>
import Title from '../components/Title'
import Musicltem from '../components/Musicltem'
export default {
  name: 'recommend',
  components: {
      Title,
      Musicltem
  },
  data(){
    return{
      recommendMusiclist:[],
      newMusiclist:[]
    }
  },
  beforeRouteEnter(to,form,next){//路由守卫，在路径进入之前获取数据
    next(vm=>{
      vm.$http.get('/personalized?limit=6').then(data=>{
        vm.recommendMusiclist = data.data.result;
      });
       vm.$http.get('/personalized/newsong?limit=20').then(data=>{
        vm.newMusiclist = data.data.result;
        // console.log(vm.newMusiclist)
      });
    });
  },
  filters:{
    formatNum(value){
      return (value/10000).toFixed(1)+'万'
    }
  }
}
</script>
// <style lang="less" scoped>
.recommendList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 33%;
    div{
      position: relative;
      span{
        position: absolute;
        top: 2px;
        right: 4px;
        color: #fff;
        font-size: 12px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      }
    }
    p{
      font-size: 13px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 2px 2px 0px 0px;
      min-height: 30px;
      line-height: 1.2;
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
}
</style>
