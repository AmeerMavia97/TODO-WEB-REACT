import React, { useRef, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth , db } from '../../config/firebase/config';
import { collection, query, addDoc ,getDocs} from "firebase/firestore"; 
import Navbar from '../../components/Navbar'

const Home = () => {

    let uid
    onAuthStateChanged(auth, (user) => {
        if (user) {
             uid = user.uid;
        } else {
            console.log('user is not login');
        }
    });

    const todo = useRef()
    const [Data , setData] = useState([])

    // ADD DATA FROM FIREBASE
async function Addtodo(e) {
        e.preventDefault();
        const Todo = todo.current.value

        setData([...Data , Todo])
        // console.log(Data);
        try {
            const docRef = await addDoc(collection(db, "Todo"), {
                Items: Todo,
                UserId: uid
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        todo.current.value = ''
    }

async function Getdata(){

        const q = query(collection(db, "Todo"), );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());

        });


    }

Getdata()




    return (
        <>
            <Navbar />
            <div>
                <form className='text-center' onSubmit={Addtodo}>
                    <input type="text" className='text-white bg-[#1d202c] px-3 mt-[80px]  w-[39%] rounded-2xl mr-2 h-10  ' ref={todo} placeholder='ENTER YOUR CITY' />
                    <button type='submit' className='px-6 pb-[6px] pt-[8px] bg-blue-400 rounded-full text-white font-poppins '>Add</button>
                </form>
            </div>

            {Data.map((item) => {
                return (
                <div className='mt-4'>
                    <div className='ml-[30%] p-1 mr-[30%] rounded mt-9 flex justify-between'>
                        <p className='text-xl font-bold' >{item}</p>
                        <div className=''>
                            <button className='text-white  mr-6'><i class=" text-blue-400 fa-solid fa-trash"></i></button>
                            <button className='text-white mr-3'><i class="text-blue-400 mr-3 fa-solid fa-pen-to-square"></i></button>
                        </div>                        
                    </div>
                    <span><hr className=' ml-[28%] w-[45%]' /></span>
                    </div>


                )

            })}



        </>
    )
}

export default Home