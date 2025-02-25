import React, { useEffect, useState } from 'react'

function Chat({ socket, username, room }) {

    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        socket.on('messageReturn', (data) => {
            setMessageList((prev) => [...prev, data])
        })
    }, [socket])


    const sendMessage = async () => {
        const messageContent = {
            username: username,
            message: message,
            room: room,
            date: 'Today'
        }
        await socket.emit('message', messageContent)
        setMessageList((prev) => [...prev, messageContent])
        setMessage('')
    }

    return (
        <div className='flex items-center justify-center h-full'>
            <div className="w-[500px] h-[600px] relative bg-gray-200" >
                <div className='w-full h-16 bg-gray-700 flex items-center p-3'>
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div className='w-full h-[400px] overflow-y-auto'>
                    {
                        messageList && messageList.map((msg, i) => (
                            <div className={`${username === msg.username ? 'flex justify-end' : ' '}`}>
                                <div className={`${username === msg.username ? 'bg-green-700 ' : 'bg-blue-800 '} w-3/5 h-12 text-white text-md m-2 mb-0 rounded-xl rounded-br-none p-1.5`}>
                                    <div>{msg.message}</div>
                                    <div className='w-full flex justify-end text-xs'>{msg.username} - {msg.date}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder='type message' className='w-3/4 h-12 border p-3 outline-0 rounded-xl' />
                    <button onClick={sendMessage} className='w-1/4 bg-indigo-600 text-white h-12 hover:bg-indigo-500 rounded-l-xl'>Send</button>
                </div>
            </div>
        </div >
    )
}

export default Chat