import { GET_BOOKS, ADD_BOOK, DELETE_BOOK } from '../actions/types'; 

const initialState = {
    books: [
        { title: "best book ever", price: 44, course: "Math482", description: "In mint condition" },
        { title: "best book ever2", price: 45, course: "Math483", description: "In alright condition" },
        { title: "best book ever3", price: 46, course: "Math484", description: "In great condition" },
        { title: "best book ever4", price: 47, course: "Math485", description: "In used condition" },
        { title: "best book ever4", price: 47, course: "Math485", description: "In used condition" }

    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state
            }
        default:
            return state;
    }
}