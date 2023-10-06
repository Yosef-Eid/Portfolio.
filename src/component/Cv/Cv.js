import React from 'react';
import './Cv.css'
const Cv = () => {
    return (
        <div className='cv' id='cv'> 

            <div className='top'>
                <div className='img'></div>
                <h2>Youssef Eid</h2>
                <p>Font-end Developer</p>
                <div className='icons'>
                    <a href='https://www.facebook.com/profile.php?id=100079286477497&locale=ar_AR' title='facebook'><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href='https://www.linkedin.com/in/yousef-eid-080b75290/' title='linkedin'><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href='https://api.whatsapp.com/send?phone=01155975886' title='whatsapp'><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' title='Email'><ion-icon name="mail-outline"></ion-icon></a>
                    <a href='https://t.me/Yousef_Eid2' title='Telegram'><ion-icon name="send"></ion-icon></a>
                </div>
            </div>
            <hr/>   
            
            <div className='info'>
                <div><p>Age:</p> <span>21</span></div>
                <div><p>Address:</p> <span>Egypt, Alex</span></div>
                <div><p>Phone:</p> <span>01032734738</span></div>
                <div><p>Email:</p> <span>yosefeid058@gmail.com</span></div>
                <div><p>Freelance::</p> <span>Available</span></div>
            </div>
            <hr/>
            
            <div className='skills'>
                <h2>Skills</h2>
                
                <div className='lang'>
                    <div className='name'><p>HTML</p> <p>80%</p></div>
                    <div className='value'><p style={{width:'80%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>CSS</p> <p>70%</p></div>
                    <div className='value'><p style={{width:'70%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Javascript</p> <p>70%</p></div>
                    <div className='value'><p style={{width:'70%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>React.js</p> <p>65%</p></div>
                    <div className='value'><p style={{width:'65%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Redux</p> <p>50%</p></div>
                    <div className='value'><p style={{width:'50%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Bootstrap</p> <p>50%</p></div>
                    <div className='value'><p style={{width:'50%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Git</p> <p>100%</p></div>
                    <div className='value'><p style={{width:'100%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Github</p> <p>90%</p></div>
                    <div className='value'><p style={{width:'90%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Figma</p> <p>50%</p></div>
                    <div className='value'><p style={{width:'50%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Terminal</p> <p>70%</p></div>
                    <div className='value'><p style={{width:'70%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Notion</p> <p>50%</p></div>
                    <div className='value'><p style={{width:'70%'}}></p></div>
                </div>
                <div className='lang'>
                    <div className='name'><p>Vs Code</p> <p>60%</p></div>
                    <div className='value'><p style={{width:'60%'}}></p></div>
                </div>
                
            </div>
                <hr/>
            <div className='language'>
                <h2>Language</h2>
                <div className='lang2'>
                    <div className='name'><p>Arabic</p> <p>100%</p></div>
                    <div className='value'><p style={{width:'100%'}}></p></div>
                </div>
                <div className='lang2'>
                    <div className='name'><p>English</p> <p>60%</p></div>
                    <div className='value'><p style={{width:'60%'}}></p></div>
                </div>
            </div>
            
            <hr/>
                {/* <a href=''><button>Download Cv</button></a> */}
        </div>
    );
}

export default Cv;
