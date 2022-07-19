import { useState } from 'react';
import { motion } from 'framer-motion';
import './event.styles.css'


export default function EventSelector() {

    const dropdownItem = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i*0.075
            }
        }),
        hidden: { opacity: 0}
    }
    const question = {
        visible: i => ({
            x: 0, 
            transition: {
                delay: 0.025
            }
        }),
        hidden: { x: -500 }
    }

    const [dropdown, setDropdown] = useState(false);
    
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
        setQ1(false);    
        setQ2(false);    
        setQ3(false);    
    }
    const handleQ1 = () => {
        setDropdown(false);
        setQ1(true);
        setQ2(false);
        setQ3(false);
    }
    const handleQ2 = () => {
        setDropdown(false);
        setQ1(false);
        setQ2(true);
        setQ3(false);
    }
    const handleQ3 = () => {
        setDropdown(false);
        setQ1(false);
        setQ2(false);
        setQ3(true);
    }
    return (
        <div id = 'event-cont'>
            <h2>About the Event</h2>
            <div id = "event-qs">
                <div id = 'dropdown'>
                    
                    {q1 ? (<input id = 'select-controller' placeholder = 'Event Setting' readOnly = {true} />) : (
                        q2 ? (<input id = 'select-controller' placeholder = 'Registration' readOnly = {true} />) : (
                            q3 ? (<input id = 'select-controller' placeholder = 'The Run' readOnly = {true} />) : (
                                (<input id = 'select-controller' placeholder = 'Select a topic for more info' readOnly = {true} />)
                            )
                        )
                    )}
                    {dropdown ? 
                        (<div id = 'active-cover' onClick = {handleDropdown}>
                            <div id = 'active-arrow'></div>
                        </div>) : (
                        <div id = 'select-cover' onClick = {handleDropdown}>
                            <div id = 'arrow'></div>
                        </div>
                    )}
                    {
                        (dropdown) ? 
                            (
                            <motion.div id = "options">
                                <motion.div custom = {0} initial = "hidden" animate = 'visible' variants = {dropdownItem} onClick = {handleQ1}>Event Setting</motion.div>
                                <motion.div custom = {1} initial = "hidden" animate = 'visible' variants = {dropdownItem} onClick = {handleQ2}>Registration</motion.div>
                                <motion.div custom = {2} initial = "hidden" animate = 'visible' variants = {dropdownItem} onClick = {handleQ3}>The Run</motion.div>
                            </motion.div>
                            ) : (null)
                    }
                </div>
                {
                    (q1) ?
                        (<motion.dl custom = {1} initial = 'hidden' animate = 'visible'variants = {question} id = 'qa'>
                                <dt id = "q">When and where is the Run for Ukraine?</dt>
                                <dd id = "a">Lorem ipsum dolor salat. This is where the answer will go.</dd>
                        </motion.dl>) : 
                            (q2) ? 
                                (<motion.dl custom = {1} initial = 'hidden' animate = 'visible'variants = {question} id = 'qa'>
                                    <dt id = "q">What is the registration procedure for the run?</dt>
                                    <dd id = "a">Lorem ipsum dolor salat. This is where the answer will go.</dd>
                                </motion.dl>) : 
                                    (q3) ? 
                                        (<motion.dl custom = {1} initial = 'hidden' animate = 'visible'variants = {question} id = 'qa'>
                                            <dt id = "q">What can I expect on the day of the event?</dt>
                                            <dd id = "a">Lorem ipsum dolor salat. This is where the answer will go.</dd>
                                        </motion.dl>) : 
                                            (null)
                }
            </div>
        </div>        
    );
}