
// const recursiveSearch = (obj, searchKey, results = []) => {
//     var r = results;
//     Object.keys(obj).forEach(key => {
//        var childs = obj[key];
//        if(key == searchKey)
//        {
//         childs = obj[key];
//         console.log({childs})
//         recursiveSearch(obj[key],searchKey,r)
//        }
//     //    if(key === searchKey && typeof value !== null){
//     //     console.log(key)
//     //       r.push(value);
//     //    }else if(typeof value === 'object'){
//     //       recursiveSearch(value, searchKey, r);
//     //    }
//     });
//     return r;
//  };
//  export default  recursiveSearch
 
const recursiveSearch = (obj, searchKey, results = []) => {
    var r = results;
    obj.forEach(prop => {
        if(prop == searchKey){
            recursiveSearch(prop,searchKey,r)
        }
    });
    return r;
 };
 export default  recursiveSearch