import React from 'react'
import './deshboard.css'
function Deshboard() {
    return (
        <div className='main'>
            <div className='Main_section'>
                <div className='main_deshboard'>
                    <img
                        src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                        className="image"
                        alt=""
                    />
                    <div className='username'>Shiva kumar</div>
                    <div className='home'>Home</div>
                    <div className='deposite'>Deposits</div>
                    <div className='draf'>Others</div>
                    <div className='property'>Payments</div>
                    <div className='starangth'>Setting</div>

                </div>
                <div className='user_smsbox'>
                   
                    <img
                        src="https://pngset.com/images/email-clip-art-free-email-icon-triangle-spiral-symbol-text-transparent-png-142121.png"
                        className="image_sms"
                        alt=""
                    />
                     <img
                        src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                        className="image"
                        alt=""
                    />

                    {/* <MailOutlineIcon/> */}
                </div>
                <div className='Active_Deposits'>
                    <div className='data_user'>
                        <div className='name'>
                            <h4>ActiveDeposits</h4>
                            </div>
                        <div className='add_icon'>
                            <img
                                src="https://icon-library.com/images/add-icon-transparent/add-icon-transparent-6.jpg"
                                className="icon"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='thead'>
                        <li>User Name</li>
                        <li>Date's</li>
                        <li>Deposits</li>
                        <li>Total's</li>
                        <li>Status</li>
                    </div>
                    <div className='user_info'>
                     <div className='userprof'>
                     <img
                        src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                        className="image"
                        alt=""
                    />
                    <h4>@user_name</h4>
                       <p>shiva kumar</p>
                        </div>   
                        <div>
                            <h5>25 Fab 2022</h5>
                        </div>
                        <div>
                            <h5>$3000</h5>
                        </div>
                        <div>
                            <h5>$30000</h5>
                            <p>running</p>
                        </div>
                        <div className='pro'><h4>Bank Processing</h4></div>
                        
                        <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exclamation_yellow_flat_icon.svg/451px-Exclamation_yellow_flat_icon.svg.png'
                        alt=''
                        className='prosessing'
                        />
                    
                    </div>
                    <div className='user_info'>
                     <div className='userprof'>
                     <img
                        src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                        className="image"
                        alt=""
                    />
                    <h4>@user_name</h4>
                       <p>shiva kumar</p>
                        </div>   
                        <div>
                            <h5>28 Fab 2022</h5>
                        </div>
                        <div>
                            <h5>$300</h5>
                        </div>
                        <div>
                            <h5>$3000</h5>
                            <p>running</p>
                        </div>
                        <div className='pro'><h4>Payments paid</h4></div>
                        
                        <img
                        src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-verte.png'
                        alt=''
                        className='prosessing'
                        />
                    
                    </div>
                    <button className='button'>All users</button>
                </div>
                {/* next stage user closed */}
               
                <div className='Active_Deposits'>
                    <div className='data_user'>
                        <div className='name'>
                            <h4>ClosedDeposits</h4>
                            </div>
                    </div>
                    <div className='thead'>
                        <li>User name</li>
                        <li>Date's</li>
                        <li>Deposits</li>
                        <li>Total</li>
                        <li>Status</li>
                    </div>
                    <div className='user_info'>
                     <div className='userprof'>
                     <img
                        src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                        className="image"
                        alt=""
                    />
                    <h4>@user_name</h4>
                       <p>shiva kumar</p>
                        </div>   
                        <div>
                            <h5>25 APR 2022</h5>
                        </div>
                        <div>
                            <h5>$3700</h5>
                        </div>
                        <div>
                            <h5>$4000</h5>
                            <p>closing</p>
                        </div>
                        <div className='pro'><h4>Bank Processing</h4></div>
                        
                        <img
                        src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-verte.png'
                        alt=''
                        className='prosessing'
                        />
                    
                    </div>
                    <div className='user_info'>
                     <div className='userprof'>
                     <img
                        src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                        className="image"
                        alt=""
                    />
                    <h4>@user_name</h4>
                       <p>shiva kumar</p>
                        </div>   
                        <div>
                            <h5>26 JUL 2023</h5>
                        </div>
                        <div>
                            <h5>$4500</h5>
                        </div>
                        <div>
                            <h5>$5500</h5>
                            <p>closing</p>
                        </div>
                        <div className='pro'><h4>Payment Failed</h4></div>
                        
                        <img
                        src='https://support.getroost.com/hc/article_attachments/360021657594/icon-whiteInRed-exclam.png'
                        alt=''
                        className='prosessing'
                        />
                    
                    </div>
                    </div>
                    <div className='button2'>
                    <button className='button'>All users</button>
               </div>
                </div>
               

            </div>
     

    )
}

export default Deshboard