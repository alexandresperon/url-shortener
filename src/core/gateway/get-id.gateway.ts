export interface GetIdGateway {
  getId(): Promise<number>;
}

export const GetIdGateway = Symbol('GetIdGateway');
