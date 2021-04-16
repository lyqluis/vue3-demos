<template>
	<h1>{{ msg }}</h1>
	<h2>{{ obj }}</h2>
	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank"
			>Vite Documentation</a
		>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
	</p>

	<button @click="state.count++">count is: {{ state.count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script>
	export default {
		// data() {
		// 	return {
		// 		obj: {
    //       'a':1
    //     },
		// 	}
		// },
	}
</script>

<script setup>
	import { defineProps, reactive } from "vue"
  import axios from 'axios'

	defineProps({
		msg: String
	})

	const state = reactive({ count: 0 })
  const obj = reactive({})
  const fetchData = axios.get('https://my-json-server.typicode.com/<your-username>/<your-repo>')
</script>

<style scoped>
	a {
		color: #42b983;
	}
</style>
