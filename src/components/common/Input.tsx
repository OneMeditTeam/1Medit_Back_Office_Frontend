import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      inputWidth: {
        w167: 'w-[167px]', // 회원상세정보, 팝업공지관리 위치 입력
        w190: 'w-[190px]', // 검색창 입력, 쿠폰명-할인금액
        w221: 'w-[221px]', // 로그인창 입력
        w234: 'w-[234px]', // email 입력
        w358: 'w-[358px]', // 유저이메일 전체
        w598: 'w-[598px]', // 계정생성
        w650: 'w-[650px]',
        w1130: 'w-[1130px]', // 제목 입력
        full: 'w-full', // 전체 너비
      },
    },
    defaultVariants: {
      inputWidth: 'full',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputWidth, type, containerClassName, defaultValue, ...props },
    ref,
  ) => {
    return (
      <div className={cn('flex flex-col gap-1.5', containerClassName)}>
        <input
          type={type}
          className={cn(inputVariants({ inputWidth, className }))}
          ref={ref}
          defaultValue={defaultValue}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants };
