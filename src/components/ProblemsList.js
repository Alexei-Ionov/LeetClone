import React from 'react'
import Problem from '../Problems-Folder/Problem'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import problems from '../Problems-Folder/problems_info'
const ProblemsList = () => {
  const {auth} = useContext(AuthContext);
  const len = Object.keys(auth).length

  //(<Problem path={problem["path"]} name={problem["name"]} difficulty={problem["difficulty"]} completion={auth["problems"][problem][0]}/>)
  return (
    <>
      {len && (
        <div>
          {problems.map((problem) => (
            <Problem
            key={problem.id} // Add a unique key for each Problem component
            path={problem.path}
            name={problem.name}
            difficulty={problem.difficulty}
            completion={auth.problems[problem.id][0]}
            />
            ))}
        </div>
        )
        }
    </>
  )
}

export default ProblemsList
