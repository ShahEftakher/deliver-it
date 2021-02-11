import React from 'react'
import { Header } from 'react-native-elements'
import { EvilIcons } from '@expo/vector-icons'

const HeaderComponent = ({ navigation }) => {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => {
          navigation.toggleDrawer()
        },
      }}
      centerComponent={{
        text: 'Deliver-it',
        style: { color: '#fff', fontSize: 17 },
      }}
      rightComponent={
        <EvilIcons
          name='user'
          size={34}
          color='white'
          onPress={() => navigation.navigate('Profile')}
        />
      }
      backgroundColor={'#ff0000'}
    />
  )
}

export default HeaderComponent
