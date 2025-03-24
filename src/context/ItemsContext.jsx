import { createContext, useContext, useState, useEffect } from 'react';
const ItemsContext = createContext();

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      "id": 1,
      "name": "Phở Bò",
      "description": "Phở bò truyền thống với thịt bò tươi ngon",
      "price": 89000,
      "image": "/images/pho-bo.png"
    },
    {
      "id": 2,
      "name": "Gỏi Cuốn",
      "description": "Gỏi cuốn với tôm, thịt heo, rau sống, bún",
      "price": 65000,
      "image": "/images/goi-cuon.png"
    },
    {
      "id": 3,
      "name": "Cơm Sườn",
      "description": "Cơm với sườn thơm lừng",
      "price": 75000,
      "image": "/images/com-suon.png"
    },
    {
      "id": 4,
      "name": "Chả Giò",
      "description": "Chả giò giòn rụm",
      "price": 55000,
      "image": "/images/cha-gio.png"
    },
    {
      "id": 5,
      "name": "Bún Bò",
      "description": "Bún bò Huế thơm nồng",
      "price": 85000,
      "image": "/images/bun-bo.png"
    },
    {
      "id": 6,
      "name": "Cá Kho",
      "description": "Cá kho đậm đà",
      "price": 95000,
      "image": "/images/ca-kho.png"
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

  return (
    <ItemsContext.Provider value={{ items, setItems, formatPrice, findItem }}>
      {children}
    </ItemsContext.Provider>
  );
}; 