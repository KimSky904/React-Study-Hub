// React.createElement
const img = React.createElement(
    'img', 
    { 
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title' 
    }
)

console.log(img) // 리액트 요소 객체 내용 확인
const rootElement = document.getElementById("root")

ReactDOM.render(img, rootElement) // render 함수 호출하여 리액트 요소 그리기
