<script setup>
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const props = defineProps({
  modelValue: {
    type: [Object, null],
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Select a date',
  },
})

const emit = defineEmits(['update:modelValue'])

const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})

const open = ref(false)

const handleDateSelect = (date) => {
  emit('update:modelValue', date)
  open.value = false // Close the popover
}

const displayValue = computed(() => {
  return props.modelValue
    ? df.format(props.modelValue.toDate(getLocalTimeZone()))
    : props.placeholder
})
</script>

<template>
  <UPopover v-model:open="open">
    <UButton
      color="neutral"
      variant="subtle"
      icon="i-lucide-calendar"
    >
      {{ displayValue }}
    </UButton>

    <template #content>
      <UCalendar
        :model-value="modelValue"
        @update:model-value="handleDateSelect"
        class="p-2"
      />
    </template>
  </UPopover>
</template>
