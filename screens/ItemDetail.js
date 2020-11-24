import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, icons, SIZES } from '../constants';

const ItemDetail =({ route, navigation })=>{

  // render
  function renderHeader() {
    return(
      <View style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}
            onPress={() => {}}
          >
            <Image 
              source={icons.menu}
              resizeMode='contain'
              style={{
                tintColor: COLORS.white,
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
            onPress={() => {}}
          >
            <Image 
              source={icons.search}
              resizeMode='contain'
              style={{
                tintColor: COLORS.white,
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderInfo() {
    let { itemInfo } = route.params;
    
    if (itemInfo){
      return(
        <ImageBackground 
          source={itemInfo.image}
          resizeMode='cover'
          style={{width: '100%', height: '100%'}}
        >
          {renderHeader()}

        {/* Product Tag */}
        <View style={{
            position: 'absolute',
            top: '45%',
            left: '15%',
            backgroundColor: COLORS.transparentLightGray1,
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View style={{
              borderRadius: 20,
              backgroundColor: COLORS.blue,
              height: 10,
              width: 10
            }}
          >
          </View>
        </View>
        <View style={{
          position: 'absolute',
          top: '45%',
          left: '29%',
          flexDirection: 'row',
          padding: SIZES.radius * 1.5,
          backgroundColor: COLORS.transparentLightGray1,
          width: '50%',
          borderRadius: 10
        }}>
          <View style={{ flex : 2 }}>
            <Text style={{ color: COLORS.darkGray, ...FONTS.h3}}>
              {itemInfo.productName}
            </Text>
          </View>

          <View style={{flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>$ {itemInfo.price.toFixed(2)}</Text>
          </View>
        </View>
        
        </ImageBackground>
      )
    } else {
      <View>

      </View>
    }


  }

  return(
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderInfo()}
    </View>
  )
}

export default ItemDetail;