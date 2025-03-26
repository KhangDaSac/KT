import { createContext, useContext, useState, useEffect } from 'react';
const ItemsContext = createContext();

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      "id": 1,
      "name": "Item",
      "description": "This is item",
      "price": 10000,
      "image": "https://placehold.co/400",
      "category": "BIRTHDAY"
    },    {
      "id": 2,
      "name": "Item",
      "description": "This is item",
      "price": 10000,
      "image": "https://placehold.co/400",
      "category": "BIRTHDAY"
    },    {
      "id": 3,
      "name": "Item",
      "description": "This is item",
      "price": 10000,
      "image": "https://placehold.co/400",
      "category": "BIRTHDAY"
    },    {
      "id": 4,
      "name": "Item",
      "description": "This is item",
      "price": 10000,
      "image": "https://placehold.co/400",
      "category": "BIRTHDAY"
    },    {
      "id": 5,
      "name": "Item",
      "description": "This is item",
      "price": 10000,
      "image": "https://placehold.co/400",
      "category": "BIRTHDAY"
    },    {
      "id": 6,
      "name": "Item",
      "description": "This is item",
      "price": 10000,
      "image": "https://placehold.co/400",
      "category": "BIRTHDAY"
    }
  ]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const findItemById = (id) => {
    return items.find(item => item.id === parseInt(id));
  };

  const value = {
    items,
    setItems,
    formatPrice,
    findItemById
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
}; 