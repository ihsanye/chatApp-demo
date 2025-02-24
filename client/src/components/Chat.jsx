import React from 'react'

function Chat() {
    return (
        <div className='flex items-center justify-center h-full'>
            <div className="w-[500px] h-[600px] relative bg-gray-200" >
                <div className='w-full h-16 bg-gray-700 flex items-center p-3'>
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div className='w-full h-[400px] overflow-y-auto'>
                    <div className="w-3/5 h-12 bg-blue-800 text-white text-md m-2 mb-0 rounded-xl rounded-bl-none p-1.5">
                        <div>deneme</div>
                        <div className='w-full flex justify-end text-xs'>tarih</div>
                    </div>
                    <div className="flex justify-end">
                        <div className="w-3/5 h-12 bg-green-800 text-white text-md m-2 mb-0 rounded-xl rounded-br-none p-1.5">
                            <div>deneme</div>
                            <div className='w-full flex justify-end text-xs'>tarih</div>
                        </div>
                    </div>

                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <input type="text" placeholder='type message' className='w-3/4 h-12 border p-3 outline-0 rounded-xl' />
                    <button className='w-1/4 bg-indigo-600 text-white h-12 hover:bg-indigo-500 rounded-l-xl'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat