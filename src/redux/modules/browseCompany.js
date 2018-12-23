const GET_ALL_COMPANY = 'jobstock/company/GET_ALL_COMPANY';
const GET_ALL_COMPANY_SUCCESS = 'jobstock/company/GET_ALL_COMPANY_SUCCESS';
const GET_ALL_COMPANY_FAIL = 'jobstock/company/GET_ALL_COMPANY_FAIL';

const initialState = {
  data: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_COMPANY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GET_ALL_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function getAllCompanies() {
  return {
    types: [GET_ALL_COMPANY, GET_ALL_COMPANY_SUCCESS, GET_ALL_COMPANY_FAIL],
    promise: ({ client }) => client.get('/server/get-all-companies')
  };
}
