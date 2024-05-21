import axiosInstance from "./axiosInstances"

class CharactersServices{

    async listarPostagens(){
        const response = await axiosInstance.get("/publicacao/")
        return response;
    }
    async listarPostagensID(id: number){
        const response = await axiosInstance.get("publicacao/" + { id } + "/")
        return response;
    }

}
export default new CharactersServices;