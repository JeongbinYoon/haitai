## Haitai project-2022-04-22

## 프로젝트 정보

---

> 본 프로젝트는 해태제과 메인 페이지 클론 프로젝트이다. 각 섹션과 애니메이션 적용이 필요한 단위별로 컴포넌트를 나누어 협업을 통해 제작했다.
> Typescript를기반하여 React로 제작했다.

---

## 역할분담

---

> [팀장] 윤정빈 : HTHeader, HTMain, HTHoneystory, HTSweetNews, HTLink
>
> [팀원] 이승기 : HTCompany
>
> [팀원] 유성현 : HTFooter

## Fullpage.js

---

> Fullpage.js를 설치하여 스크롤이 한 번 될 때마다 풀페이지 스크롤이 가능하도록 하였다.
> 스크롤을 원하는 부분에만 클랙스명을 section으로 지정하였다.

## HTHeader

---

> Header의 각 메뉴에 마우스 오버 되었을 때 HTHeader_sub 컴포넌트가 나타나도록 했다.
>
> Header의 각 메뉴와 HTHeader_sub의 각 카테고리에 마우스 오버시 setInterval() 함수를 활용해 position 값을 변경하여 애니메이션 효과를 만들었다.

## HTMain

---

> HTMain 컴포넌트에는 애니메이션이 필요한 단위별로 하위 컴포넌트를 생성하였다.
>
> 애니메이션은 여러개의 이미지로 구성된 경우에는 setInterval() 함수를 활용해 position 값을 변경하여 구현했고 하나의 이미지인 경우에는 CSS의 animtaion 속성과 keyframes를 사용하여 구현했다.

## HTCompany

---

> 이미지로 구성된 요소는 CSS flex 속성으로 배치했다.

## HTHoneyStory

---

> 벌과 캡션의 움직이는 이미지들은 모두 여러개의 이미지로 이루어져 있기 때문에 특정 시간마다 position 값을 변경하여 움직임을 구현했다.

## HTSweetNews

---

> 리스트로 여러개의 박스를 만들고 CSS의 flex 속성으로 배치했다. 본문의 많은 양의 글들은 line-clamp 속성으로 3줄 이상 넘어갈 시 숨기도록 했다.

## HTLink

---

> 마우스 오버시 정적인 이미지에서 움직이는 애니메이션이 보인다. 움직이는 이미지들은 여러개의 이미지로 구성되어 있지 않고 단순히 gif 형식의 이미지이기 때문에 마우스 오버시 이미지명의 "png" 문자를 replace() 함수를 이용하여 "gif"로 변경하였다.

## HTFooter

---

> CSS의 flex 속성으로 요소들을 배치하였고 FAMILY SITE는 클릭시 리스트가 보이고 숨겨질 수 있도록 하였다.
