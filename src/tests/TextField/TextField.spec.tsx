import { expect } from 'vitest';
import { screen } from '@testing-library/react';
import render from '@/tests/render';
import { TextField } from '@/components';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  const className = 'test-class';

  // Arrange
  // className을 지닌 컴포넌트 렌더링
  // render API 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌더링 된 DOM 구조 반영
  // jsDOM: Node.js에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현
  // https://github.com/jsdom/jsdom
  // screen.debug() -> 터미널에 jsdom 상태 확인가능
  await render(<TextField className={className} />);

  // Act
  // 렌더링에 대한 검증이기에 생략
  // 렌더링 후 DOM에 해당 class가 존재하는지 검증

  // Assert - 올바른 동작이 실행되었는지 검증
  // 렌더링 후 DOM에 해당 class가 존재하는지 검증
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요')).toHaveClass(
    className,
  );
});

it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
  await render(<TextField />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  expect(textInput).toBeInTheDocument();
});
