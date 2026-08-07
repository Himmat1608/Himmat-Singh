import React, { useState, useEffect } from 'react';

interface TerminalTypingProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

export const TerminalTyping: React.FC<TerminalTypingProps> = ({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  delayBetweenPhrases = 2200,
  className = '',
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        setCurrentText(targetPhrase.substring(0, currentText.length + 1));
        if (currentText === targetPhrase) {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      } else {
        // Deleting phase
        setCurrentText(targetPhrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return (
    <div className={`font-mono text-emerald-400 flex items-center gap-1 ${className}`}>
      <span>&gt; {currentText}</span>
      <span className="w-2 h-4 bg-emerald-400 inline-block animate-cursor-blink" />
    </div>
  );
};
