// const initialState = [
//     {
//         id: 120293870239
//         ,trailname: 'Wintercreek'
//         ,trailState: 'California'
//         ,city: 'Altadena'
//         ,trailRating: 'Black Diamond'
//         ,trailImage: 'https://i.ytimg.com/vi/9OBo8tsOGqU/maxresdefault.jpg'
//         ,description: 'Fast flowy singletrack'
//     },
//     // {
//     //     trailname: 'Eaton Saddle'
//     //     ,trailState: 'California'
//     //     ,city: 'Altadena'
//     //     ,trailRating: 'Black Diamond'
//     //     ,trailImage: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/b2/3f/cb/on-the-way-down-from.jpg'
//     //     ,description: 'Fast flowy singletrack. Lots of exposure.'
//     // },
//     // {
//     //     trailname: 'El Prieto'
//     //     ,trailState: 'California'
//     //     ,city: 'Altadena'
//     //     ,trailRating: 'Blue'
//     //     ,trailImage: 'https://static.rootsrated.com/image/upload/s--oLXEOfgy--/t_rr_large_natural/pebymoruta1ptbzo1awz.jpg'
//     //     ,description: 'Fast flowy singletrack.'
//     // },
//     // {
//     //     trailname: 'Telonics'
//     //     ,trailState: 'California'
//     //     ,city: 'Laguna Hills'
//     //     ,trailRating: 'Double Black Diamond'
//     //     ,trailImage: 'https://ep1.pinkbike.org/p4pb4783960/p4pb4783960.jpg'
//     //     ,description: 'Starts at the top of the world, trail will on you left.'
//     // },
//     // {
//     //     trailname: 'Crestline'
//     //     ,trailState: 'California'
//     //     ,city: 'Crestline'
//     //     ,trailRating: 'Double Black Diamond'
//     //     ,trailImage: 'https://p.vitalmtb.com/photos/users/8786/photos/106080/s1200_crestline_211.jpg?1462136258'
//     //     ,description: 'Aggressive trail only for advanced riders.'
//     // }

// ]


//state = [], action
const reducer = (state = [], action) =>{
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
                debugger;
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
            break;
        default:
            return state;
    }
}

export default reducer;
