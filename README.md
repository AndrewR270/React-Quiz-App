# React-Quiz-App
A beginner React.js web application using Vite. From https://www.youtube.com/watch?v=3OqiKTyH4r0

## REACT - VITE App

Create a new directory and use **npx create-vite**.

Use project name **.** to create in the current directory, and use the React framework.

Use **npm run dev** to run the project locally.

## Files and Functions

The **.jsx** file type allows you to work with React components.

A React component is a function that returns UI.

Use **export default *[name]*** to allow functions to be called in other files.

## Objects in JavaScript

```
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
    
```

## Maps & References

Allows you to loop through lists in the UI from JavaScript arrays. Example syntax:

**{ arr[index].var.map((var) => (<p>{var}</p>))}**

The above code displays all entries present in an array *var*, which is an element in an object at *index* in *arr*.

The below code will print the value of the selected button in the console.

```

function handleSelectOption(option) {
    console.log(option)
}

return <div>
    { questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>{option}</button> 
    ))}
</div>

```

Note that if a button triggers a function which does not need parameters, code similarly to the following:

```
<button onClick={goToPrev}> Previous </button>

```

A new array can be set to the values of another with syntax like this:

```
const newUserAnswers = [...userAnswers];

```

## Re-Rendering with Hooks and States

Variables can change in code, but the visual appearance of the web application will not change unless React is told to rerender components to meet the new values.

**Variables which cause rerendering must be made *states.***

For example, a use-state hook goes as follows:

```
import React, { useState } from "react";

const [var, changeFunction] = useState([null or initVal]);

```

To use this hook to update the website, we can display the currently selected button value using the code below.


```
import React, { useState } from "react";

const [optionSelected, setOptionSelected] = useState("None");

function handleSelectOption(option) {
    setOptionSelected(option);
}

return <div>
    { questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>{option}</button> 
    ))}

    <p> Option Selected: {optionSelected} </p>
</div>

```