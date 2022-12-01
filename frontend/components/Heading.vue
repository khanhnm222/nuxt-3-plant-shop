<template>
  <component :is="tag" v-bind="$attrs" :class="classes">
    <slot />
  </component>
</template>

<script setup>
  const props = defineProps({
    tag: String,
    fontStyle: {
      type: String,
      required: false,
      default: 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4'].includes(value)
    },
    color: {
      type: String,
      required: false,
      default: 'text-brand-beige'
    }
  })

  const classes = computed(() => {
    const styleClasses = {
      h1: 'pd-2 text-5xl font-bold tracking-tighter font-heading leading-none',
      h2: 'pd-2 text-4xl font-bold tracking-tighter font-heading leading-none',
      h3: 'text-xl font-extralight leading-none',
      h4: 'pd-2 text-xl font-bold tracking-tighter font-heading leading-none',
    }
    return `${styleClasses[props.fontStyle]} ${props.color}`
  })

</script>
