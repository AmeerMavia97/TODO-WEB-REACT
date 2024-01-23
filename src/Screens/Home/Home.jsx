import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'
import Fotter from '../../Components/Fotter'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, deleteDoc, doc, addDoc, Timestamp, getDocs, query, where ,updateDoc, orderBy } from "firebase/firestore";
import { auth, db } from '../../Config/Firebase/config'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  // STATE
  const [ALLTodo, setAllTodo] = useState([])
  const [getuid , setgetuid] =useState()

  //NAVIGATE
  const navigate = useNavigate()

  // REF
  const todo = useRef()

  // ON AUTH STATE FUNCTION
  let Uid;
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Uid = user.uid;
        setgetuid(Uid)
  
      } else {
        navigate('/')
      }
    });
  }, [])
 
  console.log(getuid);


  useEffect(() => {
    console.log('run');

    async function getDataFromFireStore() {


      const q = query(collection(db, "Todo"),where('Useruid' , '==' , getuid));

      const querySnapshot = await getDocs(q);
      console.log('hello');

      querySnapshot.forEach((doc) => {
        ALLTodo.push({ docId: doc.id, ...doc.data() })
        setAllTodo([...ALLTodo])

      });

      console.log('run3');

    }

    getDataFromFireStore()

  }, [getuid])




  // ADD TODO IN FIREBASE AND STATE
  async function AddTodo(e) {
    e.preventDefault();
    const Todo = todo.current.value;
    setAllTodo([...ALLTodo, {
      Todoes: Todo,
    }])
    const docRef = await addDoc(collection(db, "Todo"), {
      Todoes: Todo,
      Useruid: Uid,
      postDate: Timestamp.fromDate(new Date()),
    }

    );
  }

  console.log(ALLTodo);

  // DELETE TODO IN FIREBASE
  async function DeleteTodos(index) {
    await deleteDoc(doc(db, "Todo", ALLTodo[index].docId));
    ALLTodo.splice(index, 1)
    setAllTodo([...ALLTodo])
  }

  function Edittodo(Editvalue, index) {
    console.log('helloedit', Editvalue, index);
    const washingtonRef = doc(db, "Todo", ALLTodo[index].docId);
    updateDoc(washingtonRef, {
      Todoes: Editvalue
    })
    ALLTodo.splice(index, 1, {Todoes: Editvalue})
    setAllTodo([...ALLTodo])
  }


  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gray-100 '>
        <form onSubmit={AddTodo} className='text-center'>
          <input type="text" className='text-white bg-gray-300 px-3 mt-[80px]  w-[39%] rounded-md mr-10 h-10  ' ref={todo} placeholder='ENTER YOUR TODO' /> <br />
          <button type='submit' className='px-[250px] pb-[6px] mr-10 pt-[8px] mt-3 bg-[#5f6c76] rounded-md text-white font-poppins '>Add</button>
        </form>
      </div>

      {ALLTodo.length > 0 ? ALLTodo.map((item, index) => {
        return (
          <Card key={index} title={item.Todoes} DeleteTodo={() => { DeleteTodos(index) }} index={index} EditTodo={Edittodo} />
        )
      }) : <span className=' text-2xl font-poppins bg-gray-100 p-4 pb-5 pt-8 flex justify-center'> DATA NOT FOUND...</span>}
      <Fotter></Fotter>
    </>

  )
}

export default Home