import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Post from "./Post";

  // function createQuestionVariables(){
  //   var questions = [];
  
  //   for (var i = 1; i <= 20; ++i) {

  //     questions[i] = {
  //     id:`q${i}`, 
  //     value: pcl5_questions[i-1],
  //     trigger: `a${i}`
  //   };

  //   }
  
  //   return questions;
  // }

  // function createAnswerVariables(){
  //   var answers = [];
  
  //   for (var i = 1; i <= 20; ++i) {

  //     answers[i] = {
  //     id:`a${i}`, 
  //     options:[
  //     {value:"0", label:"0", trigger:`q${i+1}`},
  //     {value:"1", label:"1", trigger:`q${i+1}`},
  //     {value:"2", label:"2", trigger:`q${i+1}`},
  //     {value:"3", label:"3", trigger:`q${i+1}`},
  //     {value:"4", label:"4", trigger:`q${i+1}`},
  //     ] 
  //   };

  //   }
  
  //   return answers;
  // }
  
class SimpleForm extends Component {


  


  

  // answers = createAnswerVariables()
  // questions = createQuestionVariables()

  render() {
    return (
      
      <ChatBot 
        steps={[
          {
            id: "1",
            message: "Welcome to Rebound. I'm your personal PTSD and trauma coach. At Rebound, we use evidence-based methods to help you work through difficult and challenging experiences and the processing and experiences that follow. What would you like to do first?",
            trigger: "begin-options"
          },
          {
            id: "begin-options",
            options: [
              {value:1, label:"Assess the severity of my symptoms", end: true}, //trigger: "pcl-5"
              {value: 2, label:"Learn why I should trust you ", end: true}, //trigger: "science"
              {value: 3, label: "Learn how to calm myself during periods of anxiety or panic", trigger: "grounding"}, //trigger: "grounding"
              {value: 4, label: "Get started reprocessing experiences in an evidence-based fashion", trigger: "reprocessing-0"} //trigger: "reprocessing"
            ]
          },
          // {
          //   id:"begin-options", 
          //   options:[
          //   {value:"y", label:"Yes", trigger:"end-message"},
          //   {value:"n", label:"No", trigger:"no-submit"},
          //   ] 
          // },
          // {
          //   id:"begin-options", 
          //   options:[
          //   {value:"y", label:"Yes", end: true},
          //   {value:"n", label:"No", end: true},
          //   ] 
          // },
          {
            id: "reprocessing-0",
            message: "We've prepared a set of writing prompts for you based on empirically validated research. Working through these prompts should allow you to reprocess + reintegrate some of your memories.",
            trigger: "reprocessing-option-prompt"

          },
          {
            id: "reprocessing-option-prompt",
            message: "Which day prompt would you like to complete now? We suggest you do them in order, and on subsequent days or sessions.",
            trigger: "reprocessing-options"
          },
          {
            id: "reprocessing-options",
            options: [
              {value: 1, label: "Day 1", trigger: "reprocessing-1"},
              {value: 2, label: "Day 2", trigger: "reprocessing-2"},
              {value: 3, label: "Day 3", trigger: "reprocessing-3"},
              {value: 4, label: "Day 4", trigger: "reprocessing-4"},
              {value: 5, label: "Day 5", trigger: "reprocessing-5"}
            ]
          },
          {
            id: "reprocessing-1",
            message: `For this first session, spend 10 minutes writing about the trauma starting at the beginning. You don’t need to finish the entire story, but spend the time giving a general overview of what happened.

            You can do this in the box below, or if you’d prefer, take a piece of paper and write it down on your own.
            
            When you’re done, take a deep breath and hit "I'm finished."`,
            trigger: "finished-writing-options"
          },
          {
            id: "reprocessing-2",
            message: `Today, you’ll be diving further into the details of your trauma. The purpose of this is to help your mind craft a better narrative around what happened so it can learn to handle the memory without fear.
            
            For the next 20 minutes, write down the story of your trauma again, either in the box we’ll provide in the next section or in a journal, a Word document, or a piece of paper. Today, try to focus on the details. Write down as much as you remember—what exactly happened, where were you, who was there, how were you feeling, what were you thinking about. Try to be as specific as possible.
            When you're done, take a deep breath and hit "I'm finished."`,
            trigger: "finished-writing-options"
          },
          {
            id: "reprocessing-3",
            message: `For this first session, spend 10 minutes writing about the trauma starting at the beginning. You don’t need to finish the entire story, but spend the time giving a general overview of what happened.

            You can do this in the box below, or if you’d prefer, take a piece of paper and write it down on your own.
            
            When you’re done, take a deep breath and hit "I'm finished."`,
            trigger: "finished-writing-options"
          },
          {
            id: "reprocessing-4",
            message: `For this first session, spend 10 minutes writing about the trauma starting at the beginning. You don’t need to finish the entire story, but spend the time giving a general overview of what happened.

            You can do this in the box below, or if you’d prefer, take a piece of paper and write it down on your own.
            
            When you’re done, take a deep breath and hit "I'm finished."`,
            trigger: "finished-writing-options"
          },
                    {
            id: "reprocessing-5",
            message: `For this first session, spend 10 minutes writing about the trauma starting at the beginning. You don’t need to finish the entire story, but spend the time giving a general overview of what happened.

            You can do this in the box below, or if you’d prefer, take a piece of paper and write it down on your own.
            
            When you’re done, take a deep breath and hit "I'm finished."`,
            trigger: "finished-writing-options"
          },
          {
            id:"finished-writing-options", 
            options:[
            {value:"y", label:"I'm finished", end: true}, // TO DO: EXPAND
            {value:"n", label:"Take me back to the beginning", trigger: "next"},
            ] 
          },
          // {
          //   id: "pcl-5",
          //   value: "Thanks for mentioning that. We'll walk you through a 20-question survey that will help you understand how severe your symptoms are and whether you may qualify for a diagnosis of PTSD. Note that this is not medical advice and to get a real diagnosis, you'll have to see a provider. We use a questionnaire that has been validated in the trauma research literature by clinical psychologists. Are you ready?",
          //   trigger: "q1"
          // },
          // {
          //   id: "q1",
          //   value: "Repeated, disturbing, and unwanted memories of the stressful experience(s)?",
          //   trigger: "a1",
          // },
          // answers[0],
          // {
          //   id: "q2",
          //   value: "Repeated, disturbing, and unwanted memories of the stressful experience(s)?",
          //   trigger: "a2"
          // },
          // answers[1],
          // {
          //   id: "q3",
          //   value: "last sample question",
          //   trigger: "next"
          // },
          {
            id: "next",
            message: "what would you like to do next?",
            trigger: "begin-options"
          },
          {
            id: "grounding",
            message: "The first step to trauma recovery is to start from a place of stability. To do that, we’re going to do a short grounding exercise. Are you ready?",
            // end: true,
            trigger: "options-to-return"
          },
          {
            id: "options-to-return",
            options: [
              {value:"y", label:"Yes", 
              // end: true
              trigger:"grounding-1"
            },
              {value:"n", label:"No, take me back to the beginning", 
              // end: true
              trigger:"next"
            },
            ]
          },
          {
            id: "grounding-1",
            message: "In the wake of trauma, you might experience periods of the day when your fear response is on overdrive, and the rational areas of your brain that think through and challenge that fear are not as active. It might even happen at times that don’t make any sense to you. Many people report feeling hypervigilant in situations that do not relate to their trauma, such as when at home or the gas station. This is because this area of the brain is not rational—it has no understanding of what’s safe and what’s not.",
            trigger: "check-for-questions"
          },
          {
            id: "check-for-questions",
            message: "Make sense so far?",
            trigger: "grounding-sense-check"
          },
          {
            id: "grounding-sense-check",
            options: [
              {value: "y", label: "yes", trigger: "grounding-2"},
              {value: "n", label: "no", trigger: "grounding-resources"}
            ]
          },
          {
            id: "grounding-2",
            message: `A few changes happen to your body when you have a fear response or something triggers your anxiety, and because of them, you might feel several things: 

            - Raised heart rate 
            - Sweaty palms 
            - Racing thoughts 
            - Shortness of breath
            - Fear, anxiety, or anger 
            - Or other related symptoms`,
            trigger: "grounding-3" 
          },
          {
            id: "grounding-3",
            message: "Grounding is a therapeutic technique that helps slow that whole process down and keep you focused on the present. It calms the body and activates more cognitive and rational thought processes by switching on your “rest and digest” body systems and turning off the alarm bells.",
            trigger: "grounding-4"
          },
          {
            id: "grounding-4",
            message: `Doing it before engaging in therapeutic activities is critical because it helps you start from a place of calm and centeredness. This is key to helping you feel safe as you engage more directly with your trauma.

            In fact, anytime you start to feel a fear response, you can use the grounding techniques we’ll teach you to calm down and recenter.
            `,
            trigger: "assess-ready-for-grounding"
          },
          {
            id: "assess-ready-for-grounding",
            message: "are you ready?",
            end: true //START HERE
          },
          {
            id: "grounding-resources",
            message: "learn a bit more about the physiology of trauma response here: https://bostoneveningtherapy.com/the-physiology-of-trauma/",
            trigger: "grounding-next"
          },
          {
            id: "grounding-next",
            message: "What would you like to do next?",
            trigger: "grounding-next-options"
          },
          {
            id: "grounding-next-options",
            options: [
              {value: "cont", label: "continue", trigger: "grounding-2"},
              {value: "beginning", label: "go back to the beginning", trigger: "next"}
            ]
          },

          // {
          //   id:"q-firstname", 
          //   message:"What is your first name?", 
          //   trigger:"firstname",
          // },
          // {
          //   id:"firstname", 
          //   user: true,
          //   trigger:"q-lastname"
          // },
          // {
          //   id:"q-lastname", 
          //   message:"What is your last name?", 
          //   trigger:"lastname",
          // },
          // {
          //   id:"lastname", 
          //   user: true,
          //   trigger:"q-email"
          // },
          // {
          //   id:"q-email", 
          //   message:"Finally. what is your email?", 
          //   trigger:"email",
          // },
          // {
          //   id:"email", 
          //   user: true,
          //   trigger:"q-submit"
          // },
          // {
          //   id:"q-submit", 
          //   message:"Do you wish to submit?", 
          //   trigger:"submit"
          // },
          // {
          //   id:"submit", 
          //   options:[
          //   {value:"y", label:"Yes", trigger:"end-message"},
          //   {value:"n", label:"No", trigger:"no-submit"},
          //   ] 
          // },
          // {
          //         id: "no-submit",
          //         message:"Your information was not submitted.", 
          //         end: true,
          //      },
          //           {
          //         id: "end-message",
          //         component: <Post />,
          //         asMessage: true,
          //         end: true,
          //      },
        ]}
      />
        
        );
      }

    }

    export default SimpleForm;
