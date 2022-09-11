import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Localization from '../../localization/LocalizedStrings';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

const DashBoard = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const cardData = [
    {
      num: 10,
      symbol: '%',
      badge: false,
    },
    {
      num: 32,
      symbol: '$',
      badge: true,
    },
    {
      num: 70,
      symbol: '$',
      badge: false,
    },
    {
      num: 10,
      symbol: '%',
      badge: true,
    },
    {
      num: 32,
      symbol: '$',
      badge: false,
    },
    {
      num: 70,
      symbol: '$',
      badge: false,
    },
  ];

  const data = [
    {
      image:
        'https://media.istockphoto.com/vectors/online-order-delivery-service-vector-concept-metaphor-vector-id1257972054?k=20&m=1257972054&s=612x612&w=0&h=6tjImnLHZnGflx1bBhEvULicWEd6OeSGG7UBg8NiQxw=',
      title: 'Order history',
      badge: false,
    },
    {
      image:
        'https://cdn4.vectorstock.com/i/1000x1000/56/13/transaction-history-flat-color-icon-vector-36215613.jpg',
      title: 'payment history',
      badge: false,
    },
    {
      image:
        'https://media.istockphoto.com/photos/trucks-on-a-road-city-map-concept-of-global-shipment-and-gps-tracking-picture-id1175689851?k=20&m=1175689851&s=612x612&w=0&h=dryNv68BNB4OmyABHrfcenOACQonpGxZpzkA_CMAE98=',
      title: 'tracking',
      badge: true,
    },
    {
      image:
        'https://images.theconversation.com/files/236859/original/file-20180918-158240-1jd9gm6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
      title: 'Statistics',
      badge: false,
    },
    {
      image:
        'https://cdn5.vectorstock.com/i/1000x1000/94/99/setting-vector-6359499.jpg',
      title: 'Settings',
      badge: false,
    },
    {
      image:
        'https://play-lh.googleusercontent.com/xDI28QeNJmbhidmXewIis1mJc_0ot67_WzCV9S0LUenxfakVbLdMEFs9elh2lbdqhyLG',
      title: 'Settings',
      badge: false,
    },
  ];

  const renderImagesItem = ({item}) => {
    return (
      <View
        style={{
          // padding: 15,
          marginHorizontal: '10%',
          // marginVertical: 5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          elevation: 1,
          height: 120,
          width: 120,
        }}>
        {item.badge && (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              position: 'absolute',
              top: -10,
              right: -10,
              backgroundColor: 'red',
            }}>
            <Text style={{color: '#fff', alignSelf: 'center'}}>1</Text>
          </View>
        )}
        <Image
          style={{width: 45, height: 45}}
          source={{
            uri: item.image,
          }}
        />
        <Text style={{fontSize: RFValue(14), fontWeight: '600'}}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#c8daed'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f0f5fc',
          marginTop: '10%',
          marginHorizontal: 2,
          borderRadius: 18,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon name="left" size={25} color="#900" />
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                height: 50,
                width: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                borderWidth: 2,
                borderColor: 'green',
              }}>
              <Text
                style={{
                  position: 'absolute',
                  borderWidth: 2,
                  borderColor: 'green',
                  top: -3,
                  right: -2,
                  backgroundColor: '#fff',
                  color: 'green',
                  fontSize: RFValue(14),
                  textAlign: 'center',
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                }}>
                0
              </Text>
              <Icon name="shoppingcart" size={25} color="#900" />
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                height: 50,
                width: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="menu-fold" size={25} color="#900" />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={{
              uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
            }}
          />
          <Text
            style={{fontSize: RFValue(16), fontWeight: '500', marginLeft: 20}}>
            Robert William
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#5d53df',
            marginTop: 25,
            borderRadius: 16,
          }}>
          <View>
            <ScrollView horizontal>
              {cardData.map(item => {
                return (
                  <View
                    style={{
                      backgroundColor: '#7b72fb',
                      margin: 20,
                      opacity: 0.8,
                      borderRadius: 12,
                    }}>
                    {item.badge && (
                      <View
                        style={{
                          height: 20,
                          width: 20,
                          borderRadius: 10,
                          position: 'absolute',
                          top: -10,
                          right: -10,
                          backgroundColor: 'red',
                        }}>
                        <Text style={{color: '#fff', alignSelf: 'center'}}>
                          1
                        </Text>
                      </View>
                    )}
                    {item.symbol === '%' ? (
                      <Text
                        style={{
                          color: '#fff',
                          padding: 25,
                          fontSize: RFValue(25),
                          fontWeight: '600',
                        }}>
                        {item.num}
                        {item.symbol}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#fff',
                          padding: 25,
                          fontSize: RFValue(25),
                          fontWeight: '600',
                        }}>
                        {item.symbol}
                        {item.num}
                      </Text>
                    )}
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              borderRadius: 18,
            }}>
            <View
              style={{
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <FlatList
                contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
                data={data}
                renderItem={renderImagesItem}
                numColumns={2}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashBoard;

const useStyles = theme =>
  StyleSheet.create({
    text: {
      color: theme.colors.primaryText,
    },
  });
