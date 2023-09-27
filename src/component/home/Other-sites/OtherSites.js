import React from 'react';
import './OtherSites.css'
import figma from "./img/5968705.png";
import codewars from "./img/Codewars.png";
import github from "./img/github.svg";
import hacker from "./img/HackerRank_Icon-1000px.png";
import edapid from "./img/pPOnSc6C_400x400.png";
import stack from "./img/stack-overflow.png";
const OtherSites = () => {
    return (
        <div className='otherSites' id='otherSits' >
            <div className='titleOther'>
                <h3><span>Other</span> Sites</h3>
                <p>Some other sites related to the programming environment</p>
            </div>

            <div className='other'>
                <a href='https://github.com/Yosef-Eid' title='github'><img src={github}/></a>
                <a href='https://stackoverflow.com/users/20879903/yosef-eid' title='stack overflow'><img src={stack}/></a>
                <a href='https://edabit.com/user/9qAq9AqiPQTa3mgxf' title='edapid'><img src={edapid}/></a>
                <a href='https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1188826160154781518' title='figma'><img src={figma} style={{borderRadius:'0'}}/></a>
                <a href='https://www.codewars.com/users/Yosef-Eid' title='codewars'><img src={codewars}/></a>
                <a href='https://www.hackerrank.com/yosefeid058' title='hacker'><img src={hacker} /></a>
            </div>
        </div>
    );
}

export default OtherSites;
