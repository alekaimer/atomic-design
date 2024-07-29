import styles from './List.module.css'

interface ListProps {
  children: React.ReactNode
}

export const List = ({ children }: ListProps) => {

  return <div className={styles.wrapper}>{children}</div>
}

