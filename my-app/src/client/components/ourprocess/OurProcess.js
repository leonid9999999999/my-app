import React, { useState } from "react";
import "./OurProcess.css";

import discoveryImg from "../../../resources/images/discovery.png";
import strategyImg from "../../../resources/images/strategy.png";
import designImg from "../../../resources/images/design.png";
import developmentImg from "../../../resources/images/development.png";
import launchImg from "../../../resources/images/launch.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const STEPS = [

{
id:"01",
title:"Discovery",
time:"1-2 weeks",
subtitle:"Understanding your business",

text:
"We analyse your goals, customers and challenges to create a strong foundation for your website.",

details:[
"Business goals analysis",
"Target audience research",
"Competitor overview",
"Project requirements"
],

image:discoveryImg
},


{
id:"02",
title:"Strategy",
time:"1 week",
subtitle:"Creating the right direction",

text:
"We define the structure, priorities and user journey before design and development begins.",

details:[
"Website structure",
"Content organisation",
"User journey planning",
"Technical roadmap"
],

image:strategyImg
},


{
id:"03",
title:"Design",
time:"2-3 weeks",
subtitle:"Building the experience",

text:
"We create a clean interface focused on usability, trust and a smooth customer experience.",

details:[
"Interface design",
"Responsive layouts",
"Visual direction",
"User experience optimisation"
],

image:designImg
},


{
id:"04",
title:"Development",
time:"4-6 weeks",
subtitle:"Turning ideas into reality",

text:
"We transform approved designs into a fast, responsive and reliable website.",

details:[
"Frontend development",
"Performance optimisation",
"Mobile adaptation",
"Quality testing"
],

image:developmentImg
},


{
id:"05",
title:"Launch",
time:"1 week",
subtitle:"Ready for your customers",

text:
"We prepare everything for release and make sure your website works correctly.",

details:[
"Final testing",
"Performance checks",
"Deployment",
"Launch support"
],

image:launchImg
}

];



export default function OurProcess(){


const [openStep,setOpenStep] = useState(null);



return (

<section className="process-section">


<div className="process-container">



<header className="process-header">

<h2>
Our Process
</h2>


<p>
A transparent step-by-step approach to creating
websites that are designed, developed and
optimised for real business results.
</p>


</header>





<div className="process-timeline">



{
STEPS.map((step,index)=>(


<div 
className="process-step"
key={step.id}
>



<div className="timeline-side">


<div className="timeline-number">

{step.id}

</div>



{
index !== STEPS.length-1 &&
<div className="timeline-line"/>
}



</div>







<div 
className={`process-card1 ${
openStep===index ? "expanded": ""
}`}
>



<div className="process-image">


<LazyLoadImage

src={step.image}

alt={step.title}

effect="blur"

/>


</div>






<div className="process-content">



<div className="card-top">


<h3>
{step.title}
</h3>



<div className="duration">

{step.time}

</div>


</div>





<h4>
{step.subtitle}
</h4>



<p>

{step.text}

</p>





<button

className="learn-button"

onClick={()=>{

setOpenStep(
openStep===index ? null : index
)

}}

>

{
openStep===index
?
"Show less"
:
"Learn more"
}


</button>






<div className="details">


<ul>


{
step.details.map(item=>(

<li key={item}>

{item}

</li>

))

}


</ul>


</div>




</div>




</div>





</div>


))

}


</div>




</div>


</section>

);


}