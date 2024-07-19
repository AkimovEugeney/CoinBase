import { FC, HtmlHTMLAttributes } from 'react';
import { Loader } from '../Loader'
import styles from './Button.module.scss'

interface IButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled,
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button
    className={styles.button}
    type={type}
    disabled={isDisabled || isLoading}
    {...props}
    >
      {isLoading ? <Loader color="pink" /> : children}
    </button>
  )
};
