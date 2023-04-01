import React from 'react';
import './Extrablog.css'
const Extrablog = () => {
    return (
        <div className='extrablog-parent'>
            <h1 className='qa-title'>Qustion and Answers</h1>
            <div className='extrablog-container'>
                <div className='extrablog'>
                    <h4>Q: Props vs state</h4>
                    <p>Answer: Props are used to customize the behavior or appearance of a child component and are read-only. State is used to manage the internal state of a component and is mutable. Props are passed from a parent component to a child component, while state is managed within a component. Props cannot be modified by the child component, while state can be modified by the component itself using setState(). Both are important concepts in React for building reusable components.</p>
                </div>
                <div className='extrablog'>
                    <h4>How does useState work?</h4>
                    <p>The useState hook is used to add state to a functional component in React. It returns an array with the current state value and a function to update it. The initial value passed to useState is only used the first time the component is rendered. To update the state, you call the update function with the new value, which triggers a re-render of the component with the new state value. This allows functional components to have state and to be re-rendered based on changes to that state.</p>
                </div>
                <div className='extrablog'>
                    <h4>Purpose of useEffect other than fetching data</h4>
                    <p>The useEffect hook in React is primarily used to handle side effects in functional components, which are operations that affect something outside of the current function. While useEffect is commonly used for fetching data, it can also be used for other side effects, such as manipulating the DOM or managing timers and intervals. useEffect can be used to subscribe to external events, such as WebSocket connections or window events. useEffect can be used to manage animations and transitions, for example, by using setTimeout and setInterval. useEffect can also be used to clean up resources, such as removing event listeners or canceling subscriptions. useEffect is a powerful hook that allows functional components to handle a wide variety of side effects.</p>
                </div>
                <div className='extrablog'>
                    <h4>How Does React work?</h4>
                    <p>React is a JavaScript library used for building user interfaces. React uses a virtual DOM to efficiently update the user interface. When the state or props of a component change, React updates the virtual DOM and compares it with the previous virtual DOM to determine the minimum number of changes needed to update the actual DOM. React then applies those changes to the actual DOM, resulting in an updated user interface. React also supports server-side rendering and can be used with a wide range of other tools and libraries.</p>
                </div>
            </div>
        </div>
    );
};

export default Extrablog;