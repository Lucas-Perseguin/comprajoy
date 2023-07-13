const validations = {
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    },
  },

  email: {
    custom: {
      isValid: (value) => isValidEmail(value),
      message: 'Digite um email válido',
    },
  },

  password: {
    custom: {
      isValid: (value) => value.length >= 6,
      message: 'Digite uma senha válida',
    },
  },

  cpf: {
    custom: {
      isValid: (value) =>
        parseInt(value?.replaceAll('.', '')?.replace('-', '')?.length, 10) ===
        11,
      message: 'Digite um CPF válido',
    },
  },

  cellphone: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 13,
      message: 'Digite um telefone válido',
    },
  },

  cep: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 9,
      message: 'Digite um CEP válido',
    },
  },

  city: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite uma cidade',
    },
  },

  neighborhood: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um bairro',
    },
  },

  street: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite uma rua',
    },
  },

  state: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Selecione um estado',
    },
  },

  number: {
    custom: {
      isValid: (value) => Number(value),
      message: 'Digite um número válido',
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}

function isValidEmail(value) {
  return String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
