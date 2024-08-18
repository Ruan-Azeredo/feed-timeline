import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      <div className={styles.profile}>
        <strong>Ruan Azeredo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu Perfil</a>
      </footer>
    </aside>
  )
}

export default Sidebar