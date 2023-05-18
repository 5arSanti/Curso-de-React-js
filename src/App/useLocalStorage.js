import React from "react";

//Custom Hook - Local Storage
function useLocalStorage(itemName, initialValue) {
    //Estados
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName); 
        
                let parsedItem;
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                    setItem(parsedItem);
                }
                else{
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false); 
            }
            catch(err){
                setLoading(false); 
                setError(err);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem);
    };

    return {
        item, 
        saveItem, 
        loading, 
        error,
    };

}

export { useLocalStorage };