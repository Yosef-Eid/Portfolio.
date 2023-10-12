import React from 'react';
import './Contact.css'
import facebook from './icons/facebook-2020-2-1.svg'
import linkedin from './icons/linkedin-icon.svg'
import whatsapp from './icons/whatsapp-3.svg'
import telegram  from './icons/telegram-1.svg'
import Github from './icons/github-icon-1.svg'
import overflow from './icons/stack-overflow.svg'
import slack from './icons/slack-new-logo.svg'
import discord from './icons/discord-6.svg'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='titleC'>
                <h3><span>Co</span>ntact</h3>
                <p>All my social media sites</p>
            </div>

            <div className='contactIcon'>
                <a href='https://www.facebook.com/profile.php?id=100079286477497&locale=ar_AR' title='facebook'><img src={facebook}/></a>
                <a href='https://www.linkedin.com/in/yousef-eid-080b75290/' title='linkedin'><img src={linkedin}/></a>
                <a href="https://wa.me/+201155975886" title='whatsapp'><img src={whatsapp}/></a>
                <a href='https://t.me/Yousef_Eid2' title='telegram'><img src={telegram}/></a>
                <a href='https://app.slack.com/client/T04TKKU2LBW/D04TH68S84A' title='slack'><img src={slack}/></a>
                <a href='https://discordapp.com/users/1142169445754748948' title='discord'><img src={discord}/></a>
            </div>
        </div>
    );
}

export default Contact;
