/**
 * Utility functions for handling product icons
 */

/**
 * Get the emoji fallback for a product based on its ID
 * @param productId - The product ID (may include suffix like 'edutrack-2')
 * @returns The corresponding emoji fallback
 */
export const getEmojiFallback = (productId: string): string => {
  const baseId = productId.split('-')[0]
  const emojiMap: { [key: string]: string } = {
    'edutrack': '🎓',
    'shopease': '🛒',
    'healthsync': '❤️',
    'payquick': '💳',
  }
  return emojiMap[baseId] || '📱'
}
