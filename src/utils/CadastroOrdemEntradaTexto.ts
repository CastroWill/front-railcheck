const secoesCadastroOrdemServico = [
    {
      id: 1,
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          name: 'nome'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email',
          name: 'email'
        },
        {
          id: 3,
          label: 'Crie uma senha',
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          name: 'senha'
        },
        {
          id: 4,
          label: 'Repita a senha',
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          name: 'confirmaSenha'
        }
      ],
    }
]

export {secoesCadastroOrdemServico as secoes}