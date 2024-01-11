import esprima from 'esprima';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import LinkedListVisualization from '../dataStructureComponents/LinkedListVisualization';
const SpaceVisualizer = ({id}) => {
    const {auth} = useContext(AuthContext);
    const code = (id < 0) ? auth.prevCode : auth.problems[id][1];
    const language = (id < 0) ? auth.prevLang : auth.problems[id][2];
    const [ast, setAst] = useState();
    
    const handleVisualize = () => {
        if (code) {
          var esprima = require('esprima')
          const AST = esprima.parse(code);
          setAst(AST);
          console.log(JSON.stringify(ast, null, 2));



        }
      };

    
    return (
        <div>
            <button onClick={() => handleVisualize()}>VISUALIZE</button>
        </div>
    )
}

export default SpaceVisualizer
