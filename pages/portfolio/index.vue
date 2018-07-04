<template>
  <main class="container">
    <div class="content">
      <h1 class="header--portfolio"><span>Portfolio</span><span>Projects</span></h1>

      <portfolio></portfolio>

      <!-- <ul>
        <li v-for="project in projects"><nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}">{{ project.title }}</nuxt-link></li>
      </ul> -->
    </div>
  </main>
</template>

<script>
import portfolio from '@/components/component--portfolio.vue'
import metaInfo from '@/mixins/meta-info.vue'

const projects = {};
const req = require.context('./', false, /\.md$/);
req.keys().forEach((key) => {
  projects[key] = req(key);
});

export default {
  components: {
    portfolio
  },
  
  data() {
    return {
      title: 'Portfolio',
    }
  },

  mixins: [metaInfo],

  meta: {
    depth: 2
  },

  computed: {
    projects() {
      const projectArray = [];
      
      Object.keys(projects).forEach((key) => {
        const project = projects[key];
        project.slug = key.replace('./', '').replace('.md', '');
        projectArray.push(project);
      });
      
      return projectArray;
    },
  }
}
</script>
