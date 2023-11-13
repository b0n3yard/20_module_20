import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import portfolioimages from "../assets/Portfoliolinks"
const Article = React.memo(({element, handlemouseenter,handlemouseleave,handlebtnclick })=>{
    const mouseleaving = (e) =>{
        // const leavingimg = e.relatedTarget && e.currentTarget.contains(e.relatedTarget)
        if(e.relatedTarget !== e.currentTarget){
            handlemouseleave(element)
        }
    }
    return (
        <article key={element.id}>

                <Link to={element.imageUrl}>
                    <section>
                    <div className="contianer bg-green-500">
                    <div className=" images-cont bg-red-500" onMouseLeave={mouseleaving}  onMouseEnter={()=> handlemouseenter(element)}>
                    <img className="items-center"  src={element.imagelink} alt="test" />
                    
               { element.showbutton && ( <button className="imgbtn bg-green-500 mt-4" onClick={()=> handlebtnclick(element.buttonlink)}style={{zIndex:1, pointerEvents:'auto'}}>hello</button> )}
                    </div>
                    </div>
                    </section>
                </Link>
            </article>
    )
})
export default function Portfolio() {
    // console.log(portfolioimages)
    const [elements, setelements] = useState(portfolioimages)
    
    // console.log(portfolioimages)
    const handlemouseenter =( portfolioimages)=>{
        // e.nativeEvent.stopPropagation()
        setelements((prevelements)=>
        prevelements.map((element)=> element.id === portfolioimages.id ?{ ...element, showbutton: true}:element
            )
            
            );
            console.log('this')
            console.log(portfolioimages.buttonlink)
        
        return
    }
    const handlemouseleave=(portfolioimages)=>{
        setelements((prevelements)=>
        prevelements.map((element)=> element.id === portfolioimages.id ?{ ...element, showbutton: false}:element
        )
        );
        console.log('that')
        return
    }
    const handlebtnclick = (buttonlink)=>{
        window.location.href = buttonlink
    }

    
    return (
        <main>
            <h2>My Portfolio</h2>
            <section className="grid grid-cols-2 items-end" >{elements.map((element)=>(
                <Article    
                    key={element.id}
                    element={element}
                    handlemouseenter={handlemouseenter}
                    handlemouseleave={handlemouseleave}
                    handlebtnclick={handlebtnclick}

                
                
                />
                // <article>
                //     <Link to={element.imageUrl}>
                //         <img src={element.imagelink} alt="test" onMouseLeave={()=> handlemouseleave(element.id)}  onMouseEnter={()=> handlemouseenter(element.id)}/>
                //         {console.log(element.showbutton)}
                //     </Link>
                //    { element.showbutton && ( <button onClick={()=> handlebtnclick(element.buttonlink)}>hello</button> )}
                // </article>

            ))}
            </section>
        </main>
    )
}