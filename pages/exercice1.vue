<template>

  <article>
    <section>
      <h1>Exercice 1</h1>
      <div>
        <!--<img src="~/static/imgs/pic1.jpg"> -->

      </div>
      <div>
        <ul>
          <li v-for="article in articles" class="item" :key="article.id">
            <nuxt-link :to="'/exercice1#'">{{ article.title }}</nuxt-link>

            <div v-for="p in article.body" class="text" :key="p">
              <p :class="p.text_class">{{ p.text }} </p>
            </div>
            <img :class="article.img_class" :src="article.img">
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
 import axios from 'axios'

  export default {
    async asyncData () {
      const {data} = await axios.get(process.env.baseURL +'/exo1.json').catch(e => console.log(e))
      return {articles:data}
    }
  }
</script>

<style>
li {
  list-style: none;
}

.big {
  width: 800px;
}

.small {
  width: 400px;
}
</style>
