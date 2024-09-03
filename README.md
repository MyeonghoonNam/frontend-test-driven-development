## 테스트란?

애플리케이션의 품질과 안정성을 높이려는 목적으로 **사전에 결함을 찾아내고 수정하기 위한 행위**이다.

다양한 테스트 방법이 존재하지만 개발자가 직접 테스트 코드를 작성하여 검증하는 회귀 테스트에 집중할 것이다.

주로 특정 모듈(컴포넌트)이 사양에 맞게 잘 동작하는지 **자동화된 테스트**로 검증한다.

자동화된 테스트로 검증하기에 굉장히 적은 비용으로 테스트를 작성할 수 있지만 개발자의 개발 비용이 증가하게 된다.

## 테스트 코드의 효과

### 1. 좋은 설계에 대한 사고를 도와준다.

테스트의 단위를 나누는 것이 중요한데, 결합도가 높은 컴포넌트를 구현하게 된다면 **결합도로 인한 테스트 복잡도가 향상**된다.

이로 인해 아래와 같은 문제점들이 발생할 수 있다.

- 특정 기능만 따로 검증하기 어려움
- 복잡한 구조로 인해 필요한 테스트가 누락될 수 있음
- 결합도가 높기에 여러 테스트 코드를 계속해서 수정해야 할 수 있음

위 문제를 고민하다 보면 원하는 기능을 적절한 컴포넌트로 분리하여 컴포넌트간 의존성을 줄이려는 설계가 자연스럽게 이어진다.

즉, **테스트 코드에 대한 고민이 컴포넌트 구조 설계까지 자연스럽게 이어진다는 점**이다.

### 2. 테스트 코드를 기반으로 빠르고 안정적이게 리팩토링 할 수 있다.

거대한 범위의 모듈을 수정하더라도 적절한 테스트 단위를 나누어 안정적이게 수정할 수 있다.

개발비용이 들 수 있지만, 리팩토링의 경우 유지보수 비용이 훨씬 줄어들게 된다.

### 3. 애플리케이션의 이해를 돕는 좋은 문서가 될 수 있다.

견고한 테스트 코드는 앱의 안전성 증진뿐 아니라, 전반적인 개발구조나 코드에 긍정적 영향을 끼친다.

## 올바른 테스트 작성을 위한 규칙

### 1. 인터페이스를 기준으로 테스트를 작성하자

> **인터페이스(Interface)** </br>
> 서로 다른 클래스 또는 모듈이 상호작용하는 시스템

내부 구현에 대한 테스트는 캡슐화를 위반하며 유지보수가 어려운 테스트 코드를 생산하게 된다.

그렇기에 인터페이스를 기준으로 캡슐화에 위반하지 않으며 종속성이 없는 테스트 코드를 작성하려고 해야한다.

즉, 모든 테스트는 내부의 세부구현을 테스트하는 것이 아닌 **외부에 노출되는 인터페이스를 기준**으로 작성해야한다.

### 2. 100% 커버리지보다는 의미 있는 테스트인지 고민하자

> **코드 커버리지(Code Coverage)** </br>
> 테스트 코드가 프로덕션 코드를 얼마나 검증하는지를 백분율로 나타내는 지표이다.

단순 커버리지만을 고민하여 큰 유지 보수 비용이 발생되는 검증이 아닌, 진정으로 의미 있는 테스트 코드가 무엇인지에 집중하자.

커버리지 수치가 맹신할 정도로 실제 검증 여부를 확인하진 않기에 더더욱 주의하자.

커버리지가 검증의 백분율 지표이지만, 구체적인 테스트 코드가 범위적으로만 테스트 할 뿐 모든 요소에 테스트가 검증되지 않을 수 있다.

어떤 범위의 효율적인 테스트 코드를 작성할지 많은 고민이 필요하다.

### 3. 테스트 코드도 유지 보수의 대상이며, 가독성을 높이자

테스트 하기 전에 테스트 하고자 하는 내용이 명확하여야 하며, 하나의 테스트에는 가급적 하나의 동작만 검증하자.

프로덕션 코드를 개발할 때, 단일 책임 원칙을 신경쓰듯이, 테스트 코드 역시 마찬가지이다.

> **단일 책임 원칙(SRP, Single Responsibility Principle)** </br>
> 모든 클래스는 하나의 책임을 갖고 그와 관련된 책임을 캡슐화하여 변경에 견고한 코드를 만들어야 한다.

## 단위 테스트란?

앱에서 테스트 가능한 가장 작은 소프트웨어(=단일 함수 또는 단일 컴포넌트)를 실행하여 **예상대로 동작(=결괏값 또는 UI), 행위를 검증**하는지 확인하는 테스트

### 공통 컴포넌트는 단위 테스트에 적합하다.

다른 컴포넌트와의 상호작용이 없다.

컴포넌트 내부 비지니스 로직을 기능 단위로 나눠 검증하기 좋다.

범용적으로 재사용 되기 때문에 단위 테스트를 통해 안정성을 높여야 한다.

### AAA 테스트 작성 패턴(Arrange-Act-Assert)

Arrange: 테스트를 위한 환경 만들기(컴포넌트 렌더링)

Act: 테스트할 동작 발생(클릭, 타이핑, 메서트 호출 등)

Assert: 올바른 동작이 실행 되었는지 또는 변경사항 검증하기

### 단위 테스트 코드 작성 유의사항

상세한 테스트 디스크립션을 통해 가독성을 향상시키자

내부 DOM구조나 로직에 영향을 받지 않게 테스팅 라이브러리 API를 통해 적절한 요소를 검증하자

컴포넌트의 최종 렌더링 결과물인 DOM 구조가 올바르게 변경되었는지 검증하자

### 테스트 환경과 매처(Matcher)

### vitest

별다른 설정 없이 vite 기반에서 테스트 구동 가능

추가 설정 없이 ESM, TypeScript, JSX 사용 가능

Jest 호환 API 및 가이드 제공

[공식문서](https://vitest.dev/)를 통해 매처 api들 확인하기

### setup과 teardown

**모든 테스트는 독립적으로 실행되어야 한다.**

검증이 성공한 테스트들의 순서를 바꿨는데 검증이 실패한다면 이는 좋은 테스트라고 할 수 없다.

**setup**: 테스트를 실행하기 전 수행해야 하는 작업
**teardown**: 테스트를 실행한 뒤 수행해야 하는 작업

setup과 teardown을 통해 테스트 실행 전, 후 실행되어야 할 반복 작업을 관리할 수 있다.

테스트 별로 독립적인 스코프로 동작하기에 독립접인 테스트 구성에 용이하다.

setup과 teardown에서 전역 변수를 사용한 조건 처리는 독립성을 보장하지 못할 수 있으니 가급적 독립적인 변수만 사용하자.

### React Testing Library와 컴포넌트 테스트

> React Testing Library의 핵심 철학</br><i>**"UI 컴포넌트를 사용자가 사용하는 방식**으로 테스트 하자"</i>

사용자가 사용하는 방식이란 DOM 노드를 조회하고 사용자와 비슷한 방식으로 이벤트를 발생시키는 것이다.

React Testing Library는 아래와 같은 특징이 있다.

- UI 컴포넌트를 사용자가 사용하는 방식으로 테스트
- DOM과 이벤트 인터페이스를 기반으로 요소를 조회하고, 다양한 동작을 시뮬레이션
- 인터페이스 기반의 직관적인 코드와 내부 구현에 종속되지 않는 견고한 테스트 코드
- spy 함수를 통해 콜백 함수나 이벤트 핸들러의 검증이 수월하다.
