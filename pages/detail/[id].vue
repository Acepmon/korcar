<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" v-if="data">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab v-for="(image, index) in data.gallery" :key="index"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }">
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image" alt="" class="h-full w-full object-cover object-center" />
                </span>
                <span
                  :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']"
                  aria-hidden="true" />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="(image, index) in data.gallery" :key="index">
              <img :src="image" :alt="data.name" class="h-full w-full object-cover object-center sm:rounded-lg" />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ data.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ data.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
const id = useRoute().params.id
const { data } = await useCars().carDetail(id.toString())
</script>