import problems from "../Problems-Folder/problems_info";

const CheckSolution = (code, id) => { //checks to see if solution is correct + falls under time constraint
    //if return 0, solution doesn't pass test cases. if return 1, test doesnt pass time complexity test, else return 2 == solution passes
    //tests correctness -> time
    const problem = problems[id];
    let time_constraint = problem["time-constraint"];
    
    let code_correct = true;
    let time_complexity_passes = true
    let compliler_pass = true
    if (compliler_pass) { 
        if (code_correct) { 
            if (time_complexity_passes) { 
                return 2;
            } else { 
                return 1;
            }
        } else { 
            return 0
        }
    } else { 
        return -1;
    }
   
}

export default CheckSolution
