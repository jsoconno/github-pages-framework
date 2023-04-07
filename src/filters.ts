const truncate = (text: string, length: number, clamp?: string): string => {
  clamp = clamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text;
  const content = node.textContent || '';
  return content.length > length ? content.slice(0, length) + clamp : content;
};

export default {
  truncate,
};
