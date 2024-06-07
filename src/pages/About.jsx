import React from "react";
import { skills,experiences } from "../constants";
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="bg-gray-50 max-container">
      <h1 className="text-zinc-800/80 text-3xl">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ritul
        </span>
      </h1>
      <div className="mt-5 flex-col gap-3 text-lg  font-extralight text-slate-400">
      <p>Software Engineer based in India,specializing in technical education through hands-on learning and building applications.</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 justify-center flex flex-wrap gap-12">{skills.map((skill)=>(
<div className="block-container w-24 h-24  ">
  <div className=" btn-front rounded-lg flex justify-center items-center">
    <img
    src ={skill.imageUrl}
    alt={skill.name}
    className="w-1/2 h-1/2 object-contain"
    />
</div>
</div>

        ))}

      </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex-col gap-3 text-slate-500">
      <p>I've worked with all sports of companies, leveling up my skills and teaming up with smart people.Here;s the rundown:</p>
      </div>
<div className="mt-12 flex">
<VerticalTimeline 
>
  {experiences.map((experiences)=>
  <VerticalTimelineElement
  key={experiences.company_name}
   date={experiences.date}
   icon={
    <div className="flex justify-center items-center w-full h-full">
      <img scr ={experiences.icon}
      alt={experiences.company_name}
      className="w-[60%] h-[60%]  object-contain"/>
    </div>
   }iconStyle={{background:experiences.iconBg}}
   contentStyle={
    {
      background:'#e0e0e0',
      borderBottom:'5px',
      borderStyle:'solid',
      borderBottomColor:experiences.iconBg,
    }
   }

  
  >
    <div>
      <h3 className="text-gray-400">
        <div className="text-gray-800 font-bold text-2xl p-2"> {experiences.title}</div>
        <div className="text-gray-800/70 font-semibold text-xl px-6 py-5 ">{experiences.company_name}</div>
        
      </h3>
    </div>
    <ul className="'my-5 list-disc ml-5 space-y-2 text-gray-700/40">
      {experiences.points.map((point,index)=>(
        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
          {point}
        </li>
      ))}
    </ul>


  </VerticalTimelineElement>
  )}
</VerticalTimeline>
</div>
      </div>
      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  );
};

export default About;
