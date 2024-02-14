import React, { useState } from "react";
    
const Codehub = () =>{
    const[status1,setstatus1]=useState(false);
    const[status2,setstatus2]=useState(false);
    const[status3,setstatus3]=useState(false);
    const[status4,setstatus4]=useState(false);
    const[status5,setstatus5]=useState(false);
    const[status6,setstatus6]=useState(false);
    const[status7,setstatus7]=useState(false);
    const[status8,setstatus8]=useState(false);
    const[status9,setstatus9]=useState(false);
    const[status10,setstatus10]=useState(false);
    const[status11,setstatus11]=useState(false);
    const[status12,setstatus12]=useState(false);
    const[status13,setstatus13]=useState(false);
    const[status14,setstatus14]=useState(false);
    const[status15,setstatus15]=useState(false);
    const[status16,setstatus16]=useState(false);
    const[status17,setstatus17]=useState(false);
    const[status18,setstatus18]=useState(false);

    return(
        <div className="pt-[87px]">
            <div>
                <div className="bg-white m-5 grid gap-4">
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus1(!status1)}>
                        <h1><b>STEP 1</b> : LEARN THE BASIC</h1>
                    </div>
                    <div>
                        {
                            status1?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 1.1</b> : Things to Know in C++/Java/Python or any language</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 1.2</b> : Build-up Logical Thinking</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 1.3</b> : Learn STL/Java-Collections or similar thing in your language</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 1.4</b> : Know Basic Maths</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 1.5</b> : Learn Basic Recursion</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 1.6</b> :  Learn Basic Hashing</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black" onClick={()=>setstatus2(!status2)}>
                        <h1><b>STEP 2</b> : Learn Important Sorting Techniques</h1>
                    </div>
                    <div>
                        {
                            status2?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 2.1</b> : Sorting-I</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 2.2</b> : Sorting-II</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus3(!status3)}>
                        <h1><b>STEP 3 </b> : Solve Problems on Arrays [Easy -{'>'} Medium -{'>'} Hard]</h1>
                    </div>
                    <div>
                        {
                            status3?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 3.1</b> : Easy</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 3.2</b> : Medium</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 3.3</b> : Hard</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus4(!status4)}>
                        <h1><b>STEP 4</b> : Binary Search [1D, 2D Arrays, Search Space]</h1>
                    </div>
                    <div>
                        {
                            status4?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 4.1</b> : BS on 1D Arrays</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 4.2</b> : BS on Answers</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 4.3</b> : BS on 2D Arrays</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus5(!status5)}>
                        <h1><b>STEP 5</b> : Strings [Basic and Medium]</h1>
                    </div>
                    <div>
                        {
                            status5?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 5.1</b> : Basic and Easy String Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 5.2</b> : Medium String Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus6(!status6)}>
                        <h1><b>STEP 6</b> : Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]</h1>
                    </div>
                    <div>
                        {
                            status6?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 6.1</b> : Learn 1D LinkedList</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 6.2</b> : Learn Doubly LinkedList</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 6.3</b> : Medium Problems of LL</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 6.4</b> : Medium Problems of DLL</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 6.5</b> : Hard Problems of LL</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus7(!status7)}>
                        <h1><b>STEP 7</b> : Recursion [PatternWise]</h1>
                    </div>
                    <div>
                        {
                            status7?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 7.1</b> : Get a Strong Hold</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 7.2</b> : Subsequences Pattern</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 7.3</b> : Trying out all Combos / Hard</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus8(!status8)}>
                        <h1><b>STEP 8</b> : Bit Manipulation [Concepts & Problems]</h1>
                    </div>
                    <div>
                        {
                            status8?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 8.1</b> : Learn Bit Manipulation</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 8.2</b> : Interview Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 8.3</b> : Advanced Maths</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus9(!status9)}>
                        <h1><b>STEP 9</b> : Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]</h1>
                    </div>
                    <div>
                        {
                            status9?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 9.1</b> : Learning</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 9.2</b> : Prefix, Infix, PostFix Conversion Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 9.3</b> : Monotonic Stack/Queue Problems [VVV. Imp]</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 9.4</b> : Implementation Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus10(!status10)}>
                        <h1><b>STEP 10</b> : Sliding Window & Two Pointer Combined Problems</h1>
                    </div>
                    <div>
                        {
                            status10?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 10.1</b> : Medium Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 10.2</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus11(!status11)}>
                        <h1><b>STEP 11</b> : Heaps [Learning, Medium, Hard Problems]</h1>
                    </div>
                    <div>
                        {
                            status11?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 11.1</b> : Learning</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 11.2</b> : Medium Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 11.3</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus12(!status12)}>
                        <h1><b>STEP 12</b> : Greedy Algorithms [Easy, Medium/Hard]</h1>
                    </div>
                    <div>
                        {
                            status12?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 12.1</b> : Easy Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 12.2</b> : Medium/Hard</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus13(!status13)}>
                        <h1><b>STEP 13</b> : Binary Trees [Traversals, Medium and Hard Problems]</h1>
                    </div>
                    <div>
                        {
                            status13?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 13.1</b> : Traversals</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 13.2</b> : Medium Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 13.3</b> : Hard Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus14(!status14)}>
                        <h1><b>STEP 14</b> : Binary Search Trees [Concept and Problems]</h1>
                    </div>
                    <div>
                        {
                            status14?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 14.1</b> : Concepts</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 14.2</b> : Practice Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus15(!status15)}>
                        <h1><b>STEP 15</b> : Graphs [Concepts & Problems]</h1>
                    </div>
                    <div>
                        {
                            status15?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 15.1</b> : Learning</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 15.2</b> : Problems on BFS/DFS</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 15.3</b> : Topo Sort and Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 15.4</b> : Shortest Path Algorithms and Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 15.5</b> : MinimumSpanningTree/Disjoint Set and Problems</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 15.6</b> : Other Algorithms</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus16(!status16)}>
                        <h1><b>STEP 16</b> : Dynamic Programming [Patterns and Problems]</h1>
                    </div>
                    <div>
                        {
                            status16?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.1</b> : Introduction to DP</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.2</b> : 1D DP</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.3</b> : 2D/3D DP and DP on Grids</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.4</b> : DP on Subsequences</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.5</b> : DP on Strings</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.6</b> :  DP on Stocks</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.7</b> : DP on LIS</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.8</b> : MCM DP | Partition DP</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 16.9</b> :  DP on Squares</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus17(!status17)}>
                        <h1><b>STEP 17</b> : Tries</h1>
                    </div>
                    <div>
                        {
                            status17?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 17.1</b> : Theory</h1>
                                    </div>
                                    <div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
                                        <h1><b>STEP 17.2</b> : Problems</h1>
                                    </div></>:null
                        }
                    </div>
                    <div className="bg-blue-200 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black " onClick={()=>setstatus18(!status18)}>
                        <h1><b>STEP 18</b> : Strings</h1>
                    </div>
                    <div>
                        {
                            status18?<><div className="bg-blue-200 m-5 p-3 uppercase hover:bg-blue-300 hover:border-2 border-dotted border-black">
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