import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import Project from '../Project/Project'
import Dcontent from '../D-content/Dcontent'
function D() {
    const {pv,ev} = useContext(AppContext)
    return (
        <div className='container m-1'>
            <section className='w-[100%] p-2 text-center rounded-xl shadow-inner'>
            <div className='mx-auto h-[100%] rounded-xl drop-shadow-md'>
                { pv === true ? (
                    <Project/>
                ):("")}
                { ev === false ? (
                    <Dcontent/>
                ):("")}
            </div>
            </section>
        </div>
    )
}

export default D