import React, { Component } from 'react';
import { ThemeContext } from './context.helper'
import './button.css'

const Button = ({ action, style, children }) => {

    return (
        <ThemeContext.Consumer>
        {
            ( theme ) => (
                    <button
                        className = {`btn ${theme}`}
                        onClick = {action}
                    >
                        {children}
                    </button>
                ) 
        }
        </ThemeContext.Consumer>
    )

}

Button.defaultProps = {
        action: () => {console.log('this is button')},
        children: 'Button'
}

export default Button;