import { FormProps } from 'react-hook-form'

export const createRegister = (register: FormProps['register']) => {
  const execRegister = register

  const registerString = (
    name: string,
    label?: string,
    required?: boolean,
    option?: { [key: string]: any }
  ) => {
    execRegister(
      {
        name: name
      },
      {
        required: { value: required === true, message: `※${label}の入力は必須です` },
        ...option
      }
    )
  }

  const registerNumber = (
    name: string,
    label?: string,
    message?: string,
    required?: boolean,
    option?: { [key: string]: any }
  ) => {
    execRegister(
      {
        name: name
      },
      {
        required: { value: required === true, message: `※${label}の入力は必須です` },
        pattern: {
          value: /[0-9]+/,
          message: message || '※数字で入力してください'
        },
        ...option
      }
    )
  }

  const registerSelect = (
    name: string,
    label?: string,
    required?: boolean,
    option?: { [key: string]: any }
  ) => {
    execRegister(
      {
        name: name
      },
      {
        required: { value: required === true, message: `※${label}の選択は必須です` },

        ...option
      }
    )
  }

  const registerEmail = (name?: string, message?: string, option?: { [key: string]: any }) => {
    execRegister(
      {
        name: name || 'email'
      },
      {
        required: { value: true, message: `※${name || 'email'}の入力は必須です` },
        pattern: {
          value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: message || '※指定された形式で入力してください'
        },
        ...option
      }
    )
  }

  const registerPassword = (name?: string, message?: string, option?: { [key: string]: any }) => {
    execRegister(
      {
        name: name || 'password'
      },
      {
        required: { value: true, message: `※${name || 'password'}の入力は必須です` },
        pattern: {
          value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
          message:
            message ||
            '※8文字以上・半角英数字のみ・アルファベットの大文字、小文字、数字を1文字以上使用してください'
        },
        ...option
      }
    )
  }

  return { registerEmail, registerPassword, registerString, registerNumber, registerSelect }
}
