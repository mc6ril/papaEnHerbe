/**
 * Calcule le nombre de semaines de grossesse à partir d'une date donnée
 * @param date La date de conception ou de début de grossesse
 * @returns Le nombre de semaines de grossesse
 */
export const calculateWeek = (date: Date): number => {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7);
};
