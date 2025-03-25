import { createContext, useContext, useState, useEffect } from 'react';
const ItemsContext = createContext();

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      "id": 1,
      "name": "BEAUTIFUL BIRTHDAY WISHES CAKE",
      "description": "Delicious cake with custom birthday wishes for your special day",
      "price": 99000,
      "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
      "category": "BIRTHDAY"
    },
    {
      "id": 2,
      "name": "CHOCOLATE CAKE",
      "description": "Rich and moist chocolate cake with creamy chocolate frosting",
      "price": 75000,
      "image": "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "BIRTHDAY"
    },
    {
      "id": 3,
      "name": "ULTIMATE CHOCOLATE CAKE",
      "description": "Premium chocolate cake with multiple layers of chocolate goodness",
      "price": 99000,
      "image": "https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "BIRTHDAY"
    },
    {
      "id": 4,
      "name": "WEDDING CAKE",
      "description": "Elegant multi-tier cake perfect for your special day",
      "price": 150000,
      "image": "https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "category": "WEDDING"
    },
    {
      "id": 5,
      "name": "CUSTOM CAKE",
      "description": "Personalized cake made to your specifications",
      "price": 120000,
      "image": "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "category": "CUSTOM"
    },
    {
      "id": 6,
      "name": "CELEBRATION CAKE",
      "description": "Perfect for any celebration or special occasion",
      "price": 85000,
      "image": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZWJyYXRpb24lMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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