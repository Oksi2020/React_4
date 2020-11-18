import React from 'react';

import './input.css';
import PropTypes from 'prop-types';

import { ThemeContext } from './context.helper';

export const Input = ({ data,  placeholder,  handler })=> {

    let { type, name, value } = data;

    return(
        <ThemeContext.Consumer>
            {
                (theme) => (
                    <label 
                        className = {`input-label ${theme}`}
                    >
                    <div className = 'input-name'>{name}</div>
                    <input
                        name = {name}
                        type = {type}
                        placeholder = {placeholder}
                        value = {value}
                        onChange = {handler(theme)}
                    >
                    </input>
                </label>
                )
            }
        </ThemeContext.Consumer>
        
    )
}

Input.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
        value: PropTypes.oneOfType([PropTypes.string,PropTypes.any]),
        contentLength: PropTypes.bool,
        contentMaxLength: PropTypes.number
    }),
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired
}