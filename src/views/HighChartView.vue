<script lang="ts" setup>
import { Chart } from 'highcharts-vue'
import { computed, ref } from 'vue'
import type { Options } from 'highcharts'
import InputComponent from '@/components/InputComponent.vue'

const rangeStart = ref(-2)

const rangeEnd = ref(2)

const precision = ref(1)

const dataValues = computed(() => {
  const xAxis: number[] = []
  for (let i = rangeStart.value; i <= rangeEnd.value; i += precision.value) {
    xAxis.push(i)
  }
  const res = xAxis.reduce((acc, curr) => [...acc, [curr, curr ** 2]], [] as number[][])
  return res
})

const chartOptions = computed<Options>(() => ({
  lang: {
    //importante agregar esta regla a la config, sino no se dibuja el chart!
    decimalPoint: ',',
  },
  chart: {
    style: {
      height: 300,
    },
  },
  title: {
    text: 'x² Function Plot',
    style: {
      color: '#fff',
    },
  },
  yAxis: {
    title: {
      text: 'f(x)',
    },
  },
  xAxis: {
    title: {
      text: 'x',
    },
  },
  series: [
    {
      name: 'Jane',
      data: dataValues.value,
      type: 'line',
      color: '#00bd7e',
    },
  ],
}))
</script>

<template>
  <div class="chart">
    <Chart :options="chartOptions"></Chart>
    <div class="configuration">
      <InputComponent input-name="rangeStart" placeholder="Range start" v-model="rangeStart" />
      <InputComponent input-name="rangeEnd" placeholder="Range end" v-model="rangeEnd" />
      <InputComponent input-name="precision" placeholder="Precision" v-model="precision" />
    </div>
  </div>
</template>

<style>
.chart {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
}
.configuration {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
