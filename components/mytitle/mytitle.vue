<template>
	<view class="text-center">
		<text>{{title}}</text>
		<br>
		<text>{{username()}}</text>
	</view>
</template>

<script>
	import {mapState} from "vuex";
	export default {
		name:"mytitle",
		props:["title"],
		data() {
			return {
				count:0,
				...mapState({
					username:state=>state.profile.username,
					pwd:state=>state.profile.pwd
				})
			};
		},
		
	}
</script>

<style lang="scss">
.text-center{
	text-align: center;
	font-weight: 750;
}
</style>