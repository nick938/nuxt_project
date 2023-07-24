<script setup lang="ts">
// import { useLocales, useLocale, useLocaleDate } from '../util/locale'
const description = ref('My amazing site.')
const title = 'dfa'
// const counter = useState('counter', () => Math.round(Math.random() * 1000))

const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))

const color = useColor()
const counter = useCounter()
useHead({
  script: [
    {
      src: 'https://third-party-script.com',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose',
    },
  ],
})
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <Meta name="description" :content="description" />
    <NuxtLink to="/about">跳转到/about</NuxtLink>
    Counter:{{ counter }}
    <p>Current color:{{ color }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">_</button>
    <h1>Nuxt birthday</h1>
    <p>{{ date }}</p>
    <label for="locale-chooser">Preview a diffent locale</label>
    <select id="locale-chooser" v-model="locale">
      <option :value="locale" v-for="locale of locales" :key="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>
