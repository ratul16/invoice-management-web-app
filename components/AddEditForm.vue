<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:isVisible'])

const open = ref(props.isVisible)

// Sync when prop changes
watch(
  () => props.isVisible,
  (val) => {
    open.value = val
  },
)

// Notify parent when drawer is manually closed
watch(open, (val) => {
  if (val !== props.isVisible) {
    emit('update:isVisible', val)
  }
})

function openDrawer() {
  open.value = true
}
</script>

<template>
  <UDrawer
    v-model:open="open"
    direction="right"
    inset
  >
    <UButton
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-up"
      @click="openDrawer"
    />

    <template #content>
      <Placeholder class="min-w-96 min-h-96 size-full m-4" />
    </template>
  </UDrawer>
</template>
