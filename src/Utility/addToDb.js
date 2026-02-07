const getStoredApp=()=>{

    const storedAppSTR=localStorage.getItem("appDetail")

    if (storedAppSTR){

        const storedAppData=JSON.parse(storedAppSTR);
        return storedAppData;

    }

    else{
        return [];
    }


}

const addToStoredDB=(id)=>{

    const storedAppData=getStoredApp();
    if(storedAppData.includes(id)){

        alert("id already exist")

    }
    else{
        storedAppData.push(id);

       

        localStorage.setItem(
            "appDetail",
            JSON.stringify(storedAppData)
        );

        console.log(storedAppData);
    }

}



 const deleteToStoredDB = (id) => {
  const delAppData = getStoredApp(); // ["1","2","3"]

  console.log(delAppData);
  console.log(id);

  const updatedData = delAppData.filter(
    myId => myId !== String(id.id)
  );

  localStorage.setItem(
    "appDetail",
    JSON.stringify(updatedData)
  );

  console.log("after delete:", updatedData);
};



export {addToStoredDB,getStoredApp,deleteToStoredDB};