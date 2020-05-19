import React, { useState, useEffect, useCallback, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

// outside component else will be re-rendered
const ingredientReducer = (currentIngredient, action) => {
  switch (action.type) {
    case 'SET': return action.ingredients;
    case 'ADD': return [...currentIngredient, action.ingredient];
    case 'DELETE': return currentIngredient.filter(ing => ing.id !== action.id);
    default: throw new Error("Should not go here")
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer,[]);
  const { isLoading, error , data, sendRequest, reqExtra, reqIdentifier ,clear} = useHttp();
  // const [ userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients})
  },[]) 

  useEffect(() => console.log("render every time similar to componentDidUpdate()"));  

  useEffect(() => {
		if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
			dispatch({ type: "DELETE", id: reqExtra });
		} else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
			dispatch({
				type: "ADD",
				ingredient: { id: data.name, ...reqExtra}
			});
		}
	}, [data, reqExtra, reqIdentifier, isLoading, error]);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest("https://react-hooks-2fa2e.firebaseio.com/ingredients.json",'POST',JSON.stringify(ingredient),ingredient,'ADD_INGREDIENT');
    // dispatchHttp({ type: 'SEND'})
		// fetch("https://react-hooks-2fa2e.firebaseio.com/ingredients.json", {
		// 	method: "POST",
		// 	body: JSON.stringify(ingredient),
		// 	headerS: { "Content-type": "application/json" },
		// })
		// 	.then((response) => {
    //     dispatchHttp({ type: 'RESPONSE' })
		// 		return response.json();
		// 	})
		// 	.then((responseData) => {
    //     dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient }});
    //   })
    //   .catch(error => {
    //     dispatchHttp({ type: 'ERROR', error: 'Something went wrong'})
    //   });
	}, [sendRequest]);

  const removeIngredientHandler = useCallback((id) => {
    sendRequest(`https://react-hooks-2fa2e.firebaseio.com/ingredients/${id}.json`,"DELETE",null,id,'REMOVE_INGREDIENT');   
    // dispatchHttp({ type: 'SEND'})
    // fetch(`https://react-hooks-2fa2e.firebaseio.com/ingredients/${id}.json`, {method: "DELETE",})
    // .then((reponse) => {
    //   dispatchHttp({ type: 'RESPONSE' })
		// 	// setUserIngredients((prevIngredients) =>
		// 	// 	prevIngredients.filter((ing) => ing.id !== id)
    //   // );
    //   dispatch({ type: 'DELETE', id: id});
    // })
    // .catch(error => {
    //   dispatchHttp({ type: 'ERROR', error: 'Something went wrong'})
    // });
  }, [sendRequest]);

  // react runs the function and returns the value to be memoize
  const ingredientList = useMemo(() => {
		return (
			<IngredientList
				ingredients={userIngredients}
				onRemoveItem={removeIngredientHandler}
			/>
		);
	}, [userIngredients, removeIngredientHandler]);
  
  const closeErrorHandler = useCallback(() => {
    /**
     * React batches the state updates
     * which means since both of them are in same synchronous block of code
     * react will not call re-render for both of them individually butcloseErrorHandler together after reading all the function code
     * in this no extra code is there thus after the 2nd setState
     */
    // dispatchHttp({ type: 'CLEAR'});
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
