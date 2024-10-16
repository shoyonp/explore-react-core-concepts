// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }

// conditonal rendaring option 1:
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditonal rendaring option 2:
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finish: {task}</li>;
//   }
//   return <li>Work on: {task}</li>;
// }

// conditonal rendaring option 3: ternaary operaton
// export default function Todo({task, isDone}){
//     return (
//         <li> {isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }

// conditonal rendaring option 4: &&
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && 'Done'}</li>
//     )
// }

// conditonal rendaring option 5: ||
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone || 'Do it'}</li>
//     )
// }

// conditonal rendaring option 6:
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finish: {task}</li>;
  } else {
    listItem = <li>Work on: {task}</li>;
  }
  return listItem;
}
