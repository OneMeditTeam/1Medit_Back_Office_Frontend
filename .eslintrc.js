module.exports = {
  root: true, // 이 ESLint 설정이 프로젝트의 최상위 설정임을 명시

  env: {
    browser: true, // 브라우저 환경에서 실행되는 코드 검사
    node: true, // Node.js 환경에서 실행되는 코드 검사
    es6: true, // ES6(ECMAScript 2015) 문법 지원
  },

  parser: '@typescript-eslint/parser', // TypeScript 코드 분석을 위한 파서 사용

  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript(ESNext) 기능을 지원
    sourceType: 'module', // ES 모듈(`import/export`) 문법 사용 가능
    project: './tsconfig.json', // TypeScript 프로젝트 설정 파일을 참조
    ecmaFeatures: {
      jsx: true, // JSX 문법 지원 (React 사용을 위한 설정)
    },
  },

  plugins: [
    '@typescript-eslint', // TypeScript 관련 ESLint 규칙 추가
    'react', // React 관련 ESLint 규칙 추가
    'prettier', // Prettier와 ESLint 통합
  ],

  extends: [
    'next/core-web-vitals', // Next.js 공식 ESLint 규칙 적용
    'airbnb', // Airbnb JavaScript 스타일 가이드 적용
    'airbnb-typescript', // TypeScript를 위한 Airbnb 스타일 가이드 적용
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint 추천 규칙 적용
    'plugin:react/recommended', // React ESLint 추천 규칙 적용
    'plugin:prettier/recommended', // Prettier와 ESLint 연동
    'prettier', // Prettier 포맷팅 규칙 적용 (Airbnb와 충돌 방지)
  ],

  rules: {
    'prettier/prettier': 'error', // Prettier 스타일 규칙 강제 적용
    'react/react-in-jsx-scope': 'off', // Next.js에서는 React import 불필요하므로 비활성화
    'react/jsx-props-no-spreading': 'off', // JSX에서 `...props` 사용 허용
    'import/extensions': 'off', // import 시 확장자(`.js`, `.jsx`, `.ts`, `.tsx`) 명시하지 않아도 됨
    'no-console': 'warn', // console.log 사용 시 경고 (배포 시 불필요한 로그 방지)
    'import/prefer-default-export': 'off', // export default를 권장하지 않음
    'react/require-default-props': 'off', // defaultProps를 꼭 정의할 필요 없음
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ], // 함수형 컴포넌트를 화살표 함수로 정의
  },

  settings: {
    'import/resolver': {
      typescript: {}, // TypeScript 경로 alias(`@/components` 등)를 인식하도록 설정
    },
  },

  ignorePatterns: ['build', 'dist', 'node_modules'], // ESLint 검사를 제외할 폴더 목록
};
