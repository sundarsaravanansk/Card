import React from 'react';
import './Component1.css';

const Component1 = () => {

    let data =[   
        {
            id :1 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dSsbV4plwECLRJTz-dT1buNGQUK6PBgkiA&usqp=CAU",
            Name : "Fruits ",
     
        },
        {
            id :2 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-IUBGkYKHX0i5YzcHBHci-3LIpEE_TJLrg&usqp=CAU",
            Name : "Vegetables ",
     
        },
        
       {
            id :3 ,
            img : "https://abicake.com/wp-content/uploads/2020/09/Andhra-Murukku-Plain-1-300x300.gif",
            Name : "Snacks",
     
        },
        {
            id :4 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6IIeXHcc99lgtqAPGvtuIFsxXSv-BWRM_uQ&usqp=CAU",
            Name : "Frozen Food",
     
        },
        {
            id :5 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IOcIBSKSJr7U9dCsfEOftaCKUv3GWLbyVw&usqp=CAU",
            Name : "Joiletries",
     
        },
        {
            id :5 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatKoQTjrAtMNas4QiRd7vJj6IZhdz1km8ZGmcnQhkYG1sKIxQ3_BZGK7M8UCP8a-ncF4&usqp=CAU",
            Name : "pet items ",
     
        },
        {
            id :6 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsD7kQr2M4P_VbRv4lSCrnRJ3DU0FPqNnlQ&usqp=CAU",
            Name : "spices",
     
        },
        {
            id :7 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YHNbHE3qzqWMboU8JhJkf8thVXKPfcF6Qw&usqp=CAU",
            Name : "Dairy",
     
        },
        {
            id :8 ,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_DYAxA5KVUhm22-KbbktyUk-NmiBRjqdaQ&usqp=CAU",
            Name : "Breads",
     
        },

]
    return (
        <div className='comp1'>
            <div className=' mx-w df jcsb'>
            {
                data.map((val) => (
                    <div className=''>
                        <div >
                            <img className='' src={val.img} />
                                    <p className=''>{val.Name}</p>
                                </div>
                            </div>

                        ))
                    }
            </div>
        </div>
    );
}

export default Component1;
