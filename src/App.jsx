import { useQuery } from '@apollo/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { GET_PROJECTLIST, GET_TALKLIST } from './gql'
import { Header } from './Header'
import { GridItem } from './GridItem'
import { Page } from './Page'
import './App.css'

export function App() {
  const { loading: loadingProjectList, error: errorProjectList, data: dataProjectList } = useQuery(GET_PROJECTLIST)
  const { loading: loadingTalkList, error: errorTalkList, data: dataTalkList } = useQuery(GET_TALKLIST)

  if (loadingProjectList || loadingTalkList) return <p>Loading...</p>
  if (errorProjectList || errorTalkList) return <p>Error :(</p>

  const { project: projectList } = dataProjectList
  const { talk: talkList } = dataTalkList

  return (
    <>
      <Header />
      <Router>
        <main>
          <Switch>
            <Route path={['/', '/website']}>
              <h2>Projects</h2>
              <section className="grid">
                {projectList.map(p => <GridItem key={p.id} {...p} />)}
              </section>
              <h2>Talks</h2>
              <section className="grid">
                {talkList.map(t => <GridItem key={t.id} {...t} />)}
              </section>
            </Route>
            {projectList.map(project => (
              <Route path={`/${project.slug}`} key={project.id}>
                <Page {...project} />
              </Route>
            ))}
            {talkList.map(talk => (
              <Route path={`/${talk.slug}`} key={talk.id}>
                <Page {...talk} />
              </Route>
            ))}
          </Switch>
        </main>
      </Router>
    </>
  )
}
