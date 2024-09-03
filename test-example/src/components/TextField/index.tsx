import { useState } from 'react';
import cn from 'classnames';

import './index.css';

interface TextFieldProps {
  className?: string;
  placeholder?: string;
  onFocus?: () => void;
  onChange?: () => void;
  onEnter?: () => void;
}

const focusedStyle = {
  borderWidth: 2,
  borderColor: 'rgb(25, 118, 210)',
  outlineStyle: 'none',
};

/**
 * placeholder 설정
 * className에 따른 css class 설정
 * 텍스트를 입력할 때마다 onChange 핸들러 호출
 * focus 시 border 스타일 변경
 * focus 시 onFocus 핸들러 호출
 * Enter 키 입력 시 onEnter 핸들러 호출
 */
function TextField({
  className,
  placeholder,
  onFocus,
  onChange,
  onEnter,
}: TextFieldProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.();
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onEnter?.();
    }
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
      className={cn('text-input', className)}
      placeholder={placeholder || '텍스트를 입력해 주세요.'}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleEnter}
      {...(isFocused && { style: focusedStyle })}
    />
  );
}

export default TextField;
