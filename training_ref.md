# React boilerplate
- npx create-react-app <project-name>
- cd notes-app
- npm start


- npm install create-react-app -g
- create-react-app <project-name>

- npm run eject 

- npm config get registry -> https://registry.npmjs.org/

# To make UI look good -
- npm cache clean --force
- npm install bootstrap@4 --save

# For Form Validation - 
- npm install react-hook-form
- npm install @hookform/resolvers yup

# For Props Type Checking
- npm install prop-types

# Render the UI, react to any event
- Make Remote Server Call
- Calculate complex logic
- Any task for which react is not meant

- useEffect Hook - Functional Component

- useEffect(() =>{}) - Renders very first time on Component load and every time when component re-renders

- useEffect(() => {}, [Dependencies]) -> Renders very first time, but for subsequent re-render depends upon the mentioned [Dependencies].

- useEffect(() => {
    return () => { // Clean up Code }     - Will executes before component re-renders 
}, [Dependencies])


"Props Soup"
App -> Notes -> NoteItem -> NoteDate -> Note11 -> Note12 -> Note13
1. Context API -> "token"
2. Redux



- Functional Component | Presentational | Stateless | Dump (useState())
- Class based component | Container | Stateful | Smart | 
- LifeCycle
    - componentDidMount - useEffect(() => {}, [])
    - componentDidUpdate - useEffect(() => {}, [DEPENDECIES])
    - shouldComponentUpdate - useEffect(() => {}, [DEPENDECIES])
    - ComponentWillUnmount - useEffect(() => { return () => {}})
    - 
- HOC - Comp (Comp)
- Error Boundry
- Routing > npm install react-router-dom
    - Links
    - Route
    - useParams() - get the route parameter supplied in URL
    - useHistory() - able to navigate the user programmatically
    - useLocation() - snapshot of URL
    - Route Parameter
    - Query Parameter
    - Nested Routing





- Redux - intro

tomorrow - 
- React-redux
- deployment
- React with TypeScript
- FAQ