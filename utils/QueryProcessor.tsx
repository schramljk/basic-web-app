export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "jschraml";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "jschraml";
  }

  // Addition query
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
    if (numbers.length >= 2) {
      const sum = numbers.reduce((acc, n) => acc + n, 0);
      return String(sum);
    }
  }

  // Largest number query
  if (query.toLowerCase().includes("numbers") && query.toLowerCase().includes("largest")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
    if (numbers.length > 0) {
      return String(Math.max(...numbers));
    }
  }

  return "";
}
