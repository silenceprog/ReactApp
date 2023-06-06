import React, { useState } from 'react';
import {
    Form,
    Button,
} from "react-bootstrap";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import '../css/Database.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc,collection } from "firebase/firestore"; 
import db from '../index';


export const Database = () => {


    const firestore = firebase.firestore();
    const [isUpdate, setIsUpdate] = useState(false);
    const messagesRef = firestore.collection('messages');
    const collectionRef = collection(db,'messages');
    
    const [valueMes,setUpdateMes] = useState('');
    const [value, setValue] = useState('')
    const [messages, loading, error] = useCollectionData(
        firestore.collection('messages').orderBy('timeMes')
    )

    const sendMessage = async () => {
        const newMessage = {
            id: uuidv4(),
            uid: 1,
            userName: "noname",
            titleMes: "Коментар",
            text: value,
            timeMes: firebase.firestore.FieldValue.serverTimestamp()
        };
         await setDoc(doc(collectionRef,newMessage.id),newMessage);
    }

    const updateMessage = async (messageId, updatedText) => {
        if (isUpdate === false) {
            document.getElementById("myTextarea").readOnly = false;
        }
        else {
            try {
                await messagesRef.doc(messageId).update({
                    text: updatedText
                });
            } catch (error) {
                console.error('Ошибка при обновлении сообщения:', error);
            }
            document.getElementById("myTextarea").readOnly = true;
        }
        setIsUpdate(!isUpdate);
    };


    const deleteMessage = async (messageId) => {
        try {
            await messagesRef.doc(messageId).delete();
        } catch (error) {
            console.error('Ошибка при удалении сообщения:', error);
        }
    };

    if (loading) {
        return <p>Загрузка данных...</p>
    }

    if (error) {
        return <p>Ошибка при получении данных: {error.message}</p>;
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Залишити коментар:</Form.Label>
                    <Form.Control as="textarea"
                        rows={3}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={sendMessage}>Відправити</Button>
            </Form>

            <div className='message-main'>
                {messages && messages.map((message) =>
                    <div className="message-block" key={message.id}>
                        <h5>{message.titleMes}</h5>
                        <hr />
                        <textarea readOnly id="myTextarea" className='text-message'  onChange={e => setUpdateMes(e.target.value)}>{message.text}</textarea>
                        <Button className="me-2" onClick={() => deleteMessage(message.id)}>
                            <DeleteIcon />
                        </Button>
                        <Button onClick={() => updateMessage(message.id, valueMes)}>
                            <EditIcon />
                        </Button>
                        {message.timeMes && (
                            <p className="time-display">{message.timeMes.toDate().toLocaleString('uk-UA', { dateStyle: 'short', timeStyle: 'short' })}</p>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}
