<script lang="ts" setup>
defineProps<{
  inputName: string
  placeholder: string
  modelValue: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const updateFormEvent = (target: EventTarget | null) => {
  const val = +(target as HTMLInputElement).value
  emit('update:modelValue', val)
}

const onBlur = (e: FocusEvent) => {
  updateFormEvent(e.target)
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') updateFormEvent(e.target)
}
</script>

<template>
  <label :for="inputName">{{ placeholder }}</label>
  <input
    type="number"
    :name="inputName"
    :placeholder="placeholder"
    :value="modelValue"
    @blur="onBlur"
    @keydown="onKeydown"
  />
</template>

<style scoped>
label {
  color: var(--text-color-green);
}
input {
  background: var(--color-black);
  border: 1px solid var(--text-color-green);
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem;
}
</style>
