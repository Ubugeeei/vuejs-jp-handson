export const useSelectedItemsStore = () => useState<{
  id: number
  name: string
  description: string
  price: number
  selected: boolean
  image: string
  soldOut: boolean
}[]>('selectedContents', () => ref([]))
