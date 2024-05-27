import axiosInstance from "./axiosInstances"

class CharactersServices{

    async listarPostagens(){
        const response = await axiosInstance.get("publicacao/")
        return response;
    }
    async publiComentarios(id: number) {
        const response = await axiosInstance.get(`/publicacao/${id}/comentarios/`);
        return response;
    }
    async postComentario(data: object) {
        const response = await axiosInstance.post("/comentarios/", data);
        return response;
    }
    

}
export default new CharactersServices;