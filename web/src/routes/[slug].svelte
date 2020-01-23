<script context="module">
  import client from "../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";
  import component from '../components/index.js';

  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const query = '*[_type == "page" && slug.current == $slug][0]';

    const page = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));

    return { page };
  }
</script>

<script>
  export let page;
</script>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

<div class="content">
 { #each page.components as item }
    <svelte:component this={component[item._type]} {...item}/>    
 { /each }
</div>
