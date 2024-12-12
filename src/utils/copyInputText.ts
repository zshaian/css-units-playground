const CopyText = async (
  inputValue: string,
  onSuccess: () => void,
  onError: () => void
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(inputValue);
    onSuccess();
  } catch (error) {
    console.error(error);
    onError();
  }
};

export { CopyText };
