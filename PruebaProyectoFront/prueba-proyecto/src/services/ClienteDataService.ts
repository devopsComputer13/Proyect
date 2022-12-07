import http from "@/http-common";

/* eslint-disable */
class ClienteDataService {
  getAll(): Promise<any> {
    return http.get("/Cliente/Get");
  }

  get(id: any): Promise<any> {
    return http.get(`/Cliente/GetCliente?id=${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/Cliente/AddCliente", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/Cliente/UpdateCliente?id=${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/Cliente/DeleteCliente?id=${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/tutorials`);
  }

  findById(id: string): Promise<any> {
    return http.get(`/Cliente/GetCliente?id=${id}`);
  }
}

export default new ClienteDataService();
