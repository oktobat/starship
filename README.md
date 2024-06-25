개발할때는 아래 세군데 경로를 '/'로 하고, build 할때는 아래처럼 변경할것

1. router의 index.js 파일에 base 옵션 경로('/' -> '/리포지토리명') 변경
2. ProductDetailSection에 상세이미지 경로('/' -> '/리포지토리명/') 변경
3. vite.config.js에서 publicPath 경로('/' -> '/리포지토리명') 변경
4. build 후 dist 폴더에 있는 index.html의 /assets/~ 경로(. 추가) 변경 ./assets/~
