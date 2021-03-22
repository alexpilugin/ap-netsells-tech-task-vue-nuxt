<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
/* 
  I live this page / route intentionally since
  I used this page for testing layouts with background 
*/
export default {
  name: 'Inspire',
  layout: 'form',
  transition: 'page',
  head() {
    return {
      title: 'Inspire',
      meta: [
        {
          hid: 'Netsells: Inspire page',
          name: 'Inspire page',
          content: 'Inspire page - Netsells',
        },
      ],
    }
  },
}
</script>
