// components/CommentList.js
import { VulnerableComment, SafeComment } from './Comment';
import styles from '../styles/Home.module.css';

export function VulnerableCommentList({ comments }) {
  return (
    <div className={styles.commentsContainer}>
      <h3>Comments</h3>
      <div className={styles.commentsList}>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <VulnerableComment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}

export function SafeCommentList({ comments }) {
  return (
    <div className={styles.commentsContainer}>
      <h3>Comments</h3>
      <div className={styles.commentsList}>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <SafeComment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}