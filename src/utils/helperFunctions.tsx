import uuid from 'react-native-uuid';

//NOTE: function types should be sparated into separate file
export const traverseArray = <T extends {[key: string]: string | Array<T>}>({
  data,
  callback,
  childrenKey,
}: {
  data: T[];
  callback: (data: T[], index: number) => void;
  childrenKey: keyof T;
}) => {
  for (let i = 0; i < data.length; i++) {
    callback(data, i);
    const list = data[i][childrenKey];
    if (Array.isArray(list)) {
      traverseArray({data: list, callback, childrenKey});
    }
  }
};

export const addUUID = <
  T extends {[key: string]: string | Array<T>; key: string},
>(
  list: T[],
  childrenKey: keyof T,
) =>
  traverseArray({
    data: list,
    callback: (data, index) => {
      data[index].key = uuid.v4() as string;
    },
    childrenKey,
  });

export const removeItemByKey = <T extends {list?: T[]}>({
  list,
  key,
  value,
  childrenKey,
}: {
  list: T[];
  key: keyof T;
  value: string;
  childrenKey: keyof T;
}) =>
  traverseArray({
    data: list,
    callback: (data, index) => {
      if (data[index][key] === value) {
        data.splice(index, 1);
        return;
      }
    },
    childrenKey,
  });

export const getItemByKey = <T extends {list?: T[]}>(
  data: T[],
  key: keyof T,
  value: string,
  callback: () => void,
): T | undefined => {
  for (let i = 0; i < data.length; i++) {
    if (data[i][key] === value) {
      return data[i];
    }
    const list = data[i].list;
    if (list) {
      const item = getItemByKey(list, key, value, callback);
      if (item) return item;
    }
  }
};

export const filterItems = <T extends {[key: string]: string | Array<T>}>(
  array: T[],
  search: string,
  filterKeys: (keyof T)[],
) => {
  const find = (item: T) =>
    filterKeys.some(key => {
      const value = item[key];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(search);
      } else if (Array.isArray(value)) {
        return value.some(find);
      }
    });

  return array.filter(find);
};
