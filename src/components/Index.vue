<template>
    <div class="index">
        <div class="wrap">
            <section>
                <div v-for="(item, index) in brand" :key="index">
                    <ul>
                        <p :id="index">{{index}}</p>
                        <li v-for="(value, key) in item" :key="key" @click="getIdList(value.MasterID)">
                            <img :src="value.CoverPhoto">
                            <span>{{value.Name}}</span>    
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <section v-show="isshow" class="letter">
            <span>{{brandWord}}</span>
        </section>
        <aside @touchstart="touchStart"
               @touchmove="touchMove"
               @touchend="touchEnd">
            <span v-for="(item, index) in letters" :key="index">{{item}}</span>    
        </aside>
       <MarkList></MarkList>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';
    import MarkList from './common/markList'
    export default {
        computed: {
            ...mapState({
                letters: state=>state.index.letters,
                brand: state=>state.index.brand,
                brandWord:state=>state.index.brandWord,
                isshow:state=>state.index.isshow
            })
        },
        components:{
            MarkList
        },
        methods: {
            ...mapActions({
                initState: 'index/initState',
                getIdList:'index/getIdList'
            }),
            ...mapMutations({
                showSection:"index/showSection",
                showBrandword:"index/showBrandword"
            }),
            touchStart(e){
                this.showSection(true);
                let letter = e.target.innerHTML
                this.showBrandword(letter)
            },
            touchMove(e){       
                let pageY = e.touches[0].pageY;
                console.log(pageY)
                let index = Math.floor((pageY-this.marginTop)/this.height);
                console.log(index)
                if (index < 0){
                    index = 0;
                }else if(index > this.letters.length-1){
                    index = this.letters.length - 1;
                }              
                let ele = document.getElementById(this.letters[index]);
                console.log(ele.innerHTML)
                let top = ele.offsetTop;
                document.querySelector('.wrap').scrollTop = top;
                this.showBrandword(ele.innerHTML)

            },
            touchEnd(){
                 this.showSection(false)
            }
        },   
        mounted() {
            this.initState();
        },
        updated() {
            // 获取每个字母的高度
            this.height = 0.4*window.innerWidth/750*100;
            // 获取字母列表距离顶部的高度
            this.marginTop = (window.innerHeight - (this.letters.length)*this.height)/2;
        },
    }
</script>
<style scoped lang="scss">
    .index{
        height: 100%;
    }
    .wrap{
        height: 100%;
        overflow: scroll;
    }
    aside{
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
            height: 0.4rem;
            box-sizing: border-box;
        }
    }
    ul{
        p{
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li{
            margin: 0 .3rem;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img{
            height: .8rem;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
    .letter{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: .1rem;
        background: rgba(0,0,0,1);
        color: #fff;
        text-align: center;
        line-height: 1.4rem;
        font-size: .8rem;
    }
</style>