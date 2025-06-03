import { PrismaClient } from "@prisma/client";
import typesFiles from "@/@types/files";

const prisma = new PrismaClient();

class FilesModel {
  create = async (obj: typesFiles.CreateFileBody) => {
    return await prisma.files.create({
      data: obj,
    });
  };

  getAll = async () => {
    return await prisma.files.findMany({});
  };

  update = async (id: number, obj: typesFiles.CreateFileBody) => {
    return await prisma.files.update({
      where: {
        id,
      },
      data: {
        link: obj.link,
        available: obj.available,
      },
    });
  };

  delete = async (id: number) => {
    return await prisma.files.delete({
      where: {
        id,
      },
    });
  };
}

export default FilesModel;
