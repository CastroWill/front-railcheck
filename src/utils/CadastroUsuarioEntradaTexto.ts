const secoesCadastroUsuario = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'ID',
          placeholder: 'Digite o id da Ordem de Serviço',
          name: 'nome'
        },
        {
          id: 2,
          label: 'Data',
          placeholder: 'Digite a data de criação da ordem',
          name: 'data'
        },
        {
          id: 3,
          label: 'Status',
          placeholder: 'Qual o status da ordem?',
          secureTextEntry: true,
          name: 'status'
        },
        {
          id: 4,
          label: 'Descrição',
          placeholder: 'Insira a descrição da falha',
          secureTextEntry: true,
          name: 'descricao'
        }
      ],
    }
]

export {secoesCadastroUsuario as secoes}