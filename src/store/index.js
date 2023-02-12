// import {createStore} from 'redux';

// const initialState = {counter: 0, showCounter: true};
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     //why can't we do like this and why are we always returning a new object, because it is super important to not mutate the existing state(objects are reference in js), tho it works but we must not do that, always override it by returning a new state
//     // state.counter++;
//     // return state;
//     return {
//       counter: state.counter + 1,
//       //if we skip the below showCounter line then the showCounter will be undefined and the counter will not be rendered, bcoz undefined === false
//       showCounter: state.showCounter
//       //redux won't merge the object with the existing state so we need to write the old states, it overrides the existing state
//     };
//   }
//   if(action.type === 'increase') {
//     return {
//       // counter: state.counter + 5, //but this is not scalable, we can't hardcode any values and we are not gonna repeat the logic for other increment values
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if( action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }
//   return state;
// }

// const store = createStore(counterReducer);

// export default store;

// //we will use this store in index.js i.e. at the top of the hierarchy.



//using redux toolkit

// import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
  //we will prepare a slice of our global state
  name: 'counter',
  initialState: initialCounterState ,//== initialState: initialState
  reducers: {
    //lec-17(muted)
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state,action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice( {
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

//configure store like createStore creates a store and can merge multiple reducers into one, whereas only one reducer function could be passed through createStore function
const store = configureStore({
  //reducer is the expected property
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});

//a unique action will be automatically created for each reducer
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if(action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if( action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }
//   return state;
// }

// const store = createStore(counterReducer);

export default store;





