const prisma = require("../config/prisma");

class ItemService {

    async getAllItems() {
        return await prisma.job.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    async createItem(data) {
        return await prisma.job.create({
            data
        });
    }
    async getItemById(id) {
        return await prisma.job.findUnique({
            where: {
                id: Number(id)
            }
        });
    }   
    async updateItem(id, data) {
        return await prisma.job.update({
            where: {
                id: Number(id)
           },
           data
        });
    } 
    async deleteItem(id) {
        return await prisma.job.delete({
            where: {
                id: Number(id)
            }

        });

    }

}

module.exports = new ItemService();