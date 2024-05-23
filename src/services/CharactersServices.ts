import axiosInstance from "./axiosInstances"

class CharactersServices{

    async listarPostagens(){
        const response = await axiosInstance.get("publicacao/")
        return response;
    }
    async PubliComentarios(id: number) {
        const response = await axiosInstance.get(`/publicacao/${id}/comentarios/`);
        return response;
    }
    

}
export default new CharactersServices;