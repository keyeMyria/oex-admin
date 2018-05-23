/**
 * Created by leiyouwho on 11/4/2016.
 */

import React from 'react';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Menus/Menus.css';
import LOGO from '../../assets/images/logo.png';


const MenuHeader = () => {
  return (
    <View className={styles.MenusHeaderContainer}>
      <View><img src={LOGO} width="50" height="50" /></View>
      <View className={styles.sloganContainer}>
        <View className={styles.sloganTitle}>oex</View>
        <View className={styles.sloganSubtitle}>后台管理系统</View>
      </View>
    </View>
  );
};

export default MenuHeader;
