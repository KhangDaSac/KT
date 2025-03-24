import { createContext, useContext, useState, useEffect } from 'react';
const ItemsContext = createContext();

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      "id": 1,
      "name": "Item 1",
      "description": "This is item 1",
      "price": 100000,
      "image": "https://placehold.co/400"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "This is item 2",
      "price": 100000,
      "image": "https://placehold.co/400"
    },
    {
      "id": 3,
      "name": "Item 3",
      "description": "This is item 3",
      "price": 100000,
      "image": "https://placehold.co/400"
    },
    {
      "id": 4,
      "name": "Item 4",
      "description": "This is item 4",
      "price": 100000,
      "image": "https://placehold.co/400"
    },
    {
      "id": 5,
      "name": "Item 5",
      "description": "This is item 5",
      "price": 100000,
      "image": "https://placehold.co/400"
    },
    {
      "id": 6,
      "name": "Item 6",
      "description": "This is item 6",
      "price": 100000,
      "image": "https://placehold.co/400"
    }
  ]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const findItem = (id) => {
    return items.find(item => item.id === parseInt(id));
  };

  const value = {
    items,
    setItems,
    formatPrice,
    findItem
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
}; 