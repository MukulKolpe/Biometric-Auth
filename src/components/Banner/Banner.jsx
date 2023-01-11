import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.mainHeader}>
      <a href="https://passage.id/">
        <div className={styles.passageLogo}></div>
      </a>
      <div className={styles.headerText}>Biometric-Auth</div>
      <div className={styles.spacer}></div>
    </div>
  );
}
export default Banner;
