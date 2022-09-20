import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'

  let [글제목, 글제목변경]  = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);

  let [따봉, set따봉] = useState(0);

  function 함수(){
    set따봉(따봉+1)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
      <button onClick={()=>{
          let copy = [...글제목]; // 복사할 state가 array,obj이면 ...으로 새롭게 복사해서 사용해야한다.
          copy[0] = '여자 코트 추천'
          글제목변경(copy)
        }}>버튼</button>
      <button onClick={()=>{
          let copy = [...글제목]; // 복사할 state가 array,obj이면 ...으로 새롭게 복사해서 사용해야한다.
          copy.sort();
          글제목변경(copy);
        }}>가나다순</button>
        <h4>{글제목[0]}<span onClick={함수}>👍</span> {따봉} </h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
      
    </div>
  );
}


function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
