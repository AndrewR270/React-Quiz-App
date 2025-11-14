import React, { use, useState } from "react";

function Quiz() {
    const questionBank = [
        {
            question: "Do you want the bread or the lotto ticket?",
            options: ["Bread", "Lotto Ticket"],
            answer: "Bread",
        },
        {
            question: "Which dalgona are you choosing?",
            options: ["Triangle", "Square", "Circle", "Umbrella"],
            answer: "Umbrella",
        },
        {
            question: "Have you played these games before?",
            options: ["Yes", "No", "Maybe so"],
            answer: "Yes",
        },
    ];

    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion < questionBank.length-1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return <div>
        <h2> Question {currentQuestion+1} </h2>
        <p>{questionBank.length}</p>
        <p className="question"> { questionBank[currentQuestion].question } </p>
        
        { questionBank[currentQuestion].options.map((option) => (
           <button className="option" onClick={() => handleSelectOption(option)}>{option}</button> 
        ))}

        <div className="nav-buttons">
            <button onClick={goToPrev}> Previous </button>
            <button onClick={goToNext}> Next </button>
        </div>
    </div>
}

export default Quiz;