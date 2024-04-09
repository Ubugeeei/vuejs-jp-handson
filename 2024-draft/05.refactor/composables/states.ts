import type { Item } from "~/server/api/items";

export const useSelectedItemsStore = () => useState<Item[]>('selectedContents', () => ref([]))
