import { FastifyRequest, FastifyReply } from "fastify";

import typesFiles from "@/@types/files";

import FilesModel from "@/database/files";

const filesModel = new FilesModel();

export default class FilesController {
  create = async (req: FastifyRequest, reply: FastifyReply) => {
    const { link, available } = req.body as typesFiles.CreateFileBody;

    try {
      const data = await filesModel.create({ link, available });

      if (data) {
        return reply.status(201).send(data);
      }

      return reply.status(501).send({
        status: 501,
        errorCode: "FIL-CR02",
        errorMessage: "Unexpected error to create file",
      })
    } catch (error) {
      console.log("CREATE_FILE_ERROR", error);

      return reply.status(500).send({
        status: 500,
        errorCode: "FIL-CR01",
        errorMessage: "Unexpected error to create file",
      })
    }
  };

  list = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const files = await filesModel.getAll();

      if (files) {
        return reply.status(200).send(files);
      }

      return reply.status(501).send({
        status: 501,
        errorCode: "FIL-LI02",
        errorMessage: "Unexpected error to list files",
      })
    } catch (error) {
      return reply.status(500).send({
        status: 500,
        errorCode: "FIL-LI01",
        errorMessage: "Unexpected error to list files",
      })
    }
  };

  update = async (req: FastifyRequest, reply: FastifyReply) => {
    const params = req.params as { id: number };
    const { link, available } = req.body as typesFiles.CreateFileBody;
    try {
      const data = await filesModel.update(Number(params.id), { link, available });

      if (data) {
        return reply.status(200).send(data);
      }

      return reply.status(501).send({
        status: 501,
        errorCode: "FIL-UP02",
        errorMessage: "Unexpected error to update file",
      })
    } catch (error) {
      console.log("UPDATE_FILE_ERROR", error);
      return reply.status(500).send({
        status: 500,
        errorCode: "FIL-UP01",
        errorMessage: "Unexpected error to update file",
      })    
    }
  };

  delete = async (req: FastifyRequest, reply: FastifyReply) => {
    const params = req.params as { id: number };

    try {
      const data = await filesModel.delete(Number(params.id));

      if (data) {
        return reply.status(204).send();
      }

      return reply.status(501).send({
        status: 501,
        errorCode: "FIL-DE02",
        errorMessage: "Unexpected error to delete file",
      })
    } catch (error) {
      return reply.status(500).send({
        status: 500,
        errorCode: "FIL-DE01",
        errorMessage: "Unexpected error to delete file",
      })
    }
  }
}

