import { useState } from 'react';
import {
   View, Text, TextInput, TouchableOpacity, FlatList, Image
  } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';


import { icons, SIZES } from '../../../constants';

import styles from './welcome.style'

const jobTypes = ["Fulltime", "Parttime", "Remote", "Freelance", "Temporary", "Internship", "Contract", "Commission", "Volunteer", "Apprenticeship"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Luka</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Search for job"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`)
              }}
            >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
        )}
        horizontal
        keyExtractor={(item) => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  )
}

export default Welcome