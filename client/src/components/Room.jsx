import React from 'react'

function Room({ username, room, setUsername, setRoom, setChatScreen, socket }) {

    const sendRoom = () => {
        socket.emit('room', room)
        setChatScreen(true)
    }

    return (
        <div className="flex items-center justify-center h-full">
            <div className='w-[450px] h-[300px] bg-indigo-600 flex flex-col items-center justify-center space-y-3 p-3 rounded-2xl'>
                <h1 className='font-bold text-2xl text-center mb-5'>Welcome to Chat!</h1>
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username' className='bg-indigo-300 border h-12 rounded-xl p-3 outline-0' />
                <input value={room} onChange={e => setRoom(e.target.value)} type="text" placeholder='Room' className='bg-indigo-300 border h-12 rounded-xl p-3 outline-0' />
                <div onClick={sendRoom} className='bg-indigo-900 h-12 pt-2 text-lg text-center rounded-2xl text-white cursor-pointer hover:bg-indigo-400 p-4 tracking-wider'>Go Chat</div>
            </div>
        </div>
    )
}

export default Room