let id = 0;
//this is data that is going to be added to the global state
export const add = data => ({
    id: id++
    ,type: 'ADD_TRAIL'
    ,trailName: data.trailName
    ,state: data.state
    ,city: data.city
    ,trailRating: data.trailRating
    ,trailImage: data.trailImage
    ,description: data.description
})

//Use this when you need to update
// export const update = data => ({
//     type: ''
//     ,trailName: data.trailName
//     ,state: data.state
//     ,
// })