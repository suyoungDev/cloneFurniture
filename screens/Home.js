import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native';
import styled from 'styled-components';
import { icons, images, COLORS, FONTS, SIZES } from '../constants/'

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${COLORS.white};
  padding-top: ${SIZES.padding/2}px;
`;
const Wrapper = styled.View`
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
`;
const Title = styled.Text`
  color: ${COLORS.black};
`;

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginHorizontal: SIZES.padding }}
      onPress={() => onPress(item)}
    >
      <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>
        {item.name}
      </Text>
        
    </TouchableOpacity>
  );

  return(
    <View style={{marginTop: SIZES.padding}}>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={ item => `${item.id}` }
      />
    </View>
  )
}


const Home =()=>{

  const [tabList, setTabList] = React.useState([
    {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
  ])

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: "Chair",
    title: 'chairs',
    productList: [
        {
            productId: 1,
            productName: 'Chair Green Colour',
            price: 10.00,
            image: images.greenChair,
        },
        {
            productId: 2,
            productName: 'Chair Peach Colour',
            price: 10.00,
            image: images.redChair,
        },
        {
            productId: 3,
            productName: 'Chair White Colour',
            price: 10.00,
            image: images.whiteChair,
        },

        ]
  })

  // rennder
  function renderTitle(title){
    return(
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Title style={{...FONTS.largeTitle}}>Collection of</Title>
        <Title style={{...FONTS.largeTitle}}>{title}</Title>
      </View>
    )
  }


  function renderHeader(){
    return(
     <View>
       <Wrapper>
          <View style={{flexDirection: 'row'}}>
            <Button
              onPress={() => {}}>
              <Image 
                  source={icons.menu} 
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25
                  }}
              />
            </Button>

            <Button style={{alignItems: 'flex-end'}}
              onPress={() => {}}>
              <Image 
                  source={icons.cart} 
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25
                  }}
              />
            </Button>
         </View>
       </Wrapper>
     </View> 
    )
  }

  return(
    <Container>
      <StatusBar backgroundColor="white" 
        barStyle='dark-content'></StatusBar>
      {renderHeader()}

      {renderTitle(selectedTab.title)}

      <ScrollableTab 
        tabList= {tabList}
        selectedTab= {selectedTab}
        onPress={(item) => setSelectedTab(item) }
      />
    </Container>
  )
}

export default Home;
