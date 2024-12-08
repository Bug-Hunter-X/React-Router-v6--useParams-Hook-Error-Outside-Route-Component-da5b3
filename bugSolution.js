The solution involves restructuring your component tree to ensure that `useParams()` is called only within components rendered as route children.  This ensures the routing context is properly available.

```javascript
// bugSolution.js
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // Accessing params inside Route component is crucial
  return (
      <div>Param id is: {id}</div>
  );
}

export default function App() {
  return (
    <>
      <Route path="/item/:id" element={<MyComponent/>}/>
    <//>
  );
}
```