const COLOR_MAPPINGS = [
  {threshold: -0.4, background: '#ff4372', text: '#000000'},
  {threshold: -0.2, background: '#fec701', text: '#000000'}, // ORANGE with black text
  {threshold: 0, background: '#fec701', text: '#000000'}, // LIGHT_ORANGE with black text
  {threshold: 0.8, background: '#10b5a5', text: '#FFFFFF'}, // DARK_GREEN with white text
  {threshold: Infinity, background: '#10b5a5', text: '#FFFFFF'}, // DEEP_GREEN with white text
];

export const getScoreColor = (score: number) => {
  const mapping = COLOR_MAPPINGS.find(m => score < m.threshold);
  return mapping ? {background: mapping.background, text: mapping.text} : {};
};

export const GPT_RED = '#ff4d77';
export const GPT_YELLOW = '#ffae00';
export const GPT_GREEN = '#12b2a2';
export const GPT_LIGHT_BLUE = '#47e3ff';
export const GPT_BLUE = '#007cf8';
export const GPT_BACKGROUND = '#b4e7fe';
