<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth.store'

const authStore = useAuthStore()

onMounted(() => {
  authStore.initializeAuth()
})
</script>

<template>
  <div class="relative z-0">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
