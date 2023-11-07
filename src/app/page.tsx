// o quadrado foi exportado como default e o circle normal, componentes normalmente a gnt exporta normal,
// e paginas como default
//import { Circle } from "@/components/shapes";

import { Square } from "@/components/square";
import { Circle } from "@/components/circle";
import { Shapes } from "@/components/shapes";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { peopleList } from "@/data/peopleList";

// function Page() {
//   return (
//     <div>
//       <h1 className="font-bold text-2xl">Titulo</h1>
//       <h3>Subtitulo</h3>
//     </div>
//   );
// }

// const Page = () => {

//   return (
//     <div>
//       <h1 className="font-bold text-2xl">Titulo</h1>
//       <h3>Subtitulo</h3>

//       {/* <Square/>
//       <Circle/> */}
//       {/* <Shapes/> */}
//       {/* <Person
//         name='Jeff Bezos'
//         avatar='data:image/jpeg;base64,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'
//         roles={['CEO da Amazon', 'CEO da Blue Origin']}
//       />
//       <Person
//         name='Elon Musk'
//         avatar='data:image/jpeg;base64,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'
//         roles={['CEO da Tesla', 'CEO da SpaceX']}
//       />
//       <Person
//         name='João'
//         roles={['Algo', 'CEO de algo']}
//       /> */}

//       {/* <Card>Frase de efeito</Card> */}

//       {/* <Card>
//         <>
//           <h3 className='text-3xl font-bold italic'>Frase de efeito</h3>
//           <p className="text-right text-sm">Autor desconhecido</p>
//         </>
//       </Card> */}

//       <Card phrase='Oi tudo bom' author='Maria Luisa' />
//       <Card phrase='olaolaolaoalaoaloa' />


//     </div>
//   );
// }

// const Page = () => {
//   // const list = peopleList.map(person => <li>{person.name}</li>)

//   const chemists = peopleList.filter(person => person.profession == 'chemist');

//   return (
//     <div>
//       <h1 className="font-bold text-2xl">Olá Mundo</h1>
//       <h3>Algum outro texto</h3>

//       <ul>
//         {/* {list} */}
//         {peopleList.map(person =>
//           <li key={person.id}>{person.name} - {person.profession}</li>
//         )}
//       </ul>

//       <hr/>

//       {/* {peopleList.length > 0 &&
//         <ul>
//           {peopleList.map(person => 
//             <li key={person.id}>{person.name} - {person.profession}</li>  
//           )}
//         </ul>
//       } */}

//       {chemists.length > 0 &&
//         <>
//           <h1>Lista de químicos:</h1>
//           <ul>
//             {chemists.map(person =>
//               <li>{person.name}</li>  
//             )}
//           </ul>
//         </>
//       }

//     </div>
//   );
// }

"use client"

const Page = () => {
  function handleClick() {
    alert("Funcionou!");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={handleClick} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
      <button onClick={
        function click() {
          alert('Funcionou 2')
        }
      } className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
      <button onClick={() => alert('Funcionou 3')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
    </div>
  )
}

export default Page;