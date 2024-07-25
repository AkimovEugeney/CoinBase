import { CSSProperties, FC, HTMLAttributes, MutableRefObject } from 'react';
import styles from './Input.module.scss';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  inputRef: MutableRefObject<null>;
  style?: CSSProperties;
  value: string;
  size?: 'lg';
  label?: string;
  type?: string;
}

export const Input: FC<IInputProps> = ({
  inputRef,
  style,
  value,
  size,
  label,
  type = 'text',
  ...props
}) => {
  return (
    <label className={styles.label} style={style}>
      {label}
      <input
        ref={inputRef}
        value={value}
        className={styles.input}
        data-size={size}
        type={type}
        {...props}
      />
    </label>
  );
};
