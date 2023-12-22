import React from 'react';
import './PopupCard.css';

const PopupCard = (props) => {
    if (props.triggerpopup) {
        return (
          <div className="popup">
            <div className="popup-in mx-w">
              
              <div>
            
                <table>
                  <thead>
                    <tr className="violet">
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Ordered price</th>
                      <th>Kilogram</th>
                    
                      <th className="exit" role='button' onClick={props.onclose}>Exit</th> 
                    </tr>
                  </thead>
                  <tbody>
                {
                    props.plist.map((val)=>{
                      if(val.addtocard > 0){
                       return( <tr key={val.id}>
                        <td><img src={val.img}  style={{width:'3rem' , height : '3rem', borderRadius : '6px'}}/></td>
                        <td>{val.Name}</td>
                        <td>RS. {val.From}</td>
                        <td>RS. {val.From * val.orderedQ}</td>
                        <td>{val.Q * val.orderedQ}KG</td>
                       
                    </tr>
                     ) }})
                }
            </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      } ;
}

export default PopupCard;
