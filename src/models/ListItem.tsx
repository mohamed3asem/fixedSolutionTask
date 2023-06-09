export type ListItemType = {
  id?: string;
  title: string;
  description: string;
  displayName?: string;
  list?: ListItemType[];
  key: string;
};
