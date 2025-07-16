// FAQ functionality
let openFAQ = null;
window.toggleFAQ = function(index) {
  const answer = document.getElementById('answer-' + index);
  const icon = document.getElementById('icon-' + index);
  if (openFAQ !== null && openFAQ !== index) {
    const prevAnswer = document.getElementById('answer-' + openFAQ);
    const prevIcon = document.getElementById('icon-' + openFAQ);
    if (prevAnswer) prevAnswer.classList.remove('open');
    if (prevIcon) prevIcon.classList.remove('open');
  }
  if (openFAQ === index) {
    if (answer) answer.classList.remove('open');
    if (icon) icon.classList.remove('open');
    openFAQ = null;
  } else {
    if (answer) answer.classList.add('open');
    if (icon) icon.classList.add('open');
    openFAQ = index;
  }
};

->

// FAQ functionality - Enhanced for inline styling
let openFAQ = null;
window.toggleFAQ = function(index) {
  const answer = document.getElementById('answer-' + index);
  const icon = document.getElementById('icon-' + index);
  
  // Close previously open FAQ
  if (openFAQ !== null && openFAQ !== index) {
    const prevAnswer = document.getElementById('answer-' + openFAQ);
    const prevIcon = document.getElementById('icon-' + openFAQ);
    if (prevAnswer) {
      prevAnswer.style.maxHeight = '0';
      prevAnswer.style.opacity = '0';
    }
    if (prevIcon) {
      prevIcon.style.transform = 'rotate(0deg)';
    }
  }
  
  // Toggle current FAQ
  if (openFAQ === index) {
    // Close current FAQ
    if (answer) {
      answer.style.maxHeight = '0';
      answer.style.opacity = '0';
    }
    if (icon) {
      icon.style.transform = 'rotate(0deg)';
    }
    openFAQ = null;
  } else {
    // Open current FAQ
    if (answer) {
      // Get the content height dynamically
      const content = answer.querySelector('.faq-answer-content');
      const contentHeight = content ? content.scrollHeight + 40 : 120; // Add padding
      answer.style.maxHeight = contentHeight + 'px';
      answer.style.opacity = '1';
    }
    if (icon) {
      icon.style.transform = 'rotate(45deg)';
    }
    openFAQ = index;
  }
};
