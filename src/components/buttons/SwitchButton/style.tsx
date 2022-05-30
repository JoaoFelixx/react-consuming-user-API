import styled from 'styled-components';

const Switch = styled.div`
  .switch {
    position: absolute;
    visibility: hidden;
  }
  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }
  .switch--shadow + label {
    padding: 2px;
    width: 60px;
    height: 30px;
    background-color: #dddddd;
    border-radius: 60px;
  }
  .switch--shadow + label:before,
  .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: all 0.4s;
  }
  .switch--shadow + label:after {
    width: 32px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }
  .switch--shadow:checked + label:before {
    background-color: #0099ff;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(24px);
  }
`;

export { Switch };