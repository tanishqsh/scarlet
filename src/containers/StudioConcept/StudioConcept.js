import React from 'react';

function StudioConcept() {

    const content = "You have an idea but you are unsure of how to bring it to life. So it remains an idea for a long long time, but now  it is time for it to happen – so you come to us, our team understands your outcomes, inputs and your desired result. The brains behind scarlet sit down together to find everything that is required to bring your idea to life, and then we turn it into a concept. Once the concept is created, our team takes it through implementation.";

    return(
        <div className={'studio-concept-container'}>
           <div className={'content-wrapper container'}>
               <div className={'row'}>
                   <div className={'col-sm-4'}>
                       <div id={'full-circle'}/>
                       <div id={'partial-circle'}>
                           <div id={'full-circle'}/>
                       </div>
                   </div>
                   <div className={'col-sm-6'}>
                       <h1> A concept <span className={'alt'}> studio</span>? </h1>
                       <p> {content} </p>
                   </div>
                   <div className={"col-sm-2"}/>
               </div>

           </div>
        </div>
    );
}
export default StudioConcept;