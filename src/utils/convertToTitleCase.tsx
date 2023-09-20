function ConvertToTitleCase(str: string) {
  // Split the input string into words
  const words = str.split("_");

  // Capitalize the first letter of each word and join them with a space
  const titleCaseWords = words.map((word) => {
    // Capitalize the first letter and make the rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the title case words with spaces
  return titleCaseWords.join(" ");
}

export default ConvertToTitleCase;
