import { createContext, useState, useContext } from 'react';
import { bins as initialBins, promos as initialPromos } from '../data/data';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [bins, setBins] = useState(initialBins);
  const [promos, setPromos] = useState(initialPromos);
  
  // Add a new bin
  const addBin = (newBin) => {
    const id = bins.length > 0 ? Math.max(...bins.map(bin => bin.id)) + 1 : 1;
    setBins([...bins, { ...newBin, id }]);
  };
  
  // Delete a bin
  const deleteBin = (id) => {
    setBins(bins.filter(bin => bin.id !== id));
  };
  
  // Add a new promo
  const addPromo = (newPromo) => {
    const id = promos.length > 0 ? Math.max(...promos.map(promo => promo.id)) + 1 : 1;
    setPromos([...promos, { ...newPromo, id, active: true }]);
  };
  
  // Toggle promo active status
  const togglePromoStatus = (id) => {
    setPromos(promos.map(promo => 
      promo.id === id ? { ...promo, active: !promo.active } : promo
    ));
  };
  
  // Delete a promo
  const deletePromo = (id) => {
    setPromos(promos.filter(promo => promo.id !== id));
  };
  
  return (
    <DataContext.Provider value={{
      bins,
      promos: promos.filter(promo => promo.active),
      allPromos: promos,
      addBin,
      deleteBin,
      addPromo,
      togglePromoStatus,
      deletePromo
    }}>
      {children}
    </DataContext.Provider>
  );
};