import React, { useState, useEffect } from 'react'

const Lognav = () => {

    return (
        <>
            <div className="bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <div className="flex items-center space-x-3 ">
                        <img src="/mentorlogo.png" className="h-20 w-[120%]" alt="cvm Logo" />
                    </div>
                    <div>
                        <p className=" text-lg font-bold text-white"> CVMU MENTORSHIP PLATFORM</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lognav