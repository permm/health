import React, { useState, useEffect } from 'react'
import default_abs from '../pics/default-abs.png'
import epigastrium_highlight from '../pics/epigastrium-highlight.png'
import epigastrium_active from '../pics/epigastrium-active.png'
import llq_highlight from '../pics/llq-highlight.png'
import llq_active from '../pics/llq-active.png'
import luq_highlight from '../pics/luq-highlight.png'
import luq_active from '../pics/luq-active.png'
import rlq_highlight from '../pics/rlq-highlight.png'
import rlq_active from '../pics/rlq-active.png'
import ruq_highlight from '../pics/ruq-highlight.png'
import ruq_active from '../pics/ruq-active.png'
import suprapubic_highlight from '../pics/suprapubic-highlight.png'
import suprapubic_active from '../pics/suprapubic-active.png'
import umbilicus_highlight from '../pics/umbilicus-highlight.png'
import umbilicus_active from '../pics/umbilicus-active.png'
import default_finger from '../pics/default-finger.png'
import dip_active from "../pics/dip-active.png"
import dip_highlight from "../pics/dip-highlight.png"
import pip_active from "../pics/pip-active.png"
import pip_highlight from "../pics/pip-highlight.png"
import mcp_active from "../pics/mcp-active.png"
import mcp_highlight from "../pics/mcp-highlight.png"
import others_highlight from '../pics/others-highlight.png'
import all_over_highlight from '../pics/all-over-highlight.png'

