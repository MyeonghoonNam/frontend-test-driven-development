import { useState } from 'react';
import './TextField.css';
interface TextFieldProps {
  placeholder?: string;
  onFocus?: () => void;
  onChange?: () => void;
}

const focusedStyle = {
  borderWidth: 2,
  borderColor: 'rgb(25, 118, 210)',
  outlineStyle: 'none',
};

function TextField({ placeholder, onFocus, onChange }: TextFieldProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.();
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type="text"
      value={value}
      className={'text-input'}
      placeholder={placeholder || '텍스트를 입력해 주세요'}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...(isFocused && { style: focusedStyle })}
    />
  );
}

export default TextField;
