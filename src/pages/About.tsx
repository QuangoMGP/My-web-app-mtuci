// import React from 'react';
import Button from '../components/Button';
function About() {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <Button
        label="Нажми меня"
        onClick={() => alert('Кнопка нажата!')}
        color="blue"
        size="large"
/> </div>
); }
export default About;