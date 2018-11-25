const initialState = [
    {
        id: 1202938702
        ,trailName: 'Wintercreek'
        ,trailState: 'California'
        ,city: 'Altadena'
        ,trailRating: 'Black Diamond'
        ,trailImage: 'https://i.ytimg.com/vi/9OBo8tsOGqU/maxresdefault.jpg'
        ,description: 'Fast flowy singletrack'
    },
    {   
        id:9248709
        ,trailName: 'Eaton Saddle'
        ,trailState: 'California'
        ,city: 'Altadena'
        ,trailRating: 'Black Diamond'
        ,trailImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/b2/3f/cb/on-the-way-down-from.jpg'
        ,description: 'fast trail with a lot of exposure.'
    }
]


//state = [], action
const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_TRAIL':
        return [
            ...state,
            {
                id: action.id
                ,trailName: action.trailName
                ,trailState: action.trailState
                ,city: action.city
                ,trailRating: action.trailRating
                ,trailImage: action.trailImage
                ,description: action.description
            }
        ]
        case 'UPDATE_TRAIL_BY_ID':
            return state.map(item => {
                if(item.id === action.id){
                    return {
                        ...item
                        ,trailName: action.trailName
                        ,trailState: action.trailState
                        ,city: action.city
                        ,trailRating: action.trailRating
                        ,trailImage: action.trailImage
                        ,description: action.description
                    }
                }
                return item;
            })
        case 'DELETE_TRAIL':
            return [...state.filter(item => item.id !== action.id)]  
                    
            break;
        default:
            return state;
    }
}

export default reducer;
