import React, { useState } from 'react'
import { GiftedChat, IMessage, User } from 'react-native-gifted-chat'
import { View, Dimensions } from 'react-native'
import './App.css'

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 123,
      text:
        'This is a test of Gifted Chat for the WEB 🎉 \n https://github.com/FaridSafi/react-native-gifted-chat ',
      user: {
        _id: 2,
        name: 'you',
        avatar: '/me.jpg',
      },
      createdAt: new Date(),
    },
    {
      _id: 456,
      text: '',
      video: 'https://media.giphy.com/media/3o6ZthZjk09Xx4ktZ6/giphy.mp4',
      user: {
        _id: 2,
        name: 'you',
        avatar: '/me.jpg',
      },
      createdAt: new Date(),
    },
  ])
  const onSend = (newMsg: IMessage[]) => setMessages([...messages, ...newMsg])
  const user: User = { _id: 1, name: 'me' }
  const inverted = false
  const { width, height } = Dimensions.get('window')
  return (
    <View style={{ width, height }}>
      <GiftedChat {...{ messages, onSend, user, inverted }} />
    </View>
  )
}

export default App
