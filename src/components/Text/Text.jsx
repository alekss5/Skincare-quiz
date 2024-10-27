
import styles from './Text.module.css';

const Text = ({ children, className,style }) => (
  <div className={`${styles.text} ${className}`} style={style}>
    {children}
  </div>
);
export default Text
