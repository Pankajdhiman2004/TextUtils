import React, { useState } from 'react';
import styled from 'styled-components';

export default function TextForm(props) {
  const textArea1 = document.querySelector('.text-box #textbox');
  const textMode = props.mode === 'dark' ? 'light' : 'dark';
  const btnMode =
    props.mode === 'dark'
      ? 'btn btn-warning me-2 mb-2'
      : 'btn btn-primary me-2 mb-2';

  const [text, setText] = useState('');
  //   setText('Enter new text');

  const myStyle = {
    backgroundColor: `${props.mode === 'light' ? '#f8f9fa' : '#212529'}`,
  };

  textArea1?.addEventListener('focusin', function () {
    this.closest('.text-box').querySelector('label').classList.add('active');
  });

  textArea1?.addEventListener('focusout', function () {
    if (!this.value) {
      this.closest('.text-box')
        .querySelector('label')
        .classList.remove('active');
    }
  });

  const handleOnchange = e => {
    setText(e.target.value);
  };

  const handleClickUpper = () => {
    if (textArea1?.value) {
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Text has been changed to uppercase', 'success');
    } else {
      props.showAlert('Please enter some text in the textarea', 'warning');
    }
  };

  const handleClickLower = () => {
    if (textArea1?.value) {
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Text has been changed to lowercase', 'success');
    } else {
      props.showAlert('Please enter some text in the textarea', 'warning');
    }
  };

  const clearText = () => {
    if (textArea1?.value) {
      let newText = '';
      setText(newText);
      props.showAlert('Text cleared!', 'success');
    } else {
      props.showAlert('There is nothing to clear in the textarea', 'warning');
    }
  };

  const handleCopy = () => {
    if (textArea1?.value) {
      navigator.clipboard.writeText(text);
      props.showAlert('Text copied!', 'success');
      props.showAlert('Text copied!', 'success');
    } else {
      props.showAlert('No text found!', 'warning');
    }
  };

  const handleExtraSpaces = () => {
    if (textArea1?.value) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('Extra spaces removed!', 'success');
    } else {
      props.showAlert('Please enter some text in the textarea', 'warning');
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className={`text-start text-${textMode}`}>
          <h1 className="mb-3">{props.heading}</h1>
          <div className="text-box mb-3">
            <label
              htmlFor="textbox"
              className={`form-label textboxlabel`}
              style={myStyle}
            >
              Enter text here
            </label>
            <textarea
              className={`form-control text-${textMode} bg-${props.mode}`}
              value={text}
              onChange={handleOnchange}
              id="textbox"
              rows="8"
            ></textarea>
          </div>
          <button className={btnMode} onClick={handleClickUpper}>
            Convert to uppercase
          </button>
          <button className={btnMode} onClick={handleClickLower}>
            Convert to lowercase
          </button>
          <button className={btnMode} onClick={clearText}>
            Clear Text
          </button>
          <button className={btnMode} onClick={handleCopy}>
            Copy Text
          </button>
          <button className={btnMode} onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
        </div>
      </div>

      <div className={`container my-3 text-start text-${textMode}`}>
        <h1>Your text summary</h1>
        <p className="mb-3">
          {text.split(' ').length - 1} word(s) and {text.length} characters
        </p>
        <p className="mb-3">
          It will take a max of
          <span className="mx-2">{(text.split(' ').length - 1) * 0.008}</span>
          minutes to read this text.
        </p>
        <h3>Preview</h3>
        <p>
          {text
            ? text
            : 'Please write some text in the textbox to preview here.'}
        </p>
      </div>
    </>
  );
}
