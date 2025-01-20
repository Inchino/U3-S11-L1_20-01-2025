const initialState = {
    list:{
        content:[],
    },
}

const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_LIST':
        return{
            ...state,
            list:{
                ...state.list,
                content: state.list.content.concat(action.payload),
            },
        }
        case 'REMOVE_FROM_LIST':
        return {
            ...state,
            list: {
              ...state.list,
              content: state.list.content.filter((book, i) => {
                if (action.payload === i) {
                  return false
                } else {
                  return true
                }
              }),
            },
          }
    
        default:
        return state;
    }
}

export default mainReducer;