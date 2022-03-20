import { clone } from '@formily/shared';
import { useContext } from 'react';
import { CollectionManagerContext } from '../context';

export const useCollectionManager = () => {
  const { refreshCM, service, interfaces, collections } = useContext(CollectionManagerContext);
  return {
    service,
    interfaces,
    collections,
    refreshCM: () => refreshCM?.(),
    get(name: string) {
      return collections?.find((collection) => collection.name === name);
    },
    getCollection(name: string) {
      return collections?.find((collection) => collection.name === name);
    },
    getCollectionFields(name: string) {
      const collection = collections?.find((collection) => collection.name === name);
      return collection?.fields || [];
    },
    getInterface(name: string) {
      return interfaces[name] ? clone(interfaces[name]) : null;
    },
  };
};