# QR Sound – 공연용 PWA 스타터

## 사용법
1) `audio/` 폴더에 `demo.mp3`, `track1.mp3` 등 파일을 넣으세요.
2) `player.html?id=demo` 처럼 QR 코드에 파라미터(`id`)를 넣으면 해당 mp3가 재생됩니다.
3) iOS는 자동재생 정책 때문에, 공연 전 관객에게 앱을 열고 `🔊 소리 활성화` 버튼을 한 번 눌러달라고 안내하세요. 이후엔 자동으로 재생됩니다.
4) 이 폴더를 웹호스팅(예: Netlify, Vercel, GitHub Pages)으로 올리거나, 웹서버의 서브폴더로 배포하세요.
5) PWA로 설치하면(홈 화면 추가) 오프라인 캐시가 동작합니다. (서비스워커 sw.js 포함)

## QR 생성 예
- `https://yourdomain.com/qr_sound_pwa/player.html?id=demo`
- `https://yourdomain.com/qr_sound_pwa/player.html?id=stationA`
