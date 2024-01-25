# spectypes

[GitHub](https://github.com/iyegoroff/spectypes?tab=readme-ov-file)

장점

- CRA 환경에서 설정이 쉽다 (babel plugin만 추가하면 끝)
- node 18 기준 4위 정도의 검증 퍼포먼스 [참고](https://moltar.github.io/typescript-runtime-type-benchmarks/)
- 기본적으로 readonly다

단점

- 기본적으로 제공되는 validator가 적다
  예) 배열 길이 제한(min, max) 없음
- schema에서 타입을 뽑아 쓸 수 없다
