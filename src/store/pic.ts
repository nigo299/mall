import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState: {
  selectPics: string[]
} = { selectPics: [] }

export const usePicStore = defineStore(
  'pic',
  () => {
    const selectPics = ref<string[]>([...initState.selectPics])
    const setSelectPics = (val: string[]) => {
      selectPics.value = val
    }

    return {
      selectPics,
      setSelectPics,
    }
  },
  {
    persist: false,
  },
)
