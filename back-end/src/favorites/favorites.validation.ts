import * as zod from 'zod';

export class FavoritesValidation {
  static readonly ADD_SATWA = zod.object({
    body: zod.object({
      satwaId: zod.string().uuid('satwaId must be a valid UUID'),
    }),
  });

  static readonly ADD_SHELTER = zod.object({
    body: zod.object({
      shelterId: zod.string().uuid('shelterId must be a valid UUID'),
    }),
  });
}
