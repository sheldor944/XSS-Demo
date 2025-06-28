// // components/Layout.js
// import Head from 'next/head';
// import Link from 'next/link';
// import styles from '../styles/Home.module.css';

// export default function Layout({ children, title = 'XSS Demo' }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content="XSS vulnerability demonstration" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>XSS Vulnerability Demonstration</h1>
        
//         <nav className={styles.nav}>
//           <ul>
//             <li>
//               <Link href="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/vulnerable">
//                 Vulnerable Demo
//               </Link>
//             </li>
//             <li>
//               <Link href="/safe">
//                 Safe Demo
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {children}
//       </main>

//       <footer className={styles.footer}>
//         <p>Educational demonstration - Use responsibly</p>
//       </footer>
//     </div>
//   );
// }
// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Layout({ children, title = 'XSS Demo' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="XSS vulnerability demonstration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>XSS Vulnerability Demonstration</h1>
        
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vulnerable">
                Vulnerable Demo
              </Link>
            </li>
            <li>
              <Link href="/safe">
                Safe Demo (React)
              </Link>
            </li>
            <li>
              <Link href="/manual-safe">
                Safe Demo (Manual)
              </Link>
            </li>
          </ul>
        </nav>

        {children}
      </main>

      <footer className={styles.footer}>
        <p>Educational demonstration - Use responsibly</p>
      </footer>
    </div>
  );
}