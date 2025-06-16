// Chatbot.js
import React, { useState } from 'react';
import '../../chatbot.css';

const Chatbot = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [content, setContent] = useState("");
  const personalContent = [
    "Here is something about me",
    "Here is my work experience",
    "Here is my academic journey",
    "Here are my projects",
    "Here are my certifications"
  ]

  if (!isVisible) return null;

  function setPersonalContent(index: number) {
    if (currentStep == 0 || currentStep == 4) {
      if (index == 0) {
        setIsCollapsed(!isCollapsed);
      }
        setCurrentStep(1);
    }
    else if (currentStep == 1) {
      setContent(personalContent[index]);
      setCurrentStep((prev) => prev+1);
    }
    else if (currentStep == 2) {
      if (index == 0) {
        setCurrentStep((prev) => prev+1);
      }
      else if (index == 1) {
        setCurrentStep(0);
      }
      else {
        setCurrentStep(4);
      }
    }
    else {
      setContent(personalContent[index]);
      setCurrentStep(2);
    }
    
  }

  return (
    <div className={`chatbot-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="chatbot-header">
        <span>Want to know more?</span>
        <div>
          <button
            className="collapse-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'Expand' : 'Collapse'}
          >
            {isCollapsed ? '⬆' : '⬇'}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <>
          <div className="chatbot-body">
            <p dangerouslySetInnerHTML={{ __html: steps[currentStep].message.replace("REPLACE_CONTENT", content)}} style={{marginBottom: "30px"}} />
            <div style={{display: "flex", "flexDirection": "column"}}>
            {
             steps[currentStep].options.map((option: string, index: number) => {
              return (
                <button className='chatbot-btns' onClick={() => setPersonalContent(index)}>{option}</button>
              )
            })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
