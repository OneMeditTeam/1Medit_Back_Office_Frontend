module.exports = {
  root: true, // 이 ESLint 설정이 프로젝트의 최상위 설정임을 의미

  env: {
    browser: true, // 브라우저 환경에서 실행되는 코드를 검사
    node: true, // Node.js 환경에서 실행되는 코드를 검사
    es6: true, // ES6(ECMAScript 2015) 문법을 지원
  },

  parser: '@typescript-eslint/parser', // TypeScript 코드를 분석하기 위한 파서 사용

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
    'import', // import/export 관련 규칙 추가
    'prettier', // Prettier와 ESLint 통합
  ],

  extends: [
    'eslint:recommended', // 기본적인 ESLint 추천 규칙 사용
    'airbnb', // Airbnb JavaScript 스타일 가이드 적용
    'airbnb/hooks', // React Hooks 관련 Airbnb 스타일 가이드 적용
    'airbnb-typescript', // TypeScript를 위한 Airbnb 스타일 가이드 적용
    'next/core-web-vitals', // Next.js 최적화 및 웹 바이탈 관련 규칙 적용
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint 추천 규칙 적용
    'plugin:react/recommended', // React ESLint 추천 규칙 적용
    'plugin:prettier/recommended', // Prettier와 ESLint 연동
    'prettier', // Prettier 포맷팅 규칙 적용
  ],

  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js에서는 `React`를 수동으로 import할 필요 없으므로 비활성화
    'react/jsx-props-no-spreading': 'off', // JSX에서 `...props` 사용 허용
    'react/prop-types': 'off', // TypeScript를 사용하므로 `prop-types` 검사를 비활성화
    'react/require-default-props': 'off', // TypeScript에서 기본 props는 명시적으로 정의하지 않아도 되므로 비활성화
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // 함수형 컴포넌트는 화살표 함수(`const Component = () => {}`)로 강제
        unnamedComponents: 'arrow-function', // 익명 컴포넌트도 화살표 함수 사용 강제
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true, // 내용이 없는 React 컴포넌트는 `<Component />` 형식으로 강제
        html: true, // 내용이 없는 HTML 요소도 `<img />`, `<br />` 등의 self-closing 형식으로 강제
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.ts', '.tsx'], // JSX 파일은 `.tsx` 또는 `.ts` 확장자를 사용해야 함
      },
    ],
    '@typescript-eslint/camelcase': 'off', // camelCase 강제 규칙 비활성화 (이전 버전과의 호환성을 위해)
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never', // `.js` 확장자를 명시하지 않도록 강제 (`import Example from './example'`)
        jsx: 'never', // `.jsx` 확장자를 명시하지 않도록 강제
        ts: 'never', // `.ts` 확장자를 명시하지 않도록 강제
        tsx: 'never', // `.tsx` 확장자를 명시하지 않도록 강제
      },
    ],
    'no-console': 'error', // `console.log()` 등의 사용을 금지 (배포 코드에서 불필요한 로그 방지)
    'import/prefer-default-export': 'off', // 단일 export만 있는 경우에도 named export를 허용
  },

  settings: {
    'import/resolver': {
      typescript: {}, // TypeScript 경로 alias(`@/components` 등)를 인식하도록 설정
    },
  },

  ignorePatterns: ['build', 'dist', 'public'], // ESLint 검사를 제외할 폴더 목록
};
