import React, { useState } from "react";
import { PiYoutubeLogoFill } from "react-icons/pi";

const Codehub = () =>{
    
    const[status1,setstatus1]=useState(false);
    const[status1_1,setstatus1_1]=useState(false);
    const[status1_2,setstatus1_2]=useState(false);
    const[status1_3,setstatus1_3]=useState(false);
    const[status1_4,setstatus1_4]=useState(false);
    const[status1_5,setstatus1_5]=useState(false);
    const[status1_6,setstatus1_6]=useState(false);

    const[status2,setstatus2]=useState(false);
    const[status2_1,setstatus2_1]=useState(false);
    const[status2_2,setstatus2_2]=useState(false);

    const[status3,setstatus3]=useState(false);
    const[status3_1,setstatus3_1]=useState(false);
    const[status3_2,setstatus3_2]=useState(false);
    const[status3_3,setstatus3_3]=useState(false);

    const[status4,setstatus4]=useState(false);
    const[status4_1,setstatus4_1]=useState(false);
    const[status4_2,setstatus4_2]=useState(false);
    const[status4_3,setstatus4_3]=useState(false);

    const[status5,setstatus5]=useState(false);
    const[status5_1,setstatus5_1]=useState(false);
    const[status5_2,setstatus5_2]=useState(false);

    const[status6,setstatus6]=useState(false);
    const[status6_1,setstatus6_1]=useState(false);
    const[status6_2,setstatus6_2]=useState(false);
    const[status6_3,setstatus6_3]=useState(false);
    const[status6_4,setstatus6_4]=useState(false);
    const[status6_5,setstatus6_5]=useState(false);
 
    const[status7,setstatus7]=useState(false);
    const[status7_1,setstatus7_1]=useState(false);
    const[status7_2,setstatus7_2]=useState(false);
    const[status7_3,setstatus7_3]=useState(false);

    const[status8,setstatus8]=useState(false);
    const[status8_1,setstatus8_1]=useState(false);
    const[status8_2,setstatus8_2]=useState(false);
    const[status8_3,setstatus8_3]=useState(false);

    const[status9,setstatus9]=useState(false);
    const[status9_1,setstatus9_1]=useState(false);
    const[status9_2,setstatus9_2]=useState(false);
    const[status9_3,setstatus9_3]=useState(false);
    const[status9_4,setstatus9_4]=useState(false);

    const[status10,setstatus10]=useState(false);
    const[status10_1,setstatus10_1]=useState(false);
    const[status10_2,setstatus10_2]=useState(false);

    const[status11,setstatus11]=useState(false);
    const[status11_1,setstatus11_1]=useState(false);
    const[status11_2,setstatus11_2]=useState(false);
    const[status11_3,setstatus11_3]=useState(false);

    const[status12,setstatus12]=useState(false);
    const[status12_1,setstatus12_1]=useState(false);
    const[status12_2,setstatus12_2]=useState(false);
 
    const[status13,setstatus13]=useState(false);
    const[status13_1,setstatus13_1]=useState(false);
    const[status13_2,setstatus13_2]=useState(false);
    const[status13_3,setstatus13_3]=useState(false);

    const[status14,setstatus14]=useState(false);
    const[status14_1,setstatus14_1]=useState(false);
    const[status14_2,setstatus14_2]=useState(false);

    const[status15,setstatus15]=useState(false);
    const[status15_1,setstatus15_1]=useState(false);
    const[status15_2,setstatus15_2]=useState(false);
    const[status15_3,setstatus15_3]=useState(false);
    const[status15_4,setstatus15_4]=useState(false);
    const[status15_5,setstatus15_5]=useState(false);
    const[status15_6,setstatus15_6]=useState(false);

    const[status16,setstatus16]=useState(false);
    const[status16_1,setstatus16_1]=useState(false);
    const[status16_2,setstatus16_2]=useState(false);
    const[status16_3,setstatus16_3]=useState(false);
    const[status16_4,setstatus16_4]=useState(false);
    const[status16_5,setstatus16_5]=useState(false);
    const[status16_6,setstatus16_6]=useState(false);
    const[status16_7,setstatus16_7]=useState(false);
    const[status16_8,setstatus16_8]=useState(false);
    const[status16_9,setstatus16_9]=useState(false);

    const[status17,setstatus17]=useState(false);
    const[status17_1,setstatus17_1]=useState(false);
    const[status17_2,setstatus17_2]=useState(false);
 
    const[status18,setstatus18]=useState(false);
    const[status18_1,setstatus18_1]=useState(false);

    return(
        <div className="pt-[87px]">
        <h1 className="text-6xl w-screen text-center p-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"><b>CVM UNIVERSITY A2Z DSA Course/Sheet</b></h1>
    
            <div>
                <div className="bg-white m-5 mt-10 mr-0 grid gap-4">
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1(!status1)}>
                        <h1><b>STEP 1</b> : LEARN THE BASIC</h1>
                    </div>
                    <div>
                        {
                            status1?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 1.1</b> : Things to Know in C++/Java/Python or any language</h1>
                                    </div>
                                    <div>
                                        {
                                            status1_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">User Input / Output</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">DATA TYPES</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">IF ELSE STATEMENTS</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">SWITCH STATEMENT</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">WHAT ARE ARRAYS, STRINGS?</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">FOR LOOPS</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">WHILE LOOPS</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">FUNCTIONS (PASS BY REFERENCE/VALUE)</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>
                                                    <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                        <div className="flex-shrink-0">TIME AND SPACE COMPLEXITY</div>
                                                        <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                    </div>

                                                    </>:null
                                        }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_2(!status1_2)}>
                                        <h1><b>STEP 1.2</b> : Build-up Logical Thinking</h1>
                                    </div>
                                        <div>
                                            {
                                                status1_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Patterns</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                        </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_3(!status1_3)}>
                                        <h1><b>STEP 1.3</b> : Learn STL/Java-Collections or similar thing in your language</h1>
                                    </div>
                                        <div>
                                            {
                                                status1_3?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">c++ standard template library</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Java Collections</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                        </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_4(!status1_4)}>
                                        <h1><b>STEP 1.4</b> : Know Basic Maths</h1>
                                    </div>
                                        <div>
                                            {
                                                status1_4?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count Digits</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse a Number</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check Palindrome</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">GCD Or HCF</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Armstrong Numbers</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Print all Divisors</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check for Prime</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                        </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_5(!status1_5)}>
                                        <h1><b>STEP 1.5</b> : Learn Basic Recursion</h1>
                                    </div>
                                    <div>
                                            {
                                                status1_5?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Understand Recursion by printing something N times</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Print name N times using recursion</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Print 1 to N using recursion</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Print N to 1 using recursion</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sum of first N numbers</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Factorial of N numbers</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse an array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check if a string is palindrome or not</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Fibonacci Number</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                        </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_6(!status1_6)}>
                                        <h1><b>STEP 1.6</b> :  Learn Basic Hashing</h1>
                                    </div>
                                    <div>
                                            {
                                                status1_6?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Hashing Theory</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count frequency of each element in the array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the highest/lowest frequency element</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                        </div></>:null
                        }
                    </div>          
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus2(!status2)}>
                        <h1><b>STEP 2</b> : Learn Important Sorting Techniques</h1>
                    </div>
                    <div>
                        {
                            status2?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus2_1(!status2_1)}>
                                        <h1><b>STEP 2.1</b> : Sorting-I</h1>
                                    </div>
                                    <div>
                                            {
                                                status2_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Selection Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Bubble Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Insertion Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus2_2(!status2_2)}>
                                        <h1><b>STEP 2.2</b> : Sorting-II</h1>
                                    </div>
                                    <div>
                                            {
                                                status2_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Merge Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Recursive Bubble Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Recursive Insertion Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Quick Sort</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div></>:null
                                            }
                                        </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus3(!status3)}>
                        <h1><b>STEP 3 </b> : Solve Problems on Arrays [Easy -{'>'} Medium -{'>'} Hard]</h1>
                    </div>
                    <div>
                        {
                            status3?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus3_1(!status3_1)}>
                                        <h1><b>STEP 3.1</b> : Easy</h1>
                                    </div>
                                    <div>
                                            {
                                                status3_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Largest Element in an Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find Second Smallest and Second Largest Element in an array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check if the array is sorted</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Remove duplicates from Sorted array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Left Rotate an array by one place</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Left rotate an array by D places</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Move Zeros to end</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Linear Search</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the Union</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find missing number in an array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Maximum Consecutive Ones</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the number that appears once, and the other numbers twice</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Longest Subarray with given Sum K(Positives)</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Longest Subarray with sum K | [Postives and Negatives]</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus3_2(!status3_2)}>
                                        <h1><b>STEP 3.2</b> : Medium</h1>
                                    </div>
                                    <div>
                                            {
                                                status3_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sort an array of 0's 1's and 2's</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Majority Element ({">"}n/2 times)</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Kadane’s Algorithm : Maximum Subarray Sum in an Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">KaPrint subarray with maximum subarray Sum in an Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Stock Buy and Sell</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Rearrange Array Elements by Sign</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Rearrange the array in alternating </div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Next Permutation</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Leaders in an Array problem</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Longest Consecutive Sequence in an Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Set Matrix Zeros</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Rotate Matrix by 90 degrees</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Print the matrix in spiral manner</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count subarrays with given sum</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus3_3(!status3_3)}>
                                        <h1><b>STEP 3.3</b> : Hard</h1>
                                    </div>
                                    <div>
                                            {
                                                status3_3?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Pascal's Triangle</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Majority Element (n/3 times)</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">3-Sum Problem</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	4-Sum Problem</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Largest Subarray with 0 Sum</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count the number of subarrays with given xor K</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Merge Overlapping Subintervals</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Merge two Sorted Arrays Without Extra Space</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the repeating and missing numbers</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count Inversions</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse Pairs</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Maximum Product Subarray</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus4(!status4)}>
                        <h1><b>STEP 4</b> : Binary Search [1D, 2D Arrays, Search Space]</h1>
                    </div>
                    <div>
                        {
                            status4?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus4_1(!status4_1)}>
                                        <h1><b>STEP 4.1</b> : BS on 1D Arrays</h1>
                                    </div>
                                    <div>
                                            {
                                                status4_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Binary Search: Explained</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Implement Lower Bound</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Implement Upper Bound</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Search Insert Position</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Floor/Ceil in Sorted Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">First and Last Occurrences in Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count Occurrences in Sorted Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Search in Rotated Sorted Array I</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Search in Rotated Sorted Array II</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Minimum in Rotated Sorted Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find out how many times the array has been rotated</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Single element in a Sorted Array</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find peak element</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus4_2(!status4_2)}>
                                        <h1><b>STEP 4.2</b> : BS on Answers</h1>
                                    </div>
                                    <div>
                                            {
                                                status4_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Finding Sqrt of a number using Binary Search</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Nth Root of a Number using Binary Search</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Koko Eating Bananas</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Minimum days to make M bouquets</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the smallest Divisor</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Capacity to Ship Packages within D Days</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Kth Missing Positive Number</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Aggressive Cows</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Book Allocation Problem</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Split array - Largest Sum</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Painter's partition</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Minimise Maximum Distance between Gas Stations</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Median of 2 sorted arrays</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Kth element of 2 sorted arrays</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus4_3(!status4_3)}>
                                        <h1><b>STEP 4.3</b> : BS on 2D Arrays</h1>
                                    </div>
                                    <div>
                                            {
                                                status4_3?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the row with maximum number of 1{"’"}s</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Search in a 2 D matrix</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Search in a row and column-wise sorted matrix</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find Peak Element (2D Matrix)</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Matrix Median</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus5(!status5)}>
                        <h1><b>STEP 5</b> : Strings [Basic and Medium]</h1>
                    </div>
                    <div>
                        {
                            status5?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus5_1(!status5_1)}>
                                        <h1><b>STEP 5.1</b> : Basic and Easy String Problems</h1>
                                    </div>
                                    <div>
                                            {
                                                status5_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Remove outermost Paranthesis</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse Words in a String</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Largest odd number in a string</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Longest Common Prefix</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Isomorphic String</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">check whether one string is a rotat…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check if two Strings are anagrams of each other</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus5_2(!status5_2)}>
                                        <h1><b>STEP 5.2</b> : Medium String Problems</h1>
                                    </div>
                                    <div>
                                            {
                                                status5_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sort Characters by frequency</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Maximum Nesting Depth of Paranthesi…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Roman Number to Integer and vice ve...</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Implement Atoi</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count Number of Substrings</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Longest Palindromic Substring Do it…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sum of Beauty of all substring</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse Every Word in A String</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus6(!status6)}>
                        <h1><b>STEP 6</b> : Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]</h1>
                    </div>
                    <div>
                        {
                            status6?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus6_1(!status6_1)}>
                                        <h1><b>STEP 6.1</b> : Learn 1D LinkedList</h1>
                                    </div>
                                    <div>
                                            {
                                                status6_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Introduction to LinkedList</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Inserting a node in LinkedList</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Deleting a node in LinkedList</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the Length of a Linked List</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Search an element in a Linked List</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus6_2(!status6_2)}>
                                        <h1><b>STEP 6.2</b> : Learn Doubly LinkedList</h1>
                                    </div>
                                    <div>
                                            {
                                                status6_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Introduction to Doubly Linked List</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Insert a node in DLL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Delete a node in DLL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Reverse a DLL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus6_3(!status6_3)}>
                                        <h1><b>STEP 6.3</b> : Medium Problems of LL</h1>
                                    </div>
                                    <div>
                                            {
                                                status6_3?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find middle element in a Linked List</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse a LinkedList [Iterative]</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Reverse a LL [Recursive]</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Detect a loop in LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find the starting point in LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Length of Loop in LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Check if LL is palindrome or not</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Segrregate odd and even nodes in LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Remove N-th node from the end of a Linked List</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Delete the middle node of LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sort LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sort a LL of 0's 1's and 2's</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find intersection of Two Linked Lists</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Add 1 to a number represented by LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Add 2 numbers in LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus6_4(!status6_4)}>
                                        <h1><b>STEP 6.4</b> : Medium Problems of DLL</h1>
                                    </div>
                                    <div>
                                            {
                                                status6_4?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Delete all occurrences of a key in...</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find pairs with given sum in DLL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Remove duplicates from sorted DLL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus6_5(!status6_5)}>
                                        <h1><b>STEP 6.5</b> : Hard Problems of LL</h1>
                                    </div>
                                    <div>
                                            {
                                                status6_5?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse LL in group of given size K</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Rotate a LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Flattening of LL</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Clone Linked List with Random and Next Pointer</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    </>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus7(!status7)}>
                        <h1><b>STEP 7</b> : Recursion [PatternWise]</h1>
                    </div>
                    <div>
                        {
                            status7?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus7_1(!status7_1)}>
                                        <h1><b>STEP 7.1</b> : Get a Strong Hold</h1>
                                    </div>
                                    <div>
                                            {
                                                status7_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Recursive Implementation of atoi()</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Pow(x, n)</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Count Good numbers</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sort a stack using recursion</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Reverse a stack using recursion</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus7_2(!status7_2)}>
                                        <h1><b>STEP 7.2</b> : Subsequences Pattern</h1>
                                    </div>
                                    <div>
                                            {
                                                status7_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Generate all binary strings</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Generate Paranthesis</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Print all subsequences/Power Set</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Learn All Patterns of Subsequences …</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count all subsequences with sum K</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check if there exists a subsequence…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Combination Sum</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Combination Sum-II</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Subset Sum-I</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Subset Sum-II</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Combination Sum - III</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Letter Combinations of a Phone numb…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus7_3(!status7_3)}>
                                        <h1><b>STEP 7.3</b> : Trying out all Combos / Hard</h1>
                                    </div>
                                    <div>
                                            {
                                                status7_3?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Palindrome Partitioning</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Word Search</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">N Queen</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Rat in a Maze</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Word Break</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	M Coloring Problem</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Sudoko Solver</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Expression Add Operators</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus8(!status8)}>
                        <h1><b>STEP 8</b> : Bit Manipulation [Concepts & Problems]</h1>
                    </div>
                    <div>
                        {
                            status8?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus8_1(!status8_1)}>
                                        <h1><b>STEP 8.1</b> : Learn Bit Manipulation</h1>
                                    </div>
                                    <div>
                                            {
                                                status8_1?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Introduction to Bit Manipulation</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Check if the i-th bit is set or not</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check if a number is odd or not</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Check if a number is power of 2 or …</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Count the number of set bits</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Set/Unset the rightmost unset bit</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Swap two numbers</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Divide two integers without using m…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus8_2(!status8_2)}>
                                        <h1><b>STEP 8.2</b> : Interview Problems</h1>
                                    </div>
                                    <div>
                                            {
                                                status8_2?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count number of bits to be flipped …</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find the number that appears odd nu…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Power Set</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find xor of numbers from L to R</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the two numbers appearing odd …</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus8_3(!status8_3)}>
                                        <h1><b>STEP 8.3</b> : Advanced Maths</h1>
                                    </div>
                                    <div>
                                            {
                                                status8_3?<><div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Count number of bits to be flipped …</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find the number that appears odd nu…</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Power Set</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">	Find xor of numbers from L to R</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-blue-200 ml-10 mr-10 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                                            <div className="flex-shrink-0">Find the two numbers appearing odd …</div>
                                                            <div className="flex-shrink-0"><PiYoutubeLogoFill /></div>
                                                        </div>
                                                        </>:null
                                            }
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus9(!status9)}>
                        <h1><b>STEP 9</b> : Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]</h1>
                    </div>
                    <div>
                        {
                            status9?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 9.1</b> : Learning</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 9.2</b> : Prefix, Infix, PostFix Conversion Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 9.3</b> : Monotonic Stack/Queue Problems [VVV. Imp]</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 9.4</b> : Implementation Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus10(!status10)}>
                        <h1><b>STEP 10</b> : Sliding Window & Two Pointer Combined Problems</h1>
                    </div>
                    <div>
                        {
                            status10?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 10.1</b> : Medium Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 10.2</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus11(!status11)}>
                        <h1><b>STEP 11</b> : Heaps [Learning, Medium, Hard Problems]</h1>
                    </div>
                    <div>
                        {
                            status11?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 11.1</b> : Learning</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 11.2</b> : Medium Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 11.3</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus12(!status12)}>
                        <h1><b>STEP 12</b> : Greedy Algorithms [Easy, Medium/Hard]</h1>
                    </div>
                    <div>
                        {
                            status12?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 12.1</b> : Easy Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 12.2</b> : Medium/Hard</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus13(!status13)}>
                        <h1><b>STEP 13</b> : Binary Trees [Traversals, Medium and Hard Problems]</h1>
                    </div>
                    <div>
                        {
                            status13?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 13.1</b> : Traversals</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 13.2</b> : Medium Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 13.3</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus14(!status14)}>
                        <h1><b>STEP 14</b> : Binary Search Trees [Concept and Problems]</h1>
                    </div>
                    <div>
                        {
                            status14?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 14.1</b> : Concepts</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 14.2</b> : Practice Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus15(!status15)}>
                        <h1><b>STEP 15</b> : Graphs [Concepts & Problems]</h1>
                    </div>
                    <div>
                        {
                            status15?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 15.1</b> : Learning</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 15.2</b> : Problems on BFS/DFS</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 15.3</b> : Topo Sort and Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 15.4</b> : Shortest Path Algorithms and Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 15.5</b> : MinimumSpanningTree/Disjoint Set and Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 15.6</b> : Other Algorithms</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus16(!status16)}>
                        <h1><b>STEP 16</b> : Dynamic Programming [Patterns and Problems]</h1>
                    </div>
                    <div>
                        {
                            status16?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.1</b> : Introduction to DP</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.2</b> : 1D DP</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.3</b> : 2D/3D DP and DP on Grids</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.4</b> : DP on Subsequences</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.5</b> : DP on Strings</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.6</b> :  DP on Stocks</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.7</b> : DP on LIS</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.8</b> : MCM DP | Partition DP</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 16.9</b> :  DP on Squares</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus17(!status17)}>
                        <h1><b>STEP 17</b> : Tries</h1>
                    </div>
                    <div>
                        {
                            status17?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 17.1</b> : Theory</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 17.2</b> : Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus18(!status18)}>
                        <h1><b>STEP 18</b> : Strings</h1>
                    </div>
                    <div>
                        {
                            status18?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1_1(!status1_1)}>
                                        <h1><b>STEP 18.1</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Codehub;