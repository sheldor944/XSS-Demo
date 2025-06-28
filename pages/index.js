// pages/index.js
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="XSS Demo - Home">
      <section className={styles.intro}>
        <h2>What is Cross-Site Scripting (XSS)?</h2>
        <p>
          Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject client-side 
          scripts into web pages viewed by other users. This can be used to steal cookies, session tokens, 
          or other sensitive information.
        </p>
        <p>
          This demonstration shows how XSS can affect a simple comment system and how to prevent it.
        </p>
        
        {/* <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Vulnerable Demo</h3>
            <p>
              This page demonstrates a comment system that is vulnerable to XSS attacks.
              It allows script execution and HTML injection.
            </p>
            <Link href="/vulnerable">
              <span className={styles.button}>View Demo</span>
            </Link>
          </div>
          
          <div className={styles.card}>
            <h3>Safe Demo</h3>
            <p>
              This page demonstrates a comment system with proper XSS protection.
              It safely displays user input without executing scripts.
            </p>
            <Link href="/safe">
              <span className={styles.button}>View Demo</span>
            </Link>
          </div>
        </div> */}
        // Add this to the cardContainer in pages/index.js
<div className={styles.cardContainer}>
  <div className={styles.card}>
    <h3>Vulnerable Demo</h3>
    <p>
      This page demonstrates a comment system that is vulnerable to XSS attacks.
      It allows script execution and HTML injection.
    </p>
    <Link href="/vulnerable">
      <span className={styles.button}>View Demo</span>
    </Link>
  </div>
  
  <div className={styles.card}>
    <h3>Safe Demo (React)</h3>
    <p>
      This page demonstrates a comment system with React's built-in XSS protection.
      It safely displays user input without executing scripts.
    </p>
    <Link href="/safe">
      <span className={styles.button}>View Demo</span>
    </Link>
  </div>
  
  <div className={styles.card}>
    <h3>Safe Demo (Manual)</h3>
    <p>
      This page demonstrates manual HTML sanitization techniques to prevent XSS
      without relying on React's built-in protections.
    </p>
    <Link href="/manual-safe">
      <span className={styles.button}>View Demo</span>
    </Link>
  </div>
</div>


        <div className={styles.infoBox}>
          <h3>How to Test the XSS Vulnerability</h3>
          <p>Try posting a comment with the following content:</p>
          <pre><code>&lt;script&gt;alert("XSS Attack!")&lt;/script&gt;</code></pre>
          <p>Or try this to see styling injection:</p>
          <pre><code>&lt;div style="color:red;font-size:30px"&gt;Styled attack!&lt;/div&gt;</code></pre>
        </div>
      </section>
    </Layout>
  );
}