import { createContext, useState, useContext } from 'react';
import { bins as initialBins, promos as initialPromos, methods as initialMethods } from '../data/data';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [bins, setBins] = useState(initialBins);
  const [promos, setPromos] = useState(initialPromos);
  const [methods, setMethods] = useState(initialMethods);
  
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
  
  // Add a new method
  const addMethod = (newMethod) => {
    const id = methods.length > 0 ? Math.max(...methods.map(method => method.id)) + 1 : 1;
    setMethods([...methods, { ...newMethod, id }]);
  };
  
  // Delete a method
  const deleteMethod = (id) => {
    setMethods(methods.filter(method => method.id !== id));
  };
  
  return (
    <DataContext.Provider value={{
      bins,
      promos: promos.filter(promo => promo.active),
      allPromos: promos,
      methods,
      addBin,
      deleteBin,
      addPromo,
      togglePromoStatus,
      deletePromo,
      addMethod,
      deleteMethod
    }}>
      {children}
    </DataContext.Provider>
  );
};