const Question = () => {
    const [page, setpage] = useState(1)
    const [epigastrium, setepigastrium] = useState(false)
    const [luq, setluq] = useState(false)
    const [llq, setllq] = useState(false)
    const [suprapubic, setsuprapubic] = useState(false)
    const [rlq, setrlq] = useState(false)
    const [ruq, setruq] = useState(false)
    const [umbilicus, setumbilicus] = useState(false)
    const [all, setall] = useState(false)
    const [dip, setdip] = useState(false)
    const [pip, setpip] = useState(false)
    const [mcp, setmcp] = useState(false)
    const [allfinger, setallfinger] = useState(false)
    
    useEffect(() => {
        if (epigastrium && luq && llq && suprapubic && rlq && ruq && umbilicus) {
            setall(true);
        } else {
            setall(false);
        }
    }, [epigastrium, luq, llq, suprapubic, rlq, ruq, umbilicus]);

    useEffect(() => {
        if (dip && pip && mcp ) {
            setallfinger(true);
        } else {
            setallfinger(false);
        }
    }, [dip, pip, mcp]);

    const gotopage = (e) => {
        setpage(e.target.id)
    }

    const display = (e) => {
        if(page == 1){
            if (e.target.id == 1) {
                setepigastrium(!epigastrium)
                setall(false)
            }
            if (e.target.id == 2) {
                setluq(!luq)
                setall(false)
            }
            if (e.target.id == 3) {
                setllq(!llq)
                setall(false)
            }
            if (e.target.id == 4) {
                setsuprapubic(!suprapubic)
                setall(false)
            }
            if (e.target.id == 5) {
                setrlq(!rlq)
                setall(false)
            }
            if (e.target.id == 6) {
                setruq(!ruq)
                setall(false)
            }
            if (e.target.id == 7) {
                setumbilicus(!umbilicus)
                setall(false)
            }
            if (e.target.id == 8) {
                setall(true)
                setepigastrium(true)
                setluq(true)
                setllq(true)
                setsuprapubic(true)
                setrlq(true)
                setruq(true)
                setumbilicus(true)
            }
        } if (page == 2) {
            if (e.target.id == 1) {
                setdip(!dip)
                setallfinger(false)
            }
            if (e.target.id == 2) {
                setpip(!pip)
                setallfinger(false)
            }
            if (e.target.id == 3) {
                setmcp(!mcp)
                setallfinger(false)
            } 
            if (e.target.id == 8) {
                setallfinger(true)
                setdip(true)
                setpip(true)
                setmcp(true)
            }
        }
        
        
    }
    return (
        <div className='text-center p-20'>
            <div >
                {page == 1 ? 'ปวดท้องที่บริเวณใดมากที่สุด?' :'จุดไหนที่คุณปวดนิ้วมากที่สุด?'}
            </div>
            <div className='relative mx-auto w-96 h-96' style={{ display: page == 1 ? '' : 'none' }}>
                <img src={default_abs} className='absolute  select-none' />
                <img src={epigastrium_active} className='absolute select-none ' style={{ display: epigastrium && !all ? '' : 'none' }} />
                <img src={epigastrium_highlight} className='absolute select-none ' style={{ display: epigastrium ? '' : 'none' }} />
                <img src={luq_active} className='absolute  select-none' style={{ display: luq && !all ? '' : 'none' }} />
                <img src={luq_highlight} className='absolute select-none' style={{ display: luq ? '' : 'none' }} />
                <img src={llq_active} className='absolute  select-none' style={{ display: llq && !all ? '' : 'none' }} />
                <img src={llq_highlight} className='absolute select-none' style={{ display: llq ? '' : 'none' }} />
                <img src={suprapubic_active} className='absolute  select-none' style={{ display: suprapubic && !all ? '' : 'none' }} />
                <img src={suprapubic_highlight} className='absolute select-none' style={{ display: suprapubic ? '' : 'none' }} />
                <img src={rlq_active} className='absolute  select-none' style={{ display: rlq && !all ? '' : 'none' }} />
                <img src={rlq_highlight} className='absolute select-none' style={{ display: rlq ? '' : 'none' }} />
                <img src={ruq_active} className='absolute  select-none' style={{ display: ruq && !all ? '' : 'none' }} />
                <img src={ruq_highlight} className='absolute select-none' style={{ display: ruq  ? '' : 'none' }} />
                <img src={umbilicus_active} className='absolute  select-none' style={{ display: umbilicus && !all ? '' : 'none' }} />
                <img src={umbilicus_highlight} className='absolute select-none' style={{ display: umbilicus ? '' : 'none' }} />
                <img src={all_over_highlight} className='absolute select-none' style={{ display: all ? '' : 'none' }} />
                <div onClick={display} id='1' className='absolute select-none rotate-45 w-12 h-11 ml-40 mt-40 '></div>
                <div onClick={display} id='2' className='absolute select-none  rounded-xl  w-11 h-11 rotate-45 ml-52 mt-48'></div>
                <div onClick={display} id='3' className='absolute select-none  rounded-xl rotate-45 w-10 h-12  ml-52 mt-60 '></div>
                <div onClick={display} id='4' className='absolute select-none  rounded-3xl  w-12 h-14  ml-40 mt-64 '></div>
                <div onClick={display} id='5' className='absolute select-none  rounded-full rotate-45  w-11 h-12  ml-32 mt-60 '></div>
                <div onClick={display} id='6' className='absolute select-none  rotate-45 rounded-md  w-11 h-11  ml-32 mt-48 '></div>
                <div onClick={display} id='7' className='absolute select-none  rounded-full w-10 h-8  ml-40 mt-56 '></div>
                <div onClick={display} id='8' className='absolute select-none  rounded-full w-32 h-14  ml-32 mt-96 '></div>
            </div>
            <div className='relative mx-auto w-96 h-96' style={{ display: page == 2 ? '' : 'none' }}>
                <img src={default_finger} className='absolute  select-none' />
                <img src={dip_active} className='absolute select-none ' style={{ display: dip && !allfinger ? '' : 'none' }} />
                <img src={dip_highlight} className='absolute select-none ' style={{ display: dip  ? '' : 'none' }} />
                <img src={pip_active} className='absolute  select-none' style={{ display: pip && !allfinger ? '' : 'none' }} />
                <img src={pip_highlight} className='absolute select-none' style={{ display: pip  ? '' : 'none' }} />
                <img src={mcp_active} className='absolute  select-none' style={{ display: mcp && !allfinger ? '' : 'none' }} />
                <img src={mcp_highlight} className='absolute select-none' style={{ display: mcp ? '' : 'none' }} />
                <img src={others_highlight} className='absolute  select-none' style={{ display: allfinger ? '' : 'none' }} />
                
                
                <div onClick={display} id='1' className='absolute select-none  w-32 h-9 ml-28 mt-10 '></div>
                <div onClick={display} id='1' className='absolute select-none  w-10 h-8 ml-16 mt-24 '></div>
                <div onClick={display} id='2' className='absolute select-none   w-28 h-11 ml-32 mt-20 '></div>
                <div onClick={display} id='2' className='absolute select-none rounded-full w-9 h-8 ml-20 mt-32 '></div>
                <div onClick={display} id='2' className='absolute select-none rounded-full w-9 h-8 ml-72 mt-44'></div>
                <div onClick={display} id='3' className='absolute select-none rounded-full  w-40 h-14 ml-24 mt-40  '></div>
                <div onClick={display} id='3' className='absolute select-none rounded-full w-10 h-10 ml-64 mt-56 '></div>
                
                <div onClick={display} id='8' className='absolute select-none  rounded-full w-64 h-16  ml-16 mt-96 '></div>
            </div>
            <div className='pt-20 '>
                <button className='h-12 w-24 rounded-full border-2 border-blue-500' onClick={gotopage} id='2' style={{ display: page == 1 ? '' : 'none' }}>
                    ต่อไป
                </button>
                <button className='h-12 w-24 rounded-full border-2 border-blue-500' onClick={gotopage} id='1' style={{ display: page == 2 ? '' : 'none' }}>
                    กลับ
                </button>
            </div>
        </div>
    )

}


export default Question;
