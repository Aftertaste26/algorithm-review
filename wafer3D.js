/**
 * # SIZE between 4 and 100 (inclusive)
 **/
const generateWafer = (size) => {
  const newLine = "\n";
  let output = "";

  if (size < 4 || size > 100)
    throw "ERROR: number between 4 and 100 (inclusive) only";

  output += ":".repeat(size).padStart(size * 2 - 1);
  output += newLine;

  for (let row = 0; row < size - 2; row++) {
    const spaces = " ".repeat(size - 2 - row);
    const slash = "/".repeat(size - 2);
    const x = "X".repeat(row);

    output += `${spaces}:${slash}:${x}:`;
    output += newLine;
  }

  output += `:${":".repeat(size - 2)}:${"X".repeat(size - 2)}:`;
  output += newLine;

  for (let row = size - 2; row > 0; row--) {
    output += `:${" ".repeat(size - 2)}:${"X".repeat(row - 1)}:`;
    output += newLine;
  }

  output += ":".repeat(size);

  return output;
};

module.exports = generateWafer;
