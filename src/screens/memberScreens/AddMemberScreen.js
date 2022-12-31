import React, { useContext, useLayoutEffect } from 'react'
import { Text } from 'react-native'
import MemberContext from '../../context/MemberContext'
import MemberForm from '../../components/memberComponents/MemberForm'

const AddMemberScreen = ({ navigation }) => {
  const { addMember } = useContext(MemberContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add Member',
      headerTitleAlign: 'center',
    })
  }, [])

  return (
    <MemberForm
      onSubmit={newMember => {
        addMember(newMember, () => navigation.navigate('Members'))
      }}
    />
  )
}

export default AddMemberScreen
