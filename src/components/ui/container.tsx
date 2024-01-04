import { WrapperType } from '../../utils/types';
import { twMerge } from 'tailwind-merge';

type ContainerProps = WrapperType & {
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <section className={twMerge('mx-auto max-w-[1200px] px-5', className)}>
      {children}
    </section>
  );
}
