import { getPaletteColor } from '@/renderer/palettes/utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the dependencies
vi.mock('@/utils', () => ({
  getItemIndexes: vi.fn(),
}));

vi.mock('@/renderer/palettes', () => ({
  getPalette: vi.fn(),
}));

import { getItemIndexes } from '@/utils';

describe('palette', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getPaletteColor', () => {
    it('should return undefined for empty palette array', () => {
      vi.mocked(getItemIndexes).mockReturnValue([0, 1]);

      const result = getPaletteColor([], [0, 1]);
      expect(result).toBeUndefined();
    });

    it('should return color from array palette using index', () => {
      vi.mocked(getItemIndexes).mockReturnValue([0, 2]);

      const palette = ['#red', '#green', '#blue', '#yellow'];
      const result = getPaletteColor(palette, [0, 2]);
      expect(result).toBe('#blue'); // index 2
    });

    it('should cycle through array palette when index exceeds length', () => {
      vi.mocked(getItemIndexes).mockReturnValue([0, 5]);

      const palette = ['#red', '#green', '#blue'];
      const result = getPaletteColor(palette, [0, 5]);
      expect(result).toBe('#blue'); // 5 % 3 = 2
    });

    it('should use first index when second index is not available', () => {
      vi.mocked(getItemIndexes).mockReturnValue([3]);

      const palette = ['#red', '#green', '#blue', '#yellow'];
      const result = getPaletteColor(palette, [3]);
      expect(result).toBe('#yellow'); // index 3
    });

    it('should use 0 as fallback index', () => {
      vi.mocked(getItemIndexes).mockReturnValue([]);

      const palette = ['#red', '#green', '#blue'];
      const result = getPaletteColor(palette, [0]);
      expect(result).toBe('#red'); // index 0
    });

    it('should work with function palette', () => {
      vi.mocked(getItemIndexes).mockReturnValue([0, 2]);

      // Create a proper function with 3 parameters to simulate a palette function
      const paletteFunction = vi.fn(() => '#computed-color');
      // Manually set the function length to 3 to pass the palette.length === 0 check
      Object.defineProperty(paletteFunction, 'length', { value: 3 });
      const result = getPaletteColor(paletteFunction, [0, 2], 10);

      expect(paletteFunction).toHaveBeenCalledWith(0.2, 2, 10); // ratio = 2/10
      expect(result).toBe('#computed-color');
    });

    it('should use ratio 0 when total is not provided for function palette', () => {
      vi.mocked(getItemIndexes).mockReturnValue([0, 2]);

      // Create a proper function with 3 parameters to simulate a palette function
      const paletteFunction = vi.fn(() => '#computed-color');
      // Manually set the function length to 3 to pass the palette.length === 0 check
      Object.defineProperty(paletteFunction, 'length', { value: 3 });
      const result = getPaletteColor(paletteFunction, [0, 2]);

      expect(paletteFunction).toHaveBeenCalledWith(0, 2, 0);
      expect(result).toBe('#computed-color');
    });
  });
});
