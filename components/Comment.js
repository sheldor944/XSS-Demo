// components/Comment.js
import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

// Vulnerable comment component that creates and executes unsafe content
export function VulnerableComment({ comment }) {
  const commentRef = useRef(null);
  const hasExecuted = useRef(false);
  
  useEffect(() => {
    if (commentRef.current && !hasExecuted.current) {
      // This is an unsafe way to render content
      commentRef.current.innerHTML = comment.comment;
      
      // Execute any scripts in the content (DANGEROUS!)
      const scripts = commentRef.current.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const script = document.createElement('script');
        script.text = scripts[i].text;
        if (scripts[i].src) script.src = scripts[i].src;
        document.head.appendChild(script);
        document.head.removeChild(script);
      }
      
      // Mark as executed to prevent multiple executions
      hasExecuted.current = true;
    }
  }, [comment]);
  
  return (
    <div className={styles.comment}>
      <div className={styles.commentAuthor}>{comment.name}</div>
      <div className={styles.commentText} ref={commentRef}></div>
    </div>
  );
}

// Safe comment component that uses text content
export function SafeComment({ comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles.commentAuthor}>{comment.name}</div>
      <div className={styles.commentText}>{comment.comment}</div>
    </div>
  );
}