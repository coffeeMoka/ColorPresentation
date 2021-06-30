import React, { useState, useRef } from 'react';
import {
  TextField
} from '@material-ui/core';

type Props = {
    label: string
}

export default function ColorTextField({label}: Props) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputError, setInputError] = useState(false);

    const handleChange = () => {
        if(inputRef.current) {
            const ref = inputRef.current;
            if(!ref.validity.valid) setInputError(true);
            else setInputError(false);
        }
    }

    return (
        <TextField
          inputRef={inputRef}
          error={inputError} 
          variant="filled" 
          inputProps={{maxLength: 6, minLength: 6, pattern: "[a-fA-F0-9]+"}}
          label={label}
          onChange={handleChange}
        />
    )
}