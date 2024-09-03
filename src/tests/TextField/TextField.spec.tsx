import { expect } from 'vitest';
import { screen } from '@testing-library/react';
import render from '@/tests/render';
import { TextField } from '@/components';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  const className = 'test-class';
  const placeholder = '텍스트를 입력해 주세요.';

  // Arrange
  // className을 지닌 컴포넌트 렌더링
  // render API 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌더링 된 DOM 구조 반영
  // jsDOM: Node.js에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현
  // https://github.com/jsdom/jsdom
  // screen.debug() -> 터미널에 jsdom 상태 확인가능
  await render(<TextField className={className} />);

  // Act
  // 렌더링에 대한 검증이기에 생략

  // Assert - 올바른 동작이 실행되었는지 검증
  // 렌더링 후 DOM에 해당 class가 존재하는지 검증
  expect(screen.getByPlaceholderText(placeholder)).toHaveClass(className);
});

describe('placeholder', () => {
  const placeholder = '텍스트를 입력해 주세요.';

  it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
    // Arrange
    await render(<TextField />);

    const textInput = screen.getByPlaceholderText(placeholder);

    // Assert
    expect(textInput).toBeInTheDocument();
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    const newPlaceholder = '변경된 placeholder...';

    // Arrange
    await render(<TextField placeholder={newPlaceholder} />);

    const texxtInput = screen.getByPlaceholderText(newPlaceholder);

    // Act
    expect(texxtInput).toBeInTheDocument();
  });
});

it('텍스트를 입력하면 onChange prop으로 등록한 함수가 호출된다.', async () => {
  const spy = vi.fn();
  const { user } = await render(<TextField onChange={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  await user.type(textInput, 'text');

  expect(spy).toHaveBeenCalled();
});

it('엔터키를 입력하면 onEnter prop으로 등록한 함수가 호출된다.', async () => {
  const spy = vi.fn();
  const { user } = await render(<TextField onEnter={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  await user.type(textInput, 'change placeholder...{Enter}');

  expect(spy).toHaveBeenCalled();
});

it('textField 요소를 클릭하여 focus가 활성화되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
  const spy = vi.fn();
  const { user } = await render(<TextField onFocus={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  await user.click(textInput);

  expect(spy).toHaveBeenCalled();
});

it('textField 요소를 클릭하여 focus가 활성화되면 border style이 변경된다.', async () => {
  const { user } = await render(<TextField />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  await user.click(textInput);

  expect(textInput).toHaveStyle({
    borderWidth: '2px',
    borderColor: 'rgb(25, 118, 210)',
  });
});
