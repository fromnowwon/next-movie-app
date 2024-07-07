# Movie App with Next.js

이 프로젝트는 영화 정보를 제공하는 Next.js 기반의 웹 애플리케이션입니다. 무비차트와 상영예정작 등의 영화 정보를 확인할 수 있습니다.

- [DEMO](https://next-movie-2xgd7v4w9-fromnowwons-projects.vercel.app)

![DEMO PAGE](./public/sample1.png)
![DEMO PAGE](./public/sample2.png)

## 주요 기능

- 무비차트, 상영예정작, 인기영화 등의 목록 표시
- 영화 클릭 시 상세 정보 페이지로 이동
- 영화 장르, 개봉일, 평점, 상영 시간 표시
- 영화 검색 기능
- 다크 모드 변경

## 설치 및 실행 방법

1. 저장소를 클론합니다.

```bash
git clone https://github.com/fromnowwon/next-movie-app
```

2. 프로젝트 폴더로 이동합니다.

```bash
cd next-movie-app
```

3. 필요한 패키지를 설치합니다.

```bash
npm install
```

4. 개발 서버를 실행합니다.

```bash
npm run dev
```

5. 웹 브라우저에서 `http://localhost:3000`을 엽니다.

## 사용 기술

- Next.js
- React
- JavaScript
- Tailwind CSS

## 폴더 및 파일 구조

```plaintext
├── public/
├── src/
│   ├── app/
│   │   ├── detail/
│   │   ├── movies/
│   │   ├── search/
│   │   ├── ticket/
│   │   ├── page.js
│   │   ├── layout.js
│   ├── components/
├── package.json
├── README.md
└── ...
```

- **src/**: 소스 코드가 포함된 디렉토리
  - **app/**: 페이지, 레이아웃 관리
  - **components/**: 컴포넌트 파일들

## 저자

- [Chaewon Jeong](https://github.com/fromnowwon)

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

```

위 README.md 예시는 프로젝트의 구조, 설치 및 실행 방법, 주요 기능, 기여 방법, 저자 정보, 라이센스 등을 포함하고 있습니다. 프로젝트의 특성에 맞게 세부적으로 수정하여 사용하시면 됩니다.
```
