import { TestComponent } from '../generated/graphql.tsx'
import {withApollo} from "../lib/apollo";

function Home() {
  return (
    <div className="container">
      <TestComponent>
        {({loading, error, data})=> {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error</p>
            return <h1>{data.hello}</h1>
        }}
      </TestComponent>
    </div>
  )
}

export default withApollo({ ssr: true })(Home);