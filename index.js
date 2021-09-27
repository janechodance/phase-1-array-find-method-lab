function superbowlWin(array){
   let result = array.find((element)=> element.result === 'W')
    if (result) {
    return result.year}
   else {
       return undefined
   }
   
}



// function superbowlWin(objects) {
//    if (objects.result === "W"){
//     return objects.year
//    }else{
//        return undefined
//    }
// }
// let check = record.find(superbowlWin)
// return check.year