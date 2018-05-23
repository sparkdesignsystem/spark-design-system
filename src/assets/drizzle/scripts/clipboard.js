import ClipboardJS from 'clipboard';

const clipboard = new ClipboardJS('.drizzle-c-Preview__btn');
const resetCopy = (event) => {
  const triggerText = event.trigger;
  setTimeout(() => {
    triggerText.textContent = 'Copy';
    event.clearSelection();
  }, 5000);
};
const clipboardSuccess = () => {
  clipboard.on('success', (e) => {
    resetCopy(e);
    e.trigger.textContent = 'Copied!';
  });
};

export { clipboard, resetCopy, clipboardSuccess };
