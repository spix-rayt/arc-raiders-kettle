export const getId = (name: string) => {
    return name.toLowerCase().replace(/[^a-z]/g, '');
}

export const getRarityColor = (rarity: string) => {
  const colors: Record<string, string> = {
    Common: '#5a5e6a',
    Uncommon: '#26bf57',
    Rare: '#00a8f2',
    Epic: '#cc3099',
    Legendary: '#ffc600'
  };
  return colors[rarity]!;
};