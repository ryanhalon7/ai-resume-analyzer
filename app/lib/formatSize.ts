/**
 * Converts a file size in bytes to a human readable string
 * @param bytes The size in bytes to format
 * @returns A formatted string like "1.5 MB" or "800 KB"
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  // Get the power of 1024 we need to use (0 for Bytes, 1 for KB, 2 for MB, etc.)
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Calculate the value and round to 2 decimal places
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
  
  return `${value} ${sizes[i]}`;
}