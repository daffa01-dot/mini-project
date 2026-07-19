import prisma from '../configs/prisma-client.config';
import { ResponseError } from '../utils/response-error.util';
import { StatusCodes } from 'http-status-codes';

export class FavoritesService {
  static async addSatwaFavorite(userId: string, satwaId: string) {
    const satwa = await prisma.satwa.findUnique({ where: { id: satwaId } });
    if (!satwa) {
      throw new ResponseError(StatusCodes.NOT_FOUND, 'Satwa not found');
    }

    const existingBookmark = await prisma.satwaBookmark.findUnique({
      where: {
        userId_satwaId: {
          userId,
          satwaId,
        },
      },
    });

    if (existingBookmark) {
      return existingBookmark;
    }

    return await prisma.satwaBookmark.create({
      data: {
        userId,
        satwaId,
      },
    });
  }

  static async addShelterFavorite(userId: string, shelterId: string) {
    const shelter = await prisma.shelter.findUnique({ where: { id: shelterId } });
    if (!shelter) {
      throw new ResponseError(StatusCodes.NOT_FOUND, 'Shelter not found');
    }

    const existingBookmark = await prisma.shelterBookmark.findUnique({
      where: {
        userId_shelterId: {
          userId,
          shelterId,
        },
      },
    });

    if (existingBookmark) {
      return existingBookmark;
    }

    return await prisma.shelterBookmark.create({
      data: {
        userId,
        shelterId,
      },
    });
  }

  static async listFavorites(userId: string) {
    const satwaBookmarks = await prisma.satwaBookmark.findMany({
      where: { userId },
      include: {
        satwa: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const shelterBookmarks = await prisma.shelterBookmark.findMany({
      where: { userId },
      include: {
        shelter: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      satwa: satwaBookmarks.map((b) => b.satwa),
      shelters: shelterBookmarks.map((b) => b.shelter),
    };
  }

  static async removeFavorite(bookmarkId: string, userId: string) {
    const satwaFav = await prisma.satwaBookmark.findFirst({
      where: { id: bookmarkId, userId },
    });
    if (satwaFav) {
      return await prisma.satwaBookmark.delete({ where: { id: bookmarkId } });
    }

    const shelterFav = await prisma.shelterBookmark.findFirst({
      where: { id: bookmarkId, userId },
    });
    if (shelterFav) {
      return await prisma.shelterBookmark.delete({ where: { id: bookmarkId } });
    }

    throw new ResponseError(StatusCodes.NOT_FOUND, 'Favorite not found');
  }
}