# 수학-정보 융합 교육을 위한 인터렉티브 데이터 시각화 수업 도구 설계

수학적 개념을 Python으로 풀어내 시각화하는 것을 용이하게 하는 matplotlib를 GUI로 Wrapping한 수업도구입니다.

## 사용 방법
- [https://csedu.sehwan.dev](https://csedu.sehwan.dev) 에 접속
- 좌측 상단 `목록`에 그리고자 하는 그래프를 설정한다. (점/선, 색깔, 변수명)
- 우측 코드 작성란에 설정해둔 변수명에 데이터를 담는 코드를 작성한다. 그래프 변수명의 데이터는 `(x, y)` 튜플을 담은 리스트여야 합니다. 필요하다면 `print`도 사용할 수 있습니다.
- 실행하기를 누르면 좌측 하단에 그래프가 나오고, 우측 하단에는 출력 내용이 나옵니다.

## 사용 예시
사용 예시에 사용된 코드는 [`example`](https://github.com/NormalPlayerJSH/CS-Math-Interactive/tree/main/example) 폴더에서 확인하실 수 있습니다.

### 원의 방정식
원의 방정식의 내부와 외부 여부를 판별해 다른 점으로 표시하는 과정을 통해 원의 방정식을 통해 실제로 원이 그려질 수 있음을 확인한다. 또 골고루 분포된 점의 개수는 곧 넓이와 비례하므로 점의 개수의 비율과 실제 넓이의 개수의 비율을 비교해 이것이 유사함을 확인한다.

![원의 방정식 이미지](https://github.com/NormalPlayerJSH/CS-Math-Interactive/assets/37856995/3f8d67b6-648f-468c-a63a-352a87bbfe54)

### 미분의 이해
미분과 기울기의 연관성을 그래프를 통해 알아본다. h값이 작아져갈수록 점점 미분값에 근접해감을 확인한다.

![미분의 이해 이미지](https://github.com/NormalPlayerJSH/CS-Math-Interactive/assets/37856995/7f36a476-948d-4de4-a207-58848d401435)

## 직접 실행 방법
### 사전 환경
이 프로그램은 `Python 3`와 `Matplotlib`를 사용하므로 이들이 미리 설치되어 있어야 합니다.
```
python3 -c "import matplotlib"
```
를 실행한 후 오류가 발생하지 않아야 합니다.
그 외 이 프로그램은 `Next.js`를 기반으로 작성되었으므로 `Node.js 18` 이상의 버전을 필요로 합니다.

### 설치 및 실행
```
git clone https://github.com/NormalPlayerJSH/CS-Math-Interactive.git
cd CS-Math-Interactive
npm install
npm run build
npm run start
```