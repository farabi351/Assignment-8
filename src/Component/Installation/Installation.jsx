import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getStoredApp } from '../../Utility/addToDb';
import InstalledCard from '../InstalledCard/InstalledCard';





// const sortHighToLow=()=>{
//   console.log("you clicked sort button ,High to low")
// }






const MySwal = withReactContent(Swal)

const Installation = () => {

     const [appList,setAppList]=useState([])

     const [selectedId, setSelectedId] = useState(null);

     const [sort,setSort]=useState("");


    

     useEffect(() => {
        Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Loading for you",
            showConfirmButton: false,
            timer: 700
        });
    }, []);


    const data = useLoaderData() || [];

    //console.log(data);

    useEffect(()=>{
        // if (!Array.isArray(data)) return;
        const storedAppData=getStoredApp();
        const convertedStoredBooks=storedAppData.map(id=>parseInt(id));
      //  console.log(convertedStoredBooks);

        const myAppList=data.filter(app=>convertedStoredBooks.includes(app.id));

        
        setAppList(myAppList);
    },[data]);


    const handleSortFunction=(type)=>{
    console.log("you have clicked sorted");
    setSort(type);

    if(type==="Ascending"){

        

        const mySort=[...appList].sort((a,b)=>a.downloads-b.downloads);
        console.log(mySort);
        setAppList(mySort);

    }

    if(type==="Descending"){

        

        const mySort=[...appList].sort((a,b)=>b.downloads-a.downloads);
        console.log(mySort);
        setAppList(mySort);

    }



    // const mySort=appList.sort();
    // console.log(mySort)


}

// {

//     const myApp = appList.map();
//     console.log(myApp);
// }


    console.log([...appList].sort());


    return (
        <div  className=' bg-[#E9E9E9] min-h-screen'>
            <h1 className='text-md md:text-7xl text-center mb-5 p-10 font-semibold'>Your Installed Apps</h1>
            <p className='text-center text-gray-500 font-semibold'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex flex-col md:flex-row justify-between items-center md:mx-25'>

                <h1 className='font-bold'>{appList.length} App found </h1>
                <div className="dropdown dropdown-start">
                     <div tabIndex={0} role="button" className="btn m-1">Sort by <IoIosArrowDown /> </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li ><a onClick={()=>handleSortFunction('Ascending')}>Ascending</a></li>
                                 <li><a onClick={()=>handleSortFunction('Descending')}>Descending</a></li> 
                            </ul>
                </div>

            </div>


            

               <div className='md:mr-50'>
                      {
                            appList.map(c=><InstalledCard key={c.id} c={c} selectedId={selectedId} setSelectedId={setSelectedId} appList={appList.downloads} setAppList={setAppList}></InstalledCard>)
                      }

               </div>

                
                {/* onclick */}
                

            {/* </div> */}
            

        </div>
    );
};

export default Installation;