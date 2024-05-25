export const round2 = (num: number): number => {
  return Math.round(num * 100) / 100;
};

export function convertDocToObject(doc: any) {
  doc._id = doc._id ? doc._id.toString : "";
  return doc;
}
