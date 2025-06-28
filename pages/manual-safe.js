// pages/manual-safe.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CommentForm from '../components/CommentForm';
import { ManualSafeCommentList } from '../components/ManualSafeCommentList';
import styles from '../styles/Home.module.css';

export default function ManualSafePage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/comments/manual-safe');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (name, comment) => {
    try {
      const response = await fetch('/api/comments/manual-safe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
      });
      
      if (response.ok) {
        fetchComments();
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <Layout title="XSS Demo - Manual Safe Page">
      <section className={`${styles.demoSection} ${styles.safe}`}>
        <h2>Manually Protected Comment System</h2>
        <div className={styles.success}>
          ✓ This section has manually implemented XSS prevention!
        </div>
        
        <p>
          This page demonstrates a safe implementation that manually sanitizes user input
          before rendering. Unlike the React-protected page, this page actually uses 
          <code>dangerouslySetInnerHTML</code> but with manually sanitized content.
        </p>
        
        <div className={styles.infoBox}>
          <h3>Manual Sanitization</h3>
          <p>
            This page uses a custom sanitization function that replaces potentially dangerous characters:
          </p>
          <pre><code>
{`function sanitizeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}`}
          </code></pre>
        </div>
        
        <CommentForm onSubmit={handleSubmit} type="manual-safe" />
        
        {loading ? (
          <p>Loading comments...</p>
        ) : (
          <ManualSafeCommentList comments={comments} />
        )}
      </section>
    </Layout>
  );
}