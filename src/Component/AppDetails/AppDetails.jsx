import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloads from '../../assets/icon-downloads.png';
import ratings from '../../assets/icon-ratings.png';
import reviews from '../../assets/icon-review.png';
import Ratings from '../Ratings/Ratings';

const AppDetails = () => {

    const {id}=useParams();

    // console.log(id);


    //id is an object
    // wrap it with {} will make it read the object
    //so now you get the data inside the object

    //converting string id to number
    const appId=parseInt(id);
    console.log(appId);
   
    //load all the data here
    const data =useLoaderData();
    
    //using find function
    //checks if id i clicked is inside the data
    //example MyCat=find(clicked(CAT)===(listed(CAT)))
    //so if my clicked item get found on list then return that only
    const singleAppData=data.find(thisApp=>thisApp.id===appId)

    // console.log(typeof(id),data,singleAppData);

    const myData=singleAppData.ratings;
    //console.log(myData)
    
    return (
        <div className='p-15 bg-blue-100'>
            <div className='flex'>

                <img className='h-[350px] w-[350px] p-5 mr-5 border-  bg-white' src={singleAppData.image} alt="" />

                

                <div>
                    <h1 className='text-3xl font-bold mb-3'>{singleAppData.title}</h1>
                    <p className='text-gray-800 text-xl font-semibold'>Developed By: <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{singleAppData.companyName}</span> </p>
                    <div className='h-0.5 w-dvh bg-gray-400 mt-5 mb-2'>

                    </div>
                    
                    <div className='flex gap-5'>
                         
                         <div className='flex-row'>
                           <img className='justify-center' src={downloads} alt="" />
                           <h1>Downloads</h1>
                           <p className='text-5xl font-bold'>{singleAppData.downloads}<span>M</span></p>

                         </div>

                         <div className='flex-row'>
                           
                           <img src={ratings} alt="" />
                           <h1>Average Ratings</h1>
                           <p className='text-5xl font-bold'>{singleAppData.ratingAvg}</p>

                         </div>

                         <div className='flex-row'>
                           <img src={reviews} alt="" />
                           <h1>Total Reviews</h1>
                           <p className='text-5xl font-bold'>{singleAppData.reviews}</p>

                         </div>

                         


                    </div>

                    <div className='btn bg-green-500 text-white my-10'>
                            {/* onclick */}
                            <button>Install Now (<span>{singleAppData.size} MB)</span></button>
                    </div>


                <div className='h-0.5 w-dvh bg-gray-400 mt-5'>

                </div>

                    

                </div>


             


                

               

            </div>

            <div className='h-[350px] flex gap-5 mt-20'>

                <h1 className='text-start text-4xl font-semibold'>Ratings</h1>

                {/* {
                    singleAppData.ratings.map(t=><Ratings t={t}></Ratings>)
                } */}

                 <Ratings myData={myData}></Ratings> 

            </div>

            <div className='mt-50'>
                <h1 className='text-3xl font-bold mb-5'>Description</h1>
                <p className='text-2xl'>{singleAppData.description}</p>
            </div>

            




          

            
        </div>
    );
};

export default AppDetails;