import * as React from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/common/Button';
import {
  LeftArrowIcon,
  LeftDoubleArrowIcon,
  RightArrowIcon,
  RightDoubleArrowIcon,
} from '../../../public/icons';

type PaginationArrowProps = {
  className?: string;
  href?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
};
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('flex flex-row items-center gap-2.5', className)}
    {...props}
  />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  children,
  ...props
}: PaginationLinkProps) => {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'pageActive' : 'pageDefault',
          size,
        }),
        className,
      )}
      {...props}
    >
      {/* children이 없는 경우 기본 텍스트 제공 (스크린 리더 지원) */}
      {children || <span className="sr-only">Page link</span>}
    </a>
  );
};
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  href,
  ...props
}: PaginationArrowProps) => {
  return (
    <a
      href={href}
      aria-label="Go to previous page"
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#1D2022]',
        className,
      )}
      {...props}
    >
      <LeftArrowIcon />
      <span className="sr-only">Previous</span>
    </a>
  );
};
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  href,
  ...props
}: PaginationArrowProps) => {
  return (
    <a
      href={href}
      aria-label="Go to next page"
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#1D2022]',
        className,
      )}
      {...props}
    >
      <span className="sr-only">Next</span>
      <RightArrowIcon />
    </a>
  );
};
PaginationNext.displayName = 'PaginationNext';

const PaginationFirst = ({
  className,
  href,
  ...props
}: PaginationArrowProps) => {
  return (
    <a
      href={href}
      aria-label="Go to first page"
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-full bg-white text-[##1D2022]',
        className,
      )}
      {...props}
    >
      <LeftDoubleArrowIcon />
      <span className="sr-only">First pages</span>
    </a>
  );
};
PaginationFirst.displayName = 'PaginationFirst';

const PaginationLast = ({
  className,
  href,
  ...props
}: PaginationArrowProps) => {
  return (
    <a
      href={href}
      aria-label="Go to last page"
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#1D2022]',
        className,
      )}
      {...props}
    >
      <span className="sr-only">Last pages</span>
      <RightDoubleArrowIcon />
    </a>
  );
};
PaginationLast.displayName = 'PaginationLast';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="w-4 h-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
};
