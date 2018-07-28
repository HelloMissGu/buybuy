<template>
    <div class="index">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(itemSon, i) in item.subcates" :key="itemSon.id">
                                                {{itemSon.title}}&nbsp;
                                            </span>
                                         
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">手机数码</a>
                                            </dt>
                                            <dd>
                                                <a v-for="(itemSon, i) in item.subcates" :key="itemSon.id" href="/goods/43.html">{{itemSon.title}}</a>
                                              
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
        
                            </ul>
                        </div>
                    </div>
                    <!--轮播图-->
                    <div class="left-705">
                         <el-carousel height="341px" indicator-position="outside">
                            <el-carousel-item v-for="item in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | cutTime}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in goodlist" :key="item.level1cateid">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a href="/goods/43.html" v-for="(subItem, i) in item.level2catelist" :key="subItem.subcateid">{{subItem.subcatetitle}}</a>
                    
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(dataItem, di) in item.datas" :key="dataItem.artID">
                            <!-- <a href="#/site/goodsinfo/87" class=""> -->
                            <router-link :to="'/goodsinfo/'+dataItem.artID">
                                <div class="img-box">
                                    <img v-lazy="dataItem.img_url" data-loading="../assets/statics/img/01.gif">
                                </div>
                                <div class="info">
                                    <h3>{{dataItem.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{dataItem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{dataItem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{dataItem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                            <!-- </a> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    data:function(){
        return{
            catelist:[],
            sliderlist:[],
            toplist:[],
            goodlist:[],
            value:0
        }
    },
  
    beforeMount() {
        this.axios.get(`/site/goods/gettopdata/goods`)
        .then(response=>{
            // console.log(response);
            this.catelist=response.data.message.catelist;
            this.sliderlist=response.data.message.sliderlist;
            this.toplist=response.data.message.toplist;
            // console.log(this);
        })
       .catch(error=>{
           console.log(error);
       });

    //    底部商品列表
       this.axios.get(`/site/goods/getgoodsgroup`)
       .then(response=>{
           console.log(response);
           this.goodlist=response.data.message;
       })
       .catch(error=>{
           console.log(error);
       });
      
    }
}
</script>
<style scoped>
/* .el-carousel{
    height: 431px;
} */
.el-carousel img{
    width: 100%;
    height: 100%;
}
</style>


