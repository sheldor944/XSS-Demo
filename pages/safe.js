// pages/safe.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CommentForm from '../components/CommentForm';
import { SafeCommentList } from '../components/CommentList';
import styles from '../styles/Home.module.css';

export default function SafePage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/comments/safe');
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
      const response = await fetch('/api/comments/safe', {
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
    <Layout title="XSS Demo - Safe Page">
      <section className={`${styles.demoSection} ${styles.safe}`}>
        <h2>Protected Comment System</h2>
        <div className={styles.success}>
          ✓ This section has XSS prevention measures!
        </div>
        
        <p>
          This page demonstrates a safe implementation that properly escapes user input.
          Instead of using <code>dangerouslySetInnerHTML</code>, it uses React's built-in
          text escaping to render content safely.
        </p>
        
        <CommentForm onSubmit={handleSubmit} type="safe" />
        
        {loading ? (
          <p>Loading comments...</p>
        ) : (
          <SafeCommentList comments={comments} />
        )}
      </section>
    </Layout>
  );
}