// import React, { useState, useEffect, useRef} from 'react';

// import Card from '../UI/Card';
// import './Search.css';

// const Search = React.memo(props => {
//   const { onLoadIngredients } = props;
//   const [enteredFilter, setEnteredFilter] = useState('');
//   const inputRef = useRef();
//   useEffect(() => {    
// 		const timer = setTimeout(() => {
// 			if (enteredFilter === inputRef.current.value) {
//         console.log(enteredFilter);
        
// 				const query = enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`;
// 				fetch("https://react-hooks-2fa2e.firebaseio.com/ingredients.json" + query)
// 					.then((response) => response.json())
// 					.then((responseData) => {
// 						const loadedIngredients = [];
// 						for (const key in responseData) {
// 							loadedIngredients.push({
// 								id: key,
// 								title: responseData[key].title,
// 								amount: responseData[key].amount,
// 							});
// 						}
// 						onLoadIngredients(loadedIngredients);
// 					});
// 			}
//     }, 900);
//     return () => {
//       clearTimeout(timer);
//     }
// 	}, [enteredFilter, onLoadIngredients, inputRef]);

//   return (
//     <section className="search">
//       <Card>
//         <div className="search-input">
//           <label>Filter by Title</label>
//           <input ref={inputRef} type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
//         </div>
//       </Card>
//     </section>
//   );
// });

// export default Search;


// // let a = 'oldValue';
// // someFunction();
// // a = 'newValue';
// // function someFunction() {
// //   setTimeout(() => {
// //     console.log(a);
// //   },5000)
// // }

import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          'https://react-hooks-2fa2e.firebaseio.com/ingredients.json' + query,
          'GET'
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;