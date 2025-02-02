import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {
  const { refetch, loading, isLoggedin } = useGlobalContext();

  if (!loading && isLoggedin) return <Redirect href='/' />

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch({});
    }
    else {
      Alert.alert('Error', 'Failed to login');
    }
  }
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />
        <View className='px-10'>
          <Text className='text-center font-rubik text-base text-black-200 uppercase'>
            Welcome to restate
          </Text>
          <Text className='font-rubik-bold text-3xl text-center mt-2 text-black-300'>
            Let's Get You Closer to {"\n"}
            <Text className='text-primary-300 '>
              Your Dream Home
            </Text>
          </Text>

          <Text className='text-center font-rubik text-lg text-black-200 mt-12'>
            Login to ReState with Google
          </Text>

          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center justify-center'>
              <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn