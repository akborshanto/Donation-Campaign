// export const saveToLocalStorage=(data)=>{

//     const saveData=JSON.parse(localStorage.getItem("donation") || [])

// const existData=saveData.find(item => item == id)
// if(!existData){
// saveData.push(data)
// localStorage.setItem("donation",JSON.stringify(saveData))

// }else{
//     alert('Alreadey datastored...')
// }

// }

// export const saveToLocalStorage=(data)=>{

//     localStorage.setItem('donation',JSON.stringify(data))
//     const saveData=JSON.parse(localStorage.getItem('donation') || [])
//     console.log(saveData)
//     const exist=saveData.find(item=> item == id)
    

// if(!exist){

// }


// }

const getStored = () => {
  const sotredDontation = localStorage.getItem("donation");
  if (sotredDontation) {
    return JSON.parse(sotredDontation);
  }
  return [];
};

const saveStored = (id) => {

const storedApplication=getStored()
const exists=storedApplication.find(donId=> donId.id === id.id)

if(!exists){
    storedApplication.push(id)
localStorage.setItem('donation',JSON.stringify(storedApplication))


}else{
    alert("already you have doanted....")
}

};


export {getStored,saveStored}