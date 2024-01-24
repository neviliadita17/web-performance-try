<template>

  <!-- Lazy Load Component -->
  <div>
    <div>Contoh Lazy Load Component</div>
    <button class=" bg-slate-500 p-2 mx-4" 
      @click="showCard = !showCard">Toggle User Card</button>
    <LazyUserCard v-if="showCard" />
  </div>

  <br>
  <br>
  <!-- V-ONCE -->
  <div>
    <div v-once>Contoh V-once</div>
    <div>Count 1: {{ count }}</div>
    <div>Count 2: {{ count2 }}</div>
    <div v-memo="[count, count2]">
      Count 1 * Count 2 = {{ count * count2 }}</div>
    <button class="border p-2 mx-4" 
      @click="count++">Increment Count 1
    </button>
      <button class="border p-2 mx-4" 
      @click="count2++">Increment Count 2 
    </button>
  </div>

  <div class="grid grid-cols-3">
      <img width="300" height="500" src="/img/gambar1.png">
      <NuxtImg format="webp" 
        width="300" 
        :placeholder="300"
        src="/img/gambar1.png">
      </NuxtImg>

      <NuxtImg preset="presetOne" src="/img/gambar1.png"/>
      <!-- <NuxtImg src="https://unsplash.com/photos/lighted-kerosene-lantern-aPdUKy65qWE"/> -->

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      showCard: false,
      count: 0,
      count2: 10
    }
  }
}
</script>