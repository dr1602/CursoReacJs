import React from 'react'; // para importar custome hooks

function useLocalStorage(itemName, initialValue) {
    // para simular la API, vamos a simular los estados de carga y de error.
  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue); // a las usuarias se les da un array vacio para que ellas puedan a comenzar a llenarlo con las tareas de su eleccion
  
    React.useEffect (() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem('itemName'); // para que no choque con las otras versiones
          let parsedItem;
        
          if(!localStorageItem) {
            localStorage.setItem('itemName', JSON.stringify(initialValue)); // el inicial se define como un array
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    });
  
    // para persistir los datos.
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem('itemName', stringifiedItem);
        setItem(newItem);
      } catch(error){
        setError(error);
      }
    };
  
    // no nos va a traer la informacion, va a actualizarla, por eso no es necesario que este en el useEffect
  
    return {
      item,
      saveItem,
      loading,
      error,
    }; //tiene que retornar algo para que sea funcional
    // si tenemos mas estados, lo recomendado es tener un objeto, mira la secuencia, hay trees elementos
  
  }

  // exportar para usar desde cualquier otro archivo.

  export { useLocalStorage };