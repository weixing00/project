<template>
	<section class="car-type">
		<ul v-for="(item, index) in markList" :key="index">
            <p>{{item.GroupName}}</p>
            <li v-for="(value, key) in item.GroupList" :key="key">
                <img :src="value.CoverPhoto">
                <div>
                    <p>{{value.AliasName}}</p>
                    <p>{{value.DealerPrice}}</p>
                </div>
            </li>
        </ul>
	</section>
</template>
<script>
	import {mapState} from 'vuex';
	export default {
		computed:{
			...mapState({
				// brandId:state=>state.index.brandId,
				markList:state=>state.index.markList
			})
		}
	}
</script>
<style scoped lang="scss">
	.car-type{
		position: fixed;
		top: 0;
		right: 0;
		width: 0;
		/* width: 75%; */
		transition: all .2s ease;
		background: #fff;
		z-index: 100;
		height: 100%;
		box-shadow: 0 0 0.5rem #eee;
		overflow-y: scroll;
	}
	.car-type ul {
    margin-left: .1rem;
}
	.car-type>ul>p {
    margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
}
.car-type li {
    height: 1.4rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    display: flex;
}
.car-type li img {
    margin: 0 .1rem 0 .2rem;
    width: 1.8rem;
    height: 1.2rem;
}
.car-type li div p:first-child {
    font-size: .34rem;
    color: #5f687a;
}
.car-type li div p:nth-child(2) {
    margin-top: .1rem;
    font-size: .28rem;
    color: red;
}
</style>