// const setWordList = (data) => {
//   document.getElementById('result').textContent = data
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('showWordList')

//   button.addEventListener('click', () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//           action: 'showWordList',
//           wordList: ['데이트 폭력', '페미니즘', '가정폭력'],
//         },
//         setWordList
//       )
//     })
//   })
// })


// 이벤트 핸들러를 패시브로 설정
window.addEventListener('touchstart', handleTouchStart, { passive: true });

function handleTouchStart(event) {
  // 이벤트 처리 로직
}


const setWordList = (data) => {
  document.getElementById('result').textContent = data;
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('showWordList');

  button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'showWordList' }, (response) => {
      setWordList(response);
    });
  });
});
