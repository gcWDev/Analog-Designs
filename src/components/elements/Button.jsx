import React from "react";
import { motion } from 'framer-motion'
import { ReactSVG } from 'react-svg';


export default function Button(props) {
    const { buttonType, text, img, messageStatus } = props

    const blue = {
        backgroundColor: '#4153ef',
        color: 'white'
    }


    const grey = {
        backgroundColor: '#ededed',
        color: 'black'
    }

    const isLoading = messageStatus == 'loading'

    return (
        <div className="btn-container">
            <motion.button
                className={buttonType}
                whileHover={
                    buttonType == "primary-btn" ?
                        grey :
                        blue
                }
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                {text}
                {!isLoading && img && <ReactSVG src={img} />}
                {isLoading && <div class="loader"></div>}
            </motion.button>
        </div>
    )
}