import React, { useState } from 'react';
import './Input.scss';

function Input({ baseText, maxLength, read, disable }) {
  const [text, setText] = useState(baseText || '');
  const [initialText, setInitialText] = useState(baseText || '');
  const [state, setState] = useState('default');
  const [count, setCount] = useState(baseText ? baseText.length : 0);

  const countWord = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length > maxLength) {
      return;
    }
    setCount(e.target.value.length);
    setText(e.target.value);
    // 입력중 상태 변환
    setState('typing');
    if (initialText === e.target.value) {
      setState('default');
    }
  };

  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <textarea
        className={`input ${state} ${read} ${disable}`}
        placeholder={'내용을 입력해주세요'}
        maxLength={`${maxLength}`}
        onChange={countWord}
        value={text}
        readOnly={read}
        disabled={disable}
      />
      <span className="word-count">{read || disable ? 500 : maxLength - count}</span>
      <button type="submit" className={`button ${state}`}>
        Save
      </button>
    </form>
  );
}

Input.defaultProps = {
  maxLength: 500,
  read: '',
  disable: '',
};
export default Input;
