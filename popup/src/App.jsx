import { useState } from 'react';
import './App.css';

function App() {

const [popup, setPopup]= useState(false);

const handleClickOpen=()=>{
  setPopup(!popup)
}

const closePopup=()=>{
  setPopup(false)
}



  return (
    <>
    <div className='nav'>
      <div className='img'><img src='data:image/png;base64,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' width="100%" height="100%" /></div>
   <div><button className='btn' onClick={handleClickOpen}>Click to open Pop-Up</button></div>
    </div>
      

      <div>
        {popup?
        <div className='Main'>
          <div className='popup'>
            <div className='main'>
              <div className='head'>
                <div className='text'>
                  <h1>Add Discount for Garrick's query</h1>
                  <p>Choose the discount you want to apply for this query. You will see the final cost reflected on the Summary being showed taking into to account the discount you enter.</p>
                </div>
                <div className='close' onClick={closePopup} ><img src='https://freesvg.org/img/1544641784.png' width="100%" height="100%"/></div>
              </div>
             

             <div className='lmain'>
              <div className='left'>
                <div className='heading'>
                  <h1>Enter Discount</h1>
                  <p>Select from one of the avilable Discounting Modes</p>
                </div>

                <div className='box'>
                  <p>Discount Mode</p>
                  <input value="Rupees From Base Price"/>
                </div>

                <div className='box'>
                  <p>Discount Amount</p>
                  <input value="₹ 150"/>
                </div>

                <div className='box'>
                  <p>Not Applicable Discount</p>
                  <input value="₹ 60,00,000"/>
                </div>

                <div className='warning'><p>By clicking Apply Discount you are making updates to the cost sheet thet the user can view. Confirm Discount on the summary on the right before clicking on apply discount. </p></div>

<button className='ADiscount'>Apply Discount</button>
<p className='costsheet'>Download Cost Sheet</p>

              </div>




              <div className='right'>
              <div className='heading'>
                  <h1>Summary</h1>
                  <p>Select from one of the avilable units to proceed</p>
                </div>

                <div className='iteamsuu'>
                  <div className='iteam'><p>Unit number</p>
                  <p>Gardenia, B 505</p></div>

                  <div className='iteam'><p>Super Bult Up Area</p>
                  <p>1058.7 Sq.Ft</p></div>

                  <div className='iteam'><p>Base Price per SqFt</p>
                  <p>₹5,747</p></div>

                  <div className='iteam'><p>Total Value of Property</p>
                  <p>₹59,47,382</p></div>

                  <div className='iteam'><p>GST</p>
                  <p>₹2,97,369</p></div>

                  <div className='iteam'><p>Agreement Value</p>
                  <p>₹62,44,751</p></div>

                  <div className='iteam'><p>Additional & Diposits</p>
                  <p>₹1,93,523</p></div>



                  {/* <p><span>Unit number</span><span className='pricel'>Gardenia, B 505</span></p>
                  <p><span>Super Bult Up Area</span><span className='pricel'>1058.7 Sq.Ft</span></p>
                  <p><span>Base Price per SqFt</span><span className='pricel'>₹5,747</span></p>
                  <p><span>Total Value of Property</span><span className='pricel'>₹59,47,382</span></p>
                  <p><span>GST</span><span className='pricel'>₹2,97,369</span></p>
                  <p><span>Agreement Value</span><span className='pricel'>₹62,44,751</span></p>
                  <p><span>Additional & Diposits</span><span className='pricel'>₹1,93,523</span></p> */}

                  
                </div>
                <hr/>

                <div className='iteamsuu'>
                  <div className='iteam' ><p style={{color:"black"}}>Discount per Sqft</p>
                  <p style={{color:"black"}}>-₹150</p></div>

                  <div className='iteam'><p style={{color:"black"}}>Net Discount</p>
                  <p style={{color:"black"}}>-₹60,00,000</p></div>

                  <div className='iteam'><p style={{color:"black"}}>GST Discount</p>
                  <p style={{color:"black"}} >-₹47,5000</p></div>
                
                  
                </div>


                <div className='iteamsuu' style={{marginTop:"7%"}}><div  className='iteam'><p style={{color:"black", fontSize:"24px", fontWeight:"bold"}}>All Inclusive Total </p>
                <p style={{color:"black", fontSize:"24px", fontWeight:"bold"}}>₹4,38,274</p></div></div>



              </div>
             </div>
            </div>

          </div>
        </div>:""}
      </div>
    </>
  );
}

export default App;
