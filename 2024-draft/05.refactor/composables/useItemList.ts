export const useItemList = () => {
  const { data: fetchedItems } = useFetch('/api/items')

  const selectedItems = useSelectedItemsStore()

  const filteredItems = computed(() => fetchedItems.value?.filter(item => !item.soldOut) ?? [])

  function toggleSelect(id: number) {
    const item = fetchedItems.value?.find(item => item.id === id)
    if (!item) return

    selectedItems.value =  isSelected(id)
    ? selectedItems.value.filter(selectedItem => selectedItem.id !== id)
    : [...selectedItems.value, item]
  }

  function isSelected(id: number): boolean {
    return selectedItems.value.some(item => item.id === id)
  }

  return { items: filteredItems, toggleSelect, isSelected }
}
