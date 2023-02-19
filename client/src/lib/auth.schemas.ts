import { gql } from '@apollo/client'

export const REGISTER_MUTATION = gql`
  mutation registerLocal(
    $password: String!
    $email: String!
    $login: String!
    $phoneNumber: String!
  ) {
    registerLocal(
      dto: {
        password: $password
        email: $email
        login: $login
        phoneNumber: $phoneNumber
      }
    ) {
      id
      email
      login
      phoneNumber
      avatar
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation loginLocal($email: String!, $password: String!) {
    loginLocal(dto: { email: $email, password: $password }) {
      id
      email
      login
      phoneNumber
      avatar
    }
  }
`

export const REFRESH_MUTATION = gql`
  mutation refresh {
    refresh {
      id
      email
      login
      phoneNumber
      avatar
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout
  }
`
