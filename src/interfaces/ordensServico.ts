export interface OrdemServico {
    id: number,
    descricao: string,
    dataCriacao: string,
    dataAlteracao: string,
    dataConclusao: string,
    prioridade: string,
    status: string

    ativoId: number,
    usuarioCriadorId: number,
    usuarioResponsavelId: number
  }