// lib/utils/sanitize.js

/**
 * Manually sanitizes HTML strings to prevent XSS attacks
 * @param {string} html - The potentially unsafe HTML string
 * @return {string} - Sanitized HTML string
 */
export function sanitizeHTML(html) {
    if (!html) return '';
    
    // Replace HTML special characters with their entity equivalents
    const sanitized = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`/g, '&#96;');
    
    return sanitized;
  }
  
  /**
   * A simple HTML sanitizer that allows certain safe tags
   * @param {string} html - The potentially unsafe HTML string
   * @param {Array<string>} allowedTags - List of HTML tags to allow
   * @return {string} - Sanitized HTML with only allowed tags
   */
  export function sanitizeHTMLAllowTags(html, allowedTags = ['b', 'i', 'em', 'strong']) {
    if (!html) return '';
    
    // First, escape all HTML
    let sanitized = sanitizeHTML(html);
    
    // Then selectively un-escape allowed tags
    allowedTags.forEach(tag => {
      // Allow opening tags without attributes
      const openTagRegex = new RegExp(`&lt;${tag}&gt;`, 'g');
      sanitized = sanitized.replace(openTagRegex, `<${tag}>`);
      
      // Allow closing tags
      const closeTagRegex = new RegExp(`&lt;/${tag}&gt;`, 'g');
      sanitized = sanitized.replace(closeTagRegex, `</${tag}>`);
    });
    
    return sanitized;
  }