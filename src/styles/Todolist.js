import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'
import { MdAddCircleOutline } from 'react-icons/md'
import  { FiEdit } from 'react-icons/fi'
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa'
import { ImCancelCircle} from 'react-icons/im'
import { IoIosRemoveCircleOutline } from 'react-icons/io'



export const TodoContainer = styled.div ` 
    display: flex ;
    width: 320px ;
    height: 700px ;
    margin: 0 auto ;
    flex-direction: column ;
    justify-content: flex-start ;
    align-items: center ;
    background: #100f10 ;
    border-radius: 10px ;
    overflow: hidden ;
    overflow-y: visible ;

::-webkit-scrollbar {
  width: 10px;
  cursor: pointer;
}


::-webkit-scrollbar-track {
  border-radius: 10px;
}
 

::-webkit-scrollbar-thumb {
  background: #8739f9; 
  border-radius: 10px;
}


::-webkit-scrollbar-thumb:hover {
  background: #8739f9; 
}
`
export const InputContainer = styled.div ` 
    display: flex ;
    justify-content: center ;
    align-items: center ;
    margin: 2rem 0 ;
`

export const Input = styled.input ` 
    outline: none ;
    border: none ;
    border-radius: 5px ;
    background: #fff ;
    padding: 0.5rem 0 ;
    margin: .5rem ;
    font-family: 'Montserrat', sans-serif ;
`
export const TrashBtn = styled(BsTrash) ` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
`


export const TodoList = styled.ul ` 
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    list-style : none ;

`
export const AddBtn = styled(MdAddCircleOutline) ` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
`     

export const EditBtn = styled(FiEdit)` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
`

export const CheckBtn = styled(FaRegCheckCircle) ` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
`
export const CancelBtn = styled(ImCancelCircle) ` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
    margin-right: 3rem ;
`

export const Todo = styled.li ` 
    display: flex ;
    justify-content: flex-start ;
    align-items: flex-start ;
    margin-left: -2rem ;
    opacity: ${({checked}) => (checked ? '.25' : '1')} ;
`
export const Text = styled.h1 ` 
    background: #8739f9 ; 
    width: 182px ;
    color: #fff ;
    padding: 5px 10px ;
    border-radius: 5px ;
    font-family: 'Montserrat', sans-serif ;
    font-weight: 400 ;
    font-size: 1rem ;
    margin: .5rem ; 
`
export const UpdateInput = styled.input ` 
    outline: none ;
    border: none ;
    border-radius: 5px ;
    background: #fff ;
    padding: 0.5rem 0 ;
    margin: 0 .5rem ;
    font-family: 'Montserrat', sans-serif ;
`

export const TodoUpdateContainer = styled.div ` 
    display: flex ;
    justify-content: center ;
    align-items: center ;
    margin: 1rem 0 0 0 ;
`

export const TodoTextContainer = styled.div ` 
    display: flex ;
    align-items: center; 
`

export const RemoveTodoBtn = styled(IoIosRemoveCircleOutline) ` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
`

export const RemoveTodoBtnSpe = styled(FaTimes) ` 
    color: #fff ;
    font-size: 25px;
    margin: 0 .5rem ;
    cursor: pointer;
`