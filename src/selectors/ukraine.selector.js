import { useState } from 'react';
import { motion } from 'framer-motion';
import './ukraine.styles.css'


export default function UkraineSelector() {

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
        <div id = 'main-cont'>
            <h2>About the Cause</h2>
            <div id = "ukraine-qs">
                <div id = 'dropdown'>
                    
                    {q1 ? (<input id = 'select-controller' placeholder = 'General Overview' readOnly = {true} />) : (
                        q2 ? (<input id = 'select-controller' placeholder = 'Effects of the Crisis' readOnly = {true} />) : (
                            q3 ? (<input id = 'select-controller' placeholder = 'What You Can Do' readOnly = {true} />) : (
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
                                <motion.div custom = {0} initial = "hidden" animate = 'visible' variants = {dropdownItem} onClick = {handleQ1}>General Overview</motion.div>
                                <motion.div custom = {1} initial = "hidden" animate = 'visible' variants = {dropdownItem} onClick = {handleQ2}>Effects of the Crisis</motion.div>
                                <motion.div custom = {2} initial = "hidden" animate = 'visible' variants = {dropdownItem} onClick = {handleQ3}>What You Can Do</motion.div>
                            </motion.div>
                            ) : (null)
                    }
                </div>
                {
                    (q1) ?
                        (<motion.dl custom = {1} initial = 'hidden' animate = 'visible'variants = {question} id = 'qa'>
                                <dt id = "q">What is happening in Ukraine?</dt>
                                <dd id = "a">Lorem ipsum dolor salat. This is where the answer will go.</dd>
                        </motion.dl>) : 
                            (q2) ? 
                                (<motion.dl custom = {1} initial = 'hidden' animate = 'visible'variants = {question} id = 'qa'>
                                    <dt id = "q">What are the situation's global consequences?</dt>
                                    <dd id = "a">Lorem ipsum dolor salat. This is where the answer will go.</dd>
                                </motion.dl>) : 
                                    (q3) ? 
                                        (<motion.dl custom = {1} initial = 'hidden' animate = 'visible'variants = {question} id = 'qa'>
                                            <dt id = "q">How can I support the people of Ukraine?</dt>
                                            <dd id = "a">Lorem ipsum dolor salat. This is where the answer will go.</dd>
                                        </motion.dl>) : 
                                            (null)
                }
            </div>
        </div>        
    );
}