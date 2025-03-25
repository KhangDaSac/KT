
import { useState, useEffect } from 'react';
import Items from '../components/Items';
import { useItems } from '../context/ItemsContext';
const ItemsPage = () => {
  const { items } = useItems();

  return (
    <Items items={items} />
  );
};

export default ItemsPage;
