export default function exampleReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_EXAMPLE":
      return [...state, { ...action.example }];
    default:
      return state;
  }
}
